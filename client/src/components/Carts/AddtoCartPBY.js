import React, { Component } from "react";
import axios from "axios";
import PotbellyCart from './PotbellyCart'
// import CheckoutSummary from '../Checkout/CheckoutSummary'
import menuItems from './CartUtils/mcdonalds.json'

class AddtoCartPBY extends Component {
    state = {
        name: menuItems[0].name,
        quantity: 0

    }

    handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }
    addProductHandler = () => {
        const data = {
            name: this.state.name,
            quantity: this.state.quantity
        };

        axios.post("/pbyapi/api/", data).then(data => console.log("Success!"));
        console.log(menuItems)
    }
    render() {
        return (
            <div>
                {/* <input placeholder="Product Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleInputChange} />
                <input placeholder="Product quantity"
                    type="number"
                    name="quantity"
                    value={this.state.quantity}
                    onChange={this.handleInputChange} />
                <button onClick={this.addProductHandler}>Add Product</button> */}


                <div className="row">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1 product-section-divider">
                            <h2 className="text-center">$2 Items</h2>
                            <div className="row">
                            
                                {menuItems.map(menuItem => {return (
                                <div className="col-md-3 col-xs-6 product-image text-center">
                                    <img src={menuItem.image} className="img-responsive center-block" alt="Bacon McDouble®" title="" />
                                    <h3>{menuItem.name}</h3>
                                    <a href="https://www.mcdonalds.com/us/en-us/product/bacon-mcdouble.html" target="_self" data-at="D123LandingPage:Bacon McDouble" data-track="promotion" className="learn-more" aria-label="Learn More About Bacon McDouble®">Learn more  </a>
                                    <br />
                                    <input placeholder="Product quantity"
                                        type="number"
                                        name="quantity"
                                        value={this.state.quantity}
                                        onChange={this.handleInputChange} />
                                    <button onClick={this.addProductHandler} className="btn btn-danger my-cart-btn" data-id="1" data-name="product 1" data-summary="summary 1" data-price="10" data-quantity="1" data-image="">  <strong>Add to Cart</strong></button>
                                </div>
                                    )}) }
                            </div>
                        </div>
                    </div>
                </div>
                 <PotbellyCart />
                 {/* <CheckoutSummary /> */}
            </div>
        );
    }
}
export default AddtoCartPBY;