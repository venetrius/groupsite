import React from 'react';
import Project from './Project';

const ProjectList =(props)=>{

    return(<div>
        {props.list.length===0&&<p>There is no project in the Project List. Please add some.</p>}
        {

            props.list.map((project)=>(
                <Project key={project}
                projectName={project}
                handleDeleteProject={props.handleDeleteProject}></Project>
            ))
        }
        <button class='button' onClick={props.handleDeleteProjects}>Remove all Projects</button>



    </div>)


}

export default ProjectList;

