import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Choose Beast Creative Agency | San Antonio Marketing',
  description: 'Discover what makes Beast Creative Agency different. AI-native operations, senior team, strategy-first approach, and real results for San Antonio brands.',
  alternates: { canonical: 'https://www.beastcreativeagency.com/why-choose-beast-creative-agency' },
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

export default function WhyChooseBeastPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--bg)', padding: '120px 0 80px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <span style={{ color: 'var(--green)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '16px' }}>
            Why Beast
          </span>
          <h1 style={{ color: 'var(--text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.1, marginBottom: '24px' }}>
            Why Choose Beast Creative Agency
          </h1>
          <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '17px', lineHeight: '1.75', maxWidth: '680px' }}>
            Every agency says they are different. Here is what actually makes Beast different, and why San Antonio businesses
            that work with us get results that other agencies cannot match.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>We Are Strategy-First, Not Order-Takers</h2>
            <p style={bodyStyle}>
              Most agencies take orders. You say you need a new logo, they make a logo. You say you need a new website,
              they build a website. You say you need more social posts, they create more social posts. The problem with
              order-taking is that it assumes the client always knows the right solution to their own marketing problem.
              They often do not. And that is not a criticism. Running a business is hard. Marketing strategy is a
              specialist skill. Beast provides that skill.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              When you come to Beast with a logo request, we ask why before we ask what. When you come with a website
              project, we start with your conversion goals before we touch a design tool. When you bring us a social
              media challenge, we dig into your audience and business objectives before we recommend a platform or
              content strategy. This approach takes a little more time upfront. It saves a lot of time and money
              downstream by making sure we are solving the right problem. Every deliverable Beast produces has a
              strategic rationale behind it. That rationale is why our work performs instead of just looking good.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section style={{ background: 'var(--bg-surface)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>AI-Powered Operations at Every Layer</h2>
            <p style={bodyStyle}>
              Beast is built as an AI-native agency. That means AI tools and agents are not a feature we are adding.
              They are built into how we work at every layer: research, strategy development, content production,
              reporting, and project coordination. This gives Beast a structural advantage over traditional agencies
              that are trying to retrofit AI into old processes.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              What does AI-native mean for you as a client? It means faster delivery. It means more research depth
              at the same price point. It means your account gets more attention because our senior team members are
              spending their time on strategy and judgment, not on production tasks that AI handles better and faster
              anyway. Beast can produce a comprehensive competitive research report in hours that would take a
              traditional research team days. We can generate and test content variations at a scale that traditional
              content agencies cannot match. We can pull together reporting and analysis weekly instead of monthly.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              AI-native does not mean AI-only. Every piece of work Beast produces is directed, reviewed, and refined
              by experienced senior practitioners. The judgment, the strategy, and the creative direction are human.
              The production efficiency is AI. That combination is what makes Beast different from both traditional
              agencies and from AI content farms that produce cheap, low-quality output.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>Senior Team, Not Junior Handoffs</h2>
            <p style={bodyStyle}>
              One of the most common complaints about working with marketing agencies is the bait-and-switch: senior
              talent pitches the work, junior talent does the work, and the client does not find out until the first
              delivable misses the mark. Beast does not operate that way. The people who assess your business and
              propose a strategy are the people who execute it.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              Every Beast client account is managed by senior practitioners with deep expertise in their domain.
              Brand strategy is done by people who have built brands. Web development is done by developers who have
              shipped production-grade applications. SEO is done by practitioners who have moved sites from page
              three to page one. Content is produced by writers who understand marketing, not just grammar. This
              is not a staffing pitch. It is a quality standard. Junior-led work requires more revision cycles,
              produces less consistent results, and costs the client more in the long run even when the hourly
              rate looks lower. Beast's senior-led model produces better work faster with fewer revision cycles.
              That is the actual value.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section style={{ background: 'var(--bg-surface)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>We Measure Everything</h2>
            <p style={bodyStyle}>
              Marketing that cannot be measured is not marketing. It is spending. Beast builds measurement into every
              engagement from day one. Before we start any program, we define the metrics that matter to your business
              and build the tracking infrastructure to capture them. Not vanity metrics. Not activity metrics. Business
              outcome metrics: leads generated, cost per lead, conversion rate, revenue attributed to marketing channels,
              return on ad spend, organic traffic growth, keyword ranking movement.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              We report on these metrics consistently, clearly, and honestly. If something is working, we scale it.
              If something is not working, we say so and we fix it. We do not hide behind impressions and engagement
              rates when a campaign is not producing business results. Our clients always know what their marketing
              investment is producing because we make sure they can see it clearly. Measurement is also how we improve
              over time. Every campaign, every content piece, every ad creative is tracked. The data informs the next
              decision. Over time, this creates a compounding improvement effect: each month Beast is working with
              your data gets more effective than the last.
            </p>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section style={{ background: 'var(--bg)', padding: '80px 0', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <h2 style={{ ...h2Style, marginBottom: '40px' }}>Explore More</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px', maxWidth: '760px' }}>
            <div>
              <a href="/about" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>About Beast</a>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>The story, the team, and the approach behind Beast Creative Agency.</p>
            </div>
            <div>
              <a href="/services" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>Our Services</a>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>See the full range of what Beast builds for clients.</p>
            </div>
            <div>
              <a href="/contact" style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>Contact Us</a>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '14px', marginTop: '6px', lineHeight: '1.6' }}>Start a conversation about what we can build together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--dark-bg)', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'var(--dark-text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: '24px', lineHeight: 1.2 }}>
            Ready to work with an agency that actually moves the needle?
          </h2>
          <p style={{ color: '#aaaaaa', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '17px', marginBottom: '40px' }}>
            Tell us about your business and we will tell you exactly how we would approach it.
          </p>
          <a href="/contact" style={{ display: 'inline-block', background: 'var(--pink)', color: '#fff', padding: '16px 40px', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none' }}>
            Start the Conversation
          </a>
        </div>
      </section>
    </>
  );
}
