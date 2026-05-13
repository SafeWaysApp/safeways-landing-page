import React from 'react';
import Navbar from '../components/landing/Navbar';
import BlogPreview from '../components/landing/BlogPreview';
import Footer from '../components/landing/Footer';

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <div className="py-16 text-center" style={{ background: 'linear-gradient(to bottom right, #581c87, #fb9782)' }}>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Insights & Stories</h1>
          <p className="text-purple-100 text-xl max-w-2xl mx-auto px-4">Safety tips, community stories, and the latest in personal security.</p>
        </div>
        <BlogPreview />
      </div>
      <Footer />
    </div>
  );
}