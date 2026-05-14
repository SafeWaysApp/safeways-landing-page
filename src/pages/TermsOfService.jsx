import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Footer from '../components/landing/Footer';
import Navbar from '../components/landing/Navbar';
import { useLanguage } from '@/lib/LanguageContext.jsx';

export default function TermsOfService() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-900 to-orange-600 text-white pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to={createPageUrl('LandingPage')} className="inline-flex items-center gap-2 text-purple-100 hover:text-white mb-6 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t('terms_back')}
          </Link>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">{t('terms_title')}</h1>
          <p className="text-xl text-purple-100">{t('terms_updated')}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms_s1_title')}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">{t('terms_s1_p1')}</p>
            <p className="text-gray-700 leading-relaxed">{t('terms_s1_p2')}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms_s2_title')}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">{t('terms_s2_intro')}</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>{t('terms_s2_li1')}</li>
              <li>{t('terms_s2_li2')}</li>
              <li>{t('terms_s2_li3')}</li>
              <li>{t('terms_s2_li4')}</li>
              <li>{t('terms_s2_li5')}</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms_s3_title')}</h2>
            
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
              <p className="text-gray-900 font-bold mb-2">{t('terms_s3_notice_title')}</p>
              <p className="text-gray-700 leading-relaxed">{t('terms_s3_notice_body')}</p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">{t('terms_s3_intro')}</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>{t('terms_s3_li1')}</li>
              <li>{t('terms_s3_li2')}</li>
              <li>{t('terms_s3_li3')}</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms_s4_title')}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">{t('terms_s4_intro')}</p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                <Link to="/contact" className="text-purple-700 font-semibold hover:text-purple-900 underline transition-colors">
                  {t('terms_s4_link')}
                </Link>
              </p>
              <p className="text-gray-700">{t('terms_s4_response')}</p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}