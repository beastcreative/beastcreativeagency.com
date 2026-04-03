import Link from 'next/link';
import FadeUp from '@/components/FadeUp';
import ServicesRow from '@/components/ServicesRow';

/* ─────────────────────────────────────────────────────
   WorkCard
───────────────────────────────────────────────────── */
function WorkCard({
  title,
  description,
  tag,
}: {
  title: string;
  description: string;
  tag: string;
}) {
  return (
    <div className="work-card">
      <div className="work-card-inner">
        <p
          style={{
            fontFamily: 'var(--font-geist, sans-serif)',
            fontSize: '11px',
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: '#00f763',
            marginBottom: '16px',
          }}
        >
          {tag}
        </p>
        <h3
          style={{
            fontFamily: 'var(--font-geist, sans-serif)',
            fontSize: '22px',
            fontWeight: 600,
            color: '#0a0a0a',
            marginBottom: '12px',
            letterSpacing: '-0.01em',
            lineHeight: '1.3',
            textTransform: 'none',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-geist, sans-serif)',
            fontSize: '15px',
            color: '#555555',
            lineHeight: '1.7',
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   SEO Content block — shared across all three options
───────────────────────────────────────────────────── */
function SeoSection() {
  return (
    <section
      style={{
        background: '#ffffff',
        padding: '80px 0 40px',
        borderTop: '1px solid #e5e5e5',
      }}
    >
      <div className="container">
        <FadeUp>
          <h2
            style={{
              fontFamily: 'var(--font-geist, sans-serif)',
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontWeight: 700,
              color: '#0a0a0a',
              letterSpacing: '-0.02em',
              lineHeight: '1.2',
              marginBottom: '24px',
              textTransform: 'none',
              maxWidth: '720px',
            }}
          >
            Marketing Agency in San Antonio, TX
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-geist, sans-serif)',
              fontSize: '17px',
              color: '#555555',
              lineHeight: '1.8',
              maxWidth: '720px',
            }}
          >
            Beast Creative Agency is a full-service marketing agency based in San Antonio, Texas. We specialize in branding, web design, SEO, social media marketing, and CPG brand strategy. Whether you&apos;re a local business looking to grow or a national consumer packaged goods brand that needs a partner who understands the shelf, Beast delivers creative work that drives real results. We serve clients across San Antonio, Austin, Houston, and nationwide.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────
   CTA Section — shared
───────────────────────────────────────────────────── */
function CtaSection() {
  return (
    <section
      style={{
        background: '#0a0a0a',
        padding: '120px 0',
        textAlign: 'center',
        borderTop: '1px solid #1e1e1e',
      }}
    >
      <div className="container">
        <FadeUp>
          <h2
            style={{
              fontFamily: 'var(--font-geist, sans-serif)',
              fontSize: 'clamp(48px, 6vw, 72px)',
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '-0.03em',
              lineHeight: '1.05',
              maxWidth: '800px',
              margin: '0 auto 24px',
              textTransform: 'none',
            }}
          >
            Ready to be the brand that wins?
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p
            style={{
              fontFamily: 'var(--font-geist, sans-serif)',
              fontSize: '18px',
              color: '#757575',
              lineHeight: '1.7',
              marginBottom: '48px',
            }}
          >
            Let&apos;s talk about what Beast can build for you.
          </p>
        </FadeUp>
        <FadeUp delay={0.2}>
          <Link href="/contact" className="btn-pink-pill">
            Start the Conversation
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────
   Design Option Label
───────────────────────────────────────────────────── */
function DesignLabel({ label }: { label: string }) {
  return (
    <div
      style={{
        background: '#ffffff',
        padding: '32px 0 8px',
        textAlign: 'center',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-geist, sans-serif)',
          fontSize: '11px',
          fontWeight: 500,
          color: '#ff1198',
          textTransform: 'uppercase',
          letterSpacing: '0.16em',
        }}
      >
        {label}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════ */}
      <section
        style={{
          background: '#ffffff',
          paddingTop: '160px',
          paddingBottom: '100px',
          overflow: 'hidden',
        }}
      >
        <div className="container">
          <FadeUp>
            <h1 className="hero-wordmark">
              BSTCRTV<span className="hero-reg">&#174;</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.12}>
            <p className="hero-tagline">
              San Antonio&apos;s Full-Service Marketing Agency
            </p>
          </FadeUp>
          <FadeUp delay={0.22}>
            <Link href="/contact" className="hero-cta">
              Start a Project &#8594;
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 2 — LOGO SCROLL
      ══════════════════════════════════════════════ */}
      <section className="logo-scroll-section">
        <p className="logo-scroll-label">Trusted by brands across Texas</p>
        <div className="logo-scroll-viewport">
          <div className="logo-scroll-track">
            {/* First set */}
            {[
              { src: 'https://beastcreativeagency.com/wp-content/uploads/Williams_White.png', alt: 'Williams' },
              { src: 'https://beastcreativeagency.com/wp-content/uploads/Pioneer_White.png', alt: 'Pioneer' },
              { src: 'https://beastcreativeagency.com/wp-content/uploads/Sun_Bird_White.png', alt: 'Sun Bird' },
              { src: 'https://beastcreativeagency.com/wp-content/uploads/Texasn_Cleaners_White.png', alt: 'Texan Cleaners' },
              { src: 'https://beastcreativeagency.com/wp-content/uploads/RFSA_White.png', alt: 'RFSA' },
              { src: 'https://beastcreativeagency.com/wp-content/uploads/Sweet_Sensi_White.png', alt: 'Sweet Sensi' },
              /* Duplicate for seamless loop */
              { src: 'https://beastcreativeagency.com/wp-content/uploads/Williams_White.png', alt: 'Williams' },
              { src: 'https://beastcreativeagency.com/wp-content/uploads/Pioneer_White.png', alt: 'Pioneer' },
              { src: 'https://beastcreativeagency.com/wp-content/uploads/Sun_Bird_White.png', alt: 'Sun Bird' },
              { src: 'https://beastcreativeagency.com/wp-content/uploads/Texasn_Cleaners_White.png', alt: 'Texan Cleaners' },
              { src: 'https://beastcreativeagency.com/wp-content/uploads/RFSA_White.png', alt: 'RFSA' },
              { src: 'https://beastcreativeagency.com/wp-content/uploads/Sweet_Sensi_White.png', alt: 'Sweet Sensi' },
            ].map((logo, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={logo.src}
                alt={logo.alt}
                className="logo-scroll-img"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          DESIGN OPTION LABELS + SECTIONS
      ══════════════════════════════════════════════ */}

      {/* ────── OPTION A ────── */}
      <DesignLabel label="— Design Option A —" />

      <section data-design="a" style={{ background: '#ffffff' }}>
        {/* Services numbered list */}
        <div style={{ padding: '80px 0 60px' }}>
          <div className="container">
            <FadeUp>
              <p
                style={{
                  fontFamily: 'var(--font-geist, sans-serif)',
                  fontSize: '11px',
                  fontWeight: 500,
                  color: '#888888',
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  marginBottom: '48px',
                }}
              >
                What We Do
              </p>
            </FadeUp>
            <ServicesRow />
          </div>
        </div>

        {/* Pull quote + body copy */}
        <div style={{ padding: '60px 0', borderTop: '1px solid #e5e5e5' }}>
          <div className="container">
            <div className="option-a-two-col">
              <FadeUp>
                <blockquote className="option-a-pullquote">
                  We&apos;ve helped brands grow 47% in 6 months. Numbers, not promises.
                </blockquote>
              </FadeUp>
              <FadeUp delay={0.12}>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-geist, sans-serif)',
                      fontSize: '16px',
                      color: '#555555',
                      lineHeight: '1.8',
                      marginBottom: '32px',
                    }}
                  >
                    Beast is built on one principle: every dollar a client spends should come back multiplied. We don&apos;t chase trends. We build brand infrastructure that compounds - the kind that earns shelf space, search rankings, and brand loyalty simultaneously.
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-geist, sans-serif)',
                      fontSize: '16px',
                      color: '#555555',
                      lineHeight: '1.8',
                    }}
                  >
                    Our team of specialists and AI agents works in parallel, moving at a speed traditional agencies can&apos;t match. That&apos;s not a pitch - it&apos;s how we&apos;re wired.
                  </p>
                </div>
              </FadeUp>
            </div>
            <FadeUp delay={0.2}>
              <div style={{ marginTop: '48px' }}>
                <Link href="/#work" className="text-cta">
                  See Our Work &#8594;
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>

        <SeoSection />
        <CtaSection />
      </section>

      {/* ────── OPTION B ────── */}
      <DesignLabel label="— Design Option B —" />

      <section data-design="b" style={{ background: '#ffffff' }}>
        {/* Case study cards */}
        <div style={{ padding: '80px 0 60px' }}>
          <div className="container">
            <FadeUp>
              <p
                style={{
                  fontFamily: 'var(--font-geist, sans-serif)',
                  fontSize: '11px',
                  fontWeight: 500,
                  color: '#888888',
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  marginBottom: '48px',
                }}
              >
                Selected Work
              </p>
            </FadeUp>
            <div className="work-grid">
              <FadeUp>
                <WorkCard
                  title="CHG - Consumer Health Group"
                  description="15+ national food brands. 900+ recipes. Consolidated digital presence that scales."
                  tag="CPG Marketing"
                />
              </FadeUp>
              <FadeUp delay={0.1}>
                <WorkCard
                  title="TexanCleaner"
                  description="Local cleaning service. SEO-driven growth in a competitive local market with measurable ROI."
                  tag="SEO + Web"
                />
              </FadeUp>
              <FadeUp delay={0.2}>
                <WorkCard
                  title="Premier Futbol Academy"
                  description="Full identity, web presence, and digital infrastructure built from the ground up."
                  tag="Branding + Web"
                />
              </FadeUp>
            </div>
          </div>
        </div>

        {/* Services as 2-col bullet list */}
        <div style={{ padding: '60px 0', borderTop: '1px solid #e5e5e5' }}>
          <div className="container">
            <FadeUp>
              <p
                style={{
                  fontFamily: 'var(--font-geist, sans-serif)',
                  fontSize: '11px',
                  fontWeight: 500,
                  color: '#888888',
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  marginBottom: '32px',
                }}
              >
                Services
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="option-b-services-grid">
                {[
                  'Branding & Identity',
                  'CPG Marketing',
                  'Web Design & Development',
                  'Search Engine Optimization',
                  'Social Media Marketing',
                  'AI-Powered Strategy',
                  'Paid Advertising',
                  'Content Production',
                ].map((svc) => (
                  <div key={svc} className="option-b-service-item">
                    <span style={{ color: '#00f763', marginRight: '10px' }}>&#8250;</span>
                    <span
                      style={{
                        fontFamily: 'var(--font-geist, sans-serif)',
                        fontSize: '16px',
                        color: '#0a0a0a',
                        fontWeight: 400,
                      }}
                    >
                      {svc}
                    </span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Stat row */}
        <div style={{ padding: '48px 0', background: '#0a0a0a' }}>
          <div className="container">
            <FadeUp>
              <p className="option-b-stat-row">
                15+ Clients &nbsp;&middot;&nbsp; 149 Articles Published &nbsp;&middot;&nbsp; 9 Team Members &nbsp;&middot;&nbsp; 5 Years in SA
              </p>
            </FadeUp>
          </div>
        </div>

        <SeoSection />
        <CtaSection />
      </section>

      {/* ────── OPTION C ────── */}
      <DesignLabel label="— Design Option C —" />

      <section data-design="c" style={{ background: '#ffffff' }}>
        {/* Alternating split rows */}
        {[
          {
            num: '01',
            service: 'Branding & Identity',
            blurb: 'From logo systems to brand voice, we build identities that own a shelf, a screen, and a room. Built to last, built to scale.',
            flip: false,
          },
          {
            num: '02',
            service: 'CPG Marketing',
            blurb: 'We understand the shelf. Package design, retailer strategy, digital presence - we connect your product to the consumer at every touchpoint.',
            flip: true,
          },
          {
            num: '03',
            service: 'Web Design',
            blurb: 'Sites that convert. Built fast, built clean, built to rank. No templates. Every Beast site is engineered around your specific growth goals.',
            flip: false,
          },
          {
            num: '04',
            service: 'SEO & Content',
            blurb: 'We create content that earns authority - the kind that shows up when your customers search, and the kind that AI platforms cite.',
            flip: true,
          },
        ].map((row, i) => (
          <div
            key={row.num}
            className={`option-c-row ${row.flip ? 'option-c-row-flip' : ''}`}
            style={{ borderTop: i === 0 ? '1px solid #e5e5e5' : 'none' }}
          >
            {/* Text side */}
            <div className="option-c-text">
              <FadeUp>
                <span
                  style={{
                    fontFamily: 'var(--font-geist, sans-serif)',
                    fontSize: '11px',
                    color: '#888888',
                    textTransform: 'uppercase',
                    letterSpacing: '0.14em',
                    display: 'block',
                    marginBottom: '16px',
                  }}
                >
                  {row.num}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-geist, sans-serif)',
                    fontSize: 'clamp(28px, 3.5vw, 48px)',
                    fontWeight: 700,
                    color: '#0a0a0a',
                    letterSpacing: '-0.02em',
                    lineHeight: '1.1',
                    marginBottom: '24px',
                    textTransform: 'none',
                  }}
                >
                  {row.service}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-geist, sans-serif)',
                    fontSize: '16px',
                    color: '#555555',
                    lineHeight: '1.8',
                    maxWidth: '420px',
                  }}
                >
                  {row.blurb}
                </p>
              </FadeUp>
            </div>
            {/* Dark block side */}
            <div className="option-c-block" aria-hidden="true" />
          </div>
        ))}

        {/* CTA below split rows */}
        <div style={{ padding: '80px 0', textAlign: 'center', background: '#ffffff', borderTop: '1px solid #e5e5e5' }}>
          <div className="container">
            <FadeUp>
              <Link href="/contact" className="text-cta">
                Start a Project &#8594;
              </Link>
            </FadeUp>
          </div>
        </div>

        <SeoSection />
        <CtaSection />
      </section>

      {/* ══════════════════════════════════════════════
          STYLES
      ══════════════════════════════════════════════ */}
      <style>{`
        /* ── Hero ── */
        .hero-wordmark {
          font-family: var(--font-geist, sans-serif);
          font-size: clamp(72px, 20vw, 300px);
          font-weight: 800;
          color: #0a0a0a;
          letter-spacing: -0.04em;
          line-height: 0.9;
          margin-bottom: 32px;
          text-transform: none;
        }
        .hero-reg {
          color: #00f763;
          font-size: 0.35em;
          vertical-align: super;
          line-height: 0;
        }
        .hero-tagline {
          font-family: var(--font-geist, sans-serif);
          font-size: 16px;
          font-weight: 400;
          color: #888888;
          letter-spacing: 0.02em;
          margin-bottom: 36px;
          text-transform: none;
        }
        .hero-cta {
          font-family: var(--font-geist, sans-serif);
          font-size: 16px;
          font-weight: 500;
          color: #ff1198;
          text-decoration: none;
          letter-spacing: 0.02em;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s ease;
          padding-bottom: 2px;
        }
        .hero-cta:hover {
          border-bottom-color: #ff1198;
          color: #ff1198;
        }

        /* ── Logo Scroll ── */
        .logo-scroll-section {
          background: #0a0a0a;
          padding: 28px 0;
          overflow: hidden;
          border-top: 1px solid #1e1e1e;
          border-bottom: 1px solid #1e1e1e;
        }
        .logo-scroll-label {
          font-family: var(--font-geist, sans-serif);
          font-size: 11px;
          font-weight: 400;
          color: #4d4d4d;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          text-align: center;
          margin-bottom: 20px;
        }
        .logo-scroll-viewport {
          overflow: hidden;
          width: 100%;
        }
        .logo-scroll-track {
          display: flex;
          align-items: center;
          white-space: nowrap;
          width: max-content;
          animation: logo-marquee 30s linear infinite;
          gap: 0;
        }
        .logo-scroll-img {
          height: 36px;
          width: auto;
          filter: grayscale(100%) brightness(0.8);
          display: inline-block;
          margin: 0 60px;
          flex-shrink: 0;
        }
        @keyframes logo-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        /* ── Text CTA (shared) ── */
        .text-cta {
          font-family: var(--font-geist, sans-serif);
          font-size: 16px;
          font-weight: 500;
          color: #ff1198;
          text-decoration: none;
          border-bottom: 1px solid transparent;
          padding-bottom: 2px;
          transition: border-color 0.2s ease;
        }
        .text-cta:hover {
          border-bottom-color: #ff1198;
          color: #ff1198;
        }

        /* ── Pink Pill button ── */
        .btn-pink-pill {
          display: inline-block;
          background: #ff1198;
          color: #000000;
          padding: 20px 52px;
          font-family: var(--font-geist, sans-serif);
          font-weight: 600;
          font-size: 15px;
          letter-spacing: 0.04em;
          text-decoration: none;
          border-radius: 100px;
          transition: background 0.2s;
        }
        .btn-pink-pill:hover {
          background: #e00086;
          color: #000000;
        }

        /* ── Work card grid ── */
        .work-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .work-card { position: relative; }
        .work-card-inner {
          background: #f5f5f5;
          border: 1px solid #e5e5e5;
          border-left: 3px solid transparent;
          padding: 40px;
          height: 100%;
          transition: border-left-color 0.2s ease;
        }
        .work-card:hover .work-card-inner {
          border-left-color: #00f763;
        }

        /* ── Option A: two-col ── */
        .option-a-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        .option-a-pullquote {
          font-family: var(--font-geist, sans-serif);
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 700;
          color: #0a0a0a;
          letter-spacing: -0.02em;
          line-height: 1.2;
          border-left: 3px solid #ff1198;
          padding-left: 24px;
          font-style: normal;
          margin: 0;
          text-transform: none;
        }

        /* ── Option B: services bullet grid ── */
        .option-b-services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px 48px;
        }
        .option-b-service-item {
          display: flex;
          align-items: baseline;
          padding: 12px 0;
          border-bottom: 1px solid #e5e5e5;
        }
        .option-b-stat-row {
          font-family: var(--font-geist, sans-serif);
          font-size: clamp(16px, 2vw, 22px);
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.01em;
          text-align: center;
          line-height: 1.5;
          text-transform: none;
        }

        /* ── Option C: alternating split ── */
        .option-c-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 420px;
          border-bottom: 1px solid #e5e5e5;
        }
        .option-c-text {
          display: flex;
          align-items: center;
          padding: 80px 60px;
          order: 1;
        }
        .option-c-block {
          background: #0a0a0a;
          order: 2;
        }
        .option-c-row-flip .option-c-text { order: 2; }
        .option-c-row-flip .option-c-block { order: 1; }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .work-grid { grid-template-columns: repeat(2, 1fr); }
          .option-a-two-col { grid-template-columns: 1fr; gap: 40px; }
          .option-b-services-grid { grid-template-columns: 1fr; }
          .option-c-row {
            grid-template-columns: 1fr;
            min-height: auto;
          }
          .option-c-block { min-height: 200px; order: 1 !important; }
          .option-c-text { order: 2 !important; padding: 40px 20px; }
        }
        @media (max-width: 600px) {
          .work-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
