import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Beast Creative Agency | San Antonio Digital Marketing',
  description: 'Get in touch with Beast Creative Agency. Request a free marketing assessment for your San Antonio business.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: '#0c0c0c',
        padding: '100px 0 60px',
        borderBottom: '1px solid #1a1a1a',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="container">
          <div style={{ maxWidth: '600px', position: 'relative', zIndex: 1 }}>
            <span style={{ color: '#ff1198', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '16px' }}>
              Get In Touch
            </span>
            <h1 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 'clamp(32px, 5vw, 56px)', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '24px' }}>
              Contact Us
            </h1>
            <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '18px', lineHeight: '1.7' }}>
              Ready to take your marketing to the next level? Fill out the form below and we will get back to you within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section style={{ background: '#0c0c0c', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
            {/* Form */}
            <div>
              <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '24px', textTransform: 'uppercase', marginBottom: '32px' }}>
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Info */}
            <div>
              <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '24px', textTransform: 'uppercase', marginBottom: '32px' }}>
                Contact Information
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ color: '#ff1198', flexShrink: 0 }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.18 2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.1a16 16 0 006 6l1.46-1.46a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 13.92z"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>Phone</p>
                    <a href="tel:+12103334141" style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontSize: '18px', fontWeight: 600, textDecoration: 'none' }}>
                      (210) 333-4141
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ color: '#ff1198', flexShrink: 0 }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>Email</p>
                    <a href="mailto:info@beastcreativeagency.com" style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontSize: '16px', fontWeight: 600, textDecoration: 'none' }}>
                      info@beastcreativeagency.com
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ color: '#ff1198', flexShrink: 0 }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ color: '#aaa', fontFamily: 'Raleway, sans-serif', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>Address</p>
                    <p style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontSize: '16px', lineHeight: '1.6' }}>
                      122 Lewis St<br />
                      San Antonio, TX 78212
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div style={{ border: '1px solid #222', overflow: 'hidden' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3472.0316540741!2d-98.4955!3d29.4406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c5f1c3b6b1b1b%3A0x1b1b1b1b1b1b1b1b!2s122%20Lewis%20St%2C%20San%20Antonio%2C%20TX%2078212!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0, display: 'block', filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Beast Creative Agency Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
