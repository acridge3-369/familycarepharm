import PageHero from '../components/PageHero'

const hours = [
  { day: 'Monday – Friday', time: '8:30 AM – 7:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 5:00 PM' },
  { day: 'Sunday', time: '10:00 AM – 4:00 PM' },
  { day: 'Statutory holidays', time: 'Posted in store & online' },
]

function Contact() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Get in touch"
        subtitle="We are here to answer questions and help with your prescriptions."
        image="https://images.unsplash.com/photo-1631549916768-4119b2d5f2c6?auto=format&fit=crop&w=1920&q=85"
      />

      <section className="page-content">
        <div className="section-inner contact-page-layout">
          <div className="contact-info-block">
            <h2 className="section-title">Visit or call</h2>
            <div className="info-list">
              <div className="info-item">
                <span className="info-label">Address</span>
                <p>123 Main Street<br />Your City, ST 12345</p>
              </div>
              <div className="info-item">
                <span className="info-label">Phone</span>
                <p><a href="tel:+15551234567">(555) 123-4567</a></p>
              </div>
              <div className="info-item">
                <span className="info-label">Email</span>
                <p><a href="mailto:hello@familycarepharmacy.com">hello@familycarepharmacy.com</a></p>
              </div>
              <div className="info-item">
                <span className="info-label">Fax</span>
                <p>(555) 123-4568</p>
              </div>
            </div>

            <h3 className="contact-subheading">Hours</h3>
            <table className="hours-table">
              <tbody>
                {hours.map((row) => (
                  <tr key={row.day}>
                    <th>{row.day}</th>
                    <td>{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="contact-actions" style={{ marginTop: '2rem' }}>
              <a href="tel:+15551234567" className="btn btn-primary">Call now</a>
              <a href="mailto:hello@familycarepharmacy.com" className="btn btn-secondary">Send email</a>
            </div>
          </div>

          <div className="contact-map-block">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=900&q=80"
              alt="Street view near the pharmacy"
              className="content-image"
            />
            <div className="map-container" style={{ marginTop: '1.5rem' }}>
              <iframe
                title="Family Care Pharmacy location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.5!2d-123.12!3d49.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDE2JzQ4LjAiTiAxMjPCsDA3JzEyLjAiVw!5e0!3m2!1sen!2sca!4v1700000000000"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="map-note">Free parking available at the rear of the building.</p>
          </div>
        </div>
      </section>

      <section className="page-content subtle">
        <div className="section-inner split-layout">
          <img
            src="https://images.unsplash.com/photo-1587854692152-c3d09bf27c7a?auto=format&fit=crop&w=900&q=80"
            alt="Family at pharmacy"
            className="content-image"
          />
          <div>
            <h2 className="section-title">Transfer a prescription</h2>
            <p className="prose">
              Switching pharmacies is easy. Give us a call with your name, date of birth, and
              the name of your current pharmacy. We request your prescriptions on your behalf
              and notify you when everything is ready.
            </p>
            <p className="prose">
              New to the area? Bring your empty bottles or a photo of your prescription label
              and we will take care of the rest.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
