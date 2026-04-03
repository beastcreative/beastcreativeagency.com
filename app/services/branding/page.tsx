import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Branding Services San Antonio | Brand Identity & Strategy | Beast',
  description: 'Professional branding services in San Antonio. Brand identity, strategy, visual systems, and messaging that command attention and drive growth.',
  alternates: { canonical: 'https://www.beastcreativeagency.com/services/branding' },
};

const styles = {
  eyebrow: {
    color: 'var(--green)',
    fontFamily: 'var(--font-geist, sans-serif)',
    fontWeight: 700,
    fontSize: '12px',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.12em',
    display: 'block',
    marginBottom: '16px',
  },
  h1: {
    color: 'var(--text)',
    fontFamily: 'var(--font-geist, sans-serif)',
    fontWeight: 700,
    fontSize: 'clamp(36px, 5vw, 56px)',
    lineHeight: 1.1,
    marginBottom: '24px',
  },
  intro: {
    color: 'var(--text-muted)',
    fontFamily: 'var(--font-geist, sans-serif)',
    fontSize: '17px',
    lineHeight: '1.75',
    maxWidth: '680px',
  },
  h2: {
    color: 'var(--text)',
    fontFamily: 'var(--font-geist, sans-serif)',
    fontWeight: 700,
    fontSize: 'clamp(22px, 3vw, 32px)',
    lineHeight: 1.2,
    marginBottom: '20px',
  },
  body: {
    color: 'var(--text-secondary)',
    fontFamily: 'var(--font-geist, sans-serif)',
    fontSize: '17px',
    lineHeight: '1.8',
    maxWidth: '760px',
  },
};

export default function BrandingServicesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--bg)', padding: '120px 0 80px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <span style={styles.eyebrow}>Branding</span>
          <h1 style={styles.h1}>Branding &amp; Identity Services in San Antonio</h1>
          <p style={styles.intro}>
            Your brand is more than a logo. It is the system of trust you build with every customer touchpoint.
            Beast Creative Agency builds brand identities that are strategically grounded, visually distinct, and built to scale.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={styles.h2}>Brand Strategy That Drives Business Results</h2>
            <p style={styles.body}>
              Before a single color is chosen or a logo sketched, great brands start with strategy. Beast begins every branding engagement
              by mapping your competitive landscape, defining your target audience, and establishing a clear positioning statement that
              separates you from every competitor in your category. We identify the gap in the market where your brand can own ground
              and build from there.
            </p>
            <p style={{ ...styles.body, marginTop: '16px' }}>
              Brand strategy at Beast includes audience research, competitive audits, brand archetype definition, voice and tone
              development, and a positioning framework your entire team can align around. This foundation prevents the most common
              branding mistake: building something beautiful that says nothing. When strategy leads, every creative decision has a reason
              behind it, and your brand earns trust faster because it speaks directly to the right people.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section style={{ background: 'var(--bg-surface)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={styles.h2}>Visual Identity Systems Built to Last</h2>
            <p style={styles.body}>
              A visual identity is not just a logo. It is a complete design system that communicates your brand story across every
              medium, from business cards to billboards to digital ads. Beast builds visual identity systems that include your primary
              logo mark, secondary marks, color palette, typography system, iconography style, photography direction, and a
              comprehensive brand guidelines document your team can actually use.
            </p>
            <p style={{ ...styles.body, marginTop: '16px' }}>
              We design for flexibility and durability. Your logo needs to work in full color and in black and white. It needs to scale
              to a favicon and hold up on the side of a truck. Your color palette needs to create contrast and accessibility across
              digital and print. These are not afterthoughts in our process. They are requirements. The brands we build for San Antonio
              businesses are built to look as sharp in five years as they do on launch day.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={styles.h2}>Brand Messaging &amp; Positioning</h2>
            <p style={styles.body}>
              Visual identity gets attention. Messaging earns trust and drives action. Beast develops the full verbal identity of your
              brand: your tagline, your value proposition, your elevator pitch, your website headline hierarchy, and the copy frameworks
              your sales team uses on calls. Consistent messaging is what converts a first impression into a loyal customer.
            </p>
            <p style={{ ...styles.body, marginTop: '16px' }}>
              We build messaging frameworks that articulate what you do, who you do it for, and why it matters better than any competitor
              can. Every phrase is tested against your target audience's actual language. We close the gap between what you think your
              brand says and what your customers actually hear. The result is a brand that communicates clearly and confidently from
              your homepage to your sales deck to your email signatures.
            </p>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section style={{ background: 'var(--bg-surface)', padding: '80px 0', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <h2 style={{ ...styles.h2, marginBottom: '40px' }}>Related Services</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px', maxWidth: '760px' }}>
            <div>
              <a href="/logo-design-san-antonio" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>Logo Design</a>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>Custom logo marks built on strategy and built to last.</p>
            </div>
            <div>
              <a href="/web-design-development-san-antonio" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>Web Design</a>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>Conversion-focused websites that express your brand at every pixel.</p>
            </div>
            <div>
              <a href="/cpg-marketing-agency" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>CPG Marketing</a>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>Specialized branding and marketing for consumer packaged goods brands.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--dark-bg)', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'var(--dark-text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: '24px', lineHeight: 1.2 }}>
            Ready to build a brand worth remembering?
          </h2>
          <p style={{ color: '#aaaaaa', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '17px', marginBottom: '40px' }}>
            Let Beast build a brand identity that earns trust and drives growth.
          </p>
          <a href="/contact" style={{ display: 'inline-block', background: 'var(--pink)', color: '#fff', padding: '16px 40px', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none' }}>
            Start Your Brand Project
          </a>
        </div>
      </section>
    </>
  );
}
