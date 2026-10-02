export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-text">REFORMAS</span>
              <span className="footer-logo-accent">DAAD</span>
            </div>
            <p className="footer-tagline">
              Transformando espacios,<br />creando hogares.
            </p>
          </div>

          <div className="footer-links">
            <h4>Navegación</h4>
            <a href="#inicio">Inicio</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#servicios">Servicios</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contacto">Contacto</a>
          </div>

          <div className="footer-links">
            <h4>Servicios</h4>
            <a href="#servicios">Diseño de Interiores</a>
            <a href="#servicios">Reformas Integrales</a>
            <a href="#servicios">Cocinas &amp; Baños</a>
            <a href="#servicios">Espacios Comerciales</a>
          </div>

          <div className="footer-social">
            <h4>Síguenos</h4>
            <div className="footer-social-links">
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="#" aria-label="Pinterest">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4" />
                  <line x1="12" y1="16" x2="10" y2="22" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Reformas DAAD. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
