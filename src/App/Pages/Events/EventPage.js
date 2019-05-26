import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Events from "../Events/Events";

class EventPage extends Component {

  render () {
    return (
      <Switch>
        <Route exact path='/events' component={Events}/>
      </Switch>
    );
  }
}

export default EventPage
