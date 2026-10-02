import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#inicio" className="navbar-logo">
          <span className="navbar-logo-text">REFORMAS</span>
          <span className="navbar-logo-accent">DAAD</span>
        </a>

        <div className={`navbar-menu ${menuOpen ? 'navbar-menu--open' : ''}`}>
          <a href="#inicio" onClick={close}>Inicio</a>
          <a href="#nosotros" onClick={close}>Nosotros</a>
          <a href="#servicios" onClick={close}>Servicios</a>
          <a href="#portfolio" onClick={close}>Portfolio</a>
          <a href="#contacto" onClick={close}>Contacto</a>
        </div>

        <button
          className={`navbar-burger ${menuOpen ? 'navbar-burger--open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menú"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
