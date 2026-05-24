import React from 'react';
import { useLanguage } from '@/lib/LanguageContext.jsx';

const statsData = [
  {
    figureKey: 'stat1_figure',
    descKey: 'stat1_desc',
    source: 'UN Women, 2021',
    sourceUrl: 'https://www.unwomen.org/en/news/stories/2021/9/feature-making-cities-and-public-spaces-safe-for-women-and-girls'
  },
  {
    figureKey: 'stat2_figure',
    descKey: 'stat2_desc',
    source: 'EU Gender-Based Violence Survey, 2024',
    sourceUrl: 'https://fra.europa.eu/en/publication/2024/gender-based-violence-survey-2024'
  },
  {
    figureKey: 'stat3_figure',
    descKey: 'stat3_desc',
    source: 'EU Gender-Based Violence Survey, 2024',
    sourceUrl: 'https://fra.europa.eu/en/publication/2024/gender-based-violence-survey-2024'
  },
  {
    figureKey: 'stat4_figure',
    descKey: 'stat4_desc',
    source: 'EU Gender-Based Violence Survey, 2024',
    sourceUrl: 'https://fra.europa.eu/en/publication/2024/gender-based-violence-survey-2024'
  },
];

export default function Purpose() {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-center gap-12 mb-16">
        <div className="flex-1">
          <span className="inline-block text-sm font-bold uppercase tracking-widest text-purple-600 mb-2">{t('purpose_label')}</span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mt-8 mb-6 leading-tight">
            {t('purpose_heading')}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-4">
            {t('purpose_p1')}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('purpose_p2')}
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
          {statsData.map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 border-2 border-purple-100 bg-purple-50 flex flex-col gap-3"
            >
              <div className="text-4xl font-black text-purple-700">{t(stat.figureKey)}</div>
              <p className="text-gray-700 text-sm leading-relaxed flex-1">{t(stat.descKey)}</p>
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
              {t('purpose_cta_title')}
            </h3>
            <p className="text-purple-100 text-lg leading-relaxed mb-6">
              {t('purpose_cta_p1')}
            </p>
            <p className="text-purple-200 text-base leading-relaxed italic">
              {t('purpose_cta_p2')}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}