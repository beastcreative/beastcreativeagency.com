import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team | Beast Creative Agency',
  description: 'Meet the team behind Beast Creative Agency - San Antonio\'s leading digital marketing agency.',
};

const team = [
  { name: 'Edy Hernandez', role: 'CEO / Founder' },
  { name: 'John Speer', role: 'COO / Co-Owner' },
  { name: 'Kyle Ossinger', role: 'Graphic Designer' },
  { name: 'Eric Patino', role: 'Web Developer' },
  { name: 'Andy Bernot', role: 'SEO Specialist' },
  { name: 'Misha', role: 'Project Leader' },
  { name: 'Sydney', role: 'Graphic Designer' },
  { name: 'Rubi', role: 'Social Media Manager' },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: '#0c0c0c',
          padding: '100px 0 60px',
          borderBottom: '1px solid #1a1a1a',
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
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
              Who We Are
            </span>
            <h1
              style={{
                color: '#fff',
                fontFamily: 'Raleway, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(32px, 5vw, 56px)',
                textTransform: 'uppercase',
                lineHeight: 1.1,
                marginBottom: '16px',
              }}
            >
              Our Team
            </h1>
            <p
              style={{
                color: '#aaa',
                fontFamily: 'Raleway, sans-serif',
                fontSize: '18px',
                lineHeight: '1.7',
              }}
            >
              The people behind Beast Creative Agency - San Antonio's leading digital marketing team.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section style={{ background: '#0c0c0c', padding: '80px 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '24px',
              maxWidth: '960px',
              margin: '0 auto',
            }}
          >
            {team.map((member) => (
              <div
                key={member.name}
                style={{
                  background: '#111',
                  border: '1px solid #222',
                  padding: '40px 24px',
                  textAlign: 'center',
                }}
              >
                {/* Avatar placeholder */}
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: '#1a1a1a',
                    border: '2px solid #ff1198',
                    margin: '0 auto 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    style={{
                      color: '#ff1198',
                      fontFamily: 'Raleway, sans-serif',
                      fontWeight: 700,
                      fontSize: '24px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h2
                  style={{
                    color: '#fff',
                    fontFamily: 'Raleway, sans-serif',
                    fontWeight: 700,
                    fontSize: '16px',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}
                >
                  {member.name}
                </h2>
                <p
                  style={{
                    color: '#ff1198',
                    fontFamily: 'Raleway, sans-serif',
                    fontSize: '13px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#ff1198', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <h2
            style={{
              color: '#fff',
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 3vw, 40px)',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            Work With the Herd
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.85)',
              fontFamily: 'Raleway, sans-serif',
              fontSize: '16px',
              marginBottom: '32px',
            }}
          >
            Ready to grow your business with a team that treats your success like their own?
          </p>
          <a
            href="/contact"
            style={{
              display: 'inline-block',
              background: '#000',
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
            Get Started
          </a>
        </div>
      </section>
    </>
  );
}
