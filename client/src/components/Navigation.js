import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from './SignOut';
import * as routes from '../constants/routes';
import NavInternals from './navBar/NavInternals'

const Navigation = ({ authUser }) =>
    <div>
        <NavInternals />
        {authUser
            ? <NavigationAuth />
            : <NavigationNonAuth />
        }
    </div>

const NavigationAuth = () =>
    <ul>
        {/* <li><Link to={routes.LANDING}>Landing</Link></li>
       <li><Link to={routes.HOME}>Home</Link></li>
       <li><Link to={routes.ACCOUNT}>Account</Link></li> */}
        <li><Link to={routes.LANDING}><SignOutButton /></Link></li>
    </ul>

const NavigationNonAuth = () =>

    <NavInternals >
        <br />
        <br />
        <br />
        <div>
            <ul>
                <li><Link to={routes.LANDING}><button className="btn">Landing</button></Link></li>
                <li><Link to={routes.SIGN_IN}><button className="btn btn-info">Sign In</button></Link></li>
            </ul>
        </div>
    </NavInternals>
export default Navigation;