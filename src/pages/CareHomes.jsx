import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { PHARMACY_EMAIL, PHONE_DISPLAY, PHONE_TEL } from '../constants/contact'

const offerings = [
  {
    title: 'Scheduled deliveries',
    text: 'Reliable medication drops aligned with your facility’s cycle — daily, weekly, or monthly as your home requires.',
  },
  {
    title: 'Compliance packing',
    text: 'Bubble packs and blister packs labelled by resident, date, and time of day so nursing staff can administer with confidence.',
  },
  {
    title: 'Pharmacist support',
    text: 'A dedicated pharmacy team for order changes, refills, and clinical questions — one call, not a call centre.',
  },
  {
    title: 'Emergency supplies',
    text: 'After-hours and stat-order support when a resident needs a medication without delay.',
  },
]

function CareHomes() {
  return (
    <>
      <PageHero
        label="Care homes"
        title="Medication distribution for care facilities"
        subtitle="Dependable pharmacy supply for residential care — organized, on time, and easy for your staff."
        image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=85"
      />

      <section className="page-content">
        <div className="section-inner split-layout">
          <div>
            <h2 className="section-title">Pharmacy partner for your home</h2>
            <p className="prose">
              Family Care Pharmacy works with care homes and assisted-living facilities across
              Langley and the surrounding area. We handle prescription coordination, compliance
              packing, and delivery so your team can focus on residents — not chasing refills.
            </p>
            <p className="prose">
              Whether you manage a small residential home or a larger facility, we tailor a
              distribution plan to your census, charting system, and administration schedule.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1587854692152-c3d09bf27c7a?auto=format&fit=crop&w=900&q=80"
            alt="Care home medication support"
            className="content-image"
          />
        </div>
      </section>

      <section className="page-content subtle">
        <div className="section-inner">
          <span className="section-label">What we provide</span>
          <h2 className="section-title">How we support your facility</h2>
          <div className="values-grid">
            {offerings.map((item) => (
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
          <h2 className="section-title">Getting started</h2>
          <p className="prose">
            Contact us to discuss your home’s needs. We review your current workflow, resident
            count, and preferred delivery schedule, then set up accounts and packing formats
            that work for your nurses and administrators.
          </p>
          <p className="prose">
            Call{' '}
            <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
            {' '}or email{' '}
            <a href={`mailto:${PHARMACY_EMAIL}`}>{PHARMACY_EMAIL}</a>
            {' '}to speak with our care-home coordinator.
          </p>
        </div>
      </section>

      <section className="page-cta">
        <div className="section-inner page-cta-inner">
          <h2 className="section-title">Partner with us</h2>
          <p className="section-lead">
            Let us simplify medication management for your care home.
          </p>
          <div className="services-cta-actions">
            <Link to="/contact" className="btn btn-primary">Contact us</Link>
            <a href={`tel:${PHONE_TEL}`} className="btn btn-secondary">{PHONE_DISPLAY}</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default CareHomes
