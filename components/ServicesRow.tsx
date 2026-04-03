'use client';

import { useState } from 'react';

const services = [
  { num: '01', label: 'Branding & Identity' },
  { num: '02', label: 'CPG Marketing' },
  { num: '03', label: 'Web Design & Development' },
  { num: '04', label: 'Search Engine Optimization' },
  { num: '05', label: 'Social Media Marketing' },
  { num: '06', label: 'AI-Powered Strategy' },
  { num: '07', label: 'Paid Advertising' },
];

export default function ServicesRow() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div>
      {services.map((svc, i) => (
        <div
          key={svc.num}
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            padding: '20px 32px',
            borderBottom: '1px solid #e5e5e5',
            background: hoveredIndex === i ? '#0a0a0a' : 'transparent',
            transition: 'background 0.2s ease',
            cursor: 'default',
          }}
        >
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
        </div>
      ))}
    </div>
  );
}
