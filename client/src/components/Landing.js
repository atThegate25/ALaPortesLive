import React from 'react';
import './css';

const LandingPage = () =>
    <div className="page-wrapper innerpage-section-padding"
        style={{
            "background-image": "url('https://lifetomyfullest.files.wordpress.com/2014/04/running-through-airport.jpg')",
            "background-repeat": 'no-repeat',
            "background-size": '100%'
        }}
    >
        <div className="innerpage-heading">
            <h2 className="LoginTitle"> AT THE GATE </h2>
            <h3 className="LoginText">Feeding you before your flight</h3>
            <p>We know you're in a rush.  Click the button below to continue.</p>
            <button className="btn btn-orange btn-radius" type="submit"><a href="/mcdcart"> Let's Go</a></button>
        </div>
    </div>

export default LandingPage;