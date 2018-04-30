import React, {Component} from 'react';
import './App.css';
import Login from './components/Login';
import NavBar from './components/navBar';
import SplashScreen from './components/Splashscreen';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>   
        <SplashScreen/>
     
      </div>
    );
  }
}

export default App;
