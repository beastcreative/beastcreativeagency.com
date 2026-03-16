'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#0c0c0c', borderTop: '1px solid #1a1a1a', paddingTop: '60px' }}>
      <div className="container">
        {/* Top row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '40px', paddingBottom: '48px' }}>
          {/* Brand col */}
          <div style={{ gridColumn: 'span 1' }}>
            <Image src="/images/beast-logo-green.svg" alt="Beast Creative Agency" width={120} height={60} style={{ marginBottom: '16px' }} />
            <p style={{ color: '#aaa', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>
              Beast Creative Agency is a full-service digital marketing agency in San Antonio, TX. We help brands crush the competition with creativity, data, and strategy.
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                style={{ color: '#aaa', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', border: '1px solid #333', borderRadius: '4px' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#ff1198'; (e.currentTarget as HTMLElement).style.borderColor = '#ff1198'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#aaa'; (e.currentTarget as HTMLElement).style.borderColor = '#333'; }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                style={{ color: '#aaa', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', border: '1px solid #333', borderRadius: '4px' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#ff1198'; (e.currentTarget as HTMLElement).style.borderColor = '#ff1198'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#aaa'; (e.currentTarget as HTMLElement).style.borderColor = '#333'; }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                style={{ color: '#aaa', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', border: '1px solid #333', borderRadius: '4px' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#ff1198'; (e.currentTarget as HTMLElement).style.borderColor = '#ff1198'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#aaa'; (e.currentTarget as HTMLElement).style.borderColor = '#333'; }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok"
                style={{ color: '#aaa', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', border: '1px solid #333', borderRadius: '4px' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#ff1198'; (e.currentTarget as HTMLElement).style.borderColor = '#ff1198'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#aaa'; (e.currentTarget as HTMLElement).style.borderColor = '#333'; }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.77a4.85 4.85 0 0 1-1.01-.08z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: '#ff1198', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>Services</h4>
            {[
              { name: 'Branding', href: '/services/branding' },
              { name: 'SEO', href: '/services/seo' },
              { name: 'Web Design', href: '/services/web-design' },
              { name: 'Social Media Marketing', href: '/services/social-media' },
              { name: 'Graphic Design', href: '/services/graphic-design' },
              { name: 'Logo Design', href: '/services/logo-design' },
            ].map(s => (
              <Link key={s.href} href={s.href}
                style={{ display: 'block', color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '14px', marginBottom: '10px' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#ff1198')}
                onMouseLeave={e => (e.currentTarget.style.color = '#aaa')}>
                {s.name}
              </Link>
            ))}
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#ff1198', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>Quick Links</h4>
            {[
              { name: 'Home', href: '/' },
              { name: 'About', href: '/about' },
              { name: 'Blog', href: '/blog' },
              { name: 'Why Choose Beast?', href: '/why-beast' },
              { name: 'Contact', href: '/contact' },
            ].map(l => (
              <Link key={l.href} href={l.href}
                style={{ display: 'block', color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '14px', marginBottom: '10px' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#ff1198')}
                onMouseLeave={e => (e.currentTarget.style.color = '#aaa')}>
                {l.name}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#ff1198', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>Contact</h4>
            <p style={{ color: '#aaa', fontSize: '14px', lineHeight: '1.7', marginBottom: '10px' }}>
              122 Lewis St<br />
              San Antonio, TX 78212
            </p>
            <a href="tel:+12103334141" style={{ display: 'block', color: '#aaa', fontSize: '14px', marginBottom: '10px' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#ff1198')}
              onMouseLeave={e => (e.currentTarget.style.color = '#aaa')}>
              (210) 333-4141
            </a>
            <a href="mailto:info@beastcreativeagency.com" style={{ display: 'block', color: '#aaa', fontSize: '14px' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#ff1198')}
              onMouseLeave={e => (e.currentTarget.style.color = '#aaa')}>
              info@beastcreativeagency.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid #1a1a1a', padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <p style={{ color: '#666', fontSize: '13px', fontFamily: 'Raleway, sans-serif' }}>
            &copy; {new Date().getFullYear()} Beast Creative Agency. All rights reserved.
          </p>
          <p style={{ color: '#666', fontSize: '13px', fontFamily: 'Raleway, sans-serif' }}>
            San Antonio Digital Marketing Agency
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
