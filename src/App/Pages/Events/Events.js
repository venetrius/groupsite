import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import EventsMain from "./EventsMain";

class Events extends Component {

  render () {
    return (
      <Switch>
        <Route exact path='/events' component={EventsMain}/>
      </Switch>
    );
  }
}

export default Events
