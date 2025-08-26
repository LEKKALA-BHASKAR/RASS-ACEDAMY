import  { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, IndianRupee } from 'lucide-react';

import testimonials from '../data/testimonials';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Student Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from our graduates who transformed their careers and achieved their dreams 
            with RAAS ACADEMY
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-200 hover:scale-105"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-200 hover:scale-105"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 relative overflow-hidden ${
                  index === 1 ? 'lg:scale-105 lg:shadow-2xl' : ''
                }`}
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-blue-200">
                  <Quote className="h-8 w-8" />
                </div>

                {/* User Info */}
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-white shadow-md"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-blue-600 font-semibold">{testimonial.role}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Course and Salary Info */}
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Course:</span>
                    <span className="text-sm font-semibold text-blue-600">{testimonial.course}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Package:</span>
                    <span className="text-sm font-bold text-green-600 flex items-center">
                      <IndianRupee className="h-3 w-3 mr-1" />
                      {testimonial.salary}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Overall Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-gray-50 rounded-2xl px-8 py-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">25,000+</div>
              <div className="text-sm text-gray-600">Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">92%</div>
              <div className="text-sm text-gray-600">Job Placement Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;