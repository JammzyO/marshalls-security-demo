import Image from 'next/image'
import heroImg from '../gallery/security-team-1.jpg'
import styles from './hero.module.css'
import statsStyles from './stats-bar.module.css'
import svcStyles from './services-overview.module.css'
import baStyles from './before-after.module.css'
import wwsStyles from './who-we-serve.module.css'
import formStyles from './audit-form.module.css'
import AuditForm from './AuditForm'
import HeroHeadline from './HeroHeadline'

export default function Home() {
  return (
    <>
    <section className={styles.hero}>

      {/* Background photo */}
      <Image
        src={heroImg}
        alt="Marshalls Security Group guards on parade"
        fill
        style={{ objectFit: 'cover', objectPosition: 'center top' }}
        className={styles.heroBg}
        priority
      />

      {/* Dark gradient overlay */}
      <div className={styles.heroOverlay} aria-hidden="true" />

      {/* Accent colour treatment */}
      <div className={styles.heroColorLayer} aria-hidden="true" />

      {/* Film grain texture */}
      <div className={styles.heroGrain} aria-hidden="true" />

      {/* Hero content — bottom-left, luxury editorial layout */}
      <div className={styles.heroContent}>

        <div className={styles.kicker} aria-hidden="true">
          <span className={styles.kickerLine} />
          <span className={styles.kickerText}>Nairobi, Kenya</span>
        </div>

        <HeroHeadline />

        <p className={styles.subheadline}>
          Marshalls Security Group delivers guards, technology and accountability
          to corporates, estates and institutions across Kenya.
        </p>

        <div className={styles.ctas}>
          <a href="/audit" className={styles.ctaPrimary}>
            Book a Security Audit
          </a>
          <a href="/services" className={styles.ctaSecondary}>
            View Our Services
          </a>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollHint} aria-hidden="true">
        <span className={styles.scrollHintText}>Scroll</span>
        <span className={styles.scrollHintLine} />
      </div>

    </section>

    {/* ─── Stats Bar ─── */}
    <div className={statsStyles.statsBar}>
      <div className={statsStyles.inner}>

        <div className={statsStyles.stat}>
          <span
            className={statsStyles.statLabel}
            data-count="10"
            data-count-suffix="+ Years"
          >10+ Years</span>
          <span className={statsStyles.statDesc}>In Operation</span>
        </div>

        <div className={statsStyles.stat}>
          <span className={statsStyles.statLabel}>Kenya-Wide</span>
          <span className={statsStyles.statDesc}>Coverage</span>
        </div>

        <div className={statsStyles.stat}>
          <span className={statsStyles.statLabel}>Guards + Tech</span>
          <span className={statsStyles.statDesc}>Full Security Systems</span>
        </div>

      </div>
    </div>

    {/* ─── Services Overview ─── */}
    <section className={svcStyles.section}>
      <div className={svcStyles.inner}>

        <span className={svcStyles.sectionLabel}>What We Do</span>

        <h2 className={svcStyles.headline} data-anim="fade-up">
          Three Layers of Protection.<br />
          One Accountable Partner.
        </h2>

        <div className={svcStyles.grid} data-anim-group>

          <div className={svcStyles.card} data-anim-item>
            <span className={svcStyles.cardRule} aria-hidden="true" />
            <h3 className={svcStyles.cardTitle}>People</h3>
            <p className={svcStyles.cardBody}>
              Trained guards, clear SOPs, supervisor checks and defined
              response protocols. Every post is accountable.
            </p>
          </div>

          <div className={svcStyles.card} data-anim-item>
            <span className={svcStyles.cardRule} aria-hidden="true" />
            <h3 className={svcStyles.cardTitle}>Process</h3>
            <p className={svcStyles.cardBody}>
              Access rules, visitor logs, incident reporting and weekly
              compliance dashboards. What gets measured gets managed.
            </p>
          </div>

          <div className={svcStyles.card} data-anim-item>
            <span className={svcStyles.cardRule} aria-hidden="true" />
            <h3 className={svcStyles.cardTitle}>Technology</h3>
            <p className={svcStyles.cardBody}>
              CCTV, electric fence, access control, alarms and GPS tracking
              — installed, maintained and monitored.
            </p>
          </div>

        </div>

        <div className={svcStyles.ctaRow}>
          <a href="/audit" className={svcStyles.cta}>
            Book a Security Audit
          </a>
        </div>

      </div>
    </section>

    {/* ─── Before / After ─── */}
    <section className={baStyles.section}>
      <div className={baStyles.inner}>

        <span className={baStyles.sectionLabel}>The Reality</span>

        <h2 className={baStyles.headline} data-anim="fade-up">
          Most Kenyan businesses are guessing whether their security
          is working — until something goes wrong.
        </h2>

        <div className={baStyles.columns}>

          {/* Left — the problem */}
          <div className={`${baStyles.col} ${baStyles.colLeft}`} data-anim="slide-left">
            <span className={`${baStyles.colLabel} ${baStyles.colLabelLeft}`}>
              Without a System
            </span>
            <ul className={baStyles.list}>
              {[
                'Theft cases and unexplained stock losses',
                'No clear record of who entered or when',
                'Guards with no SOPs or supervision',
                'Weak perimeter with unmonitored blind spots',
                'Panic and confusion after incidents',
                'No evidence trail for investigations',
              ].map((item) => (
                <li key={item} className={`${baStyles.listItem} ${baStyles.listItemLeft}`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <div className={baStyles.divider} aria-hidden="true" />

          {/* Right — the solution */}
          <div className={`${baStyles.col} ${baStyles.colRight}`} data-anim="slide-right">
            <span className={`${baStyles.colLabel} ${baStyles.colLabelRight}`}>
              With Marshalls
            </span>
            <ul className={baStyles.list}>
              {[
                'Controlled entry with visitor and vehicle logs',
                'Trained guards with clear post orders',
                'Monitored perimeter and CCTV coverage',
                'Weekly incident reports and compliance dashboards',
                'Fast response with defined escalation chain',
                'Full evidence trail — people, tech and process',
              ].map((item) => (
                <li key={item} className={`${baStyles.listItem} ${baStyles.listItemRight}`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className={baStyles.bottom}>
          <p className={baStyles.bottomNote}>
            Get a free security risk assessment for your property.
          </p>
          <a href="/audit" className={baStyles.cta}>
            Book a Security Audit
          </a>
        </div>

      </div>
    </section>

    {/* ─── Who We Serve ─── */}
    <section className={wwsStyles.section}>
      <div className={wwsStyles.inner}>

        <span className={wwsStyles.sectionLabel}>Our Clients</span>

        <h2 className={wwsStyles.headline} data-anim="fade-up">
          Built for Organisations That Cannot<br />
          Afford to Guess.
        </h2>

        <div className={wwsStyles.grid} data-anim-group>
          {[
            'Corporate Offices & Business Parks',
            'Residential Estates & Gated Communities',
            'Hotels & Hospitality',
            'Learning Institutions & Hospitals',
            'Warehouses, Logistics & Industrial Sites',
            'Government Agencies & NGOs',
          ].map((sector) => (
            <div key={sector} className={wwsStyles.sector} data-anim-item>
              <span className={wwsStyles.sectorName}>{sector}</span>
            </div>
          ))}
        </div>

        <p className={wwsStyles.note}>
          Serving clients across Nairobi and all of Kenya.
        </p>

      </div>
    </section>

    {/* ─── Qualification Form ─── */}
    <section className={formStyles.section} id="audit">
      <div className={formStyles.inner}>

        {/* Left: context */}
        <div className={formStyles.context}>
          <span className={formStyles.sectionLabel}>Get Started</span>
          <h2 className={formStyles.headline} data-anim="fade-up">
            Book a Free Security Risk Assessment.
          </h2>
          <p className={formStyles.subtext}>
            Takes 2 minutes. We respond within 5 hours.
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
