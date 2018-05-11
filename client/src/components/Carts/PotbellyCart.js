import React, { Component } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

class PotbellyCart extends Component {

    
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
                        {product.name} - ${product.quantity} 
                        <Link to={"pbyapi/edit/" + product._id}>✏</Link>
                        <button onClick={this.deleteProduct} value={product._id}>🗑</button>
                    </li>)
        });
        return (
            <div>
                <h1>All Products</h1>
                <ul>
                    { allProducts }
                </ul>
            </div>
        );
    }
}

export default PotbellyCart;