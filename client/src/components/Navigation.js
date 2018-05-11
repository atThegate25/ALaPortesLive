import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, fixedTop } from 'react-bootstrap';
import SignOutButton from './SignOut';
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
      {/* <a href="#brand">React-Bootstrap</a> */}
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    {/* <Nav>
      <NavItem eventKey={1} href="#">
        Link
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link
      </NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}><Link to={routes.SIGN_IN}>Sign In</Link>>Separated link</MenuItem>
      </NavDropdown>
    </Nav> */}
    <Nav pullRight>
       <NavItem eventKey={1}><Link to={routes.LANDING}><button className="btn btn-info"><SignOutButton /></button></Link></NavItem>
      {/* <NavItem eventKey={2} href="#">
        Link Right
      </NavItem> */}
    </Nav>
  </Navbar.Collapse>
</Navbar>;

   
const NavigationNonAuth = () =>
    < Navbar inverse collapseOnSelec fixedTop >
    <Navbar.Header>
    <Navbar.Brand>
      <a href="#"><h4><span><i className="fa fa-plane"></i> AtTh</span>eGATE</h4></a>  
      {/* <a href="#brand">React-Bootstrap</a> */}
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
      
    {/* <Nav>
      <NavItem eventKey={1} href="#">
        Link
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link
      </NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}><Link to={routes.SIGN_IN}>Sign In</Link>>Separated link</MenuItem>
      </NavDropdown>
    </Nav> */}
    <Nav pullRight>
       <NavDropdown eventKey={1} title="Sign In / Sign Up" id="basic-nav-dropdown">
        <MenuItem eventKey={1.1}><Link to={routes.SIGN_IN}><span><i class="fa fa-sign-out-alt"></i></span>Sign in</Link></MenuItem>
        <MenuItem eventKey={1.2}><Link to={routes.SIGN_UP}>Sign Up</Link></MenuItem>
        {/* <MenuItem eventKey={1.2}>Another action</MenuItem>
        <MenuItem eventKey={1.3}>Something else here</MenuItem>
        <MenuItem divider /> */}
      </NavDropdown>
      {/* <NavItem eventKey={1}><Link to={routes.SIGN_IN}><button className="btn btn-info">Sign In</button></Link></NavItem> */}
      {/* <NavItem eventKey={2} href="#">
        Link Right
      </NavItem> */}
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