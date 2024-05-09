import React from "react";
import "./Projects.css";
import data from "../../data/projects.json";

export const Projects = () => {
  const skillIcons = {
    React: "about/atom.png",
    Express: "about/express.png",
    Node: "about/nodejs.png",
    Ejs: "about/ejs.png",
    HTML: "about/html-5.png",
    CSS: "about/css-3.png",
  };
  return (
    <>
      <div>
        <div className="projects-container">
          {data.map((project, i) => (
            <div key={i} className="project-container">
              <a href={project.source} target="_blanc">
                <h3>{project.title}</h3>
                <img src={project.images} alt="Project Image" />
                <h6>{project.description}</h6>
                {/* <p>{project.skills.join(" ")}</p> */}
                <div className="skills-icons">
                  {project.skills.map((skill, j) => (
                    <img key={j} src={skillIcons[skill]} alt={skill} />
                  ))}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
