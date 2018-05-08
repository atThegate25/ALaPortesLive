import React, {Component} from 'react';
import {Link} from 'react-router-dom'



export default class ComponentName extends Component {
render() {
return (
    <section id="footer" className="section-padding"> 
                <div className="container-fluid text-center">
                    <h3><span><i className="fa fa-plane"></i> ALa</span>Portes</h3>
                    <ul className="footer-contact list-unstyled">
                        <li><span><i className="fa fa-map-marker-alt"></i></span>Northwestern University, 239 E. Chicago Avenue, Chicago, Illinois. </li>
                        <li><span><i className="fa fa-envelope"></i></span> atthegatewebapp@gmail.com</li>
                        <li><span><i className="fa fa-phone"></i></span> +312 555 1212</li>
                    </ul>
      
                    <ul className="footer-social list-unstyled list-inline">
                        <li><a href="#"><span><i className="fa fa-facebook-f"></i></span></a></li>
                        {/* <li><a href="#"><span><i className="fab fa-instagram"></i></span></a></li>
                        <li><a href="#"><span><i className="fab fa-pinterest"></i></span></a></li> */}
                        <li><a href="#"><span><i className="fa fa-twitter"></i></span></a></li>
                        {/* <li><a href="#"><span><i className="fab fa-dribbble"></i></span></a></li> */}
                    </ul>
                    <p className="copyright">© 2018 <Link to="/"><span><i className="fa fa-plane"></i></span> ALaPortesLive</Link>. All rights reserved.</p>
                </div>
                {/* <!-- end container-fluid --> */}
            </section>
)
}
}