import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Media Marketing San Antonio | Beast Creative Agency',
  description: 'Strategic social media marketing in San Antonio. Content strategy, community management, and paid social that builds audiences and drives measurable results.',
  alternates: { canonical: 'https://www.beastcreativeagency.com/services/social-media' },
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

export default function SocialMediaServicesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--bg)', padding: '120px 0 80px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <span style={{ color: 'var(--green)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '16px' }}>
            Social Media
          </span>
          <h1 style={{ color: 'var(--text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.1, marginBottom: '24px' }}>
            Social Media Marketing in San Antonio
          </h1>
          <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '17px', lineHeight: '1.75', maxWidth: '680px' }}>
            Social media that does not connect to revenue is just noise. Beast builds social strategies that grow the right audience,
            create genuine engagement, and move people toward a purchase.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>Content Strategy &amp; Creation</h2>
            <p style={bodyStyle}>
              Posting without a strategy is how brands burn time and budget without results. Beast builds content strategies
              anchored to your business goals and your audience's actual behavior on each platform. We develop monthly content
              calendars that map every post to a goal, whether that is awareness, engagement, traffic, or direct conversion.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              Every piece of content we create starts with creative direction, not a random idea. We write copy that sounds like
              your brand, not like a corporate social team. We develop visual direction and design templates that keep your feed
              cohesive and recognizable. For video-first platforms like TikTok and Instagram Reels, we develop scripting frameworks
              and hook formulas that maximize watch time. Content strategy is not just what you post. It is how each piece fits
              into the larger story your brand is telling month over month.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section style={{ background: 'var(--bg-surface)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>Community Management &amp; Growth</h2>
            <p style={bodyStyle}>
              Social media is a two-way channel. Brands that broadcast without listening lose their audience fast. Beast manages
              your community with genuine engagement, responding to comments, handling DMs, monitoring brand mentions, and
              proactively engaging with content in your niche to grow your reach organically.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              Community management is also brand protection. How you respond to a complaint or a critical comment in public shapes
              how your entire audience perceives your brand. Beast manages these interactions with the same voice and values as
              your brand identity, turning difficult moments into demonstrations of character. Growth on social is a byproduct of
              consistent, authentic engagement. We build the systems and habits that compound over time, growing an audience of
              people who actually want to hear from your brand and buy from your business.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>Paid Social &amp; Amplification</h2>
            <p style={bodyStyle}>
              Organic social builds your brand long-term. Paid social accelerates results now. Beast runs paid campaigns on Meta,
              TikTok, and LinkedIn that are built around your specific business objectives. Lead generation, traffic, retargeting,
              product sales, event registrations. We match the platform to the goal and the audience to the message.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              Paid social at Beast is not set-and-forget. We test creative, refine audiences, and optimize bids weekly. Every
              campaign is tracked to the outcome that matters to your business, not just impressions and clicks. We build
              attribution models that show you what the paid social investment is actually producing in real business results.
              When organic and paid social work together with a consistent strategy, the compounding effect on your brand
              awareness and lead volume is significant.
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
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>Build the brand identity that makes your social content unmistakable.</p>
            </div>
            <div>
              <a href="/seo-agency-san-antonio" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>SEO Services</a>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>Drive long-term organic traffic alongside your social strategy.</p>
            </div>
            <div>
              <a href="/web-design-development-san-antonio" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>Web Design</a>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>Send social traffic to a site that actually converts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--dark-bg)', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'var(--dark-text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: '24px', lineHeight: 1.2 }}>
            Ready to build a social presence that actually converts?
          </h2>
          <p style={{ color: '#aaaaaa', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '17px', marginBottom: '40px' }}>
            Beast builds social strategies that grow audiences and drive real revenue.
          </p>
          <a href="/contact" style={{ display: 'inline-block', background: 'var(--pink)', color: '#fff', padding: '16px 40px', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none' }}>
            Start Your Social Strategy
          </a>
        </div>
      </section>
    </>
  );
}
