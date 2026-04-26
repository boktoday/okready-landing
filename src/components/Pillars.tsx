export default function Pillars() {
  const pillars = [
    {
      num: "01",
      title: "Mindset & Systems",
      desc: "Shift from consumer to systems operator. Emergency preparedness, systems thinking, redundancy principles.",
      color: "amber",
    },
    {
      num: "02",
      title: "Digital & Cognitive",
      desc: "AI as a force multiplier — not a crutch. Prompt engineering, no-code automation, digital hygiene, offline-first workflows.",
      color: "cyan",
    },
    {
      num: "03",
      title: "Economic Resilience",
      desc: "Antifragile finances before crisis forces them. Income diversification, low-overhead living, right-to-repair, asset building.",
      color: "emerald",
    },
    {
      num: "04",
      title: "Energy & Infrastructure",
      desc: "Decrease dependency on centralized utilities. Solar basics, home energy audit, water security, alternative heat.",
      color: "amber",
    },
    {
      num: "05",
      title: "Food & Material",
      desc: "Turn your space into a productive node. Container gardening, sprouts, microgreens, fermentation, Kratky hydroponics, insects, mushrooms.",
      color: "emerald",
    },
    {
      num: "06",
      title: "Physical Skills",
      desc: "Durable off-grid capable skills. Wilderness first aid, home security, mechanical competence, situational awareness.",
      color: "cyan",
    },
    {
      num: "07",
      title: "Community Networks",
      desc: "Resilience is a team sport. Local mapping, ham radio, local chat groups, mutual aid networks, intergenerational skill sharing.",
      color: "amber",
    },
  ];

  const getGradient = (color: string) => {
    switch (color) {
      case "amber": return "from-amber-400/20 to-amber-500/5";
      case "emerald": return "from-emerald-400/20 to-emerald-500/5";
      case "cyan": return "from-cyan-400/20 to-cyan-500/5";
      default: return "from-earth-400/20 to-earth-500/5";
    }
  };

  const getBorder = (color: string) => {
    switch (color) {
      case "amber": return "hover:border-amber-500/30";
      case "emerald": return "hover:border-emerald-500/30";
      case "cyan": return "hover:border-cyan-500/30";
      default: return "hover:border-earth-400/30";
    }
  };

  const getText = (color: string) => {
    switch (color) {
      case "amber": return "text-amber-400";
      case "emerald": return "text-emerald-400";
      case "cyan": return "text-cyan-400";
      default: return "text-earth-400";
    }
  };

  return (
    <section id="pillars" className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="max-w-[65ch] mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
            <span className="gradient-text">7 Pillars</span>{' '}
            <span className="text-earth-100">of Readiness</span>
          </h2>
          <p className="text-lg text-earth-400 leading-relaxed">
            A modular, beginner-focused system designed to be worked through at your own pace. 
            Each pillar builds on the last, but every module stands alone — start wherever you're most ready.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((p) => (
            <div
              key={p.num}
              className={`group relative p-6 md:p-8 rounded-2xl border border-white/5 bg-gradient-to-b ${getGradient(p.color)} card-hover ${getBorder(p.color)}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`text-xs font-mono ${getText(p.color)}`}>
                  {p.num}
                </div>
                <div className="text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </div>
              </div>
              <h3 className="text-xl font-semibold text-earth-100 mb-3">{p.title}</h3>
              <p className="text-sm text-earth-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
