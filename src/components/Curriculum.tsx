export default function Curriculum() {
  const phases = [
    {
      weeks: "1–3",
      title: "Foundations",
      desc: "Emergency preparedness baseline, systems thinking mindset, risk assessment, communication plans.",
      topics: ["72-hour kit", "Household as a system", "Rule of Threes", "Redundancy thinking"],
    },
    {
      weeks: "4–6",
      title: "Digital & Cognitive",
      desc: "AI literacy, prompt engineering, no-code automation, digital hygiene, offline-first workflows.",
      topics: ["LLM problem-solving", "Zapier/n8n automation", "Critical thinking", "Open-source tools"],
    },
    {
      weeks: "7–9",
      title: "Economic Resilience",
      desc: "Income diversification, low-overhead living, debt strategy, barter networks, right-to-repair.",
      topics: ["Side hustles", "Cash cushion", "BIFL philosophy", "Value-based budgeting"],
    },
    {
      weeks: "10–12",
      title: "Energy & Infrastructure",
      desc: "Home energy audit, distributed energy, solar basics, water security, fuel substitution.",
      topics: ["LED/weatherstripping", "Solar 101", "Rain catchment", "E-bike transport"],
    },
    {
      weeks: "13–15",
      title: "Food & Self-Sufficiency",
      desc: "Container gardening, sprouts, microgreens, preservation, hydroponics, insect protein.",
      topics: ["Victory garden", "Canning/fermenting", "Vermicomposting", "Permaculture zones"],
    },
    {
      weeks: "16–18",
      title: "Physical Skills",
      desc: "First aid certification, home security, mechanical competence, situational awareness.",
      topics: ["Stop The Bleed", "Auto maintenance", "Home DIY", "OODA loop"],
    },
    {
      weeks: "19–21",
      title: "Faith & Future",
      desc: "Hope as a skill, ritual and grounding practices, intergenerational storytelling, finding purpose in hardship.",
      topics: ["Antifragile optimism", "Ritual & grounding", "Long-term thinking", "Ancestral wisdom"],
    },
    {
      weeks: "22–24",
      title: "Community Networks",
      desc: "Local resource mapping, ham radio, mesh networks, mutual aid, intergenerational skill sharing.",
      topics: ["Ham radio license", "Tool libraries", "Seed swaps", "Neighborhood mapping"],
    },
  ];

  return (
    <section id="curriculum" className="py-24 md:py-32 relative">
      {/* Subtle background line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent hidden md:block" />

      <div className="max-w-[1400px] mx-auto px-6">
        <div className="max-w-[65ch] mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
            <span className="text-earth-100">The </span>
            <span className="gradient-text">24-Week Journey</span>
          </h2>
          <p className="text-lg text-earth-400 leading-relaxed">
            A structured but flexible curriculum across 8 pillars. Each phase builds on the last — but you can start 
            anywhere. Follow the suggested weekly rhythm or adapt it to your life.
          </p>
        </div>

        <div className="relative">
          {phases.map((phase, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-12 mb-12 last:mb-0">
              {/* Timeline marker */}
              <div className="md:text-right md:w-1/4 flex-shrink-0">
                <div className="inline-flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-earth-500" />
                  <span className="text-xs font-mono text-earth-500 tracking-wider">{phase.weeks}</span>
                </div>
              </div>

              {/* Content card */}
              <div className="md:w-3/4">
                <div className="p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl font-bold gradient-text-emerald">0{i + 1}</span>
                    <h3 className="text-xl font-semibold text-earth-100">{phase.title}</h3>
                  </div>
                  <p className="text-sm text-earth-400 leading-relaxed mb-4">{phase.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {phase.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs text-earth-400"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Weekly rhythm */}
        <div className="mt-20 p-8 md:p-10 rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent">
          <h3 className="text-xl font-semibold text-earth-100 mb-6">Suggested Weekly Rhythm</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { day: "Monday", focus: "Digital/AI skills or financial admin" },
              { day: "Wednesday", focus: "Physical project (gardening, repair, energy)" },
              { day: "Saturday", focus: "Community networking, faith practice, or skill class" },
              { day: "Daily", focus: "15 mins of learning (podcast, book, video)" },
            ].map((item) => (
              <div key={item.day} className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                <div className="text-xs font-mono text-amber-400 mb-1 tracking-wider">{item.day}</div>
                <div className="text-sm text-earth-300 leading-relaxed">{item.focus}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
