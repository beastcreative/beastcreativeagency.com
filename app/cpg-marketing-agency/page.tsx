import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CPG Marketing Agency | Beast Creative Agency San Antonio',
  description:
    'Beast Creative Agency is a leading CPG marketing agency specializing in consumer packaged goods. Data-driven strategies for brand growth, retail distribution, and digital marketing.',
  openGraph: {
    title: 'CPG Marketing Agency | Beast Creative Agency',
    description:
      'Elevate your CPG brand with data-driven marketing strategies from Beast Creative Agency. Branding, performance marketing, social media, and more.',
    url: 'https://beastcreativeagency.com/cpg-marketing-agency',
  },
};

const services = [
  {
    title: 'CPG Branding',
    desc: 'Elevate your brand identity with strategic branding that resonates with consumers and stands out on the shelf.',
  },
  {
    title: 'CPG Performance Marketing',
    desc: 'Data-driven paid advertising campaigns across Google, Meta, and retail media networks with transparent attribution.',
  },
  {
    title: 'CPG Social Media',
    desc: 'Transform consumer engagement with platform-native content strategies that drive brand loyalty and sales.',
  },
  {
    title: 'CPG Digital Marketing',
    desc: 'Full-funnel digital marketing solutions tailored to the unique challenges of consumer packaged goods brands.',
  },
  {
    title: 'CPG Market Research',
    desc: 'Data-driven insights that inform your go-to-market strategy, pricing, and product positioning.',
  },
  {
    title: 'Retail Media',
    desc: 'Win the digital shelf on Walmart Connect, Target Roundel, and Amazon with expert retail media management.',
  },
];

const faqs = [
  {
    q: 'What is a CPG marketing agency?',
    a: 'A CPG marketing agency specializes in marketing strategies for consumer packaged goods brands. Unlike generalist agencies, we understand the unique challenges of retail distribution, purchase cycle dynamics, and the competitive shelf environment.',
  },
  {
    q: 'How does Beast Creative Agency help CPG brands grow?',
    a: 'We combine data-driven performance marketing, strong creative, and retail media expertise to build integrated campaigns that drive both online and in-store sales. Our AI-enhanced optimization ensures your budget works harder.',
  },
  {
    q: 'What CPG categories do you work with?',
    a: 'We work with CPG brands across food and beverage, health and wellness, beauty, household products, and more. Our strategies adapt to your specific category dynamics and retail partnerships.',
  },
  {
    q: 'How do you measure CPG marketing success?',
    a: 'We track metrics that matter for CPG: customer acquisition cost, retail velocity, brand lift, repeat purchase rate, and return on ad spend. Radical transparency means you see exactly what your investment is driving.',
  },
];

