import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { ADDRESS_FULL, PHONE_DISPLAY, PHONE_TEL } from '../constants/contact'

const featuredServices = [
  {
    id: 'free-delivery',
    title: 'Free delivery',
    text: 'We deliver prescriptions at no extra charge across our service area. Ideal when you are home recovering, juggling family, or simply want one less errand.',
    points: [
      'Free delivery — ask us about your address',
      'Same-day drops when we can',
      'Call or ask at the counter to set it up',
    ],
    image: '/images/pharmacy-delivery-car.png',
    alt: 'Local pharmacy delivery car for prescription drop-offs',
  },
  {
    id: 'compounding',
    title: 'Compounding',
    text: 'When a standard product is not quite right, our pharmacists prepare custom medications — flavours kids will take, adjusted strengths, and dosage forms that fit your needs.',
    points: [
      'Custom strengths and flavours',
      'Liquids, creams, and specialty forms',
      'Options for patients and pets',
    ],
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=1200&q=80',
    alt: 'Pharmacist preparing custom compounded medication',
  },
  {
    id: 'pharmacist-prescribing',
    title: 'Pharmacist prescribing',
    text: 'Licensed pharmacists can assess and prescribe for many common conditions — so you get timely care without always booking a separate doctor visit.',
    points: [
      'UTIs, allergies, and cold sores',
      'Birth control renewals',
      'Walk-in assessments most days',
    ],
    image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1200&q=80',
    alt: 'Pharmacist consulting with a patient about a prescription',
  },
  {
    id: 'compliance-packing',
    title: 'Compliance packing',
    text: 'Bubble packs and blister packs organised by date and time of day — so the right dose is ready when you need it. Especially helpful for seniors, caregivers, and anyone on multiple medications.',
    points: [
      'Morning, noon, and evening labels',
      'Easy for caregivers to check',
      'Synced with your refill schedule',
    ],
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80',
    alt: 'Organized daily medication blister packs',
  },
]

const additionalServices = [
  {
    title: 'Prescription dispensing',
    text: 'Accurate filling with insurance billing, generic options when appropriate, and refill reminders so you do not run out.',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80',
    alt: 'Prescription medications ready for dispensing',
  },
  {
    title: 'Immunizations',
    text: 'Walk-in flu shots and routine vaccines for adults and children. Our pharmacists are certified immunizers — bring your health card and we will take care of the rest.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    alt: 'Healthcare professional preparing an immunization',
  },
  {
    title: 'Medication reviews',
    text: 'Sit down with a pharmacist to review interactions, simplify your regimen, and make sure every medication still earns its place.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Pharmacist reviewing medications with a patient',
  },
]

const faqs = [
  {
    q: 'How do I set up free delivery?',
    a: `Call us at ${PHONE_DISPLAY} or visit in person. Tell us your address and we will confirm delivery and schedule your first drop-off.`,
  },
  {
    q: 'What is compliance packing?',
    a: 'We organise your medications into dated blister or bubble packs labelled by morning, afternoon, and evening — so you take the right pills at the right time.',
  },
  {
    q: 'Can a pharmacist prescribe for me?',
    a: 'Yes, for many minor ailments and renewals. Speak with our pharmacist to see if your situation qualifies — no appointment needed for most visits.',
  },
  {
    q: 'Is delivery really free?',
    a: 'Yes. Call or ask at the counter with your address and we will confirm delivery for you.',
  },
]

function Services() {
  return (
    <>
      <PageHero
        label="Services"
        title="Care that fits real life"
        subtitle={`Independent pharmacy services for families in ${ADDRESS_FULL} — from the counter to your door.`}
        image="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1920&q=85"
      />

      <section className="page-content">
        <div className="section-inner">
          <p className="page-lead centered">
            Free delivery, custom compounding, pharmacist prescribing, and compliance packing —
            practical care from a neighbourhood pharmacy that knows your name.
          </p>

          <span className="section-label">Core services</span>
          <h2 className="section-title services-featured-heading">What we offer</h2>

          <div className="service-list">
            {featuredServices.map((service, index) => (
              <article
                key={service.id}
                id={service.id}
                className={`service-row ${index % 2 === 1 ? 'reversed' : ''}`}
              >
                <div className="service-media">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="service-image"
                    loading="lazy"
                  />
                </div>
                <div className="service-copy">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="prose">{service.text}</p>
                  <ul className="service-points">
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-content subtle">
        <div className="section-inner">
          <span className="section-label">Also available</span>
          <h2 className="section-title services-featured-heading">More ways we help</h2>

          <div className="service-list">
            {additionalServices.map((service, index) => (
              <article
                key={service.title}
                className={`service-row ${index % 2 === 1 ? 'reversed' : ''}`}
              >
                <div className="service-media">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="service-image"
                    loading="lazy"
                  />
                </div>
                <div className="service-copy">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="prose">{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-content">
        <div className="section-inner faq-inner">
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Common questions</h2>
          <div className="faq-list">
            {faqs.map((item) => (
              <div key={item.q} className="faq-item">
                <h3 className="faq-question">{item.q}</h3>
                <p className="faq-answer">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-cta">
        <div className="section-inner page-cta-inner">
          <h2 className="section-title">Ready when you are</h2>
          <p className="section-lead">
            Call for delivery, ask about packing, or speak with a pharmacist — we will take it from there.
          </p>
          <div className="services-cta-actions">
            <Link to="/prescriptions" className="btn btn-primary">Fill my prescriptions</Link>
            <a href={`tel:${PHONE_TEL}`} className="btn btn-secondary">{PHONE_DISPLAY}</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
