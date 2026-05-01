import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 md:py-16">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 flex-shrink-0">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <defs>
                    <linearGradient id="logo-grad-footer" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#fbbf24" />
                      <stop offset="100%" stopColor="#34d399" />
                    </linearGradient>
                  </defs>
                  <path d="M16 2 L28 8 L28 16 C28 23 23 28 16 30 C9 28 4 23 4 16 L4 8 Z"
                        fill="url(#logo-grad-footer)" />
                  <path d="M10 16 L14 21 L22 11"
                        stroke="#141613" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-sm font-medium text-earth-300">OK Ready Australia</span>
            </div>
            <p className="text-sm text-earth-500 leading-relaxed max-w-[40ch]">
              A 24-week self-paced modular system for building genuine antifragility — 
              the OK Ready Mindset meets a Self-Sufficiency System that gets stronger through volatility.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <div className="text-xs text-earth-500 uppercase tracking-widest mb-4">Navigate</div>
            <div className="space-y-2">
              {[
                { label: 'Pillars', href: '/#pillars' },
                { label: 'Curriculum', href: '/#curriculum' },
                { label: 'Pricing', href: '/#pricing' },
                { label: 'Coaching', href: '/#coaching' },
                { label: 'Waitlist', href: '/#waitlist' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-earth-400 hover:text-earth-200 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <div className="text-xs text-earth-500 uppercase tracking-widest mb-4">Legal</div>
            <div className="space-y-2">
              <Link to="/privacy" className="block text-sm text-earth-400 hover:text-earth-200 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="block text-sm text-earth-400 hover:text-earth-200 transition-colors">Terms of Service</Link>
              <Link to="/disclaimers" className="block text-sm text-earth-400 hover:text-earth-200 transition-colors">Disclaimers</Link>
              <Link to="/security" className="block text-sm text-earth-400 hover:text-earth-200 transition-colors">Security</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-earth-600">
            &copy; 2026 OK Ready. ABN: 60118175136. Australia. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="text-xs text-earth-500 hover:text-earth-300 transition-colors">Privacy</Link>
            <Link to="/terms" className="text-xs text-earth-500 hover:text-earth-300 transition-colors">Terms</Link>
            <Link to="/disclaimers" className="text-xs text-earth-500 hover:text-earth-300 transition-colors">Disclaimers</Link>
            <Link to="/security" className="text-xs text-earth-500 hover:text-earth-300 transition-colors">Security</Link>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-earth-600 italic">
            ✝ Be on your guard; stand firm in the faith; be courageous; be strong. — 1&nbsp;Corinthians&nbsp;16:13
          </p>
        </div>
      </div>
    </footer>
  );
}
