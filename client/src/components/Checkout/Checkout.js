import React, { Component } from "react";
import Cart from '../Carts/Cart.js'
import axios from "axios"

class Checkout extends Component {
  
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

render() {

  return (
    <div>
<div className="sidenav-content"/>
 <div id="mySidenav" className="sidenav" />
    <div id="web-name">
        <h2><span><i className="far fa-star"></i></span> <br/> <span>Check</span>out</h2>             	
        <ul className="main-menu-social list-unstyled list-inline text-center">
            <li><a href="#"><span><i className="fab fa-facebook-f"></i></span></a></li>
            <li><a href="#"><span><i className="fab fa-pinterest"></i></span></a></li>
            <li><a href="#"><span><i className="fab fa-dribbble"></i></span></a></li>
            <li><a href="#"><span><i className="fab fa-google-plus-g"></i></span></a></li>
        </ul>  
    </div>

    <div id="main-menu">
        
        <div className="list-group panel">
            
            <a href="contact.html" className="list-group-item"><span>              
                <Cart update={this.updateCart}
                    products={this.state.products}
                    delete={this.deleteItem} />
            </span>Items</a>
            <a href="login.html" className="list-group-item"><span></span>Total</a>
        
        </div>
        <div className="form-group">
                                 <select class="form-control">
                                    <option selected="">Choose Payment</option>
                                    <option>VISA</option>
                                    <option>Credit Card</option>
                                    <option>Paypal</option>
                                 </select><i className="fa fa-lock sidebar-icon"></i>
                            </div>
                                        
                                <div className="form-group">
                                  <input type="text" class="form-control" placeholder="Card Number" required=""/>
                                </div>   

                            <div className="row">
                                <div className="col-xs-6 col-sm-6">
                                    <div className="form-group">
                                         <input type="text" className="form-control dpd" placeholder="Expire Date" required=""/>
                                    </div>
                                </div>
                                    
                                <div className="col-xs-6 col-sm-6">
                                    <div className="form-group">
                                         <input type="text" className="form-control" placeholder="CVV Code" required=""/>
                                    </div>
                                </div>
                            </div>                     
        
        <div className="sidenav-closebtn">
            <button className="btn btn-default" id="sidenav-close"> Pay</button>
        </div>

    </div>
</div>
    );
  
   }

  }

    export default Checkout;


    