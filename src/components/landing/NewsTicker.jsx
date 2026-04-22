import React from 'react';
import { base44 } from '@/api/base44Client';

export default function NewsTicker() {
  const messages = [
    "🛡️ SafeWays provides Urban Safety Intelligence — real-time insights to keep communities safe",
    "📊 Take our Safety Survey and help shape the future of urban safety",
    "🌍 Empowering cities with AI-driven safety data and community-powered alerts",
    "📊 Take our Safety Survey and help shape the future of urban safety",
  ];

  return (
    <div className="bg-purple-900 text-white py-2 overflow-hidden border-b border-purple-700 relative">
      <div className="flex items-center">
        <div className="flex-shrink-0 bg-orange-500 px-4 py-0.5 text-sm font-bold uppercase tracking-wider z-10 mr-4">
          LIVE
        </div>
        <div className="overflow-hidden flex-1">
          <div className="flex animate-ticker whitespace-nowrap">
            {[...messages, ...messages].map((msg, i) => (
              <span key={i} className="inline-block mr-16 text-sm font-medium">
                {msg.includes('Safety Survey') ? (
                  <>
                    {msg.split('Safety Survey')[0]}
                    <a
                      href="https://docs.google.com/forms/d/1HhG-5HwAcj7TxYJ1qtL0oGYYQsfw7TnO9fO_cXvDWSE/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => base44.analytics.track({ eventName: 'safety_survey_ticker_clicked' })}
                      className="underline font-bold text-orange-300 hover:text-orange-200"
                    >
                      Safety Survey
                    </a>
                    {msg.split('Safety Survey')[1]}
                  </>
                ) : msg}
                <span className="mx-8 text-purple-500">◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}