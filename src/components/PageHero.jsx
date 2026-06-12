function PageHero({ label, title, subtitle, image }) {
  return (
    <section className="page-hero">
      <div
        className="page-hero-image"
        style={{ backgroundImage: `url('${image}')` }}
      />
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
