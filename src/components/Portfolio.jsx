import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import StaggerText from './StaggerText'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: 'Topes de Cuarzo Blanco',
    category: 'Cocinas',
    imgUrl: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Acabado Estuco Veneciano',
    category: 'Revestimientos',
    imgUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Obra Blanca y Grifería',
    category: 'Baños',
    imgUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Diseño de Interiores',
    category: 'Estructural',
    imgUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1000&auto=format&fit=crop',
  },
]

export default function Portfolio() {
  const sectionRef = useRef()
  const trackRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in headers, excluding section-title handled by StaggerText
      gsap.from('.portfolio .section-tag, .portfolio .section-subtitle', {
        scrollTrigger: { trigger: '.portfolio', start: 'top 80%' },
        y: 40, opacity: 0, duration: 1, stagger: 0.1, ease: 'power3.out',
      })
      // Horizontal scroll
      const track = trackRef.current
      const amountToScroll = track.scrollWidth - window.innerWidth
      
      gsap.to(track, {
        x: -amountToScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: '.portfolio-track-wrap',
          start: 'top 20%',
          end: `+=${amountToScroll}`,
          pin: true,
          scrub: 1,
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="portfolio" className="portfolio" ref={sectionRef}>
      <div className="container">
        <div className="portfolio-header">
          <span className="section-tag">Nuestro Trabajo</span>
          <h2 className="section-title">
            <StaggerText divideBy="word">Obras y Proyectos</StaggerText>
          </h2>
          <p className="section-subtitle">Ejemplos reales de construcción, acabados y reformas estructurales.</p>
        </div>
      </div>

      <div className="portfolio-track-wrap">
        <div className="portfolio-track" ref={trackRef}>
          {projects.map((p, i) => (
            <div key={i} className="portfolio-item">
              <div className="portfolio-item-inner">
                {/* Image Background */}
                <div 
                  className="portfolio-item-bg"
                  style={{
                    backgroundImage: `url(${p.imgUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                
                {/* Content Overlay */}
                <div className="portfolio-item-overlay">
                  <div className="portfolio-item-category">{p.category}</div>
                  <h3 className="portfolio-item-title">{p.title}</h3>
                  <span className="portfolio-item-cta">Ver detalles</span>
                </div>
              </div>
            </div>
          ))}
          {/* Spacer to allow full scroll to last item */}
          <div style={{ flex: '0 0 10vw' }} />
        </div>
      </div>
    </section>
  )
}
