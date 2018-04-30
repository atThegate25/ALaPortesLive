import React from "react";
import Login from "../Login";
import "./SplashScreen.css";

const SplashScreen = () => (
    <div className="main-container">
    <div className="panel panel-default">
        <img className="background" src="https://lifetomyfullest.files.wordpress.com/2014/04/running-through-airport.jpg" alt="running through airport" height="100%" width="100%" />
       <div>
        <Login/>   
      </div>
      </div>  
      <div className="panel-heading">
        <h3 className="panel-title">AT THE GATE</h3>
      </div>
      <div className="panel-body">Feeding you before your flight</div>

    </div>
  
);

export default SplashScreen;



