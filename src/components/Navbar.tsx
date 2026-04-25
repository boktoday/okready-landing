import { useState, useEffect } from 'react';

interface NavbarProps {
  onJoinClick: () => void;
}

export default function Navbar({ onJoinClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-earth-950/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-emerald-500 flex items-center justify-center text-earth-950 font-bold text-sm">
            A
          </div>
          <span className="text-sm font-medium text-earth-200 group-hover:text-earth-50 transition-colors hidden sm:block">
            OKReady Australia
          </span>
        </a>

        <div className="flex items-center gap-3 md:gap-6">
          <a href="#pillars" className="text-xs text-earth-400 hover:text-earth-200 transition-colors uppercase tracking-wider">
            Pillars
          </a>
          <a href="#curriculum" className="text-xs text-earth-400 hover:text-earth-200 transition-colors uppercase tracking-wider hidden md:block">
            Curriculum
          </a>
          <a href="#pricing" className="text-xs text-earth-400 hover:text-earth-200 transition-colors uppercase tracking-wider hidden md:block">
            Pricing
          </a>
          <a href="#coaching" className="text-xs text-earth-400 hover:text-earth-200 transition-colors uppercase tracking-wider hidden lg:block">
            Coaching
          </a>
          <button
            onClick={onJoinClick}
            className="px-4 py-2 bg-earth-100 text-earth-950 rounded-full text-xs font-medium hover:bg-earth-50 transition-all hover:scale-105 active:scale-[0.98] uppercase tracking-wider"
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </nav>
  );
}
