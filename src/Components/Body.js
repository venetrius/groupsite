import React from 'react'
import Login from './Login';
import EvenetsCalendar from './EvenetsCalendar';
import Tutorial from './Tutorial';
import Home from './Home';
import ContentWSideB from './ContentWSideB';

class Body extends React.Component {

    render(){
      if(this.props.page === "Login"){
        return(<Login></Login>)
      }else if(this.props.page == "Home"){
        return(<Home>Ajjajj</Home>)
      }else if(this.props.page === "Events"){
       return( <EvenetsCalendar>Hi there</EvenetsCalendar>)
      }else if(this.props.page === "Tutorial"){
        return(<Tutorial></Tutorial>)
      }else{
        return(
          <div>Hello this is the {this.props.page} page</div>);
      }
    }
   }

   export default Body;