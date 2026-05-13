import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Footer from '../components/landing/Footer';

export default function TermsOfService() {
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
          <h1 className="text-4xl sm:text-5xl font-black mb-4">Terms of service</h1>
          <p className="text-xl text-purple-100">Last updated: February 11, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to SafeWays. These Terms of Service ("Terms") govern your access to and use of the SafeWays 
              mobile application, website, and related services (collectively, the "Service"). By accessing or using 
              SafeWays, you agree to be bound by these Terms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you do not agree to these Terms, you may not access or use the Service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of service</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              SafeWays provides location-based safety services, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Real-time safety alerts and incident reports</li>
              <li>Intelligent route planning with safety considerations</li>
              <li>Community-driven safety information and reviews</li>
              <li>Emergency assistance features</li>
              <li>Safety zone ratings and verified safe locations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Safety disclaimer</h2>
            
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
              <p className="text-gray-900 font-bold mb-2">IMPORTANT SAFETY NOTICE</p>
              <p className="text-gray-700 leading-relaxed">
                SafeWays is a tool to assist with safety awareness, but it is not a substitute for your own judgment or official safety resources. Safety information is provided "as is" based on community reports and available data.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              You acknowledge and agree that:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>SafeWays cannot guarantee the accuracy or completeness of safety information</li>
              <li>You are solely responsible for your personal safety and decisions</li>
              <li>In emergencies, contact local emergency services (911 or equivalent) directly</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Contact information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about these Terms, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                <Link to="/contact" className="text-purple-700 font-semibold hover:text-purple-900 underline transition-colors">
                  Contact us via our contact form
                </Link>
              </p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}