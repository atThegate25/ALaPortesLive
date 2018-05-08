import React, { Component } from 'react';


export default class ComponentName extends Component {
    render() {
        return (
            <div className="widget-body">
                <form method="post" action="#">
                    <div className="row">
                        <div className="col-sm-6 margin-b-30">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>First Name*</label>
                                        <input type="text" className="form-control" placeholder="John" />
                                    </div>
                                    {/* <!--cart summary--> */}
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Last Name*</label>
                                        <input type="text" className="form-control" placeholder="Doe" />
                                    </div>
                                    {/* <!--cart summary--> */}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Country*</label>
                                        <select className="form-control">
                                            <option>India</option>
                                            <option>USA</option>
                                            <option>UK</option>
                                            <option>Australia</option>
                                            <option>Japan</option>
                                            <option>Columbia</option>
                                            <option>Poland</option>
                                        </select>
                                    </div>
                                    {/* <!--cart summary--> */}
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Company Name</label>
                                        <input type="text" className="form-control" placeholder="Lorem ipsum" /> </div>
                                    {/* <!--cart summary--> */}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label>Full Address*</label>
                                        <input type="text" className="form-control" placeholder="124, Lorem Street.." /> </div>
                                    {/* <!--cart summary--> */}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>City / State*</label>
                                        <input type="text" className="form-control" placeholder="Jaipur" /> </div>
                                    {/* <!--cart summary--> */}
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Zip/ Postal Code*</label>
                                        <input type="text" className="form-control" placeholder="302012" /> </div>
                                    {/* <!--cart summary--> */}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Email Address*</label>
                                        <input type="text" className="form-control" placeholder="john@doe.com" /> </div>
                                    {/* <!--cart summary--> */}
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>phone*</label>
                                        <input type="text" className="form-control" placeholder="123-345-3322" /> </div>
                                    {/* <!--cart summary--> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="cart-totals margin-b-20">
                                <div className="cart-totals-title">
                                    <h4>Cart Summary</h4> </div>
                                <div className="cart-totals-fields">
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <td>Cart Subtotal</td>
                                                <td>$29.00</td>
                                            </tr>
                                            <tr>
                                                <td>Shipping &amp; Handling</td>
                                                <td>$2.00</td>
                                            </tr>
                                            <tr>
                                                <td className="text-color"><strong>Total</strong></td>
                                                <td className="text-color"><strong>$31.00</strong></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {/* <!--cart summary--> */}
                            <div className="payment-option">
                                <ul className=" list-unstyled">
                                    <li>
                                        <label className="custom-control custom-radio  m-b-20">
                                            <input id="radioStacked1" name="radio-stacked" type="radio" className="custom-control-input" /> <span className="custom-control-indicator"></span> <span className="custom-control-description">Payment on delivery</span>
                                            <br /> <span>Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="custom-control custom-radio  m-b-10">
                                            <input name="radio-stacked" type="radio" className="custom-control-input" /> <span className="custom-control-indicator"></span> <span className="custom-control-description">Paypal <img src="images/paypal.jpg" alt="" width="90" /></span> </label>
                                    </li>
                                </ul>
                                <p className="text-xs-center"> <a href="#" className="btn btn-outline-success btn-block">Pay now</a> </p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}