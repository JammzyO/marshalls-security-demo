'use client'

import { useState, useEffect, useRef } from 'react'
import styles from './services-cards.module.css'

type Service = {
  num: string
  title: string
  body: string
  href?: string
  expanded?: string
}

const SERVICES: Service[] = [
  {
    num: '01',
    title: 'Guarding Services',
    body: 'Trained unarmed and armed guards deployed with clear SOPs, post orders and supervisor checks. Access control, reception, retail security and 24/7 response.',
    href: '/guards',
  },
  {
    num: '02',
    title: 'Canine Services',
    body: 'German Shepherds, Rottweilers and trained crossbreeds handled by qualified dog handlers. Specialized in tracking, patrol, attack response and perimeter security.',
    expanded: `Our dogs consist mainly of German Shepherds, Rottweilers and crossbreeds — carefully selected for strength, intelligence and temperament. All handlers are trained and qualified to the highest standards of care, obedience and health.\n\nSpecialized capabilities: tracking, sniffing, attack response and perimeter patrol.`,
  },
  {
    num: '03',
    title: 'Integrated Security',
    body: 'Full-spectrum security systems — intruder alarms, CCTV, access control, fire detection, perimeter security, panic systems and vehicle search mirrors.',
    expanded: `Our integrated systems include:\n— Intruder Alarm Systems\n— CCTV Surveillance Systems\n— Access Control Systems\n— Fire Detection Systems\n— Perimeter Security\n— Remote Panic Systems\n— Vehicle Search Mirrors\n— Detection and Sensor Systems`,
  },
  {
    num: '04',
    title: 'Alarm Systems & Installation',
    body: 'Design, supply and installation of intruder alarm systems, radio alarms and electronic detection systems for residential and commercial properties.',
    expanded: `We design, supply and install a wide range of electronic alarm systems including intruder alarms and radio alarm systems. All solutions are built for reliable protection, rapid response and long-term peace of mind for residential and commercial properties.`,
  },
  {
    num: '05',
    title: 'Security Consultancy',
    body: 'Risk assessment, strategy development and security framework review. We identify vulnerabilities and build a practical plan to close them — involving you at every stage.',
    expanded: `Our consultancy covers risk assessment, strategy development and full security framework review. We identify vulnerabilities and build a practical implementation plan — involving you at every stage from assessment through to review.`,
  },
  {
    num: '06',
    title: 'Technology & GPS',
    body: 'CCTV surveillance, electric fence installation, access control systems, GPS fleet tracking and remote monitoring — installed and maintained.',
    href: '/technology',
  },
]

const STEP_VH = 70

function ServiceCard({
  svc,
  cardStyle,
}: {
  svc: Service
  cardStyle: React.CSSProperties
}) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`${styles.card} ${open ? styles.cardOpen : ''}`}
      style={cardStyle}
    >
      <span className={styles.cardAccent} aria-hidden="true" />
      <span className={styles.cardNum} aria-hidden="true">{svc.num}</span>
      <h2 className={styles.cardTitle}>{svc.title}</h2>
      <p className={styles.cardBody}>{svc.body}</p>

      <div className={styles.cardCta}>
        {svc.href ? (
          <a href={svc.href} className={styles.cardLink}>
            Learn More <span className={styles.arrow}>→</span>
          </a>
        ) : (
          <button
            className={styles.revealBtn}
            onClick={() => setOpen(o => !o)}
            aria-expanded={open}
          >
            {open ? 'Close ↑' : 'Explore ↓'}
          </button>
        )}
      </div>

      {svc.expanded && (
        <div className={styles.revealPanel}>
          <p className={styles.revealText}>{svc.expanded}</p>
          <button
            className={styles.revealClose}
            onClick={() => setOpen(false)}
            aria-label="Close details"
          >
            Close ↑
          </button>
        </div>
      )}
    </div>
  )
}

export default function ServicesCards() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [scrollT, setScrollT] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const scrollable = sectionRef.current.offsetHeight - window.innerHeight
      const scrolled = Math.max(0, -rect.top)
      const t = (scrolled / (scrollable || 1)) * (SERVICES.length - 1)
      setScrollT(Math.min(t, SERVICES.length - 1))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const activeIndex = Math.min(Math.floor(scrollT), SERVICES.length - 1)

  function getCardStyle(i: number): React.CSSProperties {
    const t = scrollT - i

    if (t > 1) {
      return {
        transform: 'translateY(-115%) scale(0.94)',
        opacity: 0,
        zIndex: SERVICES.length - i,
        pointerEvents: 'none',
      }
    }

    if (t >= 0) {
      const EXIT_START = 0.35
      const exitP = Math.max(0, (t - EXIT_START) / (1 - EXIT_START))
      const ease = 1 - Math.pow(1 - exitP, 2.5)
      return {
        transform: `translateY(${-ease * 118}%) scale(${1 - ease * 0.05})`,
        opacity: 1 - Math.min(ease * 1.8, 1),
        zIndex: SERVICES.length - i,
        pointerEvents: t < EXIT_START ? 'auto' : 'none',
      }
    }

    const behind = -t
    if (behind > 3.2) {
      return {
        transform: 'translateY(76px) scale(0.875)',
        opacity: 0.06,
        zIndex: SERVICES.length - i,
        pointerEvents: 'none',
      }
    }

    const b = Math.min(behind, 3)
    return {
      transform: `translateY(${b * 26}px) scale(${1 - b * 0.025})`,
      opacity: Math.max(1 - b * 0.22, 0.08),
      zIndex: SERVICES.length - i,
      pointerEvents: behind < 0.08 ? 'auto' : 'none',
    }
  }

  const sectionHeight = `calc(${(SERVICES.length - 1) * STEP_VH}vh + 100vh)`

  return (
    <div
      ref={sectionRef}
      className={styles.scrollSection}
      style={{ height: sectionHeight }}
    >
      <div className={styles.stage}>

        <div className={styles.counter} aria-live="polite" aria-atomic="true">
          <span className={styles.counterCurrent}>
            {String(activeIndex + 1).padStart(2, '0')}
          </span>
          <span className={styles.counterSep}>/</span>
          <span className={styles.counterTotal}>
            {String(SERVICES.length).padStart(2, '0')}
          </span>
        </div>

        <div className={styles.track}>
          {SERVICES.map((svc, i) => (
            <ServiceCard
              key={svc.num}
              svc={svc}
              cardStyle={getCardStyle(i)}
            />
          ))}
        </div>

        <div className={styles.dots} aria-hidden="true">
          {SERVICES.map((_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ''}`}
            />
          ))}
        </div>

        <div
          className={styles.scrollHint}
          style={{ opacity: activeIndex === 0 ? 1 : 0 }}
          aria-hidden="true"
        >
          <span className={styles.scrollHintText}>Scroll to explore</span>
          <span className={styles.scrollHintLine} />
        </div>

      </div>
    </div>
  )
}
