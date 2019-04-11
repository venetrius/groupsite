import React, { Component } from 'react';
import './App.css';
import {Header, Footer, Body, Login} from './Components';
import Tutorial from './Components/Tutorial';

class App extends Component {

  constructor(props) {
    super (props);
    this.state = {
      pages: ["Home", "Tutorial", "Events", "Contact Form", "Login", "one more item"],
      page: "Home"
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
     <head>
        <link rel="stylesheet" href="https://highlightjs.org/static/demo/styles/railscasts.css" />
      </head>
      <Header page = {this.state.page} onClick={(i) => this.handleClick(i)} pages = {this.state.pages} />
      <div class="CCcontent" >
      <Body  page={this.state.page}></Body>
      </div>
      
      <Footer></Footer>
      </div>
    );
  }

  
}

export default App;
