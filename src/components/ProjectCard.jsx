import React from 'react'
import '../styles/ProjectCard.css'

function ProjectCard({ project, index }) {
  return (
    <div className="pcard" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="pcard__top">
        <span className="pcard__number">0{index + 1}</span>
        <span className="pcard__status">{project.status}</span>
      </div>

      <h3 className="pcard__title">{project.title}</h3>
      <p className="pcard__desc">{project.description}</p>

      <div className="pcard__tags">
        {project.techStack.map(t => (
          <span key={t} className="pcard__tag">{t}</span>
        ))}
      </div>

      <div className="pcard__actions">
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="pcard__link">
          Source Code ↗
        </a>
        {project.liveLink && (
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="pcard__link pcard__link--primary">
            Live Demo ↗
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
