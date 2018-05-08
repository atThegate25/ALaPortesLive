import React, { Component } from "react";
import axios from "axios";
import mcDeeMenu from './CartUtils/mcdonalds.json'

class AddtoCartMCD extends Component {
    state = {
        name: "hardcode",
        quantity: 1
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name + value)
        this.setState({
            [name]: value
        });
    }
    addProductHandler = (event) => { console.log(mcDeeMenu[0].name)
        const data = {
            name: mcDeeMenu[0].name,
            quantity: this.state.quantity
        };
        console.log(data)
        axios.post("/api/", data).then(data => console.log("Success!"+data));
    }

    render() {
        return (
            <div>
                <input placeholder="Product Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleInputChange} />
                <input placeholder="Product quantity"
                    type="number"
                    name="quantity"
                    value={this.state.quantity}
                    onChange={this.handleInputChange} />
                <button onClick={this.addProductHandler}>Add Product</button>


                <div className="row">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1 product-section-divider">
                            <h2 className="text-center">$2 Items</h2>
                            <div className="row">
                                <div className="col-md-3 col-xs-6 product-image text-center">
                                    <img src="https://www.mcdonalds.com/content/dam/usa/documents/d123/products/bacon_mcdouble.png" className="img-responsive center-block" alt="Bacon McDouble®" title="" />
                                    <h3>Bacon McDouble® $10.00</h3>
                                    <a href="https://www.mcdonalds.com/us/en-us/product/bacon-mcdouble.html" target="_self" data-at="D123LandingPage:Bacon McDouble" data-track="promotion" className="learn-more" aria-label="Learn More About Bacon McDouble®">Learn more  </a>
                                    <br />
                                    <input placeholder="Product quantity"
                                        type="number"
                                        name={mcDeeMenu[0].name}
                                        value={this.state.quantity}
                                        onChange={this.handleInputChange} />
                                    <button onClick={this.addProductHandler} className="btn btn-danger my-cart-btn" data-id="1" data-name="product 1" data-summary="summary 1" data-price="10" data-quantity="1" data-image="">  <strong>Add to Cart</strong></button>
                                </div>
                                <div className="col-md-3 col-xs-6 product-image text-center">
                                    <img src="https://www.mcdonalds.com/content/dam/usa/documents/d123/products/tenders.png" className="img-responsive center-block" alt="2 Pc. Buttermilk Crispy Tenders" title="" />
                                    <h3>2 Pc. Buttermilk Crispy Tenders</h3>
                                    <a href="https://www.mcdonalds.com/us/en-us/product/buttermilk-crispy-chicken-tenders-4-piece.html" target="_self" data-at="D123LandingPage:2 Pc Buttermilk Crispy Tenders" data-track="promotion" className="learn-more" aria-label="Learn More About 2 Pc. Buttermilk Crispy Tenders">Learn more  </a>
                                    <br />
                                    <input placeholder="Product quantity"
                                        type="number"
                                        name="quantity"
                                        value={this.state.quantity}
                                        onChange={this.handleInputChange} />
                                    <button onClick={this.addProductHandler} className="btn btn-danger my-cart-btn" data-id="1" data-name="product 1" data-summary="summary 1" data-price="10" data-quantity="1" data-image="">  <strong>Add to Cart</strong></button>
                                </div>
                                <div className="col-md-3 col-xs-6 product-image text-center">
                                    <img src="https://www.mcdonalds.com/content/dam/usa/documents/d123/products/mcgriddle.png" className="img-responsive center-block" alt="Sausage McGriddles®" title="" />
                                    <h3>Sausage McGriddles®</h3>
                                    <a href="https://www.mcdonalds.com/us/en-us/product/sausage-mcgriddles.html" target="_self" data-at="D123LandingPage:Sausage McGriddles" data-track="promotion" className="learn-more" aria-label="Learn More About Sausage McGriddles®">  Learn more  </a>
                                    <br />
                                    <input placeholder="Product quantity"
                                        type="number"
                                        name="quantity"
                                        value={this.state.quantity}
                                        onChange={this.handleInputChange} />
                                    <button onClick={this.addProductHandler} className="btn btn-danger my-cart-btn" data-id="1" data-name="product 1" data-summary="summary 1" data-price="10" data-quantity="1" data-image="">  <strong>Add to Cart</strong></button>
                                </div>
                                <div className="col-md-3 col-xs-6 product-image text-center">
                                    <img src="https://www.mcdonalds.com/content/dam/usa/documents/d123/products/mccafe.png" className="img-responsive center-block" alt="Hot &amp; cold McCafé® beverages in glass cups" title="" />
                                    <h3>Small McCafé®</h3>
                                    <br />
                                    <a href="https://www.mcdonalds.com/us/en-us/full-menu/mccafe.html" target="_self" data-at="D123LandingPage:Small McCafé" data-track="promotion" className="learn-more" aria-label="Learn More About Small McCafé®">Learn more </a>
                                    <br />
                                    <input placeholder="Product quantity"
                                        type="number"
                                        name="quantity"
                                        value={this.state.quantity}
                                        onChange={this.handleInputChange} />
                                    <button onClick={this.addProductHandler} className="btn btn-danger my-cart-btn" data-id="1" data-name="product 1" data-summary="summary 1" data-price="10" data-quantity="1" data-image="">  <strong>Add to Cart</strong></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.quantity > 0 && <dummycomponent />}
            </div>
        );
    }
}
export default AddtoCartMCD;