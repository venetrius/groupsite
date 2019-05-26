import React, { Component } from 'react';

import "./Header.css";

import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../../logo.png';

class Header extends Component {
  render() {

    return (
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" >
        <Navbar.Brand>
          <LinkContainer to="/">
              <img src={logo} alt="logo" />
          </LinkContainer>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <NavItem>Home</NavItem>
            </LinkContainer>
            <LinkContainer to="/tutorial">
              <NavItem>Tutorial</NavItem>
            </LinkContainer>
            <LinkContainer to="/events">
              <NavItem>Events</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
