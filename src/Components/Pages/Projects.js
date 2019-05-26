import React, { Component } from "react";
import "./Projects.css";
class Projects extends React.Component {

  render(){
    return (
      <div>
        <h1>Projects</h1>
        <div className="project-container">
          <h2>Example 2</h2>
          <div className="container project-details">
            <div className="row row-container">
              <div className="col-6 image-container">
                <img 
                  src="https://images.adsttc.com/media/images/55e6/11cc/2347/5d6f/2600/0001/slideshow/pdc_red_building_w-green_building.jpg?1441141187"
                  alt="redBuilding"
                />
                <br/>
                Hello there
              </div>
              <div className="col-6 image-container">
                <p>Goal</p>
                <p>Funcionalities</p>
                <p>Link</p>
                <p>Github link</p>
                <br/>
                Hi
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

class ProjectHighlight extends React.Component{
  render(){
    return (
      <div>
        
      </div>
    );
  }
}
export default Projects;