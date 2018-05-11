import React, { Component } from "react";

class Checkout extends Component {

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
            
            <a href="contact.html" className="list-group-item"><span><i className="fa fa-phone sidebar-icon"></i></span>Items</a>
            <a href="login.html" className="list-group-item"><span><i className="fa fa-lock sidebar-icon"></i></span>Total</a>
            <a href="register.html" className="list-group-item"><span><i className="fa fa-user-plus sidebar-icon"></i></span>Credit Card</a>
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