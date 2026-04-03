import CTAButton from '@/components/CTAButton';

export const metadata = {
  title: 'SEO Agency San Antonio | Search Engine Optimization | Beast',
  description: 'Data-driven SEO services in San Antonio TX. Dominate Google rankings and drive qualified organic traffic. Beast Creative Agency.',
};

export default function SEOPage() {
  return (
    <>
      <section style={{ background: 'var(--bg)', padding: '100px 0 60px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ maxWidth: '700px' }}>
            <span style={{ color: '#ff1198', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '16px' }}>Services</span>
            <h1 style={{ color: 'var(--text)', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(32px, 5vw, 56px)', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '24px' }}>
              Search Engine Optimization
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontFamily: 'Raleway, sans-serif', fontSize: '18px', lineHeight: '1.7', marginBottom: '40px' }}>
              Dominate Google rankings with data-driven SEO strategies that drive qualified organic traffic and long-term revenue growth.
            </p>
            <CTAButton href="/contact">Get a Free SEO Audit</CTAButton>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--bg-surface)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
            <div>
              <h2 style={{ color: 'var(--text)', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '32px', textTransform: 'uppercase', marginBottom: '24px' }}>
                What We Do
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontFamily: 'Raleway, sans-serif', fontSize: '16px', lineHeight: '1.8', marginBottom: '20px' }}>
                Our SEO team combines technical expertise, content strategy, and link building to create a comprehensive approach that produces sustainable, long-term rankings. We do not use shortcuts or black-hat tactics - we build authority the right way.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontFamily: 'Raleway, sans-serif', fontSize: '16px', lineHeight: '1.8' }}>
                Every strategy starts with deep research into your market, your competitors, and your target audience&apos;s search behavior. Then we build a custom roadmap designed to capture the search queries that drive real business results.
              </p>
            </div>
            <div>
              <h2 style={{ color: 'var(--text)', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '32px', textTransform: 'uppercase', marginBottom: '24px' }}>
                Benefits
              </h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  'Higher Google rankings for target keywords',
                  'Increased qualified organic traffic',
                  'Better local visibility and Google Business Profile',
                  'Improved website conversion rates',
                  'Long-term sustainable growth',
                  'Full transparency with monthly reports',
                  'Competitive analysis and keyword research',
                  'Technical SEO and site optimization',
                ].map(b => (
                  <li key={b} style={{ display: 'flex', gap: '12px', color: 'var(--text-secondary)', fontFamily: 'Raleway, sans-serif', fontSize: '15px', alignItems: 'flex-start' }}>
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
          <h2 style={{ color: 'var(--text)', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 40px)', textTransform: 'uppercase', marginBottom: '20px' }}>
            Ready to Dominate Google?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'Raleway, sans-serif', fontSize: '16px', marginBottom: '32px' }}>
            Get your free SEO audit and discover where your biggest opportunities are.
          </p>
          <a href="/contact" style={{ display: 'inline-block', background: '#000', color: 'var(--text)', padding: '14px 36px', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.08em', borderRadius: 0, textDecoration: 'none' }}>
            Get My Free SEO Audit
          </a>
        </div>
      </section>
    </>
  );
}
