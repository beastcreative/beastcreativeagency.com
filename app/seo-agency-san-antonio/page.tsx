import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Agency San Antonio | Search Engine Optimization | Beast',
  description: 'Beast Creative Agency is San Antonio\'s data-driven SEO agency. Keyword research, technical SEO, and content strategy that drives organic traffic and qualified leads.',
  alternates: { canonical: 'https://www.beastcreativeagency.com/seo-agency-san-antonio' },
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
      description: 'Full-service SEO agency in San Antonio, TX specializing in keyword research, technical SEO, and content strategy.',
    },
    {
      '@type': 'Service',
      name: 'SEO Agency San Antonio',
      provider: { '@type': 'LocalBusiness', name: 'Beast Creative Agency' },
      serviceType: 'Search Engine Optimization',
      areaServed: 'San Antonio, TX',
      description: 'Data-driven SEO services in San Antonio including keyword research, technical SEO audits, content strategy, and link building.',
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

export default function SEOAgencySanAntonio() {
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
            SEO Agency San Antonio
          </span>
          <h1 style={{ color: 'var(--text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.1, marginBottom: '24px' }}>
            SEO Agency in San Antonio, TX
          </h1>
          <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '17px', lineHeight: '1.75', maxWidth: '680px' }}>
            Beast Creative Agency is San Antonio's SEO agency built on real data, technical precision, and content that earns
            rankings. We build SEO programs that drive compounding organic traffic and qualified leads for local and national businesses.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>San Antonio SEO: Local Rankings That Drive Real Business</h2>
            <p style={bodyStyle}>
              Ranking on the first page of Google for San Antonio search queries is one of the highest-value marketing
              investments a local business can make. When someone searches "marketing agency San Antonio" or
              "web design San Antonio" and finds your business, they are already looking for what you sell.
              That is a warm lead at zero cost per click.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              Beast builds San Antonio SEO strategies that target the specific keywords your ideal customers are searching,
              optimize your Google Business Profile for local pack rankings, build the local citation and link profile that
              Google requires to trust your local relevance, and create the content depth that separates first-page results
              from page two results. Local SEO in San Antonio is competitive in most industries, but most of your competitors
              are not doing the technical and content work correctly. Beast finds those gaps and exploits them. Our San Antonio
              clients see measurable movement in local rankings within the first 90 days of engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section style={{ background: 'var(--bg-surface)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>Technical SEO That Fixes What Holds You Back</h2>
            <p style={bodyStyle}>
              Most San Antonio businesses have technical SEO problems on their website that they are not aware of. Crawl
              errors that prevent Google from indexing key pages. Duplicate content issues that dilute ranking power. Site
              speed problems that trigger Google's performance penalties and cause visitors to leave before the page loads.
              Missing or incorrect structured data that costs you featured snippet opportunities. Beast finds all of it.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              Our technical SEO audits cover over 150 checkpoints across crawlability, indexation, site architecture,
              page speed, Core Web Vitals, mobile usability, schema markup, canonical structure, and internal linking.
              We prioritize every issue by its impact on rankings and fix them in order of importance. For many San Antonio
              businesses, fixing technical SEO problems alone produces significant ranking improvements before any new
              content is created. Technical SEO is the foundation. Without it, everything else you invest in content
              and links is less effective than it should be.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>Content Strategy That Earns San Antonio Rankings</h2>
            <p style={bodyStyle}>
              Content is the long game in SEO, and it is the game that compounds. Beast builds content strategies for
              San Antonio businesses that are organized around topic clusters: interconnected groups of content that
              establish your site as the most comprehensive and authoritative source on the topics your customers search.
              This is how you build sustainable rankings that are difficult for competitors to displace.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              Every piece of content we develop for your San Antonio SEO program targets a specific keyword, fills a
              specific gap in your current content coverage, and plays a specific role in your internal link structure.
              Nothing is random. We optimize existing content that is underperforming, consolidate pages that are
              splitting your ranking authority, and create new content that targets the questions your San Antonio
              audience is actively searching. Over time, this content ecosystem drives more organic traffic every month
              without proportional increases in ongoing investment. It is the marketing channel that pays for itself.
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
              <a href="/web-design-development-san-antonio" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>Web Design San Antonio</a>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>SEO-ready websites that drive leads and revenue.</p>
            </div>
            <div>
              <a href="/social-media-marketing-san-antonio" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>Social Media San Antonio</a>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>Amplify your content across social channels that matter.</p>
            </div>
            <div>
              <a href="/services/seo" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>SEO Services Overview</a>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>See the full scope of Beast's SEO capabilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--dark-bg)', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'var(--dark-text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: '24px', lineHeight: 1.2 }}>
            Ready to rank where your San Antonio customers are searching?
          </h2>
          <p style={{ color: '#aaaaaa', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '17px', marginBottom: '40px' }}>
            Beast builds SEO programs that drive compounding organic growth for San Antonio businesses.
          </p>
          <a href="/contact" style={{ display: 'inline-block', background: 'var(--pink)', color: '#fff', padding: '16px 40px', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none' }}>
            Start Your SEO Strategy
          </a>
        </div>
      </section>
    </>
  );
}
