import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, fixedTop } from 'react-bootstrap';
import SignOutButton from './SignOut';
import '../App.css'
import * as routes from '../constants/routes';
// import NavInternals from './navBar/NavInternals'

const Navigation = ({ authUser }) =>
  <div>
    {/* <NavInternals /> */}
    {authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </div>

const NavigationAuth = () =>
  <Navbar inverse collapseOnSelect fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#"><strong><h4><span><i className="fa fa-plane"></i> AtTh</span>eGATE</h4></strong></a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1}><Link to={routes.LANDING}><button><SignOutButton /></button></Link></NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>;


const NavigationNonAuth = () =>
  < Navbar inverse collapseOnSelec fixedTop >
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/"><h4><span><i className="fa fa-plane"></i> <strong>AtTh</strong></span><strong>eGATE</strong></h4></a>
        {/* <a href="#brand">React-Bootstrap</a> */}
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>


      <Nav pullRight>
        <NavDropdown eventKey={1} title="Sign In / Sign Up" id="basic-nav-dropdown">
          <MenuItem eventKey={1.1} class="drdwncolor"><Link to={routes.SIGN_IN}><span><i class="fa fa-sign-out-alt"></i></span>Sign In</Link></MenuItem>
          <MenuItem eventKey={1.2} class="drdwncolor"><Link to={routes.SIGN_UP}><span><i class="fa fa-sign-out-alt"></i></span>Sign Up</Link></MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>;






// <NavInternals >
// <br />
// <br />
// <br />
// <div>
//     <ul>
//         <li><Link to={routes.LANDING}><button className="btn">Landing</button></Link></li>
//         <li><Link to={routes.SIGN_IN}><button className="btn btn-info">Sign In</button></Link></li>
//     </ul>
// </div>
// </NavInternals>

export default Navigation;