import React from "react";
import Sidebar from "react-sidebar";
 
class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true,
      menuitems: props.menuitem
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
 
  renderNavItem(item){
    var ref = "#"+item[1];
    console.log("#"+item[1]);
    return(<div><a id={ref} href={ref} class="white"> {item[0]}</a></div>);
  }

  render() {
    var prop =  this.state.menuitems;
    let navItems = [<div></div>];
    for(var i=0; i < prop.length; i++) {
      navItems.push(this.renderNavItem(prop[i]));
      // do something with "key" and "value" variables
     
    }
    return (
      // TODO pass device size to docked so at small size side menu can be disposed
      /** adding button if docked=false (which is the default val)
       *         <button  
        onClick={() => this.onSetSidebarOpen(true)}>
          Open sidebar
        </button>
       * 
       */
      /*<Sidebar
        docked="true" 
        sidebar={navItems}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white" } }}
      >
      </Sidebar>*/
      <div className="fixed-top">
        {navItems}
      </div>
    );
  }
}
export default SideMenu;