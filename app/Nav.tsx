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
          <a href="https://marshallssecurity.co.ke/" className={navStyles.logo} aria-label="Marshalls Security Group home">
            <Image src="/logo.png" alt="Marshalls Security Group" width={48} height={48} className={navStyles.logoImg} priority />
          </a>
          <ul className={navStyles.links} role="list">
            <li><a href="#whats-included">What&rsquo;s Included</a></li>
            <li><a href="/technology">Technology</a></li>
          </ul>
          <div className={navStyles.ctaWrap}>
            <a href="https://wa.me/254739060606?text=Hi%2C%20I%27ve%20just%20submitted%20an%20audit%20request%20on%20the%20Marshalls%20Security%20website%20and%20I%27d%20like%20to%20schedule%20a%20call." className={navStyles.cta} target="_blank" rel="noopener noreferrer">Book a Security Audit Call</a>
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
          <a href="https://marshallssecurity.co.ke/" className={navStyles.logo} aria-label="Marshalls Security Group home">
            <Image src="/logo.png" alt="Marshalls Security Group" width={48} height={48} className={navStyles.logoImg} priority />
          </a>
          <ul className={navStyles.links} role="list">
            <li><a href="#systems">What We Install</a></li>
            <li><a href="/guards">Guard Services</a></li>
          </ul>
          <div className={navStyles.ctaWrap}>
            <a href="#site-survey" className={navStyles.cta}>Request a Site Survey</a>
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
          <a href={path === '/' ? '#book-audit' : path === '/services' ? '#contact-form' : '/#book-audit'} className={navStyles.cta}>Book an Audit</a>
        </div>
      </div>
    </nav>
  )
}
