import React from 'react';
import { Clock, Users, Star, ArrowRight, IndianRupee } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    price: "₹15,999",
    originalPrice: "₹19,999",
    discount: "20% off",
    duration: "12 weeks",
    students: "12,500+",
    rating: 4.8,
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description: "Master modern web development with React, Node.js, and MongoDB",
    features: ["React & Redux", "Node.js & Express", "MongoDB", "Deployment"]
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    price: "₹21,999",
    originalPrice: "₹26,999",
    discount: "18% off",
    duration: "16 weeks",
    students: "8,500+",
    rating: 4.9,
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description: "Learn Python, ML algorithms, and data visualization techniques",
    features: ["Python & Pandas", "Machine Learning", "Data Visualization", "Real Projects"]
  },
  {
    id: 3,
    title: "Digital Marketing Mastery",
    price: "₹9,999",
    originalPrice: "₹12,499",
    discount: "20% off",
    duration: "8 weeks",
    students: "18,200+",
    rating: 4.7,
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description: "Complete digital marketing from SEO to social media advertising",
    features: ["SEO & SEM", "Social Media", "Analytics", "Campaign Management"]
  },
  {
    id: 4,
    title: "Cloud Computing (AWS)",
    price: "₹18,499",
    originalPrice: "₹22,999",
    discount: "19% off",
    duration: "10 weeks",
    students: "7,200+",
    rating: 4.8,
    image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description: "Master AWS cloud services and become a certified cloud architect",
    features: ["AWS Services", "Cloud Architecture", "Security", "Certification Prep"]
  },
  {
    id: 5,
    title: "UI/UX Design Fundamentals",
    price: "₹12,999",
    originalPrice: "₹15,999",
    discount: "18% off",
    duration: "6 weeks",
    students: "10,500+",
    rating: 4.6,
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description: "Design beautiful and user-friendly interfaces with Figma and principles",
    features: ["Design Principles", "Figma Mastery", "Prototyping", "User Research"]
  },
  {
    id: 6,
    title: "Cybersecurity Essentials",
    price: "₹14,999",
    originalPrice: "₹18,499",
    discount: "19% off",
    duration: "8 weeks",
    students: "6,800+",
    rating: 4.9,
    image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description: "Protect organizations from cyber threats with hands-on security training",
    features: ["Network Security", "Ethical Hacking", "Risk Assessment", "Compliance"]
  }
];

const CoursesSection = () => {
  return (
    <section className="py-20 bg-white" id="courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Popular Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our wide range of industry-relevant courses designed to help you 
            master in-demand skills and advance your career at affordable Indian pricing
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group border border-gray-100"
            >
              {/* Course Image */}
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                  <IndianRupee className="h-3 w-3 mr-1" />
                  <span>{course.price.split('₹')[1]}</span>
                </div>
                <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  {course.discount}
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {course.description}
                </p>

                {/* Original Price */}
                <div className="flex items-center mb-3">
                  <span className="text-gray-400 line-through text-sm flex items-center">
                    <IndianRupee className="h-3 w-3 mr-1" />
                    {course.originalPrice.split('₹')[1]}
                  </span>
                  <span className="ml-2 text-green-600 text-sm font-medium">
                    You save {course.discount}
                  </span>
                </div>

                {/* Course Stats */}
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                {/* Course Features */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {course.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold text-center flex items-center justify-center">
                    <IndianRupee className="h-4 w-4 mr-1" />
                    <span>Enroll Now</span>
                  </button>
                  <button className="flex items-center justify-center space-x-1 text-blue-600 hover:text-blue-700 px-4 py-3 border border-blue-600 hover:border-blue-700 rounded-lg transition-all duration-200 font-semibold">
                    <span>Know More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Courses Button */}
        <div className="text-center mt-12">
          <button className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-semibold text-lg">
            View All 24+ Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;