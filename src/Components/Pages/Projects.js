import React from "react";
import "./Projects.css";
import GeneralModal from './../Common/Modal/GeneralModal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

class Projects extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      list: [],
      keys : {}
    };
  }

  handleAddProject(event) {
    const selectedStack = []
    for(let option of event.target.elements.techStack.selectedOptions){
      selectedStack.push(option.label)
    }
    axios.post('https://yyc-server.herokuapp.com/projects', {
    //  axios.post('http://localhost:3030/projects', {
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
    fetch("https://yyc-server.herokuapp.com/projects")
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

  getRandomVariant(){
    const variant = ['primary' , 'secondary' , 'success' , 'danger' , 'warning' , 'info' , 'light' , 'dark']
    return variant[Math.floor(Math.random()*variant.length)]
  }

  renerTechStack(techStackAsString){
    const badges = techStackAsString.split(',').map(tech =>   
      <Badge pill variant={this.getRandomVariant()} style={{marginRight: "20px"}}> 
        {tech}
      </Badge>
    )
    return (
    <div>
      {badges}
    </div>
    )
  }

  setKey(key){
    this.setState({key})
  }

  renderProject(project){
    const cardHeaderStyle = {marginBottom : '0rem'}

    const stack = project.selected_stack || ''
    return (
      <div>
      <Card  key = {`projectCard_${project.id}`} >
      <Card.Header><b>{project.name}</b></Card.Header>
      <Card.Body>
      <Tabs id="controlled-tab-example" activeKey={this.state.keys[project.id]} onSelect={k => this.setKey(k)} style={cardHeaderStyle}>
      <Tab eventKey={'description'+project.id} title="Description">
        <br></br>
        <b>Description:</b>
        <Card.Text>
          {project.description}
        </Card.Text>
        <Card.Text>
          difficulty: {project.difficulty_from} - {project.difficulty_to}
        </Card.Text>
        {this.renerTechStack(stack)}
        <br/>
      </Tab>
      <Tab eventKey={'comments'+project.id} title="Comments">
      'The profile is important'
      </Tab> 
      <Tab eventKey={'links'+project.id} title="Links">
        'Home home home'
        GitHub : <a>a link to GitHub</a>
      </Tab>


      </Tabs>
      <Button variant="primary">Join the team</Button>
      </Card.Body>
    </Card>
    <br/>
    </div>)
  }

  getFormSelector(choices, selectorId, isMultiple){
    const options = choices.map(choice => <option key={selectorId+choice}>{choice}</option>) 
    console.log('len', options.length)
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
          <GeneralModal key='top'
            title="Add a new project"
            buttonText ="Add project"
            modalBody={this.getProjectForm()}
          ></GeneralModal>
          <br/>
          <br/>
          {list}
          <br/>
          <GeneralModal key='bottom'
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