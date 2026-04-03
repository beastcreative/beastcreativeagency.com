import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Beast Creative Agency',
  description: 'Privacy Policy for Beast Creative Agency. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
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
          <h1
            style={{
              color: '#fff',
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 4vw, 48px)',
              textTransform: 'uppercase',
              lineHeight: 1.2,
            }}
          >
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: '#0c0c0c', padding: '60px 0 100px' }}>
        <div
          className="container"
          style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px', color: '#ccc', fontFamily: 'Raleway, sans-serif', fontSize: '16px', lineHeight: '1.8' }}
        >
          <p>
            At Beast Creative Agency, accessible from{' '}
            <a href="https://beastcreativeagency.com/" style={{ color: '#ff1198' }}>
              https://beastcreativeagency.com/
            </a>
            , one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Beast Creative Agency and how we use it.
          </p>
          <p>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us. This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Beast Creative Agency. This policy is not applicable to any information collected offline or via channels other than this website.
          </p>

          <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '22px', textTransform: 'uppercase', marginTop: '40px', marginBottom: '16px' }}>Consent</h2>
          <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>

          <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '22px', textTransform: 'uppercase', marginTop: '40px', marginBottom: '16px' }}>Information We Collect</h2>
          <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
          <p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
          <p>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>

          <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '22px', textTransform: 'uppercase', marginTop: '40px', marginBottom: '16px' }}>How We Use Your Information</h2>
          <p>We use the information we collect in various ways, including to:</p>
          <ul style={{ marginLeft: '24px', marginBottom: '20px' }}>
            <li style={{ marginBottom: '8px' }}>Provide, operate, and maintain our website</li>
            <li style={{ marginBottom: '8px' }}>Improve, personalize, and expand our website</li>
            <li style={{ marginBottom: '8px' }}>Understand and analyze how you use our website</li>
            <li style={{ marginBottom: '8px' }}>Develop new products, services, features, and functionality</li>
            <li style={{ marginBottom: '8px' }}>Communicate with you, including for customer service, updates, and marketing purposes</li>
            <li style={{ marginBottom: '8px' }}>Send you emails</li>
            <li style={{ marginBottom: '8px' }}>Find and prevent fraud</li>
          </ul>

          <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '22px', textTransform: 'uppercase', marginTop: '40px', marginBottom: '16px' }}>Log Files</h2>
          <p>
            Beast Creative Agency follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
          </p>

          <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '22px', textTransform: 'uppercase', marginTop: '40px', marginBottom: '16px' }}>Cookies and Web Beacons</h2>
          <p>
            Like any other website, Beast Creative Agency uses cookies. These cookies are used to store information including visitors preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users experience by customizing our web page content based on visitors browser type and/or other information.
          </p>

          <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '22px', textTransform: 'uppercase', marginTop: '40px', marginBottom: '16px' }}>Advertising Partners Privacy Policies</h2>
          <p>
            You may consult this list to find the Privacy Policy for each of the advertising partners of Beast Creative Agency. Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Beast Creative Agency.
          </p>

          <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '22px', textTransform: 'uppercase', marginTop: '40px', marginBottom: '16px' }}>Third Party Privacy Policies</h2>
          <p>
            Beast Creative Agency's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information.
          </p>

          <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '22px', textTransform: 'uppercase', marginTop: '40px', marginBottom: '16px' }}>CCPA Privacy Rights</h2>
          <p>Under the CCPA, among other rights, California consumers have the right to:</p>
          <ul style={{ marginLeft: '24px', marginBottom: '20px' }}>
            <li style={{ marginBottom: '8px' }}>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
            <li style={{ marginBottom: '8px' }}>Request that a business delete any personal data about the consumer that a business has collected.</li>
            <li style={{ marginBottom: '8px' }}>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</li>
          </ul>

          <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '22px', textTransform: 'uppercase', marginTop: '40px', marginBottom: '16px' }}>GDPR Data Protection Rights</h2>
          <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
          <ul style={{ marginLeft: '24px', marginBottom: '20px' }}>
            <li style={{ marginBottom: '8px' }}>The right to access - You have the right to request copies of your personal data.</li>
            <li style={{ marginBottom: '8px' }}>The right to rectification - You have the right to request that we correct any information you believe is inaccurate.</li>
            <li style={{ marginBottom: '8px' }}>The right to erasure - You have the right to request that we erase your personal data, under certain conditions.</li>
            <li style={{ marginBottom: '8px' }}>The right to restrict processing - You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
            <li style={{ marginBottom: '8px' }}>The right to data portability - You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
          </ul>

          <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '22px', textTransform: 'uppercase', marginTop: '40px', marginBottom: '16px' }}>Children's Information</h2>
          <p>
            Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. Beast Creative Agency does not knowingly collect any Personal Identifiable Information from children under the age of 13.
          </p>

          <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '22px', textTransform: 'uppercase', marginTop: '40px', marginBottom: '16px' }}>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please{' '}
            <a href="/contact" style={{ color: '#ff1198' }}>
              contact us
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
