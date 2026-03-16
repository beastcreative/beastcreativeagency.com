'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  { name: 'Branding', href: '/services/branding' },
  { name: 'CPG Marketing', href: '/services/cpg-marketing' },
  { name: 'Graphic Design', href: '/services/graphic-design' },
  { name: 'Logo Design', href: '/services/logo-design' },
  { name: 'SEO', href: '/services/seo' },
  { name: 'Social Media Marketing', href: '/services/social-media' },
  { name: 'Web Design and Development', href: '/services/web-design' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header style={{ background: '#0c0c0c', position: 'sticky', top: 0, zIndex: 100, borderBottom: '1px solid #1a1a1a' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px' }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src="/images/beast-logo-pink.png"
            alt="Beast Creative Agency"
            width={200}
            height={41}
            priority
            style={{ height: '41px', width: 'auto' }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="desktop-nav">
          <Link href="/" style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#ff1198')}
            onMouseLeave={e => (e.currentTarget.style.color = '#fff')}>
            Home
          </Link>

          {/* Services Dropdown */}
          <div style={{ position: 'relative' }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '4px' }}>
              Marketing Services
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {servicesOpen && (
              <div style={{ position: 'absolute', top: '100%', left: 0, background: '#111', border: '1px solid #333', minWidth: '240px', padding: '8px 0', zIndex: 200 }}>
                {services.map(s => (
                  <Link key={s.href} href={s.href}
                    style={{ display: 'block', padding: '10px 20px', color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 500, fontSize: '13px', textTransform: 'uppercase' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#ff1198'; e.currentTarget.style.background = '#1a1a1a'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'transparent'; }}>
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#ff1198')}
            onMouseLeave={e => (e.currentTarget.style.color = '#fff')}>
            About
          </Link>
          <Link href="/blog" style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#ff1198')}
            onMouseLeave={e => (e.currentTarget.style.color = '#fff')}>
            Blog
          </Link>
          <Link href="/why-beast" style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#ff1198')}
            onMouseLeave={e => (e.currentTarget.style.color = '#fff')}>
            Why Choose Beast Creative Agency?
          </Link>
          <Link href="/contact"
            style={{ background: '#ff1198', color: '#fff', padding: '10px 20px', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#d4007d')}
            onMouseLeave={e => (e.currentTarget.style.background = '#ff1198')}>
            Prefer Text?
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: '#fff' }}
          className="mobile-menu-btn"
          aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div style={{ background: '#111', padding: '20px', borderTop: '1px solid #333' }} className="mobile-nav">
          {[
            { name: 'Home', href: '/' },
            { name: 'About', href: '/about' },
            { name: 'Services', href: '/services' },
            { name: 'Blog', href: '/blog' },
            { name: 'Why Choose Beast?', href: '/why-beast' },
            { name: 'Contact', href: '/contact' },
          ].map(link => (
            <Link key={link.href} href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{ display: 'block', padding: '12px 0', color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 600, fontSize: '14px', textTransform: 'uppercase', borderBottom: '1px solid #222' }}>
              {link.name}
            </Link>
          ))}
          {services.map(s => (
            <Link key={s.href} href={s.href}
              onClick={() => setMobileOpen(false)}
              style={{ display: 'block', padding: '10px 0 10px 16px', color: '#aaa', fontFamily: 'Raleway, sans-serif', fontWeight: 500, fontSize: '13px', textTransform: 'uppercase', borderBottom: '1px solid #222' }}>
              {s.name}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
