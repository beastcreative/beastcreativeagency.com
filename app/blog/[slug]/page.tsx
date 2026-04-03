import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllPostSlugs, getPostBySlug, formatDate } from '@/lib/blog';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Beast Creative Agency`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      url: `https://beastcreativeagency.com/blog/${post.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

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
        <div className="container" style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <span
              style={{
                background: '#ff1198',
                color: '#fff',
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
                fontSize: '13px',
              }}
            >
              {formatDate(post.date)}
            </span>
          </div>
          <h1
            style={{
              color: '#fff',
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(26px, 4vw, 48px)',
              textTransform: 'uppercase',
              lineHeight: 1.2,
              marginBottom: '24px',
            }}
          >
            {post.title}
          </h1>
          <p
            style={{
              color: '#aaa',
              fontFamily: 'Raleway, sans-serif',
              fontSize: '18px',
              lineHeight: '1.7',
              marginBottom: '0',
            }}
          >
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Post Content */}
      <section style={{ background: '#0c0c0c', padding: '60px 0 100px' }}>
        <div className="container" style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px' }}>
          <article className="blog-content">
            <MDXRemote source={post.content} />
          </article>

          {/* Back link */}
          <div style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px solid #222' }}>
            <Link
              href="/blog"
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
                textDecoration: 'none',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
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
        </div>
      </section>
    </>
  );
}
