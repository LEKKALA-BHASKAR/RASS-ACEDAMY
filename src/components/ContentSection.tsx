import React from 'react';
import { Award, TrendingUp, Users2, Briefcase, CheckCircle, Target } from 'lucide-react';

const contentCards = [
  {
    id: 1,
    icon: Award,
    title: "Industry-Certified Programs",
    description: "Earn certificates recognized by top companies worldwide and boost your professional credibility.",
    image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    features: ["Global Recognition", "Industry Standards", "Verified Skills", "Career Advancement"]
  },
  {
    id: 2,
    icon: TrendingUp,
    title: "How Certification Helps Your Career",
    description: "Our graduates see an average 40% salary increase within 6 months of course completion.",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    features: ["Higher Salaries", "Better Opportunities", "Skill Validation", "Professional Growth"]
  },
  {
    id: 3,
    icon: Users2,
    title: "Learn from Industry Experts",
    description: "Our instructors are seasoned professionals from top tech companies with real-world experience.",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    features: ["Expert Mentors", "Real Projects", "Industry Insights", "Personalized Guidance"]
  },
  {
    id: 4,
    icon: Briefcase,
    title: "Top Hiring Companies",
    description: "Our graduates are hired by Fortune 500 companies including Google, Microsoft, Amazon, and more.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    features: ["Fortune 500", "Startup Culture", "Remote Work", "Global Opportunities"]
  },
  {
    id: 5,
    icon: CheckCircle,
    title: "Proven Success Rate",
    description: "95% of our students complete their courses successfully and 87% get placed within 3 months.",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    features: ["95% Completion", "87% Placement", "3-Month Average", "Success Guarantee"]
  },
  {
    id: 6,
    icon: Target,
    title: "Personalized Learning Path",
    description: "Get a customized curriculum based on your career goals and current skill level.",
    image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    features: ["Custom Path", "Flexible Schedule", "Progress Tracking", "Goal-Oriented"]
  }
];

const ContentSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Why Choose RAAS ACADEMY?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're not just another online learning platform. We're your career transformation partner 
            with a proven track record of success.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-1"
              >
                {/* Card Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2">
                    {card.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-blue-600 rounded-3xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold">10K+</div>
              <div className="text-blue-100">Students Enrolled</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold">95%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold">500+</div>
              <div className="text-blue-100">Hiring Partners</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold">87%</div>
              <div className="text-blue-100">Job Placement</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;