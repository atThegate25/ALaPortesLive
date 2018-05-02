import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/Login';
import NavBar from './components/navBar';
import SplashScreen from './components/Splashscreen';
import Vendors from './components/Vendors/Vendors'
import NoMatch from "./components/NoMatch/NoMatch";
import Flight from "./components/Flight"
import Cart from "./components/Cart"


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <Switch>
<<<<<<< HEAD
            <div>
            <SplashScreen />
            <Vendors />
            </div>
            <div>
            </div>
            <Route component={NoMatch} />
=======
>>>>>>> 6dc858c26010cdf57e53baccfc9d596c8b0ef020
            
            {/* <div>
            <Vendors />
            </div> */}
            <Route exact path="/" component={SplashScreen} />
            {/* <Route component={NoMatch} /> */}
            <Route exact path="/flight" component={Flight} />
            <Route exact path="/cart" component={Cart} />
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
