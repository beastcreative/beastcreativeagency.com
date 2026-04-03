export const metadata = {
  title: 'AI Consultancy San Antonio | Business Automation & AI Strategy | Beast',
  description: 'Beast Creative Agency offers AI consultancy in San Antonio. Custom AI agents, workflow automation, and AI strategy that saves time and drives growth.',
  alternates: {
    canonical: 'https://www.beastcreativeagency.com/ai-consultancy-san-antonio',
  },
};

export default function AIConsultancyPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--bg)', padding: '120px 0 60px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <p style={{ color: 'var(--green)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 500, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '20px' }}>
              AI Consultancy
            </p>
            <h1 style={{ color: 'var(--text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '24px' }}>
              AI Consultancy & Business Automation in San Antonio
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '18px', lineHeight: '1.7', maxWidth: '680px' }}>
              Beast has built its own AI operations layer from the ground up — a full team of specialized AI agents running alongside our human team. Now we build that infrastructure for clients. If your business is losing hours to manual work and disconnected tools, we can fix that.
            </p>
          </div>
        </div>
      </section>

      {/* What is AI Consultancy */}
      <section style={{ background: 'var(--bg)', padding: '80px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={{ color: 'var(--text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 36px)', letterSpacing: '-0.02em', marginBottom: '20px' }}>
              What Is an AI Consultancy?
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '17px', lineHeight: '1.8', marginBottom: '20px' }}>
              An AI consultancy helps businesses identify where artificial intelligence can replace manual work, accelerate decisions, and create competitive advantage. Unlike software vendors selling a tool, Beast builds custom AI systems tailored to how your specific business operates.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '17px', lineHeight: '1.8' }}>
              We have done this for ourselves first. Beast runs AI agents for SEO research, project management, content production, client reporting, and business development — all coordinated by a central operations layer. We know what works because we live in it every day.
            </p>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section style={{ background: 'var(--bg-surface)', padding: '80px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <h2 style={{ color: 'var(--text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 36px)', letterSpacing: '-0.02em', marginBottom: '48px', maxWidth: '760px' }}>
            What We Build for Clients
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { title: 'AI Operations Audit', body: 'A full review of your business workflows. We identify where you are losing time and money to manual processes and show you exactly what to automate first.' },
              { title: 'Custom AI Agent Builds', body: 'Specialized AI agents built for your specific operations — research, scheduling, content, reporting. Each designed around your actual workflows, not a generic template.' },
              { title: 'Workflow Automation', body: 'Connect your tools, eliminate repetitive tasks, and build automated pipelines that run without constant human intervention. Email, lead routing, reporting, data sync.' },
              { title: 'AI Strategy & Roadmap', body: 'Not ready to build yet? We map your AI opportunity landscape, prioritize by ROI, and give you a phased implementation plan you can execute with any team.' },
            ].map((item) => (
              <div key={item.title} style={{ background: 'var(--bg)', border: '1px solid var(--border)', padding: '32px' }}>
                <h3 style={{ color: 'var(--text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 600, fontSize: '18px', marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '15px', lineHeight: '1.7' }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Beast */}
      <section style={{ background: 'var(--bg)', padding: '80px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 style={{ color: 'var(--text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 36px)', letterSpacing: '-0.02em', marginBottom: '20px' }}>
              Why Beast — Not a Software Vendor
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '17px', lineHeight: '1.8', marginBottom: '20px' }}>
              Software vendors sell seats. We build systems. Our solutions are built around your specific business — your tools, your team, your goals — not a generic platform you have to bend your operations to fit.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '17px', lineHeight: '1.8', marginBottom: '20px' }}>
              Beast is also a marketing agency. Every AI system we build is connected to growth — not just efficiency. We tie automation back to leads, revenue, and brand. That integration is something a pure technology consultancy cannot offer.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '17px', lineHeight: '1.8' }}>
              We serve businesses in San Antonio, Austin, Houston, and across Texas. Engagements range from a one-time AI audit to ongoing AI operations retainers.
            </p>
          </div>
        </div>
      </section>

      {/* Related */}
      <section style={{ background: 'var(--bg-surface)', padding: '60px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '24px' }}>Related Services</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
            {[
              { label: 'Full-Service Marketing', href: '/services' },
              { label: 'SEO Agency San Antonio', href: '/seo-agency-san-antonio' },
              { label: 'Web Design San Antonio', href: '/web-design-development-san-antonio' },
              { label: 'CPG Marketing Agency', href: '/cpg-marketing-agency' },
            ].map((link) => (
              <a key={link.href} href={link.href} style={{ color: 'var(--pink)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '15px', textDecoration: 'none', borderBottom: '1px solid var(--pink)' }}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--dark-bg)', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'var(--dark-text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.02em', marginBottom: '16px' }}>
            Ready to build your AI operations layer?
          </h2>
          <p style={{ color: '#888', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '17px', maxWidth: '560px', margin: '0 auto 40px', lineHeight: '1.7' }}>
            Start with a strategy session. We will identify your highest-impact AI opportunities and show you exactly what to build first.
          </p>
          <a href="/contact" style={{ display: 'inline-block', background: 'var(--pink)', color: '#000', padding: '16px 40px', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none', borderRadius: '999px' }}>
            Start a Conversation
          </a>
        </div>
      </section>
    </>
  );
}
