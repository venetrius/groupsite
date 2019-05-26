import React from 'react';
import { Switch, Route } from 'react-router-dom'

import LoginMain from "./LoginMain";

class Login extends React.Component {

  render () {
    return (
      <Switch>
        <Route exact path='/login' component={LoginMain}/>
      </Switch>
    );
  }
}

export default Login
