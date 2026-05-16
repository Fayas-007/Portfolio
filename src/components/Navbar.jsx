import React, { useState, useEffect } from 'react'
import '../styles/Navbar.css'

const NAV = [
  { label: 'About', href: '#about-me' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const close = (e) => {
      if (!e.target.closest('.nav')) setOpen(false)
    }
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [])

  const go = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const navHeight = 72  // matches --nav-h in CSS
      const extraOffset = 32 // extra breathing room — increase to scroll further down
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight - extraOffset
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setOpen(false)
  }

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#home" className="nav__logo" onClick={e => go(e, '#home')}>
          <img src="/favicon.ico" alt="Fayas logo" className="nav__logo-img" />
        </a>

        <ul className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {NAV.map(n => (
            <li key={n.label}>
              <a href={n.href} className="nav__link" onClick={e => go(e, n.href)}>
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="nav__cta" onClick={e => go(e, '#contact')}>
          <span>Contact me</span>
        </a>

        <button
          className={`nav__burger ${open ? 'nav__burger--open' : ''}`}
          onClick={() => setOpen(p => !p)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}

export default Navbar