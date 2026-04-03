'use client';

import { useState } from 'react';
import Link from 'next/link';

interface ServiceItem {
  num: string;
  label: string;
  href?: string;
}

const defaultServices: ServiceItem[] = [
  { num: '01', label: 'Branding & Identity' },
  { num: '02', label: 'CPG Marketing' },
  { num: '03', label: 'Web Design & Development' },
  { num: '04', label: 'Search Engine Optimization' },
  { num: '05', label: 'Social Media Marketing' },
  { num: '06', label: 'AI-Powered Strategy' },
  { num: '07', label: 'Paid Advertising' },
];

export default function ServicesRow({ services }: { services?: ServiceItem[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const list = services ?? defaultServices;

  return (
    <div>
      {list.map((svc, i) => {
        const rowContent = (
          <>
            <span
              style={{
                fontFamily: 'var(--font-geist, Geist, sans-serif)',
                fontSize: '13px',
                fontWeight: 400,
                color: hoveredIndex === i ? 'rgba(255,255,255,0.5)' : '#888888',
                minWidth: '28px',
                transition: 'color 0.2s ease',
              }}
            >
              {svc.num}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-geist, Geist, sans-serif)',
                fontSize: 'clamp(28px, 3.5vw, 40px)',
                fontWeight: 500,
                color: hoveredIndex === i ? '#ffffff' : '#0a0a0a',
                letterSpacing: '-0.01em',
                transition: 'color 0.2s ease',
                lineHeight: 1.1,
              }}
            >
              {svc.label}
            </span>
          </>
        );

        const sharedStyle = {
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          padding: '20px 32px',
          borderBottom: '1px solid #e5e5e5',
          background: hoveredIndex === i ? '#0a0a0a' : 'transparent',
          transition: 'background 0.2s ease',
          cursor: svc.href ? 'pointer' : 'default',
          textDecoration: 'none',
        };

        if (svc.href) {
          return (
            <Link
              key={svc.num}
              href={svc.href}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={sharedStyle}
            >
              {rowContent}
            </Link>
          );
        }

        return (
          <div
            key={svc.num}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={sharedStyle}
          >
            {rowContent}
          </div>
        );
      })}
    </div>
  );
}
