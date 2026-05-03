import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Footer from '../components/landing/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-900 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to={createPageUrl('LandingPage')} className="inline-flex items-center gap-2 text-purple-100 hover:text-white mb-6 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">Privacy Policy</h1>
          <p className="text-xl text-purple-100">Last updated: February 11, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to SafeWays. We are committed to protecting your personal information and your right to privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use 
              our mobile application and services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using SafeWays, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information we collect</h2>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">2.1 Personal information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Name, email address, and phone number</li>
              <li>Profile information and preferences</li>
              <li>Emergency contact information (if provided)</li>
              <li>User-generated content such as safety reports and reviews</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">2.2 Location data</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              SafeWays collects real-time location data to provide core safety features, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Safe route recommendations</li>
              <li>Real-time safety alerts for your area</li>
              <li>Emergency assistance services</li>
              <li>Location-based safety zone information</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Location data is only collected when you use the app and have granted location permissions. 
              You can disable location access at any time through your device settings, though this will limit app functionality.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How we use your information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>To provide, maintain, and improve our safety services</li>
              <li>To personalize your experience and provide relevant safety information</li>
              <li>To send safety alerts, notifications, and important updates</li>
              <li>To respond to your requests and provide customer support</li>
              <li>To analyze usage patterns and improve app functionality</li>
              <li>To detect, prevent, and address technical issues and security threats</li>
              <li>To comply with legal obligations and enforce our terms</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The SafeWays website does not use any cookies itself, and we do not collect any personal data through this website.
              However, as this website is hosted on the Base44 platform, Base44 may set essential technical cookies required to operate the hosting infrastructure.
              These cookies are outside of SafeWays' control and are solely managed by Base44.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Please note that the SafeWays mobile application is currently in prototype stage and is not yet publicly available.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement industry-standard security measures to protect your personal information, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Strict access controls and authentication requirements</li>
              <li>Secure cloud infrastructure with redundancy and backups</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              However, no method of transmission over the internet is 100% secure. While we strive to protect 
              your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions or concerns about this Privacy Policy, please contact us:
            </p>
            <p className="text-gray-700 mb-2"><strong>Email:</strong> piotr.buda@safeways.io</p>
            <p className="text-gray-700">We aim to respond within 5 working days.</p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}