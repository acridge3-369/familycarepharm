import { useEffect, useState } from 'react'
import { PHARMACY_EMAIL } from '../constants/contact'

const initialForm = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  phone: '',
  email: '',
  phn: '',
  medicationName: '',
  rxNumber: '',
  doctorName: '',
  allergies: '',
  prescriptionType: 'refill',
  fulfillment: 'pickup',
  notes: '',
}

function PrescriptionUploadForm() {
  const [form, setForm] = useState(initialForm)
  const [photo, setPhoto] = useState(null)
  const [photoPreview, setPhotoPreview] = useState('')
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    return () => {
      if (photoPreview) URL.revokeObjectURL(photoPreview)
    }
  }, [photoPreview])

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handlePhotoChange = (event) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      setErrorMessage('Please upload a photo file (JPG, PNG, or HEIC).')
      return
    }

    if (file.size > 10 * 1024 * 1024) {
      setErrorMessage('Photo must be under 10 MB.')
      return
    }

    setErrorMessage('')
    setPhoto(file)
    setPhotoPreview((prev) => {
      if (prev) URL.revokeObjectURL(prev)
      return URL.createObjectURL(file)
    })
  }

  const clearPhoto = () => {
    setPhoto(null)
    setPhotoPreview((prev) => {
      if (prev) URL.revokeObjectURL(prev)
      return ''
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setErrorMessage('')

    if (!photo) {
      setErrorMessage('Please take or upload a photo of your prescription.')
      return
    }

    setStatus('submitting')

    const payload = new FormData()
    payload.append('prescription_photo', photo, photo.name)
    payload.append('first_name', form.firstName)
    payload.append('last_name', form.lastName)
    payload.append('date_of_birth', form.dateOfBirth)
    payload.append('phone', form.phone)
    payload.append('email', form.email)
    payload.append('phn', form.phn)
    payload.append('medication_name', form.medicationName)
    payload.append('rx_number', form.rxNumber)
    payload.append('doctor_name', form.doctorName)
    payload.append('allergies', form.allergies)
    payload.append('prescription_type', form.prescriptionType)
    payload.append('fulfillment', form.fulfillment)
    payload.append('notes', form.notes)
    payload.append('_subject', `Prescription submission — ${form.firstName} ${form.lastName}`)
    payload.append('_captcha', 'false')
    payload.append('_template', 'table')

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${PHARMACY_EMAIL}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: payload,
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Submission failed. Please try calling the pharmacy.')
      }

      setStatus('success')
      setForm(initialForm)
      clearPhoto()
    } catch (error) {
      setStatus('error')
      setErrorMessage(error.message || 'Something went wrong. Please call the pharmacy instead.')
    }
  }

  if (status === 'success') {
    return (
      <div className="rx-form-success">
        <h2 className="section-title">Prescription sent</h2>
        <p className="prose">
          Thank you. Our pharmacy team has received your prescription photo and details.
          We will contact you when your order is ready or if we need anything else.
        </p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setStatus('idle')}
        >
          Submit another prescription
        </button>
      </div>
    )
  }

  return (
    <form className="rx-form" onSubmit={handleSubmit}>
      <div className="rx-form-section">
        <span className="section-label">Step 1</span>
        <h2 className="rx-form-heading">Photo of your prescription</h2>
        <p className="rx-form-hint">
          On your phone, tap below to open the camera. Make sure the label and Rx details are clear.
        </p>

        <div className="rx-photo-area">
          {photoPreview ? (
            <div className="rx-photo-preview-wrap">
              <img src={photoPreview} alt="Prescription preview" className="rx-photo-preview" />
              <button type="button" className="btn-text rx-photo-clear" onClick={clearPhoto}>
                Remove photo
              </button>
            </div>
          ) : (
            <label className="rx-photo-upload">
              <input
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handlePhotoChange}
                className="rx-photo-input"
              />
              <span className="rx-photo-icon" aria-hidden="true" />
              <span className="rx-photo-label">Take photo or upload image</span>
              <span className="rx-photo-sublabel">JPG, PNG, or HEIC · max 10 MB</span>
            </label>
          )}
        </div>
      </div>

      <div className="rx-form-section">
        <span className="section-label">Step 2</span>
        <h2 className="rx-form-heading">Your information</h2>

        <div className="rx-form-grid">
          <label className="rx-field">
            <span>First name *</span>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={updateField}
              required
              autoComplete="given-name"
            />
          </label>
          <label className="rx-field">
            <span>Last name *</span>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={updateField}
              required
              autoComplete="family-name"
            />
          </label>
          <label className="rx-field">
            <span>Date of birth *</span>
            <input
              type="date"
              name="dateOfBirth"
              value={form.dateOfBirth}
              onChange={updateField}
              required
            />
          </label>
          <label className="rx-field">
            <span>Phone *</span>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={updateField}
              required
              autoComplete="tel"
              placeholder="(604) 555-1234"
            />
          </label>
          <label className="rx-field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={updateField}
              autoComplete="email"
            />
          </label>
          <label className="rx-field">
            <span>Personal Health Number (PHN)</span>
            <input
              type="text"
              name="phn"
              value={form.phn}
              onChange={updateField}
              inputMode="numeric"
              placeholder="BC health card number"
            />
          </label>
        </div>
      </div>

      <div className="rx-form-section">
        <span className="section-label">Step 3</span>
        <h2 className="rx-form-heading">Prescription details</h2>

        <div className="rx-form-grid">
          <label className="rx-field rx-field--full">
            <span>Medication name *</span>
            <input
              type="text"
              name="medicationName"
              value={form.medicationName}
              onChange={updateField}
              required
              placeholder="As shown on the prescription label"
            />
          </label>
          <label className="rx-field">
            <span>Rx / prescription number</span>
            <input
              type="text"
              name="rxNumber"
              value={form.rxNumber}
              onChange={updateField}
            />
          </label>
          <label className="rx-field">
            <span>Prescribing doctor</span>
            <input
              type="text"
              name="doctorName"
              value={form.doctorName}
              onChange={updateField}
            />
          </label>
          <label className="rx-field rx-field--full">
            <span>Allergies</span>
            <input
              type="text"
              name="allergies"
              value={form.allergies}
              onChange={updateField}
              placeholder="List any known drug allergies"
            />
          </label>
        </div>

        <fieldset className="rx-fieldset">
          <legend>Request type *</legend>
          <div className="rx-radio-group">
            <label className="rx-radio">
              <input
                type="radio"
                name="prescriptionType"
                value="refill"
                checked={form.prescriptionType === 'refill'}
                onChange={updateField}
              />
              Refill
            </label>
            <label className="rx-radio">
              <input
                type="radio"
                name="prescriptionType"
                value="new"
                checked={form.prescriptionType === 'new'}
                onChange={updateField}
              />
              New prescription
            </label>
            <label className="rx-radio">
              <input
                type="radio"
                name="prescriptionType"
                value="transfer"
                checked={form.prescriptionType === 'transfer'}
                onChange={updateField}
              />
              Transfer from another pharmacy
            </label>
          </div>
        </fieldset>

        <fieldset className="rx-fieldset">
          <legend>Pickup or delivery *</legend>
          <div className="rx-radio-group">
            <label className="rx-radio">
              <input
                type="radio"
                name="fulfillment"
                value="pickup"
                checked={form.fulfillment === 'pickup'}
                onChange={updateField}
              />
              Pickup in store
            </label>
            <label className="rx-radio">
              <input
                type="radio"
                name="fulfillment"
                value="delivery"
                checked={form.fulfillment === 'delivery'}
                onChange={updateField}
              />
              Local delivery
            </label>
          </div>
        </fieldset>

        <label className="rx-field rx-field--full">
          <span>Additional notes</span>
          <textarea
            name="notes"
            value={form.notes}
            onChange={updateField}
            rows={4}
            placeholder="Preferred pickup time, questions for the pharmacist, etc."
          />
        </label>
      </div>

      {errorMessage && (
        <p className="rx-form-error" role="alert">{errorMessage}</p>
      )}

      <button
        type="submit"
        className="btn btn-primary rx-submit-btn"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending to pharmacy…' : 'Submit prescription'}
      </button>

      <p className="rx-form-disclaimer">
        Your information is sent securely to Family Care Pharmacy. For urgent requests,
        please call us directly.
      </p>
    </form>
  )
}

export default PrescriptionUploadForm
