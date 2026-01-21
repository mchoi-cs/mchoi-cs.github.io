import React from "react";
import "../css/Home.css";

export const Home = () => {
  return (
    <div className="home-container">
      <section id="home-component">
        <div className="home-section">
          <h2 className="h2">Hello!</h2>
          <h1>Michelle Choi</h1>
          <p>CS @ uOttawa.</p>
        </div>
        <div className="home-img-container">
          <img
            className="character"
            src="/assets/birdie.png"
            alt="Character illustration"
          />
        </div>
      </section>
    </div>
  );
};
