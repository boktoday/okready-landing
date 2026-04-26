interface PricingProps {
  onJoinClick: () => void;
}

export default function Pricing({ onJoinClick }: PricingProps) {
  const features = [
    "24-week modular curriculum — 7 pillars of antifragility",
    "AI Agent System — automated workflows & decision tools",
    "Buying Guide — smart purchasing for resilience gear & tools",
    "Weekly online setup sessions with live Q&A",
    "Community access — network with fellow participants",
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
            One payment. Full system. No subscriptions. Includes the AI Agent System, 
            Buying Guide, and weekly live sessions — everything you need to build your 
            antifragile life from scratch.
          </p>
        </div>

        {/* Founder note */}
        <div className="max-w-[65ch] mb-16 p-6 rounded-2xl border border-amber-500/10 bg-gradient-to-r from-amber-500/5 to-transparent flex items-start gap-5">
          <div className="w-14 h-14 rounded-full bg-earth-700/30 border border-earth-600/20 flex-shrink-0 overflow-hidden flex items-center justify-center text-amber-300/60">
            <img src="/images/silhouette.svg" alt="" className="w-10 h-10" />
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

        <div className="grid md:grid-cols-5 gap-6">
          {/* Pricing card */}
          <div className="md:col-span-2">
            <div className="p-8 md:p-10 rounded-3xl border border-amber-500/20 bg-gradient-to-b from-amber-500/5 to-transparent glow-amber h-full flex flex-col relative">
              {/* Early Bird badge */}
              <div className="absolute -top-3 right-6 px-3 py-1 bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full text-xs text-earth-950 font-bold uppercase tracking-wider shadow-lg shadow-amber-500/20">
                Early Bird
              </div>
              <div className="mb-6">
                <div className="text-xs text-amber-400 uppercase tracking-widest mb-2">One-time payment</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-earth-100">$79</span>
                  <span className="text-2xl text-earth-400">.99</span>
                </div>
                <div className="text-sm text-earth-500 mt-1">lifetime access</div>
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
            </div>
          </div>

          {/* Feature highlights */}
          <div className="md:col-span-3 grid gap-6">
            {/* AI Agent System block */}
            <div className="p-8 rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-earth-200">AI Agent System</h3>
                  <p className="text-xs text-earth-500">Automation tools & decision agents</p>
                </div>
              </div>
              <p className="text-sm text-earth-400 leading-relaxed">
                Pre-built AI agents for supply chain tracking, energy monitoring, food production planning, 
                and financial agility. Automate the tedious parts of running your antifragile system.
              </p>
            </div>

            {/* Buying Guide block */}
            <div className="p-8 rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-earth-200">Buying Guide</h3>
                  <p className="text-xs text-earth-500">Smart purchasing for resilience gear</p>
                </div>
              </div>
              <p className="text-sm text-earth-400 leading-relaxed">
                Curated recommendations for solar kits, water filtration, gardening supplies, 
                emergency gear, and tools — with price ranges, quality tiers, and where to buy 
                so you don't waste money on junk.
              </p>
            </div>

            {/* Weekly setup & Q&A block */}
            <div className="p-8 rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-earth-200">Weekly Online Setup & Q&A</h3>
                  <p className="text-xs text-earth-500">Live sessions for every module</p>
                </div>
              </div>
              <p className="text-sm text-earth-400 leading-relaxed">
                Every week, join a live online session where we walk through that week's module 
                step by step — setup, configuration, and troubleshooting. Bring your questions 
                for an open Q&A with the community and direct coaching support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
