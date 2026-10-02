import { useEffect, useState } from 'react'

export default function Loader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 18 + 2
      })
    }, 120)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="loader">
      <div className="loader-content">
        <div className="loader-logo-wrap">
          <span className="loader-logo-r">REFORMAS</span>
          <span className="loader-logo-d">DAAD</span>
        </div>
        <div className="loader-bar">
          <div
            className="loader-bar-fill"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <p className="loader-text">
          {progress < 100 ? 'Preparando experiencia...' : '¡Listo!'}
        </p>
      </div>
    </div>
  )
}
