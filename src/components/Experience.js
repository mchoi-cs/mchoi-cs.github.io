import React from "react";
import "../css/About.css";

const ExperienceItem = ({ company, roleLine, desc, technologies, website, date, imgSrc, imgAlt }) => {
  const displayUrl = website ? website.replace(/^https?:\/\//, "") : "";

  return (
    <article className="exp-item">
      <div className="exp-left">
        <h3 className="exp-company">{company}</h3>
        <p className="exp-role">{roleLine}</p>

        {desc ? <p className="exp-desc">{desc}</p> : null}

        {technologies ? (
          <p className="project-tech">
            <span className="project-tech-label">technologies:</span> {technologies}
          </p>
        ) : null}

        {website ? (
          <a className="exp-link" href={website} target="_blank" rel="noreferrer">
            {displayUrl}
          </a>
        ) : null}
      </div>

      <div className="exp-right">
        <div className="exp-date">{date}</div>

        {imgSrc ? (
          <div className="exp-doodleWrap">
            {website ? (
              <a href={website} target="_blank" rel="noreferrer">
                <img className="exp-doodle" src={imgSrc} alt={imgAlt || ""} loading="lazy" />
              </a>
            ) : (
              <img className="exp-doodle" src={imgSrc} alt={imgAlt || ""} loading="lazy" />
            )}
          </div>
        ) : null}
      </div>
    </article>
  );
};

export const Experience = () => {
  return (
    <div className="experience-container">
      <section id="experience-component" className="section-container">
        <h2>Experience</h2>

        <div className="experience-list">
          <ExperienceItem
            company="Ericsson"
            roleLine="Software Engineering Intern"
            desc="Cloud RAN Layer 1"
            technologies="C++"
            website="https://www.ericsson.com"
            date="2026 - Present"
          />

          <ExperienceItem
            company="Ford"
            roleLine="DevOps"
            desc="Embedded pipeline"
            technologies="Jenkins, Docker, Python, Bash"
            website="https://www.ford.com"
            date="September 2025 - August 2026"
            imgSrc="/assets/car.jpeg"
            imgAlt="doodle"
          />

          {/* <ExperienceItem
            company="Government of Canada"
            date="January 2025 - April 2025"
          /> */}
        </div>
      </section>
    </div>
  );
};
