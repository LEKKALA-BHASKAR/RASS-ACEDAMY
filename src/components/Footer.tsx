import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube,
  ArrowRight,
  BookOpen
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <BookOpen className="h-8 w-8 text-blue-400" />
              <h3 className="text-2xl font-bold">RAAS ACADEMY</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering careers through industry-relevant education and guaranteed job opportunities. 
              Your success is our mission.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">info@raasacademy.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">123 Education St, Learning City, LC 12345</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-400">Quick Links</h4>
            <ul className="space-y-3">
              {[
                'About Us',
                'Our Story',
                'Careers',
                'Press',
                'Blog',
                'Help Center',
                'Contact Us'
              ].map((link) => (
                <li key={link}>
                  <a 
                    href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-400">Popular Courses</h4>
            <ul className="space-y-3">
              {[
                'Full Stack Development',
                'Data Science & ML',
                'Digital Marketing',
                'Cloud Computing',
                'UI/UX Design',
                'Cybersecurity',
                'Mobile Development'
              ].map((course) => (
                <li key={course}>
                  <a 
                    href={`/${course.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-400">Stay Updated</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest courses, career tips, and industry insights.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-colors duration-200 font-semibold"
              >
                Subscribe
              </button>
            </form>
            
            {/* Social Media Links */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold text-gray-400 mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: '#', label: 'Facebook' },
                  { icon: Twitter, href: '#', label: 'Twitter' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Instagram, href: '#', label: 'Instagram' },
                  { icon: Youtube, href: '#', label: 'YouTube' }
                ].map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="bg-gray-800 hover:bg-blue-600 text-gray-300 hover:text-white p-2 rounded-lg transition-all duration-200 transform hover:scale-110"
                      aria-label={social.label}
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} RAAS ACADEMY. All rights reserved.
            </div>
            
            {/* Footer Links */}
            <div className="flex flex-wrap justify-center lg:justify-end space-x-6 text-sm">
              {[
                'Privacy Policy',
                'Terms of Service',
                'Cookie Policy',
                'Accessibility',
                'Sitemap'
              ].map((link, index) => (
                <React.Fragment key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link}
                  </a>
                  {index < 4 && <span className="text-gray-600">|</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="text-gray-400 text-sm mb-4 sm:mb-0">
                🔒 Secure payments • 🎓 Accredited programs • ⭐ 4.9/5 student rating
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm">Trusted by</span>
                <span className="text-blue-400 font-semibold">10,000+ students</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;