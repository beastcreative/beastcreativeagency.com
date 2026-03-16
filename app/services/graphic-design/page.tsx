import CTAButton from '@/components/CTAButton';

export const metadata = {
  title: 'Graphic Design Services San Antonio | Beast Creative Agency',
  description: 'Professional graphic design in San Antonio TX. Print, digital, and social media design that elevates your brand. Beast Creative Agency.',
};

export default function GraphicDesignPage() {
  return (
    <>
      <section style={{ background: '#0c0c0c', padding: '100px 0 60px', borderBottom: '1px solid #1a1a1a' }}>
        <div className="container">
          <div style={{ maxWidth: '700px' }}>
            <span style={{ color: '#ff1198', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '16px' }}>Services</span>
            <h1 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(32px, 5vw, 56px)', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '24px' }}>
              Graphic Design
            </h1>
            <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '18px', lineHeight: '1.7', marginBottom: '40px' }}>
              Visually stunning design that elevates your brand across print, digital, and social media channels.
            </p>
            <CTAButton href="/contact">Start a Design Project</CTAButton>
          </div>
        </div>
      </section>

      <section style={{ background: '#080808', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
            <div>
              <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '32px', textTransform: 'uppercase', marginBottom: '24px' }}>What We Do</h2>
              <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '16px', lineHeight: '1.8', marginBottom: '20px' }}>
                Our design team creates visuals that stop the scroll, communicate your message, and reinforce your brand identity. From social media graphics to product packaging to event materials, we bring your brand to life visually.
              </p>
              <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '16px', lineHeight: '1.8' }}>
                We do not just make things look good - we design with purpose. Every design decision is made to serve your marketing and business objectives.
              </p>
            </div>
            <div>
              <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '32px', textTransform: 'uppercase', marginBottom: '24px' }}>Benefits</h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  'Social media graphics and templates',
                  'Print advertising design',
                  'Product packaging design',
                  'Trade show and event materials',
                  'Infographics and data visualization',
                  'Email marketing design',
                  'Presentation design',
                  'Brand consistency across all materials',
                ].map(b => (
                  <li key={b} style={{ display: 'flex', gap: '12px', color: '#ccc', fontFamily: 'Raleway, sans-serif', fontSize: '15px', alignItems: 'flex-start' }}>
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
          <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 40px)', textTransform: 'uppercase', marginBottom: '20px' }}>
            Ready to Elevate Your Visuals?
          </h2>
          <a href="/contact" style={{ display: 'inline-block', background: '#000', color: '#fff', padding: '14px 36px', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.08em', borderRadius: 0, textDecoration: 'none' }}>
            Start a Design Project
          </a>
        </div>
      </section>
    </>
  );
}
