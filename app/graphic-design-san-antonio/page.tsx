import CTAButton from '@/components/CTAButton';

export const metadata = {
  title: 'Graphic Design San Antonio | Beast Creative Agency',
  description: 'Beast Creative Agency The #1 Graphic Designers in San Antonio Strong branding starts with high-quality graphic design in San Antonio that captures your com',
  alternates: {
    canonical: 'https://www.beastcreativeagency.com/graphic-design-san-antonio/',
  },
};

export default function Page() {
  return (
    <>
      <section style={{ background: 'var(--bg)', padding: '100px 0 60px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ maxWidth: '700px' }}>
            <span style={{ color: '#ff1198', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '16px' }}>Beast Creative Agency</span>
            <h1 style={{ color: 'var(--text)', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(32px, 5vw, 56px)', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '24px' }}>
              Graphic Design San Antonio
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontFamily: 'Raleway, sans-serif', fontSize: '18px', lineHeight: '1.7', marginBottom: '40px' }}>
              Beast Creative Agency The #1 Graphic Designers in San Antonio Strong branding starts with high-quality graphic design in San Antonio that captures your company’s vision and engages your audience. At Beast Creative Agency, we offer innovative and cust
            </p>
            <CTAButton href="/contact" text="Get Started" />
          </div>
        </div>
      </section>
      <section style={{ background: 'var(--bg-surface)', padding: '80px 0' }}>
        <div className="container">
          
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ color: 'var(--text)', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 36px)', textTransform: 'uppercase', marginBottom: '20px' }}>
          Elevate Your Brand with Graphic Design San Antonio TX
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontFamily: 'Raleway, sans-serif', fontSize: '17px', lineHeight: '1.8', maxWidth: '760px' }}>
          Exceptional graphic design in San Antonio, TX is more than aesthetics—it’s about communicating your message effectively. We specialize in creating designs that not only look great but also align with your brand’s goals and values. Our team works closely with clients to develop customized graphics for digital and print media, ensuring consistency across all platforms.
        </p>
      </div>
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ color: 'var(--text)', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 36px)', textTransform: 'uppercase', marginBottom: '20px' }}>
          Our Graphic Design Services Include:
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontFamily: 'Raleway, sans-serif', fontSize: '17px', lineHeight: '1.8', maxWidth: '760px' }}>
          Custom branding and logo creation. Marketing materials such as brochures, business cards, and flyers.
        </p>
      </div>
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ color: 'var(--text)', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 36px)', textTransform: 'uppercase', marginBottom: '20px' }}>
          Our San Antonio Graphic Designs
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontFamily: 'Raleway, sans-serif', fontSize: '17px', lineHeight: '1.8', maxWidth: '760px' }}>
          Why Choose Us?
        </p>
      </div>
          <div style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: '8px', padding: '48px', textAlign: 'center', marginTop: '60px' }}>
            <h2 style={{ color: 'var(--text)', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '32px', textTransform: 'uppercase', marginBottom: '16px' }}>Ready to Work With Beast?</h2>
            <p style={{ color: 'var(--text-secondary)', fontFamily: 'Raleway, sans-serif', fontSize: '17px', marginBottom: '32px' }}>Let&apos;s talk about what we can build together.</p>
            <CTAButton href="/contact" text="Start the Conversation" />
          </div>
        </div>
      </section>
    </>
  );
}
