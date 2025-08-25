import React from 'react';

const partners = [
  { 
    id: 1, 
    name: 'Infosys', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/800px-Infosys_logo.svg.png',
    url: 'https://www.infosys.com/'
  },
  { 
    id: 2, 
    name: 'Tata Consultancy Services', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/800px-Tata_Consultancy_Services_Logo.svg.png',
    url: 'https://www.tcs.com/'
  },
  { 
    id: 3, 
    name: 'Wipro', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/800px-Wipro_Primary_Logo_Color_RGB.svg.png',
    url: 'https://www.wipro.com/'
  },
  { 
    id: 4, 
    name: 'HCL Technologies', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/HCL_Technologies_logo.svg/800px-HCL_Technologies_logo.svg.png',
    url: 'https://www.hcltech.com/'
  },
  { 
    id: 5, 
    name: 'Tech Mahindra', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Tech_Mahindra_Logo.svg/800px-Tech_Mahindra_Logo.svg.png',
    url: 'https://www.techmahindra.com/'
  },
  { 
    id: 6, 
    name: 'Flipkart', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flipkart_logo.svg/800px-Flipkart_logo.svg.png',
    url: 'https://www.flipkart.com/'
  },
  { 
    id: 7, 
    name: 'Zomato', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Zomato_logo.png/800px-Zomato_logo.png',
    url: 'https://www.zomato.com/'
  },
  { 
    id: 8, 
    name: 'Paytm', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Paytm_Logo.png/800px-Paytm_Logo.png',
    url: 'https://paytm.com/'
  },
  { 
    id: 9, 
    name: 'Reliance Jio', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Reliance_Jio_Logo_%28October_2015%29.svg/800px-Reliance_Jio_Logo_%28October_2015%29.svg.png',
    url: 'https://www.jio.com/'
  },
  { 
    id: 10, 
    name: 'Byju\'s', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Byju%27s_logo.svg/800px-Byju%27s_logo.svg.png',
    url: 'https://byjus.com/'
  },
];

const PartnersSlider = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our Premier Hiring Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our graduates have been successfully placed at India's top companies and startups
          </p>
        </div>

        {/* Continuous scrolling animation */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-12">
            {/* First set of logos */}
            {partners.map((partner) => (
              <a
                key={partner.id}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-56 h-28 bg-white rounded-xl shadow-lg flex items-center justify-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-w-40 max-h-16 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </a>
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner) => (
              <a
                key={`duplicate-${partner.id}`}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-56 h-28 bg-white rounded-xl shadow-lg flex items-center justify-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-w-40 max-h-16 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </a>
            ))}
          </div>
          
          {/* Gradient fade effects on sides */}
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-blue-50 to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-indigo-50 to-transparent z-10"></div>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
            <div className="text-lg font-semibold text-gray-800">Placement Rate</div>
            <p className="text-gray-600 mt-2">of our graduates get placed within 3 months</p>
          </div>
          
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold text-blue-600 mb-2">₹12 LPA</div>
            <div className="text-lg font-semibold text-gray-800">Average Package</div>
            <p className="text-gray-600 mt-2">with highest package reaching ₹32 LPA</p>
          </div>
          
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold text-blue-600 mb-2">250+</div>
            <div className="text-lg font-semibold text-gray-800">Companies</div>
            <p className="text-gray-600 mt-2">actively hiring from our talent pool</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors duration-300 font-semibold text-lg shadow-lg hover:shadow-xl">
            Become a Hiring Partner
          </button>
        </div>
      </div>

      {/* CSS for animation */}
      <style >{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default PartnersSlider;