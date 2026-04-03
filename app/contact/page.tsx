import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Beast Creative Agency | San Antonio Marketing Agency',
  description: 'Get in touch with Beast Creative Agency in San Antonio. Start a project, ask a question, or schedule a strategy session.',
  alternates: { canonical: 'https://www.beastcreativeagency.com/contact' },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--bg)', padding: '120px 0 80px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <span style={{ color: 'var(--green)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '16px' }}>
            Contact
          </span>
          <h1 style={{ color: 'var(--text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.1, marginBottom: '24px' }}>
            Let&apos;s Talk
          </h1>
          <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '17px', lineHeight: '1.75', maxWidth: '680px' }}>
            Tell us about your project and we will get back to you within one business day.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px', alignItems: 'start', maxWidth: '1000px' }}>
            {/* Form */}
            <div>
              <h2 style={{ color: 'var(--text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '24px', marginBottom: '32px' }}>
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Info */}
            <div>
              <h2 style={{ color: 'var(--text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '24px', marginBottom: '32px' }}>
                Contact Information
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                <div>
                  <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>Phone</p>
                  <a href="tel:+12103334141" style={{ color: 'var(--text)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '18px', fontWeight: 600, textDecoration: 'none' }}>
                    (210) 333-4141
                  </a>
                </div>

                <div>
                  <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>Email</p>
                  <a href="mailto:info@beastcreativeagency.com" style={{ color: 'var(--text)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '16px', fontWeight: 600, textDecoration: 'none' }}>
                    info@beastcreativeagency.com
                  </a>
                </div>

                <div>
                  <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>Location</p>
                  <p style={{ color: 'var(--text)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '16px', lineHeight: '1.6' }}>
                    San Antonio, TX
                  </p>
                </div>

                <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
                  <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', lineHeight: '1.7' }}>
                    We work with businesses across San Antonio and nationwide. Most client relationships start with a brief call to understand your goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA strip */}
      <section style={{ background: 'var(--dark-bg)', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: '#aaaaaa', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '16px', marginBottom: '8px' }}>
            Not ready to fill out the form?
          </p>
          <a href="tel:+12103334141" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '20px', textDecoration: 'none' }}>
            Call (210) 333-4141
          </a>
        </div>
      </section>
    </>
  );
}
