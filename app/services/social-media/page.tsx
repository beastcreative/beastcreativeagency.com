import CTAButton from '@/components/CTAButton';

export const metadata = {
  title: 'Social Media Marketing San Antonio | Beast Creative Agency',
  description: 'Social media marketing and management in San Antonio TX. Grow your audience and drive revenue with strategic social campaigns. Beast Creative Agency.',
};

export default function SocialMediaPage() {
  return (
    <>
      <section style={{ background: '#0c0c0c', padding: '100px 0 60px', borderBottom: '1px solid #1a1a1a' }}>
        <div className="container">
          <div style={{ maxWidth: '700px' }}>
            <span style={{ color: '#ff1198', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '16px' }}>Services</span>
            <h1 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(32px, 5vw, 56px)', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '24px' }}>
              Social Media Marketing
            </h1>
            <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '18px', lineHeight: '1.7', marginBottom: '40px' }}>
              Engage your audience and grow your community with strategic social media content, management, and paid advertising campaigns.
            </p>
            <CTAButton href="/contact">Get a Social Media Strategy</CTAButton>
          </div>
        </div>
      </section>

      <section style={{ background: '#080808', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
            <div>
              <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '32px', textTransform: 'uppercase', marginBottom: '24px' }}>What We Do</h2>
              <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '16px', lineHeight: '1.8', marginBottom: '20px' }}>
                We manage your social media presence end-to-end - from content creation and community management to paid advertising campaigns across Facebook, Instagram, TikTok, LinkedIn, and more.
              </p>
              <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '16px', lineHeight: '1.8' }}>
                Every piece of content we create is designed to serve a strategic purpose: build brand awareness, engage your audience, and drive conversions. We do not post for the sake of posting.
              </p>
            </div>
            <div>
              <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '32px', textTransform: 'uppercase', marginBottom: '24px' }}>Benefits</h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  'Professional content creation and design',
                  'Consistent posting schedule',
                  'Community management and engagement',
                  'Facebook and Instagram advertising',
                  'TikTok content and advertising',
                  'Influencer partnership management',
                  'Monthly performance reporting',
                  'Strategy review and optimization',
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
            Ready to Grow on Social?
          </h2>
          <a href="/contact" style={{ display: 'inline-block', background: '#000', color: '#fff', padding: '14px 36px', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.08em', borderRadius: 0, textDecoration: 'none' }}>
            Get a Social Strategy
          </a>
        </div>
      </section>
    </>
  );
}
