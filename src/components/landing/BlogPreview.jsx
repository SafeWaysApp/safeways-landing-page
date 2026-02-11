import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const posts = [
  {
    title: '10 Essential Safety Tips for Urban Travelers',
    excerpt: 'Navigating busy cities requires awareness and preparation. Learn the fundamental safety practices that can make your urban adventures worry-free.',
    category: 'Safety Tips',
    date: 'Feb 10, 2026',
    readTime: '5 min read',
    image: '🏙️'
  },
  {
    title: 'Community Spotlight: How SafeWays Users Helped During Crisis',
    excerpt: 'Real stories from our community members who used SafeWays to help others during emergency situations. Discover the power of collective action.',
    category: 'Community Stories',
    date: 'Feb 8, 2026',
    readTime: '7 min read',
    image: '🤝'
  },
  {
    title: 'Understanding Safety Zones: A Data-Driven Approach',
    excerpt: 'How we analyze and verify safe zones using community input, official data, and AI technology to provide accurate safety information.',
    category: 'Safety Tips',
    date: 'Feb 5, 2026',
    readTime: '6 min read',
    image: '📊'
  }
];

export default function BlogPreview() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              Safety Insights & Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Learn from our community, discover safety tips, and stay informed about the latest 
              in personal security and community protection.
            </p>
          </div>
          <Link 
            to={createPageUrl('Blog')}
            className="hidden md:inline-flex items-center gap-2 text-purple-700 font-bold hover:gap-4 transition-all"
          >
            View All Articles
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {posts.map((post, index) => (
            <article 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100 cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-purple-600 to-orange-500 flex items-center justify-center text-6xl">
                {post.image}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="text-purple-700 font-semibold hover:text-purple-900 transition-colors">
                    Read More →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="md:hidden text-center">
          <Link 
            to={createPageUrl('Blog')}
            className="inline-flex items-center gap-2 text-purple-700 font-bold"
          >
            View All Articles
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}