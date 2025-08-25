import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCourses = () => setIsCoursesOpen(!isCoursesOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-600">
              RAAS ACADEMY
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              Home
            </a>
            
            {/* Courses Dropdown */}
            <div className="relative">
              <button 
                onClick={toggleCourses}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium flex items-center space-x-1"
              >
                <span>Courses</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {isCoursesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <a href="#web-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Web Development
                  </a>
                  <a href="#data-science" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Data Science
                  </a>
                  <a href="#digital-marketing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Digital Marketing
                  </a>
                  <a href="#cloud-computing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Cloud Computing
                  </a>
                </div>
              )}
            </div>

            <a href="#corporate" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              Corporate
            </a>
            <a href="#hire" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              Hire from Us
            </a>
          </nav>

          {/* Login/Signup Buttons - Desktop */}
          <div className="hidden md:flex space-x-4">
            <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
              Login
            </button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium">
              Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Home
              </a>
              <a href="#courses" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Courses
              </a>
              <a href="#corporate" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Corporate
              </a>
              <a href="#hire" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Hire from Us
              </a>
              <div className="flex space-x-4 px-3 py-2">
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Login
                </button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;