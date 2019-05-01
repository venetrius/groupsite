import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import TutorialMain from "./TutorialMain";

class Tutorial extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/tutorial" component={TutorialMain} />
      </Switch>
    );
  }
}

export default Tutorial;
