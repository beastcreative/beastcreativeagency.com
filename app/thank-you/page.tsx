import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You | Beast Creative Agency',
  description: 'Thank you for contacting Beast Creative Agency. We will be in touch shortly.',
  robots: { index: false },
};

export default function ThankYouPage() {
  return (
    <section
      style={{
        background: '#0c0c0c',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 24px',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '600px' }}>
        <span
          style={{
            color: '#ff1198',
            fontFamily: 'Raleway, sans-serif',
            fontWeight: 700,
            fontSize: '13px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            display: 'block',
            marginBottom: '16px',
          }}
        >
          Message Received
        </span>
        <h1
          style={{
            color: '#fff',
            fontFamily: 'Raleway, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(32px, 5vw, 56px)',
            textTransform: 'uppercase',
            lineHeight: 1.1,
            marginBottom: '24px',
          }}
        >
          Thank You!
        </h1>
        <p
          style={{
            color: '#aaa',
            fontFamily: 'Raleway, sans-serif',
            fontSize: '18px',
            lineHeight: '1.7',
            marginBottom: '40px',
          }}
        >
          We will be in touch shortly. Our team reviews every inquiry and will reach out within one business day.
        </p>
        <Link
          href="/"
          style={{
            display: 'inline-block',
            background: '#ff1198',
            color: '#fff',
            padding: '14px 36px',
            fontFamily: 'Raleway, sans-serif',
            fontWeight: 700,
            fontSize: '14px',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            textDecoration: 'none',
          }}
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
