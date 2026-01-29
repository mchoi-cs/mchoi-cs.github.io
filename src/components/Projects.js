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
  demoLink,
}) => {
  const displayUrl = link ? link.replace(/^https?:\/\//, "") : "";

  return (
    <article className="exp-item">
      <div className="exp-left">
        <h3 className="exp-company">{title}</h3>

        <p className="exp-role">
          {blurb}
          {demoLink ? (
            <>
              {" "}
              <a href={demoLink} target="_blank" rel="noreferrer" className="inline-link">
                here
              </a>
            </>
          ) : null}
        </p>

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
    
            title="BooBooBuddy @ ConuHacks X"
            blurb="🏆 winner of Dialogue's challenge to triage healthcare conditions in natural conversation and use location and voice services to set-up an appointment. Demo it"
            technologies="React, Node.js/express, OpenRouter API, Twilio API, GooglePlaces API, Prisma/SQLite"
            link="https://github.com/mchoi-cs/BooBooBuddy"
            demoLink="https://youtu.be/MM9-h7IDBh0?si=2LGlW-vzDlIDZB3g"
            date="2026"
            imgSrc="/assets/booboo.png"
            
            // imgAlt="TokenTalk project"
          />
  <ProjectItem
               title="TokenTalk @ uOttawa Hack"
            blurb="analyze LLM's ability to retain context windows and semantics in translations of Romantic languages."
            technologies="React, Node.js/express, OpenRouter API"
            link="https://github.com/choiIsabelle/uOttahack8-TokenTalk"
            date="2026"
            // imgSrc="/assets/chess1.png"
            // imgAlt="TokenTalk project"
          />
           <ProjectItem
               title="Raspberry NAS demo"
            blurb="(WIP) setting up an artifactory pipeline using raspberry nas for storing and sorting reference images for art workflow"
            technologies="raspberry pi os"
            link=""
            date="2026"
            // imgSrc="/assets/chess1.png"
            // imgAlt="TokenTalk project"
          />
        </div>

        {/* <p className="projects-redirect">
          Want to read more about my thoughts and experiences?{" "}
          <a href="#" target="_blank" rel="noreferrer" className="inline-link">
            Check out my articles →
          </a>
        </p> */}
      </section>
    </div>

    
  );
  
};
