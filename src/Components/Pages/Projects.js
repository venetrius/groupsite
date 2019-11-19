import React, { Component } from "react";
import "./Projects.css";
import GeneralModal from './../Common/Modal/GeneralModal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

class Projects extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      list: []
    };
  }

  handleAddProject(event) {
    console.log(event.target.elements.formProjectName.value)
    console.log(event.target.elements.projectDescription.value)
    event.preventDefault()
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

  getProjectForm(){
    const difficultyLevels = ['Novice', 'Confident' ,'Seasoned', 'Hopeless']
    const techStacks = ['JavaScript', 'Node.js', 'React.js', 'Python','Java', '.Net', 'REST', 'GrapQL', 'PSQL', 'MySQL', 'MongoDB']
    return(
      <Form  onSubmit={(e) => this.handleAddProject(e)}>
        <Form.Group controlId="formProjectName">
          <Form.Label>Project Name</Form.Label>
          <Form.Control required type="text" placeholder="Enter project name" />
          <Form.Control.Feedback type="invalid">
            Please provide a project name
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="projectDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Form.Group controlId="techStack">
            <Form.Label>Tech stack</Form.Label>
            {this.getFormSelector(techStacks, 'stack', true)}
        </Form.Group>
        <Form.Row>
          <Col>
            <Form.Group controlId="difficultyFrom">
              <Form.Label>Difficulty from</Form.Label>
              {this.getFormSelector(difficultyLevels, 'diffFrom')}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="difficultyTo">
              <Form.Label>Difficulty to</Form.Label>
              {this.getFormSelector(difficultyLevels, 'diffTo')}
        </Form.Group>
          </Col>
        </Form.Row>
        <br/>
        <Button className="modal-button" variant="secondary">
          Close
        </Button>
        <Button className="modal-button" type="submit">Add project</Button>
      </Form>
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
          <GeneralModal
            title="Add a new project"
            buttonText ="Add project"
            modalBody={this.getProjectForm()}
          ></GeneralModal>
        </div>
      );
    }
  }
}

export default Projects;