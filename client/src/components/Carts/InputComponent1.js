import React, { Component } from 'react';
import '../css'


export default class InputComponent1 extends Component {
    state = {
        value: 1

    }
    handleInputChange = (event) => {
  
        const value = event.target.value;
  

        this.setState({
            value: value
        });
    }
    render() {

        const menuItem = this.props.menuItem
        return (
            <ul className="list-unstyled">
                <li>
                    <div className="dish-list">
                        <a href="menu-detail.html"><img src={menuItem.image} className="img-responsive" alt="dish-menu" /></a>
                        <div className="dish-list-text">
                            <h4><a href="menu-detail.html">{menuItem.name}</a></h4>
                            <h5>${menuItem.price}</h5>
                            <input className="form-control" placeholder="Product quantity"
                                type="number"
                                style={{width: "55px", display: "inline-block", "margin-right": "4px", "margin-bottom": "10px"}}
                                name={menuItem.name}
                                value={this.state.value}
                                min="1"
                                onChange={this.handleInputChange.bind(this)} />
                            <button onClick={() => this.props.addToCart(menuItem.name, menuItem.price, this.state.value, menuItem.image)} 
                            className="btn" >Add to cart!
                            <span><i className="fa fa-shopping-cart" data-name={menuItem.name} data-summary="summary 1" data-price="10" data-quantity="1">
                            </i></span></button>
                        </div>
                        {/* <!-- end dish-list-text --> */}
                    </div>
                </li>
            </ul>
        )
    }
}
