import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/Login';
import NavBar from './components/navBar';
import SplashScreen from './components/Splashscreen';
import Vendors from './components/Vendors/Vendors'
import NoMatch from "./components/NoMatch/NoMatch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <Switch>
            <div>
            <SplashScreen />
            </div>
            <div>
            <Vendors />
            </div>
            <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
