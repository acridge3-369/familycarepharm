import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

const services = [
  {
    title: 'Prescription dispensing',
    text: 'Fast, accurate filling with insurance billing, generic substitutions when appropriate, and refill reminders so you never run out.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Immunizations',
    text: 'Walk-in flu shots and routine vaccines for adults and children. Our pharmacists are certified immunizers.',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Medication reviews',
    text: 'Comprehensive reviews to check for interactions, duplications, and ways to simplify your daily regimen.',
    image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Compounding',
    text: 'Custom preparations when commercially available products are not suitable — flavours, strengths, and dosage forms tailored to you.',
    image: 'https://images.unsplash.com/photo-1585435557343-3b5930310d87?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Free local delivery',
    text: 'Prescriptions delivered to your door within our service area at no extra charge. Ideal for seniors and busy families.',
    image: 'https://images.unsplash.com/photo-1587854692152-c3d09bf27c7a?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Vitamins & wellness',
    text: 'A curated selection of vitamins, supplements, and wellness products — plus advice from our pharmacists on what fits your health goals.',
    image: '/images/wellness-vitamins.jpg',
  },
  {
    title: 'Body care & personal wash',
    text: 'Soaps, body wash, skin care, and everyday personal care essentials for all ages, available right here in store.',
    image: '/images/body-wash.jpg',
  },
  {
    title: 'Wellness & OTC advice',
    text: 'Guidance on over-the-counter products, blood pressure checks, smoking cessation support, and general health questions.',
    image: '/images/band-services.jpg',
  },
]

const faqs = [
  {
    q: 'How do I transfer a prescription?',
    a: 'Call us or visit in person. We contact your previous pharmacy and handle the rest — usually within one business day.',
  },
  {
    q: 'Do I need an appointment for a flu shot?',
    a: 'No appointment needed for most immunizations. Walk in during pharmacy hours with your health card.',
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
            From everyday prescriptions to specialized compounding, our pharmacists provide
            clinical expertise with the convenience of a neighbourhood store.
          </p>

          <div className="service-list">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`service-row ${index % 2 === 1 ? 'reversed' : ''}`}
              >
                <img src={service.image} alt="" className="service-image" />
                <div className="service-copy">
                  <h2 className="service-title">{service.title}</h2>
                  <p className="prose">{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-content subtle">
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
          <p className="section-lead">Transfer a prescription or book a consultation today.</p>
          <Link to="/contact" className="btn btn-primary">Contact us</Link>
        </div>
      </section>
    </>
  )
}

export default Services
