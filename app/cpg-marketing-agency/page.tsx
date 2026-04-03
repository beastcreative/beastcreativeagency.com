import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CPG Marketing Agency | Consumer Packaged Goods Marketing | Beast',
  description: 'Beast Creative Agency specializes in CPG marketing for food, beverage, and consumer goods brands. National brands trust us for shelf strategy, digital marketing, and brand building.',
  alternates: { canonical: 'https://www.beastcreativeagency.com/cpg-marketing-agency' },
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

export default function CPGMarketingAgencyPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--bg)', padding: '120px 0 80px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <span style={{ color: 'var(--green)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '16px' }}>
            CPG Marketing
          </span>
          <h1 style={{ color: 'var(--text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.1, marginBottom: '24px' }}>
            CPG Marketing Agency for Food, Beverage &amp; Consumer Brands
          </h1>
          <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '17px', lineHeight: '1.75', maxWidth: '680px' }}>
            Beast Creative Agency is a specialized CPG marketing agency with deep experience in food, beverage, seasonings, and
            household consumer goods. We understand the shelf, the retailer buyer, and the consumer. That understanding drives
            everything we build for CPG brands.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>What Is a CPG Marketing Agency?</h2>
            <p style={bodyStyle}>
              A consumer packaged goods marketing agency is a specialized firm that understands the unique dynamics of
              selling products that are manufactured at scale, distributed through retail channels, and purchased repeatedly
              by consumers who are choosing between multiple competing products at the shelf, online, or in both environments
              simultaneously.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              CPG marketing is fundamentally different from service business marketing or software marketing. The purchase
              decision happens in seconds at the shelf or with a scroll in a digital cart. Brand recognition, packaging
              clarity, price point perception, and shelf adjacency all factor in before the consumer even reads the back
              panel. A general marketing agency does not understand these dynamics. A CPG marketing agency like Beast does.
              We know how to build brands that win at the point of decision, whether that decision happens in a grocery
              aisle or an Amazon search results page.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              CPG marketing also requires channel coordination that general marketers often miss. Retail promotion strategy,
              trade marketing materials, shopper marketing programs, DTC digital strategy, and retailer dot-com optimization
              all need to work together with consistent messaging. Beast builds integrated CPG marketing programs that
              connect every channel to a single brand strategy and measure performance across all of them.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section style={{ background: 'var(--bg-surface)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>How Beast Approaches CPG Brand Building</h2>
            <p style={bodyStyle}>
              Beast's approach to CPG brand building starts where every brand decision starts: the consumer. We conduct
              consumer research to understand who buys in your category, what drives their purchase decisions, what
              language they use to describe the products they love, and where they are most open to brand discovery.
              That research informs everything from your packaging claims hierarchy to your TikTok content strategy.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              From the consumer insight, we build brand positioning that defines the specific territory your brand can
              own in the category. This is not a generic positioning statement. It is a precise articulation of who
              your brand is for, what it uniquely delivers, and why the competitor alternatives are not good enough.
              Sharp positioning is what makes a CPG brand memorable on a shelf crowded with alternatives.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              From positioning, we build the full brand expression: visual identity, packaging direction, messaging
              hierarchy, and the digital presence that amplifies and supports the in-store brand experience. Beast
              manages the full brand architecture for CPG clients, ensuring that every marketing touchpoint, from
              a shelf talker to a Facebook ad to a recipe blog post, is coordinated around a single, clear brand
              narrative.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>CPG Digital Marketing: From Shelf to Screen</h2>
            <p style={bodyStyle}>
              CPG digital marketing in 2024 requires a multi-channel strategy that connects in-store presence with
              digital discovery, content marketing, and performance advertising. Beast builds CPG digital programs
              that span the full consumer journey.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              For discovery, we build SEO-optimized recipe and content marketing programs that put your brand in front
              of consumers when they are actively searching for meal solutions, ingredients, and product recommendations.
              Recipe content is one of the most underutilized CPG digital channels. A well-optimized recipe blog can
              drive tens of thousands of monthly organic visits that convert to both DTC sales and retail awareness.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              For conversion, we build DTC e-commerce experiences and Amazon listing optimization that capture demand
              from consumers already looking to buy. We optimize product titles, bullet points, A+ content, and sponsored
              ad campaigns to maximize both organic ranking and paid visibility on Amazon. For retailer dot-com platforms
              like Walmart.com, Kroger.com, and HEB.com, we build and optimize digital shelf content that converts
              online grocery shoppers.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              For retention and advocacy, we build email marketing programs, social media content strategies, and
              community management programs that keep your brand in front of existing customers between purchase
              occasions and turn satisfied buyers into brand advocates.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section style={{ background: 'var(--bg-surface)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>Our CPG Clients &amp; Results</h2>
            <p style={bodyStyle}>
              Beast has worked with CPG brands across food, beverage, seasonings, and baking categories at the national
              level. Our CPG client experience includes work with Williams Foods, the manufacturer behind Pioneer Brand and
              Sun-Bird Seasonings, two national brands with strong retail distribution across major grocery chains.
              We have also worked with Tribeca Oven, a specialty bakery brand, supporting brand strategy and digital
              marketing programs for their retail and foodservice channels.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              These client relationships have given Beast direct experience with the realities of national CPG brand
              management: retailer compliance requirements, packaging spec processes, promotional calendar coordination,
              and the multi-stakeholder approval processes that large CPG organizations require. We understand how to
              move quickly within CPG constraints and deliver work that meets both brand standards and retailer
              requirements.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              Whether you are a regional CPG brand looking to expand retail distribution, a national brand refreshing
              your digital presence, or a startup food brand building from the ground up, Beast brings the category
              experience, strategic rigor, and creative execution capability to build a CPG marketing program that
              drives shelf placement, consumer trial, and repeat purchase.
            </p>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section style={{ background: 'var(--bg)', padding: '80px 0', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <h2 style={{ ...h2Style, marginBottom: '40px' }}>Related Services</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px', maxWidth: '760px' }}>
            <div>
              <a href="/branding-agency-san-antonio" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>Branding</a>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>Build a CPG brand identity that wins on shelf and online.</p>
            </div>
            <div>
              <a href="/services/cpg-marketing" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>CPG Marketing Services</a>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>See our full CPG marketing service capabilities.</p>
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
