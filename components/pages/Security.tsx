import { Link } from 'react-router-dom';

export default function Security() {
  return (
    <div className="min-h-[100dvh] bg-earth-950 text-earth-200">
      <div className="grain-overlay" />
      <div className="max-w-[800px] mx-auto px-6 py-20 md:py-28">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-earth-400 hover:text-earth-200 transition-colors mb-10">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to OK Ready
        </Link>

        <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-earth-100 mb-4">Security</h1>
        <p className="text-sm text-earth-500 mb-10">How we protect your data and privacy</p>

        <div className="space-y-8 text-sm leading-relaxed text-earth-300">
          <section>
            <h2 className="text-lg font-semibold text-earth-100 mb-3">Data Transmission</h2>
            <p className="text-earth-400">All data transmitted between your browser and our services is encrypted using TLS (Transport Layer Security). This includes waitlist sign-ups, form submissions, and any communication through our website. Our webhook endpoint (Activepieces) also uses HTTPS for all data in transit.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-earth-100 mb-3">Data Storage</h2>
            <p className="text-earth-400">We store only the minimum data necessary to deliver the System:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-earth-400">
              <li><strong className="text-earth-200">Waitlist data</strong> — name and email, stored securely via our webhook provider</li>
              <li><strong className="text-earth-200">Customer data</strong> — name, email, and purchase history through our payment processor</li>
              <li><strong className="text-earth-200">Coaching notes</strong> — stored with your consent, accessible only to your coach</li>
            </ul>
            <p className="mt-2 text-earth-500">We do not store credit card numbers. All payments are processed by our PCI-compliant payment provider.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-earth-100 mb-3">Account Security</h2>
            <p className="text-earth-400">If the System includes a user account portal, we strongly recommend:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-earth-400">
              <li>Using a strong, unique password</li>
              <li>Enabling two-factor authentication where available</li>
              <li>Not sharing your account credentials</li>
              <li>Logging out on shared or public devices</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-earth-100 mb-3">Coaching Session Privacy</h2>
            <p className="text-earth-400">One-on-one coaching sessions are conducted via secure video platforms. Sessions are not recorded unless explicitly agreed upon by both parties in writing. Any notes taken during coaching are stored securely and accessible only to your coach and you.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-earth-100 mb-3">Third-Party Security</h2>
            <p className="text-earth-400">We carefully vet all third-party services used in the operation of OK Ready Australia:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-earth-400">
              <li><strong className="text-earth-200">Activepieces</strong> — GDPR-compliant workflow automation</li>
              <li><strong className="text-earth-200">Payment processor</strong> — PCI DSS Level 1 compliant</li>
              <li><strong className="text-earth-200">Email service</strong> — encrypted storage and transmission</li>
              <li><strong className="text-earth-200">Video conferencing</strong> — end-to-end encryption where available</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-earth-100 mb-3">Data Breach Response</h2>
            <p className="text-earth-400">In the unlikely event of a data breach, we will:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-earth-400">
              <li>Notify affected users within 72 hours</li>
              <li>Provide details on what data was accessed</li>
              <li>Outline steps we are taking to prevent recurrence</li>
              <li>Advise on any actions you should take (e.g., password reset)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-earth-100 mb-3">Your Responsibility</h2>
            <p className="text-earth-400">Security is a shared responsibility. The curriculum teaches digital hygiene (password managers, 2FA, offline backups, phishing awareness) — we encourage you to implement these practices for your own digital resilience. OK Ready Australia is not liable for security incidents resulting from user negligence or third-party service breaches.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-earth-100 mb-3">Reporting a Vulnerability</h2>
            <p className="text-earth-400">If you discover a security vulnerability in our website or services, please report it discreetly to <strong className="text-earth-200">boktoday@gmail.com</strong>. We take all reports seriously and will respond promptly.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-earth-100 mb-3">Contact</h2>
            <p className="text-earth-400">For security-related inquiries, contact us at <strong className="text-earth-200">boktoday@gmail.com</strong>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
