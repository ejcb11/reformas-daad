import React from 'react'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-video-wrap" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img 
          src="/hero-1.jpg" 
          alt="Diseño Interior Sala" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </div>

      <div className="hero-overlay" style={{ background: 'linear-gradient(180deg, rgba(26,22,17,0.3) 0%, rgba(26,22,17,0.8) 100%)', zIndex: 1 }} />

      <div className="hero-content" style={{ zIndex: 2 }}>
        <div className="hero-badge">DISEÑO DE INTERIORES &amp; REFORMAS</div>

        <div className="hero-text-container">
          <div className="hero-phase hero-phase--active">
            <h1 className="hero-title"><span>Espacios que</span></h1>
            <h2 className="hero-subtitle">Inspiran Vida</h2>
          </div>
        </div>

        <a href="#contacto" className="hero-cta">
          <span>Comenzar Proyecto</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>

        <div className="hero-scroll-indicator">
          <span>Descubrir Más</span>
          <div className="hero-scroll-line" />
        </div>
      </div>
    </section>
  )
}
