import { useInView } from 'framer-motion';
import { useRef } from 'react';

const principlesLeft = [
  {
    title: "Antifragile Not Resilient",
    desc: "Resilience bounces back. Antifragility gets stronger from shocks. Your mindset, finances, and skills should improve when things get chaotic, not just survive.",
  },
  {
    title: "Systems Operator Not Consumer",
    desc: "See your home, life, and community as interconnected systems with inputs and outputs. Optimize the whole, not just the parts. Redundancy is strategy.",
  },
  {
    title: "Connected Node Not Bunker",
    desc: "The most resilient person isn't the one with the most supplies — it's the one with the most connections. Networks outlast stockpiles. Be a valuable node.",
  },
  {
    title: "Agentic Not Dependent",
    desc: "Use AI as a force multiplier, not a crutch. Build offline-first workflows. Keep the skills that work when the grid doesn't. Agency is the ultimate asset.",
  },
];

const bars = [
  { label: "Systems Thinking", pct: 100 },
  { label: "Redundancy", pct: 95 },
  { label: "Decentralization", pct: 90 },
  { label: "Skill Stacking", pct: 85 },
  { label: "Community Ties", pct: 90 },
  { label: "Digital Agency", pct: 80 },
  { label: "Adaptive Finance", pct: 85 },
  { label: "Physical Competence", pct: 75 },
];

function ProgressBar({ label, pct, index }: { label: string; pct: number; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div key={label} ref={ref}>
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-earth-300">{label}</span>
        <span className="text-earth-500">{pct}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-earth-800 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-amber-400 to-emerald-400 transition-all duration-1000 ease-out"
          style={{
            width: isInView ? `${pct}%` : '0%',
            transitionDelay: `${index * 80}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function Antifragile() {
  return (
    <section id="antifragile" className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left: Philosophy */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
              <span className="text-earth-100">The </span>
              <span className="gradient-text">Antifragile</span>{' '}
              <span className="text-earth-100">Mindset</span>
            </h2>
            <p className="text-lg text-earth-400 leading-relaxed mb-10 max-w-[65ch]">
              Nassim Taleb's concept of antifragility — systems that benefit from volatility — 
              applied directly to your life. This isn't about hunkering down. It's about 
              building a life that thrives on uncertainty.
            </p>

            <div className="space-y-6">
              {principlesLeft.map((p) => (
                <div key={p.title} className="group cursor-default">
                  <div className="flex items-start gap-4">
                    <div className="w-px h-full min-h-[3rem] bg-amber-500/30 group-hover:bg-amber-400/60 transition-colors mt-2" />
                    <div>
                      <h3 className="text-base font-semibold text-earth-200 mb-2">{p.title}</h3>
                      <p className="text-sm text-earth-400 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Core Principles bars */}
          <div className="relative">
            <div className="p-8 md:p-12 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
              <div className="text-xs text-earth-500 uppercase tracking-widest mb-6">Core Principles</div>
              
              <div className="space-y-5">
                {bars.map((item, i) => (
                  <ProgressBar key={item.label} label={item.label} pct={item.pct} index={i} />
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/5">
                <div className="text-xs text-earth-500 italic">
                  "The most resilient person isn't the one with the most supplies — 
                  it's the one with the most connections."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
