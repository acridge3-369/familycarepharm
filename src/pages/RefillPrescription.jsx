import PageHero from '../components/PageHero'
import PrescriptionUploadForm from '../components/PrescriptionUploadForm'
import { PHONE_DISPLAY, PHONE_TEL } from '../constants/contact'

function RefillPrescription() {
  return (
    <>
      <PageHero
        label="Prescriptions"
        title="Submit your prescription"
        subtitle="Take a photo on your phone and send it to our pharmacy with your details."
        image="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1920&q=85"
      />

      <section className="page-content">
        <div className="section-inner rx-page-inner">
          <PrescriptionUploadForm />
        </div>
      </section>

      <section className="page-content subtle">
        <div className="section-inner refill-call-card refill-call-card--inline">
          <span className="section-label">Prefer to call?</span>
          <h2 className="section-title">Refill by phone</h2>
          <p className="prose">
            You can also call us during business hours and our team will process your
            refill over the phone.
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
