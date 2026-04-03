import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Design San Antonio | Custom Website Development | Beast',
  description: 'Custom web design and development in San Antonio, TX. Fast, conversion-focused websites built on modern technology that drives leads and revenue for your business.',
  alternates: { canonical: 'https://www.beastcreativeagency.com/web-design-development-san-antonio' },
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
      description: 'Web design and development agency in San Antonio, TX building custom, conversion-focused websites.',
    },
    {
      '@type': 'Service',
      name: 'Web Design Development San Antonio',
      provider: { '@type': 'LocalBusiness', name: 'Beast Creative Agency' },
      serviceType: 'Web Design & Development',
      areaServed: 'San Antonio, TX',
      description: 'Custom web design and development services in San Antonio including UX design, Next.js development, and conversion optimization.',
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

export default function WebDesignDevelopmentSanAntonio() {
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
            Web Design Development San Antonio
          </span>
          <h1 style={{ color: 'var(--text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.1, marginBottom: '24px' }}>
            Web Design &amp; Development in San Antonio, TX
          </h1>
          <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '17px', lineHeight: '1.75', maxWidth: '680px' }}>
            Beast Creative Agency builds custom websites for San Antonio businesses that are strategically designed to convert
            visitors into customers. Fast, mobile-first, SEO-ready, and purpose-built for your specific business goals.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>San Antonio Web Design That Converts, Not Just Impresses</h2>
            <p style={bodyStyle}>
              San Antonio businesses lose leads every day to websites that look decent but do not convert. The visitor
              arrives, cannot figure out what the business does or why they should care, and leaves within seconds.
              That is not a traffic problem. That is a design and messaging problem. Beast solves it.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              Every website Beast builds for San Antonio clients starts with conversion strategy. We map the user journey
              from the first click to the conversion point, identify every friction point in between, and design the site
              to remove them. Information architecture, headline hierarchy, call-to-action placement, trust signals, and
              mobile experience are all designed with the conversion outcome in mind. San Antonio businesses that work with
              Beast get websites that generate leads from day one, not just traffic. A beautiful website that does not
              produce business results is not a success. Beast measures success by the revenue your site produces.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section style={{ background: 'var(--bg-surface)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>Modern Web Development Technology for San Antonio Sites</h2>
            <p style={bodyStyle}>
              Beast builds San Antonio websites on Next.js, the modern React framework that delivers the performance,
              scalability, and SEO capabilities that today's businesses require. Next.js sites load faster, perform better
              on Core Web Vitals, and are structured correctly for Google to crawl and rank from launch day.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              Page speed is not just a user experience issue. It is a Google ranking factor. Sites that fail Core Web
              Vitals benchmarks are actively penalized in search rankings. Beast sites are built to meet and exceed
              Google's performance thresholds by default, not as an afterthought. We use server-side rendering, image
              optimization, code splitting, and edge delivery to achieve load times that keep visitors engaged and search
              engines satisfied. Every San Antonio site we build also includes full SEO technical infrastructure: clean
              URL structures, proper heading hierarchy, canonical tags, sitemap generation, and structured data markup.
              Your site is search-engine-ready on day one.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>Custom Development for San Antonio Businesses, Not Templates</h2>
            <p style={bodyStyle}>
              Template websites are built for no one in particular, which means they work for no one specifically. San
              Antonio businesses have specific goals, specific audiences, and specific competitive situations that generic
              templates cannot address. Beast builds every site from scratch, designed and developed to your exact
              requirements.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              Custom development means custom functionality. If your San Antonio business needs a booking system, a
              customer portal, a product configurator, an API integration with your CRM, or any other custom feature,
              Beast builds it. We also build for long-term maintainability: clean code, comprehensive documentation,
              and development practices that make future updates fast and affordable. You should not have to rebuild
              your website every time your business evolves. Beast builds sites that grow with you. San Antonio businesses
              that invest in custom web development with Beast get a digital asset that works for their business for
              years, not a liability they have to manage around.
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
              <a href="/seo-agency-san-antonio" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>SEO San Antonio</a>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>Get your new site ranking on Google from day one.</p>
            </div>
            <div>
              <a href="/branding-agency-san-antonio" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>Branding San Antonio</a>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>Build the brand identity that your web design expresses.</p>
            </div>
            <div>
              <a href="/services/web-design" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>Web Design Services</a>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>See the full scope of Beast's web design capabilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--dark-bg)', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'var(--dark-text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: '24px', lineHeight: 1.2 }}>
            Ready for a San Antonio website that works as hard as you do?
          </h2>
          <p style={{ color: '#aaaaaa', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '17px', marginBottom: '40px' }}>
            Beast builds custom websites that convert San Antonio visitors into customers.
          </p>
          <a href="/contact" style={{ display: 'inline-block', background: 'var(--pink)', color: '#fff', padding: '16px 40px', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none' }}>
            Start Your Web Project
          </a>
        </div>
      </section>
    </>
  );
}
