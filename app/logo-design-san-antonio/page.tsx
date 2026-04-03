import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Logo Design San Antonio | Custom Logo & Brand Mark | Beast',
  description: 'Custom logo design in San Antonio, TX. Memorable brand marks built on strategy, not decoration. Beast creates logos that communicate your brand\'s essence instantly.',
  alternates: { canonical: 'https://www.beastcreativeagency.com/logo-design-san-antonio' },
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
      description: 'Logo design agency in San Antonio, TX creating custom logo marks built on brand strategy.',
    },
    {
      '@type': 'Service',
      name: 'Logo Design San Antonio',
      provider: { '@type': 'LocalBusiness', name: 'Beast Creative Agency' },
      serviceType: 'Logo Design',
      areaServed: 'San Antonio, TX',
      description: 'Custom logo design services in San Antonio including brand mark development, wordmarks, logomarks, and complete logo package delivery.',
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

export default function LogoDesignSanAntonio() {
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
            Logo Design San Antonio
          </span>
          <h1 style={{ color: 'var(--text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.1, marginBottom: '24px' }}>
            Logo Design in San Antonio, TX
          </h1>
          <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '17px', lineHeight: '1.75', maxWidth: '680px' }}>
            Beast Creative Agency designs logos for San Antonio businesses that are strategically grounded, immediately
            recognizable, and built to work across every medium from a business card to a building sign.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>Logo Design Built on Strategy, Not Just Aesthetics</h2>
            <p style={bodyStyle}>
              San Antonio has no shortage of designers who will make you a logo. What separates Beast from every freelancer
              and design shop in town is that we start with strategy, not software. Before any logo concept is sketched,
              we research your San Antonio competitive landscape, define your brand positioning, and understand the visual
              territory where your brand needs to live.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              This strategic foundation changes everything about the logo design process. When we choose a typeface, it is
              because it carries the right personality for your brand and audience. When we choose colors, it is because
              they communicate the right emotional signals and differentiate you from competitors in your San Antonio market
              or national category. When we simplify or refine a mark, it is because we are removing everything that does
              not contribute to the message your logo needs to send. Strategy-driven logo design produces marks that work
              harder and last longer than design-first logos that look beautiful in a presentation but fail in the field.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section style={{ background: 'var(--bg-surface)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>Custom Logo Development for San Antonio Businesses</h2>
            <p style={bodyStyle}>
              Beast designs every logo from scratch for its specific client. No templates. No stock icon libraries. No
              recycled concepts. Your San Antonio business gets a mark that is uniquely yours and built to the specific
              requirements of your brand, industry, and competitive position.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              We develop logos across all mark types based on what best serves your brand strategy. Wordmarks for brands
              where the business name itself is the primary visual asset, such as established service businesses with
              strong name recognition in San Antonio. Lettermarks for brands with strong initials or complex full names.
              Logomarks and symbols for brands that need a standalone visual icon for use in product, app, and environmental
              contexts. Combination marks that work together as a full logo and independently as a standalone symbol. We
              test every concept rigorously across real-world environments, scaled to a favicon, scaled to a banner, on
              light backgrounds, on dark backgrounds, and in black and white, before any concept is presented to the client.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>Complete Logo Package for San Antonio Businesses</h2>
            <p style={bodyStyle}>
              A professional logo delivery is not a single file. Beast delivers complete logo packages that include everything
              a San Antonio business needs to use its logo correctly across every application forever. Vector source files
              in AI and EPS format that can be scaled to any size without quality loss. Web-optimized SVG and PNG files
              in multiple sizes for digital use. Print-ready exports at the resolution required for professional printing.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              Every logo package includes all approved color variations: full color version in primary brand colors,
              single-color black version, single-color white version for use on dark backgrounds, and any brand-specific
              alternate colorways. Alongside the files, we deliver a logo usage guide that specifies minimum size
              requirements, clear space rules around the logo, approved and prohibited uses, and color values in
              RGB, CMYK, and Hex format for correct reproduction in every medium. San Antonio businesses that receive
              a Beast logo package are fully equipped to manage their logo correctly from day one, whether they are
              handing it to a printer, a web developer, a sign company, or a new marketing agency.
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
              <a href="/branding-agency-san-antonio" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>Branding San Antonio</a>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>Full brand identity beyond the logo: strategy, messaging, and guidelines.</p>
            </div>
            <div>
              <a href="/graphic-design-san-antonio" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>Graphic Design San Antonio</a>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>Apply your logo across all print and digital brand touchpoints.</p>
            </div>
            <div>
              <a href="/services/logo-design" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>Logo Design Services</a>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>See the full scope of Beast's logo design process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--dark-bg)', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'var(--dark-text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: '24px', lineHeight: 1.2 }}>
            Ready for a San Antonio logo your brand deserves?
          </h2>
          <p style={{ color: '#aaaaaa', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '17px', marginBottom: '40px' }}>
            Beast designs logos built on strategy and built to last.
          </p>
          <a href="/contact" style={{ display: 'inline-block', background: 'var(--pink)', color: '#fff', padding: '16px 40px', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none' }}>
            Start Your Logo Project
          </a>
        </div>
      </section>
    </>
  );
}
