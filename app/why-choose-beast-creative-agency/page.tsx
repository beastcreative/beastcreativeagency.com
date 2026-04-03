import CTAButton from '@/components/CTAButton';

export const metadata = {
  title: 'Why Choose Beast Creative Agency? | Beast Creative Agency',
  description: 'Beast Creative Agency Why Beast? Simply put, we are expert Ideators: We Dream Up Your Next Big… Call Now Why choose the Best Digital Marketers in San Anton',
  alternates: {
    canonical: 'https://www.beastcreativeagency.com/why-choose-beast-creative-agency/',
  },
};

export default function Page() {
  return (
    <>
      <section style={{ background: '#0c0c0c', padding: '100px 0 60px', borderBottom: '1px solid #1a1a1a' }}>
        <div className="container">
          <div style={{ maxWidth: '700px' }}>
            <span style={{ color: '#ff1198', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '16px' }}>Beast Creative Agency</span>
            <h1 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(32px, 5vw, 56px)', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '24px' }}>
              Why Choose Beast Creative Agency?
            </h1>
            <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '18px', lineHeight: '1.7', marginBottom: '40px' }}>
              Beast Creative Agency Why Beast? Simply put, we are expert Ideators: We Dream Up Your Next Big… Call Now Why choose the Best Digital Marketers in San Antonio? What’s your ‘big thing’? A ground-breaking product launch? An immersive digital campaign? A
            </p>
            <CTAButton href="/contact" text="Get Started" />
          </div>
        </div>
      </section>
      <section style={{ background: '#111', padding: '80px 0' }}>
        <div className="container">
          
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 36px)', textTransform: 'uppercase', marginBottom: '20px' }}>
          Why choose the Best Digital Marketers in San Antonio?
        </h2>
        <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '17px', lineHeight: '1.8', maxWidth: '760px' }}>
          What’s your ‘big thing’? A ground-breaking product launch? An immersive digital campaign? A unique and unforgettable event? Whatever it is, our team at Beast Creative are expert ideators, poised and ready to dream it into existence for you. We are a tribe of creative pioneers, always pushing boundaries and venturing off the beaten path to discover fresh, impactful ways of conveying your brand’s me
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
