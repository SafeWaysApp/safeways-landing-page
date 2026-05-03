import React, { useState } from 'react';

export default function CookieBanner({ onAccept }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const handleAccept = () => {
    setVisible(false);
    onAccept?.();
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white px-6 py-4 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-gray-300 leading-relaxed">
          🍪 This website is hosted by Base44, which may use essential cookies to operate the platform. SafeWays itself does not collect any personal data or use tracking cookies.{' '}
          <a href="/PrivacyPolicy" className="underline text-purple-400 hover:text-purple-300 transition-colors">
            Learn more
          </a>
        </p>
        <button
          onClick={handleAccept}
          className="shrink-0 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors"
        >
          Accept
        </button>
      </div>
    </div>
  );
}