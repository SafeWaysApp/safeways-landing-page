import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Footer from '../components/landing/Footer';
import Navbar from '../components/landing/Navbar';
import { useLanguage } from '@/lib/LanguageContext.jsx';

export default function AccountDeletion() {
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
            {t('deletion_back')}
          </Link>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">{t('deletion_title')}</h1>
          <p className="text-xl text-purple-100">{t('deletion_intro')}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('deletion_s1_title')}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">{t('deletion_s1_intro')}</p>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2">
              <li>{t('deletion_s1_li1')}</li>
              <li>{t('deletion_s1_li2')}</li>
              <li>{t('deletion_s1_li3')}</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('deletion_s2_title')}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">{t('deletion_s2_intro')}</p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                <Link to="/contact" className="text-purple-700 font-semibold hover:text-purple-900 underline transition-colors">
                  {t('deletion_s2_link')}
                </Link>
              </p>
              <p className="text-gray-700">{t('deletion_s2_note')}</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('deletion_s3_title')}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">{t('deletion_s3_intro')}</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>{t('deletion_s3_li1')}</li>
              <li>{t('deletion_s3_li2')}</li>
              <li>{t('deletion_s3_li3')}</li>
              <li>{t('deletion_s3_li4')}</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">{t('deletion_s3_note')}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('deletion_s4_title')}</h2>
            <p className="text-gray-700 leading-relaxed">{t('deletion_s4_body')}</p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
