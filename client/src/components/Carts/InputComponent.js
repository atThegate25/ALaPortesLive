import React, {Component} from 'react';


export default class InputComponent extends Component {
    state = {
        value: 0

    }
    handleInputChange = (event) => {
        // const name = event.target.name;
        const value = event.target.value;
        // console.log (name + value)
        console.log(event.target)

        this.setState({
            value: value
        });
    }
render() {

    const menuItem = this.props.menuItem
    return (
        <div className="col-md-3 col-xs-6 product-image text-center">
            <img src={menuItem.image} className="img-responsive center-block" alt="Bacon McDouble®" title="" />
            <h3>{menuItem.name}</h3>
            {/* <a href="https://www.mcdonalds.com/us/en-us/product/bacon-mcdouble.html" target="_self" data-at="D123LandingPage:Bacon McDouble" data-track="promotion" className="learn-more" aria-label="Learn More About Bacon McDouble®">Learn more  </a> */}
            <br />
            <input placeholder="Product quantity"
                type="number"
                name={menuItem.name}
                value={this.state.value}
                onChange={this.handleInputChange.bind(this)} />
            <button onClick={() => this.props.addToCart(menuItem.name)} className="btn btn-danger my-cart-btn" data-id="1" data-name={menuItem.name} data-summary="summary 1" data-price="10" data-quantity="1" data-image="">  <strong>Add to Cart</strong></button>
        </div>
            )}

}
