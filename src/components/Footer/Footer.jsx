import React from 'react';
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

export const Footer = () => {
  return (
    <div>
      <Link to='https://github.com/DancheBacheva' target='_blanc'><FaGithub /></Link>
      <Link to='https://www.linkedin.com/in/danche-bacheva-b3ab5a93/' target='_blanc'>
      <FaLinkedin /></Link>
      <FaDiscord />
    </div>
  )
}
