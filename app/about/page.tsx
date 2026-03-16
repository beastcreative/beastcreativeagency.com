import Image from 'next/image';
import CTAButton from '@/components/CTAButton';

export const metadata = {
  title: 'About Beast Creative Agency | San Antonio Digital Marketing',
  description: 'Learn about Beast Creative Agency, San Antonio\'s premier digital marketing team. Our mission, team, and values.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#0c0c0c', padding: '100px 0 60px', borderBottom: '1px solid #1a1a1a' }}>
        <div className="container">
          <div style={{ maxWidth: '700px' }}>
            <span style={{ color: '#ff1198', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '16px' }}>
              About Us
            </span>
            <h1 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(32px, 5vw, 56px)', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '24px' }}>
              Why Beast Creative Agency?
            </h1>
            <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '18px', lineHeight: '1.7', marginBottom: '40px' }}>
              We are a full-service digital marketing agency based in San Antonio, Texas, built from the ground up to help local and regional brands dominate their markets.
            </p>
            <CTAButton href="/contact">Contact Us</CTAButton>
          </div>
        </div>
      </section>

      {/* About section */}
      <section style={{ background: '#080808', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 40px)', textTransform: 'uppercase', marginBottom: '24px' }}>
                About Beast Creative Agency
              </h2>
              <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '16px', lineHeight: '1.8', marginBottom: '20px' }}>
                Beast Creative Agency was founded with a single mission: to give San Antonio businesses access to world-class digital marketing without the big-agency price tag or the big-agency runaround.
              </p>
              <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '16px', lineHeight: '1.8', marginBottom: '20px' }}>
                We are a team of certified specialists, creative professionals, and data-driven strategists who are obsessed with results. Every campaign we build is rooted in research, guided by data, and executed with creative precision.
              </p>
              <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '16px', lineHeight: '1.8', marginBottom: '20px' }}>
                What sets us apart is our commitment to radical transparency. You will always know exactly what we are doing, why we are doing it, and what results it is producing. No smoke and mirrors - just honest work and honest results.
              </p>
              <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '16px', lineHeight: '1.8', marginBottom: '32px' }}>
                We work with businesses of all sizes, from local startups to regional brands, across industries including food and beverage, cannabis, finance, home services, and retail. No matter your industry, if you are ready to grow, we are ready to help you beast the competition.
              </p>
              <CTAButton href="/contact">Work With Us</CTAButton>
            </div>
            <div>
              <Image src="/images/about-team.png" alt="Beast Creative Agency Team" width={600} height={500} style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: '#0c0c0c', padding: '80px 0' }}>
        <div className="container">
          <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 40px)', textTransform: 'uppercase', textAlign: 'center', marginBottom: '60px' }}>
            Our Core Values
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              { title: 'Results First', desc: 'Every decision we make is guided by one question: will this move the needle for our client? Vanity metrics are not our game.' },
              { title: 'Creative Excellence', desc: 'We believe great design and great strategy are not opposites - they are the same thing. We refuse to produce work that is anything less than excellent.' },
              { title: 'Radical Transparency', desc: 'You deserve to know exactly what is happening with your marketing. We share everything - the wins, the learnings, and the roadmap.' },
              { title: 'Local Pride', desc: 'San Antonio is our home. We are personally invested in the success of this city\'s businesses and brands.' },
              { title: 'Continuous Innovation', desc: 'Digital marketing never stands still, and neither do we. We are always learning, testing, and adopting new tools and strategies.' },
              { title: 'Client Partnership', desc: 'We do not have clients - we have partners. Your business goals become our goals. Your success is our success.' },
            ].map(v => (
              <div key={v.title} style={{ background: '#111', border: '1px solid #222', padding: '32px 24px' }}>
                <h3 style={{ color: '#ff1198', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '16px', textTransform: 'uppercase', marginBottom: '12px' }}>{v.title}</h3>
                <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '14px', lineHeight: '1.7' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section style={{ background: '#080808', padding: '80px 0' }}>
        <div className="container">
          <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 40px)', textTransform: 'uppercase', textAlign: 'center', marginBottom: '16px' }}>
            Our Clients
          </h2>
          <p style={{ color: '#aaa', textAlign: 'center', fontFamily: 'Raleway, sans-serif', fontSize: '16px', marginBottom: '60px' }}>
            Brands that trust Beast Creative Agency to grow their business.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '48px' }}>
            {[
              { src: '/images/client-pioneer.webp', alt: 'Pioneer' },
              { src: '/images/client-rfsa.webp', alt: 'RFSA' },
              { src: '/images/client-sunbird.webp', alt: 'Sun Bird' },
              { src: '/images/client-sweetsensi.webp', alt: 'Sweet Sensi' },
              { src: '/images/client-texancleaners.webp', alt: 'Texan Cleaners' },
              { src: '/images/client-williams.webp', alt: 'Williams' },
            ].map(logo => (
              <div key={logo.alt} style={{ opacity: 0.8, filter: 'brightness(0) invert(1)' }}>
                <Image src={logo.src} alt={logo.alt} width={140} height={60} style={{ height: '48px', width: 'auto', objectFit: 'contain' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hire Us CTA */}
      <section style={{ background: '#ff1198', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 52px)', textTransform: 'uppercase', marginBottom: '20px' }}>
            Hire Us Today
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'Raleway, sans-serif', fontSize: '18px', maxWidth: '600px', margin: '0 auto 40px', lineHeight: '1.7' }}>
            Ready to take your marketing to the next level? Let&apos;s talk.
          </p>
          <a href="/contact"
            style={{ display: 'inline-block', background: '#000', color: '#fff', padding: '16px 40px', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.08em', borderRadius: 0, textDecoration: 'none' }}>
            Get a Free Consultation
          </a>
        </div>
      </section>
    </>
  );
}
