import CTAButton from '@/components/CTAButton';

export const metadata = {
  title: 'Social Media Marketing Marketing San Antonio | Beast Creative Agency',
  description: 'Beast Creative Agency The Social Media Marketing Agency in San Antonio You Were Expecting Why Choose Us As Your San Antonio Social Media Marketing? Proven ',
  alternates: {
    canonical: 'https://www.beastcreativeagency.com/social-media-marketing-san-antonio/',
  },
};

export default function Page() {
  return (
    <>
      <section style={{ background: 'var(--bg)', padding: '100px 0 60px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ maxWidth: '700px' }}>
            <span style={{ color: '#ff1198', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '16px' }}>Beast Creative Agency</span>
            <h1 style={{ color: 'var(--text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(32px, 5vw, 56px)', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '24px' }}>
              Social Media Marketing Marketing San Antonio
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '18px', lineHeight: '1.7', marginBottom: '40px' }}>
              Beast Creative Agency The Social Media Marketing Agency in San Antonio You Were Expecting Why Choose Us As Your San Antonio Social Media Marketing? Proven Strategies Increased Followers… and Income High Level of Attention Professionalism Call Now Wha
            </p>
            <CTAButton href="/contact" text="Get Started" />
          </div>
        </div>
      </section>
      <section style={{ background: 'var(--bg-surface)', padding: '80px 0' }}>
        <div className="container">
          
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ color: 'var(--text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 36px)', textTransform: 'uppercase', marginBottom: '20px' }}>
          Why Choose Us As Your San Antonio Social Media Marketing?
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '17px', lineHeight: '1.8', maxWidth: '760px' }}>
          
        </p>
      </div>
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ color: 'var(--text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 36px)', textTransform: 'uppercase', marginBottom: '20px' }}>
          What Is Social Media Marketing​?
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '17px', lineHeight: '1.8', maxWidth: '760px' }}>
          Social media marketing strategies are a powerful tool that businesses in San Antonio can use to reach their target audience and increase their brand awareness. With over 3 billion people using social media worldwide, it’s an opportunity you can’t afford to miss.
        </p>
      </div>
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ color: 'var(--text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 36px)', textTransform: 'uppercase', marginBottom: '20px' }}>
          We Boost Your Social Media Marketing Results in and from San Antonio
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '17px', lineHeight: '1.8', maxWidth: '760px' }}>
          At Beast Creative Agency, we understand the power of social media marketing and how it can boost your client’s results. Our team of experienced professionals can help you to reach your customers through social channels, develop engaging content, and deliver measurable ROI. We have the expertise and resources to create and manage campaigns that will engage and grow your customer base. We can also h
        </p>
      </div>
          <div style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: '8px', padding: '48px', textAlign: 'center', marginTop: '60px' }}>
            <h2 style={{ color: 'var(--text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '32px', textTransform: 'uppercase', marginBottom: '16px' }}>Ready to Work With Beast?</h2>
            <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '17px', marginBottom: '32px' }}>Let&apos;s talk about what we can build together.</p>
            <CTAButton href="/contact" text="Start the Conversation" />
          </div>
        </div>
      </section>
    </>
  );
}
