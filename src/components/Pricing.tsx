interface PricingProps {
  onJoinClick: () => void;
}

export default function Pricing({ onJoinClick }: PricingProps) {
  const features = [
    "24-week modular curriculum — 7 pillars of antifragility",
    "AI Agent System — automated workflows & decision tools",
    "Bring Your Own AI — CO-STAR system prompts for ChatGPT, Claude, Gemini & offline AI",
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
                and financial agility. <strong className="text-earth-200">Offline-first</strong> — designed to work without internet. 
                Built on <strong className="text-cyan-300">open source</strong> tools so you're never locked into a subscription. 
                Automate the tedious parts of running your antifragile system.
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

            {/* Bring Your Own AI block */}
            <div className="p-8 rounded-2xl border border-purple-500/20 bg-gradient-to-b from-purple-500/5 to-transparent">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-earth-200">Bring Your Own AI</h3>
                  <p className="text-xs text-purple-400">CO-STAR system prompts for any AI</p>
                </div>
              </div>
              <p className="text-sm text-earth-400 leading-relaxed">
                Don't want the pre-built agent ecosystem? Use your favourite AI tool — ChatGPT, Claude, Gemini, 
                or an offline LLM — with our detailed <strong className="text-purple-300">CO-STAR system prompts</strong>. 
                Each of the 7 pillars comes with a structured prompt that includes your onboarding answers 
                so the AI generates a <strong className="text-purple-300">fully personalised curriculum</strong> 
                tailored to your household, budget, location, and risk profile.
              </p>
              <details className="mt-6 group">
                <summary className="text-xs text-purple-400 hover:text-purple-300 cursor-pointer font-medium uppercase tracking-wider select-none">
                  See example prompts with mock data ↓
                </summary>
                <div className="mt-4 space-y-6">
                  {/* Example 1: Pillar 1 */}
                  <div className="p-4 rounded-xl bg-earth-900/60 border border-white/5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 font-medium">Pillar 01</span>
                      <span className="text-xs text-earth-500">Mindset &amp; Systems</span>
                    </div>
                    <p className="text-xs text-earth-500 mb-2 italic">Mock user: Sarah, 34, single mum, Brisbane. Renting, one child aged 7, $30–60/week budget.</p>
                    <div className="text-xs text-earth-400 leading-relaxed font-mono whitespace-pre-wrap">
{`CONTEXT:
I'm a beginner building personal resilience. Here's my situation:

- Location: Outer suburban Brisbane, Queensland
- Dwelling: 3-bedroom rental townhouse (small courtyard)
- Household: 1 adult (34), 1 child (7)
- Existing supplies: Torch, basic first aid kit, pantry with about 1 week of food
- Budget: $30–60 per week for preparedness
- Primary concern: Cost of living / worried about losing my part-time job
- Time available: 2–3 hours per week (mostly weekends)
- Experience level: Complete beginner
- Constraints: Renting — can't modify walls or install permanent fixtures

OBJECTIVE:
Generate my Week 1 action plan for Mindset & Systems. Focus on foundations
that work for a single parent on a tight budget in a rental property.

STYLE: Direct, practical, encouraging. No jargon. No fear-mongering.

TONE: Calm, supportive — like a friend who's done this before.

AUDIENCE: Australian single mum with no budget for big gear purchases.

RESPONSE FORMAT:
- Week 1 Goal (one sentence)
- Priority Action #1 — quickest win, 15 min
- Priority Action #2 — 30 min
- Priority Action #3 — 1 hour (if time allows)
- Shopping list (items + cost, totalling under $60)
- Adaptations for renting with a child
- One "win" to aim for by end of week`}
                    </div>
                  </div>

                  {/* Example 2: Pillar 3 */}
                  <div className="p-4 rounded-xl bg-earth-900/60 border border-white/5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-medium">Pillar 03</span>
                      <span className="text-xs text-earth-500">Economic Resilience</span>
                    </div>
                    <p className="text-xs text-earth-500 mb-2 italic">Same user, one month in — has completed basic emergency kit and household risk assessment.</p>
                    <div className="text-xs text-earth-400 leading-relaxed font-mono whitespace-pre-wrap">
{`CONTEXT:
I've completed the Mindset & Systems foundation (72-hour kit done,
household risk mapped). Now I need economic resilience.

Updated situation:
- Single income: $48,000/yr part-time receptionist
- Monthly expenses: $3,200 (rent $1,800, bills $600, food $500, other $300)
- Savings: $800 emergency fund (under 1 month)
- Debt: $2,500 on credit card (minimum payments only)
- Skills: Can type fast, basic Excel, good with people — no trades
- Available: 2–3 hrs/week + can do 30 min on weeknights

OBJECTIVE:
Week 1 plan for Economic Resilience. I need to stretch my income,
cut waste, and build a buffer — without needing more hours at work.

STYLE: Realistic and honest. No "just start a side hustle" magic.
Focus on expenses first (biggest leverage for least time).

TONE: Encouraging but grounded. Acknowledges the financial pressure.

AUDIENCE: Single parent on a tight income, not much time.

RESPONSE FORMAT:
- Week 1 Goal
- Quick wins for this week (3 actions, each under 20 min)
- Expense audit — 3 specific cuts with $ savings estimate
- One income-stretching strategy for next 30 days
- Shopping list ($0 — audit is free)
- How to talk to my 7-year-old about money without stressing them`}
                    </div>
                  </div>

                  {/* Example 3: Pillar 7 */}
                  <div className="p-4 rounded-xl bg-earth-900/60 border border-white/5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-medium">Pillar 07</span>
                      <span className="text-xs text-earth-500">Community Networks</span>
                    </div>
                    <p className="text-xs text-earth-500 mb-2 italic">Same user, month 5 — has established basic food storage, solar charger, local knowledge.</p>
                    <div className="text-xs text-earth-400 leading-relaxed font-mono whitespace-pre-wrap">
{`CONTEXT:
I'm 5 months into the system. Have 2 weeks of food storage,
a solar power bank, basic gardening started, and my expenses
are down 15%. Weakest pillar is community connection.

Current situation:
- Social: Moved to Brisbane 2 years ago, don't know neighbours
- Local knowledge: No idea where the nearest toolshed or community
  garden is. Don't know if my street has a neighbourhood watch.
- Skills I can offer: Organising, basic admin, childcare experience
- Skills I need: Someone who can show me how to change a tyre,
  basic plumbing, someone to water my garden if I'm sick
- Child: My 7-year-old needs social connection too

OBJECTIVE:
Week 1 plan for Community Networks. Help me map my local area,
start one low-stakes connection, and find my local resilience network
without being weird about it.

STYLE: Practical and social-anxiety-aware. Assume I'm introverted.

TONE: Warm and reassuring. Community is hard when you're new in town.

AUDIENCE: A single parent who's socially isolated in a new suburb.

RESPONSE FORMAT:
- Week 1 Goal — must be achievable for an introvert
- Step 1: Local asset mapping (find 3 things within 1km)
- Step 2: One low-friction introduction strategy
- Step 3: What to say when you meet a neighbour (actual script)
- One activity I can do with my child that builds community
- Follow-up for Week 2 (what comes next if Week 1 works)`}
                    </div>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
