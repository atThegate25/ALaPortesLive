import React, { Component } from 'react'
import './Vendors.css'

export default class Vendors extends Component {
    render() {
        return (
            // <div className="container">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                {/* <!-- Indicators --> */}
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="item active">
                        <img className="first-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="First slide" />
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Enter your Airport to get started</h1>
                                <form className="form-horizontal">
                                    <fieldset>
                                        <div class="form-group">
                                            <div class="col-md-12">
                                                <input id="textinput" name="textinput" type="text" placeholder="placeholder" class="form-control input-md" />
                                            </div>
                                            <div>
                                            <p><a className="btn btn-lg btn-primary form-group" href="#" role="button">Go</a></p>
                                        </div>
                                        </div>
                                    </fieldset>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
            // </div>
        )
    }
}