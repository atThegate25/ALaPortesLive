import React, { Component } from 'react';
import './McDeesSite.css'
export default class McDonaldsHeader extends Component {
    render() {
        return (<header>
            <div className="header-hero-unit">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 legal-disclaimer bottom-text" style={{top: '475px'}}>
                        <p>
                            $2 Small McCafé, excludes hot and iced coffee. Prices and participation may vary. 
                            Cannot be combined with any other offer or combo meal. 
                            ©2018 The Coca-Cola Company. “Sprite”, “Fanta”, and “Coca-Cola” are registered trademarks of The Coca-Cola Company.
                        </p>
                    </div>
                </div>
            </div>
        </header>)
    }
}