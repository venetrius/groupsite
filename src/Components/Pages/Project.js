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

      <Card className={`${styles.projectCardClass}`}   key={`projectCard_${project.id}`} >
        <Card.Header><h3>Project Name: <b>{project.name}</b></h3></Card.Header>
        <Card.Body>
          <Tabs id="controlled-tab-example" activeKey={activeKey} onSelect={(k) => setActiveKey(k)} className={`${styles.cardHeaderNav}`}>
            <Tab className={`${styles.projectCarContent}`} eventKey={'description' + project.id} title="Description">
              <br></br>
              <Card.Text className={`${styles.cardText}`}>
              <b>Description:</b><br/>
                {project.description}
              </Card.Text>
              <Card.Text className={`${styles.cardText}`}>
                difficulty: {project.difficulty_from} - {project.difficulty_to}
              </Card.Text>
              {renerTechStack(stack)}
              <br />
            </Tab>

            <Tab className={`${styles.projectCarContent}`} eventKey={'comments' + project.id} title="Comments">
            <br></br>
              'The profile is important'
              <ChatWindow/>
            </Tab>

            <Tab className={`${styles.projectCarContent}`} eventKey={'links' + project.id} title="Links">
            <br></br>
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