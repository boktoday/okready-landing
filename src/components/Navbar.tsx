import { useState, useEffect } from 'react';

interface NavbarProps {
  onJoinClick: () => void;
}

export default function Navbar({ onJoinClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on link click
  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Pillars', href: '#pillars', id: 'pillars' },
    { label: 'Curriculum', href: '#curriculum', id: 'curriculum' },
    { label: 'Pricing', href: '#pricing', id: 'pricing' },
    { label: 'Coaching', href: '#coaching', id: 'coaching' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-earth-950/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2 group z-50">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-emerald-500 flex items-center justify-center text-earth-950 font-bold text-sm">
            ✓
          </div>
          <span className="text-sm sm:text-base font-medium text-earth-200 group-hover:text-earth-50 transition-colors hidden xs:block">
            OKReady Australia
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="text-xs text-earth-400 hover:text-earth-200 transition-colors uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onJoinClick}
            className="px-4 py-2 bg-earth-100 text-earth-950 rounded-full text-xs font-medium hover:bg-earth-50 transition-all hover:scale-105 active:scale-[0.98] uppercase tracking-wider"
          >
            Join Waitlist
          </button>
        </div>

        {/* Hamburger button (tablet & mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <div className="w-5 h-4 relative flex flex-col justify-between">
            <span
              className={`block h-0.5 w-full bg-earth-300 rounded transition-all duration-300 origin-center ${
                menuOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-earth-300 rounded transition-all duration-300 ${
                menuOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-earth-300 rounded transition-all duration-300 origin-center ${
                menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile/tablet overlay menu */}
      <div
        className={`fixed inset-0 bg-earth-950/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8 transition-all duration-400 ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(link.id);
            }}
            className="text-xl text-earth-300 hover:text-amber-300 transition-colors uppercase tracking-wider font-medium"
          >
            {link.label}
          </a>
        ))}
        <button
          onClick={() => {
            setMenuOpen(false);
            onJoinClick();
          }}
          className="px-8 py-3.5 bg-earth-100 text-earth-950 rounded-full text-sm font-semibold hover:bg-earth-50 transition-all mt-4 uppercase tracking-wider"
        >
          Join Waitlist
        </button>
      </div>
    </nav>
  );
}
