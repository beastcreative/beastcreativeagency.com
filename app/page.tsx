'use client';

import Image from 'next/image';
import Link from 'next/link';
import Marquee from '@/components/Marquee';
import CTAButton from '@/components/CTAButton';
import ServiceCard from '@/components/ServiceCard';
import { useState } from 'react';

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
};

const faqs = [
  {
    q: 'What services does Beast Creative Agency offer?',
    a: 'We offer a full suite of digital marketing services including SEO, branding, web design and development, social media marketing, graphic design, logo design, and CPG marketing.',
  },
  {
    q: 'How long does it take to see results from SEO?',
    a: 'SEO is a long-term investment. Most clients begin seeing meaningful improvements within 3 to 6 months, with significant results at 6 to 12 months. We provide transparent reporting so you always know where you stand.',
  },
  {
    q: 'Do you work with small businesses?',
    a: 'Absolutely. We work with businesses of all sizes, from local startups to regional brands. We tailor our strategies to fit your budget and goals.',
  },
  {
    q: 'What makes Beast Creative Agency different?',
    a: 'We combine creative excellence with data-driven strategy. Our team of certified specialists uses AI-enhanced tools to deliver personalized campaigns with radical transparency - you always know what we are doing and why.',
  },
  {
    q: 'How do I get started?',
    a: 'Simply fill out our free marketing assessment form or give us a call. We will schedule a consultation to understand your goals and recommend the best strategy for your business.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid #222' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '20px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          textAlign: 'left',
          gap: '16px',
        }}>
        <span style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 600, fontSize: '16px', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
          {q}
        </span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff1198" strokeWidth="2"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s', flexShrink: 0 }}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '15px', lineHeight: '1.7', paddingBottom: '20px' }}>
          {a}
        </p>
      )}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Section 1: Hero */}
      <section style={{ background: '#0c0c0c', padding: '100px 0 80px' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            {/* ROAS badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: '#111',
              border: '1px solid #ff1198',
              padding: '8px 16px',
              marginBottom: '32px',
            }}>
              <Image src="/images/beast-roars.png" alt="ROArS" width={60} height={30} style={{ height: '24px', width: 'auto' }} />
              <span style={{ color: '#ff1198', fontFamily: 'Raleway, sans-serif', fontWeight: 600, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                ROAS Driven Clients
              </span>
            </div>

            <h1 style={{
              color: '#fff',
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(32px, 5vw, 60px)',
              lineHeight: '1.1',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              marginBottom: '12px',
            }}>
              The #1 Digital Marketing Agency in San Antonio
            </h1>
            <h2 style={{
              color: '#ff1198',
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(20px, 3vw, 36px)',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              marginBottom: '24px',
            }}>
              To Help You Crush the Competition
            </h2>

            <p style={{ color: '#ccc', fontFamily: 'Raleway, sans-serif', fontSize: '18px', lineHeight: '1.7', marginBottom: '32px' }}>
              Cutting-edge creativity, data-driven strategy, measurable growth.
            </p>

            <ul style={{ listStyle: 'none', marginBottom: '40px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'Experienced, Certified Specialists',
                'AI-Enhanced Campaigns',
                'Radical Transparency',
                'Personalization ROI',
              ].map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#fff', fontFamily: 'Raleway, sans-serif', fontSize: '16px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff1198" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <CTAButton href="/contact">Get My Free Marketing Assessment</CTAButton>
          </div>
        </div>
      </section>

      {/* Section 2: Client Logos */}
      <section style={{ background: '#0a0a0a', padding: '60px 0', borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a' }}>
        <div className="container">
          <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '28px', textTransform: 'uppercase', textAlign: 'center', marginBottom: '12px' }}>
            Full-Service Digital Marketing Agency in San Antonio Driving Results
          </h2>
          <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '16px', textAlign: 'center', maxWidth: '600px', margin: '0 auto 40px', lineHeight: '1.7' }}>
            We partner with brands to deliver real, measurable marketing results. Here are some of the companies that trust Beast Creative Agency.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '40px' }}>
            {[
              { src: '/images/client-pioneer.webp', alt: 'Pioneer' },
              { src: '/images/client-rfsa.webp', alt: 'RFSA' },
              { src: '/images/client-sunbird.webp', alt: 'Sun Bird' },
              { src: '/images/client-sweetsensi.webp', alt: 'Sweet Sensi' },
              { src: '/images/client-texancleaners.webp', alt: 'Texan Cleaners' },
              { src: '/images/client-williams.webp', alt: 'Williams' },
            ].map(logo => (
              <div key={logo.alt} style={{ opacity: 0.8, filter: 'brightness(0) invert(1)' }}>
                <Image src={logo.src} alt={logo.alt} width={120} height={50} style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Devour Marquee */}
      <Marquee text="DEVOUR! &bull;" direction="normal" />

      {/* Section 4: Case Studies */}
      <section style={{ background: '#0c0c0c', padding: '80px 0' }}>
        <div className="container">
          <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 42px)', textTransform: 'uppercase', textAlign: 'center', marginBottom: '16px' }}>
            Results That Speak Louder Than Words
          </h2>
          <p style={{ color: '#aaa', textAlign: 'center', fontFamily: 'Raleway, sans-serif', fontSize: '16px', marginBottom: '60px' }}>
            Real campaigns. Real results. See how we have helped brands grow.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
            {/* Case 1: Coinline */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
              <div>
                <Image src="/images/case-coinline.png" alt="Coinline Case Study" width={600} height={400} style={{ width: '100%', height: 'auto', border: '1px solid #222' }} />
              </div>
              <div>
                <span style={{ color: '#ff1198', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Case Study</span>
                <h3 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '28px', textTransform: 'uppercase', margin: '12px 0 20px' }}>Coinline:</h3>
                <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '14px', lineHeight: '1.7', marginBottom: '16px' }}>
                  <strong style={{ color: '#fff' }}>Design Brief:</strong> Coinline needed a complete brand identity that communicated trust, innovation, and approachability in the cryptocurrency space.
                </p>
                <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '14px', lineHeight: '1.7', marginBottom: '24px' }}>
                  <strong style={{ color: '#fff' }}>Solution:</strong> We developed a comprehensive branding package including logo, color palette, typography, and brand guidelines that positioned Coinline as a leader in digital currency.
                </p>
                <div style={{ display: 'flex', gap: '32px', marginBottom: '24px' }}>
                  <div>
                    <div style={{ color: '#ff1198', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '40px' }}>300%</div>
                    <div style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '13px', textTransform: 'uppercase' }}>Brand Awareness Increase</div>
                  </div>
                  <div>
                    <div style={{ color: '#ff1198', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '40px' }}>2x</div>
                    <div style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '13px', textTransform: 'uppercase' }}>Customer Acquisition</div>
                  </div>
                </div>
                <Link href="/services/branding" style={{ color: '#ff1198', fontFamily: 'Raleway, sans-serif', fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  View Branding Services
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>

            {/* Case 2: Williams Foods */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
              <div style={{ order: 2 }}>
                <Image src="/images/case-williams.png" alt="Williams Foods Case Study" width={600} height={400} style={{ width: '100%', height: 'auto', border: '1px solid #222' }} />
              </div>
              <div style={{ order: 1 }}>
                <span style={{ color: '#ff1198', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Case Study</span>
                <h3 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '28px', textTransform: 'uppercase', margin: '12px 0 20px' }}>March Madness Campaign:</h3>
                <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '14px', lineHeight: '1.7', marginBottom: '16px' }}>
                  <strong style={{ color: '#fff' }}>Marketing Brief:</strong> Williams Foods wanted to capitalize on March Madness with a campaign that would drive brand recognition and increase retail sales during the basketball season.
                </p>
                <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '14px', lineHeight: '1.7', marginBottom: '24px' }}>
                  <strong style={{ color: '#fff' }}>Solution:</strong> We designed a multi-channel campaign combining social media, digital advertising, and in-store promotions that tied the Williams brand to the excitement of tournament season.
                </p>
                <div style={{ display: 'flex', gap: '32px', marginBottom: '24px' }}>
                  <div>
                    <div style={{ color: '#ff1198', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '40px' }}>450%</div>
                    <div style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '13px', textTransform: 'uppercase' }}>Social Engagement</div>
                  </div>
                  <div>
                    <div style={{ color: '#ff1198', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '40px' }}>38%</div>
                    <div style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '13px', textTransform: 'uppercase' }}>Sales Increase</div>
                  </div>
                </div>
                <Link href="/services/social-media" style={{ color: '#ff1198', fontFamily: 'Raleway, sans-serif', fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  View Social Media Services
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>

            {/* Case 3: Sweet Sensi */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
              <div>
                <Image src="/images/case-sweetsensi.png" alt="Sweet Sensi Case Study" width={600} height={400} style={{ width: '100%', height: 'auto', border: '1px solid #222' }} />
              </div>
              <div>
                <span style={{ color: '#ff1198', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Case Study</span>
                <h3 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '28px', textTransform: 'uppercase', margin: '12px 0 20px' }}>Sweet Sensi:</h3>
                <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '14px', lineHeight: '1.7', marginBottom: '16px' }}>
                  <strong style={{ color: '#fff' }}>Marketing Brief:</strong> Sweet Sensi needed a robust SEO strategy to improve organic visibility in the competitive cannabis market and drive qualified traffic to their dispensary locations.
                </p>
                <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '14px', lineHeight: '1.7', marginBottom: '24px' }}>
                  <strong style={{ color: '#fff' }}>Solution:</strong> We executed a comprehensive SEO campaign targeting high-intent local and product keywords, combined with content marketing that established Sweet Sensi as an industry authority.
                </p>
                <div style={{ display: 'flex', gap: '32px', marginBottom: '24px' }}>
                  <div>
                    <div style={{ color: '#ff1198', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '40px' }}>210%</div>
                    <div style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '13px', textTransform: 'uppercase' }}>Organic Traffic Growth</div>
                  </div>
                  <div>
                    <div style={{ color: '#ff1198', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '40px' }}>85%</div>
                    <div style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '13px', textTransform: 'uppercase' }}>Keyword Rankings Improved</div>
                  </div>
                </div>
                <Link href="/services/seo" style={{ color: '#ff1198', fontFamily: 'Raleway, sans-serif', fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  View SEO Services
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Why Choose Beast */}
      <section style={{ background: '#080808', padding: '80px 0' }}>
        <div className="container">
          <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 42px)', textTransform: 'uppercase', textAlign: 'center', marginBottom: '16px' }}>
            Why Choose Beast Creative Agency?
          </h2>
          <p style={{ color: '#aaa', textAlign: 'center', fontFamily: 'Raleway, sans-serif', fontSize: '16px', marginBottom: '60px', maxWidth: '600px', margin: '0 auto 60px' }}>
            We are not just another marketing agency. We are your strategic growth partner.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {[
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="36" height="36"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
                title: 'Certified Specialists',
                desc: 'Our team holds certifications from Google, HubSpot, Meta, and more. You get proven expertise, not guesswork.',
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="36" height="36"><path d="M12 2a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8 9.008 9.008 0 0 0-1.36-.1"/></svg>,
                title: 'AI-Enhanced Campaigns',
                desc: 'We leverage cutting-edge AI tools to optimize ad performance, SEO, content, and analytics for maximum ROI.',
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="36" height="36"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
                title: 'Radical Transparency',
                desc: 'No black boxes. You get full access to dashboards, reports, and regular strategy sessions so you always know what is happening.',
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="36" height="36"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
                title: 'Personalization and ROI',
                desc: 'Every strategy is custom-built for your brand and goals. We measure everything against revenue, not vanity metrics.',
              },
            ].map(card => (
              <div key={card.title} style={{ background: '#111', border: '1px solid #222', padding: '32px 24px', textAlign: 'center' }}>
                <div style={{ color: '#ff1198', margin: '0 auto 16px', display: 'flex', justifyContent: 'center' }}>{card.icon}</div>
                <h3 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', marginBottom: '12px' }}>{card.title}</h3>
                <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '14px', lineHeight: '1.7' }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Local Experts */}
      <section style={{ background: '#0c0c0c', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 40px)', textTransform: 'uppercase', marginBottom: '24px' }}>
                San Antonio&apos;s Local Digital Marketing Experts
              </h2>
              <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '16px', lineHeight: '1.8', marginBottom: '32px' }}>
                We are not a national agency that treats San Antonio as just another market. We are here - local, invested, and deeply familiar with the competitive landscape of South Texas. Our team understands the culture, the customers, and what it takes to stand out in this market.
              </p>
              <h3 style={{ color: '#ff1198', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '16px', textTransform: 'uppercase', marginBottom: '20px' }}>We Provide:</h3>
              <ul style={{ listStyle: 'none', marginBottom: '36px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Local SEO and Google Business Profile Optimization',
                  'Custom Web Design and Development',
                  'Social Media Management and Advertising',
                  'Brand Strategy and Identity',
                  'Graphic Design and Print Materials',
                  'Email Marketing Campaigns',
                ].map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: '#ccc', fontFamily: 'Raleway, sans-serif', fontSize: '15px' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff1198" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '3px' }}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <CTAButton href="/contact">Get a Free Assessment</CTAButton>
            </div>
            <div>
              <Image src="/images/cl-phones.webp" alt="Digital Marketing Results" width={600} height={500} style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Work! Marquee */}
      <Marquee text="WORK! &bull;" direction="reverse" />

      {/* Section 8: Marketing Arsenal */}
      <section style={{ background: '#0c0c0c', padding: '80px 0' }}>
        <div className="container">
          <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 42px)', textTransform: 'uppercase', textAlign: 'center', marginBottom: '16px' }}>
            Our Marketing Arsenal
          </h2>
          <p style={{ color: '#aaa', textAlign: 'center', fontFamily: 'Raleway, sans-serif', fontSize: '16px', marginBottom: '60px' }}>
            A full suite of services built to dominate your market.
          </p>
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
              description="Build a brand identity that commands attention, communicates your value, and connects with your ideal audience on every touchpoint."
              href="/services/branding"
            />
            <ServiceCard
              icon={serviceIcons.webDesign}
              title="Web Design and Development"
              description="Custom-built websites that convert visitors into customers - fast, mobile-first, and designed with your business goals in mind."
              href="/services/web-design"
            />
            <ServiceCard
              icon={serviceIcons.socialMedia}
              title="Social Media Marketing"
              description="Engage your audience and grow your community with strategic social media content, management, and paid advertising campaigns."
              href="/services/social-media"
            />
            <ServiceCard
              icon={serviceIcons.graphicDesign}
              title="Graphic Design"
              description="Visually stunning design that elevates your brand across print, digital, and social media channels."
              href="/services/graphic-design"
            />
            <ServiceCard
              icon={serviceIcons.logoDesign}
              title="Logo Design"
              description="Memorable, professional logos that capture your brand essence and make a lasting first impression."
              href="/services/logo-design"
            />
          </div>
        </div>
      </section>

      {/* Section 9: Meet the Team */}
      <section style={{ background: '#080808', padding: '80px 0' }}>
        <div className="container">
          <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 42px)', textTransform: 'uppercase', textAlign: 'center', marginBottom: '16px' }}>
            Meet the Team
          </h2>
          <p style={{ color: '#aaa', textAlign: 'center', fontFamily: 'Raleway, sans-serif', fontSize: '16px', marginBottom: '60px' }}>
            The people behind your brand&apos;s growth.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {[
              { name: 'John', title: 'CEO and Creative Director', img: '/images/team-john.png' },
              { name: 'Kyle', title: 'Head of Digital Strategy', img: '/images/team-kyle.png' },
              { name: 'Rubi', title: 'Senior Graphic Designer', img: '/images/team-rubi.png' },
            ].map(member => (
              <div key={member.name} style={{ textAlign: 'center' }}>
                <div style={{ position: 'relative', marginBottom: '20px', overflow: 'hidden', border: '2px solid #222' }}>
                  <Image src={member.img} alt={member.name} width={400} height={450} style={{ width: '100%', height: '350px', objectFit: 'cover', objectPosition: 'top' }} />
                </div>
                <h3 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '20px', textTransform: 'uppercase', marginBottom: '8px' }}>{member.name}</h3>
                <p style={{ color: '#ff1198', fontFamily: 'Raleway, sans-serif', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: 4-Step Process */}
      <section style={{ background: '#0c0c0c', padding: '80px 0' }}>
        <div className="container">
          <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 42px)', textTransform: 'uppercase', textAlign: 'center', marginBottom: '16px' }}>
            Our 4-Step Process
          </h2>
          <p style={{ color: '#aaa', textAlign: 'center', fontFamily: 'Raleway, sans-serif', fontSize: '16px', marginBottom: '60px' }}>
            A proven framework that delivers results every time.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {[
              { step: '01', title: 'Discovery', desc: 'We learn your business, goals, competitors, and target audience inside and out before making a single recommendation.' },
              { step: '02', title: 'Strategy', desc: 'Our team builds a custom marketing plan designed around your specific goals, budget, and competitive landscape.' },
              { step: '03', title: 'Execution', desc: 'We launch campaigns with precision, using our certified specialists and AI-enhanced tools to maximize performance.' },
              { step: '04', title: 'Optimize', desc: 'We continuously analyze data and refine strategies to improve performance and scale what is working.' },
            ].map(item => (
              <div key={item.step} style={{ textAlign: 'center', padding: '32px 20px', border: '1px solid #222' }}>
                <div style={{ color: '#ff1198', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '48px', lineHeight: 1, marginBottom: '16px' }}>{item.step}</div>
                <h3 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '18px', textTransform: 'uppercase', marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '14px', lineHeight: '1.7' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 11: Testimonials */}
      <section style={{ background: '#080808', padding: '80px 0' }}>
        <div className="container">
          <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 42px)', textTransform: 'uppercase', textAlign: 'center', marginBottom: '16px' }}>
            What Our Clients Say
          </h2>
          <p style={{ color: '#aaa', textAlign: 'center', fontFamily: 'Raleway, sans-serif', fontSize: '16px', marginBottom: '60px' }}>
            Real reviews from real clients.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              {
                quote: 'Beast Creative Agency completely transformed our online presence. Our organic traffic has tripled and we are generating more qualified leads than ever before.',
                name: 'Maria G.',
                company: 'Pioneer Roofing',
              },
              {
                quote: 'The team at Beast is incredible. They truly understand our brand and deliver creative work that exceeds expectations every single time.',
                name: 'James T.',
                company: 'Williams Foods',
              },
              {
                quote: 'We saw a 200% increase in social media engagement within the first three months. Beast Creative knows how to make a brand go viral.',
                name: 'Sofia R.',
                company: 'Sweet Sensi',
              },
            ].map(t => (
              <div key={t.name} style={{ background: '#111', border: '1px solid #222', padding: '32px', position: 'relative' }}>
                <div style={{ color: '#ff1198', fontSize: '48px', lineHeight: 1, fontFamily: 'Georgia, serif', marginBottom: '16px' }}>&ldquo;</div>
                <p style={{ color: '#ccc', fontFamily: 'Raleway, sans-serif', fontSize: '15px', lineHeight: '1.7', marginBottom: '24px' }}>{t.quote}</p>
                <div>
                  <div style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase' }}>{t.name}</div>
                  <div style={{ color: '#ff1198', fontFamily: 'Raleway, sans-serif', fontSize: '13px' }}>{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 12: FAQ */}
      <section style={{ background: '#0c0c0c', padding: '80px 0' }}>
        <div className="container">
          <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 42px)', textTransform: 'uppercase', textAlign: 'center', marginBottom: '16px' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ color: '#aaa', textAlign: 'center', fontFamily: 'Raleway, sans-serif', fontSize: '16px', marginBottom: '60px' }}>
            Everything you need to know about working with Beast Creative Agency.
          </p>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 13: Final CTA */}
      <section style={{ background: '#ff1198', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 52px)', textTransform: 'uppercase', letterSpacing: '0.02em', marginBottom: '20px' }}>
            Ready to Crush the Competition?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'Raleway, sans-serif', fontSize: '18px', lineHeight: '1.7', maxWidth: '600px', margin: '0 auto 40px' }}>
            Schedule your free marketing assessment today and discover how Beast Creative Agency can transform your business.
          </p>
          <Link href="/contact"
            style={{ display: 'inline-block', background: '#000', color: '#fff', padding: '16px 40px', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.08em', borderRadius: 0 }}
            onMouseEnter={e => (e.currentTarget.style.background = '#111')}
            onMouseLeave={e => (e.currentTarget.style.background = '#000')}>
            Get My Free Marketing Assessment
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .case-grid { grid-template-columns: 1fr !important; }
          .case-grid > div[style*="order: 1"] { order: 1 !important; }
          .case-grid > div[style*="order: 2"] { order: 2 !important; }
        }
        @media (max-width: 900px) {
          section .container > div[style*="grid-template-columns: repeat(4"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          section .container > div[style*="grid-template-columns: repeat(3"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          section .container > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          section .container > div[style*="grid-template-columns: repeat(2"],
          section .container > div[style*="grid-template-columns: repeat(3"],
          section .container > div[style*="grid-template-columns: repeat(4"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
