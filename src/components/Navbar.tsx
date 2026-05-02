import { useState, useEffect } from 'react';
import { useTheme } from '../ThemeContext';

interface NavbarProps {
  onJoinClick: () => void;
}

export default function Navbar({ onJoinClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Pillars', href: '#pillars', id: 'pillars' },
    { label: 'Curriculum', href: '#curriculum', id: 'curriculum' },
    { label: 'Pricing', href: '#pricing', id: 'pricing' },
    { label: 'Teens Workshop', href: '#teens-workshop', id: 'teens-workshop' },
    { label: 'Coaching', href: '#coaching', id: 'coaching' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-earth-950/80 backdrop-blur-xl' : 'bg-transparent'
      }`}
      style={{
        borderBottom: scrolled ? '1px solid var(--card-border, rgba(255,255,255,0.05))' : 'none',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex items-center justify-between h-24 md:h-28">
        <a href="#" className="flex items-center gap-2 group z-50">
          <div className="w-16 h-16 flex-shrink-0">
            <img src="/images/ok-ready-logo.png" alt="OK Ready" className="w-full h-full object-contain" />
          </div>
          <span className="text-sm sm:text-base font-medium text-earth-200 group-hover:text-earth-50 transition-colors hidden xs:block">
            OK Ready Australia
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-3">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="px-3.5 py-1.5 bg-earth-100 text-earth-950 rounded-full text-xs font-semibold hover:bg-earth-50 transition-all hover:scale-105 active:scale-[0.98] uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              className="w-8 h-8 flex items-center justify-center rounded-full text-earth-400 hover:text-earth-200 transition-all"
              style={{ background: 'transparent' }}
              aria-label="Toggle theme"
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
                </svg>
              )}
            </button>
            <button
              onClick={onJoinClick}
              className="px-4 py-2 bg-earth-100 text-earth-950 rounded-full text-xs font-medium hover:bg-earth-50 transition-all hover:scale-105 active:scale-[0.98] uppercase tracking-wider"
            >
              Join Waitlist
            </button>
          </div>
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
            className="px-5 py-2.5 bg-earth-100 text-earth-950 rounded-full text-base font-semibold hover:bg-earth-50 transition-all uppercase tracking-wider text-center w-full"
          >
            {link.label}
          </a>
        ))}
        <button
          onClick={() => {
            setMenuOpen(false);
            toggle();
          }}
          className="flex items-center gap-2 text-xl text-earth-300 hover:text-amber-300 transition-colors uppercase tracking-wider font-medium"
        >
          {theme === 'dark' ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
              </svg>
              Light Mode
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
              </svg>
              Dark Mode
            </>
          )}
        </button>
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
