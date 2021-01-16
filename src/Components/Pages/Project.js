import React from 'react';
import ChatWindow from './../Common/Chat/index';
import Tabs from 'antd/es/tabs';
import Tag from 'antd/es/tag'
const { TabPane } = Tabs;

const Project = (props) => {
  const project = props.props

  const stack = project.selected_stack || ''

  function renderTechStack(techStackAsString){

    return (
      <div>
        {techStackAsString.split(',').map(tech =>
          <Tag key={`${tech}-badge`}color={getRandomVariant()} style={{marginRight: "20px"}}>
            {tech}
          </Tag>
        )}
      </div>
    )
  }

  function getRandomVariant(){
    const colors = [
      'pink', 'red', 'yellow', 'orange', 'cyan', 'green', 'blue', 'purple', 'geekblue', 'magenta', 'volcano', 'gold', 'lime',
    ];
    return colors[Math.floor(Math.random()*colors.length)]
  }

  return (
    <div className={'project-summary'}>
      <h3 className={'centered-text'}><b>{project.name}</b></h3>
      <p> {project.description} </p>
      {renderTechStack(stack)} <br/>
    </div>
  )
};

export default Project;
