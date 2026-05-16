import React from 'react'
import '../styles/Marquee.css'

function Marquee() {
  const items = [
    'React',
    '·',
    'Node.js',
    '·',
    'Next.js',
    '·',
    'C# / .NET',
    '·',
    'AI Engineering',
    '·',
    'Full-Stack Dev',
    '·',
    'Clean Architecture',
    '·',
    'Scalable APIs',
    '·',
  ]

  return (
    <div className="marquee">
      <div className="marquee__track">
        {[0, 1, 2].map((clone) => (
          <div className="marquee__inner" key={clone} aria-hidden={clone > 0}>
            {items.map((item, i) => (
              <span key={i} className={`marquee__item${item === '·' ? ' marquee__item--dot' : ''}`}>
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Marquee