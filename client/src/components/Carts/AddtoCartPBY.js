import React, { Component } from "react";
import axios from "axios";
import PotbellyCart from './PotbellyCart'
import CheckoutSummary from '../Checkout/CheckoutSummary'
import menuItems from './CartUtils/mcdonalds.json'
import InputComponent from './InputComponent'

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
    addProductHandler = (name) => {
        // console.log(event)
        const data = {
            name: name,
            quantity: this.state.quantity
        };

        axios.post("/pbyapi/api/", data).then(data => this.updateCart());
        
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1 product-section-divider">
                            <h2 className="text-center">$2 Items</h2>
                            <div className="row">
                            
                                {menuItems.map(menuItem => {return (
                                <InputComponent menuItem={menuItem}
                                addToCart={this.addProductHandler}/>
                                    )}) }
                            </div>
                        </div>
                    </div>
                </div>
                 <PotbellyCart update={this.updateCart}
                                products={this.state.products}
                                delete={this.deleteItem}/>
                 {/* <CheckoutSummary /> */}
            </div>
        );
    }
}
export default AddtoCartPBY;