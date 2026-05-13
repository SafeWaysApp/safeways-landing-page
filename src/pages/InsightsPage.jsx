import React from 'react';
import Navbar from '../components/landing/Navbar';
import BlogPreview from '../components/landing/BlogPreview';
import Footer from '../components/landing/Footer';

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <BlogPreview />
      <Footer />
    </div>
  );
}