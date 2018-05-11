import React, { Component } from 'react';
import '../css'
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes';
// import '../js'
// import images from './'


export default class OrderandCart extends Component {
    render() {
        // const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
        return (


            <body className="page-body">
                <div className="canvas">

                    <div className="overlay-black" style={{ visibility: "visible" }}></div>

                    {/* <!--========= HEADER =========--> */}
                    <div className="header">
                        <div className="fixed-header">
                            <div className="container-fluid">
                                <div className="header-logo">
                                    <a href="#"><h4><span><i className="far fa-star"></i>AtTh</span>eGate</h4></a>
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
                            </div>
                            {/* <!-- end container-fluid --> */}
                        </div>
                        {/* <!-- end fixed-header --> */}
                    </div>
                    {/* <!-- end header --> */}


                    {/* <!--========= PAGE-COVER =========--> */}
                    <div className="page-cover">
                        <div className="container-fluid">
                            <h3><span className="cover-left-icon pull-left"><i className="fa fa-list-ul"></i></span>Menu List<span className="cover-right-icon pull-right"><i className="fa fa-list-ul"></i></span></h3>
                        </div>
                        {/* <!-- end container-fluid --> */}
                    </div>
                    {/* <!-- end page-cover --> */}


                    {/* <!--=================== PAGE-WRAPPER ================--> */}
                    <section className="page-wrapper innerpage-section-padding">
                        <div id="menu-page" className="menu-list">
                            <div className="container-fluid text-center menu">
                                <div className="innerpage-heading">
                                    <h3>Delicious Menu</h3>
                                </div>
                                {/* <!-- end innerpage-heading --> */}

                                <ul className="nav nav-tabs">
                                    <li className=""><a href="#breakfast-dishes" data-toggle="tab" aria-expanded="false">Breakfast</a></li>
                                    <li className=""><a href="#lunch-dishes" data-toggle="tab" aria-expanded="false">Lunch</a></li>
                                    <li className="active"><a href="#dinner-dishes" data-toggle="tab" aria-expanded="true">Dinner</a></li>
                                </ul>

                                <div className="tab-content">

                                    <div id="breakfast-dishes" className="tab-pane fade">
                                        <ul className="list-unstyled">
                                            <li>
                                                <div className="dish-list">
                                                    <a href="menu-detail.html"><img src="/static/images/dish-breakfast-1.png" className="img-responsive" alt="dish-menu" /></a>
                                                    <div className="dish-list-text">
                                                        <h4><a href="menu-detail.html">Breakfast-1</a></h4>
                                                        <h5>$45</h5>
                                                        <p>Lorem ipsum, Dolor</p>
                                                        <button className="btn">Add to cart<span><i className="fa fa-shopping-cart"></i></span></button>
                                                    </div>
                                                    {/* <!-- end dish-list-text --> */}
                                                </div>
                                                {/* <!-- end dish-list --> */}
                                            </li>

                                            <li>
                                                <div className="dish-list">
                                                    <a href="menu-detail.html"><img src="images/dish-breakfast-2.png" className="img-responsive" alt="dish-menu" /></a>
                                                    <div className="dish-list-text">
                                                        <h4><a href="menu-detail.html">Breakfast-2</a></h4>
                                                        <h5>$45</h5>
                                                        <p>Lorem ipsum, Dolor</p>
                                                        <button className="btn">Add to cart<span><i className="fa fa-shopping-cart"></i></span></button>
                                                    </div>
                                                    {/* <!-- end dish-list-text --> */}
                                                </div>
                                                {/* <!-- end dish-list --> */}
                                            </li>

                                            <li>
                                                <div className="dish-list">
                                                    <a href="menu-detail.html"><img src="images/dish-breakfast-3.png" className="img-responsive" alt="dish-menu" /></a>
                                                    <div className="dish-list-text">
                                                        <h4><a href="menu-detail.html">Breakfast-3</a></h4>
                                                        <h5>$45</h5>
                                                        <p>Lorem ipsum, Dolor</p>
                                                        <button className="btn">Add to cart<span><i className="fa fa-shopping-cart"></i></span></button>
                                                    </div>
                                                    {/* <!-- end dish-list-text --> */}
                                                </div>
                                                {/* <!-- end dish-list --> */}
                                            </li>

                                            <li>
                                                <div className="dish-list">
                                                    <a href="menu-detail.html"><img src="images/dish-breakfast-4.png" className="img-responsive" alt="dish-menu" /></a>
                                                    <div className="dish-list-text">
                                                        <h4><a href="menu-detail.html">Breakfast-4</a></h4>
                                                        <h5>$45</h5>
                                                        <p>Lorem ipsum, Dolor</p>
                                                        <button className="btn">Add to cart<span><i className="fa fa-shopping-cart"></i></span></button>
                                                    </div>
                                                    {/* <!-- end dish-list-text --> */}
                                                </div>
                                                {/* <!-- end dish-list --> */}
                                            </li>

                                            <li>
                                                <div className="dish-list">
                                                    <a href="menu-detail.html"><img src="images/dish-breakfast-5.png" className="img-responsive" alt="dish-menu" /></a>
                                                    <div className="dish-list-text">
                                                        <h4><a href="menu-detail.html">Breakfast-5</a></h4>
                                                        <h5>$45</h5>
                                                        <p>Lorem ipsum, Dolor</p>
                                                        <button className="btn">Add to cart<span><i className="fa fa-shopping-cart"></i></span></button>
                                                    </div>
                                                    {/* <!-- end dish-list-text --> */}
                                                </div>
                                                {/* <!-- end dish-list --> */}
                                            </li>

                                            <li>
                                                <div className="dish-list">
                                                    <a href="menu-detail.html"><img src="images/dish-breakfast-6.png" className="img-responsive" alt="dish-menu" /></a>
                                                    <div className="dish-list-text">
                                                        <h4><a href="menu-detail.html">Breakfast-6</a></h4>
                                                        <h5>$45</h5>
                                                        <p>Lorem ipsum, Dolor</p>
                                                        <button className="btn">Add to cart<span><i className="fa fa-shopping-cart"></i></span></button>
                                                    </div>
                                                    {/* <!-- end dish-list-text --> */}
                                                </div>
                                                {/* <!-- end dish-list --> */}
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!-- end breakfast-dishes --> */}

                                    <div id="lunch-dishes" className="tab-pane fade">
                                        <ul className="list-unstyled">
                                            <li>
                                                <div className="dish-list">
                                                    <a href="menu-detail.html"><img src="images/dish-lunch-1.png" className="img-responsive" alt="dish-menu" /></a>
                                                    <div className="dish-list-text">
                                                        <h4><a href="menu-detail.html">Lunch-1</a></h4>
                                                        <h5>$45</h5>
                                                        <p>Lorem ipsum, Dolor</p>
                                                        <button className="btn">Add to cart<span><i className="fa fa-shopping-cart"></i></span></button>
                                                    </div>
                                                    {/* <!-- end dish-list-text --> */}
                                                </div>
                                                {/* <!-- end dish-list --> */}
                                            </li>

                                            <li>
                                                <div className="dish-list">
                                                    <a href="menu-detail.html"><img src="images/dish-lunch-2.png" className="img-responsive" alt="dish-menu" /></a>
                                                    <div className="dish-list-text">
                                                        <h4><a href="menu-detail.html">Lunch-2</a></h4>
                                                        <h5>$45</h5>
                                                        <p>Lorem ipsum, Dolor</p>
                                                        <button className="btn">Add to cart<span><i className="fa fa-shopping-cart"></i></span></button>
                                                    </div>
                                                    {/* <!-- end dish-list-text --> */}
                                                </div>
                                                {/* <!-- end dish-list --> */}
                                            </li>

                                            <li>
                                                <div className="dish-list">
                                                    <a href="menu-detail.html"><img src="images/dish-lunch-3.png" className="img-responsive" alt="dish-menu" /></a>
                                                    <div className="dish-list-text">
                                                        <h4><a href="menu-detail.html">Lunch-3</a></h4>
                                                        <h5>$45</h5>
                                                        <p>Lorem ipsum, Dolor</p>
                                                        <button className="btn">Add to cart<span><i className="fa fa-shopping-cart"></i></span></button>
                                                    </div>
                                                    {/* <!-- end dish-list-text --> */}
                                                </div>
                                                {/* <!-- end dish-list --> */}
                                            </li>

                                            <li>
                                                <div className="dish-list">
                                                    <a href="menu-detail.html"><img src="images/dish-lunch-4.png" className="img-responsive" alt="dish-menu" /></a>
                                                    <div className="dish-list-text">
                                                        <h4><a href="menu-detail.html">Lunch-4</a></h4>
                                                        <h5>$45</h5>
                                                        <p>Lorem ipsum, Dolor</p>
                                                        <button className="btn">Add to cart<span><i className="fa fa-shopping-cart"></i></span></button>
                                                    </div>
                                                    {/* <!-- end dish-list-text --> */}
                                                </div>
                                                {/* <!-- end dish-list --> */}
                                            </li>

                                            <li>
                                                <div className="dish-list">
                                                    <a href="menu-detail.html"><img src="images/dish-lunch-5.png" className="img-responsive" alt="dish-menu" /></a>
                                                    <div className="dish-list-text">
                                                        <h4><a href="menu-detail.html">Lunch-5</a></h4>
                                                        <h5>$45</h5>
                                                        <p>Lorem ipsum, Dolor</p>
                                                        <button className="btn">Add to cart<span><i className="fa fa-shopping-cart"></i></span></button>
                                                    </div>
                                                    {/* <!-- end dish-list-text --> */}
                                                </div>
                                                {/* <!-- end dish-list --> */}
                                            </li>

                                            <li>
                                                <div className="dish-list">
                                                    <a href="menu-detail.html"><img src="images/dish-lunch-6.png" className="img-responsive" alt="dish-menu" /></a>
                                                    <div className="dish-list-text">
                                                        <h4><a href="menu-detail.html">Lunch-6</a></h4>
                                                        <h5>$45</h5>
                                                        <p>Lorem ipsum, Dolor</p>
                                                        <button className="btn">Add to cart<span><i className="fa fa-shopping-cart"></i></span></button>
                                                    </div>
                                                    {/* <!-- end dish-list-text --> */}
                                                </div>
                                                {/* <!-- end dish-list --> */}
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!-- end lunch-dishes --> */}

