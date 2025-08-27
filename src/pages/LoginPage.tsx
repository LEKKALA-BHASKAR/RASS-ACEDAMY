import React, { useState, useEffect } from 'react';
import { 
  Eye, 
  EyeOff, 
  Phone,
  Lock,
  User,
  ArrowRight,
  Smartphone,
  Shield,
  Zap,
  BookOpen,
  GraduationCap
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Trigger animations on component mount
    setAnimated(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setMobileNumber(value);
  };

  return (
    <div>
    <Header/>
    <div className="min-h-screen flex">
      {/* Left side - Form Section */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="mx-auto w-full max-w-md">
          {/* Logo and Header */}
          <div className="text-center mb-10 transform transition-all duration-700">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg mb-6">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">RAAS Academy</span>
            </h2>
            <p className="text-gray-600">Sign in to access your learning dashboard</p>
          </div>

          {/* Login Form */}
          <div className={`bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 transform transition-all duration-700 ${animated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Mobile Number Field */}
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="absolute inset-y-0 left-8 flex items-center pointer-events-none">
                    <span className="text-gray-500">+91</span>
                  </div>
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    required
                    value={mobileNumber}
                    onChange={handleMobileChange}
                    className="block w-full pl-16 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/80 backdrop-blur-sm transition-all duration-300"
                    placeholder="Enter your mobile number"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <button
                    type="button"
                    className="text-sm text-blue-600 hover:text-blue-500 font-medium"
                    onClick={() => {/* Add forgot password logic */}}
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/80 backdrop-blur-sm transition-all duration-300"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isLoading || mobileNumber.length !== 10 || password.length < 6}
                  className={`group w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ${
                    isLoading || mobileNumber.length !== 10 || password.length < 6
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transform hover:-translate-y-0.5'
                  }`}
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      Sign in
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Sign up link */}
          <div className={`mt-8 text-center transform transition-all duration-700 delay-100 ${animated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-gray-600">
              Don't have an account?{' '}
              <button
                className="font-medium text-blue-600 hover:text-blue-500"
                onClick={() => navigate('/register')}
              >
                Sign up now
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Decorative Section */}
      <div className="hidden lg:flex flex-1 relative bg-gradient-to-br from-blue-600 to-indigo-600">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/20 rounded-full filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center text-white px-16">
          <div className={`max-w-md transform transition-all duration-1000 ${animated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-center w-20 h-20 bg-white/10 rounded-2xl backdrop-blur-sm mb-8">
              <BookOpen className="h-10 w-10" />
            </div>
            <h3 className="text-3xl font-bold mb-6">Unlock Your Potential</h3>
            <p className="text-lg text-blue-100 mb-8">
              Access personalized learning paths, track your progress, and connect with expert instructors.
            </p>
            
            {/* Features list */}
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-4">
                  <Zap className="h-5 w-5" />
                </div>
                <p className="text-blue-100">Industry-relevant curriculum</p>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-4">
                  <Shield className="h-5 w-5" />
                </div>
                <p className="text-blue-100">Secure learning environment</p>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-4">
                  <User className="h-5 w-5" />
                </div>
                <p className="text-blue-100">Personalized mentorship</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile decorative elements */}
      <div className="lg:hidden absolute bottom-0 left-0 right-0 p-6">
        <div className="flex justify-center space-x-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-blue-300 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>

      {/* Custom styles for animations */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
    <Footer/>
    </div>
  );
};

export default LoginPage;