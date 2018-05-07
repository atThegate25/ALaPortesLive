import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from './SignOut';
import * as routes from '../constants/routes';

const Navigation = ({ authUser }) =>
   <div>
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
   <ul>
       <li><Link to={routes.LANDING}><button className="btn">Landing</button></Link></li>
       <li><Link to={routes.SIGN_IN}><button className="btn btn-info">Sign In</button></Link></li>
   </ul>

export default Navigation;