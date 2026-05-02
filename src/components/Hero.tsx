interface HeroProps {
  onJoinClick: () => void;
}

export default function Hero({ onJoinClick }: HeroProps) {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
      {/* Blueprint house plan background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-earth-950/80 z-[1]" />
        <img
          src="/images/okready-house-plan.jpg"
          alt=""
          className="w-full h-full object-cover opacity-25 mix-blend-luminosity"
        />
      </div>

      {/* Background gradient orb */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-earth-700/10 rounded-full blur-[150px] animate-pulse-glow pointer-events-none z-[1]" />
      
      <div className="max-w-[1400px] mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/[0.02] text-xs text-earth-400 mb-8 tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-glow" />
              Publishing Mid May 2026
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.92] mb-6">
              <span className="gradient-text">The </span>
              <span className="text-earth-100">OK Ready Mindset</span><br/>
              <span className="gradient-text-amber">&amp;</span>{' '}
              <span className="text-earth-100">Modern Self-Sufficiency</span><br/>
              <span className="gradient-text">System</span>
            </h1>

            <p className="text-lg md:text-xl text-earth-400 leading-relaxed max-w-[65ch] mb-8">
              A <strong className="text-earth-200">24-week self-paced modular curriculum</strong> for building genuine 
              antifragility — <strong className="text-amber-300">designed for beginners</strong>. No prior experience needed. 
              Not just surviving disruption, but <em className="text-earth-200">thriving through it</em>. 
              The OK Ready Mindset meets a <strong className="text-amber-300">Modern Self-Sufficiency System for current events</strong>: mindset, digital competence, economic resilience, and community connection in the AI era.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={onJoinClick}
                className="px-8 py-4 bg-earth-100 text-earth-950 rounded-full text-sm font-semibold hover:bg-earth-50 transition-all hover:scale-105 active:scale-[0.98] shadow-lg shadow-earth-800/20"
              >
                Join the Waitlist
              </button>
              <a
                href="#pillars"
                className="px-8 py-4 border border-white/10 text-earth-300 rounded-full text-sm font-medium hover:border-white/20 hover:text-earth-100 transition-all"
              >
                Explore the Pathway
              </a>
            </div>

            <div className="flex items-center gap-6 mt-10 pt-8 border-t border-white/5">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-earth-950 bg-gradient-to-br from-earth-500 to-earth-600"
                  />
                ))}
              </div>
              <div>
                <div className="text-sm font-medium text-earth-200">Early access</div>
                <div className="text-xs text-earth-500">Join 50+ on the waitlist</div>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative hidden md:block">
            <div className="relative aspect-square max-w-[500px] mx-auto">
              {/* Orbiting rings */}
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="absolute inset-0 rounded-full border border-white/5"
                  style={{
                    animation: `spin ${12 + i * 4}s linear infinite`,
                    transform: `scale(${1 + i * 0.25})`,
                  }}
                />
              ))}
              
              {/* Central hub */}
              <div className="absolute inset-[15%] rounded-full bg-gradient-to-br from-amber-500/5 to-earth-900/80 backdrop-blur-xl border border-amber-500/10 flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="text-sm text-amber-400 font-bold uppercase tracking-wider mb-2">Cost of Living</div>
                  <div className="text-xs text-earth-400 leading-relaxed">
                    Fuel • Groceries • Supply chains •<br/>• Unemployment • Economic pressure
                  </div>
                </div>
              </div>

              {/* Orbiting dots — 24 dots, 15° apart, clockwise pulse */}
              {Array.from({ length: 24 }, (_, i) => {
                const deg = i * 15;
                const colors = ['#f59e0b', '#10b981', '#22d3ee', '#C88A2A'];
                const shadows = [
                  'rgba(245, 158, 11, 0.5)',
                  'rgba(16, 185, 129, 0.5)',
                  'rgba(34, 211, 238, 0.5)',
                  'rgba(200, 138, 42, 0.5)',
                ];
                const color = colors[i % colors.length];
                const shadow = shadows[i % shadows.length];
                return (
                  <div
                    key={i}
                    className="absolute w-2 h-2 rounded-full animate-dot-pulse"
                    style={{
                      background: color,
                      top: `calc(50% - 4px + ${Math.sin(deg * Math.PI / 180) * 42}%)`,
                      left: `calc(50% - 4px + ${Math.cos(deg * Math.PI / 180) * 42}%)`,
                      boxShadow: `0 0 10px ${shadow}`,
                      animationDelay: `${i * 0.125}s`,
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
