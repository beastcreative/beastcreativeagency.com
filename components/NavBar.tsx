'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '/#work' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(255,255,255,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #e5e5e5' : '1px solid transparent',
        transition: 'background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
      }}
    >
      <div
        className="container"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 20px' }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span
            style={{
              fontFamily: 'var(--font-geist, Geist, sans-serif)',
              fontWeight: 700,
              fontSize: '22px',
              letterSpacing: '-0.02em',
              color: '#0a0a0a',
            }}
          >
            Beast
            <span style={{ color: '#00f763' }}>&#174;</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar-desktop" style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
              style={{
                color: '#0a0a0a',
                fontFamily: 'var(--font-geist, Geist, sans-serif)',
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '0.02em',
                textDecoration: 'none',
                position: 'relative',
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="navbar-mobile-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: '#0a0a0a', padding: '4px' }}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen
              ? <path d="M6 18L18 6M6 6l12 12" />
              : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div style={{ background: 'rgba(255,255,255,0.98)', borderTop: '1px solid #e5e5e5', padding: '20px' }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block',
                padding: '14px 0',
                color: '#0a0a0a',
                fontFamily: 'var(--font-geist, Geist, sans-serif)',
                fontSize: '16px',
                fontWeight: 500,
                textDecoration: 'none',
                borderBottom: '1px solid #e5e5e5',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 2px;
          background: #ff1198;
          transition: width 0.2s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .nav-link:hover {
          color: #0a0a0a !important;
        }
        @media (max-width: 768px) {
          .navbar-desktop { display: none !important; }
          .navbar-mobile-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
