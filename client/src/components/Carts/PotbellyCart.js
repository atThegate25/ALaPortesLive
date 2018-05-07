import React, { Component } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

class PotbellyCart extends Component {
    state = {
        products: []
    }

    deleteProduct = (event) => {
        const id = event.target.value;
        axios.delete(`/api/${id}`).then(response => {
            this.setState({
                products: this.state.products.filter(product => product._id !== id)
            });
        });
    }
    componentDidMount = () => {
        // componentDidMount (LifeCycle)
        // request from the server all of the products
        axios.get("/api/").then((response) => {
            // ??? what do we do with the data?
            console.log(response)
            this.setState({
                products: response.data
            })
        });
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
                <h1>All Products</h1>
                <ul>
                    { allProducts }
                </ul>
            </div>
        );
    }
}

export default PotbellyCart;