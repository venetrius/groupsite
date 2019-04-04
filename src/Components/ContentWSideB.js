import React from "react";
import SideMenu from "./SideMenu";
import Tutorial from "./Tutorial";
class ContentWSideB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      docked: props.isDocked,
      sidebar: props.sidebar
    };
  }

  render() {
    var dict = [
      ["Why to learn", "why"],
      ["What is React", "what"],
      ["Suggested materials", "tutorial"]
    ];
    return (
      <div class="row row-content">
        <div class="col-3 col-md-2">
           <SideMenu></SideMenu>
          <div class="col-9 col-10">
            <Tutorial menuitem={dict}></Tutorial>  
          </div>
        </div>
      </div>

    );
  }
}
export default ContentWSideB;