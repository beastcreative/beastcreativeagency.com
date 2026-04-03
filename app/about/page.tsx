import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Beast Creative Agency | San Antonio Marketing Agency',
  description: 'Beast Creative Agency is San Antonio\'s AI-native full-service marketing agency. Meet the team building brands that grow.',
  alternates: { canonical: 'https://www.beastcreativeagency.com/about' },
};

const h2Style = {
  color: 'var(--text)',
  fontFamily: 'var(--font-geist, sans-serif)',
  fontWeight: 700,
  fontSize: 'clamp(22px, 3vw, 32px)' as string,
  lineHeight: 1.2,
  marginBottom: '20px',
};

const bodyStyle = {
  color: 'var(--text-secondary)',
  fontFamily: 'var(--font-geist, sans-serif)',
  fontSize: '17px',
  lineHeight: '1.8',
  maxWidth: '760px',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--bg)', padding: '120px 0 80px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <span style={{ color: 'var(--green)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '16px' }}>
            About
          </span>
          <h1 style={{ color: 'var(--text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.1, marginBottom: '24px' }}>
            About Beast Creative Agency
          </h1>
          <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '17px', lineHeight: '1.75', maxWidth: '680px' }}>
            Beast Creative Agency is a full-service marketing agency based in San Antonio, Texas. We combine a senior team of
            brand strategists, designers, developers, and content specialists with AI-powered operations to deliver faster,
            sharper work than a traditional agency can.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>Built Different From the Start</h2>
            <p style={bodyStyle}>
              Most agencies are built around a service model that has not fundamentally changed in 30 years. Account managers,
              project coordinators, junior designers, and senior creative directors in a chain of approvals that slows work
              down and drives costs up. Beast was built differently. We designed our agency from the ground up for the way
              work actually happens in 2024 and beyond.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              Being AI-native does not mean replacing human talent. It means augmenting it. Our senior strategists and
              designers work alongside AI tools that handle research synthesis, copy drafting, data analysis, and production
              work, so the humans on your account can spend their time on what only humans can do: judgment, creative direction,
              strategy, and relationship. The result is work that moves faster, costs less, and maintains higher quality than
              a traditional agency can produce. We built Beast in San Antonio because we believe the best agencies do not have
              to be in New York to do world-class work.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section style={{ background: 'var(--bg-surface)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>The Beast Approach</h2>
            <p style={bodyStyle}>
              Strategy first. Every time. Beast does not take orders. We take briefs and apply expertise. When you come to us
              with a logo project, we ask why before we ask what. When you come with a website project, we start with conversion
              goals before we discuss aesthetics. When you come with an SEO question, we start with business objectives before
              we talk about keywords.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              We work without templates because your business is not like anyone else's. We build to your specific goals,
              your specific audience, and your specific competitive situation. That means every engagement begins with research
              and ends with deliverables that are specific, not generic. We measure results against real business outcomes,
              not vanity metrics. Traffic is meaningless without leads. Social followers are meaningless without revenue.
              Brand awareness is meaningless without brand preference. Beast tracks what matters and optimizes relentlessly
              toward it.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>Our Team</h2>
            <p style={bodyStyle}>
              Beast is led by senior practitioners with deep experience across brand strategy, design, development, content,
              and digital marketing. Our human team brings decades of collective experience working with brands ranging from
              San Antonio small businesses to national CPG companies. We are not a junior team selling senior expertise.
              The people who pitch your work are the people who do your work.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              Alongside our human team, Beast operates a layer of specialized AI agents that handle research, analysis,
              content production support, reporting, and project coordination. These agents work 24/7 and are managed by
              our senior team members. They are how we deliver enterprise-level output at independent agency speed and cost.
              When you work with Beast, you get the benefit of both: experienced human judgment and AI-powered execution.
              It is the operating model that traditional agencies cannot replicate, and it is why our clients get better
              results faster.
            </p>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section style={{ background: 'var(--bg-surface)', padding: '80px 0', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <h2 style={{ ...h2Style, marginBottom: '40px' }}>Explore More</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px', maxWidth: '760px' }}>
            <div>
              <a href="/services" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>Our Services</a>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>See the full range of what Beast builds for clients.</p>
            </div>
            <div>
              <a href="/why-choose-beast-creative-agency" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>Why Choose Beast</a>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>What makes Beast different from every other agency.</p>
            </div>
            <div>
              <a href="/contact" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>Contact Us</a>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>Start a conversation about what we can build together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--dark-bg)', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'var(--dark-text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: '24px', lineHeight: 1.2 }}>
            Want to see what Beast can build for you?
          </h2>
          <p style={{ color: '#aaaaaa', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '17px', marginBottom: '40px' }}>
            Tell us about your business and we will tell you exactly how we would approach it.
          </p>
          <a href="/contact" style={{ display: 'inline-block', background: 'var(--pink)', color: '#fff', padding: '16px 40px', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none' }}>
            Start the Conversation
          </a>
        </div>
      </section>
    </>
  );
}
