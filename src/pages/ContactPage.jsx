import React from 'react';
import Navbar from '../components/landing/Navbar';
import ContactSection from '../components/landing/ContactSection';
import Footer from '../components/landing/Footer';
import { useLanguage } from '@/lib/LanguageContext.jsx';

export default function ContactPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <div className="py-20 text-center" style={{ background: 'linear-gradient(to bottom right, #581c87, #fb9782)' }}>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">{t('contact_page_title')}</h1>
          <p className="text-purple-100 text-xl max-w-2xl mx-auto px-4 leading-relaxed">
            {t('contact_page_subtitle')}
          </p>
        </div>
        <ContactSection />
        <div className="max-w-2xl mx-auto px-4 py-8 text-center text-gray-600">
          <p>{t('contact_page_response')}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}