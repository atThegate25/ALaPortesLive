import React, {Component} from 'react';
import {
 BrowserRouter as Router,
 Route,
} from 'react-router-dom';

import Navigation from './components/Navigation';
import LandingPage from './components/Landing';
import SignUpPage from './components/SignUp';
import SignInPage from './components/SignIn';
import PasswordForgetPage from './components/PasswordForget';
import HomePage from './components/Home';
import AccountPage from './components/Account';
import Flight from './components/Flight/Flight'

import * as routes from './constants/routes';
import { firebase } from './firebase';

class App extends Component {
 constructor(props) {
   super(props);

   this.state = {
     authUser: null,
   };
 }

 componentDidMount() {
   firebase.auth.onAuthStateChanged(authUser => {
     authUser
       ? this.setState(() => ({ authUser }))
       : this.setState(() => ({ authUser: null }));
   });
 }

 render() {
   return (
 <Router>
   <div>
     <Navigation authUser={this.state.authUser} />

     <hr />

     <Route
       exact path={routes.LANDING}
       component={() => <LandingPage />}
     />
     <Route
       exact path={routes.SIGN_UP}
       component={() => <SignUpPage />}
     />
     <Route
       exact path={routes.SIGN_IN}
       component={() => <SignInPage />}
     />
     <Route
       exact path={routes.PASSWORD_FORGET}
       component={() => <PasswordForgetPage />}
     />
     <Route
       exact path={routes.FLIGHT}
       component={() => <Flight />}
     />
     <Route
       exact path={routes.ACCOUNT}
       component={() => <AccountPage />}
     />
   </div>
 </Router>
   );
 }
}
export default App;