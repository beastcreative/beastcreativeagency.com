import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Graphic Design San Antonio | Professional Design Services | Beast',
  description: 'Professional graphic design services in San Antonio. Print, digital, and social media design that elevates your brand across every touchpoint.',
  alternates: { canonical: 'https://www.beastcreativeagency.com/services/graphic-design' },
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

export default function GraphicDesignServicesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--bg)', padding: '120px 0 80px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <span style={{ color: 'var(--green)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '16px' }}>
            Graphic Design
          </span>
          <h1 style={{ color: 'var(--text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.1, marginBottom: '24px' }}>
            Graphic Design Services in San Antonio
          </h1>
          <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '17px', lineHeight: '1.75', maxWidth: '680px' }}>
            Good design is invisible. It communicates without friction. Beast's design team creates visual assets across print,
            digital, and social that carry your brand consistently from first impression to final sale.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>Print &amp; Collateral Design</h2>
            <p style={bodyStyle}>
              Print materials are often the first physical touchpoint between your brand and a potential customer. Business cards,
              brochures, flyers, sell sheets, signage, trade show materials, packaging, and direct mail. Each one is a brand
              statement. Each one needs to carry the same quality and consistency as your digital presence.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              Beast designs print collateral that is production-ready, print-specification correct, and brand-aligned. We work
              with your print vendors or recommend vetted San Antonio and national printers that meet the quality standards your
              brand requires. Every file we deliver comes print-ready: correct color profiles, appropriate bleed and margin settings,
              and the right resolution for the intended print size. No surprises at the printer. Your materials look as good in
              hand as they do on screen.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section style={{ background: 'var(--bg-surface)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>Digital &amp; Social Design</h2>
            <p style={bodyStyle}>
              Digital advertising, email marketing, social media graphics, web banners, and display ads all require design that
              performs under intense competition for attention. Beast creates digital assets optimized for their specific
              environment, whether that is a Facebook feed, a Google Display Network banner, an email header, or a LinkedIn
              sponsored post.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              Digital design at Beast is strategic, not just aesthetic. We consider how each asset competes in its environment,
              what the user is doing when they encounter it, and what action they need to take next. Copy hierarchy, color contrast,
              and call-to-action placement are tested and refined. We build social media template libraries that let your team
              create on-brand content independently, so your design investment compounds long after the initial engagement ends.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>Brand Asset Systems</h2>
            <p style={bodyStyle}>
              One-off design projects are expensive and inconsistent. Brand asset systems are the investment that pays for
              themselves. Beast builds design systems that include template libraries for every recurring design need your
              business has: social posts, presentations, proposals, email headers, ad creative, and signage.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              Every template is built within your brand guidelines, locked to your color palette and typography, and designed
              to be used by non-designers on your team without breaking the brand. We deliver in Canva, Adobe Creative Cloud,
              Figma, or whatever tools your team already uses. A brand asset system means you never start from scratch again.
              Every piece of communication your company produces looks like it came from the same place, because it did.
              That consistency is what makes brands feel large, credible, and trustworthy.
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
              <a href="/branding-agency-san-antonio" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>Branding</a>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>The brand strategy and identity that guides all design decisions.</p>
            </div>
            <div>
              <a href="/logo-design-san-antonio" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>Logo Design</a>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>The centerpiece of your visual identity system.</p>
            </div>
            <div>
              <a href="/web-design-development-san-antonio" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>Web Design</a>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>Bring your brand design into a high-converting website.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--dark-bg)', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'var(--dark-text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: '24px', lineHeight: 1.2 }}>
            Need design that elevates your brand everywhere it appears?
          </h2>
          <p style={{ color: '#aaaaaa', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '17px', marginBottom: '40px' }}>
            Beast creates graphic design that is strategic, consistent, and built to perform.
          </p>
          <a href="/contact" style={{ display: 'inline-block', background: 'var(--pink)', color: '#fff', padding: '16px 40px', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none' }}>
            Start Your Design Project
          </a>
        </div>
      </section>
    </>
  );
}
