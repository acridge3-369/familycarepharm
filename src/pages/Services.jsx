import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { PHONE_DISPLAY, PHONE_TEL } from '../constants/contact'

const featuredServices = [
  {
    id: 'free-delivery',
    title: 'Free delivery',
    text: 'We deliver prescriptions to your door at no extra charge within our local service area. Ideal if you are recovering at home, caring for family, or simply prefer not to make another trip — call us or ask at the counter to set up delivery.',
    image: 'https://images.unsplash.com/photo-1587854692152-c3d09bf27c7a?auto=format&fit=crop&w=900&q=80',
    alt: 'Prescription delivery to your home',
  },
  {
    id: 'compounding',
    title: 'Compounding',
    text: 'When an off-the-shelf product is not the right fit, our compounding pharmacists prepare custom medications — adjusted strengths, flavours, or dosage forms for children, pets, and patients with unique needs.',
    image: 'https://images.unsplash.com/photo-1585435557343-3b5930310d87?auto=format&fit=crop&w=900&q=80',
    alt: 'Custom compounded medication preparation',
  },
  {
    id: 'pharmacist-prescribing',
    title: 'Pharmacist prescribing',
    text: 'Our licensed pharmacists can assess and prescribe for many common conditions — UTIs, allergies, birth control renewals, and more — so you get timely care without always needing a separate doctor visit.',
    image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=900&q=80',
    alt: 'Pharmacist consultation and prescribing',
  },
  {
    id: 'compliance-packing',
    title: 'Compliance packing',
    text: 'Stay on track with bubble packs and blister packs organized by date and time of day. We prepare your medications in easy-to-follow packs — especially helpful for seniors, caregivers, and anyone on multiple prescriptions.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=80',
    alt: 'Organized compliance medication packs',
  },
]

const additionalServices = [
  {
    title: 'Prescription dispensing',
    text: 'Fast, accurate filling with insurance billing, generic substitutions when appropriate, and refill reminders so you never run out.',
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2d5f2c6?auto=format&fit=crop&w=900&q=80',
    alt: 'Pharmacy prescription counter',
  },
  {
    title: 'Immunizations',
    text: 'Walk-in flu shots and routine vaccines for adults and children. Our pharmacists are certified immunizers.',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80',
    alt: 'Pharmacy immunization service',
  },
  {
    title: 'Medication reviews',
    text: 'Comprehensive reviews to check for interactions, duplications, and ways to simplify your daily regimen.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80',
    alt: 'Pharmacist medication review',
  },
]

const faqs = [
  {
    q: 'How do I set up free delivery?',
    a: 'Call us or visit in person with your prescription details. We confirm your address is in our delivery zone and schedule your first drop-off.',
  },
  {
    q: 'What is compliance packing?',
    a: 'We organize your medications into dated blister or bubble packs labelled by morning, afternoon, and evening — so you take the right pills at the right time.',
  },
  {
    q: 'Can a pharmacist prescribe for me?',
    a: 'Yes, for many minor ailments and renewals. Speak with our pharmacist to see if your situation qualifies — no appointment needed for most visits.',
  },
  {
    q: 'Is delivery really free?',
    a: 'Yes, for addresses within our local delivery zone. Ask our team to confirm your address qualifies.',
  },
]

function Services() {
  return (
    <>
      <PageHero
        label="Services"
        title="How we can help"
        subtitle="Full-service pharmacy care for every stage of life."
        image="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1920&q=85"
      />

      <section className="page-content">
        <div className="section-inner">
          <p className="page-lead centered">
            From free delivery to custom compounding, our pharmacists provide clinical
            expertise with the convenience of a neighbourhood store.
          </p>

          <span className="section-label">Core services</span>
          <h2 className="section-title">What we offer</h2>

          <div className="service-list">
            {featuredServices.map((service, index) => (
              <article
                key={service.id}
                id={service.id}
                className={`service-row ${index % 2 === 1 ? 'reversed' : ''}`}
              >
                <img
                  src={service.image}
                  alt={service.alt}
                  className="service-image"
                  loading="lazy"
                />
                <div className="service-copy">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="prose">{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-content subtle">
        <div className="section-inner">
          <span className="section-label">Also available</span>
          <h2 className="section-title">More ways we help</h2>

          <div className="service-list">
            {additionalServices.map((service, index) => (
              <article
                key={service.title}
                className={`service-row ${index % 2 === 1 ? 'reversed' : ''}`}
              >
                <img
                  src={service.image}
                  alt={service.alt}
                  className="service-image"
                  loading="lazy"
                />
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
          <h2 className="section-title">Ready to get started?</h2>
          <p className="section-lead">
            Set up delivery, ask about compliance packing, or speak with a pharmacist today.
          </p>
          <div className="services-cta-actions">
            <Link to="/prescriptions" className="btn btn-primary">Request prescription refills</Link>
            <a href={`tel:${PHONE_TEL}`} className="btn btn-secondary">{PHONE_DISPLAY}</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
