import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to Miami 451</h1>
        </header>
        <p className="App-intro">
          To get started, edit
          <code>src/App.js</code>
          and save to reload. Hello my friend
        </p>
      </div>
    );
  }
}

export default App;
