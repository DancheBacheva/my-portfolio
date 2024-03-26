import React from 'react';
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <div style={{ fontSize: '2rem' }}>
      <Link to='https://github.com/DancheBacheva' target='_blanc'><FaGithub /></Link>
      <span style={{ marginRight: '1rem' }}></span>
      <Link to='https://www.linkedin.com/in/danche-bacheva-b3ab5a93/' target='_blanc'>
      <FaLinkedin /></Link>
    </div>
  )
}
