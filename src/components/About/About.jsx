import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import data from "../../data/skills.json";

export const About = () => {
  return (
    <>
      <div className="about-info-container">
        <div className="info-container">
          <h2>
            FULL-STACK <br /> DEVELOPER
          </h2>
          <div className="icons-container">
            <div className="icon-container">
              <img
                src="src/assets/about/atom.png"
                alt="react-icon"
                className="react-icon"
              />
              <h5>REACT</h5>
            </div>
            <div className="icon-container">
              <img
                src="src/assets/about/nodejs.png"
                alt="nodejs-icon"
                className="nodejs-icon"
              />
              <h5>NODE.JS</h5>
            </div>
          </div>
        </div>
        <div className="about-container">
        <span>
          As an experienced translator with <strong>deep passion for IT,<br /></strong> I am excited about transitioning into the field of <strong>software
          development.</strong>
          <br />
          My background has provided me with excellent <strong>communication skills</strong> and <strong>attention to details</strong>, which I believe are
          crucial in software development.
          <br />
          My <strong>enthusiasm for technology,</strong> particularly in <strong>back-end development,</strong>{" "}
          <br />
          drives my ambition to excel in this field.
          
        </span>
      </div>
        <div className="info-container">
          <h2>TRANSLATOR</h2>
          <div className="icons-container">
            <div className="icon-container">
              <img
                src="src/assets/about/en.png"
                alt="en-icon"
                className="en-icon"
              />
              <h5>ENGLISH</h5>
            </div>
            <div className="icon-container">
              <img
                src="src/assets/about/fr.png"
                alt="fr-icon"
                className="fr-icon"
              />
              <h5>FRENCH</h5>
            </div>
          </div>
        </div>
      </div>
      
      <div className="about-h2-container">
        <h2 className="education">Education</h2>
        <h2 className="skills">Skills</h2>
        <h2 className="experience">Experience</h2>
      </div>
      <div className="about-content-container">
        <div className="info-container">
          <h3>SEMOS EDUCATION</h3>
          <ul>
            <li>JavaScript Developer</li>
          </ul>

          <h3>FACULTY OF PHILOLOGY</h3>
          <ul>
            <li>Bachelor's Degree</li>
          </ul>
        </div>
        <div className="skills-container">
          {data.map((image, i) => (
            <div key={i} className="icon-skill-container">
              <img src={image} alt="skill" className="icon-skill" />
            </div>
          ))}
        </div>
        <div className="info-container">
          <h3>
            Translator
            <br /> FINAL FICTION
          </h3>
          <ul>
            <li>
              Translating movies and tv-shows from English and French to
              Macedonian for Star network groups (Star, Star Life, Star Crime,
              Star Movies).
            </li>
            <li>Quality control of translations.</li>
          </ul>
        </div>
      </div>

      <div className="about-container">
        <p>
          I believe that with genuine aspiration for success, discipline, and
          perseverance, everything can be achieved, even the things that may
          seem impossible at first.
        </p>
        <p>
          Beyond my professional pursuits, I am passionate about travelling and
          exploring new places.
        </p>
      </div>
    </>
  );
};
