import React, { Component } from "react";

import "./Header.css";
import logo from '../../logo.png';

import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class Header extends Component {
  render() {
    var brand = <LinkContainer to='/' className='navbar-brand' />;

    return (
      <Navbar brand={brand} collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/"><img src={logo} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/home">
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
