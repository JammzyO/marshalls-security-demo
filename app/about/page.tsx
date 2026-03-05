import Image from 'next/image'
import storyBgImg from '../../gallery/security-team-2.jpg'
import logoWatermark from '../../Brand assets/marshallogo.png'
import styles from './about-hero.module.css'
import storyStyles from './about-story.module.css'
import vmcStyles from './about-vmc.module.css'

export default function AboutPage() {
  return (
    <>
      <section className={styles.hero}>

        <div className={styles.inner}>

          <span className={styles.pageLabel}>Our Company</span>

          <h1 className={styles.headline}>
            Founded on the Belief That<br />
            Security Should Be Measurable.
          </h1>

          <p className={styles.subtext}>
            Marshalls Security Group is a privately held, Kenyan-owned security
            company managed by trained experts with deep experience across
            guarding, technology and risk management.
          </p>

        </div>

        {/* Logo watermark — bottom-right, faded */}
        <Image
          src={logoWatermark}
          alt=""
          aria-hidden="true"
          width={300}
          height={300}
          className={styles.watermark}
          style={{ objectFit: 'contain' }}
        />

      </section>

      {/* ─── Company Story ─── */}
      <section className={storyStyles.section}>
        <div className={storyStyles.inner}>

          {/* Left — pull quote with photo background */}
          <div className={storyStyles.quoteCol}>
            <Image
              src={storyBgImg}
              alt="Marshalls Security Group team briefing"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              className={storyStyles.quoteBg}
            />
            <div className={storyStyles.quoteOverlay} aria-hidden="true" />
            <blockquote className={storyStyles.pullQuote}>
              &ldquo;We take time to understand each client&rsquo;s needs &mdash;
              then build a security system that matches their operation,
              their culture, and their risk profile.&rdquo;
            </blockquote>
          </div>

          {/* Divider */}
          <div className={storyStyles.divider} aria-hidden="true" />

          {/* Right — body copy */}
          <div className={storyStyles.bodyCol}>
            <p className={storyStyles.para}>
              Marshalls Security Group was founded to close the gap between
              security that looks good on paper and security that actually works.
              Too many Kenyan businesses suffer preventable losses because their
              security provider delivers guards without systems, and technology
              without accountability.
            </p>
            <p className={storyStyles.para}>
              Our approach is consultative. Before we recommend anything, we
              assess your property, understand your risks, and map your
              vulnerabilities. Every solution we deploy is customised &mdash;
              not a template dropped on a new client.
            </p>
            <p className={storyStyles.para}>
              We are Kenyan-owned, professionally managed, and built to serve
              corporates, estates, institutions and commercial properties
              across the country.
            </p>
          </div>

        </div>
      </section>

      {/* ─── Vision / Mission / Commitment ─── */}
      <section className={vmcStyles.section}>
        <div className={vmcStyles.inner}>

          <span className={vmcStyles.sectionLabel} data-anim="fade-up">What Drives Us</span>

          <div className={vmcStyles.columns} data-anim-group>

            <div className={vmcStyles.col} data-anim-item>
              <span className={vmcStyles.colNum} aria-hidden="true">01</span>
              <span className={vmcStyles.colLabel}>Vision</span>
              <p className={vmcStyles.colText}>
                To be the most trusted, measurable and accountable security
                partner for businesses and institutions across Kenya.
              </p>
            </div>

            <div className={vmcStyles.col} data-anim-item>
              <span className={vmcStyles.colNum} aria-hidden="true">02</span>
              <span className={vmcStyles.colLabel}>Mission</span>
              <p className={vmcStyles.colText}>
                To exceed client expectations by delivering security that
                combines trained people, clear processes and proven technology
                &mdash; with full accountability at every level.
              </p>
            </div>

            <div className={vmcStyles.col} data-anim-item>
              <span className={vmcStyles.colNum} aria-hidden="true">03</span>
              <span className={vmcStyles.colLabel}>Our Commitment</span>
              <p className={vmcStyles.colText}>
                Personalised service. Fast response. Quality delivery. Value
                for every shilling spent. Every client feels like our most
                valued partner.
              </p>
            </div>

          </div>

          <div className={vmcStyles.ctaRow}>
            <span className={vmcStyles.ctaNote}>
              See how we work &mdash; Book a Security Audit
            </span>
            <a href="/audit" className={vmcStyles.cta}>
              Book a Security Audit
            </a>
          </div>

        </div>
      </section>
    </>
  )
}
