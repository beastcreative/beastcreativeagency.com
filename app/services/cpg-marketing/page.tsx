import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CPG Marketing Services | Consumer Packaged Goods Agency | Beast',
  description: 'Specialized CPG marketing services for food, beverage, and consumer goods brands. Strategy, branding, and digital marketing that drives shelf placement and sales.',
  alternates: { canonical: 'https://www.beastcreativeagency.com/services/cpg-marketing' },
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

export default function CPGMarketingServicesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--bg)', padding: '120px 0 80px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <span style={{ color: 'var(--green)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '16px' }}>
            CPG Marketing
          </span>
          <h1 style={{ color: 'var(--text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.1, marginBottom: '24px' }}>
            CPG Marketing Services for Food &amp; Beverage Brands
          </h1>
          <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '17px', lineHeight: '1.75', maxWidth: '680px' }}>
            Consumer packaged goods marketing requires a different playbook. Beast has worked with national CPG brands across
            food, beverage, and household products. We understand the shelf, the retailer, and the consumer.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>CPG Brand Strategy &amp; Positioning</h2>
            <p style={bodyStyle}>
              In CPG, you have seconds on the shelf and milliseconds in a feed. Your brand positioning needs to communicate
              value instantly and give a shopper a reason to reach for your product over every alternative in the aisle.
              Beast builds CPG brand strategies that start with deep category analysis, consumer insight research, and
              a clear articulation of your competitive differentiation.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              We develop shelf strategy that considers the physical environment where your product competes, including
              packaging messaging hierarchy, front-panel communication priorities, and secondary packaging claims. We also
              build retailer pitch support, including sell sheets, presentation decks, and trade marketing materials that
              help your sales team open new retail doors. CPG brand strategy at Beast is built to serve both the consumer
              who picks up your product and the retailer buyer who decides whether it gets on the shelf.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section style={{ background: 'var(--bg-surface)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>Digital Marketing for Consumer Brands</h2>
            <p style={bodyStyle}>
              CPG brands today sell through multiple channels simultaneously: grocery retail, club stores, specialty retailers,
              direct-to-consumer e-commerce, and Amazon. Each channel requires a different digital marketing strategy.
              Beast builds channel-specific digital programs that drive awareness, trial, and repeat purchase across all
              of them.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              For DTC channels, we develop conversion-focused landing pages, email marketing sequences, subscription retention
              programs, and paid acquisition campaigns. For Amazon, we optimize product listings, A+ content, and sponsored
              ad campaigns. For retailer pages on major grocery platforms, we build content that converts digital shelf
              shoppers. Recipe and content marketing is a particular strength, creating the kind of usage inspiration
              content that drives purchase intent and builds long-term brand affinity with home cooks and food enthusiasts.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>CPG Content &amp; Creative</h2>
            <p style={bodyStyle}>
              CPG brands live and die by content. Product photography, recipe development, lifestyle imagery, social media
              content, email creative, and ad creative all need to communicate appetite appeal and brand personality simultaneously.
              Beast provides creative direction and production management for CPG content that performs across every channel.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              We develop recipe content that earns organic search traffic, drives email engagement, and converts social media
              audiences into first-time purchasers. We direct product photography shoots that deliver assets usable across
              packaging, retail, digital, and print without reshooting for each medium. Our email marketing programs for
              CPG brands include new product announcements, seasonal campaigns, loyalty content, and win-back sequences that
              keep your brand top of mind between purchase occasions. The goal is always the same: drive purchase, drive repeat,
              build a brand worth advocating for.
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
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>Build a CPG brand identity that wins on shelf and online.</p>
            </div>
            <div>
              <a href="/cpg-marketing-agency" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>CPG Agency Overview</a>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>Learn more about Beast's full CPG marketing capabilities.</p>
            </div>
            <div>
              <a href="/seo-agency-san-antonio" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>SEO Services</a>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>Drive organic traffic to your CPG brand's digital presence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--dark-bg)', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'var(--dark-text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: '24px', lineHeight: 1.2 }}>
            Ready to grow your CPG brand on shelf and online?
          </h2>
          <p style={{ color: '#aaaaaa', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '17px', marginBottom: '40px' }}>
            Beast knows CPG. Let us build the strategy that drives your next growth phase.
          </p>
          <a href="/contact" style={{ display: 'inline-block', background: 'var(--pink)', color: '#fff', padding: '16px 40px', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none' }}>
            Talk to Our CPG Team
          </a>
        </div>
      </section>
    </>
  );
}
