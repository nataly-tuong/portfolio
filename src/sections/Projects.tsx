import { useState } from "react";
import Arrow from "../components/Arrow";
import { projects } from "../data/projects";
export default function Projects() {
  const [expanded, setExpanded] = useState<string[]>([]);
  return (
    <section id="Projects" className="section projects">
      <div className="section-heading">
        <p className="eyebrow">
          <span className="accent">01</span> / SELECTED WORK
        </p>
        <h2>Ideas into projects.</h2>
        <p>Things I made</p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project" key={project.id}>
            <div
              className={`project-image ${!project.image ? "portfolio-image" : ""}`}
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  width="1400"
                  height="1700"
                />
              ) : (
                <div
                  className="portfolio-art"
                  aria-label="Typographic preview of this portfolio"
                >
                  <div className="mini-nav">
                    nataly tuong<span>PORTFOLIO / 2026</span>
                  </div>
                  <div className="mini-name">
                    Nataly
                    <br />
                    Tuong<span>.</span>
                  </div>
                  <div className="mini-bottom">
                    <span>THOUGHTFUL INTERFACES.</span>
                    <span className="accent">↗</span>
                  </div>
                </div>
              )}
              <span className="project-number">{project.id}</span>
            </div>
            <div className="project-meta">
              <p className="eyebrow">{project.category}</p>
              <span>2026</span>
            </div>
            <div className="project-title">
              <h3>{project.title}</h3>
              <div className="project-links">
                {project.github && (
                  <a
                    className="icon-link"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source on GitHub`}
                    title="GitHub source"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    >
                      <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 16" />
                    </svg>
                  </a>
                )}
                {project.live && (
                  <a
                    className="icon-link"
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title} live site`}
                    title="Live site"
                  >
                    <Arrow />
                  </a>
                )}
              </div>
            </div>
            <p className="project-description">{project.description}</p>
            <ul className="tags" aria-label={`${project.title} technologies`}>
              {project.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <button
              className="details-toggle"
              aria-expanded={expanded.includes(project.id)}
              aria-controls={`details-${project.id}`}
              onClick={() =>
                setExpanded((old) =>
                  old.includes(project.id)
                    ? old.filter((id) => id !== project.id)
                    : [...old, project.id],
                )
              }
            >
              Project notes{" "}
              <span aria-hidden="true">
                {expanded.includes(project.id) ? "−" : "+"}
              </span>
            </button>
            <div
              id={`details-${project.id}`}
              hidden={!expanded.includes(project.id)}
              className="project-details"
            >
              <p>{project.detail}</p>
              <p className="workflow-note">{project.note}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
