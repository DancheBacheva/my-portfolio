import React, { useState } from "react";
import "./About.css";
import { Link } from "react-router-dom";
import data from "../../data/skills.json";

export const About = () => {
  const [showEducation, setShowEducation] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showExperience, setShowExperience] = useState(false);

  const toggleEducation = () => {
    setShowEducation(!showEducation);
    setShowSkills(false);
    setShowExperience(false);
  };

  const toggleSkills = () => {
    setShowSkills(!showSkills);
    setShowEducation(false);
    setShowExperience(false);
  };

  const toggleExperience = () => {
    setShowExperience(!showExperience);
    setShowEducation(false);
    setShowSkills(false);
  };

  return (
    <>
      <div className="about-info-container">
        <div className="about-container">
          <h3 className="hi">Hi, I am Danche</h3>
          <div className="profession">
            <div className="info-container">
              <h3>FULL-STACK DEVELOPER</h3>
              <div className="icons-container">
                <div className="icon-container">
                  <img
                    src="src/assets/about/atom.png"
                    alt="react-icon"
                    className="react-icon"
                  />
                </div>
                <div className="icon-container">
                  <img
                    src="src/assets/about/nodejs.png"
                    alt="nodejs-icon"
                    className="nodejs-icon"
                  />
                </div>
              </div>
            </div>
            <div className="info-container">
              <h3>TRANSLATOR</h3>
              <div className="icons-container">
                <div className="icon-container">
                  <img
                    src="src/assets/about/en.png"
                    alt="en-icon"
                    className="en-icon"
                  />
                </div>
                <div className="icon-container">
                  <img
                    src="src/assets/about/fr.png"
                    alt="fr-icon"
                    className="fr-icon"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="description-container">
            As an experienced translator with{" "}
            <strong>
              deep passion for IT,
              <br />
            </strong>{" "}
            I am excited about transitioning into the field of{" "}
            <strong>software development.</strong>
            <br />
            My background has provided me with excellent{" "}
            <strong>communication skills</strong> and{" "}
            <strong>attention to details</strong>, which I believe are crucial
            in software development.
            <br />
            My <strong>enthusiasm for technology,</strong> particularly in{" "}
            <strong>back-end development,</strong> <br />
            drives my ambition to excel in this field.
          </div>
        </div>

        <div className="about-content-container">
          <div className="details-container">
            <div className="about-h2-container">
              <h2 className="education" onClick={toggleEducation}>
                Education
              </h2>
            </div>
            {showEducation && (
              <div className="education-container">
                <h3>SEMOS EDUCATION</h3>
                <ul>
                  <li>JavaScript Developer</li>
                </ul>
                <h3>FACULTY OF PHILOLOGY</h3>
                <ul>
                  <li>Bachelor's Degree</li>
                </ul>
              </div>
            )}
          </div>
          <div className="details-container">
            <div className="about-h2-container">
              <h2 className="skills" onClick={toggleSkills}>
                Skills
              </h2>
            </div>
            {showSkills && (
              <div className="skills-container">
                {data.map((image, i) => (
                  <div key={i} className="icon-skill-container">
                    <img src={image} alt="skill" className="icon-skill" />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="details-container">
            <div className="about-h2-container">
              <h2 className="experience" onClick={toggleExperience}>
                Experience
              </h2>
            </div>
            {showExperience && (
              <div className="experience-container">
                <h3>
                  Translator
                  <br /> FINAL FICTION
                </h3>
                <ul>
                  <li>
                    Translating movies and tv-shows from English and French to
                    Macedonian for Star network groups.
                  </li>
                  <li>Quality control of translations.</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
