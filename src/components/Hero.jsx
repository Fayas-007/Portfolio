import React from 'react'
import '../styles/Hero.css'

function Hero() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="hero">
      <div className="hero__container">
        <p className="hero__greeting">
          <span className="hero__wave">👋</span>, my name is <strong>Mohamed Fayas</strong> and I am a
        </p>

        <div className="hero__display">
          <span className="hero__line hero__line--filled" style={{ order: 1 }}>FULL STACK</span>

          <div className="hero__photo-wrapper" style={{ order: 2 }}>   {/* ← add order */}
            <img
              src="/profile.png"
              alt="Mohamed Fayas"
              className="hero__photo"
              loading="eager"
            />
          </div>

          <span className="hero__line hero__line--outlined" style={{ order: 3 }}>
            DEV<span className="hero__dot">ELO</span>PER,
          </span>
          <span className="hero__line hero__line--small" style={{ order: 4 }}>
            .NET ENGINEER<span className="hero__dot">.</span>
          </span>
        </div>

        <div className="hero__bottom">
          <p className="hero__location">based in Sri Lanka.</p>
          <div className="hero__cta">
            <button className="hero__btn hero__btn--dark" onClick={() => scrollTo('#projects')}>
              <span>View my work</span>
            </button>
            <button className="hero__btn hero__btn--light" onClick={() => scrollTo('#contact')}>
              <span>Get in touch</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero