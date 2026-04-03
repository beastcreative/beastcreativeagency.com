import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Branding Agency San Antonio | Brand Identity & Strategy | Beast',
  description: 'San Antonio\'s top branding agency. Beast Creative Agency builds brand identities, visual systems, and messaging strategies that command attention and drive growth.',
  alternates: { canonical: 'https://www.beastcreativeagency.com/branding-agency-san-antonio' },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      name: 'Beast Creative Agency',
      url: 'https://www.beastcreativeagency.com',
      telephone: '+12103334141',
      email: 'info@beastcreativeagency.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'San Antonio',
        addressRegion: 'TX',
        addressCountry: 'US',
      },
      areaServed: 'San Antonio, TX',
      description: 'Full-service branding agency in San Antonio, TX specializing in brand identity, strategy, and visual systems.',
    },
    {
      '@type': 'Service',
      name: 'Branding Agency San Antonio',
      provider: { '@type': 'LocalBusiness', name: 'Beast Creative Agency' },
      serviceType: 'Brand Identity & Strategy',
      areaServed: 'San Antonio, TX',
      description: 'Professional branding services in San Antonio including brand strategy, visual identity systems, logo design, and brand messaging.',
    },
  ],
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

export default function BrandingAgencySanAntonio() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section style={{ background: 'var(--bg)', padding: '120px 0 80px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <span style={{ color: 'var(--green)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '16px' }}>
            Branding Agency San Antonio
          </span>
          <h1 style={{ color: 'var(--text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.1, marginBottom: '24px' }}>
            Branding Agency in San Antonio, TX
          </h1>
          <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '17px', lineHeight: '1.75', maxWidth: '680px' }}>
            Beast Creative Agency is San Antonio's branding agency built on strategy, not decoration. We build brand identities
            that earn trust, command attention, and drive real business growth for San Antonio companies and national brands alike.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>What a San Antonio Branding Agency Actually Does</h2>
            <p style={bodyStyle}>
              A branding agency is not a logo shop. A true branding agency builds the complete system that defines how your
              company presents itself to the world and earns the trust of the customers you want to serve. Beast Creative Agency
              does exactly that for San Antonio businesses across industries including healthcare, food and beverage, professional
              services, retail, and technology.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              Our branding work starts with research: competitive landscape analysis, target audience definition, and brand
              positioning. From that strategic foundation, we develop your visual identity including your logo system, color
              palette, and typography, as well as your verbal identity including your tagline, value proposition, and messaging
              framework. We deliver everything in a comprehensive brand guidelines document that ensures every touchpoint,
              from your business card to your Instagram post to your sales deck, looks and sounds like the same brand.
              Consistency is what builds recognition. Recognition is what builds trust. Trust is what drives revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section style={{ background: 'var(--bg-surface)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>Why San Antonio Businesses Choose Beast for Branding</h2>
            <p style={bodyStyle}>
              San Antonio has no shortage of design studios and marketing agencies that will make you a logo. Beast is different
              because we lead with strategy, not software. Before any design work begins, we understand your business model,
              your competitive set, your customers, and your growth objectives. Every design decision is defensible because
              every design decision is rooted in research and strategy.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              We have worked with San Antonio businesses from bootstrapped startups to established regional companies, and with
              national CPG brands that trust us with their category positioning. Clients include names across healthcare,
              food service, professional services, and consumer goods. What they all share is a need for a brand that works
              harder than their competitors' brands. Beast builds those brands. Our AI-native operations mean we deliver
              faster than a traditional branding agency without sacrificing the strategic depth and creative quality that
              brand-building requires. San Antonio businesses get enterprise-level branding at a pace and price point that
              a local agency can offer.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>Brand Identity Services for San Antonio Companies</h2>
            <p style={bodyStyle}>
              Beast delivers complete brand identity packages tailored to each client's specific situation. For early-stage
              San Antonio businesses building a brand from scratch, we provide the full foundation: positioning strategy, logo
              system, brand guidelines, and core marketing collateral. For established businesses that have outgrown their
              current brand, we provide brand refresh and evolution services that modernize without abandoning what is already
              working.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              Every brand identity engagement includes a competitive audit specific to your San Antonio market or national
              category, audience research to understand the customers you want to attract, a brand positioning statement
              that defines your unique territory in the market, a logo system with primary and secondary marks, a color
              palette and typography system, brand voice and messaging guidelines, and a brand standards document ready for
              use by your team and vendors. We also offer ongoing brand management retainers for companies that want a
              dedicated branding partner as they grow.
            </p>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section style={{ background: 'var(--bg-surface)', padding: '80px 0', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <h2 style={{ ...h2Style, marginBottom: '40px' }}>Related Services</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px', maxWidth: '760px' }}>
            <div>
              <a href="/" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>Beast Creative Agency</a>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>Full-service marketing agency in San Antonio, TX.</p>
            </div>
            <div>
              <a href="/logo-design-san-antonio" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>Logo Design San Antonio</a>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>Custom logo marks built on strategy and built to last.</p>
            </div>
            <div>
              <a href="/web-design-development-san-antonio" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>Web Design San Antonio</a>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>Conversion-focused websites that express your brand.</p>
            </div>
            <div>
              <a href="/services/branding" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>Branding Services</a>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>See our full branding service offering in detail.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--dark-bg)', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'var(--dark-text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: '24px', lineHeight: 1.2 }}>
            Ready to build a San Antonio brand worth remembering?
          </h2>
          <p style={{ color: '#aaaaaa', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '17px', marginBottom: '40px' }}>
            Let Beast build a brand identity that earns trust and drives growth for your San Antonio business.
          </p>
          <a href="/contact" style={{ display: 'inline-block', background: 'var(--pink)', color: '#fff', padding: '16px 40px', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none' }}>
            Start Your Brand Project
          </a>
        </div>
      </section>
    </>
  );
}
