import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import Image from 'next/image'
import './globals.css'
import footerStyles from './footer.module.css'
import AnimationsInit from './AnimationsInit'
import Nav from './Nav'

/* ─── Fonts ─── */
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display-loaded',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body-loaded',
  display: 'swap',
})

/* ─── Metadata ─── */
export const metadata: Metadata = {
  title: 'Marshalls Security Group Ltd',
  description: 'Premium security services in Kenya.',
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className={footerStyles.footer}>

      {/* ── Three-column body ── */}
      <div className={footerStyles.body}>

        {/* Left — Brand */}
        <div className={footerStyles.brandCol}>
          <a href="/" className={footerStyles.logoWrap} aria-label="Marshalls Security Group home">
            <Image
              src="/logo.png"
              alt="Marshalls Security Group"
              width={52}
              height={52}
              className={footerStyles.logoImg}
            />
          </a>
          <p className={footerStyles.tagline}>
            Loss Prevention. Control. Peace of Mind.
          </p>
          <p className={footerStyles.registered}>Registered in Kenya</p>
        </div>

        {/* Centre — Quick Links */}
        <div>
          <span className={footerStyles.colLabel}>Quick Links</span>
          <ul className={footerStyles.linkList} role="list">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/guards">Guard Services</a></li>
            <li><a href="/technology">Technology</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Right — Contact */}
        <div className={footerStyles.contactCol}>
          <span className={footerStyles.colLabel}>Contact &amp; Response</span>
          <p className={footerStyles.contactItem}>
            <a href="mailto:info@marshallssecurity.co.ke">
              info@marshallssecurity.co.ke
            </a>
          </p>
          <p className={footerStyles.contactItem}>
            0739 060 606 / 0719 705 748
          </p>
          <a
            href="https://wa.me/254739060606?text=Hi%2C%20I%27d%20like%20to%20find%20out%20more%20about%20Marshalls%20Security%20Group."
            className={footerStyles.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Us Now
          </a>
          <p className={footerStyles.responseNote}>We respond within 5 hours</p>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div className={footerStyles.bottomBar}>
        <div className={footerStyles.bottomInner}>
          <p className={footerStyles.copy}>
            &copy; {new Date().getFullYear()} Marshalls Security Group Ltd. All rights reserved.
          </p>
          <p className={footerStyles.copy}>Nairobi, Kenya — Serving All of Kenya</p>
        </div>
      </div>

    </footer>
  )
}

/* ─── Root Layout ─── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable}`}
    >
      <body>
        <AnimationsInit />
        <Nav />
        <main style={{ paddingTop: 'var(--nav-height)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
