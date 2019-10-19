import React, { Component } from "react";
import "./Projects.css";
class Projects extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      console.log("project page is loading")
      /*fetch("http://localhost:3030/projects")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.items
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
      */
     this.setState({
       isLoaded:true,
       items : [{message : 'finish me'}]
     })
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {items.map(item => (
              <li key={item.message}>
                {item.message} {item.message}
              </li>
            ))}
          </ul>
        );
      }
    }

}

export default Projects;