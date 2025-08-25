import { ArrowRight, CheckCircle, Users, Award, TrendingUp } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          {/* Main CTA Content */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform 
            <span className="block text-blue-200">Your Career?</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Join thousands of successful graduates who chose RAAS ACADEMY to achieve their career goals. 
            Start your journey today and unlock endless possibilities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
              <span>Get Started Today</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
              Browse Courses
            </button>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center text-white">
            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Industry Certified</h3>
            <p className="text-blue-100 text-sm">Get certificates recognized by top employers worldwide</p>
          </div>
          
          <div className="text-center text-white">
            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Expert Mentors</h3>
            <p className="text-blue-100 text-sm">Learn from industry professionals with years of experience</p>
          </div>
          
          <div className="text-center text-white">
            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Job Guarantee</h3>
            <p className="text-blue-100 text-sm">87% of our graduates get placed within 3 months</p>
          </div>
          
          <div className="text-center text-white">
            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Career Growth</h3>
            <p className="text-blue-100 text-sm">Average 40% salary increase after course completion</p>
          </div>
        </div>

        {/* Special Offer Banner */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white border-opacity-20">
          <div className="inline-flex items-center bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold mb-4">
            🎉 Limited Time Offer
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Early Bird Special - Save 30%
          </h3>
          <p className="text-blue-100 mb-6">
            Enroll in any course this month and get access to our exclusive job placement program for FREE!
          </p>
          <div className="flex items-center justify-center space-x-4 text-white">
            <span className="text-sm">Offer expires in:</span>
            <div className="flex space-x-2">
              <div className="bg-white bg-opacity-20 px-3 py-2 rounded text-center">
                <div className="text-lg font-bold">07</div>
                <div className="text-xs">Days</div>
              </div>
              <div className="bg-white bg-opacity-20 px-3 py-2 rounded text-center">
                <div className="text-lg font-bold">14</div>
                <div className="text-xs">Hours</div>
              </div>
              <div className="bg-white bg-opacity-20 px-3 py-2 rounded text-center">
                <div className="text-lg font-bold">23</div>
                <div className="text-xs">Minutes</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-blue-100 text-lg mb-6">
            Still have questions? Our admissions counselors are here to help.
          </p>
          <button className="text-white border-b border-white hover:border-blue-200 transition-colors duration-200 text-lg">
            Schedule a Free Consultation →
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;