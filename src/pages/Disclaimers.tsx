import { Link } from 'react-router-dom';

export default function Disclaimers() {
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

        <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-earth-100 mb-4">Disclaimers</h1>
        <p className="text-sm text-earth-500 mb-10">Last updated: April 2026</p>

        <div className="space-y-8 text-sm leading-relaxed text-earth-300">
          <section className="p-6 rounded-2xl border border-amber-500/20 bg-amber-500/5">
            <h2 className="text-lg font-semibold text-amber-300 mb-3">Important: Read This First</h2>
            <p className="text-amber-200/80">The OKReady Australia Antifragile System provides educational content only. It is not professional advice. You are solely responsible for your own decisions, safety, and outcomes.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-earth-100 mb-3">General Disclaimer</h2>
            <p className="text-earth-400">The System is designed to educate and inspire. It does not replace qualified professional advice in any field. Always consult appropriate professionals before making significant decisions that affect your health, safety, finances, or legal standing.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-earth-100 mb-3">Financial Disclaimer</h2>
            <p className="text-earth-400">Content related to income diversification, investing, barter systems, and budgeting is for educational purposes only. We are not financial advisors. Past performance of any strategy mentioned does not guarantee future results. Always consult a licensed financial professional before making investment or debt management decisions.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-earth-100 mb-3">Food & Health Disclaimer</h2>
            <p className="text-earth-400">Content related to gardening, foraging, food preservation (canning, fermentation, dehydrating), edible insects, spirulina, and mushroom cultivation carries inherent risks. Improper preparation can cause illness or injury.</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-earth-400">
              <li>Always verify local foraging species with an expert — misidentification can be fatal</li>
              <li>Follow USDA or equivalent food safety guidelines for canning and fermentation</li>
              <li>Consult a doctor before making significant dietary changes</li>
              <li>Only consume edible insects from certified suppliers — never wild-caught</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-earth-100 mb-3">Energy & Infrastructure Disclaimer</h2>
            <p className="text-earth-400">Content related to solar installation, electrical work, rainwater catchment, and structural modifications to your property is for educational reference only. Always hire licensed professionals for electrical, plumbing, and structural work. Check local council regulations before installing rainwater systems, solar panels, or making property modifications. Improper installation can cause property damage, injury, or death.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-earth-100 mb-3">Physical Skills & First Aid Disclaimer</h2>
            <p className="text-earth-400">First aid, wilderness medicine, and physical safety content is for educational reference and should not replace formal certification. We strongly recommend completing accredited courses (e.g., Wilderness First Aid, Stop The Bleed) before attempting any emergency medical procedures. Physical fitness activities carry risk of injury — consult a healthcare provider before starting any new exercise program.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-earth-100 mb-3">Legal & Compliance Disclaimer</h2>
            <p className="text-earth-400">Content related to zoning laws, barter taxation, ham radio licensing, home-based business permits, and other legal matters is for informational purposes only. Laws vary by jurisdiction and change over time. Always verify requirements with local authorities. You are responsible for ensuring your activities comply with applicable laws, including HOA rules, local council regulations, and state/federal legislation.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-earth-100 mb-3">AI & Technology Disclaimer</h2>
            <p className="text-earth-400">The AI Agent System and related digital tools are provided as-is. We make no guarantees about uptime, accuracy of AI outputs, or compatibility with your hardware. AI can hallucinate or produce incorrect information — always verify critical outputs independently. Maintain offline backups of important data as taught in the curriculum.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-earth-100 mb-3">Coaching Disclaimer</h2>
            <p className="text-earth-400">Coaching sessions provide guidance, accountability, and structured thinking frameworks. A coach is not a therapist, psychologist, financial advisor, or medical professional. If you are experiencing a mental health crisis, contact your local crisis support service or emergency services immediately.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-earth-100 mb-3">No Guarantees</h2>
            <p className="text-earth-400">Results from the System vary by individual. We cannot and do not guarantee that you will achieve specific financial outcomes, develop any particular skill level, or avoid adverse events. Antifragility is a practice, not a guarantee.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-earth-100 mb-3">Contact</h2>
            <p className="text-earth-400">If you have questions about any of the above, contact us at <strong className="text-earth-200">boktoday@gmail.com</strong>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
