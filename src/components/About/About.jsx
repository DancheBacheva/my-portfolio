import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { FaSlack } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

export const About = () => {
  return (
    <>
      <div className="about-container">
        <p>
          A graduate translator with strong proficiency in both English and
          French. <br />
          Passionate about IT, aspiring to transition in the field of software
          development after completing a full-stack developer program at Semos
          Education.
          <br />
          My background as a translator has provided me with excellent
          communication skills and attention to details, which I believe are
          crucial in software development. My passion for technology,
          particularly in back-end development, drives my ambition to excel in
          this field.
          <br />
          My experience showed me that with genuine aspiration for success,
          discipline, and perseverance, everything can be achieved, even the
          things that may seem impossible at first. Beyond my professional
          pursuits, I am passionate about travelling and exploring new places.
        </p>
      </div>
      <div className="about-link-container">
        <Link className="skills-link" to="about/skills">
          Skills
        </Link>
        <Link className="experience-link" to="about">
          Experience
        </Link>
        <Link className="education-link" to="about">
          Education
        </Link>
      </div>
      <div className="skills-container">
        <FaHtml5 />
        <FaCss3Alt />
        <IoLogoJavascript />
        <br />
        <FaNode />
        <FaReact />
        <br />
        <SiVisualstudiocode />
        <SiPostman />
        <FaSlack />
        <FaDiscord />
      </div>
    </>
  );
};
