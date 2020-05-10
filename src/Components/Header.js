import React from 'react'
import { Link } from "react-router-dom"
import logo from '../logo.png';

class  Header extends React.Component{
    renderNavItem(name){
      if (this.props.page === name){
        return(
          <li key={name} className="nav-item active">
            <Link className="nav-link"> {name}</Link> 
        </li>
        );
      }else{
        const target = `${name.toLowerCase()}`
        return(
          <li  key={name} className="nav-item">
            <Link className="nav-link" to={target} onClick={() =>{this.props.onClick(name)}}> {name}</Link>
          </li>
        );
      }
    }

    render(){
    var pages = this.props.pages;
    let navItems = [];
    for (var i = 0; i < pages.length; i++) { 
      navItems.push(this.renderNavItem(pages[i]));
    }
    return (
 
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-fixed CCnavigate">
        <a className="navbar-brand" onClick={() =>{this.props.onClick(pages[0])}}> <img src={logo} alt="logo"></img>  </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
  
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {navItems}
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    )
    }
  }

  export default Header;