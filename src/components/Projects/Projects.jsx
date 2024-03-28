import React from 'react';
import './Projects.css'
import data from "../../data/projects.json"

export const Projects = () => {
  return (
    <div>
      <div className='project-container'>
        {data.map((project, i)=>(
          <div key={i}>
          <h3>{project.title}</h3>
          <img src={project.images} alt="Project Image" />
          <p>{project.description}</p>
          <a href={project.source} target='_blanc'>Link to GitHub</a>
          </div>
        ))}
      </div>
    </div>
  )
}
