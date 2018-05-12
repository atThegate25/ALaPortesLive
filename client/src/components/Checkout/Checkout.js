import React, { Component } from "react";
import Cart from '../Carts/Cart.js'
import axios from "axios"

class Checkout extends Component {
    
    state = {

        value: 0,
        products: [],
        flights: [],
        gate: "",
        terminal: ""
    }
    
    updateCart = () => {
        axios.get("/pbyapi/api/").then((response) => {
            
            this.setState({
                products: response.data
            })
            console.log(this.state.products)
        });
    } 
    
    // componentDidMount ()  {
    //     axios.get("/flight/api/").then((data) => {
    //         console.log(data)
            
    //         this.setState({
    //             flights: data,
    //             // gate: response.gate
    //         })
    //     });
    // } 
    
    render() {
       
        
  return (
    <div>
<div className="sidenav-content"/>
 <div id="mySidenav" className="sidenav" />
    <div id="web-name">
        <h2><span><i className="far fa-star"></i></span> <br/> <span>Check</span>out</h2>             	
    </div>

    <div id="main-menu">
        
        
        <div className="list-group panel">
            
            <a ><span>              
                <Cart update={this.updateCart}
                    products={this.state.products}
                    delete={this.deleteItem} />
            </span>Items</a>

        
        </div>
        <div className="form-group m2">
                                 <select class="form-control">
                                    <option selected="">Choose Payment</option>
                                    <option>VISA</option>
                                    <option>Credit Card</option>
                                    <option>Paypal</option>
                                 </select><i className="fa fa-lock sidebar-icon"></i>
                            </div>
                                        
                                <div className="form-group m2">
                                  <input type="text" class="form-control" placeholder="Card Number" required=""/>
                                </div>   

                            <div className="row">
                                <div className="col-xs-6 col-sm-6">
                                    <div className="form-group m2">
                                         <input type="text" className="form-control dpd" placeholder="Expire Date" required=""/>
                                    </div>
                                </div>
                                    
                                <div className="col-xs-6 col-sm-6">
                                    <div className="form-group m2">
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


    