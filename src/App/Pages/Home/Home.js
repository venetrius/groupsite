import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import HomeMain from "./HomeMain";

class Home extends Component {

  render () {
    return (
      <Switch>
        <Route exact path='/' component={HomeMain}/>
      </Switch>
    );
  }
}

export default Home
