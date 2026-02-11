import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Footer from '../components/landing/Footer';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    id: 'crime-statistics',
    title: 'Understanding Crime Statistics in Your Neighborhood',
    excerpt: 'Learn how to interpret local crime data and what it means for your daily safety decisions.',
    category: 'Safety Tips',
    date: 'Feb 8, 2026',
    readTime: '5 min read',
    image: '🔍',
    content: `
# Understanding Crime Statistics in Your Neighborhood

Crime statistics can be overwhelming and confusing. In this comprehensive guide, we'll break down how to interpret local crime data and use it to make informed safety decisions.

## What Are Crime Statistics?

Crime statistics are data points collected by law enforcement agencies about criminal activities in specific areas. These numbers help communities understand trends and allocate resources effectively.

## Key Metrics to Watch

### 1. Crime Rate per 1,000 Residents
This normalized metric allows you to compare areas of different population sizes fairly. A neighborhood with 50 crimes and 1,000 residents has a crime rate of 50 per 1,000.

### 2. Trend Analysis
Look at whether crime is increasing or decreasing over time. A single month's data tells you less than a year-over-year comparison.

### 3. Crime Types
Different crimes have different impacts. Property crimes, violent crimes, and quality-of-life offenses should be evaluated separately.

## How to Access Local Crime Data

Most police departments provide public crime maps and statistics. SafeWays aggregates this data with community reports to give you the most comprehensive view.

## Making Safety Decisions

Use crime statistics as one factor among many. Consider:
- Time of day when crimes occur
- Specific locations within a neighborhood
- Community safety measures in place
- Your personal risk tolerance

## Conclusion

Understanding crime statistics empowers you to make informed decisions about where you live, work, and travel. Combined with real-time community reports through SafeWays, you have all the information you need to stay safe.
    `
  },
  {
    id: 'urban-safety-habits',
    title: '10 Essential Safety Habits for Urban Living',
    excerpt: 'Practical tips for staying safe in busy city environments, from public transit to late-night commutes.',
    category: 'Urban Safety',
    date: 'Feb 5, 2026',
    readTime: '7 min read',
    image: '🏙️',
    content: `
# 10 Essential Safety Habits for Urban Living

Living in a city offers incredible opportunities, but it also requires street smarts. Here are ten essential safety habits every urban dweller should develop.

## 1. Be Aware of Your Surroundings

Put down your phone and pay attention to what's happening around you. Awareness is your first line of defense.

## 2. Trust Your Instincts

If something feels wrong, it probably is. Don't dismiss your gut feelings.

## 3. Plan Your Routes

Use SafeWays to plan the safest route to your destination, especially at night.

## 4. Keep Valuables Hidden

Don't advertise expensive items. Keep your phone, jewelry, and other valuables out of sight when not in use.

## 5. Use Well-Lit, Busy Streets

Stick to main streets with good lighting and pedestrian traffic, especially after dark.

## 6. Share Your Location

Let trusted friends or family know where you're going and when you expect to arrive.

## 7. Have Emergency Contacts Ready

Program emergency numbers and trusted contacts into your phone for quick access.

## 8. Secure Your Home

Multiple locks, a peephole, and security awareness are essential for urban living.

## 9. Be Cautious with Strangers

Friendly doesn't always mean safe. Maintain healthy boundaries with people you don't know.

## 10. Stay Updated

Use SafeWays to receive real-time alerts about incidents in your area.

## Conclusion

Safety in urban environments comes from developing good habits and staying informed. These ten practices will help you navigate city life with confidence.
    `
  },
  {
    id: 'community-reporting',
    title: 'How Community Reporting Makes Everyone Safer',
    excerpt: 'Discover the power of community-driven safety and how your contributions help protect others.',
    category: 'Community',
    date: 'Feb 1, 2026',
    readTime: '4 min read',
    image: '👥',
    content: `
# How Community Reporting Makes Everyone Safer

Community reporting transforms how we approach safety by empowering individuals to protect each other through shared information.

## The Power of Collective Knowledge

When thousands of people share real-time information about safety concerns, everyone benefits. A single report can prevent dozens of people from encountering dangerous situations.

## What to Report

- Suspicious activities
- Poorly lit areas
- Aggressive individuals
- Unsafe infrastructure
- Positive sightings of police presence
- Safe zones and helpful resources

## How SafeWays Verifies Reports

We use a combination of:
- Community verification (multiple reports)
- Official data sources
- AI pattern recognition
- Expert review for critical incidents

## Privacy and Responsibility

Report responsibly. Never share personally identifiable information, and focus on objective observations rather than assumptions.

## Real Impact Stories

Communities using SafeWays have reported:
- 35% increase in awareness of local safety issues
- Faster police response to verified incidents
- Improved neighborhood solidarity
- Reduced crime through preventive awareness

## Your Role Matters

Every report you submit contributes to a safer community. Together, we create a comprehensive safety network that protects everyone.

## Conclusion

Community reporting isn't just about sharing problems—it's about building solutions together. Your voice makes a difference.
    `
  },
  {
    id: 'travel-safety-planning',
    title: 'Travel Safety: Planning Your Route Wisely',
    excerpt: 'Expert advice on route planning for maximum safety whether you\'re walking, cycling, or driving.',
    category: 'Travel Safety',
    date: 'Jan 28, 2026',
    readTime: '6 min read',
    image: '🗺️',
    content: `
# Travel Safety: Planning Your Route Wisely

Smart route planning is one of the most effective ways to ensure your safety while traveling. Here's how to do it right.

## Before You Leave

### Research Your Route
- Check SafeWays for real-time safety information
- Read recent community reports
- Note safe zones along your path
- Identify alternative routes

### Consider Timing
Time of day matters. Routes that are safe during daylight hours may pose risks at night.

### Share Your Plans
Always let someone know where you're going and when you expect to arrive.

## Walking Safety

- Stick to well-lit, populated streets
- Avoid shortcuts through alleys or isolated areas
- Walk facing traffic when on roads
- Keep your phone charged and accessible

## Cycling Safety

- Use designated bike lanes when available
- Wear visible clothing and use lights
- Plan routes with less traffic
- Lock your bike securely at your destination

## Driving Safety

- Keep doors locked while driving
- Park in well-lit, busy areas
- Have your keys ready before reaching your car
- Trust your navigation but verify with common sense

## Public Transit Safety

- Stand or sit near other passengers or transit staff
- Have your fare ready to minimize time at stops
- Know your exit in advance
- Stay alert, especially during off-peak hours

## Using SafeWays for Route Planning

Our AI analyzes:
- Real-time community reports
- Historical crime data
- Current traffic patterns
- Lighting conditions
- Police presence

## Conclusion

The safest route isn't always the shortest. Taking a few extra minutes to plan can make all the difference in your safety.
    `
  },
  {
    id: 'emergency-preparedness',
    title: 'Emergency Preparedness: What You Need to Know',
    excerpt: 'Be ready for unexpected situations with our comprehensive emergency preparedness guide.',
    category: 'Emergency',
    date: 'Jan 25, 2026',
    readTime: '8 min read',
    image: '🚨',
    content: `
# Emergency Preparedness: What You Need to Know

Being prepared for emergencies can mean the difference between panic and effective action. Here's your complete guide.

## Essential Emergency Kit

Every household should have:
- Water (1 gallon per person per day for 3 days)
- Non-perishable food (3-day supply)
- Flashlight and extra batteries
- First aid kit
- Whistle to signal for help
- Phone chargers (including portable battery pack)
- Emergency contact list
- Cash and important documents
- Medications

## Digital Preparedness

### Download SafeWays Offline Maps
- Access safety information without internet
- Pre-download maps of your area
- Mark safe zones and emergency resources

### Save Emergency Contacts
- Local police and fire department
- Hospitals and urgent care
- Trusted friends and family
- Your building's security/management

## Know Your Emergency Resources

### Identify Nearby:
- Police stations
- Fire stations
- Hospitals
- 24-hour pharmacies
- Shelters

## Create an Emergency Plan

### Family Communication
- Designate an out-of-state contact
- Choose meeting points
- Practice your plan regularly

### Evacuation Routes
- Know multiple ways out of your home
- Identify safe zones in your neighborhood
- Keep car gas tank at least half full

## During an Emergency

1. **Stay Calm**: Clear thinking saves lives
2. **Assess the Situation**: What's the immediate threat?
3. **Take Action**: Follow your plan
4. **Communicate**: Update loved ones when safe
5. **Use SafeWays**: Report incidents to help others

## After an Emergency

- Check on neighbors
- Report hazards through SafeWays
- Document damage for insurance
- Avoid affected areas until cleared by authorities

## Special Considerations

### For Pets
- Include pet supplies in your emergency kit
- Have a plan for pet evacuation
- Keep vaccination records accessible

### For People with Disabilities
- Maintain backup power for medical equipment
- Keep extra mobility aids if possible
- Register with local emergency services

## Regular Maintenance

Review and update your emergency plan every six months:
- Replace expired supplies
- Update contact information
- Practice evacuation routes
- Refresh family members on procedures

## Conclusion

Preparedness isn't about living in fear—it's about living with confidence. When you're prepared, you can handle whatever comes your way.
    `
  },
  {
    id: 'safe-zone-verification',
    title: 'Safe Zones: How We Verify and Rate Locations',
    excerpt: 'Behind the scenes of our verification process and what makes a location SafeWays certified.',
    category: 'Technology',
    date: 'Jan 20, 2026',
    readTime: '5 min read',
    image: '✅',
    content: `
# Safe Zones: How We Verify and Rate Locations

Transparency is essential to trust. Here's exactly how SafeWays verifies and rates locations as safe zones.

## Our Multi-Layer Verification Process

### 1. Community Reports
The foundation of our system. Real users report their experiences in real-time.

### 2. Historical Data Analysis
We analyze years of crime statistics, incidents, and trends for each location.

### 3. Environmental Factors
- Lighting quality
- Visibility
- Foot traffic
- Proximity to emergency services
- Security measures present

### 4. Expert Review
Our safety experts validate high-priority locations and unusual reports.

### 5. AI Pattern Recognition
Machine learning identifies patterns that might not be obvious to human reviewers.

## Rating Categories

### ⭐⭐⭐⭐⭐ Excellent Safety (Green)
- Very low crime rate
- Strong community presence
- Well-lit and maintained
- Quick emergency response
- Multiple verified reports

### ⭐⭐⭐⭐ Good Safety (Light Green)
- Low crime rate
- Regular community activity
- Good lighting
- Accessible emergency services

### ⭐⭐⭐ Moderate Safety (Yellow)
- Average crime rate
- Some community presence
- Adequate lighting
- Standard precautions recommended

### ⭐⭐ Increased Caution (Orange)
- Above-average crime rate
- Limited community activity
- Poor lighting or maintenance
- Extra vigilance recommended

### ⭐ High Caution (Red)
- High crime rate
- Minimal community presence
- Avoid when possible, especially alone or at night

## Dynamic Updates

Safety ratings aren't static. They update based on:
- Recent incidents (weighted more heavily)
- Time of day
- Day of week
- Seasonal patterns
- Community feedback

## Your Role in Verification

When you report:
- Your input is immediately analyzed
- Similar reports strengthen verification
- Contradictory reports trigger expert review
- Your reputation score affects weight of reports

## Building Reputation

Contributing accurate reports builds your reputation score:
- ✓ Verified reports: +5 points
- ✓ First to report verified incident: +10 points
- ✓ Helpful community member: Increased trust weight
- ✗ False reports: Score decrease

## Certification Process

For a location to be "SafeWays Certified":
1. Minimum 30 days of data collection
2. At least 50 positive community reports
3. No serious incidents in last 90 days
4. Physical verification by SafeWays team
5. Regular re-certification every 6 months

## Privacy Protection

We verify locations, not people. All personal data is:
- Encrypted
- Anonymized in reports
- Never shared with third parties
- Compliant with all privacy regulations

## Appeal Process

Businesses or property owners can appeal ratings:
- Submit documentation
- Request re-evaluation
- Provide evidence of safety improvements
- Expert team reviews within 7 days

## Conclusion

Our verification process combines technology, community input, and expert oversight to provide the most accurate safety information available. Together, we're building a safer world.
    `
  }
];

