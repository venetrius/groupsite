import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

function getNavItem(dest, name, link ){
  if (dest == name){
    return(
      <li class="nav-item active">
        <a class="nav-link" href="#">{name} <span class="sr-only">(current)</span></a>
    </li>
    );
  }else{
    return(
      <li class="nav-item">
        <a class="nav-link" href={link}>{name} <span class="sr-only">(current)</span></a>
      </li>
    );
  }
}

function getHeader(active){
  return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#" > <img src={logo} alt="logo"></img>  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
                                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      {getNavItem({active}, "Dynamic", "https://www.google.com")}
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" 
                                                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick="">Search</button>
    </form>
  </div>
</nav>
  );
}

function getFooter(){
  return (
<footer class="page-footer font-small  bg-light pt-4">
  <div class="row container-fluid text-center text-md-left">
    <div class="col-md-6 mt-md-0 mt-3">
          <h5 class="text-uppercase">Footer Content</h5>
          <p>Here you can use rows and columns to organize your footer content.</p>
    </div>
    <hr class="clearfix w-100 d-md-none pb-3"/>
    <div class="col-md-3 mb-md-0 mb-3">
            <h5 class="text-uppercase">Links</h5>
            <ul class="list-unstyled">
              <li><a href="#!">Link 1</a></li>
              <li><a href="#!">Link 2</a></li>
              <li><a href="#!">Link 3</a></li>
              <li><a href="#!">Link 4</a></li>
            </ul>
    </div>
    <div class="col-md-3 mb-md-0 mb-3">
            <h5 class="text-uppercase">Links</h5>
            <ul class="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </div>
  </div>
  <div class="footer-copyright text-center py-3">© 2018 Copyright:
      <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
    </div>
</footer>

    );
}

class App extends Component {

  render() {
    return (
      <div>
      {getHeader("home")}
      <br></br>
      {getFooter()}
      </div>
    );
  }

  
}

export default App;
