import { useEffect, useState } from 'react'

function PageHero({ label, title, subtitle, image, large = false, imageHint }) {
  const [imageOk, setImageOk] = useState(true)

  useEffect(() => {
    if (!image) {
      setImageOk(false)
      return
    }
    setImageOk(true)
    const probe = new Image()
    probe.onload = () => setImageOk(true)
    probe.onerror = () => setImageOk(false)
    probe.src = image
  }, [image])

  return (
    <section
      className={`page-hero ${large ? 'page-hero--large' : ''} ${!imageOk ? 'page-hero--empty' : ''}`}
    >
      {imageOk ? (
        <div
          className="page-hero-image"
          style={{ backgroundImage: `url('${image}')` }}
        />
      ) : (
        <div className="page-hero-image page-hero-image--empty">
          {imageHint && <p className="page-hero-upload-hint">{imageHint}</p>}
        </div>
      )}
      <div className="page-hero-overlay" />
      <div className="page-hero-content">
        {label && <span className="section-label light">{label}</span>}
        <h1 className="page-hero-title">{title}</h1>
        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
      </div>
    </section>
  )
}

export default PageHero
