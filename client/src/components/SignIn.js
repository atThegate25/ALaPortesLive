import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from './SignUp';
import { auth } from '../firebase';
import * as routes from '../constants/routes';
import '../App.css';

const SignInPage = ({ history }) =>
   <div>
       {/* <h1>SignIn</h1> */}
       <SignUpLink />
       <SignInForm history={history} />
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
           <div>
               <img className="background" src="https://lifetomyfullest.files.wordpress.com/2014/04/running-through-airport.jpg" alt="running through airport" height="50%" width="100%" />
           <div className="title"> AT THE GATE </div>
           {/* <div className="subtitle">Feeding you before your flight</div>  */}
           <form onSubmit={this.onSubmit}>
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
               <br />
               <button disabled={isInvalid} className="button" type="submit">
                   Sign In
                </button>

               {error && <p>{error.message}</p>}
           </form>
            </div>
       );
   }
}

export default withRouter(SignInPage);

export {
   SignInForm,
};