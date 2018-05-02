import React, { Component } from "react"

export default class Cart extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-3 text-center">
                        <img src="images/img_1.png" width="150px" height="150px" />
                        <br />
                        product 1 - <strong>$10</strong>
                        <br />
                        <button className="btn btn-danger my-cart-btn" data-id="1" data-name="product 1" data-summary="summary 1" data-price="10" data-quantity="1" data-image="images/img_1.png">Add to Cart</button>
                        <a href="#" className="btn btn-info">Details</a>
                    </div>

                    <div className="col-md-3 text-center">
                        <img src="images/img_2.png" width="150px" height="150px" />
                        <br />
                        product 2 - <strong>$20</strong>
                        <br />
                        <button className="btn btn-danger my-cart-btn" data-id="2" data-name="product 2" data-summary="summary 2" data-price="20" data-quantity="1" data-image="images/img_2.png">Add to Cart</button>
                        <a href="#" className="btn btn-info">Details</a>
                    </div>

                    <div className="col-md-3 text-center">
                        <img src="images/img_3.png" width="150px" height="150px" />
                        <br />
                        product 3 - <strong>$30</strong>
                        <br />
                        <button className="btn btn-danger my-cart-btn" data-id="3" data-name="product 3" data-summary="summary 3" data-price="30" data-quantity="1" data-image="images/img_3.png">Add to Cart</button>
                        <a href="#" className="btn btn-info">Details</a>
                    </div>

                    <div className="col-md-3 text-center">
                        <img src="images/img_4.png" width="150px" height="150px" />
                        <br />
                        product 4 - <strong>$40</strong>
                        <br />
                        <button className="btn btn-danger my-cart-btn" data-id="4" data-name="product 4" data-summary="summary 4" data-price="40" data-quantity="1" data-image="images/img_4.png">Add to Cart</button>
                        <a href="#" className="btn btn-info">Details</a>
                    </div>

                    <div className="col-md-3 text-center">
                        <img src="images/img_5.png" width="150px" height="150px" />
                        <br />
                        product 5 - <strong>$50</strong>
                        <br />
                        <button className="btn btn-danger my-cart-btn" data-id="5" data-name="product 5" data-summary="summary 5" data-price="50" data-quantity="1" data-image="images/img_5.png">Add to Cart</button>
                        <a href="#" className="btn btn-info">Details</a>
                    </div>

                </div>
            </div>
        )
    }

}