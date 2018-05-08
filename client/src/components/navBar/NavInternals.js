import React, { Component } from 'react';
import '../css'

export default class NavInternals extends Component {

    render() {
        return (
            <div>
                <div class="header">
                    <div class="fixed-header">
                        <div class="container-fluid">
                            <div class="header-logo">
                                <a href="#"><h4><span><i class="fa fa-plane"></i> AtTh</span>eGATE</h4></a>
                            </div>
                            {/* <!-- end header-logo --> */}

                            <div class="header-links">
                                <ul class="list-unstyled list-inline">

                                    <li class="shopping-cart"><a href="javascript:void(0)" id="shc-side-open"><span><i class="fa fa-shopping-cart"></i></span><span class="cart-badge">2</span></a></li>
                                    <li class="user-link"><a href="javascript:void(0)" id="usr-side-open"><span><i class="fa fa-user"></i></span></a></li>
                                    <li><a href="javascript:void(0)" id="sidenav-open"><span><i class="fa fa-bars"></i></span></a></li>
                                </ul>
                            </div>
                            {/* <!-- end header-links --> */}
                            {/* </div><!-- end container-fluid --> */}
                        </div>
                        {/* <!-- end fixed-header --> */}
                    </div>
                </div>
            </div>
        )
    }
}