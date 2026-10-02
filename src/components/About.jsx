import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import StatsCounter from './StatsCounter'
import StaggerText from './StaggerText'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const ref = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-tag', {
        scrollTrigger: { trigger: '.about-tag', start: 'top 85%' },
        y: 30, opacity: 0, duration: 0.8, ease: 'power3.out',
      })
      gsap.from('.about-text', {
        scrollTrigger: { trigger: '.about-text', start: 'top 85%' },
        y: 50, opacity: 0, duration: 1, delay: 0.15, stagger: 0.15, ease: 'power3.out',
      })
      gsap.from('.about-stat', {
        scrollTrigger: { trigger: '.about-stats', start: 'top 85%' },
        y: 40, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
      })
      gsap.from('.about-visual', {
        scrollTrigger: { trigger: '.about-visual', start: 'top 85%' },
        x: 120, opacity: 0, duration: 1.3, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="nosotros" className="about" ref={ref}>
      <div className="container">
        <div className="about-grid">
          {/* ---- left column ---- */}
          <div className="about-content">
            <span className="section-tag about-tag">Sobre Nosotros</span>
            <h2 className="about-title section-title">
              <StaggerText divideBy="word">Creamos espacios que inspiran</StaggerText>
            </h2>
            <p className="about-text">
              En Reformas DAAD transformamos espacios ordinarios en lugares
              extraordinarios. Con más de una década de experiencia en diseño de
              interiores y reformas integrales, nuestro equipo de profesionales
              se dedica a hacer realidad la visión de cada cliente.
            </p>
            <p className="about-text">
              Cada proyecto es único, y nuestro enfoque personalizado garantiza
              que cada detalle refleje tu personalidad y estilo de vida.
            </p>

            <div className="about-stats">
              <div className="about-stat">
                <span className="about-stat-number"><StatsCounter value={250} suffix="+" duration={2.5} /></span>
                <span className="about-stat-label">Proyectos Completados</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-number"><StatsCounter value={12} duration={2.5} /></span>
                <span className="about-stat-label">Años de Experiencia</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-number"><StatsCounter value={98} suffix="%" duration={2.5} /></span>
                <span className="about-stat-label">Clientes Satisfechos</span>
              </div>
            </div>
          </div>

          {/* ---- right column ---- */}
          <div className="about-visual">
            <div className="about-image">
              <div className="about-image-placeholder" style={{ padding: 0, overflow: 'hidden' }}>
                <img 
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop" 
                  alt="Plano arquitectónico orbital" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="about-image-accent" />
          </div>
        </div>
      </div>
    </section>
  )
}
