import  { useState, useEffect } from 'react';
import { ExternalLink, ArrowRight, Trophy, Users, DollarSign } from 'lucide-react';

import partners from '../data/partners';

const PartnersSlider = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [activePartner, setActivePartner] = useState<number | null>(null);

  // Pause animation on hover
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Handle partner click for mobile
  const handlePartnerClick = (id: number) => {
    if (activePartner === id) {
      setActivePartner(null);
    } else {
      setActivePartner(id);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 transform transition-all duration-700">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Our Premier Hiring Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our graduates have been successfully placed at India's top companies and startups
          </p>
        </div>

        {/* Continuous scrolling animation */}
        <div 
          className="relative overflow-hidden py-6"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`flex space-x-8 ${isPaused ? 'animate-pause' : 'animate-scroll'}`}>
            {/* First set of logos */}
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="flex-shrink-0 w-64 h-36 relative group cursor-pointer transform transition-all duration-500 hover:scale-105"
                onClick={() => handlePartnerClick(partner.id)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl shadow-lg transform -skew-x-3 -rotate-2 group-hover:rotate-0 group-hover:skew-x-0 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg transform skew-x-3 rotate-2 group-hover:rotate-0 group-hover:skew-x-0 transition-all duration-500"></div>
                
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-white rounded-2xl shadow-lg flex items-center justify-center p-6 transform transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-w-40 max-h-16 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-indigo-600/90 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white text-center p-4">
                      <div className="font-semibold mb-2">{partner.name}</div>
                      <div className="flex items-center justify-center text-sm">
                        Visit website
                        <ExternalLink className="ml-1 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {partners.map((partner) => (
              <div
                key={`duplicate-${partner.id}`}
                className="flex-shrink-0 w-64 h-36 relative group cursor-pointer transform transition-all duration-500 hover:scale-105"
                onClick={() => handlePartnerClick(partner.id)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl shadow-lg transform -skew-x-3 -rotate-2 group-hover:rotate-0 group-hover:skew-x-0 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg transform skew-x-3 rotate-2 group-hover:rotate-0 group-hover:skew-x-0 transition-all duration-500"></div>
                
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-white rounded-2xl shadow-lg flex items-center justify-center p-6 transform transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-w-40 max-h-16 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-indigo-600/90 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white text-center p-4">
                      <div className="font-semibold mb-2">{partner.name}</div>
                      <div className="flex items-center justify-center text-sm">
                        Visit website
                        <ExternalLink className="ml-1 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
          
          {/* Gradient fade effects on sides */}
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-blue-50/90 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-indigo-50/90 to-transparent z-10 pointer-events-none"></div>
        </div>

        {/* Stats section with 3D effect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Trophy className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-lg font-semibold text-gray-800">Placement Rate</div>
              <p className="text-gray-600 mt-2">of our graduates get placed within 3 months</p>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-indigo-600 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 rounded-full mb-4">
                <DollarSign className="h-8 w-8 text-cyan-600" />
              </div>
              <div className="text-4xl font-bold text-cyan-600 mb-2">₹12 LPA</div>
              <div className="text-lg font-semibold text-gray-800">Average Package</div>
              <p className="text-gray-600 mt-2">with highest package reaching ₹32 LPA</p>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">250+</div>
              <div className="text-lg font-semibold text-gray-800">Companies</div>
              <p className="text-gray-600 mt-2">actively hiring from our talent pool</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center mx-auto">
            Become a Hiring Partner
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* CSS for animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: max-content;
        }
        .animate-pause {
          animation-play-state: paused;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default PartnersSlider;