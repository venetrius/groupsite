import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';



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

  render(){
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light position-fixed CCnavigate">
      <a class="navbar-brand" href="#" > <img src={logo} alt="logo"></img>  </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          {this.renderNavItem("Dynamic")}
          {this.renderNavItem("home")}
          {this.renderNavItem("about")}
          {this.renderNavItem("contact")}
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

class Body extends React.Component {
  render(){
    if(this.props.page === "home"){
      return(
        <div>
          <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      )
    }
    return(
      <div> This it not home page</div>
    )
  }
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

  constructor(props) {
    super (props);
    this.state = {
      page: "home"
    };
  }

  handleClick(nextPage) {
    this.setState({
      page: nextPage,
    });
  }

  /* TODO test funcionality remove */
  inPage(currPage, pageName) {
      if(currPage === pageName){
        return(
          <label>The two page name is identical</label>
        )
      }else{
        return(
          <label>The two page name is not identical</label>
        )
      }
    
  }

  render() {
    return (
      <div>
      <Header page = {this.state.page} onClick={(i) => this.handleClick(i) } />
      <div class="CCcontent">
        <Body page ={this.state.page}/>
      </div>
      <br></br>
      <button onClick={() => {this.handleClick("Dynamic")}} >Go Dynamic {this.state.page}</button>
      <button onClick={() => {this.handleClick("home")}} >Go home {this.state.page}</button>
      {/* TODO test funcionality remove */}
      <div>State bar <br/>
                <span>state : {this.state.page}</span>
                {<span> {this.inPage(this.state.page, "home")} </span>}
      </div>
      {getFooter()}
      </div>
    );
  }

  
}

export default App;
