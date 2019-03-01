import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import FiveThirthy from './FiveThirthy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'


const PagesEnum = Object.freeze({"HOME":"Home", "PROJECTS":"Projects", "CONTACT":"Contact",})

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
          {this.renderNavItem(PagesEnum.HOME)}
          {this.renderNavItem(PagesEnum.PROJECTS)}
          {this.renderNavItem(PagesEnum.CONTACT)}
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
    if(this.props.page === PagesEnum.HOME){
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
    else if(this.props.page === PagesEnum.PROJECTS){
      return(
        <div class="project-container">
          <FiveThirthy/>
          <br></br>
        </div>
      )
    }
    return(
      <div> This it the contact page</div>
    )
  }
}

function getFooter(){
  return (
<footer class="page-footer font-small  bg-light darken-1 pt-4">
  <div class="row container-fluid text-center text-md-left">
    <div class="col-md-3 mb-md-0 mb-3">
            <h5 class="text-uppercase">Links</h5>
            <ul class="list-unstyled inline">
              <li><FontAwesomeIcon icon={ faThumbsUp  }/></li>
              <li><FontAwesomeIcon icon={ library }/></li>
              <li><a href="mailto:gergelygjuhasz@gmail.com"><FontAwesomeIcon icon={ faEnvelopeSquare }/></a></li>
            </ul>
    </div>
    </div>
  <div class="footer-copyright text-center py-3">© 2019 Copyright:
      <a href="https://gergelyjuhasz.ca"> gergelyjuhasz.ca</a>
    </div>
</footer>

    );
}

class App extends Component {

  constructor(props) {
    super (props);
    this.state = {
      page: PagesEnum.HOME
    };
  }

  handleClick(nextPage) {
    this.setState({
      page: nextPage,
    });
  }

  render() {
    return (
      <div>
      <Header page = {this.state.page} onClick={(i) => this.handleClick(i) } />
      <div class="CCcontent">
        <Body page ={this.state.page}/>
      </div>
      {getFooter()}
      </div>
    );
  }

  
}

export default App;
