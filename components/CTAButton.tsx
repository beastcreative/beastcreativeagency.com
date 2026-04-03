'use client';

import Link from 'next/link';

interface CTAButtonProps {
  href: string;
  children?: React.ReactNode;
  text?: string;
  style?: React.CSSProperties;
}

export default function CTAButton({ href, children, text, style }: CTAButtonProps) {
  return (
    <Link href={href}
      style={{
        display: 'inline-block',
        background: 'var(--pink)',
        color: 'var(--dark-text)',
        padding: '14px 32px',
        fontFamily: 'Raleway, sans-serif',
        fontWeight: 700,
        fontSize: '14px',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        borderRadius: 0,
        border: 'none',
        cursor: 'pointer',
        transition: 'background 0.2s',
        textDecoration: 'none',
        ...style,
      }}
      onMouseEnter={e => (e.currentTarget.style.background = 'var(--pink-hover)')}
      onMouseLeave={e => (e.currentTarget.style.background = 'var(--pink)')}>
      {children ?? text}
    </Link>
  );
}
