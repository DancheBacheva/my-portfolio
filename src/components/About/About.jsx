import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <>
      <div className="about-container">
        <p>
          A graduate translator with strong proficiency in both English and
          French.
        </p>
        <p>
          Passionate about IT, aspiring to transition in the field of software
          development after completing a full-stack developer program at Semos
          Education.
        </p>
        <p>
          My background as a translator has provided me with excellent
          communication skills and attention to details, which I believe are
          crucial in software development. My passion for technology,
          particularly in back-end development, drives my ambition to excel in
          this field.
        </p>
        <p>
          My experience showed me that with genuine aspiration for success,
          discipline, and perseverance, everything can be achieved, even the
          things that may seem impossible at first. Beyond my professional
          pursuits, I am passionate about travelling and exploring new places.
        </p>
      </div>
      <Link>Skills</Link>
      <Link>Experience</Link>
      <Link>Education</Link>
    </>
  );
};
