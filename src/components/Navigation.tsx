'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './Navigation.module.css'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContent}>
        <Link href="/" className={styles.logo}>
          Mutech Business
        </Link>
        <div className={styles.navLinks}>
          <Link href="/">Inicio</Link>
          <Link href="/kickstarter-package">Paquete Starter</Link>
          <Link href="/apply">Solicitar</Link>
        </div>
      </div>
    </nav>
  )
}
