import React from "react";
import "../css/About.css";

const ExperienceItem = ({ company, roleLine, desc, website, date, imgSrc, imgAlt }) => {
  const displayUrl = website ? website.replace(/^https?:\/\//, "") : "";

  return (
    <article className="exp-item">
      <div className="exp-left">
        <h3 className="exp-company">{company}</h3>
        <p className="exp-role">{roleLine}</p>

        {desc ? <p className="exp-desc">{desc}</p> : null}

        {website ? (
          <a className="exp-link" href={website} target="_blank" rel="noreferrer">
            {displayUrl}
          </a>
        ) : null}
      </div>

      <div className="exp-right">
        <div className="exp-date">{date}</div>

        <div className="exp-doodleWrap">
          <img className="exp-doodle" src={imgSrc} alt={imgAlt || ""} loading="lazy" />
        </div>
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
            company="Ford"
            roleLine="DevOps"
            desc="Embedded pipeline"
            date="September 2025 - August 2026"
            imgSrc="/assets/car.jpeg"
            imgAlt="doodle"
          />

          <ExperienceItem
            company="Government of Canada"
            date="January 2025 - April 2025"
          />
        </div>
      </section>
    </div>
  );
};
