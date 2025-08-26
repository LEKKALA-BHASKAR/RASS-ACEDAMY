import  { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

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
            <a href="/">
              <img
                src="/logo.webp"
                alt="RAAS ACADEMY Logo"
                className="h-14 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Home
            </a>
<a
              href="/Courses"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Courses
            </a>

            <a
              href="/corporate"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Corporate
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              About Us
            </a>
            <a
              href="/hire"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Hire from Us
            </a>
          </nav>

          {/* Login/Signup Buttons (Desktop) */}
          <div className="hidden md:flex space-x-4">
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              Login
            </button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium transition">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-50 rounded-lg mt-2 p-4 space-y-3">
            <a href="/" className="block text-gray-700 hover:text-blue-600">
              Home
            </a>

            {/* Expandable Courses on Mobile */}
            <div>
              <button
                onClick={toggleCourses}
                className="w-full flex justify-between items-center text-gray-700 hover:text-blue-600"
              >
                Courses <ChevronDown className="h-4 w-4" />
              </button>
              {isCoursesOpen && (
                <div className="mt-2 pl-3 space-y-2">
                  {[
                    "Web Development",
                    "Data Science",
                    "Digital Marketing",
                    "Cloud Computing",
                    "Cyber Security",
                    "AI & Machine Learning",
                    "Blockchain",
                    "DevOps",
                  ].map((course, i) => (
                    <a
                      key={i}
                      href={`/${course.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block text-sm text-gray-700 hover:text-blue-600"
                    >
                      {course}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="/corporate" className="block text-gray-700 hover:text-blue-600">
              Corporate
            </a>
            <a href="/hire" className="block text-gray-700 hover:text-blue-600">
              Hire from Us
            </a>

            {/* Buttons */}
            <div className="flex space-x-4 pt-3">
              <button className="text-blue-600 font-medium">Login</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
