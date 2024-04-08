import React from "react";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home-elements">
      <div className="img-container-home">
        <div className="photo-flow">
          <img src="/my-pic.png" alt="me" className="my-photo" />
        </div>
      </div>
      <div className="text-container-home">
        <h1>DANCHE BACHEVA</h1>
        <h2>FULL-STACK JAVASCRIPT DEVELOPER</h2>
      </div>
    </div>
  );
};
