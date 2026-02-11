import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Footer from '../components/landing/Footer';
import { Search, Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Input } from '@/components/ui/input';

const blogPosts = [
  {
    title: 'Understanding Crime Statistics in Your Neighborhood',
    excerpt: 'Learn how to interpret local crime data and what it means for your daily safety decisions.',
    category: 'Safety Tips',
    date: 'Feb 8, 2026',
    readTime: '5 min read',
    image: '🔍',
    content: 'Detailed analysis of crime statistics and how to use them effectively...'
  },
  {
    title: '10 Essential Safety Habits for Urban Living',
    excerpt: 'Practical tips for staying safe in busy city environments, from public transit to late-night commutes.',
    category: 'Urban Safety',
    date: 'Feb 5, 2026',
    readTime: '7 min read',
    image: '🏙️',
    content: 'Essential safety habits every urban dweller should know...'
  },
  {
    title: 'How Community Reporting Makes Everyone Safer',
    excerpt: 'Discover the power of community-driven safety and how your contributions help protect others.',
    category: 'Community',
    date: 'Feb 1, 2026',
    readTime: '4 min read',
    image: '👥',
    content: 'The impact of community reporting on overall safety...'
  },
  {
    title: 'Travel Safety: Planning Your Route Wisely',
    excerpt: 'Expert advice on route planning for maximum safety whether you\'re walking, cycling, or driving.',
    category: 'Travel Safety',
    date: 'Jan 28, 2026',
    readTime: '6 min read',
    image: '🗺️',
    content: 'Smart strategies for safe travel planning...'
  },
  {
    title: 'Emergency Preparedness: What You Need to Know',
    excerpt: 'Be ready for unexpected situations with our comprehensive emergency preparedness guide.',
    category: 'Emergency',
    date: 'Jan 25, 2026',
    readTime: '8 min read',
    image: '🚨',
    content: 'Complete guide to emergency preparedness...'
  },
  {
    title: 'Safe Zones: How We Verify and Rate Locations',
    excerpt: 'Behind the scenes of our verification process and what makes a location SafeWays certified.',
    category: 'Technology',
    date: 'Jan 20, 2026',
    readTime: '5 min read',
    image: '✅',
    content: 'Our methodology for verifying safe zones...'
  }
];

const categories = ['All', 'Safety Tips', 'Urban Safety', 'Community', 'Travel Safety', 'Emergency', 'Technology'];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link 
            to={createPageUrl('LandingPage')}
            className="inline-flex items-center gap-2 text-purple-100 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <h1 className="text-5xl sm:text-6xl font-black mb-4">
            SafeWays Blog
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl">
            Expert insights, safety tips, and stories from our community to help you navigate the world with confidence.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          {/* Search */}
          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-lg"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-orange-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden border border-gray-100"
              >
                <div className="p-8">
                  {/* Image/Emoji */}
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-orange-100 rounded-2xl flex items-center justify-center text-4xl mb-6">
                    {post.image}
                  </div>

                  {/* Category and Meta */}
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-semibold">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title and Excerpt */}
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  {/* Date and CTA */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <span className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <button className="text-purple-600 hover:text-purple-700 font-semibold transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-20 bg-gradient-to-br from-purple-900 to-orange-600 rounded-3xl p-12 text-white text-center shadow-2xl">
          <h3 className="text-3xl font-black mb-4">Stay Updated</h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Get the latest safety tips, community updates, and expert insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 text-lg bg-white text-gray-900 border-none"
            />
            <button className="px-8 py-3 bg-white text-purple-900 rounded-full font-bold text-lg hover:bg-purple-50 transition-all shadow-xl hover:shadow-2xl whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}