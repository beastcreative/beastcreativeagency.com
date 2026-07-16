import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Why Choose Beast Creative Agency | San Antonio Digital Marketing',
  description: 'Discover why Beast Creative Agency is San Antonio\'s top digital marketing choice. AI-enhanced campaigns, certified specialists, radical transparency.',
};

export default function WhyBeastPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#0c0c0c', padding: '100px 0 60px', borderBottom: '1px solid #1a1a1a' }}>
        <div className="container">
          <div style={{ maxWidth: '700px' }}>
            <span style={{ color: '#ff1198', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '16px' }}>
              Why Beast
            </span>
            <h1 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(32px, 5vw, 56px)', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '24px' }}>
              Why Choose Beast Creative Agency?
            </h1>
            <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '18px', lineHeight: '1.7' }}>
              In a sea of marketing agencies, here is why San Antonio&apos;s fastest-growing brands choose Beast.
            </p>
          </div>
        </div>
      </section>

      {/* Why section */}
      <section style={{ background: '#080808', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '60px', maxWidth: '900px', margin: '0 auto' }}>
            {[
              {
                num: '01',
                title: 'We Are Certified Specialists',
                content: 'Every member of the Beast Creative team holds certifications from the industry\'s leading platforms - Google, HubSpot, Meta, SEMrush, and more. When you work with us, you are working with professionals who have been tested and verified on the platforms where your money is being spent. We do not learn on your dime.',
              },
              {
                num: '02',
                title: 'We Use AI to Enhance Your Campaigns',
                content: 'Artificial intelligence is reshaping digital marketing, and we are at the forefront. We use AI-powered tools to optimize ad bidding in real time, identify SEO opportunities faster, personalize content at scale, and analyze campaign data with precision that was impossible just a few years ago. The result is better performance at a lower cost.',
              },
              {
                num: '03',
                title: 'We Practice Radical Transparency',
                content: 'We believe you deserve to know exactly what is happening with your marketing budget. That is why every Beast client gets access to a live performance dashboard, monthly strategy calls, and detailed reporting that explains not just what the numbers are, but what they mean and what we are doing about them. No smoke. No mirrors. No excuses.',
              },
              {
                num: '04',
                title: 'We Are San Antonio',
                content: 'We are not a remote team managing your account from a cubicle in another city. We are here. We know San Antonio - the neighborhoods, the culture, the competition, and the opportunity. That local knowledge translates to marketing that actually resonates with your audience.',
              },
              {
                num: '05',
                title: 'We Measure What Matters',
                content: 'Likes and impressions are nice, but they do not pay rent. We build every campaign around the metrics that actually drive your business forward - qualified leads, conversion rates, cost per acquisition, and return on ad spend. If it does not move the revenue needle, we rethink the strategy.',
              },
              {
                num: '06',
                title: 'We Are Your Partners, Not Your Vendors',
                content: 'When you hire Beast Creative Agency, you are not just buying a service - you are gaining a strategic partner. We take the time to deeply understand your business, your customers, and your competitive landscape. Then we build strategies that reflect that understanding. Your goals become our goals.',
              },
            ].map(item => (
              <div key={item.num} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '32px', alignItems: 'start' }}>
                <div style={{ color: '#ff1198', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '56px', lineHeight: 1 }}>
                  {item.num}
                </div>
                <div>
                  <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '22px', textTransform: 'uppercase', marginBottom: '16px' }}>
                    {item.title}
                  </h2>
                  <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '16px', lineHeight: '1.8' }}>
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section style={{ background: '#0c0c0c', padding: '80px 0', borderTop: '1px solid #1a1a1a' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
            <div>
              <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 40px)', textTransform: 'uppercase', marginBottom: '20px' }}>
                Ready to Get Started?
              </h2>
              <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '16px', lineHeight: '1.8', marginBottom: '32px' }}>
                Fill out the form and we will schedule a free consultation to discuss your marketing goals and how Beast Creative Agency can help you achieve them.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  'Free 30-minute strategy consultation',
                  'Custom marketing assessment',
                  'No long-term contracts required',
                  'Results-focused approach',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff1198" strokeWidth="2.5">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span style={{ color: '#ccc', fontFamily: 'Raleway, sans-serif', fontSize: '15px' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
