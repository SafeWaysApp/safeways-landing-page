import React from 'react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';

const platforms = [
  {
    name: 'App Store',
    description: 'Download for iPhone & iPad',
    href: '#',
    bg: 'bg-black',
    hover: 'hover:bg-gray-800',
    icon: (
      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
      </svg>
    ),
    badge: 'iOS',
  },
  {
    name: 'Google Play',
    description: 'Download for Android',
    href: '#',
    bg: 'bg-green-600',
    hover: 'hover:bg-green-700',
    icon: (
      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
      </svg>
    ),
    badge: 'Android',
  },
  {
    name: 'Web Version',
    description: 'Open in your browser',
    href: 'https://app.safeways.io',
    bg: 'bg-purple-700',
    hover: 'hover:bg-purple-800',
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    ),
    badge: 'Web',
  },
];

export default function OpenAppPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <div className="pt-16" style={{ background: 'linear-gradient(to bottom right, #581c87, #fb9782)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698bc57975eb60d9d1b511a2/2ba989b2d_safeway_logo_512.png"
            alt="SafeWays"
            className="h-20 w-auto mx-auto mb-8"
          />
          <h1 className="text-5xl sm:text-6xl font-black mb-4">Get SafeWays</h1>
          <p className="text-xl text-purple-100 max-w-xl mx-auto">
            Available on iOS, Android, and the web. Walk your city with confidence — wherever you are.
          </p>
        </div>
      </div>

      {/* Download Cards */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid sm:grid-cols-3 gap-8">
          {platforms.map(({ name, description, href, bg, hover, icon, badge }) => (
            <a
              key={name}
              href={href}
              target={href !== '#' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className={`group flex flex-col items-center text-center rounded-3xl p-10 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl ${bg} ${hover}`}
            >
              <div className="mb-5">{icon}</div>
              <span className="text-xs font-bold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full mb-3">{badge}</span>
              <h2 className="text-2xl font-black mb-1">{name}</h2>
              <p className="text-white/80 text-sm">{description}</p>
            </a>
          ))}
        </div>

        {/* App screenshot preview */}
        <div className="mt-20 flex justify-center">
          <div className="bg-gradient-to-br from-purple-100 to-orange-100 rounded-3xl p-8 shadow-xl max-w-xs w-full">
            <div className="aspect-[9/16] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698bc57975eb60d9d1b511a2/56f9314a9_image.png"
                alt="SafeWays App Screenshot"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}