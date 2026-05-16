import React, { useEffect, useRef } from 'react'
import '../styles/Skills.css'

function Skills() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    ref.current.querySelectorAll('.skills__card, .reveal-up').forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.08}s`
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="skills section" ref={ref}>
      <div className="container">
        <div className="reveal-up">
          <span className="section__label">Capabilities</span>
          <h2 className="section__title">Skills & Expertise</h2>
          <div className="section__divider" />
        </div>

        <div className="skills__bento">

          <div className="skills__card skills__card--frontend">
            <span className="skills__card-label">Frontend</span>
            <h3 className="skills__card-title">Building interfaces users love</h3>
            <div className="skills__pills">
              {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Framer Motion'].map(s => (
                <span key={s} className={`skills__pill${s === 'React' || s === 'TypeScript' ? ' skills__pill--accent' : ''}`}>{s}</span>
              ))}
            </div>
          </div>

          <div className="skills__card skills__card--backend">
            <span className="skills__card-label">Backend</span>
            <h3 className="skills__card-title">Scalable server-side systems</h3>
            <div className="skills__pills">
              {['C# / .NET', 'REST APIs', 'SQL Server', 'Entity Framework', 'Node.js'].map(s => (
                <span key={s} className={`skills__pill${s === 'C# / .NET' ? ' skills__pill--accent' : ''}`}>{s}</span>
              ))}
            </div>
          </div>

          <div className="skills__card skills__card--stat">
            <span className="skills__card-label">Experience</span>
            <span className="skills__card-count">3+</span>
            <span className="skills__card-sub">Years building full-stack products</span>
          </div>

          <div className="skills__card skills__card--tools">
            <span className="skills__card-label">Tools</span>
            <h3 className="skills__card-title">Dev workflow & tooling</h3>
            <div className="skills__pills">
              {['Git / GitHub', 'Docker', 'Figma', 'VS Code', 'Postman'].map(s => (
                <span key={s} className="skills__pill">{s}</span>
              ))}
            </div>
          </div>

          <div className="skills__card skills__card--cloud">
            <span className="skills__card-label">Cloud & DevOps</span>
            <h3 className="skills__card-title">Deploy, scale, ship</h3>
            <div className="skills__pills">
              {['Azure', 'CI/CD', 'Linux', 'Nginx', 'GitHub Actions'].map(s => (
                <span key={s} className={`skills__pill${s === 'Azure' ? ' skills__pill--accent' : ''}`}>{s}</span>
              ))}
            </div>
          </div>

          <div className="skills__card skills__card--quote">
            <span className="skills__card-icon">⚡</span>
            <span className="skills__card-label">Philosophy</span>
            <h3 className="skills__card-title">Clean code. Fast delivery. Real impact.</h3>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skills