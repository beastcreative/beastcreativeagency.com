import CTAButton from '@/components/CTAButton';

export const metadata = {
  title: 'Branding Agency San Antonio | Brand Identity & Strategy | Beast',
  description: 'Professional branding services in San Antonio TX. Brand identity, strategy, and design that commands attention. Beast Creative Agency.',
};

export default function BrandingPage() {
  return (
    <>
      <section style={{ background: 'var(--bg)', padding: '100px 0 60px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ maxWidth: '700px' }}>
            <span style={{ color: '#ff1198', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '16px' }}>Services</span>
            <h1 style={{ color: 'var(--text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(32px, 5vw, 56px)', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '24px' }}>
              Branding
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '18px', lineHeight: '1.7', marginBottom: '40px' }}>
              Build a brand identity that commands attention, communicates your value, and connects with your ideal audience on every touchpoint.
            </p>
            <CTAButton href="/contact">Start Your Brand Project</CTAButton>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--bg-surface)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
            <div>
              <h2 style={{ color: 'var(--text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '32px', textTransform: 'uppercase', marginBottom: '24px' }}>
                What We Do
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '16px', lineHeight: '1.8', marginBottom: '20px' }}>
                Your brand is more than a logo - it is the complete experience your customers have with your business. We build brands from the ground up that are strategically positioned to win in your market and emotionally connect with your ideal customer.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '16px', lineHeight: '1.8' }}>
                From competitive analysis and brand positioning to visual identity and brand guidelines, we deliver everything you need to show up consistently and powerfully across every channel.
              </p>
            </div>
            <div>
              <h2 style={{ color: 'var(--text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '32px', textTransform: 'uppercase', marginBottom: '24px' }}>
                Benefits
              </h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  'Complete brand identity system',
                  'Strategic brand positioning',
                  'Logo and visual identity design',
                  'Brand voice and messaging guidelines',
                  'Color palette and typography system',
                  'Business card and print collateral',
                  'Digital brand assets and templates',
                  'Comprehensive brand guidelines document',
                ].map(b => (
                  <li key={b} style={{ display: 'flex', gap: '12px', color: 'var(--text-secondary)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '15px', alignItems: 'flex-start' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff1198" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '3px' }}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#ff1198', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'var(--text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 40px)', textTransform: 'uppercase', marginBottom: '20px' }}>
            Ready to Build Your Brand?
          </h2>
          <a href="/contact" style={{ display: 'inline-block', background: '#000', color: 'var(--text)', padding: '14px 36px', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.08em', borderRadius: 0, textDecoration: 'none' }}>
            Start Your Brand Project
          </a>
        </div>
      </section>
    </>
  );
}
