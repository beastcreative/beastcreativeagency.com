import CTAButton from '@/components/CTAButton';

export const metadata = {
  title: 'CPG Marketing San Antonio | Beast Creative Agency',
  description: 'Consumer packaged goods marketing in San Antonio TX. Get your products onto shelves and into shopping carts. Beast Creative Agency.',
};

export default function CPGMarketingPage() {
  return (
    <>
      <section style={{ background: 'var(--bg)', padding: '100px 0 60px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ maxWidth: '700px' }}>
            <span style={{ color: '#ff1198', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '16px' }}>Services</span>
            <h1 style={{ color: 'var(--text)', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(32px, 5vw, 56px)', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '24px' }}>
              CPG Marketing
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontFamily: 'Raleway, sans-serif', fontSize: '18px', lineHeight: '1.7', marginBottom: '40px' }}>
              Consumer packaged goods marketing that gets your products onto shelves and into shopping carts.
            </p>
            <CTAButton href="/contact">Discuss Your CPG Strategy</CTAButton>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--bg-surface)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
            <div>
              <h2 style={{ color: 'var(--text)', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '32px', textTransform: 'uppercase', marginBottom: '24px' }}>What We Do</h2>
              <p style={{ color: 'var(--text-secondary)', fontFamily: 'Raleway, sans-serif', fontSize: '16px', lineHeight: '1.8', marginBottom: '20px' }}>
                CPG brands face unique challenges: fierce shelf competition, retailer relationships, consumer education, and the need to stand out in a crowded market. We have built specialized expertise in helping consumer goods brands grow from regional players to market leaders.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontFamily: 'Raleway, sans-serif', fontSize: '16px', lineHeight: '1.8' }}>
                From packaging design and retail marketing to digital advertising and influencer campaigns, we cover every channel that matters for CPG growth.
              </p>
            </div>
            <div>
              <h2 style={{ color: 'var(--text)', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '32px', textTransform: 'uppercase', marginBottom: '24px' }}>Benefits</h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  'Product packaging design',
                  'Retail marketing materials',
                  'Shopper marketing campaigns',
                  'Digital advertising for CPG',
                  'Influencer and ambassador programs',
                  'Amazon and e-commerce optimization',
                  'Trade show presence and materials',
                  'Consumer loyalty programs',
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
            Ready to Grow Your CPG Brand?
          </h2>
          <a href="/contact" style={{ display: 'inline-block', background: '#000', color: 'var(--text)', padding: '14px 36px', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.08em', borderRadius: 0, textDecoration: 'none' }}>
            Discuss Your CPG Strategy
          </a>
        </div>
      </section>
    </>
  );
}
