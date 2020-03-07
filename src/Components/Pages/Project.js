import React, { useState }  from 'react';
import ChatWindow from './../Common/Chat/index';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import * as styles from "./projects_style.js";
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';


const Project = (props) => {

  console.log(props.props)
  const project = props.props
  const [activeKey, setActiveKey] = useState('description' + project.id);

  const cardHeaderStyle = { marginBottom: '0rem' }

  const stack = project.selected_stack || ''

  function renerTechStack(techStackAsString){
    const badges = techStackAsString.split(',').map(tech =>   
      <Badge pill variant={getRandomVariant()} style={{marginRight: "20px"}}> 
        {tech}
      </Badge>
    )
    return (
      <div>
        {badges}
      </div>
    )
  }

  function getRandomVariant(){
    const variant = ['primary' , 'secondary' , 'success' , 'danger' , 'warning' , 'info' , 'light' , 'dark']
    return variant[Math.floor(Math.random()*variant.length)]
  }

  return (
    <div>
      <Card key={`projectCard_${project.id}`} >
        <Card.Header><b>{project.name}</b></Card.Header>
        <Card.Body>
          <Tabs id="controlled-tab-example" activeKey={activeKey} onSelect={(k) => setActiveKey(k)} style={cardHeaderStyle}>
            <Tab className={`${styles.projectCardClass}`} eventKey={'description' + project.id} title="Description">
              <br></br>
              <b>Description:</b>
              <Card.Text>
                {project.description}
              </Card.Text>
              <Card.Text>
                difficulty: {project.difficulty_from} - {project.difficulty_to}
              </Card.Text>
              {renerTechStack(stack)}
              <br />
            </Tab>

            <Tab className={`${styles.projectCardClass}`} eventKey={'comments' + project.id} title="Comments">
              'The profile is important'
              <ChatWindow/>
            </Tab>

            <Tab className={`${styles.projectCardClass}`} eventKey={'links' + project.id} title="Links">
              Home home home
              GitHub : <a> a link to GitHub</a>
            </Tab>
          </Tabs>
          <Button variant="primary">Join the team</Button>
        </Card.Body>
      </Card>
      <br />
    </div>
  )
};

export default Project;