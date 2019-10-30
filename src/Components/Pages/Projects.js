import React, { Component } from "react";
import "./Projects.css";

class Projects extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      list: []
    };
  }


  componentDidMount() {
    fetch("http://localhost:3030/projects")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  renderProject(project){
    return (
      <div key={project.id}>
        <h4>{project.name}</h4>
        <div>{project.stack.split(',').join(' ')}</div>
        <p>{project.description}</p>
      </div>
    )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      const list = items.map(project => this.renderProject(project))
      return (
        <div>
          {list}
        </div>
      );
    }
  }
}

export default Projects;