import React from 'react'
import Login from './Login';
import EvenetsCalendar from './EvenetsCalendar';

class Body extends React.Component {

    render(){
      if(this.props.page === "Login"){
        return(
          <Login></Login>
        )
      }
      if(this.props.page === "Events"){
       return( <EvenetsCalendar>Hi there</EvenetsCalendar>)
      }
      return(

      <div>This is the {this.props.page} page
      </div>);
    }
   }

   export default Body;