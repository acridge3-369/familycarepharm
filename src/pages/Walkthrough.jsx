import { Link } from 'react-router-dom'
import { ADDRESS_FULL, PHONE_DISPLAY, PHONE_TEL } from '../constants/contact'

const stops = [
  {
    step: '01',
    label: 'Arrival',
    title: 'Welcome in',
    text: 'Pull up to our Langley location with free parking out front. Our storefront is easy to spot — bright, open, and ready when you walk through the door.',
    image: 'https://images.unsplash.com/photo-1585435557343-3b5930310d87?auto=format&fit=crop&w=1200&q=80',
    alt: 'Welcoming pharmacy entrance and front of store',
  },
  {
    step: '02',
    label: 'Prescriptions',
    title: 'The counter',
    text: 'Drop off a new prescription, pick up a refill, or ask a quick question. A licensed pharmacist is always at the counter — no call centre, no hold music.',
    image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1200&q=80',
    alt: 'Pharmacist helping a customer at the prescription counter',
  },
  {
    step: '03',
    label: 'Wellness',
    title: 'Beyond the dispensary',
    text: 'Browse braces, supports, vitamins, and everyday health essentials. Our team can point you to what you need without the guesswork.',
    image: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=1200&q=80',
    alt: 'Vitamins and wellness products on pharmacy shelves',
  },
  {
    step: '04',
    label: 'Your visit',
    title: 'Stay a while',
    text: 'Whether it is your first visit or your hundredth, we want you to feel at home. Take your time, ask questions, and leave knowing someone here has your back.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Pharmacist taking time with a patient during a visit',
  },
]

function Walkthrough() {
  return (
    <div className="walkthrough-page">
      <header className="walkthrough-intro">
        <span className="home-flow-label">Virtual tour</span>
        <h1 className="walkthrough-heading">Pharmacy walkthrough</h1>
        <p className="walkthrough-lead">
          A quick look inside Family Care Pharmacy — from the front door to the
          counter and everything in between.
        </p>
      </header>

      <section className="home-flow walkthrough-stops">
        {stops.map((stop, index) => (
          <article
            key={stop.step}
            className={`home-panel ${index % 2 === 1 ? 'home-panel--reverse' : ''}`}
          >
            <div className="home-panel-inner">
              <div className="home-panel-media">
                <img
                  src={stop.image}
                  alt={stop.alt}
                  className="home-panel-image"
                  loading="lazy"
                />
              </div>
              <div className="home-panel-content">
                <span className="walkthrough-step" aria-hidden="true">{stop.step}</span>
                <span className="home-flow-label">{stop.label}</span>
                <h2 className="home-flow-title">{stop.title}</h2>
                <p className="home-flow-text">{stop.text}</p>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="walkthrough-outro">
        <div className="walkthrough-outro-inner">
          <h2 className="home-flow-title">See it for yourself</h2>
          <p className="home-flow-text">
            {ADDRESS_FULL}. Walk in anytime during store hours — our team would love
            to show you around in person.
          </p>
          <div className="walkthrough-actions">
            <Link to="/contact" className="btn btn-primary">Plan your visit</Link>
            <a href={`tel:${PHONE_TEL}`} className="btn btn-secondary">{PHONE_DISPLAY}</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Walkthrough
