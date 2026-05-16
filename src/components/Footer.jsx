import React from 'react'
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <span className="footer__copy">© 2026 Mohamed Fayas. All rights reserved.</span>
        <div className="footer__links">
          <a href="https://github.com/Fayas-007" target="_blank" rel="noopener noreferrer">GitHub</a>
          <span className="footer__dot">·</span>
          <a href="https://www.linkedin.com/in/mohamed-fayas-23bba7334/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span className="footer__dot">·</span>
          <a href="mailto:fayasshibly007@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer