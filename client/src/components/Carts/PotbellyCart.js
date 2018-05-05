import React, { Component } from "react"
import McDonalds from './McDonaldsHeader/McDonaldsHeader'
import { starbucks } from './img'
import axios from "axios";
import {Link} from 'react-router-dom'
import pbellyList from './CartUtils/potbelly.json'

export default class Cart extends Component {
    state = {
        name: "",
        price: 0
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value    
        });
    }
    
   addtoCartHandler = () => {
        const data = {
            name: this.state.name,
            price: this.state.price
        };

        axios.post("/api/", data).then(data => console.log("Success!"));
    }
    render() {
        const allProducts = this.state.products.map(product => {
            return (<li key={product._id}>
                        {product.name} - ${product.price} 
                        <Link to={"/edit/" + product._id}>✏</Link>
                        <button onClick={this.deleteProduct} value={product._id}>🗑</button>
                    </li>)
        });

        return (
            <div>
                <div>
                    <McDonalds />
                </div>
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
                                    <button className="btn btn-danger my-cart-btn" data-id="1" data-name="product 1" data-summary="summary 1" data-price="10" data-quantity="1" data-image="">  <strong>Add to Cart</strong></button>
                                </div>
                                <div className="col-md-3 col-xs-6 product-image text-center">
                                    <img src="https://www.mcdonalds.com/content/dam/usa/documents/d123/products/tenders.png" className="img-responsive center-block" alt="2 Pc. Buttermilk Crispy Tenders" title="" />
                                    <h3>2 Pc. Buttermilk Crispy Tenders</h3>
                                    <a href="https://www.mcdonalds.com/us/en-us/product/buttermilk-crispy-chicken-tenders-4-piece.html" target="_self" data-at="D123LandingPage:2 Pc Buttermilk Crispy Tenders" data-track="promotion" className="learn-more" aria-label="Learn More About 2 Pc. Buttermilk Crispy Tenders">Learn more  </a>
                                    <br />
                                    <button className="btn btn-danger my-cart-btn" data-id="1" data-name="product 1" data-summary="summary 1" data-price="10" data-quantity="1" data-image="">  <strong>Add to Cart</strong></button>
                                </div>
                                <div className="col-md-3 col-xs-6 product-image text-center">
                                    <img src="https://www.mcdonalds.com/content/dam/usa/documents/d123/products/mcgriddle.png" className="img-responsive center-block" alt="Sausage McGriddles®" title="" />
                                    <h3>Sausage McGriddles®</h3>
                                    <a href="https://www.mcdonalds.com/us/en-us/product/sausage-mcgriddles.html" target="_self" data-at="D123LandingPage:Sausage McGriddles" data-track="promotion" className="learn-more" aria-label="Learn More About Sausage McGriddles®">  Learn more  </a>
                                    <br />
                                    <button className="btn btn-danger my-cart-btn" data-id="1" data-name="product 1" data-summary="summary 1" data-price="10" data-quantity="1" data-image="">  <strong>Add to Cart</strong></button>
                                </div>
                                <div className="col-md-3 col-xs-6 product-image text-center">
                                    <img src="https://www.mcdonalds.com/content/dam/usa/documents/d123/products/mccafe.png" className="img-responsive center-block" alt="Hot &amp; cold McCafé® beverages in glass cups" title="" />
                                    <h3>Small McCafé®</h3>
                                    <br />
                                    <a href="https://www.mcdonalds.com/us/en-us/full-menu/mccafe.html" target="_self" data-at="D123LandingPage:Small McCafé" data-track="promotion" className="learn-more" aria-label="Learn More About Small McCafé®">Learn more </a>
                                    <br />
                                    <button onClick={this.addProductHandler} className="btn btn-danger my-cart-btn" data-id="1" data-name="product 1" data-summary="summary 1" data-price="10" data-quantity="1" data-image="">  <strong>Add to Cart</strong></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}