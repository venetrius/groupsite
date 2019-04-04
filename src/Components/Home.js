import React from "react";
import Sidebar from "react-sidebar";
 
const mql = window.matchMedia(`(min-width: 800px)`);
 
class Home extends React.Component {
 render(){
     return(<div class="row row-content">
        <div class="col-2 col-md-3">
            hello
        </div>
        <div class="col-12 col-md-9">
            hello 2
        </div>
     </div>);
 }
}
 
export default Home;