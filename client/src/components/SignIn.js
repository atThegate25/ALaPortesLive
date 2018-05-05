import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from './SignUp';
import { auth } from '../firebase';
import * as routes from '../constants/routes';
import '../App.css';

const SignInPage = ({ history }) =>
   <div>
       <h1>SignIn</h1>
       <SignInForm history={history} />
       <SignUpLink />
   </div>

const byPropKey = (propertyName, value) => () => ({
   [propertyName]: value,
});

const INITIAL_STATE = {
   email: '',
   password: '',
   error: null,
};

class SignInForm extends Component {
   constructor(props) {
       super(props);

       this.state = { ...INITIAL_STATE };
   }

   onSubmit = (event) => {
       const {
           email,
           password,
       } = this.state;

       const {
           history,
       } = this.props;

       auth.doSignInWithEmailAndPassword(email, password)
           .then(() => {
               this.setState(() => ({ ...INITIAL_STATE }));
               history.push(routes.FLIGHT);
           })
           .catch(error => {
               this.setState(byPropKey('error', error));
           });

       event.preventDefault();
   }

   render() {
       const {
           email,
           password,
           error,
       } = this.state;

       const isInvalid =
           password === '' ||
           email === '';

       return (
           <form onSubmit={this.onSubmit}>
           <img className="background" src="https://lifetomyfullest.files.wordpress.com/2014/04/running-through-airport.jpg" alt="running through airport" height="100%" width="100%" />
           <div className="title"> AT THE GATE </div>
           <div className="subtitle">Feeding you before your flight</div>
               <input className="email"
                   value={email}
                   onChange={event => this.setState(byPropKey('email', event.target.value))}
                   type="text"
                   placeholder="Email Address"
               />
               <input className="password"
                   value={password}
                   onChange={event => this.setState(byPropKey('password', event.target.value))}
                   type="password"
                   placeholder="Password"
               />
               <button disabled={isInvalid} className="button" type="submit">
                   Sign In
       </button>

               {error && <p>{error.message}</p>}
           </form>
       );
   }
}

export default withRouter(SignInPage);

export {
   SignInForm,
};