export default function BlogPost() {
  const [searchParams] = useSearchParams();
  const postId = searchParams.get('id');
  const post = blogPosts.find(p => p.id === postId) || blogPosts[0];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link 
            to={createPageUrl('Blog')}
            className="inline-flex items-center gap-2 text-purple-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="flex items-center gap-3 text-sm mb-4">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-purple-100">
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
          <div className="prose prose-lg max-w-none">
            {post.content.split('\n').map((paragraph, index) => {
              if (paragraph.trim().startsWith('# ')) {
                return <h1 key={index} className="text-4xl font-black text-gray-900 mt-8 mb-4">{paragraph.replace('# ', '')}</h1>;
              } else if (paragraph.trim().startsWith('## ')) {
                return <h2 key={index} className="text-3xl font-bold text-gray-900 mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
              } else if (paragraph.trim().startsWith('### ')) {
                return <h3 key={index} className="text-2xl font-bold text-gray-900 mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
              } else if (paragraph.trim().startsWith('- ')) {
                return <li key={index} className="text-gray-700 ml-6">{paragraph.replace('- ', '')}</li>;
              } else if (paragraph.trim()) {
                return <p key={index} className="text-gray-700 leading-relaxed mb-4">{paragraph}</p>;
              }
              return null;
            })}
          </div>

          {/* Share */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-900">Share this article</h3>
              <Button variant="outline" className="gap-2">
                <Share2 className="w-4 h-4" />
                Share
              </Button>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">More Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.filter(p => p.id !== post.id).slice(0, 2).map((relatedPost) => (
              <Link
                key={relatedPost.id}
                to={`${createPageUrl('BlogPost')}?id=${relatedPost.id}`}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
              >
                <div className="text-4xl mb-4">{relatedPost.image}</div>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-semibold text-sm">
                  {relatedPost.category}
                </span>
                <h4 className="text-xl font-bold text-gray-900 mt-3 mb-2">{relatedPost.title}</h4>
                <p className="text-gray-600 text-sm">{relatedPost.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}