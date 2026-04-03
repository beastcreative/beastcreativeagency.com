import ServiceCard from '@/components/ServiceCard';
import CTAButton from '@/components/CTAButton';

export const metadata = {
  title: 'Digital Marketing Services | Beast Creative Agency San Antonio',
  description: 'Full-service digital marketing: SEO, branding, web design, social media, graphic design, and logo design. Beast Creative Agency, San Antonio TX.',
};

const serviceIcons = {
  seo: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="40" height="40">
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
    </svg>
  ),
  branding: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="40" height="40">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
    </svg>
  ),
  webDesign: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="40" height="40">
      <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/>
    </svg>
  ),
  socialMedia: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="40" height="40">
      <path d="M17 2h-3a5 5 0 0 0-5 5v3H7v4h2v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  ),
  graphicDesign: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="40" height="40">
      <circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/>
      <circle cx="6.5" cy="12.5" r=".5"/>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
    </svg>
  ),
  logoDesign: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="40" height="40">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  ),
  cpg: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="40" height="40">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 01-8 0"/>
    </svg>
  ),
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--bg)', padding: '100px 0 60px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ maxWidth: '700px' }}>
            <span style={{ color: '#ff1198', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '16px' }}>
              Our Services
            </span>
            <h1 style={{ color: 'var(--text)', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(32px, 5vw, 56px)', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '24px' }}>
              Full-Service Digital Marketing
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontFamily: 'Raleway, sans-serif', fontSize: '18px', lineHeight: '1.7', marginBottom: '40px' }}>
              From strategy to execution, we provide every service your brand needs to dominate the digital landscape.
            </p>
            <CTAButton href="/contact">Get a Free Assessment</CTAButton>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            <ServiceCard
              icon={serviceIcons.seo}
              title="Search Engine Optimization"
              description="Dominate Google rankings with data-driven SEO strategies that drive qualified organic traffic and long-term revenue growth."
              href="/services/seo"
            />
            <ServiceCard
              icon={serviceIcons.branding}
              title="Branding"
              description="Build a brand identity that commands attention and connects with your ideal audience on every touchpoint."
              href="/services/branding"
            />
            <ServiceCard
              icon={serviceIcons.webDesign}
              title="Web Design and Development"
              description="Custom websites that convert visitors into customers - fast, mobile-first, and goal-focused."
              href="/services/web-design"
            />
            <ServiceCard
              icon={serviceIcons.socialMedia}
              title="Social Media Marketing"
              description="Grow your community and drive revenue with strategic social media content and paid advertising."
              href="/services/social-media"
            />
            <ServiceCard
              icon={serviceIcons.graphicDesign}
              title="Graphic Design"
              description="Visually stunning design across print, digital, and social media that elevates your brand."
              href="/services/graphic-design"
            />
            <ServiceCard
              icon={serviceIcons.logoDesign}
              title="Logo Design"
              description="Memorable logos that capture your brand essence and make a lasting first impression."
              href="/services/logo-design"
            />
            <ServiceCard
              icon={serviceIcons.cpg}
              title="CPG Marketing"
              description="Consumer packaged goods marketing that gets your products onto shelves and into shopping carts."
              href="/services/cpg-marketing"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#ff1198', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'var(--text)', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 48px)', textTransform: 'uppercase', marginBottom: '20px' }}>
            Not Sure Where to Start?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'Raleway, sans-serif', fontSize: '18px', maxWidth: '600px', margin: '0 auto 40px', lineHeight: '1.7' }}>
            Get a free marketing assessment and we will tell you exactly where your biggest opportunities are.
          </p>
          <a href="/contact"
            style={{ display: 'inline-block', background: '#000', color: 'var(--text)', padding: '16px 40px', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.08em', borderRadius: 0, textDecoration: 'none' }}>
            Get My Free Assessment
          </a>
        </div>
      </section>
    </>
  );
}
