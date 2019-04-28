import React from 'react'
import Login from './Login';
import EvenetsCalendar from './EvenetsCalendar';
import Tutorial from './Tutorial';
import Home from './Home';

class Body extends React.Component {

    render(){
      if(this.props.page === "Join us"){
        return(<Login></Login>)
      }else if(this.props.page === "Home"){
        return(<Home onClick={(i) => this.props.onClick(i)}>Ajjajj</Home>)
      }else if(this.props.page === "Events"){
       return( <EvenetsCalendar>Hi there</EvenetsCalendar>)
      }else if(this.props.page === "Tutorial"){
        return(<Tutorial></Tutorial>)
      }else if(this.props.page === "Contact"){
        return(
        <div>

        </div>);
      }else{
        return(
          <div>Hello this is the {this.props.page} page</div>);
      }
    }
   }

   export default Body;