import React from "react";
import "../css/About.css";

export const About = () => {
  return (
    <div className="about-container">
      <section id="about-component" className="section-container">
        <div className="about-row">
          <div className="about-left">
            <p className="about-text">
              Hi, I'm Michelle. I'm a fourth-year Computer Science student at the University of Ottawa,
              graduating in Spring 2027.
              <br></br>  
              I'm currently on a 12-month work term working at Ford.
              {/* for embedded systems. I value curiosity, initiative, and clarity, and I enjoy
              presenting ideas and talking through systems in reviews and demos.  */}
              <br></br>
              Outside of work, I do hackathons, powerlift, and I've been learning to draw. You can see some of my art in the{" "}
              <a href="#gallery-component" className="inline-link">
                gallery
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
            {/* <div className="about-photoWrap">
              <img
                src="/assets/myphoto.jpeg"
                className="about-photo"
              /> */}
            {/* </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};
