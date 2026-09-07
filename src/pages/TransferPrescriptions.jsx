import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import {
  ADDRESS_FULL,
  PHONE_DISPLAY,
  PHONE_TEL,
} from '../constants/contact'

const steps = [
  {
    title: 'Call or visit us',
    text: 'Share your name, date of birth, and the pharmacy you use now. That is all we need to get started.',
  },
  {
    title: 'We handle the transfer',
    text: 'Our team contacts your current pharmacy and moves your prescriptions over — no paperwork chase for you.',
  },
  {
    title: 'Ready when you are',
    text: 'We let you know when everything is set. Pick up in store or ask about free delivery.',
  },
]

function TransferPrescriptions() {
  return (
    <>
      <PageHero
        label="Transfer prescriptions"
        title="Switch to your local neighbourhood pharmacy"
        subtitle="Leave the big chains behind. Transfer to Family Care Pharmacy and get personal care close to home."
        image="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1920&q=85"
      />

      <section className="page-content">
        <div className="section-inner transfer-intro">
          <p className="page-lead centered">
            Switching pharmacies is simple. We take care of the transfer so you can enjoy a
            neighbourhood pharmacy that knows your name — right here at {ADDRESS_FULL}.
          </p>
        </div>
      </section>

      <section className="page-content subtle">
        <div className="section-inner">
          <span className="section-label">How it works</span>
          <h2 className="section-title">Three easy steps</h2>
          <div className="values-grid transfer-steps">
            {steps.map((step, index) => (
              <div key={step.title} className="value-card">
                <span className="transfer-step-num">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="value-title">{step.title}</h3>
                <p className="value-text">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-content">
        <div className="section-inner split-layout">
          <div>
            <h2 className="section-title">Why transfer here?</h2>
            <p className="prose">
              Family Care Pharmacy is independently owned and community-focused. You get
              licensed pharmacists at the counter, free delivery across our service area,
              and the time to ask questions without a rush.
            </p>
            <p className="prose">
              New to the area? Bring empty bottles or a photo of your prescription labels
              and we will take care of the rest.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80"
            alt="Pharmacist helping a patient at the neighbourhood pharmacy"
            className="content-image"
          />
        </div>
      </section>

      <section className="page-cta">
        <div className="section-inner page-cta-inner">
          <h2 className="section-title">Ready to switch?</h2>
          <p className="section-lead">
            Call us today and we will start your transfer right away.
          </p>
          <div className="services-cta-actions">
            <a href={`tel:${PHONE_TEL}`} className="btn btn-primary">{PHONE_DISPLAY}</a>
            <Link to="/contact" className="btn btn-secondary">Visit or contact us</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default TransferPrescriptions
