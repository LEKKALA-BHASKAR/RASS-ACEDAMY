import React, { useState, useEffect } from 'react';
import { 
  Home, 
  ArrowLeft, 
  Search, 
  BookOpen,
  HelpCircle,
  Mail,
  RotateCw,
  ChevronRight,
  Zap
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Trigger animation on component mount
    setAnimated(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 20;
    const y = ((e.clientY - top) / height - 0.5) * 20;
    setRotation({ x: -y, y: x });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-4xl w-full text-center">
        {/* 3D Animated 404 Number */}
        <div 
          className="relative mx-auto mb-8 w-64 h-64 perspective-1000"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
        >
          <div 
            className="relative w-full h-full transform-style-3d transition-transform duration-500 ease-out"
            style={{ 
              transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Front face */}
            <div className="absolute inset-0 flex items-center justify-center backface-hidden">
              <div className="text-[180px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 leading-none">
                404
              </div>
            </div>
            
            {/* Back face */}
            <div className="absolute inset-0 flex items-center justify-center backface-hidden transform rotate-y-180">
              <div className="text-[180px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 leading-none">
                404
              </div>
            </div>
          </div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl -z-10 animate-pulse-slow"></div>
          
          {/* Floating elements */}
          <div className={`absolute top-2 left-2 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center transition-all duration-1000 ${animated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Zap className="h-6 w-6 text-blue-600" />
          </div>
          <div className={`absolute bottom-4 right-4 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center transition-all duration-1000 delay-200 ${animated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <BookOpen className="h-5 w-5 text-indigo-600" />
          </div>
        </div>

        {/* Message */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Oops! Page Not Found
        </h1>
        <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
          The page you're looking for seems to have disappeared into the digital void. 
          Don't worry though - we can help you find your way back!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button
            onClick={() => navigate('/')}
            className="group bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center"
          >
            <Home className="h-5 w-5 mr-2" />
            Go Home
            <ChevronRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={() => navigate(-1)}
            className="group bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold border border-blue-200 hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Go Back
          </button>
          
          <button
            onClick={() => window.location.reload()}
            className="group bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center"
          >
            <RotateCw className="h-5 w-5 mr-2" />
            Reload Page
          </button>
        </div>

        {/* Help Section */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center justify-center">
            <HelpCircle className="h-6 w-6 mr-2 text-blue-600" />
            Need More Help?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                <Search className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Search Our Site</h3>
              <p className="text-gray-600 text-sm">Find what you're looking for with our search tool</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-200 transition-colors duration-300">
                <BookOpen className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Visit Learning Portal</h3>
              <p className="text-gray-600 text-sm">Access courses and learning materials</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-rose-200 transition-colors duration-300">
                <Mail className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Contact Support</h3>
              <p className="text-gray-600 text-sm">Get help from our support team</p>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="mt-12 flex justify-center space-x-3">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-blue-300 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>

      {/* Custom styles for animations */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
};

export default NotFoundPage;