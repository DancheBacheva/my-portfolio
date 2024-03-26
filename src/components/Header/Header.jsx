import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-left">
          <Link to="/" className="logo">
          <FaHome />
          </Link>
        </div>
        <div className="header-right">
          <NavLink className='about-link' to="about">About</NavLink>
          <NavLink className='projects-link' to="projects">Projects</NavLink>
          <NavLink className='contact-link' to="contact">Contact</NavLink>
        </div>
      </div>
    </>
  );
};
