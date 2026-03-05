'use client'

import styles from './contact.module.css'

export default function ContactPage() {
  return (
    <>
      {/* ─── Section 1: Hero ─── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>

          <div className={styles.eyebrow} aria-hidden="true">
            <span className={styles.eyebrowLine} />
            <span className={styles.eyebrowText}>Contact</span>
          </div>

          <h1 className={styles.headline}>Get in Touch.</h1>

          <p className={styles.subtext}>
            We respond within 5 hours. Operations run 24/7.
          </p>

        </div>
      </section>

      {/* ─── Section 2: Details + Form ─── */}
      <section className={styles.details}>
        <div className={styles.detailsInner}>

          {/* Left: contact info */}
          <div className={styles.left}>

            <div className={styles.block}>
              <span className={styles.blockLabel}>Contact &amp; Response</span>
              <span className={styles.contactLine}>info@marshallssecurity.co.ke</span>
              <span className={styles.contactLine}>0739 060 606 / 0719 705 748</span>
              <a
                href="https://wa.me/254739060606"
                className={styles.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us Now
              </a>
            </div>

            <div className={styles.block}>
              <span className={styles.blockLabel}>Opening Hours</span>
              <span className={styles.contactLine}>Monday – Friday: 8:00am – 5:00pm</span>
              <span className={styles.contactLine}>Operations: 24/7</span>
            </div>

            <div className={styles.block}>
              <span className={styles.blockLabel}>Our Location</span>
              <span className={styles.contactLine}>Unit 323, Lunga Lunga Square</span>
              <span className={styles.contactLine}>Lunga Lunga Road, Nairobi, Kenya</span>
            </div>

          </div>

          {/* Right: contact form */}
          <div className={styles.formPanel}>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()} noValidate>

              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="full-name">Full Name</label>
                <input
                  className={styles.input}
                  id="full-name"
                  name="full_name"
                  type="text"
                  placeholder="Your full name"
                  autoComplete="name"
                />
              </div>

              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="email">Email Address</label>
                <input
                  className={styles.input}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  autoComplete="email"
                />
              </div>

              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="message">Message</label>
                <textarea
                  className={styles.textarea}
                  id="message"
                  name="message"
                  placeholder="Your message (optional)"
                />
              </div>

              <button type="submit" className={styles.submit}>
                Send Message
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* ─── Section 3: Map ─── */}
      <div className={styles.mapSection}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8176!2d36.8219!3d-1.2833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d664c4a5a5%3A0x1f4e5e5c6f4e5e5c!2sLunga%20Lunga%20Rd%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1709000000000"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Marshalls Security Group — Lunga Lunga Road, Nairobi"
        />
      </div>
    </>
  )
}
