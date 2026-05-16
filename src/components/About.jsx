import React, { useEffect, useRef } from 'react'
import '../styles/About.css'

const QUOTES = [
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
  { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
  { text: "The best way to predict the future is to create it.", author: "Abraham Lincoln" },
]

const EDUCATION = [
  {
    degree: 'BEng — Software Engineering',
    institution: 'Bachelor of Engineering',
    status: 'Completed',
    description: 'Comprehensive study of software design, algorithms, data structures, and systems architecture.',
  },
  {
    degree: 'Higher National Diploma',
    institution: 'HND in Computing',
    status: 'Completed',
    description: 'Foundation in programming, databases, networking, and software development methodologies.',
  },
]

const TAGS = ['Problem Solver', 'Clean Code', 'Full-Stack', '.NET', 'React', 'Team Player', 'Fast Learner', 'Sri Lanka 🇱🇰']

function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    sectionRef.current.querySelectorAll('.reveal-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="about section" ref={sectionRef}>
      <div className="container">

        {/* Quotes — no id here, navbar skips past this */}
        <div className="quotes reveal-up">
          <div className="quotes__grid">
            {QUOTES.map((q, i) => (
              <div key={i} className="quote-card" style={{ transitionDelay: `${i * 0.08}s` }}>
                <span className="quote-card__mark">"</span>
                <blockquote className="quote-card__text">{q.text}</blockquote>
                <cite className="quote-card__author"> {q.author}</cite>
              </div>
            ))}
          </div>
        </div>

        {/* Bio — navbar "About" link lands here */}
        <div id="about-me" className="about__bio-grid reveal-up">
          <div className="about__bio-left">
            <span className="section__label">About Me</span>
            <h2 className="section__title">Building software that<br />makes a difference.</h2>
            <div className="section__divider" />
            <p className="about__text">
              I'm Mohamed Fayas, a full-stack developer and .NET engineer with a passion
              for building reliable, performance-focused web applications. With a strong foundation
              in .NET and React, I focus on clean architecture, scalable APIs, and polished UIs.
            </p>
            <p className="about__text">
              My engineering background has equipped me with both theoretical knowledge and
              practical skills to tackle complex problems and deliver elegant solutions.
            </p>

            <div className="about__stats">
              <div className="about__stat">
                <span className="about__stat-num">10+</span>
                <span className="about__stat-label">Projects</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-num">BEng</span>
                <span className="about__stat-label">Graduate</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-num">∞</span>
                <span className="about__stat-label">curiosity</span>
              </div>
            </div>
          </div>

          <div className="about__bio-right">
            <div className="about__big-label">
              FULL<br />
              <span>STACK</span><br />
              <span className="orange">DEV.</span>
            </div>
            <div className="about__tags">
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className={`about__tag${tag === '.NET' || tag === 'React' ? ' about__tag--orange' : ''}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="about__education reveal-up">
          <span className="section__label">Education</span>
          <h2 className="section__title">Academic Background</h2>
          <div className="section__divider" />
          <div className="about__edu-grid">
            {EDUCATION.map((edu, i) => (
              <div key={i} className="about__edu-card" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div
                  className="about__edu-status"
                  style={edu.status === 'Completed' ? { background: '#FF6B00' } : {}}
                >
                  {edu.status}
                </div>
                <h3 className="about__edu-degree">{edu.degree}</h3>
                <p className="about__edu-institution">{edu.institution}</p>
                <p className="about__edu-desc">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default About