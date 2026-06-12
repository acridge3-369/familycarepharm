import { Link } from 'react-router-dom'

const highlights = [
  {
    to: '/about',
    label: 'About us',
    title: 'A pharmacy built on trust',
    text: 'Family-owned and community-focused for over 25 years.',
    image: 'https://images.unsplash.com/photo-1585435557343-3b5930310d87?auto=format&fit=crop&w=800&q=80',
  },
  {
    to: '/services',
    label: 'Services',
    title: 'Care beyond the counter',
    text: 'Prescriptions, immunizations, delivery, and pharmacist consultations.',
    image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=800&q=80',
  },
  {
    to: '/contact',
    label: 'Visit us',
    title: 'We are in your neighbourhood',
    text: 'Extended hours, free parking, and a team ready to help.',
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2d5f2c6?auto=format&fit=crop&w=800&q=80',
  },
]

function Home() {
  return (
    <>
      <section className="hero-section">
        <div
          className="hero-image"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1920&q=85')",
          }}
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-title">Family Care Pharmacy</h1>
          <p className="hero-slogan">
            Personal pharmacy care for your whole family.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">Transfer a prescription</Link>
            <a href="tel:+15551234567" className="btn btn-secondary">(555) 123-4567</a>
          </div>
        </div>
      </section>

      <section className="home-intro">
        <div className="section-inner home-intro-inner">
          <p className="home-intro-text">
            We are an independent pharmacy dedicated to making healthcare simple, personal,
            and accessible — whether you are picking up a refill, getting a flu shot, or
            speaking with a pharmacist about your medications.
          </p>
        </div>
      </section>

      <section className="home-cards-section">
        <div className="section-inner">
          <div className="home-cards">
            {highlights.map((card) => (
              <Link key={card.to} to={card.to} className="home-card">
                <img src={card.image} alt="" className="home-card-image" />
                <div className="home-card-body">
                  <span className="section-label">{card.label}</span>
                  <h2 className="home-card-title">{card.title}</h2>
                  <p className="home-card-text">{card.text}</p>
                  <span className="home-card-link">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
