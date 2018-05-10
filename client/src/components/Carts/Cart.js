
import React, { Component } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
export default class Cart extends Component {


    deleteProduct = (event) => {
        this.props.delete(event)
    }
    componentDidMount = () => {
        // componentDidMount (LifeCycle)
        // request from the server all of the products
        this.props.update()
    }
    render() {
        const allProducts = this.props.products.map(product => {
            return (<li>
                <div className="cart-item">
                    <div className="item-text dish-list-text">
                        <h4><a href="#">Your Order</a></h4>
                        <p>{product.name}</p>
                        <h5>Qty: <input className="form-control" min="1" value={product.quantity} type="number" /> x ${product.price}</h5>
                    </div>
                    {/* <!-- end item-text --> */}

                    <div className="item-img">
                        <a href="#"><img src={product.image} className="img-responsive" alt="cart-item-img" /></a>
                    </div>
                    {/* <!-- end item-img --> */}

                    <h4 className="total">Total: <span>${product.quantity + product.price}</span></h4>

                    <div className="item-close">
                        <button onClick={this.deleteProduct} value={product._id} className="btn"><span><i className="fa fa-times-circle"></i></span></button>
                    </div>
                    {/* <!-- end item-close --> */}
                </div>
                {/* <!-- end cart-item --> */}
            </li>
            )
        });
        const total = allProducts.forEach(this.quantity , this.price => {this.quantity * this.price});
        console.log(total)
        return (
            <section className="page-wrapper innerpage-section-padding">
                <div id="shopping-cart-page">
                    <div className="container-fluid">
                        <div className="innerpage-heading text-center">
                            <h3>Your Cart</h3>
                        </div>
                        {/* <!-- end innerpage-heading --> */}
                        <ul className="list-unstyled cart-list">
                            {allProducts}
                        </ul>
                        <div className="cart-info text-right">
                            <h4>Item(s) : <span>{this.length}</span></h4>
                            <h4>Total Price: <span>${total}</span></h4>
                            <a href="menu-list.html" className="btn btn-black">Continue Shopping</a>
                            <a href="checkout.html" className="btn btn-orange">Checkout</a>
                        </div>
                        {/* <!-- end cart-info --> */}

                    </div >
                    {/* <!-- end container-fluid --> */}
                </div >
                {/* <!-- end shopping-cart-page --> */}
            </section >
        )
    }
}