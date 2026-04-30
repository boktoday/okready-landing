import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 md:py-16">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-400 to-emerald-500 flex items-center justify-center text-earth-950 font-bold text-xs">
                A
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
