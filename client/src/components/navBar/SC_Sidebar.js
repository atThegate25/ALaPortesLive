import React, { Component } from 'react';
import '../css'


export default class SC_Sidebar extends Component {

    componentWillMount() {
        // sets the initial state
        this.setState({
          isMenuOpened: false
        })
      }
    render() {
        return (

            
                <div id="shopping-cart-sidebar" className="shc-sidebar to-right-toggle">
                    <ul className="list-unstyled cart-list">
                        <li>
                            <div className="cart-item">
                                <div className="item-text dish-list-text">
                                    <h4><a href="#">Breakfast-3</a></h4>
                                    <p>Lorem ipsum,dolor</p>
                                    <h5>Qty: <input className="form-control" min="1" value="1" type="number" /> x $45</h5>
                                </div>
                                {/* <!-- end item-text --> */}

                                <div className="item-img">
                                    <a href="#"><img src="images/dish-breakfast-3.png" className="img-responsive" alt="cart-item-img" /></a>
                                </div>
                                {/* <!-- end item-img --> */}

                                <h4 className="total">Total: <span>$45</span></h4>

                                <div className="item-close">
                                    <button className="btn"><span><i className="fa fa-times-circle"></i></span></button>
                                </div>
                                {/* <!-- end item-close --> */}
                            </div>
                            {/* <!-- end cart-item --> */}
                        </li>

                        <li>
                            <div className="cart-item">
                                <div className="item-text dish-list-text">
                                    <h4><a href="#">Dinner-4</a></h4>
                                    <p>Lorem ipsum,dolor</p>
                                    <h5>Qty: <input className="form-control" min="1" value="1" type="number" /> x $45</h5>
                                </div>
                                {/* <!-- end item-text --> */}

                                <div className="item-img">
                                    <a href="#"><img src="images/dish-dinner-4.png" className="img-responsive" alt="cart-item-img" /></a>
                                </div>
                                {/* <!-- end item-img --> */}

                                <h4 className="total">Total: <span>$45</span></h4>

                                <div className="item-close">
                                    <button className="btn"><span><i className="fa fa-times-circle"></i></span></button>
                                </div>
                                {/* <!-- end item-close --> */}
                            </div>
                            {/* <!-- end cart-item --> */}
                        </li>
                    </ul>

                    <div className="cart-info text-right">
                        <h4>Item(s) : <span>2</span></h4>
                        <h4>Total Price: <span>$90.00</span></h4>
                        <a href="shopping-cart.html" className="btn btn-black">View Cart</a>
                        <a href="checkout.html" className="btn btn-orange">Checkout</a>
                    </div>
                    {/* <!-- end cart-info --> */}
                </div>
            
        )
    }
}