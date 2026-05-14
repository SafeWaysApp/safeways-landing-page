import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/landing/Footer';
import Navbar from '../components/landing/Navbar';
import { useLanguage } from '@/lib/LanguageContext.jsx';

export default function PrivacyPolicy() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-900 to-orange-600 text-white pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-black mb-4">{t('privacy_title')}</h1>
          <p className="text-xl text-purple-100">{t('privacy_updated')}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <p className="text-gray-700 leading-relaxed mb-4">{t('privacy_intro1')}</p>
            <p className="text-gray-700 leading-relaxed mb-8">{t('privacy_intro2')}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy_s1_title')}</h2>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">{t('privacy_s1_personal_title')}</h3>
            <p className="text-gray-700 leading-relaxed mb-4">{t('privacy_s1_personal_intro')}</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>{t('privacy_s1_li1')}</li>
              <li>{t('privacy_s1_li2')}</li>
              <li>{t('privacy_s1_li3')}</li>
              <li>{t('privacy_s1_li4')}</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">{t('privacy_s1_personal_note')}</p>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">{t('privacy_s1_location_title')}</h3>
            <p className="text-gray-700 leading-relaxed mb-4">{t('privacy_s1_location_intro')}</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>{t('privacy_s1_loc_li1')}</li>
              <li>{t('privacy_s1_loc_li2')}</li>
              <li>{t('privacy_s1_loc_li3')}</li>
              <li>{t('privacy_s1_loc_li4')}</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">{t('privacy_s1_location_note')}</p>
          </section>

          <div className="bg-purple-50 border-l-4 border-purple-600 px-6 py-4 rounded-r-lg mb-12">
            <p className="text-gray-900 font-semibold leading-relaxed">{t('privacy_prototype_notice')}</p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy_s2_title')}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">{t('privacy_s2_intro')}</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>{t('privacy_s2_li1')}</li>
              <li>{t('privacy_s2_li2')}</li>
              <li>{t('privacy_s2_li3')}</li>
              <li>{t('privacy_s2_li4')}</li>
              <li>{t('privacy_s2_li5')}</li>
              <li>{t('privacy_s2_li6')}</li>
              <li>{t('privacy_s2_li7')}</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy_s3_title')}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">{t('privacy_s3_p1')}</p>
            <p className="text-gray-700 leading-relaxed">{t('privacy_s3_p2')}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy_s4_title')}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">{t('privacy_s4_intro')}</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>{t('privacy_s4_li1')}</li>
              <li>{t('privacy_s4_li2')}</li>
              <li>{t('privacy_s4_li3')}</li>
              <li>{t('privacy_s4_li4')}</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">{t('privacy_s4_note')}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy_s5_title')}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">{t('privacy_s5_intro')}</p>
            <p className="text-gray-700">
              <Link to="/contact" className="text-purple-700 font-semibold hover:text-purple-900 underline transition-colors">
                {t('privacy_s5_link')}
              </Link>
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}