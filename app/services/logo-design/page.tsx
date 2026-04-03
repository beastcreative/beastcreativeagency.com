import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Logo Design San Antonio | Custom Logo & Brand Mark | Beast',
  description: 'Custom logo design in San Antonio. Memorable brand marks built on strategy, not decoration. Beast creates logos that communicate your brand\'s essence instantly.',
  alternates: { canonical: 'https://www.beastcreativeagency.com/services/logo-design' },
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

export default function LogoDesignServicesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--bg)', padding: '120px 0 80px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <span style={{ color: 'var(--green)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '16px' }}>
            Logo Design
          </span>
          <h1 style={{ color: 'var(--text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.1, marginBottom: '24px' }}>
            Logo Design Services in San Antonio
          </h1>
          <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '17px', lineHeight: '1.75', maxWidth: '680px' }}>
            A logo is the shortest story your brand tells. Beast designs logos that are immediately recognizable, strategically
            grounded, and built to work across every medium, from a business card to a billboard.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>Strategy Before Aesthetics</h2>
            <p style={bodyStyle}>
              Every logo decision at Beast starts with strategy. Before we sketch a single concept, we do the research. We study
              your competitive landscape to understand what visual conventions exist in your category, then we find the white space
              where your brand can stand apart. We define your brand archetype, your target audience's preferences, and the
              emotional territory your logo needs to occupy.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              This strategy work is not just process for its own sake. It is what separates a logo that works from a logo that
              looks good in a presentation but falls flat in the real world. When a logo is grounded in positioning strategy,
              every creative decision has a rationale. Colors are chosen because they communicate specific emotions to your specific
              audience. Typefaces are selected because they carry the right personality. Forms are simplified until only what is
              essential remains. The result is a mark that earns attention and communicates instantly.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section style={{ background: 'var(--bg-surface)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>Custom Mark Development</h2>
            <p style={bodyStyle}>
              Beast develops logos across all mark types based on what best serves your brand. Wordmarks for brands where the
              name itself is the asset. Lettermarks for brands with strong initials and complex full names. Logomarks and icons
              for brands that need a standalone visual symbol. Combination marks that work both together and independently.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              Every mark we develop goes through rigorous visual testing. We test for scalability, checking that your logo is
              crisp at 16 pixels and at 10 feet. We test in color, in black and white, and in reverse. We test on light
              backgrounds and dark backgrounds. We review it in its real-world environments: on your product, on your website,
              on a storefront sign, on a phone screen. Only marks that pass every environment test make it to final delivery.
              San Antonio businesses that work with Beast get a logo that is genuinely ready for the world.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>Full Logo Package Delivery</h2>
            <p style={bodyStyle}>
              A logo is not just a file. It is a system of files in every format your brand will ever need. Beast delivers
              complete logo packages that include vector source files in AI and EPS format, web-optimized SVG and PNG files,
              print-ready high-resolution exports, and color variations including full color, monochrome, and reverse versions.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              Every logo package includes a brand guidelines document covering correct and incorrect logo usage, minimum size
              requirements, clear space rules, approved color values in RGB, CMYK, and Hex, and approved typeface pairings.
              This documentation protects the integrity of your logo when it is used by vendors, printers, partners, and
              your own team. You will never have to wonder if something looks right. The guidelines make it definitive.
              Your logo package is organized, labeled, and ready to hand to any vendor the moment it is delivered.
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
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>Full brand identity strategy and visual system beyond the logo.</p>
            </div>
            <div>
              <a href="/graphic-design-san-antonio" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>Graphic Design</a>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>Apply your new logo across all brand touchpoints.</p>
            </div>
            <div>
              <a href="/web-design-development-san-antonio" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>Web Design</a>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>Build a website that showcases your brand identity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--dark-bg)', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'var(--dark-text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: '24px', lineHeight: 1.2 }}>
            Ready for a logo your brand deserves?
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
