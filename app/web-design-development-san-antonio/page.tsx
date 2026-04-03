import CTAButton from '@/components/CTAButton';

export const metadata = {
  title: 'Web Design and Development San Antonio | Beast Creative Agency',
  description: 'Beast Creative Agency The Best Web Design Agency in San Antonio A powerful online presence begins with high-quality web design in San Antonio. At Beast Cre',
};

export default function Page() {
  return (
    <>
      <section style={{ background: '#0c0c0c', padding: '100px 0 60px', borderBottom: '1px solid #1a1a1a' }}>
        <div className="container">
          <div style={{ maxWidth: '700px' }}>
            <span style={{ color: '#ff1198', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '16px' }}>Beast Creative Agency</span>
            <h1 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(32px, 5vw, 56px)', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '24px' }}>
              Web Design and Development San Antonio
            </h1>
            <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '18px', lineHeight: '1.7', marginBottom: '40px' }}>
              Beast Creative Agency The Best Web Design Agency in San Antonio A powerful online presence begins with high-quality web design in San Antonio. At Beast Creative Agency, we specialize in crafting visually stunning and highly functional websites that h
            </p>
            <CTAButton href="/contact" text="Get Started" />
          </div>
        </div>
      </section>
      <section style={{ background: '#111', padding: '80px 0' }}>
        <div className="container">
          
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 36px)', textTransform: 'uppercase', marginBottom: '20px' }}>
          Elevate Your Online Presence with Web Design San Antonio
        </h2>
        <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '17px', lineHeight: '1.8', maxWidth: '760px' }}>
          Your web design is often the first view potential customers have of your business. With our expert web design in San Antonio , we ensure that your website is not only visually appealing but also optimized for performance and user experience. We focus on responsive design, fast loading speeds, and intuitive navigation to keep visitors engaged and encourage conversions. As a leading San Antonio webs
        </p>
      </div>
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 36px)', textTransform: 'uppercase', marginBottom: '20px' }}>
          Our Web Design Process:
        </h2>
        <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '17px', lineHeight: '1.8', maxWidth: '760px' }}>
          
        </p>
      </div>
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 36px)', textTransform: 'uppercase', marginBottom: '20px' }}>
          Get Started with the Best Web Design Company in San Antonio
        </h2>
        <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '17px', lineHeight: '1.8', maxWidth: '760px' }}>
          At Beast Creative Agency, we take pride in providing top-tier web design in San Antonio that helps businesses thrive in the digital landscape. Whether you need a brand-new website or a redesign, our team is ready to bring your vision to life. Contact us today to discuss your web design needs and start building a website that drives results!
        </p>
      </div>
          <div style={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: '8px', padding: '48px', textAlign: 'center', marginTop: '60px' }}>
            <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '32px', textTransform: 'uppercase', marginBottom: '16px' }}>Ready to Work With Beast?</h2>
            <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '17px', marginBottom: '32px' }}>Let&apos;s talk about what we can build together.</p>
            <CTAButton href="/contact" text="Start the Conversation" />
          </div>
        </div>
      </section>
    </>
  );
}
