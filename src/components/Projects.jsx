import React, { useEffect, useRef } from 'react'
import projects from '../data/projects.js'
import '../styles/Projects.css'

function Projects() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15 }
    )
    ref.current.querySelectorAll('.proj-card').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="projects section" ref={ref}>
      <div className="container">
        <span className="section__label">Selected Work</span>
        <h2 className="section__title">Projects</h2>
        <div className="section__divider" />
      </div>

      <div className="projects__stack">
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="proj-card"
            style={{ '--i': i }}
          >
            <div className="proj-card__inner">
              <div className="proj-card__image">
                {project.video ? (
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <img src={project.image} alt={project.title} loading="lazy" />
                )}
              </div>
              <div className="proj-card__content">
                <div className="proj-card__meta">
                  <span className="proj-card__number">( {String(i + 1).padStart(2, '0')} )</span>
                  <span className={`proj-card__type proj-card__type--${project.type?.toLowerCase()}`}>
                    {project.type === 'Group' ? '👥 Group Project' : '👤 Solo Project'}
                  </span>
                </div>
                <h3 className="proj-card__title">{project.title}</h3>
                <p className="proj-card__desc">{project.description}</p>
                <div className="proj-card__tags">
                  {project.techStack.map(t => (
                    <span key={t} className="proj-card__tag">{t}</span>
                  ))}
                </div>
                <div className="proj-card__actions">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="proj-card__link">
                    Source Code <span>↗</span>
                  </a>
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="proj-card__link proj-card__link--primary">
                      Live Demo <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects