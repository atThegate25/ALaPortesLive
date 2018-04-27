import React, {Component} from 'react';
import NavInternals from './NavInternals'
export default class NavBar extends Component {
    //function to login to site
    
    
    render() {
        return (
            <nav className="navbar navbar-default navbar-inverse" role="navigation">
                
                <NavInternals />

            </nav>
        );
    }
}