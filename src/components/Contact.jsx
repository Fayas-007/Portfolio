import React, { useState, useEffect, useRef } from 'react'
import '../styles/Contact.css'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const ref = useRef(null)

  const onChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '55a939bf-94af-428b-b591-0b5762426ad5',
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      })
      setSent(true)
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error('Submit error:', err)
    } finally {
      setLoading(false)
    }
  }

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
      { threshold: 0.1 }
    )
    ref.current.querySelectorAll('.reveal-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const channels = [
    { label: 'Email', value: 'fayasshibly007@gmail.com', href: 'mailto:fayasshibly007@gmail.com' },
    { label: 'GitHub', value: 'github.com/Fayas-007', href: 'https://github.com/Fayas-007' },
    { label: 'LinkedIn', value: 'linkedin.com/in/mohamed-fayas-23bba7334', href: 'https://www.linkedin.com/in/mohamed-fayas-23bba7334/' },
    { label: 'Phone', value: '+94 76 132 4209', href: 'tel:+94761324209' },
  ]

  return (
    <section id="contact" className="contact section" ref={ref}>
      <div className="container">

        {/* Header */}
        <div className="contact__header reveal-up">
          <div className="contact__header-left">
            <span className="contact__coord">SEC.04 // CONTACT</span>
            <h2 className="contact__big-title">
              LET'S<br /><em>WORK<span className="accent">.</span></em>
            </h2>
          </div>
          <div className="contact__availability">
            <span className="contact__availability-dot" />
            Available for new projects
          </div>
        </div>

        <div className="contact__layout">
          {/* Left */}
          <div className="contact__info reveal-up" style={{ transitionDelay: '0.1s' }}>
            <p className="contact__tagline">
              Have a project in mind or want to collaborate? I'd love to hear from you — let's build something great together.
            </p>

            <div className="contact__channels">
              {channels.map((ch) => (
                <a key={ch.label} href={ch.href} className="contact__ch"
                  target={ch.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer">
                  <div className="contact__ch-left">
                    <span className="contact__ch-label">{ch.label}</span>
                    <span className="contact__ch-value">{ch.value}</span>
                  </div>
                  <span className="contact__ch-arrow">↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="contact__form-wrap reveal-up" style={{ transitionDelay: '0.2s' }}>
            <div className="contact__form-inner">
              {sent ? (
                <div className="contact__success">
                  <div className="contact__success-icon">✦</div>
                  <h3 className="contact__success-title">Message Sent</h3>
                  <p className="contact__success-text">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button className="contact__success-btn" onClick={() => setSent(false)}>
                    Send another
                  </button>
                </div>
              ) : (
                <form className="contact__form" onSubmit={onSubmit}>
                  <div className="cfield">
                    <label className="cfield__label" htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" placeholder="Your name"
                      value={form.name} onChange={onChange} required />
                  </div>
                  <div className="cfield">
                    <label className="cfield__label" htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="you@email.com"
                      value={form.email} onChange={onChange} required />
                  </div>
                  <div className="cfield">
                    <label className="cfield__label" htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows={5}
                      placeholder="Tell me about your project..."
                      value={form.message} onChange={onChange} required />
                  </div>
                  <button type="submit" className="contact__submit" disabled={loading}>
                    <span>{loading ? 'Sending...' : 'Send Message →'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact