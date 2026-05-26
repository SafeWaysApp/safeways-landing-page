import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/lib/LanguageContext.jsx';
import { Globe } from 'lucide-react';


const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'pl', label: 'Polski' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const langRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { labelKey: 'nav_home', path: '/' },
    { labelKey: 'nav_insights', path: '/insights' },
    { labelKey: 'nav_privacy', path: '/PrivacyPolicy' },
    { labelKey: 'nav_contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: 'linear-gradient(to bottom right, #581c87, #fb9782)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698bc57975eb60d9d1b511a2/2ba989b2d_safeway_logo_512.png"
              alt="SafeWays"
              className="h-14 w-auto"
            />
            <span className="text-white font-black text-xl tracking-tight">SafeWays</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(({ labelKey, path }) => {
              const active = location.pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className={`font-semibold text-sm transition-colors relative group ${active ? 'text-white' : 'text-white/80 hover:text-white'}`}
                >
                  {t(labelKey)}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-white rounded-full transition-all duration-200 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              );
            })}
            <a
              href="https://app.safeways.io"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-700 hover:bg-purple-800 text-white text-sm font-bold px-5 py-2 rounded-full transition-colors shadow"
            >
              {t('nav_app')}
            </a>
            {/* Language Switcher */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 bg-white/20 hover:bg-white/30 text-white rounded-full px-3 py-1.5 transition-colors"
              >
                <Globe className="w-4 h-4" />
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-lg py-1 z-50 border border-gray-100">
                  {LANGUAGES.map(({ code, label }) => (
                    <button
                      key={code}
                      onClick={() => { setLanguage(code); setLangOpen(false); }}
                      className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors ${language === code ? 'text-purple-700 bg-purple-50' : 'text-gray-700 hover:bg-gray-50'}`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile: Language + Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 bg-white/20 hover:bg-white/30 text-white rounded-full px-2.5 py-1.5 transition-colors"
              >
                <Globe className="w-4 h-4" />
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-lg py-1 z-50 border border-gray-100">
                  {LANGUAGES.map(({ code, label }) => (
                    <button
                      key={code}
                      onClick={() => { setLanguage(code); setLangOpen(false); }}
                      className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors ${language === code ? 'text-purple-700 bg-purple-50' : 'text-gray-700 hover:bg-gray-50'}`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              className="p-2 rounded-lg text-white transition-colors"
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
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map(({ labelKey, path }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setMenuOpen(false)}
                className={`font-semibold text-sm py-2 transition-colors ${
                  location.pathname === path ? 'text-purple-700' : 'text-gray-700 hover:text-purple-700'
                }`}
              >
                {t(labelKey)}
              </Link>
            ))}
            <a
              href="https://app.safeways.io"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-700 text-white text-sm font-bold px-5 py-2 rounded-full text-center mt-2"
            >
              {t('nav_app')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}