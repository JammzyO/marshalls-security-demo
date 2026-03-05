import { Fragment } from 'react'
import styles from './technology-hero.module.css'
import sysStyles from './tech-systems.module.css'
import ctaStyles from './tech-cta-strip.module.css'

const SYSTEMS = [
  {
    num: '01',
    title: 'CCTV Surveillance',
    body: 'High-definition cameras, recording systems and remote monitoring. We design coverage maps to eliminate blind spots across your entire property.',
  },
  {
    num: '02',
    title: 'Electric Fence',
    body: 'Perimeter electric fence installation for estates, warehouses and commercial properties. Energizers, alarm integration and full compliance.',
  },
  {
    num: '03',
    title: 'Access Control',
    body: 'Biometric, card and PIN-based access systems. Control who enters, when and where — with a full digital audit trail.',
  },
  {
    num: '04',
    title: 'Intruder Alarm Systems',
    body: 'Detection sensors, control panels and rapid response integration. Radio alarms and monitored systems for residential and commercial properties.',
  },
  {
    num: '05',
    title: 'GPS Fleet Tracking',
    body: 'Real-time vehicle tracking, route monitoring and fleet management. Full visibility of your vehicles and personnel at all times.',
  },
  {
    num: '06',
    title: 'Fire Detection Systems',
    body: 'Smoke detectors, heat sensors and suppression system integration. Rapid detection and emergency response protocols.',
  },
]

const TRUST_ITEMS = [
  'CCTV',
  'Electric Fence',
  'Access Control',
  'Alarms',
  'GPS Tracking',
  'Fire Detection',
]

export default function TechnologyPage() {
  return (
    <>
      <section className={styles.hero}>

        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={styles.heroColorLayer} aria-hidden="true" />

        <div className={styles.heroContent}>

          <div className={styles.kicker} aria-hidden="true">
            <span className={styles.kickerLine} />
            <span className={styles.kickerText}>Technology &amp; Installations</span>
          </div>

          <h1 className={styles.headline}>
            CCTV. Electric Fence. Access Control.<br />
            Installed Right. Maintained. Monitored.
          </h1>

          <p className={styles.subtext}>
            For commercial buildings, estates, warehouses and institutions
            across Kenya. We survey, supply, install and maintain — under
            one contract.
          </p>

          <div className={styles.ctas}>
            <a href="/contact" className={styles.ctaPrimary}>
              Request a Site Survey
            </a>
            <a href="/audit" className={styles.ctaSecondary}>
              Book a Security Audit Call
            </a>
          </div>

        </div>

        {/* Trust strip — pinned to bottom of hero */}
        <div className={styles.trustStrip} aria-label="Technology offerings">
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

      {/* ─── Systems We Install ─── */}
      <section className={sysStyles.section}>
        <div className={sysStyles.inner}>

          <span className={sysStyles.sectionLabel}>What We Install</span>
          <h2 className={sysStyles.headline}>
            Every System Surveyed, Supplied and Installed by Our Team.
          </h2>

          <div className={sysStyles.grid}>
            {SYSTEMS.map((sys) => (
              <div key={sys.num} className={sysStyles.card}>
                <span className={sysStyles.cardNum}>{sys.num}</span>
                <h3 className={sysStyles.cardTitle}>{sys.title}</h3>
                <p className={sysStyles.cardBody}>{sys.body}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── CTA Strip ─── */}
      <section className={ctaStyles.section}>
        <div className={ctaStyles.inner}>
          <p className={ctaStyles.copy}>
            Every installation starts with a site survey. No obligation.
          </p>
          <a href="/contact" className={ctaStyles.cta}>
            Request a Site Survey
          </a>
        </div>
      </section>
    </>
  )
}
