import styles from './services-hero.module.css'
import ServicesCards from './ServicesCards'
import formStyles from '../audit-form.module.css'
import AuditForm from '../AuditForm'

export default function ServicesPage() {
  return (
    <>
      <section className={styles.hero}>

        <div className={styles.inner}>

          <span className={styles.pageLabel}>What We Offer</span>

          <h1 className={styles.headline}>
            Complete Security. Guards, Technology and<br />
            Accountability — Under One Contract.
          </h1>

          <p className={styles.subtext}>
            Every service we offer is designed to work together. Not isolated
            solutions — a complete system built around your property.
          </p>

        </div>

      </section>

      {/* ─── Service Cards ─── */}
      <ServicesCards />

      {/* ─── Qualification Form ─── */}
      <section className={formStyles.section}>
        <div className={formStyles.inner}>

          {/* Left: context */}
          <div className={formStyles.context}>
            <span className={formStyles.sectionLabel}>Get Started</span>
            <h2 className={formStyles.headline}>
              Tell Us About Your Property.
            </h2>
            <p className={formStyles.subtext}>
              We&rsquo;ll come to you. Free site assessment, no obligation.
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
            <AuditForm />
          </div>

        </div>
      </section>
    </>
  )
}
