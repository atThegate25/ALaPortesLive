import React, { Component } from "react";
import axios from "axios";
import '../css'
import PotbellyCart from './PotbellyCart'
// import CheckoutSummary from '../Checkout/CheckoutSummary'
import menuItems from './CartUtils/mcdonalds.json'
import InputComponent1 from './InputComponent1'
import Cart from './Cart'

class AddtoCartPBY extends Component {
    state = {
        // name: menuItems[0].name,
        value: 0,
        products: []

    }

    updateCart = () => {
        axios.get("/pbyapi/api/").then((response) => {

            this.setState({
                products: response.data
            })
            console.log(this.state.products)
        });
    }
    deleteItem = (event) => {
        const id = event.target.value;
        axios.delete(`/pbyapi/api/${id}`).then(response => {
            this.setState({
                products: this.state.products.filter(product => product._id !== id)
            });
        });
    }
    addProductHandler = (name, price, quantity, image) => {
        // console.log(event)
        const data = {
            name: name,
            quantity: quantity,
            price: price,
            image: image
        };
        console.log(data)

        axios.post("/pbyapi/api/", data).then(data => this.updateCart());

    }
    render() {
        return (
            <body className="page-body">
            <section className="page-wrapper innerpage-section-padding">
            <div id="menu-page" className="menu-list">
            <div className="container-fluid text-center menu">
                <div id="lunch-dishes" className="tab-pane fade active in">
                    {menuItems.map(menuItem => {
                        return (
                            <InputComponent1 menuItem={menuItem}
                                addToCart={this.addProductHandler} />
                        )
                    })}
                </div>
                <Cart update={this.updateCart}
                    products={this.state.products}
                    delete={this.deleteItem} />
                {/* <CheckoutSummary /> */}
            </div >
            </div>
            </section>
            </body>
        );
    }
}
export default AddtoCartPBY;