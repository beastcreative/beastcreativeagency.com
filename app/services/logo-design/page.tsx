import CTAButton from '@/components/CTAButton';

export const metadata = {
  title: 'Logo Design San Antonio | Beast Creative Agency',
  description: 'Professional logo design in San Antonio TX. Memorable logos that capture your brand essence. Beast Creative Agency.',
};

export default function LogoDesignPage() {
  return (
    <>
      <section style={{ background: 'var(--bg)', padding: '100px 0 60px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ maxWidth: '700px' }}>
            <span style={{ color: '#ff1198', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '16px' }}>Services</span>
            <h1 style={{ color: 'var(--text)', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(32px, 5vw, 56px)', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '24px' }}>
              Logo Design
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontFamily: 'Raleway, sans-serif', fontSize: '18px', lineHeight: '1.7', marginBottom: '40px' }}>
              Memorable, professional logos that capture your brand essence and make a lasting first impression.
            </p>
            <CTAButton href="/contact">Get a Logo Design Quote</CTAButton>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--bg-surface)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
            <div>
              <h2 style={{ color: 'var(--text)', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '32px', textTransform: 'uppercase', marginBottom: '24px' }}>What We Do</h2>
              <p style={{ color: 'var(--text-secondary)', fontFamily: 'Raleway, sans-serif', fontSize: '16px', lineHeight: '1.8', marginBottom: '20px' }}>
                A great logo is the cornerstone of a great brand. We create logos that are strategically designed to represent your brand values, appeal to your target audience, and work beautifully across every application - from business cards to billboards.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontFamily: 'Raleway, sans-serif', fontSize: '16px', lineHeight: '1.8' }}>
                Our logo design process begins with discovery - we learn about your business, your competition, and your audience before a single pixel is placed. The result is a logo that is not just beautiful, but strategically right for your brand.
              </p>
            </div>
            <div>
              <h2 style={{ color: 'var(--text)', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '32px', textTransform: 'uppercase', marginBottom: '24px' }}>Benefits</h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  'Multiple custom concepts',
                  'Unlimited revisions until perfect',
                  'All file formats (SVG, PNG, PDF, EPS)',
                  'Light and dark version variations',
                  'Horizontal and stacked layouts',
                  'Color and black-and-white versions',
                  'Complete ownership and rights',
                  'Brand color and font recommendations',
                ].map(b => (
                  <li key={b} style={{ display: 'flex', gap: '12px', color: 'var(--text-secondary)', fontFamily: 'Raleway, sans-serif', fontSize: '15px', alignItems: 'flex-start' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff1198" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '3px' }}><path d="M20 6L9 17l-5-5" /></svg>
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
          <h2 style={{ color: 'var(--text)', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 40px)', textTransform: 'uppercase', marginBottom: '20px' }}>
            Ready for a Logo That Stands Out?
          </h2>
          <a href="/contact" style={{ display: 'inline-block', background: '#000', color: 'var(--text)', padding: '14px 36px', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.08em', borderRadius: 0, textDecoration: 'none' }}>
            Get a Logo Design Quote
          </a>
        </div>
      </section>
    </>
  );
}
