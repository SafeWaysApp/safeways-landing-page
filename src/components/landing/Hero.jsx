import React from 'react';
import { base44 } from '@/api/base44Client';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-orange-600 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

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
              Your Safety,<br />Our Priority
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-purple-100 mb-8 leading-relaxed">
              Navigate the world with confidence. SafeWays provides real-time safety insights, 
              community-driven alerts, and intelligent route planning to keep you secure wherever you go.
            </p>

            {/* Trust Signals */}
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-semibold">Verified Safe Zones</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <span className="font-semibold">Community Powered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-semibold">Real-Time Updates</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#" 
                className="inline-flex items-center justify-center gap-3 bg-white text-purple-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                Download on App Store
              </a>
              <a 
                href="#" 
                className="inline-flex items-center justify-center gap-3 bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Get it on Google Play
              </a>
            </div>

            {/* Safety Portal Link */}
            <div className="mt-6">
              <a 
                href="https://app.safeways.io" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => base44.analytics.track({ eventName: 'safety_portal_button_clicked' })}
                className="inline-flex items-center justify-center gap-2 text-white hover:text-purple-100 transition-all group"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="font-semibold text-lg border-b-2 border-white/30 group-hover:border-white transition-all">
                  Try the Safety Portal →
                </span>
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