export default function CpgMarketingAgencyPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: '#0c0c0c',
          padding: '100px 0 80px',
          borderBottom: '1px solid #1a1a1a',
        }}
      >
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <span
            style={{
              color: '#ff1198',
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 700,
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              display: 'block',
              marginBottom: '16px',
            }}
          >
            CPG Marketing Agency
          </span>
          <h1
            style={{
              color: '#fff',
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 5vw, 60px)',
              textTransform: 'uppercase',
              lineHeight: 1.1,
              marginBottom: '24px',
            }}
          >
            Elevate Your Brand with a Leading CPG Marketing Agency
          </h1>
          <p
            style={{
              color: '#aaa',
              fontFamily: 'Raleway, sans-serif',
              fontSize: '18px',
              lineHeight: '1.7',
              marginBottom: '40px',
              maxWidth: '700px',
              margin: '0 auto 40px',
            }}
          >
            In the ever-evolving world of consumer packaged goods marketing, brands need a strategic partner to navigate industry trends and consumer behavior. Beast Creative Agency specializes in crafting data-driven marketing strategies that help CPG brands grow profitably.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="/contact"
              style={{
                display: 'inline-block',
                background: '#ff1198',
                color: '#fff',
                padding: '14px 36px',
                fontFamily: 'Raleway, sans-serif',
                fontWeight: 700,
                fontSize: '14px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                textDecoration: 'none',
              }}
            >
              Get a Free Assessment
            </a>
            <Link
              href="/services/cpg-marketing"
              style={{
                display: 'inline-block',
                background: 'transparent',
                color: '#fff',
                padding: '14px 36px',
                fontFamily: 'Raleway, sans-serif',
                fontWeight: 700,
                fontSize: '14px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                textDecoration: 'none',
                border: '1px solid #333',
              }}
            >
              Our CPG Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why CPG Marketing Matters */}
      <section style={{ background: '#0c0c0c', padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2
              style={{
                color: '#fff',
                fontFamily: 'Raleway, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(22px, 3vw, 38px)',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}
            >
              Why Top CPG Ad Agencies Matter for Your Growth
            </h2>
            <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '16px', lineHeight: '1.7', maxWidth: '700px', margin: '0 auto' }}>
              Consumer packaged goods brands face unique challenges: crowded retail environments, complex distribution networks, and shrinking consumer attention spans. The right agency partner transforms these challenges into competitive advantages.
            </p>
          </div>

          {/* Services Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {services.map((svc) => (
              <div
                key={svc.title}
                style={{
                  background: '#111',
                  border: '1px solid #222',
                  padding: '32px',
                }}
              >
                <div
                  style={{
                    width: '4px',
                    height: '32px',
                    background: '#ff1198',
                    marginBottom: '20px',
                  }}
                />
                <h3
                  style={{
                    color: '#fff',
                    fontFamily: 'Raleway, sans-serif',
                    fontWeight: 700,
                    fontSize: '16px',
                    textTransform: 'uppercase',
                    marginBottom: '12px',
                  }}
                >
                  {svc.title}
                </h3>
                <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '14px', lineHeight: '1.7' }}>
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data-Driven Section */}
      <section style={{ background: '#111', padding: '80px 0', borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <span
                style={{
                  color: '#ff1198',
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 700,
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  display: 'block',
                  marginBottom: '16px',
                }}
              >
                Our Approach
              </span>
              <h2
                style={{
                  color: '#fff',
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(22px, 2.5vw, 34px)',
                  textTransform: 'uppercase',
                  marginBottom: '20px',
                }}
              >
                Data-Driven Insights for CPG Success
              </h2>
              <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '16px', lineHeight: '1.8', marginBottom: '20px' }}>
                We combine deep market research with AI-enhanced campaign optimization to deliver strategies that drive measurable results. Our radical transparency approach means you see exactly what's working - and why.
              </p>
              <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '16px', lineHeight: '1.8' }}>
                From retail media to direct-to-consumer, we build integrated marketing systems that scale with your brand.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { stat: '3-5x', label: 'Average ROAS improvement' },
                { stat: '40%', label: 'Average reduction in CAC' },
                { stat: '100%', label: 'Transparent reporting' },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: '#0c0c0c',
                    border: '1px solid #222',
                    padding: '24px',
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'center',
                  }}
                >
                  <span
                    style={{
                      color: '#ff1198',
                      fontFamily: 'Raleway, sans-serif',
                      fontWeight: 700,
                      fontSize: '36px',
                      lineHeight: 1,
                      minWidth: '80px',
                    }}
                  >
                    {item.stat}
                  </span>
                  <span style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ background: '#0c0c0c', padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px' }}>
          <h2
            style={{
              color: '#fff',
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(22px, 3vw, 38px)',
              textTransform: 'uppercase',
              marginBottom: '48px',
              textAlign: 'center',
            }}
          >
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {faqs.map((faq) => (
              <div
                key={faq.q}
                style={{
                  background: '#111',
                  border: '1px solid #222',
                  padding: '32px',
                }}
              >
                <h3
                  style={{
                    color: '#fff',
                    fontFamily: 'Raleway, sans-serif',
                    fontWeight: 700,
                    fontSize: '16px',
                    textTransform: 'uppercase',
                    marginBottom: '16px',
                  }}
                >
                  {faq.q}
                </h3>
                <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#ff1198', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h2
            style={{
              color: '#fff',
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 3vw, 44px)',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            Partner with Beast Creative Agency
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.85)',
              fontFamily: 'Raleway, sans-serif',
              fontSize: '18px',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px',
            }}
          >
            Ready to transform your CPG marketing? Get a free assessment and discover what data-driven marketing can do for your brand.
          </p>
          <a
            href="/contact"
            style={{
              display: 'inline-block',
              background: '#000',
              color: '#fff',
              padding: '16px 48px',
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 700,
              fontSize: '14px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              textDecoration: 'none',
            }}
          >
            Get a Free Assessment
          </a>
        </div>
      </section>
    </>
  );
}
