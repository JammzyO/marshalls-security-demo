import styles from './services-hero.module.css'
import ServicesCards from './ServicesCards'
import pkgStyles from './packages.module.css'
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

      {/* ─── Packages ─── */}
      <section className={pkgStyles.section}>
        <div className={pkgStyles.inner}>

          <span className={pkgStyles.eyebrow}>Our Packages</span>

          <h2 className={pkgStyles.heading}>Popular Packages.</h2>

          <p className={pkgStyles.subtext}>
            Three ways to engage us. Every package starts with a free site assessment.
          </p>

          <div className={pkgStyles.grid}>

            {/* Card 1 — Control Starter */}
            <div className={pkgStyles.card}>
              <span className={pkgStyles.cardLabel}>Best for Quick Wins</span>
              <h3 className={pkgStyles.cardTitle}>Control Starter</h3>
              <span className={pkgStyles.divider} aria-hidden="true" />
              <p className={pkgStyles.bestFor}>Best for: Estates and small commercial buildings needing structure.</p>
              <ul className={pkgStyles.list}>
                <li className={pkgStyles.listItem}>Site security risk audit — access points, perimeter, blind spots</li>
                <li className={pkgStyles.listItem}>Guard SOP baseline and post orders</li>
                <li className={pkgStyles.listItem}>Basic reporting format — daily logs and weekly summary</li>
                <li className={pkgStyles.listItem}>Tech coverage recommendations — no installation commitment required</li>
              </ul>
            </div>

            {/* Card 2 — Control + Tech (featured) */}
            <div className={`${pkgStyles.card} ${pkgStyles.cardFeatured}`}>
              <span className={pkgStyles.cardLabel}>Most Popular</span>
              <h3 className={pkgStyles.cardTitle}>Control + Tech</h3>
              <span className={pkgStyles.divider} aria-hidden="true" />
              <p className={pkgStyles.bestFor}>Best for: Corporates, hotels and institutions.</p>
              <ul className={pkgStyles.list}>
                <li className={pkgStyles.listItem}>Everything in Control Starter</li>
                <li className={pkgStyles.listItem}>CCTV, access control, alarm and fence proposal and installation plan</li>
                <li className={pkgStyles.listItem}>Maintenance plan — monthly and quarterly</li>
                <li className={pkgStyles.listItem}>Incident response protocol and escalation map</li>
              </ul>
            </div>

            {/* Card 3 — Full Control Retainer */}
            <div className={pkgStyles.card}>
              <span className={pkgStyles.cardLabel}>Comprehensive</span>
              <h3 className={pkgStyles.cardTitle}>Full Control Retainer</h3>
              <span className={pkgStyles.divider} aria-hidden="true" />
              <p className={pkgStyles.bestFor}>Best for: Business parks, large estates and large commercial sites.</p>
              <ul className={pkgStyles.list}>
                <li className={pkgStyles.listItem}>Guard deployment with supervisor checks and training schedule</li>
                <li className={pkgStyles.listItem}>Tech installation as needed, plus ongoing maintenance</li>
                <li className={pkgStyles.listItem}>Monthly security review meeting and KPI dashboard</li>
                <li className={pkgStyles.listItem}>Defined SLAs — reporting, response and escalation</li>
                <li className={pkgStyles.listItem}>Full evidence trail — people, tech and process</li>
              </ul>
            </div>

          </div>

          <div className={pkgStyles.ctaRow}>
            <a href="#contact-form" className={pkgStyles.ctaLink}>
              Discuss Which Package Is Right for You &rarr;
            </a>
          </div>

        </div>
      </section>

      {/* ─── Qualification Form ─── */}
      <section className={formStyles.section} id="contact-form">
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
