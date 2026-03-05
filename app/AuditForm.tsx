'use client'

import { useState } from 'react'
import styles from './audit-form.module.css'

const TECH_OPTIONS = ['CCTV', 'Electric Fence', 'Access Control', 'Alarm', 'GPS', 'None']

export default function AuditForm({ submitLabel = 'Submit — Book My Security Audit' }: { submitLabel?: string }) {
  const [hasGuards, setHasGuards] = useState<boolean | null>(null)
  const [techSelected, setTechSelected] = useState<string[]>([])

  function toggleTech(item: string) {
    setTechSelected(prev =>
      prev.includes(item) ? prev.filter(t => t !== item) : [...prev, item]
    )
  }

  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()} noValidate>

      {/* 1 — Property Type */}
      <div className={styles.field}>
        <label className={styles.label} htmlFor="property-type">Property Type</label>
        <select className={styles.select} id="property-type" name="property_type" defaultValue="">
          <option value="" disabled>Select property type</option>
          <option>Corporate</option>
          <option>Estate</option>
          <option>Hotel</option>
          <option>Institution</option>
          <option>Commercial Building</option>
          <option>Business Park</option>
          <option>Other</option>
        </select>
      </div>

      {/* 2 — Location */}
      <div className={styles.field}>
        <label className={styles.label} htmlFor="location">Location</label>
        <input
          className={styles.input}
          id="location"
          name="location"
          type="text"
          placeholder="County or town"
          autoComplete="off"
        />
      </div>

      {/* 3 — Main Concern */}
      <div className={styles.field}>
        <label className={styles.label} htmlFor="main-concern">Main Concern</label>
        <select className={styles.select} id="main-concern" name="main_concern" defaultValue="">
          <option value="" disabled>Select your main concern</option>
          <option>Theft</option>
          <option>Trespass</option>
          <option>Vandalism</option>
          <option>Access Control</option>
          <option>Internal Collusion</option>
          <option>Customer Safety</option>
        </select>
      </div>

      {/* 4 — Guards YES / NO */}
      <div className={styles.field}>
        <span className={styles.label}>Do you currently have guards?</span>
        <div className={styles.toggleRow}>
          <button
            type="button"
            className={`${styles.toggleBtn} ${hasGuards === true ? styles.toggleActive : ''}`}
            onClick={() => setHasGuards(true)}
            aria-pressed={hasGuards === true}
          >
            Yes
          </button>
          <button
            type="button"
            className={`${styles.toggleBtn} ${hasGuards === false ? styles.toggleActive : ''}`}
            onClick={() => setHasGuards(false)}
            aria-pressed={hasGuards === false}
          >
            No
          </button>
        </div>
      </div>

      {/* 5 — Security Tech */}
      <div className={styles.field}>
        <span className={styles.label}>Current Security Technology</span>
        <div className={styles.checkGrid}>
          {TECH_OPTIONS.map((tech) => {
            const active = techSelected.includes(tech)
            return (
              <button
                key={tech}
                type="button"
                className={`${styles.checkItem} ${active ? styles.checkActive : ''}`}
                onClick={() => toggleTech(tech)}
                aria-pressed={active}
              >
                <span
                  className={`${styles.checkBox} ${active ? styles.checkBoxActive : ''}`}
                  aria-hidden="true"
                />
                {tech}
              </button>
            )
          })}
        </div>
      </div>

      {/* 6 — Timeline */}
      <div className={styles.field}>
        <label className={styles.label} htmlFor="timeline">When do you want this solved?</label>
        <select className={styles.select} id="timeline" name="timeline" defaultValue="">
          <option value="" disabled>Select timeframe</option>
          <option>0–14 days</option>
          <option>15–30 days</option>
          <option>31–60 days</option>
          <option>60+ days</option>
        </select>
      </div>

      {/* 7 — Contact Details */}
      <div className={styles.field}>
        <span className={styles.label}>Contact Details</span>
        <div className={styles.contactRow}>
          <input
            className={styles.input}
            name="phone"
            type="tel"
            placeholder="Phone number"
            autoComplete="tel"
          />
          <input
            className={styles.input}
            name="email"
            type="email"
            placeholder="Email address"
            autoComplete="email"
          />
        </div>
      </div>

      {/* Submit */}
      <button type="submit" className={styles.submit}>
        {submitLabel}
      </button>

    </form>
  )
}
