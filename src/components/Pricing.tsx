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
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
            <span className="gradient-text">Lifetime Access</span>{' '}
            <span className="text-earth-100">from $79.99</span>
          </h2>
          <p className="text-lg text-earth-400 leading-relaxed">
            Built for <strong className="text-amber-300">everyday people, not preppers</strong>. No prior experience needed. 
            One payment. Full system. Includes the AI Agent System, 
            Buying Guide, and weekly live sessions — everything you need to build your 
            antifragile life from scratch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left column — Founder note on mobile, above card */}
          <div className="md:col-span-1">
            {/* Founder note */}
            <div className="mb-6 p-6 rounded-2xl border border-amber-500/10 bg-gradient-to-r from-amber-500/5 to-transparent flex items-start gap-5">
              <div className="w-14 h-14 rounded-full border border-earth-600/20 flex-shrink-0 overflow-hidden">
                <img src="https://iam.aichampion.com.au/assets/brendan-okeefe-profile-cap-2026-compressed-BxhSLMkt.png" alt="Brendan O'Keefe" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-sm text-earth-400 leading-relaxed italic">
                  "I've spent years testing, failing at, and refining these systems — so you don't have to. 
                  I had to figure out what works. You just get the playbook."
                </p>
                <p className="text-xs text-amber-400 font-medium mt-3 tracking-wider uppercase">
                  — Brendan, OK Ready Australia
                </p>
              </div>
            </div>

            {/* Pricing card */}
            <div className="p-8 md:p-10 rounded-3xl border border-amber-500/20 bg-gradient-to-b from-amber-500/5 to-transparent glow-amber h-full flex flex-col relative">
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

              <div className="flex-1 space-y-3 mb-8">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-earth-300">{f}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={onJoinClick}
                className="w-full px-6 py-3.5 bg-amber-500/20 border border-amber-500/30 text-amber-300 rounded-xl text-sm font-semibold hover:bg-amber-500/30 hover:text-amber-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Join the Waitlist
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-earth-500">
                <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                7-day money back guarantee — no questions asked
              </div>

              <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-center gap-2 text-xs">
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
            <div className="p-8 md:p-10 rounded-3xl border border-amber-500/20 bg-gradient-to-b from-amber-500/5 to-transparent h-full flex flex-col">
              <div className="text-xs font-semibold tracking-[0.2em] text-amber-400 uppercase mb-6 text-center">
                AI Agents Ecosystem
              </div>

              {/* Central circle diagram */}
              <div className="relative flex-1 flex items-center justify-center min-h-[400px]">
                {/* Orbital ring SVGs */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                  <circle cx="50" cy="50" r="35" fill="none" stroke="rgba(251,191,36,0.10)" strokeWidth="0.4" />
                  <circle cx="50" cy="50" r="25" fill="none" stroke="rgba(52,211,153,0.08)" strokeWidth="0.3" />
                </svg>

                {/* Center nucleus */}
                <div className="absolute w-28 h-28 rounded-full bg-gradient-to-br from-amber-500 to-emerald-500 flex items-center justify-center z-10 shadow-lg shadow-amber-500/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-earth-950 leading-none">OK Ready</div>
                    <div className="text-[10px] font-semibold text-earth-950/80">AI Ecosystem</div>
                  </div>
                </div>

                {/* Orbiting nodes */}
                {/* Top */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 text-center">
                  <div className="w-16 h-16 rounded-full bg-earth-700/40 border border-amber-500/20 flex items-center justify-center mx-auto mb-1">
                    <span className="text-[10px] font-bold text-amber-300 leading-tight text-center">AI Agent<br/>System</span>
                  </div>
                </div>
                {/* Top Right */}
                <div className="absolute top-[18%] right-3 text-center">
                  <div className="w-14 h-14 rounded-full bg-earth-700/40 border border-emerald-500/20 flex items-center justify-center mx-auto mb-1">
                    <span className="text-[9px] font-bold text-emerald-300 leading-tight text-center">Buying<br/>Guide</span>
                  </div>
                </div>
                {/* Right */}
                <div className="absolute top-1/2 -translate-y-1/2 right-1 text-center">
                  <div className="w-14 h-14 rounded-full bg-earth-700/40 border border-cyan-500/20 flex items-center justify-center mx-auto mb-1">
                    <span className="text-[9px] font-bold text-cyan-300 leading-tight text-center">Weekly<br/>Sessions</span>
                  </div>
                </div>
                {/* Bottom Right */}
                <div className="absolute bottom-[18%] right-3 text-center">
                  <div className="w-14 h-14 rounded-full bg-earth-700/40 border border-purple-500/20 flex items-center justify-center mx-auto mb-1">
                    <span className="text-[9px] font-bold text-purple-300 leading-tight text-center">Resource<br/>Library</span>
                  </div>
                </div>
                {/* Bottom */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-center">
                  <div className="w-16 h-16 rounded-full bg-earth-700/40 border border-amber-500/20 flex items-center justify-center mx-auto mb-1">
                    <span className="text-[10px] font-bold text-amber-300 leading-tight text-center">24-Week<br/>Curriculum</span>
                  </div>
                </div>
                {/* Bottom Left */}
                <div className="absolute bottom-[18%] left-3 text-center">
                  <div className="w-14 h-14 rounded-full bg-earth-700/40 border border-emerald-500/20 flex items-center justify-center mx-auto mb-1">
                    <span className="text-[9px] font-bold text-emerald-300 leading-tight text-center">AI Agent<br/>Prompts</span>
                  </div>
                </div>
                {/* Left */}
                <div className="absolute top-1/2 -translate-y-1/2 left-1 text-center">
                  <div className="w-14 h-14 rounded-full bg-earth-700/40 border border-cyan-500/20 flex items-center justify-center mx-auto mb-1">
                    <span className="text-[9px] font-bold text-cyan-300 leading-tight text-center">Lifetime<br/>Updates</span>
                  </div>
                </div>
                {/* Top Left */}
                <div className="absolute top-[18%] left-3 text-center">
                  <div className="w-14 h-14 rounded-full bg-earth-700/40 border border-purple-500/20 flex items-center justify-center mx-auto mb-1">
                    <span className="text-[9px] font-bold text-purple-300 leading-tight text-center">Checklists<br/>&amp; Tools</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-earth-500 text-center mt-4 max-w-[40ch] mx-auto leading-relaxed">
                Everything connects. The AI Agent System orchestrates across curriculum, buying guide, 
                weekly sessions, and checklists — giving you a complete, integrated ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
