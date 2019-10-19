import React, { Component } from "react";
import "./Projects.css";
import ProjectList from './ProjectList';
import AddProject from './AddProject';
class Projects extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        list: []
      };
    }

    handleAddProject=(project)=>{

      if(!project){
        return "Enter valid project";
      }

      else if(this.state.list.indexOf(project)>-1){
        return "This project already exists.";
      }

      this.setState((prevState)=>({
        list:prevState.list.concat(project)
      }));
    }

    handleDeleteProject=(projectToDelete)=>{
      this.setState((prevState)=>({
        list:prevState.list.filter((project)=>project!==projectToDelete)
      }));
    }

    handleDeleteProjects=()=>{
      this.setState({
        list:[]
      });
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
    componentWillUnmount(){
      console.log("Goodbye!");
    }


    


  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div>

            <ProjectList
            list={this.state.list}
            handleDeleteProject={this.handleDeleteProject}
            handleDeleteProjects={this.handleDeleteProjects}>
              </ProjectList>
            
          
          <AddProject handleAddProject={this.handleAddProject}/>
          </div>
        );
        
      }
    }

}

export default Projects;