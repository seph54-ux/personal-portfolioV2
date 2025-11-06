
'use client';
import { PageHeader } from '@/components/PageHeader';
import { useState, useEffect } from 'react';

export default function PrivacyPolicyPage() {
  const [date, setDate] = useState('');

  useEffect(() => {
    setDate(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }))
  }, [])

  return (
    <>
      <PageHeader
        title="Privacy Policy"
        subtitle="Your privacy is important to us. Here's how we handle your information."
      />
      <div className="max-w-4xl mx-auto prose dark:prose-invert text-foreground/90 animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <h2>Introduction</h2>
        <p>
          Welcome to Philjoseph Orlina's portfolio website (&#34;we,&#34; &#34;our,&#34; or &#34;us&#34;). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
        </p>

        <h2>Information We Collect</h2>
        <h3>Personal Data</h3>
        <p>
          Personally identifiable information, such as your name, email address, and any other content you voluntarily provide to us when you use our contact form. You are under no obligation to provide us with personal information of any kind; however, your refusal to do so may prevent you from using certain features of the Site.
        </p>
        
        <h2>Use of Your Information</h2>
        <p>
          Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
        </p>
        <ul>
          <li>Respond to your project inquiries and support requests.</li>
          <li>Email you regarding your inquiry.</li>
        </ul>

        <h2>Disclosure of Your Information</h2>
        <p>
            We use a third-party service, EmailJS, to manage and send emails initiated through our contact form. When you submit the contact form, the information you provide (name, email, message, etc.) is sent through EmailJS to our email account. You can review EmailJS's privacy policy for more information on how they handle data.
        </p>
        
        <h2>Affiliate Disclaimer</h2>
        <p>
          Our website may feature affiliate links. If you click on an affiliate link and make a purchase, we may receive a commission at no extra cost to you. We only recommend products and services we believe will add value to our users.
        </p>

        <h2>Security of Your Information</h2>
        <p>
          We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
        </p>

        <h2>Policy for Children</h2>
        <p>
          We do not knowingly solicit information from or market to children under the age of 13. If we learn that we have collected personal information from a child under age 13 without verification of parental consent, we will delete that information as quickly as possible.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions or comments about this Privacy Policy, please contact us using the contact form on our website.
        </p>

        {date && <p><small>Last updated: {date}</small></p>}
      </div>
    </>
  );
}
