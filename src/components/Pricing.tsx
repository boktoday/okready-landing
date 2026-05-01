interface PricingProps {
  onJoinClick: () => void;
}

export default function Pricing({ onJoinClick }: PricingProps) {
  const features = [
    "24-week self-paced modular curriculum — 8 pillars of antifragility",
    "AI Agent System — automated workflows & decision tools",
    "Buying Guide — smart purchasing for resilience gear & tools",
    "Weekly online setup sessions with live Q&A",
    "Starter resource library (books, templates, checklists)",
    "Lifetime access — all future updates included",
    "Afterpay payments available",
  ];

  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="max-w-[65ch] mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
            <span className="gradient-text">Lifetime Access</span>{' '}
            <span className="text-earth-100">from $79.99</span>
          </h2>
          <p className="text-base md:text-lg text-earth-400 leading-relaxed">
            Built for <strong className="text-amber-300">everyday people, not preppers</strong>. No prior experience needed. 
            One payment. Full system. Includes the AI Agent System, 
            Buying Guide, and weekly live sessions — everything you need to build your 
            antifragile life from scratch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {/* Left column — Founder note on mobile, above card */}
          <div className="md:col-span-1">
            {/* Founder note */}
            <div className="mb-4 p-4 md:p-5 rounded-2xl border border-amber-500/10 bg-gradient-to-r from-amber-500/5 to-transparent flex items-start gap-3">
              <div className="w-10 h-10 rounded-full border border-earth-600/20 flex-shrink-0 overflow-hidden">
                <img src="https://iam.aichampion.com.au/assets/brendan-okeefe-profile-cap-2026-compressed-BxhSLMkt.png" alt="Brendan O'Keefe" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-xs text-earth-400 leading-relaxed italic">
                  "I've spent years testing, failing at, and refining these systems — so you don't have to. 
                  I had to figure out what works. You just get the playbook."
                </p>
                <p className="text-xs text-amber-400 font-medium mt-3 tracking-wider uppercase">
                  — Brendan, OK Ready Australia
                </p>
              </div>
            </div>

            {/* Pricing card */}
            <div className="p-6 md:p-8 rounded-3xl border border-amber-500/20 bg-gradient-to-b from-amber-500/5 to-transparent glow-amber h-full flex flex-col relative">
              {/* Early Bird badge */}
              <div className="absolute -top-3 right-6 px-3 py-1 bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full text-xs text-earth-950 font-bold uppercase tracking-wider shadow-lg shadow-amber-500/20">
                Early Bird
              </div>
              <div className="mb-6">
                <div className="text-xs text-amber-400 uppercase tracking-widest mb-2">One-time payment — Early Bird</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-earth-100">$79</span>
                  <span className="text-2xl text-earth-400">.99</span>
                </div>
                <div className="text-sm text-earth-500 mt-1">lifetime access</div>
                <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-amber-500/10 border border-amber-500/20">
                  <svg className="w-3 h-3 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[11px] text-amber-300 font-medium">Lock in now — going up to $99.99 in June</span>
                </div>
              </div>

              <div className="flex-1 space-y-1 mb-1">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-xs text-earth-300">{f}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={onJoinClick}
                className="w-full px-6 py-3 bg-amber-500/20 border border-amber-500/30 text-amber-300 rounded-xl text-sm font-semibold hover:bg-amber-500/30 hover:text-amber-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Join the Waitlist
              </button>

              <div className="mt-3 flex items-center justify-center gap-2 text-xs text-earth-500">
                <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                7-day money back guarantee — no questions asked
              </div>

              <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-center gap-2 text-xs">
                <svg className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
                <span className="text-emerald-400 font-medium">10% of profits</span>
                <span className="text-earth-500">donated to local food banks</span>
              </div>
            </div>
          </div>

          {/* Right column — AI Agents Ecosystem */}
          <div className="md:col-span-1">
            <div className="p-6 md:p-8 rounded-3xl border border-amber-500/20 bg-gradient-to-b from-amber-500/5 to-transparent h-full flex flex-col items-center justify-center min-h-[360px]">
              <img
                src="/images/australia-family.jpg"
                alt="Australian family with map of Australia"
                className="w-full max-w-[500px] h-auto object-contain rounded-2xl"
              />
              <p className="text-xs text-earth-500 text-center mt-4 max-w-[30ch] leading-relaxed">
                Built for Australian families. Real skills. Real resilience. No fluff.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
