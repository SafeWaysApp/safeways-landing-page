import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '@/lib/LanguageContext.jsx';

const posts = [
  {
    title: '10 Essential Safety Tips for Urban Travelers',
    excerpt: 'Navigating busy cities requires awareness and preparation. Learn the fundamental safety practices that can make your urban adventures worry-free.',
    category: 'Safety Tips',
    date: 'Apr 18, 2026',
    readTime: '5 min read',
    image: '🏙️'
  },
  {
    title: 'Community Spotlight: How SafeWays Users Helped During Crisis',
    excerpt: 'Real stories from our community members who used SafeWays to help others during emergency situations. Discover the power of collective action.',
    category: 'Community Stories',
    date: 'Apr 14, 2026',
    readTime: '7 min read',
    image: '🤝'
  },
  {
    title: 'Understanding Safety Zones: A Data-Driven Approach',
    excerpt: 'How we analyze and verify safe zones using community input, official data, and AI technology to provide accurate safety information.',
    category: 'Safety Tips',
    date: 'Apr 9, 2026',
    readTime: '6 min read',
    image: '📊'
  }
];

export default function BlogPreview() {
  const { t } = useLanguage();
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              {t('blog_heading')}
            </h2>
          </div>
        </div>

        {/* Empty State */}
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 shadow-sm">
          <div className="text-5xl mb-6">✍️</div>
          <p className="text-xl text-gray-600 mb-2">{t('blog_empty')}</p>
          <p className="text-gray-500">
            {t('blog_cta')}{' '}
            <Link to="/contact" className="text-purple-700 font-semibold hover:text-purple-900 underline transition-colors">
              {t('blog_cta_link')}
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}