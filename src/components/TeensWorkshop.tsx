interface TeensWorkshopProps {
  onRegisterClick: () => void;
}

export default function TeensWorkshop({ onRegisterClick }: TeensWorkshopProps) {
  return (
    <section id="teens-workshop" className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="max-w-[65ch] mb-12">
          <div className="text-xs font-semibold tracking-[0.2em] text-amber-400 uppercase mb-4">
            School Holiday Program
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
            <span className="text-earth-100">OK Ready</span>{' '}
            <span className="gradient-text">Workshop for Teens</span>
          </h2>
          <p className="text-lg text-earth-400 leading-relaxed">
            A <strong className="text-amber-300">two-week, hands-on program</strong> during the school holidays.
            Mondays &amp; Fridays, 2 hours per session. Your teen will walk away with
            practical life skills that schools don't teach — and a genuine sense of confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Info card */}
          <div className="p-8 md:p-10 rounded-3xl border border-amber-500/20 bg-gradient-to-b from-amber-500/5 to-transparent glow-amber">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5"/><path d="M3 21v-2a7 7 0 0 1 7-7h4a7 7 0 0 1 7 7v2"/></svg>
              </div>
              <div>
                <div className="font-semibold text-earth-100 text-lg">For Ages 13–17</div>
                <div className="text-sm text-earth-500">No prior experience needed</div>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-6 bg-amber-500/5 rounded-xl px-4 py-2.5 border border-amber-500/10">
              <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              <span className="text-xs text-amber-300 leading-relaxed">Our trainers hold <strong className="text-amber-200">NDIS</strong> and <strong className="text-amber-200">Working with Children</strong> checks</span>
            </div>

            <div className="space-y-4 text-sm text-earth-400">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 text-xs mt-0.5 flex-shrink-0">1</div>
                <div>
                  <span className="text-earth-200 font-medium">July School Holidays</span>
                  <br />Two weeks: Mon &amp; Fri, 10am–12pm AEST
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 text-xs mt-0.5 flex-shrink-0">2</div>
                <div>
                  <span className="text-earth-200 font-medium">September School Holidays</span>
                  <br />Two weeks: Mon &amp; Fri, 10am–12pm AEDT
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 text-xs mt-0.5 flex-shrink-0">3</div>
                <div>
                  <span className="text-earth-200 font-medium">Online via Zoom</span>
                  <br />Live, interactive, small group (max 8 teens)
                </div>
              </div>
            </div>
          </div>

          {/* Details + Price card */}
          <div className="p-8 md:p-10 rounded-3xl border border-amber-500/20 bg-gradient-to-b from-amber-500/5 to-transparent glow-amber h-full flex flex-col">
            <h3 className="text-lg font-semibold text-earth-100 mb-4">What's Covered</h3>
            <ul className="space-y-3 mb-8">
              {[
                "Emergency preparedness — what to do when things go wrong",
                "AI literacy &amp; AI Agents — how to use the latest agentic AI tools safely and effectively",
                "Basic first aid &amp; situational awareness",
                "Growing food — sprouts, microgreens, container gardening",
                "Digital hygiene — passwords, scams, online safety",
                "Community building — how to be a good neighbour",
                "Understanding the Trivium and Quadrivium — classical thinking skills for clear reasoning",
                "Side hustles &amp; marketing basics — turning skills into income",
                "Confidence &amp; resilience — the mindset that handles anything",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-earth-400">
                  <svg className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold text-amber-300">$395</span>
                <span className="text-sm text-earth-500">per teen</span>
              </div>
              <p className="text-xs text-earth-500 mb-6">
                All materials provided digitally. Just need a computer or tablet with internet.
              </p>
              <button
                onClick={onRegisterClick}
                className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-earth-950 font-semibold text-sm hover:from-amber-400 hover:to-amber-500 transition-all duration-300"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>

        {/* Teens workshop image */}
        <div className="mt-12 relative rounded-2xl overflow-hidden">
          <img
            src="/images/okready-teens-workshop.jpg"
            alt="Teens learning practical skills together around a table with plants and laptops"
            className="w-full h-auto object-cover rounded-2xl"
            style={{ maxHeight: '420px' }}
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10" style={{ background: 'linear-gradient(to top, color-mix(in srgb, var(--bg-body) 80%, transparent), color-mix(in srgb, var(--bg-body) 40%, transparent) 60%, transparent)' }}>
            <p className="text-sm max-w-[50ch]" style={{ color: 'var(--text-body)' }}>
              <span className="text-amber-400 font-semibold">Hands-on, not theory.</span> Your teen learns real skills — AI safety, first aid, growing food, and building confidence — in a small group with trainers who care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
