'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './Navigation.module.css'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.navContent}>
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            Mutech Business
          </Link>
          <div className={styles.navLinks}>
            <Link href="/">Inicio</Link>
            <Link href="/kickstarter-package">Paquete Starter</Link>
            <Link href="/lo-esencial-para-tu-negocio">Lo esencial</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/apply">Solicitar</Link>
          </div>
          <button
            className={styles.hamburger}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={isMenuOpen ? styles.open : ''}></span>
            <span className={isMenuOpen ? styles.open : ''}></span>
            <span className={isMenuOpen ? styles.open : ''}></span>
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu Overlay */}
      <div
        className={`${styles.mobileOverlay} ${isMenuOpen ? styles.open : ''}`}
        onClick={closeMenu}
      ></div>
      
      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
        <button
          className={styles.closeButton}
          onClick={closeMenu}
          aria-label="Close menu"
        >
          ✕
        </button>
        <div className={styles.mobileMenuContent}>
          <Link href="/" onClick={closeMenu}>Inicio</Link>
          <Link href="/kickstarter-package" onClick={closeMenu}>Paquete Starter</Link>
          <Link href="/lo-esencial-para-tu-negocio" onClick={closeMenu}>Lo esencial</Link>
          <Link href="/blog" onClick={closeMenu}>Blog</Link>
          <Link href="/apply" onClick={closeMenu}>Solicitar</Link>
        </div>
      </div>
    </>
  )
}
