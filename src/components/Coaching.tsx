interface CoachingProps {
  onJoinClick: () => void;
}

export default function Coaching({ onJoinClick }: CoachingProps) {
  const tiers = [
    {
      title: "Deep Guidance",
      sessions: "Deeper guidance & support",
      price: "$1,500",
      desc: "In-depth weekly coaching with direct AI Agent System setup and troubleshooting. Personalised action plans, accountability check-ins, and priority async support.",
      popular: false,
    },
    {
      title: "Complete Guidance",
      sessions: "Full-service concierge",
      price: "$6,000",
      desc: "White-glove everything. Complete personal shopping for all resilience gear, solar, water, food systems, and emergency infrastructure. Full system design, sourcing, and implementation oversight. Limited to 1 client per quarter.",
      popular: true,
    },
  ];

  return (
    <section id="coaching" className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="max-w-[65ch] mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
            <span className="text-earth-100">One-on-One</span>{' '}
            <span className="gradient-text-amber">Coaching</span>
          </h2>
          <p className="text-lg text-earth-400 leading-relaxed">
            Go beyond the curriculum with personalised coaching. We'll assess your current 
            situation, identify your biggest vulnerabilities, and build a custom antifragility 
            plan — with weekly accountability to make sure it happens.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.title}
              className={`relative p-8 md:p-10 rounded-2xl border ${
                tier.popular
                  ? 'border-amber-500/30 bg-gradient-to-b from-amber-500/5 to-transparent'
                  : 'border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent'
              } card-hover flex flex-col`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full text-xs text-amber-300 font-medium uppercase tracking-wider whitespace-nowrap">
                  Limited — 2 spots per quarter
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-earth-200 mb-1">{tier.title}</h3>
                <p className="text-sm text-earth-500">{tier.sessions}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-bold text-earth-100">{tier.price}</span>
                  <span className="text-sm text-earth-500">/month{tier.popular ? ' + shopping budget' : ''}</span>
                </div>
              </div>

              <p className="text-sm text-earth-400 leading-relaxed mb-8 flex-1">
                {tier.desc}
              </p>

              <div className="flex items-center gap-2 mb-6 text-xs text-earth-500">
                <svg className="w-4 h-4 text-earth-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Privacy &amp; NDA included
              </div>

              <button
                onClick={onJoinClick}
                className={`w-full px-6 py-3.5 rounded-xl text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] ${
                  tier.popular
                    ? 'bg-amber-500/20 border border-amber-500/30 text-amber-300 hover:bg-amber-500/30 hover:text-amber-200'
                    : 'bg-white/[0.03] border border-white/10 text-earth-300 hover:bg-white/[0.06] hover:text-earth-200'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-2xl border border-white/5 bg-white/[0.02]">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-earth-200 mb-2">What coaching covers</h4>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-earth-400">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber-400" />
                  Personalised vulnerability assessment
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber-400" />
                  Custom antifragility action plan
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber-400" />
                  Weekly accountability check-ins
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber-400" />
                  AI Agent System onboarding & setup
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber-400" />
                  Supply chain & energy auditing
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber-400" />
                  Food production & garden planning
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber-400" />
                  Community network building
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber-400" />
                  Direct async messaging support
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber-400" />
                  Complete personal shopping*
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber-400" />
                  Full system implementation*
                </div>
              </div>
              <p className="text-xs text-earth-500 mt-3">* Complete Guidance tier only</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
