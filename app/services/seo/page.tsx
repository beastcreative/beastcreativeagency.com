import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Services San Antonio | Search Engine Optimization | Beast',
  description: 'Data-driven SEO services in San Antonio. Keyword research, technical SEO, content strategy, and link building that drives organic traffic and qualified leads.',
  alternates: { canonical: 'https://www.beastcreativeagency.com/services/seo' },
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

export default function SEOServicesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--bg)', padding: '120px 0 80px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <span style={{ color: 'var(--green)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '16px' }}>
            Search Engine Optimization
          </span>
          <h1 style={{ color: 'var(--text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.1, marginBottom: '24px' }}>
            SEO Services in San Antonio, Texas
          </h1>
          <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '17px', lineHeight: '1.75', maxWidth: '680px' }}>
            Ranking on Google is not luck. It is architecture. Beast builds SEO strategies around real search data,
            technical precision, and content that earns rankings and keeps them.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>Keyword Research &amp; Competitive Analysis</h2>
            <p style={bodyStyle}>
              Most SEO campaigns fail because they target the wrong keywords. Beast starts every engagement with deep keyword research
              that maps actual search demand to your specific business goals. We analyze what your competitors rank for, where they
              have gaps, and which keywords represent the highest opportunity for your site to gain ground quickly.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              Our keyword research process goes beyond search volume. We look at intent, competition density, current rankings, and
              commercial value. A keyword with 10,000 monthly searches that your competitors dominate is a worse target than a
              keyword with 800 monthly searches where your site can move to page one in 60 days. We find those opportunities and
              build your entire content and link strategy around them. San Antonio businesses we work with see measurable ranking
              improvements within the first 90 days.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section style={{ background: 'var(--bg-surface)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>Technical SEO &amp; Site Architecture</h2>
            <p style={bodyStyle}>
              A beautiful website that Google cannot crawl is invisible. Technical SEO is the foundation that makes everything else
              work. Beast conducts comprehensive technical audits covering crawlability, indexation, site speed, Core Web Vitals,
              schema markup, canonical structure, mobile usability, and internal link architecture.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              We fix issues that block Google from understanding your site, then build the structure that helps it understand and
              reward your content. This includes implementing structured data that can earn featured snippets, optimizing your
              site speed to meet Google's performance thresholds, and building a canonical URL strategy that prevents duplicate
              content from diluting your ranking power. Technical SEO is not a one-time audit. It is ongoing maintenance that
              keeps your foundation solid as Google's algorithm evolves.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>Content Strategy That Ranks</h2>
            <p style={bodyStyle}>
              Content is how you earn rankings at scale. Beast builds content strategies around topic clusters, which means
              instead of publishing random blog posts, we build interconnected content hubs that establish your site as the
              authoritative source on topics your customers are searching. Each piece of content has a specific keyword target,
              an internal linking role, and a business objective.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              Our content strategy process maps every page on your site to a keyword opportunity, then fills the gaps with new
              content designed to rank and convert. We optimize existing content that is underperforming, consolidate pages that
              are splitting ranking power, and create new content that targets the featured snippet position above standard organic
              results. The result is a content ecosystem that compounds over time, driving more traffic with every new piece
              rather than starting from scratch each month.
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
              <a href="/web-design-development-san-antonio" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>Web Design</a>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>SEO-ready websites built for speed, performance, and conversion.</p>
            </div>
            <div>
              <a href="/social-media-marketing-san-antonio" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>Social Media Marketing</a>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>Amplify your content reach across social platforms that matter.</p>
            </div>
            <div>
              <a href="/cpg-marketing-agency" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>CPG Marketing</a>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>SEO and content strategies built for consumer goods brands.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--dark-bg)', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'var(--dark-text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: '24px', lineHeight: 1.2 }}>
            Ready to rank where your customers are searching?
          </h2>
          <p style={{ color: '#aaaaaa', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '17px', marginBottom: '40px' }}>
            Beast builds SEO programs that drive compounding organic growth.
          </p>
          <a href="/contact" style={{ display: 'inline-block', background: 'var(--pink)', color: '#fff', padding: '16px 40px', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none' }}>
            Start Your SEO Strategy
          </a>
        </div>
      </section>
    </>
  );
}
