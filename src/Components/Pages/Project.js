import React from 'react';
import ChatWindow from './../Common/Chat/index';
import { Tabs, Tag } from 'antd';
const { TabPane } = Tabs;

const Project = (props) => {
  const project = props.props

  const stack = project.selected_stack || ''

  function renderTechStack(techStackAsString){

    return (
      <div>
        {techStackAsString.split(',').map(tech =>
          <Tag color={getRandomVariant()} style={{marginRight: "20px"}}>
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

  const generalTab = ( <>
  <b>Description:</b>
      <p> {project.description} </p>
      <p>
        difficulty: {project.difficulty_from} - {project.difficulty_to}
      </p> {renderTechStack(stack)} <br/>
    </>
  )

  return (
    <div style={{paddingLeft: '25px', maxWidth: '800px'}}>
      <h3><b>{project.name}</b></h3>
      <Tabs defaultActiveKey="1" style={{height: '250px', overflow: 'auto'}}>
        <TabPane tab="Description" key="1">
          {generalTab}
        </TabPane>
        <TabPane tab="Comments" key="2">
          <ChatWindow/>
        </TabPane>
        <TabPane tab="Links" key="3">
          Work in progress
        </TabPane>
      </Tabs>
    </div>
  )
};

export default Project;
