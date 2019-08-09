import React, {Component} from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

import {NavLink} from 'react-router-dom';
import classes from './Navigation.module.css';

class Navigation extends Component {
  
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>

        <Navbar color="light" light expand="md">
          
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            
            <Nav className="mx-auto" navbar>
            
              <NavItem className="mx-auto">
                <NavLink to="/">
                    <span className="text-dark">Home</span>
                </NavLink>
              </NavItem>
              <NavItem className={classes.a}>
                <NavLink to="/seller" >
                    <span className="text-dark">Seller</span>
                </NavLink>
              </NavItem>
              <NavItem className={classes.a}>
                <NavLink to="/products">
                  <span className="text-dark">Products</span>
                </NavLink>
              </NavItem>
              <NavItem className={classes.a}>
                <NavLink to="/about">
                  <span className="text-dark">About</span>
                </NavLink>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
