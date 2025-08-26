import { Clock, Users, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import courses from "../data/courses"
// Example courses data (dynamic)


const CoursesSection = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract unique categories
  const categories = ["All", ...new Set(courses.map((c) => c.category))];

  // Filter courses
  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((c) => c.category === selectedCategory);

  return (
    <div>
         <Header />
    <section className="py-20 bg-white" id="courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            All Courses
          </h2>
          <p className="text-lg text-gray-600">
            Explore our wide range of industry-relevant courses
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Course Image */}
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />

              {/* Course Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">{course.description}</p>

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

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button
                    onClick={() => navigate(`/enroll/${course.id}`)}
                    className="flex-1 bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition font-semibold"
                  >
                    Enroll
                  </button>
                  <button
                    onClick={() => navigate(`/contact?course=${course.title}`)}
                    className="flex-1 border border-blue-600 text-blue-600 px-4 py-3 rounded-lg hover:bg-blue-50 transition font-semibold"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      <Footer />
    </div>
  );
};

export default CoursesSection;
