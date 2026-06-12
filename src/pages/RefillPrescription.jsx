import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { PHONE_DISPLAY, PHONE_TEL } from '../constants/contact'

const steps = [
  {
    title: 'Call the pharmacy',
    text: 'Dial our number during business hours and let us know you need a refill.',
  },
  {
    title: 'Provide your details',
    text: 'Have your name, date of birth, and prescription name or Rx number ready.',
  },
  {
    title: 'Pick a time',
    text: 'We will tell you when your medication will be ready for pickup or delivery.',
  },
]

const checklist = [
  'Full name',
  'Date of birth',
  'Prescription name or Rx number',
  'Phone number for pickup notifications',
]

function RefillPrescription() {
  return (
    <>
      <PageHero
        label="Refills"
        title="Fill your prescription by phone"
        subtitle="Quick and easy — call us and we will take care of the rest."
        image="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1920&q=85"
      />

      <section className="page-content">
        <div className="section-inner refill-layout">
          <div className="refill-call-card">
            <span className="section-label">Call to refill</span>
            <h2 className="section-title">Ready when you are</h2>
            <p className="prose">
              Skip the wait at the counter. Our team can process your refill over the phone
              and have it ready for pickup or local delivery.
            </p>
            <a href={`tel:${PHONE_TEL}`} className="refill-phone-link">
              {PHONE_DISPLAY}
            </a>
            <a href={`tel:${PHONE_TEL}`} className="btn btn-primary refill-call-btn">
              Call now to refill
            </a>
          </div>

          <div className="refill-steps">
            <h3 className="refill-steps-title">How it works</h3>
            <ol className="refill-step-list">
              {steps.map((step, index) => (
                <li key={step.title} className="refill-step">
                  <span className="refill-step-num">{index + 1}</span>
                  <div>
                    <h4 className="refill-step-title">{step.title}</h4>
                    <p className="refill-step-text">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="page-content subtle">
        <div className="section-inner split-layout">
          <div>
            <span className="section-label">Before you call</span>
            <h2 className="section-title">Have this information handy</h2>
            <ul className="refill-checklist">
              {checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="prose">
              New patient? See our{' '}
              <Link to="/contact">contact page</Link> to transfer a prescription from another pharmacy.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=900&q=80"
            alt="Pharmacist ready to help with a prescription refill"
            className="content-image"
          />
        </div>
      </section>
    </>
  )
}

export default RefillPrescription
