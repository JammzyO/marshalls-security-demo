'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import navStyles from './nav.module.css'

export default function Nav() {
  const path = usePathname()

  /* ─── Guards page nav ─── */
  if (path === '/guards') {
    return (
      <nav className={navStyles.nav} aria-label="Main navigation">
        <div className={navStyles.inner}>
          <a href="/" className={navStyles.logo} aria-label="Marshalls Security Group home">
            <Image src="/logo.png" alt="Marshalls Security Group" width={48} height={48} className={navStyles.logoImg} priority />
          </a>
          <ul className={navStyles.links} role="list">
            <li><a href="#whats-included">What&rsquo;s Included</a></li>
            <li><a href="/technology">Technology</a></li>
          </ul>
          <div className={navStyles.ctaWrap}>
            <a href="#audit" className={navStyles.cta}>Book a Security Audit Call</a>
          </div>
        </div>
      </nav>
    )
  }

  /* ─── Technology page nav ─── */
  if (path === '/technology') {
    return (
      <nav className={navStyles.nav} aria-label="Main navigation">
        <div className={navStyles.inner}>
          <a href="/" className={navStyles.logo} aria-label="Marshalls Security Group home">
            <Image src="/logo.png" alt="Marshalls Security Group" width={48} height={48} className={navStyles.logoImg} priority />
          </a>
          <ul className={navStyles.links} role="list">
            <li><a href="#systems">What We Install</a></li>
            <li><a href="/guards">Guard Services</a></li>
          </ul>
          <div className={navStyles.ctaWrap}>
            <a href="#cta-strip" className={navStyles.cta}>Request a Site Survey</a>
          </div>
        </div>
      </nav>
    )
  }

  /* ─── Default nav ─── */
  return (
    <nav className={navStyles.nav} aria-label="Main navigation">
      <div className={navStyles.inner}>
        <a href="/" className={navStyles.logo} aria-label="Marshalls Security Group home">
          <Image src="/logo.png" alt="Marshalls Security Group" width={48} height={48} className={navStyles.logoImg} priority />
        </a>
        <ul className={navStyles.links} role="list">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/guards">Guard Services</a></li>
          <li><a href="/technology">Technology</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <div className={navStyles.ctaWrap}>
          <a href="/audit" className={navStyles.cta}>Book an Audit</a>
        </div>
      </div>
    </nav>
  )
}
