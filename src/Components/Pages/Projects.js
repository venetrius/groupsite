import React from "react";
import ProjectSummary from './ProjectSummary';
import ProjectForm from './NewProject'
import axios from 'axios';
import Button from 'antd/es/button';


class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      showProjectForm :false,
      resetProjectFormSwitch: false,
      isLoaded: false,
      list: [],
      keys : {}
    };
    this.url = 'https://yyc-server.herokuapp.com'
  }

  handleAddProject(formData, projectsPage) {
    axios.post(projectsPage.url+'/projects', {
      name: formData.name,
      description: formData.description,
      // difficulty_from : ,
      // difficulty_to : ,
      selected_stack : formData.technologies.map(tech => tech.value)

    })
    .then(response => {
      const data = response.data[0];
      const newItemList = [data].concat(projectsPage.state.items)
      projectsPage.setState({
        items: newItemList,
        resetProjectFormSwitch: !projectsPage.state.resetProjectFormSwitch,
        showProjectForm: false
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  componentDidMount() {
    fetch(this.url + "/projects")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.reverse()
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

  changeFormVisibility() {
    this.setState({display: !this.setState.display})
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div style={{paddingBottom: '25px'}}>
          <ProjectForm
            onSubmit={this.handleAddProject}
            projectsPage={this}
            display={this.state.showProjectForm ? 'block' : 'none'}
            resetSwitch={this.state.resetProjectFormSwitch}
            />
          <Button
            style={{float: 'right',
                    margin: '20px' }}
            type="primary"
            onClick={() => {this.setState({ showProjectForm: !this.state.showProjectForm })}}
          >
            {this.state.showProjectForm ? 'Cancel' : 'Add new project'}
          </Button>
          <br/>
          <br/>
          { items.map(project => <ProjectSummary props={project} key={project.id} /> ) }
        </div>
      );
    }
  }
}

export default Projects;
