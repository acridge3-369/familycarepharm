import PageHero from '../components/PageHero'
import { Link } from 'react-router-dom'
import {
  ADDRESS_CITY,
  ADDRESS_FULL,
  ADDRESS_LINE1,
  MAP_EMBED_URL,
  MAP_LINK,
  PHARMACY_EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  AFTER_HOURS_PHONE_DISPLAY,
  AFTER_HOURS_PHONE_TEL,
} from '../constants/contact'

const hours = [
  { day: 'Monday – Friday', time: '9:00 AM – 6:00 PM' },
  { day: 'Saturday', time: '10:00 AM – 5:00 PM' },
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
                <p>
                  <a href={MAP_LINK} target="_blank" rel="noopener noreferrer">
                    {ADDRESS_LINE1}
                    <br />
                    {ADDRESS_CITY}
                  </a>
                </p>
              </div>
              <div className="info-item">
                <span className="info-label">Phone</span>
                <p><a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a></p>
              </div>
              <div className="info-item">
                <span className="info-label">After hours</span>
                <p>
                  <a href={`tel:${AFTER_HOURS_PHONE_TEL}`}>{AFTER_HOURS_PHONE_DISPLAY}</a>
                </p>
              </div>
              <div className="info-item">
                <span className="info-label">Email</span>
                <p><a href={`mailto:${PHARMACY_EMAIL}`}>{PHARMACY_EMAIL}</a></p>
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
            <p className="contact-after-hours">
              Outside store hours, call{' '}
              <a href={`tel:${AFTER_HOURS_PHONE_TEL}`}>{AFTER_HOURS_PHONE_DISPLAY}</a>.
            </p>

            <div className="contact-actions" style={{ marginTop: '2rem' }}>
              <a href={`tel:${PHONE_TEL}`} className="btn btn-primary">Call now</a>
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Get directions
              </a>
            </div>
          </div>

          <div className="contact-map-block">
            <div className="map-container">
              <iframe
                title="Family Care Pharmacy location"
                src={MAP_EMBED_URL}
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="map-note">{ADDRESS_FULL}</p>
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
              Switching pharmacies is easy. Call us at{' '}
              <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a> with your name, date of birth,
              and the name of your current pharmacy. We request your prescriptions on your behalf
              and notify you when everything is ready.
            </p>
            <p className="prose">
              New to the area? Visit us at {ADDRESS_FULL}, or bring your empty bottles or a
              photo of your prescription label and we will take care of the rest.
            </p>
            <Link to="/transfer-prescriptions" className="home-flow-link">
              Learn more about transferring <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
