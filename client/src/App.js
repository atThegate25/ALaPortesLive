import React, {Component} from 'react';
import './App.css';
import NavBar from './components/navBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
    
     
     <img className="background" src="https://lifetomyfullest.files.wordpress.com/2014/04/running-through-airport.jpg" alt="running through airport" height="100%" width="100%" />
     
     <div className="title"> AT THE GATE </div>
     <div className="subtitle">Feeding you before your flight</div>
      </div>
    );
  }
}

export default App;
