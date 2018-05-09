import React, { Component } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

class PotbellyCart extends Component {
    state = {
        products: [

        ]
    }
    
    deleteProduct = (event) => {
            const id = event.target.value;
            axios.delete(`/pbyapi/api/:${id}`).then(response => {
                    this.setState({
                            products: this.state.products.filter(product => product._id !== id)
                        });
                    });
                }
                componentDidMount = () => {
                    // componentDidMount (LifeCycle)
                    // request from the server all of the products
                    axios.get("/pbyapi/api/").then((response) => {
                        
                        this.setState({
                            products: response.data
                        })
                        console.log(this.state.products)
                    });
                }
                render() {
        const allProducts = this.state.products.map(product => {
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