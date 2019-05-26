import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import TutorialPage from './TutorialPage';

class Tutorial extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/tutorial" component={TutorialPage} />
      </Switch>
    );
  }
}

export default Tutorial;
