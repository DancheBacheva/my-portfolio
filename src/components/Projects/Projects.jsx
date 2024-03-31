import React from 'react';
import './Projects.css'
import data from "../../data/projects.json"

export const Projects = () => {
  return (
    <>
    <div>
      <div className='projects-container'>
        {data.map((project, i)=>(
          <div key={i} className='project-container'>
          <h3>{project.title}</h3>
          <img src={project.images} alt="Project Image" />
          <p>{project.description}</p>
          <p>{project.skills}</p>
          <a href={project.source} target='_blanc'>Link to GitHub</a>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}
