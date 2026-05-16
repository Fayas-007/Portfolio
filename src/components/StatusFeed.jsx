// components/StatusFeed.jsx — Studies
import React from 'react'
import '../styles/StatusFeed.css'

const STUDIES = [
  {
    year: 'COMPLETED',
    title: 'HND',
    org: 'Higher National Diploma',
    detail: 'Completed.',
    color: 'var(--accent)',
  },
  {
    year: 'COMPLETED',
    title: 'BENG — SOFTWARE ENGINEERING',
    org: 'Bachelor of Engineering',
    detail: 'Completed.',
    color: 'var(--blue)',
  },
]

function StatusFeed() {
  return (
    <section id="stats" className="stats section">
      <div className="container">
        <div className="section__header">
          <span className="section__coord">SEC.02 // EDUCATION</span>
          <h2 className="section__title">STUDIES <span>COMPLETED</span></h2>
          <div className="section__line" />
        </div>

        <div className="edu">
          {STUDIES.map((s, i) => (
            <div key={s.title} className="edu__card card crosshair reveal" style={{ animationDelay: `${i * 0.08}s` }}>
              <span className="ch-bl" /><span className="ch-br" />
              <div className="edu__top">
                <span className="edu__status" style={{ color: s.color }}>{s.year}</span>
                <span className="status status--online" style={{ color: s.color, borderColor: s.color }}>
                  VERIFIED
                </span>
              </div>
              <h3 className="edu__title">{s.title}</h3>
              <span className="edu__org">{s.org}</span>
              <p className="edu__detail">{s.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatusFeed
