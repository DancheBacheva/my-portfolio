import React, { useState } from "react";
import "./About.css";
import { Link } from "react-router-dom";
import data from "../../data/skills.json";
import { GiHand } from "react-icons/gi";

export const About = () => {
  // const [showEducation, setShowEducation] = useState(false);
  const [showSkills, setShowSkills] = useState(true);
  // const [showExperience, setShowExperience] = useState(false);

  // const toggleEducation = () => {
  //   setShowEducation(!showEducation);
  //   setShowSkills(false);
  //   setShowExperience(false);
  // };

  const toggleSkills = () => {
    setShowSkills(!showSkills);
    // setShowEducation(false);
    // setShowExperience(false);
  };

  // const toggleExperience = () => {
  //   setShowExperience(!showExperience);
  //   setShowEducation(false);
  //   setShowSkills(false);
  // };

  return (
    <>
      <div className="about-info-container">
        <div className="about-container">
          <h3 className="hi">
            {" "}
            <GiHand style={{ marginTop: "8px" }} />
            &nbsp; HI, I AM DANCHE
          </h3>
          <div className="info-container">
            <h3>FULL-STACK DEVELOPER OF WEB APPLICATIONS </h3>
            {/* <div className="icons-container">
              <div className="icon-container">
                <img
                  src="about/atom.png"
                  alt="react-icon"
                  className="react-icon"
                />
              </div>
              <div className="icon-container">
                <img
                  src="about/nodejs.png"
                  alt="nodejs-icon"
                  className="nodejs-icon"
                />
              </div>
            </div> */}
          </div>
          {/* <div className="info-container-translator">
            <h3>TRANSLATOR</h3>
            <div className="icons-container">
              <div className="icon-container">
                <img src="about/en.png" alt="en-icon" className="en-icon" />
              </div>
              <div className="icon-container">
                <img src="about/fr.png" alt="fr-icon" className="fr-icon" />
              </div>
            </div>
          </div> */}
          <div className="description-container">
            <p>
              Hey there! I’m a translator turned tech enthusiast on a mission to
              bring ideas to life through software development. Back-end coding?
              Front-end coding? I’m all over it! From crafting responsive
              front-end designs to building solid back-end structures, I’m
              diving into both worlds with enthusiasm!
            </p>{" "}
            <p>
              {" "}
              My background in translation means I’ve got an eye for detail and
              communication skills that keep my code clean and{" "}
              <Link
                to="/projects"
                style={{
                  color: "white",
                  textDecoration: "none",
                  backgroundColor: "blue",
                  padding: "4px 8px",
                  borderRadius: "4px",
                }}
              >
                <strong>my projects</strong>
              </Link>{" "}
              on point.
            </p>
            <p>
              When I’m not coding or exploring new tech trends, I’m likely off
              chasing travel adventures and finding inspiration in new places.
              Ready to turn visions into reality—one line of code at a time!
            </p>
          </div>
        </div>

        <div className="about-content-container">
          {/* <div className="details-container">
              <div className="about-h2-container">
                <h2 className="education" onClick={toggleEducation}>
                  Education
                </h2>
              </div>
              {showEducation && (
                <div className="education-container">
                  <h3>SEMOS EDUCATION</h3>
                  <ul>
                    <li><a href="https://karierencentar.com/rising-star/dance-baceva.html" target="_blanc">JavaScript Developer</a></li>
                  </ul>
                  <h3>FACULTY OF PHILOLOGY</h3>
                  <ul>
                    <li>Bachelor's Degree</li>
                  </ul>
                </div>
              )}
            </div> */}
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
          {/* <div className="details-container">
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
            </div> */}
        </div>
      </div>
    </>
  );
};
