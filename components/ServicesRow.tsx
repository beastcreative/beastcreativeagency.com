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
            borderBottom: '1px solid #1e1e1e',
            background: hoveredIndex === i ? '#ff1198' : 'transparent',
            transition: 'background 0.2s ease',
            cursor: 'default',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-geist, Geist, sans-serif)',
              fontSize: '13px',
              fontWeight: 400,
              color: hoveredIndex === i ? 'rgba(0,0,0,0.5)' : '#4d4d4d',
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
              color: hoveredIndex === i ? '#000000' : '#ffffff',
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
