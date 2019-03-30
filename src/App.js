import React, { Component } from 'react';
import './App.css';
import {Header, Footer, Body, Login} from './Components';

class App extends Component {

  constructor(props) {
    super (props);
    this.state = {
      pages: ["Home", "Tutorial", "Events", "Contact Form", "Login"],
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
      <Header page = {this.state.page} onClick={(i) => this.handleClick(i)} pages = {this.state.pages} />
      <div class="CCcontent">
        <Body page ={this.state.page}/>
    {/*<Login></Login>*/}
      </div>
      <Login></Login>
      <Footer></Footer>
      </div>
    );
  }

  
}

export default App;
