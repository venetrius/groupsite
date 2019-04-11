import React from 'react'
import logo from '../logo.png';


const PagesEnum = Object.freeze({"HOME":"Home", "PROJECTS":"Projects", "CONTACT":"Contact",});

class  Header extends React.Component{
    renderNavItem(name){
      if (this.props.page === name){
        return(
          <li class="nav-item active">
            <a class="nav-link"> {name}</a> 
        </li>
        );
      }else{
        return(
          <li class="nav-item">
            <a class="nav-link" onClick={() =>{this.props.onClick(name)}}> {name}</a>
          </li>
        );
      }
    }
  
    getNavitems(){
      var cars = ["Saab", "Volvo", "BMW"];
      let navItems = [];
      
      cars.forEach(function (arrayItem) {
        navItems.push(this.renderNavItem(arrayItem));
    });
      return navItems;
  }


    render(){
      var cars = this.props.pages;
      let navItems = [];
      for (var i = 0; i < cars.length; i++) { 
        navItems.push(this.renderNavItem(cars[i]));
      }
      cars.forEach(function (arrayItem) {
        //this.renderNavItem("alma");
       
    });
    return (
 
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark position-fixed CCnavigate">
        <a class="navbar-brand" onClick={() =>{this.props.onClick(PagesEnum.HOME)}}> <img src={logo} alt="logo"></img>  </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            {navItems}
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick="">Search</button>
          </form>
        </div>
      </nav>
    )
    }
  }

  export default Header;