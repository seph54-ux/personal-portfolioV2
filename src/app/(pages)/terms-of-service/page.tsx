import { PageHeader } from '@/components/PageHeader';

export default function TermsOfServicePage() {
  return (
    <>
      <PageHeader
        title="Terms of Service"
        subtitle="Please read these terms carefully before using our services."
      />
      <div className="max-w-4xl mx-auto prose dark:prose-invert text-foreground/90 animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using this website (&#34;the Site&#34;), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this Site.
        </p>

        <h2>2. Intellectual Property</h2>
        <p>
          The Site and its original content, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Philjoseph Orlina, its licensors, or other providers of such material and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. You are not permitted to use these materials without our prior written consent.
        </p>

        <h2>3. Use of the Site</h2>
        <p>
          This Site and the content provided are for your personal and non-commercial use. You agree to use the Site only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else’s use and enjoyment of the Site.
        </p>
        
        <h2>4. Affiliate Links and Recommendations</h2>
        <p>
          The Site may contain links to affiliate websites, and we receive an affiliate commission for any purchases made by you on the affiliate website using such links. Our affiliate partnerships are with companies whose products we use and recommend. We are not responsible for the content or practices of these third-party sites.
        </p>

        <h2>5. Disclaimer of Warranties</h2>
        <p>
          The Site is provided on an &#34;AS IS&#34; and &#34;AS AVAILABLE&#34; basis. We disclaim all warranties of any kind, whether express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We make no warranty that the Site will meet your requirements, or that it will be uninterrupted, timely, secure, or error-free.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          In no event shall Philjoseph Orlina, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Site.
        </p>

        <h2>7. Changes to Terms</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us through the contact form available on the Site.
        </p>

        <p><small>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</small></p>
      </div>
    </>
  );
}
