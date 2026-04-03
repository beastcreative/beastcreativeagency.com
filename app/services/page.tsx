import ServicesRow from '@/components/ServicesRow';

export const metadata = {
  title: 'Digital Marketing Services | Beast Creative Agency San Antonio',
  description: 'Full-service digital marketing: branding, CPG marketing, web design, SEO, social media, graphic design, and logo design. Beast Creative Agency, San Antonio TX.',
};

const servicesList = [
  { num: '01', label: 'Branding & Identity', href: '/branding-agency-san-antonio' },
  { num: '02', label: 'CPG Marketing', href: '/cpg-marketing-agency' },
  { num: '03', label: 'Web Design & Development', href: '/web-design-development-san-antonio' },
  { num: '04', label: 'Search Engine Optimization', href: '/seo-agency-san-antonio' },
  { num: '05', label: 'Social Media Marketing', href: '/social-media-marketing-san-antonio' },
  { num: '06', label: 'Graphic Design', href: '/graphic-design-san-antonio' },
  { num: '07', label: 'Logo Design', href: '/logo-design-san-antonio' },
  { num: '08', label: 'AI Consultancy', href: '/ai-consultancy-san-antonio' },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--bg)', padding: '120px 0 60px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <p style={{ fontSize: '12px', fontWeight: 500, color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '16px', fontFamily: 'var(--font-geist, sans-serif)' }}>
              What We Do
            </p>
            <h1 style={{ color: 'var(--text)', fontFamily: 'var(--font-geist, sans-serif)', fontWeight: 700, fontSize: 'clamp(36px, 5vw, 56px)', letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: '24px' }}>
              Full-Service Marketing Agency San Antonio
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-geist, sans-serif)', fontSize: '18px', lineHeight: '1.7' }}>
              From brand strategy to AI-powered execution, Beast delivers every service your brand needs to grow.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section style={{ background: 'var(--bg)', paddingBottom: '0' }}>
        <ServicesRow services={servicesList} />
      </section>

      {/* SEO Copy */}
      <section style={{ background: 'var(--bg)', padding: '80px 0', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: 'var(--text)', fontFamily: 'var(--font-geist, sans-serif)', letterSpacing: '-0.02em', marginBottom: '20px', lineHeight: 1.2 }}>
            Marketing Services in San Antonio, TX
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: '1.8', fontFamily: 'var(--font-geist, sans-serif)' }}>
            Beast Creative Agency delivers full-service marketing for brands across San Antonio, Austin, Houston, and nationwide. Whether you need a branding overhaul, a high-converting website, search engine optimization, or a CPG marketing strategy that gets your product on shelf - Beast has the team and the tools to make it happen.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--dark-bg)', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, color: 'var(--dark-text)', fontFamily: 'var(--font-geist, sans-serif)', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '40px' }}>
            Ready to grow?
          </h2>
          <a
            href="/contact"
            style={{
              display: 'inline-block',
              background: 'var(--pink)',
              color: '#000000',
              padding: '18px 48px',
              fontFamily: 'var(--font-geist, sans-serif)',
              fontWeight: 600,
              fontSize: '15px',
              letterSpacing: '0.04em',
              textDecoration: 'none',
              borderRadius: '100px',
              transition: 'background 0.2s',
            }}
          >
            Start a Project
          </a>
        </div>
      </section>
    </>
  );
}
