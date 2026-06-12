import { Link } from 'react-router-dom'
import {
  ADDRESS_FULL,
  MAP_EMBED_URL,
  MAP_LINK,
  PHONE_DISPLAY,
  PHONE_TEL,
} from '../constants/contact'

const highlights = [
  {
    to: '/about',
    label: 'About us',
    title: 'A pharmacy built on trust',
    text: 'Family-owned and community-focused for over 25 years. We know your name, your medications, and what matters to your health.',
    image: '/images/band-about.jpg',
    alt: 'Family Care Pharmacy team and storefront',
    tone: 'light',
  },
  {
    to: '/services',
    label: 'Wellness',
    title: 'Vitamins & wellness',
    text: 'Supplements, vitamins, and health products chosen to support your everyday wellbeing — with pharmacist guidance when you need it.',
    image: '/images/wellness-vitamins.jpg',
    alt: 'Vitamins and wellness products at Family Care Pharmacy',
    tone: 'subtle',
  },
  {
    to: '/services',
    label: 'Personal care',
    title: 'Body care & essentials',
    text: 'Soaps, body wash, skin care, and daily essentials for the whole family — all in one stop at your local pharmacy.',
    image: '/images/body-wash.jpg',
    alt: 'Body wash and personal care products',
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
            <Link to="/prescriptions" className="btn btn-primary">Prescriptions</Link>
            <a href={`tel:${PHONE_TEL}`} className="btn btn-secondary">{PHONE_DISPLAY}</a>
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

      <section className="home-location">
        <div className="section-inner home-location-inner">
          <div className="home-location-header">
            <span className="section-label">Location</span>
            <h2 className="section-title">Find us in Langley</h2>
            <p className="section-lead">
              {ADDRESS_FULL}. Free patient parking — see our{' '}
              <Link to="/contact">contact page</Link> for details.
            </p>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary home-location-btn"
            >
              Get directions
            </a>
          </div>
          <div className="map-container home-map">
            <iframe
              title="Family Care Pharmacy — Langley, BC"
              src={MAP_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
