'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import styles from './audit-form.module.css'

const WEBHOOK = 'https://hook.eu2.make.com/ewm2zfey8x23w0ia3njxpe1dtizs2xmj'

const TECH_OPTIONS = ['CCTV', 'Electric Fence', 'Access Control', 'Alarm', 'GPS', 'None']

const PAGE_MAP: Record<string, string> = {
  '/':           'homepage',
  '/services':   'services',
  '/guards':     'guard-services',
  '/technology': 'technology',
}

type S1 = {
  propertyType: string
  location: string
  mainConcern: string
  hasGuards: boolean | null
  tech: string[]
  timeline: string
}

type S2 = { name: string; phone: string; email: string }
type E1 = Partial<Record<keyof S1, string>>
type E2 = Partial<Record<keyof S2, string>>

export default function AuditForm({
  submitLabel = 'Submit — Book My Security Audit',
  confirmText = 'One of our team will contact you within 5 hours. Check your email for confirmation.',
}: {
  submitLabel?: string
  confirmText?: string
}) {
  const path = usePathname()
  const [step, setStep] = useState<1 | 2>(1)
  const [succeeded, setSucceeded] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const [s1, setS1] = useState<S1>({
    propertyType: '', location: '', mainConcern: '',
    hasGuards: null, tech: [], timeline: '',
  })
  const [e1, setE1] = useState<E1>({})

  const [s2, setS2] = useState<S2>({ name: '', phone: '', email: '' })
  const [e2, setE2] = useState<E2>({})

  function toggleTech(item: string) {
    setS1(p => {
      if (p.tech.includes(item)) return { ...p, tech: p.tech.filter(t => t !== item) }
      if (item === 'None') return { ...p, tech: ['None'] }
      return { ...p, tech: [...p.tech.filter(t => t !== 'None'), item] }
    })
    setE1(p => ({ ...p, tech: undefined }))
  }

  function validateS1(): boolean {
    const err: E1 = {}
    if (!s1.propertyType)                    err.propertyType = 'Please select a property type'
    if (s1.location.trim().length < 2)       err.location     = 'Please enter your location'
    if (!s1.mainConcern)                     err.mainConcern  = 'Please select your main concern'
    if (s1.hasGuards === null)               err.hasGuards    = 'Please select Yes or No'
    if (s1.tech.length === 0)                err.tech         = 'Please select at least one option'
    if (!s1.timeline)                        err.timeline     = 'Please select a timeframe'
    setE1(err)
    return Object.keys(err).length === 0
  }

  function validateField2(field: keyof S2, value: string): string | undefined {
    if (field === 'name') {
      if (!value.trim() || value.trim().length < 2 || !/^[a-zA-Z\s]+$/.test(value.trim()))
        return 'Please enter a valid name'
    }
    if (field === 'phone') {
      const digits = value.replace(/\D/g, '')
      if (!value.trim() || !/^\d+$/.test(value.trim()) || digits.length < 9 || digits.length > 12)
        return 'Please enter a valid phone number'
    }
    if (field === 'email') {
      if (!value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()))
        return 'Please enter a valid email address'
    }
    return undefined
  }

  function validateS2(): boolean {
    const err: E2 = {
      name:  validateField2('name',  s2.name),
      phone: validateField2('phone', s2.phone),
      email: validateField2('email', s2.email),
    }
    if (!err.name)  delete err.name
    if (!err.phone) delete err.phone
    if (!err.email) delete err.email
    setE2(err)
    return Object.keys(err).length === 0
  }

  function handleS2Change(field: keyof S2, value: string) {
    setS2(p => ({ ...p, [field]: value }))
    const fieldErr = validateField2(field, value)
    setE2(p => ({ ...p, [field]: fieldErr }))
  }

  function handleNext() {
    if (validateS1()) setStep(2)
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault()
    if (!validateS2()) return
    setSubmitting(true)
    setSubmitError(false)
    try {
      const res = await fetch(WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          property_type: s1.propertyType,
          location:      s1.location,
          main_concern:  s1.mainConcern,
          has_guards:    s1.hasGuards ? 'Yes' : 'No',
          current_tech:  s1.tech.join(', '),
          timeline:      s1.timeline,
          full_name:     s2.name,
          phone:         s2.phone,
          email:         s2.email,
          source_page:   PAGE_MAP[path] ?? path,
        }),
      })
      if (res.ok) {
        setSucceeded(true)
      } else {
        setSubmitError(true)
      }
    } catch {
      setSubmitError(true)
    } finally {
      setSubmitting(false)
    }
  }

  function handleReset() {
    setSucceeded(false)
    setStep(1)
    setS1({ propertyType: '', location: '', mainConcern: '', hasGuards: null, tech: [], timeline: '' })
    setE1({})
    setS2({ name: '', phone: '', email: '' })
    setE2({})
    setSubmitError(false)
  }

  /* ─── Confirmation ─── */
  if (succeeded) {
    return (
      <div className={styles.confirmation}>
        <h3 className={styles.confirmHeading}>Request received.</h3>
        <p className={styles.confirmText}>{confirmText}</p>
        <button type="button" className={styles.resetLink} onClick={handleReset}>
          Submit another request
        </button>
        <div className={styles.confirmDivider} aria-hidden="true" />
        <span className={styles.confirmWaLabel}>Want to speak sooner?</span>
        <a
          href={`https://wa.me/254716406347?text=${encodeURIComponent(`Hi, I just submitted the security audit form on the Marshalls Security website. My name is ${s2.name}, I have a ${s1.propertyType} in ${s1.location} and my main concern is ${s1.mainConcern}. I'd like to schedule a call.`)}`}
          className={styles.confirmWaBtn}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp Us Now — We Have Your Details
        </a>
      </div>
    )
  }

  return (
    <div className={styles.formWrap}>

      {/* ─── Step 1 ─── */}
      <form className={styles.form} onSubmit={ev => ev.preventDefault()} noValidate>

        {/* Property Type */}
        <div className={styles.field}>
          <label className={styles.label} htmlFor="property-type">Property Type</label>
          <select
            className={`${styles.select} ${e1.propertyType ? styles.fieldError : ''}`}
            id="property-type" value={s1.propertyType}
            onChange={ev => { setS1(p => ({ ...p, propertyType: ev.target.value })); setE1(p => ({ ...p, propertyType: undefined })) }}
          >
            <option value="" disabled>Select property type</option>
            <option>Corporate</option>
            <option>Estate</option>
            <option>Hotel</option>
            <option>Institution</option>
            <option>Commercial Building</option>
            <option>Business Park</option>
            <option>Other</option>
          </select>
          {e1.propertyType && <span className={styles.errorMsg}>{e1.propertyType}</span>}
        </div>

        {/* Location */}
        <div className={styles.field}>
          <label className={styles.label} htmlFor="location">Location</label>
          <input
            className={`${styles.input} ${e1.location ? styles.fieldError : ''}`}
            id="location" type="text" placeholder="County or town" autoComplete="off"
            value={s1.location}
            onChange={ev => { setS1(p => ({ ...p, location: ev.target.value })); setE1(p => ({ ...p, location: undefined })) }}
          />
          {e1.location && <span className={styles.errorMsg}>{e1.location}</span>}
        </div>

        {/* Main Concern */}
        <div className={styles.field}>
          <label className={styles.label} htmlFor="main-concern">Main Concern</label>
          <select
            className={`${styles.select} ${e1.mainConcern ? styles.fieldError : ''}`}
            id="main-concern" value={s1.mainConcern}
            onChange={ev => { setS1(p => ({ ...p, mainConcern: ev.target.value })); setE1(p => ({ ...p, mainConcern: undefined })) }}
          >
            <option value="" disabled>Select your main concern</option>
            <option>Theft</option>
            <option>Trespass</option>
            <option>Vandalism</option>
            <option>Access Control</option>
            <option>Internal Collusion</option>
            <option>Customer Safety</option>
          </select>
          {e1.mainConcern && <span className={styles.errorMsg}>{e1.mainConcern}</span>}
        </div>

        {/* Guards YES / NO */}
        <div className={styles.field}>
          <span className={styles.label}>Do you currently have guards?</span>
          <div className={`${styles.toggleRow} ${e1.hasGuards ? styles.groupError : ''}`}>
            <button type="button"
              className={`${styles.toggleBtn} ${s1.hasGuards === true ? styles.toggleActive : ''}`}
              onClick={() => { setS1(p => ({ ...p, hasGuards: true })); setE1(p => ({ ...p, hasGuards: undefined })) }}
              aria-pressed={s1.hasGuards === true}
            >Yes</button>
            <button type="button"
              className={`${styles.toggleBtn} ${s1.hasGuards === false ? styles.toggleActive : ''}`}
              onClick={() => { setS1(p => ({ ...p, hasGuards: false })); setE1(p => ({ ...p, hasGuards: undefined })) }}
              aria-pressed={s1.hasGuards === false}
            >No</button>
          </div>
          {e1.hasGuards && <span className={styles.errorMsg}>{e1.hasGuards}</span>}
        </div>

        {/* Security Tech */}
        <div className={styles.field}>
          <span className={styles.label}>Current Security Technology</span>
          <div className={`${styles.checkGrid} ${e1.tech ? styles.groupError : ''}`}>
            {TECH_OPTIONS.map(tech => {
              const active = s1.tech.includes(tech)
              return (
                <button key={tech} type="button"
                  className={`${styles.checkItem} ${active ? styles.checkActive : ''}`}
                  onClick={() => toggleTech(tech)} aria-pressed={active}
                >
                  <span className={`${styles.checkBox} ${active ? styles.checkBoxActive : ''}`} aria-hidden="true" />
                  {tech}
                </button>
              )
            })}
          </div>
          {e1.tech && <span className={styles.errorMsg}>{e1.tech}</span>}
        </div>

        {/* Timeline */}
        <div className={styles.field}>
          <label className={styles.label} htmlFor="timeline">When do you want this solved?</label>
          <select
            className={`${styles.select} ${e1.timeline ? styles.fieldError : ''}`}
            id="timeline" value={s1.timeline}
            onChange={ev => { setS1(p => ({ ...p, timeline: ev.target.value })); setE1(p => ({ ...p, timeline: undefined })) }}
          >
            <option value="" disabled>Select timeframe</option>
            <option>0–14 days</option>
            <option>15–30 days</option>
            <option>31–60 days</option>
            <option>60+ days</option>
          </select>
          {e1.timeline && <span className={styles.errorMsg}>{e1.timeline}</span>}
        </div>

        <button type="button" className={styles.submit} onClick={handleNext}>
          Next — Enter Your Details →
        </button>

      </form>

      {/* ─── Step 2 overlay ─── */}
      <div
        className={`${styles.overlay} ${step === 2 ? styles.overlayVisible : ''}`}
        aria-hidden={step !== 2}
      >
        <form className={styles.overlayForm} onSubmit={handleSubmit} noValidate>

          <h3 className={styles.overlayHeading}>Almost done.</h3>
          <p className={styles.overlaySubtext}>Enter your details and we&rsquo;ll call you within 5 hours.</p>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="full-name">Full Name</label>
            <input
              className={`${styles.input} ${e2.name ? styles.fieldError : ''}`}
              id="full-name" type="text" placeholder="Your full name" autoComplete="name"
              value={s2.name}
              onChange={ev => handleS2Change('name', ev.target.value)}
            />
            {e2.name && <span className={styles.errorMsg}>{e2.name}</span>}
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="phone">Phone Number</label>
            <input
              className={`${styles.input} ${e2.phone ? styles.fieldError : ''}`}
              id="phone" type="tel" placeholder="Phone number" autoComplete="tel"
              value={s2.phone}
              onChange={ev => handleS2Change('phone', ev.target.value)}
            />
            {e2.phone && <span className={styles.errorMsg}>{e2.phone}</span>}
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">Email Address</label>
            <input
              className={`${styles.input} ${e2.email ? styles.fieldError : ''}`}
              id="email" type="email" placeholder="Email address" autoComplete="email"
              value={s2.email}
              onChange={ev => handleS2Change('email', ev.target.value)}
            />
            {e2.email && <span className={styles.errorMsg}>{e2.email}</span>}
          </div>

          {submitError && (
            <p className={styles.submitError}>
              Something went wrong. Please call us directly on 0739 060 606.
            </p>
          )}

          <button type="submit" className={styles.submit} disabled={submitting}>
            {submitting ? 'Submitting…' : submitLabel}
          </button>

          <button type="button" className={styles.backLink} onClick={() => setStep(1)}>
            ← Back
          </button>

        </form>
      </div>

    </div>
  )
}
