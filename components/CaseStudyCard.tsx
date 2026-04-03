'use client';

import { useState } from 'react';

interface CaseStudyCardProps {
  client: string;
  tag: string;
  result: string;
  href: string;
}

export default function CaseStudyCard({ client, tag, result, href }: CaseStudyCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      style={{
        display: 'block',
        background: '#ffffff',
        border: `1px solid ${hovered ? 'var(--green)' : 'var(--border)'}`,
        padding: '36px',
        textDecoration: 'none',
        transition: 'border-color 0.2s',
        position: 'relative',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p style={{ fontSize: '11px', fontWeight: 500, color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '12px', fontFamily: 'var(--font-geist, sans-serif)' }}>{tag}</p>
      <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--text)', fontFamily: 'var(--font-geist, sans-serif)', marginBottom: '12px', lineHeight: 1.3 }}>{client}</h3>
      <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.7', fontFamily: 'var(--font-geist, sans-serif)' }}>{result}</p>
    </a>
  );
}
