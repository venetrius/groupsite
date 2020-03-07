import React from "react";
import Project from './Project';

import * as styles from "./projects_style.js";
import GeneralModal from './../Common/Modal/GeneralModal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Col from 'react-bootstrap/Col';


class Projects extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      showModal :false,
      isLoaded: false,
      list: [],
      keys : {}
    };
    this.url = 'https://yyc-server.herokuapp.com'
  }

  handleAddProject(event) {
    const selectedStack = []
    for(let option of event.target.elements.techStack.selectedOptions){
      selectedStack.push(option.label)
    }
    axios.post(this.url+'/projects', {
      name: event.target.elements.formProjectName.value,
      description: event.target.elements.projectDescription.value,
      difficulty_from : event.target.elements.difficultyFrom.value,
      difficulty_to : event.target.elements.difficultyTo.value,
      selected_stack : selectedStack

    })
    .then(response => {
      const data = response.data.results;
      const newItemList = [].concat(this.state.items)
      this.setState({items: newItemList})
    })
    .catch(error => {
      console.log(error);
    })
    event.preventDefault()
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

  renderProject(project){
    return(<Project props={project} key={project.id}></Project>)
  }

  getFormSelector(choices, selectorId, isMultiple){
    const options = choices.map(choice => <option key={selectorId+choice}>{choice}</option>) 
    return (
      <Form.Control  as="select" multiple={isMultiple}>
        {options}
      </Form.Control>
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
        <Button className="modal-button" variant="secondary" onClick = {() => { console.log('fireing event'); this.setState({showModal : false}) }}>
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
          <GeneralModal key='top'
            show={this.state.showModal}
            title="Add a new project"
            buttonText ="Add project"
            modalBody={this.getProjectForm()}
          ></GeneralModal>
          <br/>
          <br/>
          {list}
          <br/>
        </div>
      );
    }
  }
}

export default Projects;