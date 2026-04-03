import CTAButton from '@/components/CTAButton';

export const metadata = {
  title: 'Dermatology Marketing Case Study | Beast Creative Agency',
  description: 'Dermatology – Digital Marketing Services Make your phone and not your head ring with Beast Creative. We believe that digital marketing doesn’t have to be a',
};

export default function Page() {
  return (
    <>
      <section style={{ background: '#0c0c0c', padding: '100px 0 60px', borderBottom: '1px solid #1a1a1a' }}>
        <div className="container">
          <div style={{ maxWidth: '700px' }}>
            <span style={{ color: '#ff1198', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '16px' }}>Beast Creative Agency</span>
            <h1 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(32px, 5vw, 56px)', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '24px' }}>
              Dermatology Marketing Case Study
            </h1>
            <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '18px', lineHeight: '1.7', marginBottom: '40px' }}>
              Dermatology – Digital Marketing Services Make your phone and not your head ring with Beast Creative. We believe that digital marketing doesn’t have to be a source of confusion or frustration. Read how RFSA hopped in with our herd and Beasted her way 
            </p>
            <CTAButton href="/contact" text="Get Started" />
          </div>
        </div>
      </section>
      <section style={{ background: '#111', padding: '80px 0' }}>
        <div className="container">
          
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 36px)', textTransform: 'uppercase', marginBottom: '20px' }}>
          ClientStory:
        </h2>
        <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '17px', lineHeight: '1.8', maxWidth: '760px' }}>
          Understand the Challenges: In the highly competitive landscape of dermatology in their city, RFSA Dermatology recognized the necessity to stand out digitally. They entrusted Beast Creative Agency with the monumental task of amplifying their online presence in a saturated market brimming with formidable competition. Comprehending the criticality of the situation, we crafted an aggressive yet tailor
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
