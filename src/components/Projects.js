import React from "react";
import "../css/About.css";
import "../css/Projects.css";

const ProjectItem = ({
  title,
  blurb,
  technologies,
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

        <p className="project-tech">
          <span className="project-tech-label">technologies:</span>{" "}
          {technologies}
        </p>

        {link ? (
          <a className="exp-link" href={link} target="_blank" rel="noreferrer">
            {displayUrl}
          </a>
        ) : null}
      </div>

   <div className="proj-right">
        <div className="proj-date">{date}</div>

        <div className="proj-doodleWrap">
          <img
            className="proj-doodle"
            src={imgSrc}
            alt={imgAlt || ""}
            loading="lazy"
          />
        </div>
      </div>
    </article>
  );
};

export const Projects = () => {
  return (
    <div className="projects-container">
      <section id="projects-component" className="section-container">
        <h2>Projects</h2>

        <div className="experience-list">
          <ProjectItem
            title="GoodKnight @ ChessHacks"
            blurb="training infrastructure and evaluation pipeline for a neural-network-based chess engine"
            technologies="python, pytorch, docker, aws"
            link=" https://github.com/choiIsabelle/GoodKnight"
            date="2025"
            imgSrc="/assets/chess1.jpg"
            imgAlt="chess doodle"
          />

          <ProjectItem
            title="TokenTalk @ uOttawa Hack"
            blurb="analyze LLM's ability to retain context windows and semantics in translations of Romantic languages."
            technologies="React, Node.js/express, OpenRouter API"
            link=""
            date="2026"
            // imgSrc="/assets/chess1.png"
            // imgAlt="TokenTalk project"
          />
        </div>
      </section>
    </div>

    
  );
  
};
