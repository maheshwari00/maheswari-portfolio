import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

function ProjectSection() {
        const projects= [
          {
            id: 1,
            title: "Project 1",
            imageUrl: "https://d2h0cx97tjks2p.cloudfront.net/blogs/wp-content/uploads/sites/2/2019/09/top-python-projects-with-source-code-1-1.jpg",
            excerpt: "This is my project about...",
          },
          {
            id: 2,
            title: "Project 2",
            imageUrl: "https://www.trackschoolbus.com/wp-content/uploads/2014/11/Advantages-of-GPS-Tracking-System.jpg",
            excerpt: "This is my project about...",
          },
          {
            id: 3,
            title: "Project 3",
            imageUrl:"https://creativetimblog.com/blog/wp-content/uploads/2020/04/free-dashboard-templates-730x410.jpg",
            excerpt: "This is my project about...",
          },  
      ];
        return(
          <div className="container text-center my-5">
            <h1 className="font-weight-light">
            <br/>
              My <span className="text-info">Projects</span>
            </h1>
            <div className="lead">I build products. Just like this website</div>
            <div className="row my-5 pt-3">
              {projects.map((project) => (
                <div key={project.id} className="col-12 col-md-4 my-2">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
            <div className="my-5">
              <Link to="/allprojects" className="text-dark text-right">
                <h5>
                  See my projects
                  <i className="fas fa-arrow-right align-middle pl-1"></i>
                </h5>
              </Link>
            </div>
          </div>
        );
 }

export default ProjectSection;
