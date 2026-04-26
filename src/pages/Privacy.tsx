import { Link } from 'react-router-dom';

export default function Privacy() {
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

        <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-earth-100 mb-4">Privacy Policy</h1>
        <p className="text-sm text-earth-500 mb-10">Last updated: April 2026</p>

        <div className="space-y-8 text-sm leading-relaxed text-earth-300">
          <section>
            <h2 className="text-lg font-semibold text-earth-100 mb-3">1. Information We Collect</h2>
            <p className="mb-2">When you join our waitlist or purchase a program, we collect:</p>
            <ul className="list-disc pl-5 space-y-1 text-earth-400">
              <li><strong className="text-earth-200">Name and email address</strong> — provided via waitlist or purchase form</li>
              <li><strong className="text-earth-200">Coaching information</strong> — shared during one-on-one sessions (goals, vulnerabilities, progress)</li>
              <li><strong className="text-earth-200">Payment data</strong> — processed securely through our payment provider (never stored by us)</li>
              <li><strong className="text-earth-200">Usage data</strong> — anonymised analytics to improve the curriculum</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-earth-100 mb-3">2. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-1 text-earth-400">
              <li>To deliver the curriculum, resources, and coaching you've purchased</li>
              <li>To send updates about the system, new content, and community events</li>
              <li>To improve the curriculum based on aggregate user data</li>
              <li>To process payments and manage your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-earth-100 mb-3">3. Third-Party Services</h2>
            <p className="mb-2">We use the following third-party services:</p>
            <ul className="list-disc pl-5 space-y-1 text-earth-400">
              <li><strong className="text-earth-200">Activepieces</strong> — webhook processing for waitlist sign-ups</li>
              <li><strong className="text-earth-200">Payment processor</strong> — secure payment handling for purchases</li>
              <li><strong className="text-earth-200">Email delivery service</strong> — for sending updates and resources</li>
            </ul>
            <p className="mt-2 text-earth-500">Each service is GDPR-compliant and stores data in accordance with their respective privacy policies. We do not sell your data to any third party.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-earth-100 mb-3">4. Data Storage & Security</h2>
            <p className="text-earth-400">Your data is stored securely using industry-standard encryption. Waitlist data is transmitted via HTTPS to our webhook endpoint. We retain your data for as long as your account is active or as needed to provide the service. You may request deletion at any time.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-earth-100 mb-3">5. Your Rights</h2>
            <p className="mb-2 text-earth-400">You have the right to:</p>
            <ul className="list-disc pl-5 space-y-1 text-earth-400">
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Withdraw consent at any time</li>
              <li>Lodge a complaint with your local data protection authority</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-earth-100 mb-3">6. Contact</h2>
            <p className="text-earth-400">For privacy-related inquiries, contact us at <strong className="text-earth-200">boktoday@gmail.com</strong>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
