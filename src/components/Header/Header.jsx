import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-left">
          <Link to="/" className="logo">
            Danche
          </Link>
        </div>
        <div className="header-right">
          <NavLink to="home">
            Home
          </NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="projects">Projects</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </div>
      </div>
    </>
  );
};
