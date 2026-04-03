import CTAButton from '@/components/CTAButton';

export const metadata = {
  title: 'Logo Design San Antonio | Beast Creative Agency',
  description: 'Beast Creative Agency Get The Best Looking Logo Design in San Antonio Why Choose Us For Your Logo Design in San Antonio? Quality Expertise Reliability Prof',
};

export default function Page() {
  return (
    <>
      <section style={{ background: '#0c0c0c', padding: '100px 0 60px', borderBottom: '1px solid #1a1a1a' }}>
        <div className="container">
          <div style={{ maxWidth: '700px' }}>
            <span style={{ color: '#ff1198', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '16px' }}>Beast Creative Agency</span>
            <h1 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(32px, 5vw, 56px)', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '24px' }}>
              Logo Design San Antonio
            </h1>
            <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '18px', lineHeight: '1.7', marginBottom: '40px' }}>
              Beast Creative Agency Get The Best Looking Logo Design in San Antonio Why Choose Us For Your Logo Design in San Antonio? Quality Expertise Reliability Professionalism Call Now The Importance of a San Antonio Great Logo Design Your logo is the face of
            </p>
            <CTAButton href="/contact" text="Get Started" />
          </div>
        </div>
      </section>
      <section style={{ background: '#111', padding: '80px 0' }}>
        <div className="container">
          
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 36px)', textTransform: 'uppercase', marginBottom: '20px' }}>
          Why Choose Us For Your Logo Design in San Antonio?
        </h2>
        <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '17px', lineHeight: '1.8', maxWidth: '760px' }}>
          
        </p>
      </div>
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 36px)', textTransform: 'uppercase', marginBottom: '20px' }}>
          The Importance of a San Antonio Great Logo Design
        </h2>
        <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '17px', lineHeight: '1.8', maxWidth: '760px' }}>
          Your logo is the face of your brand, and it’s often the first thing that customers will see when they encounter your business. A great logo can help you stand out from your competitors, establish your brand identity, and leave a lasting impression on your target audience. It’s essential to invest in a logo design that is not only visually appealing but also aligns with your brand values and messag
        </p>
      </div>
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 36px)', textTransform: 'uppercase', marginBottom: '20px' }}>
          Our Work
        </h2>
        <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '17px', lineHeight: '1.8', maxWidth: '760px' }}>
          We designed a sleek and modern logo for this dermatology that communicates safety and wellness. We designed a bold and energetic logo for this celiac disease website that communicates recovery, safety, and innovation.
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
