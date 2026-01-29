import React from "react";
import "../css/About.css";
import "../css/Projects.css";

const ExtracurricularItem = ({
  title,
  blurb,
  link,
  date,
  imgSrc,
  imgAlt,
}) => {
  const displayUrl = link ? link.replace(/^https?:\/\//, "") : "";

  return (
    <article className="exp-item">
      <div className="exp-left">
        <h3 className="exp-company">{title}</h3>

        <p className="exp-role">{blurb}</p>

        {link ? (
          <a className="exp-link" href={link} target="_blank" rel="noreferrer">
            {displayUrl}
          </a>
        ) : null}
      </div>

      <div className="proj-right">
        <div className="proj-date">{date}</div>

        {imgSrc ? (
          <div className="proj-doodleWrap">
            {link ? (
              <a href={link} target="_blank" rel="noreferrer">
                <img
                  className="proj-doodle"
                  src={imgSrc}
                  alt={imgAlt || ""}
                  loading="lazy"
                />
              </a>
            ) : (
              <img
                className="proj-doodle"
                src={imgSrc}
                alt={imgAlt || ""}
                loading="lazy"
              />
            )}
          </div>
        ) : null}
      </div>
    </article>
  );
};

export const Extracurriculars = () => {
  return (
    <div className="projects-container">
      <section id="extracurriculars-component" className="section-container">
        <h2>Extracurriculars</h2>

        <div className="experience-list">
          <ExtracurricularItem
            title="Example Club"
            blurb="Description of your involvement and what you did"
            link=""
            date="2024 - Present"
            // imgSrc="/assets/example.png"
            // imgAlt="club logo"
          />
        </div>
      </section>
    </div>
  );
};
