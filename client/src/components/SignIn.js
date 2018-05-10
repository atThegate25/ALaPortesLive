import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from './SignUp';
import { auth } from '../firebase';
import * as routes from '../constants/routes';
import '../App.css';

const SignInPage = ({ history }) =>
    <div>
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
            <body className="page-body">
                <section className="page-wrapper innerpage-section-padding"
                        style={{
                            "background-image": "url('https://lifetomyfullest.files.wordpress.com/2014/04/running-through-airport.jpg')",
                            "background-repeat": 'no-repeat',
                            "background-size": '100%'
                        }} 
                        >
                    <div id="login-page">
                        <div className="container-fluid text-center">
                            <div className="innerpage-heading">
                                <h2 className="LoginTitle"> AT THE GATE </h2>
                                <p>Feeding you before your flight</p>
                            </div>
                            <form className="custom-form" onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <div className="input-group" style={{ width: '50%', margin: 'auto' }}>
                                        <input
                                            className="form-control"
                                            required=""
                                            value={email}
                                            onChange={event => this.setState(byPropKey('email', event.target.value))}
                                            type="text"
                                            placeholder="Email Address"
                                        />
                                        <span className="input-group-addon"><i className="fa fa-user"></i></span>
                                    </div>
                                </div>

                                <div className="form-group" style={{ width: '50%', margin: 'auto' }}>
                                    <div className="input-group">
                                        <input
                                            className="form-control"
                                            value={password}
                                            onChange={event => this.setState(byPropKey('password', event.target.value))}
                                            required=""
                                            type="password"
                                            placeholder="Password" />
                                        <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                    </div>
                                </div>
                                <button disabled={isInvalid} className="btn btn-orange btn-radius" type="submit">Login</button>
                                {error && <p>{error.message}</p>}
                            </form>
                            <div className="form-page-links">
                                <a href="forgot-password.html">Forgot Password ?</a>
                                <p> New Here ? <a href="register.html">Register Now</a></p>
                            </div>
                            {/* <div className="form-page-connect-social" style={{width: '55%', margin: 'auto'}} >
                            <h4>Login with</h4>
                            <ul className="list-unstyled">
                                <li><button className="btn btn-block fb"><span><i className="fab fa-facebook-f"></i></span>Facebook</button></li>
                                <li><button className="btn btn-block gm"><span><i className="fab fa-google"></i></span>Gmail</button></li>
                                <li><button className="btn btn-block any">Login With Any Other Account</button></li>
                            </ul>
                        </div> */}
                        </div>
                    </div>
                </section>
            </body>
        );
    }
}

export default withRouter(SignInPage);

export {
    SignInForm,
};
