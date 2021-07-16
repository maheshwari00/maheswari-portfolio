import React from 'react';

 function ProjectPage(props) {
    return (
       <div className="py-5 my-5">
            <h1>
             Project {props.match.params.id}
            </h1>

       </div>
    );
}
export default ProjectPage;