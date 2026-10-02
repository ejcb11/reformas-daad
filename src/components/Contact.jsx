import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const ref = useRef()
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact .section-tag, .contact .section-title, .contact .section-subtitle', {
        scrollTrigger: { trigger: '.contact .section-tag', start: 'top 85%' },
        y: 50, opacity: 0, duration: 1, stagger: 0.12, ease: 'power3.out',
      })
      gsap.from('.contact-form', {
        scrollTrigger: { trigger: '.contact-form', start: 'top 90%' },
        y: 70, opacity: 0, duration: 1, ease: 'power3.out',
      })
      gsap.from('.contact-info', {
        scrollTrigger: { trigger: '.contact-info', start: 'top 90%' },
        y: 70, opacity: 0, duration: 1, delay: 0.15, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const onChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    alert('¡Gracias por contactarnos! Te responderemos pronto.')
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contacto" className="contact" ref={ref}>
      <div className="container">
        <div className="contact-header">
          <span className="section-tag">Contacto</span>
          <h2 className="section-title">Hablemos de tu&nbsp;<em>proyecto</em></h2>
          <p className="section-subtitle">Cuéntanos tu idea y la haremos realidad</p>
        </div>

        <div className="contact-grid">
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="form-group">
              <input type="text" name="name" value={form.name} onChange={onChange} required placeholder=" " />
              <label>Nombre Completo</label>
            </div>
            <div className="form-group">
              <input type="email" name="email" value={form.email} onChange={onChange} required placeholder=" " />
              <label>Email</label>
            </div>
            <div className="form-group">
              <input type="tel" name="phone" value={form.phone} onChange={onChange} placeholder=" " />
              <label>Teléfono</label>
            </div>
            <div className="form-group">
              <textarea name="message" value={form.message} onChange={onChange} required rows="4" placeholder=" " />
              <label>Cuéntanos tu proyecto</label>
            </div>
            <button type="submit" className="btn btn-primary">
              <span>Enviar Mensaje</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </form>

          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h4>Ubicación</h4>
                <p>Madrid, España</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div>
                <h4>Teléfono</h4>
                <p>+34 912 345 678</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <h4>Email</h4>
                <p>info@reformasdaad.es</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
