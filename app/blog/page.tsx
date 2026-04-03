import Link from 'next/link';
import { getAllPosts, formatDate } from '@/lib/blog';

export const metadata = {
  title: 'The Beasty Blog | Beast Creative Agency Digital Marketing',
  description:
    'Marketing insights, tips, and strategies from Beast Creative Agency. Take a bite out of our chunks of marketing information.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: 'var(--bg)',
          padding: '100px 0 60px',
          borderBottom: '1px solid var(--border)',
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
              Our Blog
            </span>
            <h1
              style={{
                color: 'var(--text)',
                fontFamily: 'Raleway, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(32px, 5vw, 56px)',
                textTransform: 'uppercase',
                lineHeight: 1.1,
                marginBottom: '16px',
              }}
            >
              The Beasty Blog
            </h1>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontFamily: 'Raleway, sans-serif',
                fontSize: '18px',
                lineHeight: '1.7',
              }}
            >
              Take a bite out of our chunks of marketing information.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
            }}
          >
            {posts.map((post) => (
              <article
                key={post.slug}
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid #222',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                  <span
                    style={{
                      background: '#ff1198',
                      color: 'var(--text)',
                      fontFamily: 'Raleway, sans-serif',
                      fontWeight: 700,
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      padding: '4px 10px',
                    }}
                  >
                    {post.category}
                  </span>
                  <span
                    style={{
                      color: '#666',
                      fontFamily: 'Raleway, sans-serif',
                      fontSize: '12px',
                    }}
                  >
                    {formatDate(post.date)}
                  </span>
                </div>
                <h2
                  style={{
                    color: 'var(--text)',
                    fontFamily: 'Raleway, sans-serif',
                    fontWeight: 700,
                    fontSize: '18px',
                    textTransform: 'uppercase',
                    lineHeight: '1.3',
                    flex: 1,
                  }}
                >
                  {post.title}
                </h2>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontFamily: 'Raleway, sans-serif',
                    fontSize: '14px',
                    lineHeight: '1.7',
                  }}
                >
                  {post.excerpt.length > 160 ? post.excerpt.slice(0, 160) + '...' : post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  style={{
                    color: '#ff1198',
                    fontFamily: 'Raleway, sans-serif',
                    fontWeight: 600,
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginTop: 'auto',
                    textDecoration: 'none',
                  }}
                >
                  Read More
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#ff1198', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <h2
            style={{
              color: 'var(--text)',
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 3vw, 40px)',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            Want Marketing Help, Not Just Tips?
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.85)',
              fontFamily: 'Raleway, sans-serif',
              fontSize: '16px',
              marginBottom: '32px',
            }}
          >
            Let Beast Creative Agency handle your marketing while you focus on running your business.
          </p>
          <a
            href="/contact"
            style={{
              display: 'inline-block',
              background: '#000',
              color: 'var(--text)',
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
        </div>
      </section>
    </>
  );
}
