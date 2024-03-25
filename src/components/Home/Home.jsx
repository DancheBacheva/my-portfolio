import React from "react";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home-elements">
      <div className="img-containter-home">
        <img src="/DSC_0949.JPG" alt="me" className="my-photo" />
      </div>
      <div className="text-container-home">
      <h1>DANCHE <span className="surname">BACHEVA</span></h1>
      <h2>FULL-STACK JAVASCRIPT DEVELOPER</h2>
      </div>
    </div>
  );
};
