import { Fragment } from 'react'
import Image from 'next/image'
import guardsImg from '../../gallery/security-team-in-masks.jpeg'
import styles from './guards-hero.module.css'
import incStyles from './guards-included.module.css'
import formStyles from '../audit-form.module.css'
import AuditForm from '../AuditForm'

const INCLUDED_ITEMS = [
  'Written post orders and guard SOPs for your site',
  'Supervisor checks and sign-off reporting',
  'Access control procedures — visitors, vehicles, staff',
  'Incident reporting — daily logs and weekly summaries',
  'Response protocol — defined escalation chain',
  'Regular performance reviews and contract flexibility',
]

const TRUST_ITEMS = [
  'Unarmed & Armed Guards',
  '24/7 Response',
  'Supervisor Checks',
  'Kenya-Wide Deployment',
]

export default function GuardsPage() {
  return (
    <>
      <section className={styles.hero}>

        <Image
          src={guardsImg}
          alt="Marshalls Security Group guards in uniform"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          className={styles.heroBg}
          priority
        />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={styles.heroColorLayer} aria-hidden="true" />

        <div className={styles.heroContent}>

          <div className={styles.kicker} aria-hidden="true">
            <span className={styles.kickerLine} />
            <span className={styles.kickerText}>Guard Services</span>
          </div>

          <h1 className={styles.headline}>
            Stop Theft, Trespass and Collusion —<br />
            Trained Guards with Clear SOPs,<br />
            Supervision and Full Accountability.
          </h1>

          <p className={styles.subtext}>
            For corporates, estates, hotels, institutions and commercial
            buildings across Kenya.
          </p>

          <div className={styles.ctas}>
            <a href="https://wa.me/254739060606?text=Hi%2C%20I%27ve%20just%20submitted%20an%20audit%20request%20on%20the%20Marshalls%20Security%20website%20and%20I%27d%20like%20to%20schedule%20a%20call." className={styles.ctaPrimary} target="_blank" rel="noopener noreferrer">
              Book a Security Audit Call
            </a>
            <a href="#audit" className={styles.ctaSecondary}>
              Request a Site Survey
            </a>
          </div>

        </div>

        {/* Trust strip — pinned to bottom of hero */}
        <div className={styles.trustStrip} aria-label="Service highlights">
          {TRUST_ITEMS.map((item, i) => (
            <Fragment key={item}>
              <span className={styles.trustItem}>{item}</span>
              {i < TRUST_ITEMS.length - 1 && (
                <span className={styles.trustDot} aria-hidden="true" />
              )}
            </Fragment>
          ))}
        </div>

      </section>

      {/* ─── What's Included ─── */}
      <section id="whats-included" className={incStyles.section}>
        <div className={incStyles.inner}>

          <span className={incStyles.sectionLabel}>What&rsquo;s Included</span>
          <h2 className={incStyles.headline}>Every Guard Deployment Includes:</h2>

          <ul className={incStyles.list}>
            {INCLUDED_ITEMS.map((item) => (
              <li key={item} className={incStyles.listItem}>
                <span className={incStyles.itemMark} aria-hidden="true" />
                <span className={incStyles.itemText}>{item}</span>
              </li>
            ))}
          </ul>

          <div className={incStyles.note}>
            <p className={incStyles.noteText}>
              Armed or unarmed guards available. Dog patrol unit available on request.
            </p>
          </div>

          <div className={incStyles.ctaRow}>
            <a href="https://wa.me/254739060606?text=Hi%2C%20I%27ve%20just%20submitted%20an%20audit%20request%20on%20the%20Marshalls%20Security%20website%20and%20I%27d%20like%20to%20schedule%20a%20call." className={incStyles.cta} target="_blank" rel="noopener noreferrer">
              Book a Security Audit Call
            </a>
          </div>

        </div>
      </section>

      {/* ─── Qualification Form ─── */}
      <section id="audit" className={formStyles.section}>
        <div className={formStyles.inner}>

          {/* Left: context */}
          <div className={formStyles.context}>
            <span className={formStyles.sectionLabel}>Get Started</span>
            <h2 className={formStyles.headline}>
              Request a Guard Deployment Quote.
            </h2>
            <p className={formStyles.subtext}>
              Tell us about your property. We respond within 5 hours.
            </p>
            <ul className={formStyles.trustList}>
              <li className={formStyles.trustItem}>No obligation — assessment is completely free</li>
              <li className={formStyles.trustItem}>One of our team calls you to confirm</li>
              <li className={formStyles.trustItem}>Site visit scheduled within 48 hours</li>
              <li className={formStyles.trustItem}>Full written risk report provided</li>
            </ul>
          </div>

          {/* Right: form panel */}
          <div className={formStyles.panel}>
            <AuditForm submitLabel="Submit — Request a Guard Quote" />
          </div>

        </div>
      </section>
    </>
  )
}
