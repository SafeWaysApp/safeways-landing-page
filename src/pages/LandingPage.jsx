import React from 'react';
import NewsTicker from '../components/landing/NewsTicker';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
// import Team from '../components/landing/Team';
import BlogPreview from '../components/landing/BlogPreview';
import ContactSection from '../components/landing/ContactSection';
import Footer from '../components/landing/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <NewsTicker />
      <Hero />
      <Features />
      {/* <Team /> */}
      <BlogPreview />
      <ContactSection />
      <Footer />
    </div>
  );
}