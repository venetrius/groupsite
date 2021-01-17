import React from 'react';
import Tag from 'antd/es/tag'

const colors = [ 'pink', 'red', 'yellow', 'orange', 'cyan', 'green', 'blue', 'purple', 'geekblue', 'magenta', 'volcano', 'gold', 'lime']

const getRandomVariant = () => colors[Math.floor(Math.random()*colors.length)]

const renderTechStack = (techStackAsString) => (
  <div>
    {techStackAsString.split(',').map(tech =>
      <Tag key={`${tech}-badge`} color={getRandomVariant()} style={{marginRight: "20px"}}> {tech} </Tag>
    )}
  </div>)

const ProjectSummary = (props) => {
  const project = props.props
  const stack = project.selected_stack || ''

  return (
    <div className={'project-summary'}>
      <h3 className={'centered-text'}><b>{project.name}</b></h3>
      <p> {project.description} </p>
      {renderTechStack(stack)} <br/>
    </div>
  )
}

export default ProjectSummary
