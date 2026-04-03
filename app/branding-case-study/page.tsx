import CTAButton from '@/components/CTAButton';

export const metadata = {
  title: 'Branding Case Study | Beast Creative Agency',
  description: 'San Antonio Branding Experts Do you love social arcade games? Meet Blue Mountain Games, a game development studio composed of passionate gamers who want to',
};

export default function Page() {
  return (
    <>
      <section style={{ background: 'var(--bg)', padding: '100px 0 60px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ maxWidth: '700px' }}>
            <span style={{ color: '#ff1198', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '16px' }}>Beast Creative Agency</span>
            <h1 style={{ color: 'var(--text)', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(32px, 5vw, 56px)', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '24px' }}>
              Branding Case Study
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontFamily: 'Raleway, sans-serif', fontSize: '18px', lineHeight: '1.7', marginBottom: '40px' }}>
              San Antonio Branding Experts Do you love social arcade games? Meet Blue Mountain Games, a game development studio composed of passionate gamers who want to put gamers at the forefront of their mission. They are on a mission to create a virtual and ph
            </p>
            <CTAButton href="/contact" text="Get Started" />
          </div>
        </div>
      </section>
      <section style={{ background: 'var(--bg-surface)', padding: '80px 0' }}>
        <div className="container">
          
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ color: 'var(--text)', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 36px)', textTransform: 'uppercase', marginBottom: '20px' }}>
          ClientStory:
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontFamily: 'Raleway, sans-serif', fontSize: '17px', lineHeight: '1.8', maxWidth: '760px' }}>
          Understand the Challenges: 01
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