                                    <div id="dinner-dishes" className="tab-pane fade active in">
                                        <ul className="list-unstyled">
                                            <li>
                                                <div className="dish-list">
                                                    <a href="menu-detail.html"><img src="images/dish-dinner-1.png" className="img-responsive" alt="dish-menu" /></a>
                                                    <div className="dish-list-text">
                                                        <h4><a href="menu-detail.html">Dinner-1</a></h4>
                                                        <h5>$45</h5>
                                                        <p>Lorem ipsum, Dolor</p>
                                                        <button className="btn">Add to cart<span><i className="fa fa-shopping-cart"></i></span></button>
                                                    </div>
                                                    {/* <!-- end dish-list-text --> */}
                                                </div>
                                                {/* <!-- end dish-list --> */}
                                            </li>

                                            <li>
                                                <div className="dish-list">
                                                    <a href="menu-detail.html"><img src="images/dish-dinner-2.png" className="img-responsive" alt="dish-menu" /></a>
                                                    <div className="dish-list-text">
                                                        <h4><a href="menu-detail.html">Dinner-2</a></h4>
                                                        <h5>$45</h5>
                                                        <p>Lorem ipsum, Dolor</p>
                                                        <button className="btn">Add to cart<span><i className="fa fa-shopping-cart"></i></span></button>
                                                    </div>
                                                    {/* <!-- end dish-list-text --> */}
                                                </div>
                                                {/* <!-- end dish-list --> */}
                                            </li>

