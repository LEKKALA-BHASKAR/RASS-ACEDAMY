import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Award, Users, Briefcase } from 'lucide-react';

const heroSlides = [
  {
    id: 1,
    title: "Learn. Grow. Get Certified.",
    subtitle: "Get Hired with RAAS ACADEMY",
    description: "Transform your career with industry-relevant courses and guaranteed job opportunities",
    image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg",
    cta: "Start Learning Today",
    stats: [
      { icon: Users, value: "10K+", label: "Students Enrolled" },
      { icon: Award, value: "95%", label: "Certification Rate" },
      { icon: Briefcase, value: "85%", label: "Job Placement" }
    ]
  },
  {
    id: 2,
    title: "Master In-Demand Skills",
    subtitle: "Build Your Future Career",
    description: "Join thousands of successful graduates who landed their dream jobs",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
    cta: "Explore Courses",
    stats: [
      { icon: Users, value: "50+", label: "Expert Instructors" },
      { icon: Award, value: "100+", label: "Courses Available" },
      { icon: Briefcase, value: "200+", label: "Partner Companies" }
    ]
  },
  {
    id: 3,
    title: "Industry-Certified Programs",
    subtitle: "Connect with Top Employers",
    description: "Get access to exclusive job opportunities through our corporate network",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    cta: "Get Started",
    stats: [
      { icon: Users, value: "5K+", label: "Career Transitions" },
      { icon: Award, value: "4.9/5", label: "Student Satisfaction" },
      { icon: Briefcase, value: "$85K", label: "Average Starting Salary" }
    ]
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isHovered) return; // Pause when hovered
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isHovered]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  // Calculate positions for 3D effect
  const calculateSlidePosition = (index: number) => {
    const totalSlides = heroSlides.length;
    const relativeIndex = (index - currentSlide + totalSlides) % totalSlides;
    
    if (relativeIndex === 0) {
      return 'translate-x-0 scale-100 opacity-100 z-10'; // Center slide
    } else if (relativeIndex === 1) {
      return 'translate-x-1/4 scale-90 opacity-70 z-0'; // Right slide
    } else {
      return '-translate-x-1/4 scale-90 opacity-70 z-0'; // Left slide
    }
  };

  return (
    <section 
      className="relative h-screen overflow-hidden bg-gray-900"
      id="home"
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl opacity-15 animate-pulse-slow animation-delay-4000"></div>
      </div>

      {/* Slides container with perspective */}
      <div className="relative h-full perspective-1000">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${calculateSlidePosition(index)}`}
            style={{ 
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden'
            }}
          >
            {/* Background Image with parallax effect */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-out"
              style={{ 
                backgroundImage: `url(${slide.image})`,
                transform: index === currentSlide ? 'scale(1.1)' : 'scale(1)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-gray-900/60"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
            </div>

            {/* 3D Floating Content */}
            <div className="relative z-10 flex items-center justify-center h-full transform" style={{ transformStyle: 'preserve-3d' }}>
              <div className="text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 transform translate-z-20">
                <div className="mb-8 inline-block bg-gradient-to-r from-blue-500 to-cyan-400 p-1 rounded-lg transform transition-all duration-700 hover:scale-105">
                  <div className="bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <h2 className="text-xl sm:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                      {slide.subtitle}
                    </h2>
                  </div>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight transform transition-all duration-700">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100 drop-shadow-2xl">
                    {slide.title}
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl lg:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed transform transition-all duration-700 delay-100 translate-z-12">
                  {slide.description}
                </p>
                
                {/* Stats cards with 3D effect */}
                <div className="flex justify-center gap-6 mb-10 transform transition-all duration-700 delay-200 translate-z-16">
                  {slide.stats.map((stat, i) => (
                    <div key={i} className="bg-gray-900/60 backdrop-blur-md p-4 rounded-xl border border-white/10 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                      <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 bg-blue-600/20 rounded-lg">
                        <stat.icon className="h-6 w-6 text-blue-400" />
                      </div>
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-blue-200">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <button className="group relative bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/30 overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center">
                    {slide.cta}
                    <Play className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 rounded-xl border border-white/20 group-hover:border-white/40 transition-all duration-500"></div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows with 3D effect */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 bg-gray-900/60 backdrop-blur-md hover:bg-blue-600/80 text-white p-4 rounded-xl border border-white/10 transition-all duration-300 transform hover:-translate-x-1 shadow-2xl hover:shadow-blue-500/20"
        aria-label="Previous slide"
      >
        <div className="relative">
          <ChevronLeft className="h-7 w-7" />
          <div className="absolute inset-0 rounded-xl border border-white/20 opacity-0 transition-opacity duration-300"></div>
        </div>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 bg-gray-900/60 backdrop-blur-md hover:bg-blue-600/80 text-white p-4 rounded-xl border border-white/10 transition-all duration-300 transform hover:translate-x-1 shadow-2xl hover:shadow-blue-500/20"
        aria-label="Next slide"
      >
        <div className="relative">
          <ChevronRight className="h-7 w-7" />
          <div className="absolute inset-0 rounded-xl border border-white/20 opacity-0 transition-opacity duration-300"></div>
        </div>
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 w-64 h-2 bg-white/10 rounded-full backdrop-blur-md">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${((currentSlide + 1) / heroSlides.length) * 100}%` }}
        ></div>
      </div>

      {/* Slide Indicators with 3D effect */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-4">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-125 ${
              index === currentSlide 
                ? 'bg-gradient-to-r from-blue-400 to-cyan-300 shadow-lg shadow-blue-500/50' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentSlide && (
              <div className="absolute inset-0 rounded-full border border-white/50 animate-ping opacity-75"></div>
            )}
          </button>
        ))}
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-6 left-6 w-10 h-10 border-t-2 border-l-2 border-blue-400/50 opacity-80"></div>
      <div className="absolute top-6 right-6 w-10 h-10 border-t-2 border-r-2 border-cyan-400/50 opacity-80"></div>
      <div className="absolute bottom-6 left-6 w-10 h-10 border-b-2 border-l-2 border-blue-400/50 opacity-80"></div>
      <div className="absolute bottom-6 right-6 w-10 h-10 border-b-2 border-r-2 border-cyan-400/50 opacity-80"></div>
    </section>
  );
};

export default HeroSection;