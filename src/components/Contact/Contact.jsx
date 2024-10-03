import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

export const Contact = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/my_resume.pdf";
    link.download = "DancheBacheva_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div>
        <div className="contact-container">
          <div className="contact-info">
            <img src="contact/mobile-icon.png" alt="" />
            <p>+389 71 743 981</p>
          </div>
          <div className="contact-info">
            <img src="contact/gmail-icon.png" alt="" />
            <p>danchebacheva@gmail.com</p>
          </div>
          <div style={{ fontSize: "2rem" }}>
            <Link
              to="https://github.com/DancheBacheva"
              target="_blanc"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <FaGithub />
            </Link>
            <span style={{ marginRight: "1rem" }}></span>
            <Link
              to="https://www.linkedin.com/in/danche-bacheva-b3ab5a93/"
              target="_blanc"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <FaLinkedin />
            </Link>
          </div>
          <button className="download-btn" onClick={handleDownload}>
            <FaFileDownload /> Download CV
          </button>
        </div>
      </div>
    </>
  );
};
