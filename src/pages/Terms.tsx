import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div className="min-h-[100dvh] bg-earth-950 text-earth-200">
      <div className="grain-overlay" />
      <div className="max-w-[800px] mx-auto px-6 py-20 md:py-28">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-earth-400 hover:text-earth-200 transition-colors mb-10">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to OKReady
        </Link>

        <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-earth-100 mb-4">Terms of Service</h1>
        <p className="text-sm text-earth-500 mb-10">Last updated: April 2026</p>

        <div className="space-y-8 text-sm leading-relaxed text-earth-300">
          <section>
            <h2 className="text-lg font-semibold text-earth-100 mb-3">1. Acceptance of Terms</h2>
            <p className="text-earth-400">By purchasing or accessing the OKReady Australia Antifragile System (the "System"), including the curriculum, AI Agent System, Buying Guide, coaching services, and related materials, you agree to be bound by these Terms of Service.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-earth-100 mb-3">2. Products & Pricing</h2>
            <div className="space-y-3 text-earth-400">
              <div>
                <h3 className="font-semibold text-earth-200">System Access</h3>
                <p>$79.99 AUD — one-time payment for lifetime access to the curriculum, AI Agent System, Buying Guide, and weekly live sessions.</p>
              </div>
              <div>
                <h3 className="font-semibold text-earth-200">Coaching</h3>
                <p>One-on-one coaching available from $1,000 AUD per month. Pricing tiers are as displayed on the OKReady Sales Page and are subject to change for new clients.</p>
              </div>
              <div>
                <h3 className="font-semibold text-earth-200">Payment Options</h3>
                <p>Full payment or Afterpay instalments are available at checkout.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-earth-100 mb-3">3. Refund Policy</h2>
            <p className="text-earth-400">We offer a <strong className="text-earth-200">7-day money-back guarantee</strong>. If you are not satisfied with the System within 7 days of purchase, contact us at <strong className="text-earth-200">boktoday@gmail.com</strong> for a full refund — no questions asked. Coaching packages are billed monthly and may be cancelled with 14 days' notice.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-earth-100 mb-3">4. Intellectual Property</h2>
            <p className="text-earth-400">All content provided as part of the System — including curriculum materials, AI Agent configurations, Buying Guide, video and audio content, templates, checklists, and coaching frameworks — is the intellectual property of OKReady Australia. You receive a personal, non-transferable license to use the materials for your own antifragility journey. You may not redistribute, resell, or share access to the System with others.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-earth-100 mb-3">5. User Conduct</h2>
            <p className="text-earth-400">You agree to use the System and community spaces respectfully. Harassment, abuse, or exploitation of other members will result in immediate termination of access without refund.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-earth-100 mb-3">6. Limitation of Liability</h2>
            <p className="text-earth-400">OKReady Australia provides educational content and coaching guidance only. You are solely responsible for your decisions, actions, and outcomes. We are not liable for any direct, indirect, or consequential damages arising from your use of the System.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-earth-100 mb-3">7. Termination</h2>
            <p className="text-earth-400">We reserve the right to terminate or suspend access to the System for violation of these terms. In such cases, refunds will be considered on a case-by-case basis.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-earth-100 mb-3">8. Changes to Terms</h2>
            <p className="text-earth-400">We may update these terms from time to time. Continued use of the System after changes constitutes acceptance of the updated terms.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-earth-100 mb-3">9. Contact</h2>
            <p className="text-earth-400">For questions about these terms, contact us at <strong className="text-earth-200">boktoday@gmail.com</strong>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
