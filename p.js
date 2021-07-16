import React from "react";
import { Consumer } from "../Context";
import ReactMarkdown from "react-markdown";

function ProjectPage(props) {
  return (
    <Consumer>
      {value => {
        const { projects } = value;
        const id = props.match.params.id;
        const project = projects.filter(project => project.id == id)[0];
        const { title, imageUrl, body } = project;
        return (
          <div className="py-5 my-5 container">
            <div className="justify-content-center">
              <img src={imageUrl} alt={title} className="img-fluid" />
            </div>
            <h1 className="font-weight-light text-center my-5">{title}</h1>
            <ReactMarkdown children={body} />
          </div>
        );
      }}
    </Consumer>
  );
}
export default ProjectPage;
