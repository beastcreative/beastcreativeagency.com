'use client';

import Link from 'next/link';

export default function HomeFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: '#0a0a0a',
        borderTop: '1px solid #1e1e1e',
        padding: '60px 0 0',
      }}
    >
      <div className="container">
        {/* Main footer row */}
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            gap: '40px',
            alignItems: 'start',
            paddingBottom: '48px',
          }}
        >
          {/* Left: Logo */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-geist, Geist, sans-serif)',
                fontWeight: 700,
                fontSize: '24px',
                letterSpacing: '-0.02em',
                color: '#ffffff',
              }}
            >
              Beast<span style={{ color: '#00f763' }}>&#174;</span>
            </span>
            <p
              style={{
                color: '#4d4d4d',
                fontFamily: 'var(--font-geist, Geist, sans-serif)',
                fontSize: '14px',
                lineHeight: '1.7',
                marginTop: '12px',
                maxWidth: '260px',
              }}
            >
              San Antonio&apos;s AI-native creative agency.
            </p>
          </div>

          {/* Center: Nav links */}
          <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            {[
              { label: 'Work', href: '/#work' },
              { label: 'Services', href: '/services' },
              { label: 'About', href: '/about' },
              { label: 'Blog', href: '/blog' },
              { label: 'Contact', href: '/contact' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  color: '#757575',
                  fontFamily: 'var(--font-geist, Geist, sans-serif)',
                  fontSize: '13px',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#757575')}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right: Location + email */}
          <div style={{ textAlign: 'right' }}>
            <p
              style={{
                color: '#757575',
                fontFamily: 'var(--font-geist, Geist, sans-serif)',
                fontSize: '14px',
                lineHeight: '1.7',
                marginBottom: '8px',
              }}
            >
              San Antonio, TX
            </p>
            <a
              href="mailto:info@beastcreativeagency.com"
              style={{
                color: '#757575',
                fontFamily: 'var(--font-geist, Geist, sans-serif)',
                fontSize: '14px',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#757575')}
            >
              info@beastcreativeagency.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid #1e1e1e',
            padding: '20px 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '10px',
          }}
        >
          <p
            style={{
              color: '#4d4d4d',
              fontFamily: 'var(--font-geist, Geist, sans-serif)',
              fontSize: '13px',
            }}
          >
            &copy; {year} Beast Creative Agency. All rights reserved.
          </p>
          <p
            style={{
              color: '#4d4d4d',
              fontFamily: 'var(--font-geist, Geist, sans-serif)',
              fontSize: '13px',
            }}
          >
            Made by Beast&#174;
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            text-align: left;
          }
          .footer-grid > div:last-child {
            text-align: left !important;
          }
          .footer-grid nav {
            flex-wrap: wrap;
            gap: 16px !important;
          }
        }
      `}</style>
    </footer>
  );
}
