import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <nav>
      <div className="header">
        <div className="header-left">
          <Link to="/" className="logo">
          <img src="src/assets/backgrounds/dbblue2.png" alt="logo" className="logo-db"/>
          </Link>
        </div>
        <div className="header-right">
          <NavLink className='about-link' to="about">About</NavLink>
          <NavLink className='projects-link' to="projects">Projects</NavLink>
          <NavLink className='contact-link' to="contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};
