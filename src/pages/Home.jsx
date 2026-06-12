import { Link } from 'react-router-dom'

const highlights = [
  {
    to: '/about',
    label: 'About us',
    title: 'A pharmacy built on trust',
    text: 'Family-owned and community-focused for over 25 years. We know your name, your medications, and what matters to your health.',
    image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1400&q=80',
    alt: 'Pharmacist consulting with a patient',
    tone: 'light',
  },
  {
    to: '/services',
    label: 'Services',
    title: 'Care beyond the counter',
    text: 'Prescriptions, immunizations, compounding, delivery, and one-on-one consultations with licensed pharmacists.',
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2d5f2c6?auto=format&fit=crop&w=1400&q=80',
    alt: 'Modern pharmacy interior',
    tone: 'subtle',
  },
  {
    to: '/contact',
    label: 'Visit us',
    title: 'In your neighbourhood',
    text: 'Extended hours, free parking, and a welcoming team ready to help — stop by or give us a call anytime.',
    image: 'https://images.unsplash.com/photo-1587854692152-c3d09bf27c7a?auto=format&fit=crop&w=1400&q=80',
    alt: 'Family at the pharmacy',
    tone: 'soft',
  },
]

function Home() {
  return (
    <>
      <section className="hero-section">
        <div
          className="hero-image hero-image--storefront"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
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

      {highlights.map((item, index) => (
        <section
          key={item.to}
          className={`home-band home-band--${item.tone}`}
        >
          <div className="home-band-inner">
            <div className={`home-band-layout ${index % 2 === 1 ? 'reversed' : ''}`}>
              <div className="home-band-media">
                <img src={item.image} alt={item.alt} className="home-band-image" />
              </div>
              <div className="home-band-content">
                <span className="section-label">{item.label}</span>
                <h2 className="home-band-title">{item.title}</h2>
                <p className="home-band-text">{item.text}</p>
                <Link to={item.to} className="home-band-link">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}

export default Home
