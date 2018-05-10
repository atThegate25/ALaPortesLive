import React, { Component } from 'react';
import '../css'
import SC_Sidebar from './SC_Sidebar'

export default class NavInternals extends Component {

    render() {
        return (
            <div>
                <div className="header">
                    <div className="fixed-header">
                        <div className="container-fluid">
                            <div className="header-logo">
                                <a href="/"><h4><span><i className="fa fa-plane"></i> AtTh</span>eGATE</h4></a>
                            </div>
                            {/* <!-- end header-logo --> */}

                            <div className="header-links">
                                <ul className="list-unstyled list-inline">

                                    <li className="shopping-cart"><a href="javascript:void(0)" id="shc-side-open"><span><i className="fa fa-shopping-cart"></i></span><span className="cart-badge">2</span></a></li>
                                    <li className="user-link"><a href="javascript:void(0)" id="usr-side-open"><span><i className="fa fa-user"></i></span></a></li>
                                    <li><a href="javascript:void(0)" id="sidenav-open"><span><i className="fa fa-bars"></i></span></a></li>
                                </ul>
                            </div>
                            {/* <!-- end header-links --> */}
                            {/* </div><!-- end container-fluid --> */}
                        </div>
                        {/* <!-- end fixed-header --> */}
                    </div>
                </div>
                {/* <SC_Sidebar/> */}
            </div>
        )
    }
}