import CTAButton from '@/components/CTAButton';

export const metadata = {
  title: 'Web Design and Development San Antonio | Beast Creative Agency',
  description: 'Custom web design and development in San Antonio TX. Fast, mobile-first websites that convert visitors into customers. Beast Creative Agency.',
};

export default function WebDesignPage() {
  return (
    <>
      <section style={{ background: '#0c0c0c', padding: '100px 0 60px', borderBottom: '1px solid #1a1a1a' }}>
        <div className="container">
          <div style={{ maxWidth: '700px' }}>
            <span style={{ color: '#ff1198', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '16px' }}>Services</span>
            <h1 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(32px, 5vw, 56px)', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '24px' }}>
              Web Design and Development
            </h1>
            <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '18px', lineHeight: '1.7', marginBottom: '40px' }}>
              Custom-built websites that convert visitors into customers - fast, mobile-first, and designed with your business goals in mind.
            </p>
            <CTAButton href="/contact">Get a Free Website Consultation</CTAButton>
          </div>
        </div>
      </section>

      <section style={{ background: '#080808', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
            <div>
              <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '32px', textTransform: 'uppercase', marginBottom: '24px' }}>
                What We Do
              </h2>
              <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '16px', lineHeight: '1.8', marginBottom: '20px' }}>
                We design and build websites that work as hard as you do. Every site we create is custom-built from scratch - no templates, no shortcuts. We start with your business goals and design backward, ensuring every element serves a conversion purpose.
              </p>
              <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '16px', lineHeight: '1.8' }}>
                We build on modern platforms like WordPress, Webflow, and Next.js, with a focus on performance, accessibility, and SEO best practices baked in from day one.
              </p>
            </div>
            <div>
              <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '32px', textTransform: 'uppercase', marginBottom: '24px' }}>
                Benefits
              </h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  'Custom design (no templates)',
                  'Mobile-first responsive development',
                  'Fast loading speeds and Core Web Vitals',
                  'Built-in SEO best practices',
                  'Conversion rate optimization',
                  'Content management system integration',
                  'Ongoing maintenance and support',
                  'Analytics and conversion tracking setup',
                ].map(b => (
                  <li key={b} style={{ display: 'flex', gap: '12px', color: '#ccc', fontFamily: 'Raleway, sans-serif', fontSize: '15px', alignItems: 'flex-start' }}>
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
          <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 40px)', textTransform: 'uppercase', marginBottom: '20px' }}>
            Ready for a Website That Converts?
          </h2>
          <a href="/contact" style={{ display: 'inline-block', background: '#000', color: '#fff', padding: '14px 36px', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.08em', borderRadius: 0, textDecoration: 'none' }}>
            Get a Free Consultation
          </a>
        </div>
      </section>
    </>
  );
}
