import PageHero from '../components/PageHero'
import { PHONE_DISPLAY, PHONE_TEL } from '../constants/contact'

function RefillPrescription() {
  return (
    <>
      <PageHero
        label="Fill my prescriptions"
        title="Fill my prescriptions"
        subtitle="Call us and we will get your prescription filled right away — no long waits."
        image="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1920&q=85"
      />

      <section className="page-content subtle">
        <div className="section-inner refill-call-card refill-call-card--inline">
          <span className="section-label">Call the pharmacy</span>
          <h2 className="section-title">Give us a call</h2>
          <p className="prose">
            Call the pharmacy and we will get your prescription filled right away —
            no long waits.
          </p>
          <a href={`tel:${PHONE_TEL}`} className="refill-phone-link">
            {PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </>
  )
}

export default RefillPrescription
