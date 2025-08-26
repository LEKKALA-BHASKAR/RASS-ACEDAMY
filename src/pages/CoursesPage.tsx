import React, { useState } from "react";
import courses from "../data/courses";
import { Course } from "../type/types";
import { 
  Clock, 
  Users, 
  Star, 
  ArrowRight, 
  Filter, 
  Search,
  BookOpen,
  Award,
  Target,
  ChevronDown,
  X
} from "lucide-react";

const CoursesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("popularity");
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null);

  // Extract unique categories
  const categories = ["All", ...new Set(courses.map(course => course.category))];

  // Filter and sort courses
  const filteredCourses = courses
    .filter((course: Course) => {
      const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    course.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20 animate-pulse-slow animation-delay-2000"></div>
      </div>

      {/* Header Section */}
      <div className="text-center mb-12 transform transition-all duration-700">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
          Explore Our Courses
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover a wide range of courses designed to help you master new skills and advance your career.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-white/20">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">

            {/* Filter Toggle for Mobile */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-xl font-medium"
            >
              <Filter className="h-5 w-5" />
              Filters
              <ChevronDown className={`h-5 w-5 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Filter Options */}
          <div className={`mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 ${showFilters ? 'block' : 'hidden md:block'}`}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-white/80 text-gray-700 hover:bg-white border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto mb-6 flex justify-between items-center">
        <p className="text-gray-600">
          Showing <span className="font-semibold">{filteredCourses.length}</span> of <span className="font-semibold">{courses.length}</span> courses
        </p>
        
        {selectedCategory !== "All" && (
          <button 
            onClick={() => setSelectedCategory("All")}
            className="flex items-center text-sm text-blue-600 hover:text-blue-800"
          >
            <X className="h-4 w-4 mr-1" />
            Clear filter
          </button>
        )}
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto">
        {filteredCourses.length === 0 ? (
          <div className="text-center py-16 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Search className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course: Course) => (
              <div
                key={course.id}
                onMouseEnter={() => setHoveredCourse(course.id)}
                onMouseLeave={() => setHoveredCourse(null)}
                className="group bg-white/90 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20"
                style={{
                  transform: hoveredCourse === course.id ? 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(10px)' : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)',
                  transition: 'transform 0.5s ease, box-shadow 0.5s ease'
                }}
              >
                {/* Course Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                      {course.category}
                    </span>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <button className="flex items-center px-4 py-2 bg-white text-blue-600 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  {/* Stats */}
                  <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(course.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      {course.rating.toFixed(1)}
                    </span>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="font-bold text-2xl text-blue-600">{course.price}</span>
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-blue-500/30">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto mt-16">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Choose Our Courses?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
                <p className="text-blue-100">Learn from industry professionals with real-world experience</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Certification</h3>
                <p className="text-blue-100">Earn recognized certificates to boost your career</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Practical Skills</h3>
                <p className="text-blue-100">Gain hands-on experience with real projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="max-w-3xl mx-auto mt-16 p-8 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated with New Courses</h2>
        <p className="text-gray-600 mb-6">Subscribe to our newsletter to get notified about new courses and updates</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-blue-500/30">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;