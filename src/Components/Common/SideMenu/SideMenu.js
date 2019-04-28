import React from "react";
import './SideMenu.css';
 
class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true,
      menuitems: props.menuitem,
      hidden: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
 
  renderNavItem(item){
    var ref = "#"+item[1];
    return(<div><a id={ref} href={ref} class="white sidebutton"> {item[0]}</a></div>);
  }

  hide(){
    this.setState( {hidden: !this.state.hidden});
  }

  render() {
    var prop =  this.state.menuitems;
    let navItems = [<div></div>];
    for(var i=0; i < prop.length; i++) {
      navItems.push(this.renderNavItem(prop[i]));
      // do something with "key" and "value" variables
     
    }
    if(this.state.hidden){
      return(
        <div  class="CCsideButton">
          <button type="button" class="btn btn-info" onClick={() =>{this.hide()}}>Show menu</button>
        </div>
      );
    }
    return (
      <div class="col-3 col-md-2">
      <div className="CCsidemenu fixed-top " >
        <button type="button" class="btn btn-info" onClick={() =>{this.hide()}}>Hide menu</button>
        {navItems}
      </div></div>
    );
  }
}
export default SideMenu;