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
  },
  {
    to: '/services',
    label: 'Services',
    title: 'Care beyond the counter',
    text: 'Prescriptions, immunizations, compounding, delivery, and one-on-one consultations with licensed pharmacists.',
    image: '/images/band-services.jpg',
    alt: 'Inside Family Care Pharmacy',
  },
  {
    to: '/contact',
    label: 'Visit us',
    title: 'In your neighbourhood',
    text: `Find us at ${ADDRESS_FULL}. Free parking and a team ready to help when you walk in.`,
    image: '/images/band-visit.jpg',
    alt: 'Family Care Pharmacy in Langley',
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

      <section className="home-flow">
        <p className="home-flow-lead">
          We are an independent pharmacy dedicated to making healthcare simple, personal,
          and accessible — whether you are picking up a refill, getting a flu shot, or
          speaking with a pharmacist about your medications.
        </p>

        {highlights.map((item, index) => (
          <article
            key={item.to}
            className={`home-panel ${index % 2 === 1 ? 'home-panel--reverse' : ''}`}
          >
            <div className="home-panel-inner">
              <div className="home-panel-media">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="home-panel-image"
                  loading="lazy"
                />
              </div>
              <div className="home-panel-content">
                <span className="home-flow-label">{item.label}</span>
                <h2 className="home-flow-title">{item.title}</h2>
                <p className="home-flow-text">{item.text}</p>
                <Link to={item.to} className="home-flow-link">
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </article>
        ))}

        <article className="home-location">
          <div className="home-location-card">
            <div className="home-location-copy">
              <span className="home-flow-label">Location</span>
              <h2 className="home-flow-title">Find us in Langley</h2>
              <p className="home-flow-text">{ADDRESS_FULL}</p>
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="home-flow-link home-flow-link--accent"
              >
                Get directions <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="home-location-map">
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
        </article>
      </section>
    </>
  )
}

export default Home
