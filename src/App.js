import React, { Component } from 'react';
import './App.css';

import Header from "./App/Common/Header"
import Main from "./App/Main";

class App extends Component {

  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}

export default App;
