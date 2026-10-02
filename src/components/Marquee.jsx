export default function Marquee() {
  const words = [
    'DISEÑO', 'REFORMA', 'INNOVACIÓN', 'CALIDAD', 'ESTILO',
    'ELEGANCIA', 'FUNCIONALIDAD', 'CONFORT',
  ]

  const track = words.map((w) => `${w} ✦ `).join('')

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <span className="marquee-text">{track}</span>
        <span className="marquee-text">{track}</span>
      </div>
    </div>
  )
}
