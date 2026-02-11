import React from 'react';

const team = [
  {
    name: 'Valentina Garcia',
    role: 'Chief Executive Officer',
    bio: 'International lawyer with deep expertise in regulatory frameworks and public policy. Valentina leads SafeWays\' global expansion strategy, cultivates strategic partnerships, and shapes the product roadmap to address real-world safety challenges across diverse markets.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69415c608ad3b0308b28a1f5/b99b0b4aa_1752622914540.png',
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    name: 'Piotr Buda',
    role: 'Chief Technology Officer',
    bio: 'Seasoned software engineer and AI solutions architect with specialized knowledge in geographic information systems and spatial geometry. Piotr architects SafeWays\' core platform, oversees safety data integrity, and drives innovation in intelligent routing and predictive safety analytics.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69415c608ad3b0308b28a1f5/c5270ef2a_WhatsAppImage2026-02-03at130018.jpg',
    gradient: 'from-orange-500 to-yellow-500'
  }
];

export default function Team() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Leadership Committed to Your Safety
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the visionaries behind SafeWays—a unique blend of legal expertise and technical 
            innovation dedicated to making the world a safer place for everyone.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-100"
            >
              {/* Photo */}
              <div className="flex justify-center mb-6">
                <div className={`relative w-40 h-40 rounded-full bg-gradient-to-br ${member.gradient} p-1 shadow-2xl`}>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className={`w-full h-full rounded-full object-cover border-4 border-white ${member.name === 'Piotr Buda' ? 'object-[center_20%]' : ''}`}
                  />
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="text-2xl font-black text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className={`text-sm font-bold uppercase tracking-wider bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-4`}>
                  {member.role}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-20 bg-gradient-to-br from-purple-900 to-orange-600 rounded-3xl p-12 text-white text-center shadow-2xl">
          <h3 className="text-3xl font-black mb-4">Our Mission</h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            SafeWays exists to empower individuals and communities with the tools, insights, and 
            connections they need to navigate the world with confidence. We believe safety is a 
            fundamental right, and through innovation and collaboration, we're building a future 
            where everyone can move freely without fear.
          </p>
        </div>
      </div>
    </div>
  );
}