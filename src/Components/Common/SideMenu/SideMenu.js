import React from "react";
import Button from 'antd/es/button';
import Col from 'antd/es/col';
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
    this.setSideMenuVisibilityChanged = props.onHideChangeMenuState
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  renderNavItem(item){
    var ref = "#"+item[1];
    return(
      <Button type="link" href={ref}> {item[0]}</Button>
    );
  }

  hide(){
    this.setSideMenuVisibilityChanged(!this.state.hidden)
    this.setState( {hidden: !this.state.hidden});
  }

  render() {
    var prop =  this.state.menuitems;
    let navItems = [<div></div>];
    for(var i=0; i < prop.length; i++) {
      navItems.push(this.renderNavItem(prop[i]));
    }

    if(this.state.hidden){
      return(
        <div  className="CCsideButton">
          <Button onClick={() =>{this.hide()}}>Show menu</Button>
        </div>
      );
    }
    return (
      <Col span={4}>
        <div className="CCsidemenu fixed-top " >
          <Button onClick={() =>{this.hide()}}>Hide menu</Button>
          {navItems}
        </div>
      </Col>
    )
  }
}
export default SideMenu;
