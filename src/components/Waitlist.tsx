import { useState } from 'react';

export default function Waitlist() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Please enter your email address.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('https://cloud.activepieces.com/api/v1/webhooks/9m2OHMUPhQjKdwSAnbKNJ', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, source: 'okready-landing-page' }),
      });

      if (!res.ok) throw new Error('Webhook failed');

      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-24 md:py-32">
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-earth-100 mb-4">
            You're on the list
          </h2>
          <p className="text-lg text-earth-400 leading-relaxed mb-8">
            We'll let you know as soon as OKReady Australia opens.
            In the meantime, check your inbox for a welcome note with some starter resources.
          </p>
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-glow mx-auto" />
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-earth-800/5 to-transparent pointer-events-none" />

      <div className="max-w-[650px] mx-auto px-6 relative">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
            <span className="gradient-text">Join the</span>{' '}
            <span className="text-earth-100">Waitlist</span>
          </h2>
          <p className="text-lg text-earth-400 leading-relaxed max-w-[65ch] mx-auto">
            Be the first to know when the Pathway opens. You'll also get exclusive access to 
            starter resources, community previews, and early-bird pricing.
          </p>
        </div>

        <div className="p-8 md:p-10 rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-sm glow-amber">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-xs text-earth-400 uppercase tracking-wider font-medium">
                Name <span className="text-earth-500">(optional)</span>
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-earth-900/60 border border-white/10 text-earth-200 placeholder-earth-600 text-sm focus:outline-none focus:border-amber-500/40 focus:ring-1 focus:ring-amber-500/20 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-xs text-earth-400 uppercase tracking-wider font-medium">
                Email address <span className="text-amber-400">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl bg-earth-900/60 border border-white/10 text-earth-200 placeholder-earth-600 text-sm focus:outline-none focus:border-amber-500/40 focus:ring-1 focus:ring-amber-500/20 transition-all"
              />
              {error && (
                <p className="text-xs text-amber-400 mt-1">{error}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3.5 bg-earth-100 text-earth-950 rounded-xl text-sm font-semibold hover:bg-earth-50 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Joining...
                </>
              ) : (
                'Join the Waitlist'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-earth-600">
              No spam. Unsubscribe anytime. We'll send you updates about the Pathway launch 
              and relevant resilience resources.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
