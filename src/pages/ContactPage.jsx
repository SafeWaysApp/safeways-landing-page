import React from 'react';
import Navbar from '../components/landing/Navbar';
import ContactSection from '../components/landing/ContactSection';
import Footer from '../components/landing/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <div className="py-20 text-center" style={{ background: 'linear-gradient(to bottom right, #581c87, #fb9782)' }}>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">Contact Us</h1>
          <p className="text-purple-100 text-xl max-w-2xl mx-auto px-4 leading-relaxed">
            Have questions about SafeWays or want to learn more about our urban safety intelligence platform? We'd love to hear from you.
          </p>
        </div>
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}