                                            <li>
                                                <div className="dish-list">
                                                    <a href="menu-detail.html"><img src="images/dish-dinner-3.png" className="img-responsive" alt="dish-menu" /></a>
                                                    <div className="dish-list-text">
                                                        <h4><a href="menu-detail.html">Dinner-3</a></h4>
                                                        <h5>$45</h5>
                                                        <p>Lorem ipsum, Dolor</p>
                                                        <button className="btn">Add to cart<span><i className="fa fa-shopping-cart"></i></span></button>
                                                    </div>
                                                    {/* <!-- end dish-list-text --> */}
                                                </div>
                                                {/* <!-- end dish-list --> */}
                                            </li>

                                            <li>
                                                <div className="dish-list">
                                                    <a href="menu-detail.html"><img src="images/dish-dinner-4.png" className="img-responsive" alt="dish-menu" /></a>
                                                    <div className="dish-list-text">
                                                        <h4><a href="menu-detail.html">Dinner-4</a></h4>
                                                        <h5>$45</h5>
                                                        <p>Lorem ipsum, Dolor</p>
                                                        <button className="btn">Add to cart<span><i className="fa fa-shopping-cart"></i></span></button>
                                                    </div>
                                                    {/* <!-- end dish-list-text --> */}
                                                </div>
                                                {/* <!-- end dish-list --> */}
                                            </li>

