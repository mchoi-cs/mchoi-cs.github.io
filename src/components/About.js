import React from "react";
import { Link } from "react-scroll";
import "../css/About.css";

export const About = () => {
  return (
    <div className="about-container">
      <section id="about-component" className="section-container">
        <div className="about-row">
          <div className="about-left">
            <p className="about-text">
              Hi, I'm Michelle. I'm a fourth-year Computer Science student at the University of Ottawa,
              graduating in April 2028.
              <br></br><br></br>
              I'm currently working at Ericsson (started September 2026). I want to work in firmware and robotics. I approach engineering from first principles. While black-box abstractions are useful for managing scope in day-to-day work, I believe they should never limit how deeply you understand a system, especially in firmware and robotics, where subtle failures occur right at the hardware boundary.
              <br></br><br></br>
              I love programming because technology is the chariot that pulls human capability forward. Working directly with the implements, building the low-level controls, systems, and interfaces that bridge humans to machines, gives the clearest vantage point to solve real problems.
              <br></br><br></br>
              Check out my{" "}
              <Link to="experience-component" smooth duration={500} className="inline-link">
                experience
              </Link>{" "}
              and{" "}
              <Link to="projects-component" smooth duration={500} className="inline-link">
                projects
              </Link>.
              <br></br><br></br>
              Outside of work, I do hackathons, powerlift, and I've been learning to draw. You can see my visual studies on{" "}
              <a
                href="https://charminglines.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="inline-link"
              >
                charminglines
              </a>{" "}
              and my gallery on{" "}
              <a
                href="https://michellechoi-art.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="inline-link"
              >
                my art site
              </a>.
            </p>

            <div className="about-drawingWrap">
              <img
                src="/assets/Dino.jpg"   
                alt="Dino drawing"
                className="about-drawing"
              />
            </div>
          </div>

          <div className="about-right">
            <div className="about-photoWrap">
              <img
                src="/assets/dino2.png"
                alt="Dino 2 drawing"
                className="about-photo"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
