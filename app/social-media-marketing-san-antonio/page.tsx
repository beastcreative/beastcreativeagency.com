import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Media Marketing San Antonio | Beast Creative Agency',
  description: 'Strategic social media marketing in San Antonio, TX. Content strategy, community management, and paid social that builds audiences and drives measurable results.',
  alternates: { canonical: 'https://www.beastcreativeagency.com/social-media-marketing-san-antonio' },
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
      description: 'Social media marketing agency in San Antonio, TX providing content strategy, community management, and paid social campaigns.',
    },
    {
      '@type': 'Service',
      name: 'Social Media Marketing San Antonio',
      provider: { '@type': 'LocalBusiness', name: 'Beast Creative Agency' },
      serviceType: 'Social Media Marketing',
      areaServed: 'San Antonio, TX',
      description: 'Strategic social media marketing services in San Antonio including content creation, community management, and paid social advertising.',
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

export default function SocialMediaMarketingSanAntonio() {
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
            Social Media Marketing San Antonio
          </span>
          <h1 style={{ color: 'var(--text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.1, marginBottom: '24px' }}>
            Social Media Marketing in San Antonio, TX
          </h1>
          <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '17px', lineHeight: '1.75', maxWidth: '680px' }}>
            Beast Creative Agency builds social media strategies for San Antonio businesses that go beyond posting. We build
            audiences, drive engagement, and connect social activity directly to revenue.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>Social Media Strategy Built for San Antonio Businesses</h2>
            <p style={bodyStyle}>
              San Antonio is a city with deep community connections, a strong local pride culture, and a growing business
              ecosystem. Social media for San Antonio businesses is not one-size-fits-all. The platforms that work for a
              North Star restaurant in the Stone Oak area are different from the platforms that work for a B2B professional
              services firm downtown. Beast builds social strategies tailored to your specific San Antonio audience and business goals.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              We start with a platform audit and audience analysis that identifies where your best customers actually spend
              time online, what content they engage with, and what their behavior looks like before they make a purchase
              decision. From there, we build a content strategy organized around your business objectives, your brand voice,
              and your competitive position. Every content calendar we develop maps posts to specific goals: brand awareness,
              website traffic, lead generation, or direct sales. San Antonio businesses that work with Beast get a social
              presence that is strategic, not just active.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section style={{ background: 'var(--bg-surface)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>Content Creation &amp; Community Management</h2>
            <p style={bodyStyle}>
              Creating consistent, high-quality social content is a full-time job. Most San Antonio business owners and
              marketing teams are stretched too thin to do it at the standard that social media algorithms and audiences
              require in 2024. Beast handles it completely, from content strategy and copywriting to visual direction and
              community management.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              Our content team creates posts in your brand voice across whatever platforms your strategy requires, whether
              that is Instagram, Facebook, LinkedIn, TikTok, or a combination. We write the captions, develop the visual
              frameworks, manage your content calendar, and publish on the optimal schedule for your audience. We also
              manage your community: responding to comments, handling DMs, engaging with your followers, and monitoring
              your brand mentions across platforms. Social media for San Antonio businesses that work with Beast feels
              genuinely managed, not automated. Because it is.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>Paid Social Advertising in San Antonio</h2>
            <p style={bodyStyle}>
              Organic social builds your brand. Paid social accelerates it. Beast manages paid social campaigns on Meta
              (Facebook and Instagram), TikTok, and LinkedIn for San Antonio businesses that want to reach specific audiences
              with specific offers. We build campaigns around your business objectives, targeting parameters that match
              your ideal San Antonio customer profile, and creative that cuts through the feed.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              Our paid social campaigns are built with full-funnel thinking. Top-of-funnel awareness campaigns that introduce
              your brand to net-new San Antonio audiences. Middle-funnel retargeting campaigns that re-engage people who have
              already shown interest. Bottom-funnel conversion campaigns that move warm audiences to action. Every campaign
              is tracked to real outcomes, not just impressions. We report on the metrics that matter to your business:
              leads, calls, purchases, and return on ad spend. San Antonio businesses that invest in paid social with
              Beast know exactly what their investment is producing.
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
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>Build the brand that makes your social content unmistakable.</p>
            </div>
            <div>
              <a href="/seo-agency-san-antonio" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>SEO San Antonio</a>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>Drive long-term organic traffic alongside your social strategy.</p>
            </div>
            <div>
              <a href="/services/social-media" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>Social Media Services</a>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>See the full scope of Beast's social media capabilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--dark-bg)', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'var(--dark-text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: '24px', lineHeight: 1.2 }}>
            Ready to build a San Antonio social presence that converts?
          </h2>
          <p style={{ color: '#aaaaaa', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '17px', marginBottom: '40px' }}>
            Beast builds social strategies that grow audiences and drive real revenue for San Antonio businesses.
          </p>
          <a href="/contact" style={{ display: 'inline-block', background: 'var(--pink)', color: '#fff', padding: '16px 40px', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none' }}>
            Start Your Social Strategy
          </a>
        </div>
      </section>
    </>
  );
}
