'use client';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-alabaster px-6 md:px-12 py-24">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-[10px] uppercase tracking-widest text-navy/50 mb-4">Legal</p>
        <h1 className="font-heading text-4xl md:text-5xl font-black tracking-tight text-navy mb-4">
          Privacy Policy
        </h1>
        <p className="font-mono text-xs text-navy/50 mb-12">Last updated: May 2026</p>

        <div className="space-y-10 font-sans text-sm text-navy/80 leading-relaxed">

          <section>
            <h2 className="font-heading text-lg font-bold text-navy mb-3">1. Who We Are</h2>
            <p>
              Ekavex Digital (&quot;Ekavex&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a digital agency providing web development,
              AI automation, CRM/CMS systems, mobile app development, and digital marketing services.
              Our website is located at <strong>landing-six-tau-72.vercel.app</strong>.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-bold text-navy mb-3">2. Information We Collect</h2>
            <p className="mb-3">We collect information you provide directly to us, including:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Name and email address (contact form, newsletter signup)</li>
              <li>Phone number and company name (contact form)</li>
              <li>Project brief or message content (contact form)</li>
            </ul>
            <p className="mt-3">
              We also collect standard server logs and analytics data (pages visited, browser type,
              device type, approximate location) through analytics tools to improve the site experience.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-bold text-navy mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Respond to your enquiries and project requests</li>
              <li>Send project updates, proposals, and invoices</li>
              <li>Send our newsletter if you opted in (you can unsubscribe at any time)</li>
              <li>Improve the website and our services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-lg font-bold text-navy mb-3">4. Cookies</h2>
            <p>
              Our website may use cookies for analytics and performance monitoring. These cookies do not
              collect personally identifiable information. You can disable cookies in your browser settings
              at any time.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-bold text-navy mb-3">5. Third-Party Services</h2>
            <p className="mb-3">We use the following third-party services that may process your data:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li><strong>Vercel</strong> - website hosting and deployment</li>
              <li><strong>Google Analytics</strong> - website traffic analytics (if enabled)</li>
              <li><strong>WhatsApp (Meta)</strong> - direct messaging via WhatsApp link</li>
            </ul>
            <p className="mt-3">
              Each of these services has its own privacy policy. We do not sell your data to any third party.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-bold text-navy mb-3">6. Data Retention</h2>
            <p>
              We retain contact form submissions and correspondence for up to 3 years for business record-keeping.
              You may request deletion of your data at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-bold text-navy mb-3">7. Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent for marketing communications at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-lg font-bold text-navy mb-3">8. Contact Us</h2>
            <p>
              For any privacy-related questions or requests, please contact us at:{' '}
              <a
                href="mailto:contact@ekavex.in"
                className="text-coral underline underline-offset-2 hover:opacity-80 transition-opacity"
              >
                contact@ekavex.in
              </a>
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
