'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  return (
    <div style={{
      background: '#111',
      border: '1px solid #222',
      padding: '32px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      transition: 'border-color 0.2s',
    }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = '#ff1198')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = '#222')}>
      <div style={{ color: '#ff1198', width: '40px', height: '40px' }}>
        {icon}
      </div>
      <h3 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        {title}
      </h3>
      <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '14px', lineHeight: '1.7', flex: 1 }}>
        {description}
      </p>
      <Link href={href}
        style={{ color: '#ff1198', fontFamily: 'Raleway, sans-serif', fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '6px' }}
        onMouseEnter={e => (e.currentTarget.style.color = '#ff8fce')}
        onMouseLeave={e => (e.currentTarget.style.color = '#ff1198')}>
        Learn More
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
