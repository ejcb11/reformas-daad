import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import StaggerText from './StaggerText'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    
    title: 'Reformas Estructurales',
    desc: 'Demolición, redistribución de espacios y construcción interior para transformar por completo tu propiedad.',
    imgUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356f58?q=80&w=800&auto=format&fit=crop'
  },
  {
    
    title: 'Friso y Acabados',
    desc: 'Frisos de alta calidad, estuco veneciano y preparación arquitectónica de paredes para un acabado perfecto.',
    imgUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop'
  },
  {
    
    title: 'Topes de Cocina',
    desc: 'Diseño e instalación de topes en cuarzo, mármol y granito con cortes precisos y durabilidad garantizada.',
    imgUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop'
  },
  {
    
    title: 'Obra Blanca y Baños',
    desc: 'Instalación de cerámicas, porcelanatos, grifería empotrada y remodelación completa de cuartos de baño.',
    imgUrl: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800&auto=format&fit=crop'
  },
]

export default function Services() {
  const ref = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.services .section-tag, .services .section-subtitle', {
        scrollTrigger: { trigger: '.services .section-tag', start: 'top 85%' },
        y: 50, opacity: 0, duration: 1, stagger: 0.12, ease: 'power3.out',
      })
      gsap.from('.service-card', {
        scrollTrigger: { trigger: '.services-grid', start: 'top 85%' },
        y: 80, opacity: 0, duration: 0.85, stagger: 0.1, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  /* 3-D tilt on hover */
  const onMove = (e) => {
    const c = e.currentTarget
    const r = c.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    const rx = (y - r.height / 2) / 12
    const ry = (r.width / 2 - x) / 12
    c.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.03,1.03,1.03)`
  }
  const onLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1,1,1)'
  }

  return (
    <section id="servicios" className="services" ref={ref}>
      <div className="container">
        <div className="services-header">
          <span className="section-tag">Servicios Especializados</span>
          <h2 className="section-title">
            <StaggerText divideBy="word">Construimos tu visión</StaggerText>
          </h2>
          <p className="section-subtitle">Obras civiles, revestimientos y diseño estructural a medida.</p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div
              key={i}
              className="service-card"
              onMouseMove={onMove}
              onMouseLeave={onLeave}
            >
              <div className="service-card-inner" style={{ padding: 0 }}>
                <div className="service-card-image" style={{ width: '100%', height: '220px', overflow: 'hidden', borderBottom: '1px solid rgba(0,0,0,0.05)', borderTopLeftRadius: 'inherit', borderTopRightRadius: 'inherit' }}>
                  <img src={s.imgUrl} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                </div>
                <div style={{ padding: '2.5rem' }}>
                  <span className="service-icon">{s.icon}</span>
                  <h3 className="service-title">{s.title}</h3>
                  <p className="service-desc">{s.desc}</p>
                  <span className="service-link">Saber más &rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
