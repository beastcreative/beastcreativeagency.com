import Link from 'next/link';
import FadeUp from '@/components/FadeUp';
import ServicesRow from '@/components/ServicesRow';

/* ─────────────────────────────────────────────────────
   WorkCard - Selected Work cards with green hover border
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
   StatBlock - Green stat + label
───────────────────────────────────────────────────── */
function StatBlock({
  stat,
  label,
  note,
}: {
  stat: string;
  label: string;
  note?: string;
}) {
  return (
    <div style={{ marginBottom: '40px' }}>
      <div
        style={{
          fontFamily: 'var(--font-geist, sans-serif)',
          fontSize: 'clamp(40px, 5vw, 60px)',
          fontWeight: 700,
          color: '#00f763',
          letterSpacing: '-0.03em',
          lineHeight: 1,
          marginBottom: '8px',
        }}
      >
        {stat}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-geist, sans-serif)',
          fontSize: '14px',
          color: '#555555',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
        }}
      >
        {label}
      </div>
      {note && (
        <div
          style={{
            fontFamily: 'var(--font-geist, sans-serif)',
            fontSize: '12px',
            color: '#888888',
            marginTop: '4px',
            fontStyle: 'italic',
          }}
        >
          {note}
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   PAGE (Server Component)
───────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* ── 1. HERO ── */}
      <section
        style={{
          background: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '140px',
          paddingBottom: '100px',
        }}
      >
        {/* Background BST watermark */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: '-2%',
            bottom: '-5%',
            fontFamily: 'var(--font-geist, sans-serif)',
            fontWeight: 900,
            fontSize: 'clamp(180px, 22vw, 320px)',
            color: '#00f763',
            opacity: 0.05,
            letterSpacing: '-0.05em',
            lineHeight: 1,
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        >
          BST
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1, padding: '80px 20px' }}>
          <FadeUp>
            <p
              style={{
                fontFamily: 'var(--font-geist, sans-serif)',
                fontSize: '12px',
                fontWeight: 500,
                color: '#00f763',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                marginBottom: '28px',
              }}
            >
              San Antonio&apos;s AI-Native Agency
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1
              style={{
                fontFamily: 'var(--font-geist, sans-serif)',
                fontSize: 'clamp(40px, 5.5vw, 72px)',
                fontWeight: 700,
                color: '#0a0a0a',
                lineHeight: '1.0',
                letterSpacing: '-0.03em',
                maxWidth: '900px',
                marginBottom: '32px',
                textTransform: 'none',
              }}
            >
              We Build Brands AI Recommends.
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p
              style={{
                fontFamily: 'var(--font-geist, sans-serif)',
                fontSize: '18px',
                color: '#555555',
                lineHeight: '1.7',
                maxWidth: '600px',
                marginBottom: '48px',
              }}
            >
              Beast is the only creative agency in Texas running AI at the
              operations layer. We make your brand the one the algorithm trusts
              and the one clients remember.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-pink">
                Get a Strategy Session
              </Link>
              <Link href="/#work" className="btn-ghost">
                See Our Work
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── 2. MARQUEE TICKER ── */}
      <div
        style={{
          background: '#0a0a0a',
          borderTop: '1px solid #1e1e1e',
          borderBottom: '1px solid #1e1e1e',
          padding: '18px 0',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            whiteSpace: 'nowrap',
            animation: 'ticker-scroll 28s linear infinite',
          }}
        >
          {[0, 1].map((n) => (
            <span
              key={n}
              style={{
                fontFamily: 'var(--font-geist, sans-serif)',
                fontSize: '13px',
                fontWeight: 500,
                color: '#ff1198',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                paddingRight: '0',
              }}
            >
              {Array(8).fill(null).map((_, i) => (
                <span key={i} style={{ marginRight: '48px' }}>
                  Branding &middot; CPG Marketing &middot; Web Design &middot; SEO &middot; Social Media &middot; AI Strategy &middot; Paid Ads &middot; Content &middot;
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── 3. SERVICES ── */}
      <section style={{ background: '#ffffff', padding: '100px 0' }}>
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
      </section>

      {/* ── 4. SELECTED WORK ── */}
      <section id="work" style={{ background: '#ffffff', padding: '100px 0' }}>
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
                description="15+ national food brands. 900+ recipes. Consolidated digital presence."
                tag="CPG Marketing"
              />
            </FadeUp>
            <FadeUp delay={0.1}>
              <WorkCard
                title="TexanCleaner"
                description="Local cleaning service. SEO-driven growth in competitive local market."
                tag="SEO + Web"
              />
            </FadeUp>
            <FadeUp delay={0.2}>
              <WorkCard
                title="Premier Futbol Academy"
                description="Full identity, web presence, and digital infrastructure."
                tag="Branding + Web"
              />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── 5. WHY BEAST ── */}
      <section style={{ background: '#ffffff', padding: '100px 0', borderTop: '1px solid #e5e5e5' }}>
        <div className="container">
          <div className="why-beast-grid">
            {/* Left: Stats */}
            <FadeUp>
              <div>
                <StatBlock stat="9+" label="Team + AI agents" />
                <StatBlock stat="15+" label="Active clients" />
                <StatBlock stat="149" label="Content pieces published" />
                <StatBlock
                  stat="0/8"
                  label="AI queries cited Beast (before our work)"
                  note="We measured it. We're fixing it."
                />
              </div>
            </FadeUp>

            {/* Right: Copy */}
            <FadeUp delay={0.15}>
              <div>
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
                  Why Beast
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-geist, sans-serif)',
                    fontSize: '20px',
                    color: '#0a0a0a',
                    lineHeight: '1.7',
                    fontWeight: 400,
                    maxWidth: '520px',
                  }}
                >
                  Beast is built different. Every other agency in San Antonio is
                  running the same playbook from 2019. We rebuilt operations
                  around AI - not as a gimmick, but as infrastructure. Faster
                  delivery, sharper strategy, results that compound.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── 6. CTA SECTION ── */}
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
              Ready to be the brand AI recommends?
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
              Lets talk about what Beast can build for you.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <Link href="/contact" className="btn-pink-pill">
              Start the Conversation
            </Link>
          </FadeUp>
        </div>
      </section>

      <style>{`
        /* Buttons */
        .btn-pink {
          display: inline-block;
          background: #ff1198;
          color: #000000;
          padding: 16px 36px;
          font-family: var(--font-geist, sans-serif);
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.04em;
          text-decoration: none;
          border-radius: 2px;
          transition: background 0.2s;
        }
        .btn-pink:hover {
          background: #e00086;
          color: #000000;
        }
        .btn-ghost {
          display: inline-block;
          background: transparent;
          color: #0a0a0a;
          padding: 16px 36px;
          font-family: var(--font-geist, sans-serif);
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.04em;
          text-decoration: none;
          border: 1px solid #0a0a0a;
          border-radius: 2px;
          transition: border-color 0.2s, color 0.2s;
        }
        .btn-ghost:hover {
          border-color: #555555;
          color: #555555;
        }
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
        /* Work cards grid */
        .work-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .work-card {
          position: relative;
        }
        .work-card-inner {
          background: #f5f5f5;
          border: 1px solid #e5e5e5;
          padding: 40px;
          height: 100%;
          border-left: 3px solid transparent;
          transition: border-left-color 0.2s ease;
        }
        .work-card:hover .work-card-inner {
          border-left-color: #00f763;
        }
        /* Why Beast two-col */
        .why-beast-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        /* Responsive */
        @media (max-width: 900px) {
          .work-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .why-beast-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
        }
        @media (max-width: 600px) {
          .work-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
