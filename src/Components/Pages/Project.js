import React from 'react';


const Project=(props)=>{
    return (

        <div>{props.projectName}
        <button onClick={(e)=>{
            props.handleDeleteProject(props.projectName)
        }}>Remove Project</button>

</div>
    )
};

export default Project;