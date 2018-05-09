import React, { Component } from 'react';
import '../css'
import images from './'


export default class OrderandCart extends Component {
    render() {
        // const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
        return (


            <body className="page-body">

                {/* <!--============ SIDE-NAV =============--> */}
                <div className="sidenav-content">
                    <div id="mySidenav" className="sidenav" >
                        <div id="web-name">
                            <h2><span><i className="far fa-star"></i></span> <br /> <span>Res</span>taurant</h2>
                            <ul className="main-menu-social list-unstyled list-inline text-center">
                                <li><a href="#"><span><i className="fab fa-facebook-f"></i></span></a></li>
                                <li><a href="#"><span><i className="fab fa-pinterest"></i></span></a></li>
                                <li><a href="#"><span><i className="fab fa-dribbble"></i></span></a></li>
                                <li><a href="#"><span><i className="fab fa-google-plus-g"></i></span></a></li>
                            </ul>
                        </div>
                        {/* <!-- end web-name --> */}

                        <div id="main-menu">
                            <div className="sidenav-closebtn">
                                <button className="btn btn-default" id="sidenav-close">&times;</button>
                            </div>
                            {/* <!-- end sidenav-closebtn --> */}

                            <div className="list-group panel">
                                <a href="#homepage-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-home sidebar-icon"></i></span>Homepages<span><i className="fa fa-caret-down arrow"></i></span></a>
                                <div className="collapse sub-menu" id="homepage-links">
                                    <a href="restaurant.html" className="list-group-item">Restaurant</a>
                                    <a href="pizza.html" className="list-group-item">Pizza</a>
                                    <a href="bakery.html" className="list-group-item">Bakery</a>
                                    <a href="coffee.html" className="list-group-item">Coffee</a>
                                </div>
                                {/* <!-- end sub-menu --> */}

                                <a href="#menu-links" className="list-group-item active" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-utensils sidebar-icon"></i></span>Menu<span><i className="fa fa-caret-down arrow"></i></span></a>
                                <div className="collapse sub-menu" id="menu-links">
                                    <a href="menu-grid.html" className="list-group-item">Menu Grid</a>
                                    <a href="#" className="list-group-item active">Menu List</a>
                                    <a href="menu-detail.html" className="list-group-item">Menu Detail</a>
                                </div>
                                {/* <!-- end sub-menu --> */}

                                <a href="chef.html" className="list-group-item"><span><i className="fa fa-users sidebar-icon"></i></span>Chef</a>
                                <a href="reservation.html" className="list-group-item"><span><i className="fa fa-pencil-alt sidebar-icon"></i></span>Reservation</a>

                                <a href="#gallery-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-images sidebar-icon"></i></span>Gallery<span><i className="fa fa-caret-down arrow"></i></span></a>
                                <div className="collapse sub-menu" id="gallery-links">
                                    <a href="gallery-1-column.html" className="list-group-item">Gallery 1-Column</a>
                                    <a href="gallery-2-columns.html" className="list-group-item">Gallery 2-Columns</a>
                                </div>
                                {/* <!-- end sub-menu --> */}

                                <a href="#user-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-user sidebar-icon"></i></span>User<span><i className="fa fa-caret-down arrow"></i></span></a>
                                <div className="collapse sub-menu" id="user-links">
                                    <a href="user-profile.html" className="list-group-item">User Profile</a>
                                    <a href="edit-profile.html" className="list-group-item">Edit Profile</a>
                                    <a href="forget-password.html" className="list-group-item">Forget Password</a>
                                    <a href="reset-password.html" className="list-group-item">Reset Password</a>
                                </div>
                                {/* <!-- end sub-menu --> */}

                                <a href="#shop-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-shopping-cart sidebar-icon"></i></span>Shop<span><i className="fa fa-caret-down arrow"></i></span></a>
                                <div className="collapse sub-menu" id="shop-links">
                                    <a href="shopping-cart.html" className="list-group-item">Shopping Cart</a>
                                    <a href="checkout.html" className="list-group-item">Checkout</a>
                                    <a href="order-history.html" className="list-group-item">Order History</a>
                                </div>
                                {/* <!-- end sub-menu --> */}

                                <a href="#features-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-puzzle-piece sidebar-icon"></i></span>Features<span><i className="fa fa-caret-down arrow"></i></span></a>
                                <div className="collapse sub-menu mega-sub-menu" id="features-links">
                                    <a href="#header-style-links" className="list-group-item" data-toggle="collapse">Header<span><i className="fa fa-caret-down arrow"></i></span></a>
                                    <div className="collapse sub-menu mega-sub-menu-links" id="header-style-links">
                                        <a href="feature-header-1.html" className="list-group-item">Header 1</a>
                                        <a href="feature-header-2.html" className="list-group-item">Header 2</a>
                                        <a href="feature-header-3.html" className="list-group-item">Header 3</a>
                                    </div>
                                    <a href="#page-title-style-links" className="list-group-item" data-toggle="collapse">Page Title<span><i className="fa fa-caret-down arrow"></i></span></a>
                                    <div className="collapse sub-menu mega-sub-menu-links" id="page-title-style-links">
                                        <a href="feature-page-cover-1.html" className="list-group-item">Page Cover 1</a>
                                        <a href="feature-page-cover-2.html" className="list-group-item">Page Cover 2</a>
                                        <a href="feature-page-cover-3.html" className="list-group-item">Page Cover 3</a>
                                    </div>
                                    <a href="#footer-style-links" className="list-group-item" data-toggle="collapse">Footer<span><i className="fa fa-caret-down arrow"></i></span></a>
                                    <div className="collapse sub-menu mega-sub-menu-links" id="footer-style-links">
                                        <a href="feature-footer-1.html" className="list-group-item">Footer 1</a>
                                        <a href="feature-footer-2.html" className="list-group-item">Footer 2</a>
                                        <a href="feature-footer-3.html" className="list-group-item">Footer 3</a>
                                    </div>
                                </div>
                                {/* <!-- end sub-menu --> */}

                                <a href="#pages-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-clone sidebar-icon"></i></span>Pages<span><i className="fa fa-caret-down arrow"></i></span></a>
                                <div className="collapse sub-menu" id="pages-links">
                                    <a href="about.html" className="list-group-item">About Us</a>
                                    <a href="services.html" className="list-group-item">Services</a>
                                    <a href="testimonials.html" className="list-group-item">Testimonials</a>
                                    <a href="error-page.html" className="list-group-item">Error 404</a>
                                    <a href="coming-soon.html" className="list-group-item">Coming Soon</a>
                                    <a href="blog.html" className="list-group-item">Blog List</a>
                                    <a href="blog-detail.html" className="list-group-item">Blog Detail</a>
                                    <a href="pricing.html" className="list-group-item">Pricing</a>
                                    <a href="faq.html" className="list-group-item">FAQ</a>
                                </div>
                                {/* <!-- end sub-menu --> */}

                                <a href="#navigation-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-list-ul sidebar-icon"></i></span>Navigations<span><i className="fa fa-caret-down arrow"></i></span></a>
                                <div className="collapse sub-menu" id="navigation-links">
                                    <a href="#" className="list-group-item">Sidebar Navigation</a>
                                    <a href="javascript:void(0)" id="fullscr-open" className="list-group-item">FullScreen Navigation</a>
                                </div>
                                {/* <!-- end sub-menu --> */}

                                <a href="contact.html" className="list-group-item"><span><i className="fa fa-phone sidebar-icon"></i></span>Contact Us</a>
                                <a href="login.html" className="list-group-item"><span><i className="fa fa-lock sidebar-icon"></i></span>Login</a>
                                <a href="register.html" className="list-group-item"><span><i className="fa fa-user-plus sidebar-icon"></i></span>Register</a>
                            </div>
                            {/* <!-- end list-group --> */}
                        </div>
                        {/* <!-- end main-menu --> */}
                    </div>
                    {/* <!-- end mySidenav --> */}
                </div>
                {/* <!-- end sidenav-content --> */}


                {/* <!--=============== FULLSCR-NAV ==============--> */}
                <div id="fullscr-nav" className="fullscr-navigation">
                    <button id="fullscr-close"><span><i className="fa fa-times"></i></span></button>
                    <ul className="list-unstyled">
                        <li><a href="restaurant.html"><span><i className="fullscr-nav-icon fas fa-home"></i></span>Home</a><span className="border-shape"></span></li>
                        <li><a href="about.html"><span><i className="fullscr-nav-icon fas fa-info"></i></span>About</a><span className="border-shape"></span></li>
                        <li><a href="menu-grid.html"><span><i className="fullscr-nav-icon fas fa-list-ul"></i></span>Menu</a><span className="border-shape"></span></li>
                        <li><a href="gallery-2-columns.html"><span><i className="fullscr-nav-icon far fa-images"></i></span>Gallery</a><span className="border-shape"></span></li>
                        <li><a href="reservation.html"><span><i className="fullscr-nav-icon far fa-edit"></i></span>Reservation</a></li>
                        <li><a href="testimonials.html"><span><i className="fullscr-nav-icon fas fa-user"></i></span>Testimonial</a></li>
                        <li><a href="contact.html"><span><i className="fullscr-nav-icon fas fa-phone"></i></span>Contact Us</a></li>
                        <li><a href="login.html"><span><i className="fullscr-nav-icon fas fa-lock"></i></span>Login</a></li>
                    </ul>
                    {/* </div><!-- end fullscr-nav --> */}


                    {/* <!--================ SHOPPING-CART ==============--> */}
                    <div id="shopping-cart-sidebar" className="shc-sidebar">
                        <ul className="list-unstyled cart-list">
                            <li>
                                <div className="cart-item">
                                    <div className="item-text dish-list-text">
                                        <h4><a href="#">Breakfast-3</a></h4>
                                        <p>Lorem ipsum,dolor</p>
                                        <h5>Qty: <input type="number" className="form-control" min="1" value="1" /> x $45</h5>
                                    </div>
                                    {/* <!-- end item-text --> */}

                                    <div className="item-img">
                                        <a href="#"><img src="https://www.mcdonalds.com/content/dam/usa/documents/d123/products/classic_chicken.png" className="img-responsive" alt="cart-item-img" /></a>
                                    </div>
                                    {/* <!-- end item-img --> */}

                                    <h4 className="total">Total: <span>$45</span></h4>

                                    <div className="item-close">
                                        <button className="btn"><span><i className="fa fa-times-circle"></i></span></button>
                                    </div>
                                    {/* <!-- end item-close --> */}
                                </div>
                                {/* <!-- end cart-item --> */}
                            </li>

                            <li>
                                <div className="cart-item">
                                    <div className="item-text dish-list-text">
                                        <h4><a href="#">Dinner-4</a></h4>
                                        <p>Lorem ipsum,dolor</p>
                                        <h5>Qty: <input type="number" className="form-control" min="1" value="1" /> x $45</h5>
                                    </div>
                                    {/* <!-- end item-text --> */}

                                    <div className="item-img">
                                        <a href="#"><img src="images/dish-dinner-4.png" className="img-responsive" alt="cart-item-img" /></a>
                                    </div>
                                    {/* <!-- end item-img --> */}

                                    <h4 className="total">Total: <span>$45</span></h4>

                                    <div className="item-close">
                                        <button className="btn"><span><i className="fa fa-times-circle"></i></span></button>
                                    </div>
                                    {/* <!-- end item-close --> */}
                                </div>
                                {/* <!-- end cart-item --> */}
                            </li>
                        </ul>

                        <div className="cart-info text-right">
                            <h4>Item(s) : <span>2</span></h4>
                            <h4>Total Price: <span>$90.00</span></h4>
                            <a href="shopping-cart.html" className="btn btn-black">View Cart</a>
                            <a href="checkout.html" className="btn btn-orange">Checkout</a>
                        </div>
                        {/* <!-- end cart-info --> */}
                    </div>
                    {/* <!-- shopping-cart-sidebar --> */}


                    {/* <!--============== USER-PROFILE-SIDEBAR =============--> */}
                    <div id="user-profile-sidebar" className="user-prf-sidebar">
                        <div className="user-prf-sidebar-img text-center" style={{
                            background: "url('images/usr-prf-back-restaurant.jpg')",
                            "background-size": "cover;"
                        }}>
                            <div className="overlay">
                                <img src="images/user-profile.jpg" className="img-responsive img-circle" alt="user-profile" />
                                <h3>-- James Anderson --</h3>
                            </div>
                            {/* <!-- end overlay --> */}
                        </div>
                        {/* <!-- end user-prf-sidebar-img --> */}

                        <div className="user-prf-sidebar-links">
                            <ul className="list-unstyled">
                                <li><a href="user-profile.html"><span><i className="fa fa-user"></i></span>My Profile</a></li>
                                <li><a href="edit-profile.html"><span><i className="fa fa-pencil-alt"></i></span>Edit Profile</a></li>
                                <li><a href="forget-password.html"><span><i className="fa fa-question"></i></span>Forget Password</a></li>
                                <li><a href="reset-password.html"><span><i className="fa fa-sync"></i></span>Reset Password</a></li>
                                <li><a href="#"><span><i className="fa fa-sign-out-alt"></i></span>Sign Out</a></li>
                            </ul>
                        </div>
                        {/* <!-- end user-prf-sidebar-links --> */}
                    </div>
                    {/* <!-- end user-profile-sidebar --> */}


                    <div className="canvas">

                        <div className="overlay-black"></div>

                        {/* <!--========= HEADER =========--> */}
                        {/* <div className="header">
                            <div className="fixed-header">
                                <div className="container-fluid">
                                    <div className="header-logo">
                                        <a href="#"><h4><span><i className="far fa-star"></i>Res</span>taurant</h4></a>
                                    </div> */}
                                    {/* <!-- end header-logo --> */}

                                    {/* <div className="header-links">
                                        <ul className="list-unstyled list-inline">

                                            <li className="shopping-cart"><a href="javascript:void(0)" id="shc-side-open"><span><i className="fa fa-shopping-cart"></i></span><span className="cart-badge">2</span></a></li>
                                            <li className="user-link"><a href="javascript:void(0)" id="usr-side-open"><span><i className="fa fa-user"></i></span></a></li>
                                            <li><a href="javascript:void(0)" id="sidenav-open"><span><i className="fa fa-bars"></i></span></a></li>
                                        </ul> */}
                                    {/* </div> */}
                                    {/* <!-- end header-links --> */}
                                {/* </div> */}
                                {/* <!-- end container-fluid --> */}
                            {/* </div> */}
                            {/* <!-- end fixed-header --> */}
                        {/* </div> */}
                        {/* <!-- end header --> */}


                        {/* <!--========= PAGE-COVER =========--> */}
                        {/* <div className="page-cover">
                            <div className="container-fluid">
                                <h3><span className="cover-left-icon pull-left"><i className="fa fa-list-ul"></i></span>Menu List<span className="cover-right-icon pull-right"><i className="fa fa-list-ul"></i></span></h3>
                            </div> */}
                            {/* <!-- end container-fluid --> */}
                        {/* </div> */}
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
                                        <li className="active"><a href="#breakfast-dishes" data-toggle="tab">Breakfast</a></li>
                                        <li><a href="#lunch-dishes" data-toggle="tab">Lunch</a></li>
                                        <li><a href="#dinner-dishes" data-toggle="tab">Dinner</a></li>
                                    </ul>

                                    <div className="tab-content">

                                        <div id="breakfast-dishes" className="tab-pane fade in active">
                                            <ul className="list-unstyled">
                                                <li>
                                                    <div className="dish-list">
                                                        <a href="menu-detail.html"><img src="images/dish-breakfast-1.png" className="img-responsive" alt="dish-menu" /></a>
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

                                        <div id="dinner-dishes" className="tab-pane fade">
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


                        {/* <!--=============== FOOTER ===============-->  */}
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
                            </div>
                            <!-- end container-fluid -->
                        </section>
                        <!-- end footer --> */}

                    </div>
                    {/* <!-- end canvas --> */}


                    {/* <!-- Page Scripts Starts --> */}
                    <script src="../js/jquery.min.js"></script>
                    <script src="../js/bootstrap.min.js"></script>
                    <script src="../js/custom-navigation.js"></script>
                    {/* <!-- Page Scripts Ends --> */}
                </div>
            </body>


        )
    }
}