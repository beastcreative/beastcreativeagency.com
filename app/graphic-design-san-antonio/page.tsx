import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Graphic Design San Antonio | Professional Design Services | Beast',
  description: 'Professional graphic design services in San Antonio, TX. Print, digital, and social media design that elevates your brand across every touchpoint.',
  alternates: { canonical: 'https://www.beastcreativeagency.com/graphic-design-san-antonio' },
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
      description: 'Graphic design agency in San Antonio, TX specializing in print, digital, and brand design.',
    },
    {
      '@type': 'Service',
      name: 'Graphic Design San Antonio',
      provider: { '@type': 'LocalBusiness', name: 'Beast Creative Agency' },
      serviceType: 'Graphic Design',
      areaServed: 'San Antonio, TX',
      description: 'Professional graphic design services in San Antonio including print collateral, digital advertising, social media graphics, and brand asset systems.',
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

export default function GraphicDesignSanAntonio() {
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
            Graphic Design San Antonio
          </span>
          <h1 style={{ color: 'var(--text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.1, marginBottom: '24px' }}>
            Graphic Design in San Antonio, TX
          </h1>
          <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '17px', lineHeight: '1.75', maxWidth: '680px' }}>
            Beast Creative Agency provides professional graphic design services for San Antonio businesses that need design
            work that is brand-aligned, production-ready, and built to perform across print, digital, and social media.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>Graphic Design for San Antonio Businesses</h2>
            <p style={bodyStyle}>
              Every piece of design your San Antonio business produces is a brand statement. Business cards handed out at
              a networking event downtown. Brochures left at a trade show at the Henry B. Gonzalez Convention Center.
              Signage on your storefront. Digital ads running across San Antonio Facebook and Instagram feeds. Each one
              creates an impression, and that impression either builds your brand or undermines it.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              Beast's graphic design team creates visual assets that communicate your brand clearly and consistently
              across every medium. We work within your existing brand guidelines or build new ones if you are starting
              fresh. Every asset we produce is delivered production-ready for its intended medium, whether that is a
              printer-ready PDF with correct bleed and color profiles or a web-optimized PNG for your website. San Antonio
              businesses that work with Beast get graphic design that looks professional because it is. Not templated.
              Not generic. Built specifically for your brand and your audience.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section style={{ background: 'var(--bg-surface)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>Print Collateral &amp; Digital Advertising Design</h2>
            <p style={bodyStyle}>
              Beast handles the full spectrum of design needs for San Antonio businesses. For print, we design business
              cards, letterhead, brochures, sell sheets, flyers, menus, signage, banners, trade show displays, and packaging.
              Every print deliverable comes with correct specifications for professional printing, including bleed settings,
              color mode (CMYK), resolution, and fold marks where applicable.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              For digital advertising, we design static and animated display ads in all standard sizes for Google Display
              Network, Facebook, Instagram, LinkedIn, and TikTok. For email marketing, we build email templates that render
              correctly across all major email clients, including mobile. For social media, we develop visual templates and
              post designs that keep your feed cohesive and recognizable. Whether a San Antonio customer encounters your
              brand on a highway billboard, a social media feed, or a Google ad, the impression should feel like the same
              brand every time.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>Brand Asset Systems for San Antonio Teams</h2>
            <p style={bodyStyle}>
              One of the most common graphic design problems San Antonio businesses face is inconsistency. When design
              work is done piecemeal by different vendors, different freelancers, or different team members over time,
              the brand loses coherence. Colors drift. Fonts change. The logo gets stretched. Layouts stop feeling related.
              Beast solves this with brand asset systems.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              A brand asset system is a library of pre-designed, brand-locked templates that your team can use to create
              consistent materials without needing a designer for every request. Social media post templates in Canva or
              Adobe Express. Presentation templates in PowerPoint or Google Slides. Proposal and document templates.
              Email signature designs. Every template is built within your brand guidelines, uses your approved colors
              and fonts, and is locked to prevent off-brand modifications. San Antonio businesses that implement brand
              asset systems reduce design costs, speed up production, and maintain brand consistency across every team
              member and vendor who creates materials on their behalf.
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
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>The brand strategy and identity that guides all design decisions.</p>
            </div>
            <div>
              <a href="/logo-design-san-antonio" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>Logo Design San Antonio</a>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>The centerpiece of your visual identity system.</p>
            </div>
            <div>
              <a href="/services/graphic-design" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>Graphic Design Services</a>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>See the full scope of Beast's graphic design capabilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--dark-bg)', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'var(--dark-text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: '24px', lineHeight: 1.2 }}>
            Need graphic design that elevates your San Antonio brand?
          </h2>
          <p style={{ color: '#aaaaaa', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '17px', marginBottom: '40px' }}>
            Beast creates graphic design that is strategic, consistent, and built to perform everywhere your brand appears.
          </p>
          <a href="/contact" style={{ display: 'inline-block', background: 'var(--pink)', color: '#fff', padding: '16px 40px', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none' }}>
            Start Your Design Project
          </a>
        </div>
      </section>
    </>
  );
}
