import React, {Component} from 'react';

export default class NavButton extends Component {
    render() {
        return (
            <div>
            <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
                <a className="navbar-brand" href="#">Login dropdown</a>
            </div>
        )
    }
}
