import React, { useState } from 'react';
import SurveyPopup from '../components/landing/SurveyPopup';
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
// import Team from '../components/landing/Team';
import BlogPreview from '../components/landing/BlogPreview';
import ContactSection from '../components/landing/ContactSection';
import Footer from '../components/landing/Footer';
import CookieBanner from '../components/landing/CookieBanner';

export default function LandingPage() {
  const [showCookies, setShowCookies] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <SurveyPopup onDismiss={() => setShowCookies(true)} />
      {showCookies && <CookieBanner />}

      <Hero />
      <Features />
      {/* <Team /> */}
      <BlogPreview />
      <ContactSection />
      <Footer />
    </div>
  );
}