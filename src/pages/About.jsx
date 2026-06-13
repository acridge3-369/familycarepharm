import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

const ABOUT_HERO_IMAGE = '/images/about-hero.jpg'
const TEAM_IMAGE = '/images/team.jpg'

const gallery = [
  {
    src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    alt: 'Pharmacist greeting a customer at the counter',
    caption: 'Our front counter — always staffed by a licensed pharmacist.',
  },
  {
    src: 'https://images.unsplash.com/photo-1587854692152-c3d09bf27c7a?auto=format&fit=crop&w=800&q=80',
    alt: 'Family at the pharmacy',
    caption: 'Welcoming families of all ages.',
  },
  {
    src: 'https://images.unsplash.com/photo-1631549916768-4119b2d5f2c6?auto=format&fit=crop&w=800&q=80',
    alt: 'Pharmacy shelves',
    caption: 'A full-service dispensary and wellness section.',
  },
  {
    src: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80',
    alt: 'Pharmacist reviewing medication',
    caption: 'Private consultations available by appointment.',
  },
]

const values = [
  {
    title: 'Personal care',
    text: 'We take time to know your name, your medications, and your health goals.',
  },
  {
    title: 'Clinical expertise',
    text: 'Our pharmacists stay current on therapies and work closely with local physicians.',
  },
  {
    title: 'Community first',
    text: 'We live and work here too — supporting local schools, charities, and neighbours.',
  },
]

function TeamPhoto() {
  const [loaded, setLoaded] = useState(true)

  if (!loaded) {
    return (
      <div className="about-team-placeholder">
        <p className="about-team-placeholder-text">
          Team photo — add <strong>public/images/team.jpg</strong>
        </p>
      </div>
    )
  }

  return (
    <img
      src={TEAM_IMAGE}
      alt="Family Care Pharmacy team"
      className="about-team-image"
      onError={() => setLoaded(false)}
    />
  )
}

function About() {
  return (
    <>
      <PageHero
        large
        label="About"
        title="Your neighbourhood pharmacy"
        subtitle="Independent, family-focused, and here for the long haul."
        image={ABOUT_HERO_IMAGE}
        imageHint="Add your hero image as public/images/about-hero.jpg"
      />

      <section className="page-content">
        <div className="section-inner about-story">
          <h2 className="section-title">Our story</h2>
          <p className="prose">
            Family Care Pharmacy opened in 1999 with a simple idea: a pharmacy should feel
            like part of the neighbourhood, not a chain checkout line. What started as a
            single storefront has grown into a trusted health resource for thousands of
            local families.
          </p>
          <p className="prose">
            Today we are still independently owned. The same values that guided us on day
            one — honesty, accessibility, and genuine care — shape every interaction at
            our counter.
          </p>
        </div>
      </section>

      <section className="about-team">
        <div className="section-inner">
          <div className="about-team-card">
            <div className="about-team-copy">
              <span className="section-label">Our team</span>
              <h2 className="section-title">Meet the people behind the counter</h2>
              <p className="prose">
                Licensed pharmacists and staff who know your name, answer your questions,
                and treat every visit like it matters — because it does.
              </p>
            </div>
            <div className="about-team-media">
              <TeamPhoto />
            </div>
          </div>
        </div>
      </section>

      <section className="page-content subtle">
        <div className="section-inner">
          <span className="section-label">What we stand for</span>
          <h2 className="section-title">Our values</h2>
          <div className="values-grid">
            {values.map((item) => (
              <div key={item.title} className="value-card">
                <h3 className="value-title">{item.title}</h3>
                <p className="value-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-content">
        <div className="section-inner">
          <span className="section-label">Inside the pharmacy</span>
          <h2 className="section-title">A look around</h2>
          <div className="gallery-grid">
            {gallery.map((photo) => (
              <figure key={photo.src} className="gallery-item">
                <img src={photo.src} alt={photo.alt} className="gallery-image" />
                <figcaption className="gallery-caption">{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="page-cta">
        <div className="section-inner page-cta-inner">
          <h2 className="section-title">Come say hello</h2>
          <p className="section-lead">
            Stop by for a tour, meet our team, or ask us anything about your prescriptions.
          </p>
          <Link to="/contact" className="btn btn-primary">Contact us</Link>
        </div>
      </section>
    </>
  )
}

export default About
