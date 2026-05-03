import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function SurveyPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-500"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-3">Help Shape SafeWays!</h2>
        <p className="text-gray-500 mb-6 leading-relaxed">
          We'd love to hear from you. Take our quick survey and help us build an app that meets your needs.
        </p>

        <div className="flex flex-col gap-3">
          <a
            href="https://docs.google.com/forms/d/1HhG-5HwAcj7TxYJ1qtL0oGYYQsfw7TnO9fO_cXvDWSE/viewform"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsVisible(false)}
            className="w-full bg-gradient-to-r from-purple-600 to-orange-500 text-white py-3 px-6 rounded-full font-bold text-lg hover:opacity-90 transition-opacity"
          >
            Take the Survey →
          </a>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-600 text-sm transition-colors"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}