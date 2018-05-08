import React, {Component} from 'react';


export default class ComponentName extends Component {
render() {
return (
    <div className="top-links">
                <div className="container">
                    <ul className="row links">
                        <li className="col-xs-12 col-sm-3 link-item active"><span>1</span><a href="index.html">Choose Your Location</a></li>
                        <li className="col-xs-12 col-sm-3 link-item active"><span>2</span><a href="restaurants.html">Choose Restaurant</a></li>
                        <li className="col-xs-12 col-sm-3 link-item active"><span>3</span><a href="profile.html">Pick Your favorite food</a></li>
                        <li className="col-xs-12 col-sm-3 link-item"><span>4</span><a href="checkout.html">Order and Pay online</a></li>
                    </ul>
                </div>
            </div>
)
}
}