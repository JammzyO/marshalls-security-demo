'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './hero.module.css'

// Only the first line cycles — Control. and Peace of Mind. are static
const CYCLING = [
  'Loss Prevention.',
  'Threat Reduction.',
  'Asset Protection.',
  'Risk Management.',
]

const spring = { type: 'spring' as const, stiffness: 52, damping: 14 }

export default function HeroHeadline() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(
      () => setIdx(i => (i + 1) % CYCLING.length),
      2800
    )
    return () => clearInterval(t)
  }, [])

  return (
    <h1 className={styles.headline} aria-live="polite" aria-atomic="true">

      <span className={styles.cycleWrap}>
        <AnimatePresence mode="wait">
          <motion.span
            key={CYCLING[idx]}
            className={styles.cycleWord}
            initial={{ y: '105%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            exit={{ y: '-105%', opacity: 0 }}
            transition={spring}
          >
            {CYCLING[idx]}
          </motion.span>
        </AnimatePresence>
      </span>

    </h1>
  )
}
