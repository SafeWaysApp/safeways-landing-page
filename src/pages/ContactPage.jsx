import React from 'react';
import Navbar from '../components/landing/Navbar';
import ContactSection from '../components/landing/ContactSection';
import Footer from '../components/landing/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <div className="py-16 text-center" style={{ background: 'linear-gradient(to bottom right, #581c87, #fb9782)' }}>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Contact Us</h1>
          <p className="text-purple-100 text-xl max-w-2xl mx-auto px-4">We'd love to hear from you. Get in touch with the SafeWays team.</p>
        </div>
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}