import { useEffect, useState } from 'react'
import { PHARMACY_EMAIL } from '../constants/contact'

const initialForm = {
  firstName: '',
  lastName: '',
  phone: '',
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
    payload.append('phone', form.phone)
    payload.append('_subject', `Fill my prescriptions — ${form.firstName} ${form.lastName}`)
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
          Thank you. Our pharmacy team has received your photo. We will call you when
          your order is ready or if we need anything else.
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
        <h2 className="rx-form-heading">Photo of your prescription</h2>
        <p className="rx-form-hint">
          Take a clear photo of your prescription label, then add your name and phone
          so we can reach you.
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
          <label className="rx-field rx-field--full">
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
        </div>
      </div>

      {errorMessage && (
        <p className="rx-form-error" role="alert">{errorMessage}</p>
      )}

      <button
        type="submit"
        className="btn btn-primary rx-submit-btn"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending to pharmacy…' : 'Send to pharmacy'}
      </button>

      <p className="rx-form-disclaimer">
        Prefer to talk it through? Call us and we will fill your prescription right away.
      </p>
    </form>
  )
}

export default PrescriptionUploadForm
