import React from 'react';

const stats = [
  {
    figure: '60%',
    description: 'of women feel unsafe walking alone at night.',
    source: 'UN Women, 2021',
    sourceUrl: 'https://www.unwomen.org/en/news/stories/2021/9/feature-making-cities-and-public-spaces-safe-for-women-and-girls'
  },
  {
    figure: '1 in 3',
    description: 'women in the EU have experienced physical violence, sexual violence, or threats in their adulthood.',
    source: 'EU Gender-Based Violence Survey, 2024',
    sourceUrl: 'https://fra.europa.eu/en/publication/2024/gender-based-violence-survey-2024'
  },
  {
    figure: '1 in 6',
    description: 'women in the EU have experienced sexual violence, including rape, in their adulthood.',
    source: 'EU Gender-Based Violence Survey, 2024',
    sourceUrl: 'https://fra.europa.eu/en/publication/2024/gender-based-violence-survey-2024'
  },
  {
    figure: 'Only 1 in 8',
    description: 'women who experienced violence reported the incident to the police.',
    source: 'EU Gender-Based Violence Survey, 2024',
    sourceUrl: 'https://fra.europa.eu/en/publication/2024/gender-based-violence-survey-2024'
  },
];

export default function Purpose() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-center gap-12 mb-16">
        <div className="flex-1">
          <span className="inline-block text-sm font-bold uppercase tracking-widest text-purple-600 mb-2">Our Purpose</span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mt-8 mb-6 leading-tight">
            Everyone should walk the world with confidence.
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-4">
            That's what we believe. But we also know that's not the reality for everyone, and particularly not for women.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Fear of street harassment and violence restricts millions of women's freedom every day, limiting access to work, education, and leisure. This is not a personal failing. It is an unacceptable systemic reality. We have normalised a totally abnormal experience, and it needs to change.
          </p>
        </div>
          <div className="hidden lg:flex items-center justify-center flex-shrink-0">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698bc57975eb60d9d1b511a2/2ba989b2d_safeway_logo_512.png"
              alt="SafeWays Logo"
              className="w-64 h-64 object-contain opacity-90"
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 border-2 border-purple-100 bg-purple-50 flex flex-col gap-3"
            >
              <div className="text-4xl font-black text-purple-700">{stat.figure}</div>
              <p className="text-gray-700 text-sm leading-relaxed flex-1">{stat.description}</p>
              <a
                href={stat.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-purple-400 hover:text-purple-600 font-medium underline underline-offset-2 transition-colors"
              >
                {stat.source} ↗
              </a>
            </div>
          ))}
        </div>

        {/* Call to action block */}
        <div className="rounded-3xl p-8 sm:p-12 text-white max-w-3xl mx-auto" style={{ background: 'linear-gradient(to bottom right, #581c87, #9333ea)' }}>
          <div>
            <h3 className="text-2xl sm:text-3xl font-black mb-4">
              This is why SafeWays exists.
            </h3>
            <p className="text-purple-100 text-lg leading-relaxed mb-6">
              SafeWays is not the solution to this problem, only systemic change can be. But while change happens, we want to empower women and anyone who uses our app to walk the world with confidence, knowing their route has been planned with safety in mind, not just speed.
            </p>
            <p className="text-purple-200 text-base leading-relaxed italic">
              Because everyone should enjoy the world freely, and until the world catches up, we'll try our best to help you make informed decisions of your walking route.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}