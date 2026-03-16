import Link from 'next/link';

export const metadata = {
  title: 'The Beasty Blog | Beast Creative Agency Digital Marketing',
  description: 'Marketing insights, tips, and strategies from Beast Creative Agency. Take a bite out of our chunks of marketing information.',
};

const blogPosts = [
  {
    title: '10 SEO Strategies That Will Dominate Google in 2025',
    excerpt: 'Search engine optimization continues to evolve. Here are the strategies that are driving real results for our clients in 2025.',
    category: 'SEO',
    date: 'March 10, 2025',
  },
  {
    title: 'Why Your San Antonio Business Needs Local SEO Right Now',
    excerpt: 'Local search is where San Antonio consumers find services near them. If you are not optimized for local search, you are losing customers to your competitors every single day.',
    category: 'Local Marketing',
    date: 'February 28, 2025',
  },
  {
    title: 'The Ultimate Guide to Social Media Marketing for CPG Brands',
    excerpt: 'Consumer packaged goods brands face unique challenges on social media. Here is how to build a strategy that drives retail sales and brand loyalty.',
    category: 'Social Media',
    date: 'February 15, 2025',
  },
  {
    title: 'How AI is Changing Digital Marketing Forever',
    excerpt: 'Artificial intelligence is not just a buzzword - it is fundamentally reshaping how we create, target, and optimize marketing campaigns. Here is what every business owner needs to know.',
    category: 'AI and Technology',
    date: 'February 5, 2025',
  },
  {
    title: 'Branding vs. Marketing: What is the Difference and Why Does It Matter?',
    excerpt: 'Many business owners use the terms interchangeably, but branding and marketing serve very different purposes. Understanding the difference could transform your business strategy.',
    category: 'Branding',
    date: 'January 22, 2025',
  },
  {
    title: 'The ROI of Professional Web Design: What the Numbers Actually Say',
    excerpt: 'Your website is your most important sales tool. Here is the data on what professional web design is actually worth to your bottom line.',
    category: 'Web Design',
    date: 'January 10, 2025',
  },
  {
    title: '5 Signs Your Brand Needs a Redesign',
    excerpt: 'Is your brand holding your business back? Here are the five clearest signals that it is time to invest in a brand refresh.',
    category: 'Branding',
    date: 'December 20, 2024',
  },
  {
    title: 'Social Media Advertising in 2025: Platform-by-Platform Guide',
    excerpt: 'Each platform has its own strengths, audience, and best practices. Here is your comprehensive guide to social media advertising in 2025.',
    category: 'Social Media',
    date: 'December 5, 2024',
  },
  {
    title: 'How to Build a Content Strategy That Actually Drives Traffic',
    excerpt: 'Content marketing is one of the highest ROI strategies available to any business - if you do it right. Here is how to build a content strategy that compounds over time.',
    category: 'Content Marketing',
    date: 'November 18, 2024',
  },
  {
    title: 'Google Business Profile Optimization: The Complete 2025 Guide',
    excerpt: 'Your Google Business Profile is often the first thing potential customers see. Make sure it is working hard for your business with these proven optimization strategies.',
    category: 'Local Marketing',
    date: 'November 5, 2024',
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#0c0c0c', padding: '100px 0 60px', borderBottom: '1px solid #1a1a1a' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            <span style={{ color: '#ff1198', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '16px' }}>
              Our Blog
            </span>
            <h1 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(32px, 5vw, 56px)', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '16px' }}>
              The Beasty Blog
            </h1>
            <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '18px', lineHeight: '1.7' }}>
              Take a bite out of our chunks of marketing information.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section style={{ background: '#0c0c0c', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {blogPosts.map((post, i) => (
              <article key={i} style={{ background: '#111', border: '1px solid #222', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ background: '#ff1198', color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '4px 10px' }}>
                    {post.category}
                  </span>
                  <span style={{ color: '#666', fontFamily: 'Raleway, sans-serif', fontSize: '12px' }}>
                    {post.date}
                  </span>
                </div>
                <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '18px', textTransform: 'uppercase', lineHeight: '1.3', flex: 1 }}>
                  {post.title}
                </h2>
                <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '14px', lineHeight: '1.7' }}>
                  {post.excerpt}
                </p>
                <Link href="#"
                  style={{ color: '#ff1198', fontFamily: 'Raleway, sans-serif', fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: 'auto' }}
>
                  Read More
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
          <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 40px)', textTransform: 'uppercase', marginBottom: '20px' }}>
            Want Marketing Help, Not Just Tips?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'Raleway, sans-serif', fontSize: '16px', marginBottom: '32px' }}>
            Let Beast Creative Agency handle your marketing while you focus on running your business.
          </p>
          <a href="/contact"
            style={{ display: 'inline-block', background: '#000', color: '#fff', padding: '14px 36px', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.08em', borderRadius: 0, textDecoration: 'none' }}>
            Get a Free Assessment
          </a>
        </div>
      </section>
    </>
  );
}
