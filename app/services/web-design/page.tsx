import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Design San Antonio | Custom Website Development | Beast',
  description: 'Custom web design and development in San Antonio. Fast, conversion-focused websites built on modern technology that drives leads and revenue.',
  alternates: { canonical: 'https://www.beastcreativeagency.com/services/web-design' },
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

export default function WebDesignServicesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--bg)', padding: '120px 0 80px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <span style={{ color: 'var(--green)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '16px' }}>
            Web Design
          </span>
          <h1 style={{ color: 'var(--text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.1, marginBottom: '24px' }}>
            Web Design &amp; Development in San Antonio
          </h1>
          <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '17px', lineHeight: '1.75', maxWidth: '680px' }}>
            A website that looks good but does not convert is just an expensive brochure. Beast builds websites that are strategically
            designed to turn visitors into customers. Fast, mobile-first, and purpose-built.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>Conversion-Focused Web Design</h2>
            <p style={bodyStyle}>
              Most websites are designed to look impressive in a portfolio. Beast designs websites to move people. Every layout
              decision, every headline, every call-to-action placement is informed by how users actually navigate and make
              decisions online. We study your audience, map your conversion paths, and design with the goal of turning more
              visitors into leads, calls, and sales.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              Our web design process starts with information architecture. We map the full user journey from landing page to
              conversion point before a single design is created. This ensures your site does not just look good on the surface
              but actually guides users toward the actions your business needs. User experience, information hierarchy, visual
              contrast, and mobile behavior are all considered from day one. The result is a site your visitors understand
              immediately and your sales team loves to send people to.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section style={{ background: 'var(--bg-surface)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>Modern Technology Stack</h2>
            <p style={bodyStyle}>
              Beast builds on Next.js, the same framework powering some of the fastest sites on the internet. This means your
              site loads instantly, scores well on Core Web Vitals, and is structured correctly for Google to crawl and rank.
              Performance is not an afterthought. It is baked into the foundation of every site we build.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              Core Web Vitals are now a confirmed Google ranking factor. Slow sites lose rankings and lose visitors before the
              page finishes loading. Beast sites are built for speed, with image optimization, code splitting, server-side
              rendering, and edge delivery built in from the start. We also build with SEO structure in mind: clean URL hierarchies,
              proper heading structure, canonical tags, structured data, and sitemap generation. Your site is SEO-ready on launch
              day, not as an add-on six months later.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>Custom Development, Not Templates</h2>
            <p style={bodyStyle}>
              Template-based websites look like template-based websites. Your customers can tell, even if they cannot say exactly
              why. Beast builds every site from scratch, designed to your specific brand, goals, and audience. You get a site that
              looks and works exactly as your business needs, not a theme with your logo slapped on it.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              Custom development also means custom functionality. Whether you need a complex product configurator, a booking system,
              a customer portal, dynamic content filtering, or third-party API integrations, we build it. Your site grows as your
              business grows. We document everything, keep codebases clean, and build for maintainability so future updates are
              fast and affordable. San Antonio businesses that work with Beast get a digital asset that actually works for them
              instead of a liability they have to manage around.
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
              <a href="/seo-agency-san-antonio" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>SEO Services</a>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>Get your new site ranking on Google from day one.</p>
            </div>
            <div>
              <a href="/branding-agency-san-antonio" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>Branding</a>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>Build the brand identity that drives your web design direction.</p>
            </div>
            <div>
              <a href="/logo-design-san-antonio" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>Logo Design</a>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>Custom logo marks that anchor your site's visual identity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--dark-bg)', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'var(--dark-text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: '24px', lineHeight: 1.2 }}>
            Ready for a website that works as hard as you do?
          </h2>
          <p style={{ color: '#aaaaaa', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '17px', marginBottom: '40px' }}>
            Beast builds custom websites that convert visitors into customers.
          </p>
          <a href="/contact" style={{ display: 'inline-block', background: 'var(--pink)', color: '#fff', padding: '16px 40px', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none' }}>
            Start Your Web Project
          </a>
        </div>
      </section>
    </>
  );
}