                                            <li>
                                                <div className="dish-list">
                                                    <a href="menu-detail.html"><img src="images/dish-dinner-5.png" className="img-responsive" alt="dish-menu" /></a>
                                                    <div className="dish-list-text">
                                                        <h4><a href="menu-detail.html">Dinner-5</a></h4>
                                                        <h5>$45</h5>
                                                        <p>Lorem ipsum, Dolor</p>
                                                        <button className="btn">Add to cart<span><i className="fa fa-shopping-cart"></i></span></button>
                                                    </div>
                                                    {/* <!-- end dish-list-text --> */}
                                                </div>
                                                {/* <!-- end dish-list --> */}
                                            </li>

                                            <li>
                                                <div className="dish-list">
                                                    <a href="menu-detail.html"><img src="images/dish-dinner-6.png" className="img-responsive" alt="dish-menu" /></a>
                                                    <div className="dish-list-text">
                                                        <h4><a href="menu-detail.html">Dinner-6</a></h4>
                                                        <h5>$45</h5>
                                                        <p>Lorem ipsum, Dolor</p>
                                                        <button className="btn">Add to cart<span><i className="fa fa-shopping-cart"></i></span></button>
                                                    </div>
                                                    {/* <!-- end dish-list-text --> */}
                                                </div>
                                                {/* <!-- end dish-list --> */}
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!-- end dinner-dishes --> */}

                                </div>
                                {/* <!-- end tab-content --> */}
                            </div>
                            {/* <!-- end container-fluid --> */}
                        </div>
                        {/* <!-- end menu-page --> */}
                    </section>
                    {/* <!-- end page-wrapper --> */}


                    {/* <!--=============== FOOTER ===============--> */}
                    {/* <section id="footer" className="section-padding"> 
                <div className="container-fluid text-center">
                    <h3><span><i className="far fa-star"></i>Res</span>taurant</h3>
                    <ul className="footer-contact list-unstyled">
                        <li><span><i className="fa fa-map-marker-alt"></i></span>Street # 3, Lorem ipsum dolor , California. </li>
                        <li><span><i className="fa fa-envelope"></i></span>info@starrestaurant.com</li>
                        <li><span><i className="fa fa-phone"></i></span>+123 1234 123456</li>
                    </ul>
      
                    <ul className="footer-social list-unstyled list-inline">
                        <li><a href="#"><span><i className="fab fa-facebook-f"></i></span></a></li>
                        <li><a href="#"><span><i className="fab fa-instagram"></i></span></a></li>
                        <li><a href="#"><span><i className="fab fa-pinterest"></i></span></a></li>
                        <li><a href="#"><span><i className="fab fa-twitter"></i></span></a></li>
                        <li><a href="#"><span><i className="fab fa-dribbble"></i></span></a></li>
                    </ul>
                    <p className="copyright">© 2018 <a href="#"><span><i className="far fa-star"></i></span>Restaurant</a>. All rights reserved.</p>
                </div> */}
                    {/* <!-- end container-fluid --> */}
                    {/* </section> */}
                    {/* <!-- end footer --> */}

                </div>
                {/* <!-- end canvas --> */}


                {/* <!-- Page Scripts Starts --> */}
                {/* <script type="text/babel" src="../js/jquery.min.js"></script>
                    <script type="text/babel"  src="../js/bootstrap.min.js"></script>
                    <script type="text/babel"  src="../js/custom-navigation.js"></script> */}
                {/* <!-- Page Scripts Ends --> */}
                {/* </div> */}
            </body>


        )
    }
}