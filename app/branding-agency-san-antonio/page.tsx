import CTAButton from '@/components/CTAButton';

export const metadata = {
  title: 'Branding Agency San Antonio | Beast Creative Agency',
  description: 'Beast Creative Agency The Best Branding Agency in San Antonio Why Choose Our Branding in San Antonio? Quality Expertise Reliability Professionalism Call No',
  alternates: {
    canonical: 'https://www.beastcreativeagency.com/branding-agency-san-antonio/',
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
              Branding Agency San Antonio
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '18px', lineHeight: '1.7', marginBottom: '40px' }}>
              Beast Creative Agency The Best Branding Agency in San Antonio Why Choose Our Branding in San Antonio? Quality Expertise Reliability Professionalism Call Now Who We’ve Worked With Over the years, we’ve had the pleasure of working with a diverse range 
            </p>
            <CTAButton href="/contact" text="Get Started" />
          </div>
        </div>
      </section>
      <section style={{ background: 'var(--bg-surface)', padding: '80px 0' }}>
        <div className="container">
          
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ color: 'var(--text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 36px)', textTransform: 'uppercase', marginBottom: '20px' }}>
          Why Choose Our Branding in San Antonio?
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '17px', lineHeight: '1.8', maxWidth: '760px' }}>
          
        </p>
      </div>
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ color: 'var(--text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 36px)', textTransform: 'uppercase', marginBottom: '20px' }}>
          Who We've Worked With
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '17px', lineHeight: '1.8', maxWidth: '760px' }}>
          Over the years, we’ve had the pleasure of working with a diverse range of clients in various industries, including healthcare, finance, e-commerce, and more. Some of the notable brands we’ve partnered with include RFSA Dermatology, Sweet Sensi, and C.H. Guenther & Son. Our client portfolio showcases the breadth and depth of our branding expertise.
        </p>
      </div>
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ color: 'var(--text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 36px)', textTransform: 'uppercase', marginBottom: '20px' }}>
          We Brand Your Business in San Antonio
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '17px', lineHeight: '1.8', maxWidth: '760px' }}>
          At Beast Creative Agency, we employ a multi-faceted approach to branding that includes social media, SEO, and paid media. By utilizing these channels, we can reach your target audience where they spend their time online, increase your online visibility, and establish your brand as a thought leader in your industry. At Beast Creative Agency, we employ a multi-faceted approach to branding that inclu
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
