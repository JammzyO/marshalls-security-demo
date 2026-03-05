'use client'

import { useEffect } from 'react'

export default function AnimationsInit() {
  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const THRESHOLD = 0.15

    // ── 1. Fade-up headings + slide left/right columns ──────────────────
    const singleObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('anim-in')
            singleObs.unobserve(entry.target)
          }
        })
      },
      { threshold: THRESHOLD }
    )

    document
      .querySelectorAll('[data-anim="fade-up"], [data-anim="slide-left"], [data-anim="slide-right"]')
      .forEach((el) => singleObs.observe(el))

    // ── 2. Stagger groups ────────────────────────────────────────────────
    const staggerObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('[data-anim-item]')
            items.forEach((item, i) => {
              ;(item as HTMLElement).style.transitionDelay = `${i * 100}ms`
              item.classList.add('anim-in')
            })
            staggerObs.unobserve(entry.target)
          }
        })
      },
      { threshold: THRESHOLD }
    )

    document
      .querySelectorAll('[data-anim-group]')
      .forEach((el) => staggerObs.observe(el))

    // ── 3. Stats counter ─────────────────────────────────────────────────
    const counterObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          const target = parseInt(el.dataset.count ?? '0', 10)
          const suffix = el.dataset.countSuffix ?? ''
          const duration = 1500
          const start = performance.now()

          const tick = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            el.textContent = Math.round(eased * target) + suffix
            if (progress < 1) requestAnimationFrame(tick)
          }

          requestAnimationFrame(tick)
          counterObs.unobserve(el)
        })
      },
      { threshold: 0.5 }
    )

    document
      .querySelectorAll('[data-count]')
      .forEach((el) => counterObs.observe(el))

    return () => {
      singleObs.disconnect()
      staggerObs.disconnect()
      counterObs.disconnect()
    }
  }, [])

  return null
}
