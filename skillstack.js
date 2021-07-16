import React from 'react'
import Skill from './skill';
import {v4 as uuid} from "uuid";

 function Skillstack() {
     const skills= [
    {
        id: 1,
        name: "HTML5",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/html5.png",
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 2,
        name: "CSS3",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/css3.png",
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 3,
        name: "Javascript",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/javascript.png",
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 4,
        name: "Bootstrap 4",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/bootstrap4.png",
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 5,
        name: "React",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/react.png",
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 6,
        name: "MySQL",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/mysql.png",
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 7,
        name: "Python",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/python.png",
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 8,
        name: "Flask",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/flask.png",
        starsTotal: 3,
        starsActive: 2,
      },

 ];
       const finalSkillRow=[];
          for (let i=0; i<2;i++){
              let skillrow=skills.slice(i*4,(i+1)*4);
              finalSkillRow.push(
              <div key={uuid()} className="d-flex justify-content-around py-5">
              {
                skillrow.map((skill) =>(
                  <Skill key={uuid()} skill={skill} />
                ))
              }
              </div>
              )
            }
          return (
              <div className="bg-light w-100">
              <div className="container text-center py-5">
                <h1 className="font-weight-light">
                  <span className="text-info">Technology</span> stack
                </h1>
                <div className="lead pb-5">
                  I design, develop and deliver with these weapons
                </div>
                {finalSkillRow}
              </div>
            </div>
          );
       }
export default Skillstack;