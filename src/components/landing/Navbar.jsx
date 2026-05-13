import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Our Features', path: '/features' },
  { label: 'Insights & Stories', path: '/insights' },
  { label: 'Contact Us', path: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: 'linear-gradient(to bottom right, #581c87, #fb9782)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698bc57975eb60d9d1b511a2/2ba989b2d_safeway_logo_512.png"
              alt="SafeWays"
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, path }) => {
              const active = location.pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className={`font-semibold text-sm transition-colors ${active ? 'text-white' : 'text-white/80 hover:text-white'}`}
                >
                  {label}
                </Link>
              );
            })}
            <a
              href="https://app.safeways.io"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-700 hover:bg-purple-800 text-white text-sm font-bold px-5 py-2 rounded-full transition-colors shadow"
            >
              Open App
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setMenuOpen(false)}
                className={`font-semibold text-sm py-2 transition-colors ${
                  location.pathname === path ? 'text-purple-700' : 'text-gray-700 hover:text-purple-700'
                }`}
              >
                {label}
              </Link>
            ))}
            <a
              href="https://app.safeways.io"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-700 text-white text-sm font-bold px-5 py-2 rounded-full text-center mt-2"
            >
              Open App
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}