import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';

function TrustSignal({ label, tip, icon }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="flex flex-col gap-2"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex items-center gap-2 cursor-default">
        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">{icon}</svg>
        </div>
        <span className="font-semibold">{label}</span>
      </div>
      {open && (
        <div className="rounded-xl overflow-hidden shadow-lg border border-white/20" style={{ backgroundColor: '#b348c6' }}>
          <div className="px-4 py-3 text-sm text-white leading-relaxed">{tip}</div>
        </div>
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-orange-600 text-white overflow-hidden">


      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        {/* Logo */}
        <div className="mb-12">
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698bc57975eb60d9d1b511a2/2ba989b2d_safeway_logo_512.png" 
            alt="SafeWays Logo" 
            className="h-16 sm:h-20 w-auto"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6">
              Your Safety,<br />Your Way
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-purple-100 mb-8 leading-relaxed">
              Navigate the world with confidence. SafeWays provides real-time safety insights, 
              community-driven alerts, and intelligent route planning to keep you secure wherever you go.
            </p>

            {/* Trust Signals */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-10 items-start">
              {[
                {
                  label: "Community powered",
                  tip: "SafeWays is built by and for real people. As our community shares reports and experiences, the app learns and adapts, getting smarter and more accurate every day.",
                  icon: <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                },
                {
                  label: "Verified safe zones",
                  tip: "We map every city using a simple traffic-light system: green, yellow, and amber, so you can see at a glance how safe an area is, based on real data and community reports.",
                  icon: <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                },
                {
                  label: "Real-time updates",
                  tip: "Safety doesn't wait — and neither do we. Reports are shared live so you always know what's happening around you, right now, as it unfolds.",
                  icon: <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                },
                {
                  label: "Official safety data",
                  tip: "We combine city data, police reports, and trusted official sources — then cross-check everything so you can trust that what you see is accurate, reliable, and up to date.",
                  icon: <path fillRule="evenodd" d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4zm0 1a1 1 0 00-1 1v4a1 1 0 00.553.894l3 1.5a1 1 0 10.894-1.788L12 11.382V7a1 1 0 00-1-1z" clipRule="evenodd" />
                },
              ].map(({ label, tip, icon }) => (
                <TrustSignal key={label} label={label} tip={tip} icon={icon} />
              ))}
            </div>

            {/* CTAs */}
            <div className="mb-5">
              <p className="text-2xl font-bold text-white leading-snug">
                Walk your city with confidence.<br className="hidden sm:block" /> Try SafeWays today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#" 
                className="inline-flex items-center justify-center gap-3 bg-white text-purple-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-52"
              >
                <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                App Store
              </a>
              <a 
                href="#" 
                className="inline-flex items-center justify-center gap-3 bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-all shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-52"
              >
                <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Google Play
              </a>
              <a 
                href="https://app.safeways.io"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => base44.analytics.track({ eventName: 'safety_portal_button_clicked' })}
                className="inline-flex items-center justify-center gap-3 bg-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-52"
              >
                <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
                </svg>
                Web version
              </a>
            </div>

            {/* Safety Portal Link */}
            <div className="mt-6 flex flex-col gap-3 items-start">

              <a
                href="https://docs.google.com/forms/d/1HhG-5HwAcj7TxYJ1qtL0oGYYQsfw7TnO9fO_cXvDWSE/viewform"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => base44.analytics.track({ eventName: 'safety_survey_button_clicked' })}
                className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/40 px-5 py-2.5 rounded-full font-semibold transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                Take our Safety Survey
              </a>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative lg:block hidden">
            <div className="relative z-10">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="aspect-[9/16] rounded-2xl overflow-hidden">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698bc57975eb60d9d1b511a2/56f9314a9_image.png" 
                    alt="SafeWays App Screenshot"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-400 rounded-full opacity-50 blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-400 rounded-full opacity-50 blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}