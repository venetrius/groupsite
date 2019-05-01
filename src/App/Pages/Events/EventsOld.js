import React, { Component } from 'react';
import Calendar from 'react-calendar';

class Events extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    return (
      <div class="row row-content">
        <div class="col-12 col-md-4"></div>
        <div className="Login col-12 col-md-4">
          <Calendar
            onChange={this.onChange}
            value={this.state.date}
          />
        </div>
        <div class="col-12 col-md-4"></div>
      </div>
    );
  }
}

export default Events