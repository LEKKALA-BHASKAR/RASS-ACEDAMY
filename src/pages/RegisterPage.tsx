import React, { useState, useEffect } from 'react';
import { 
  Eye, 
  EyeOff, 
  Phone,
  Lock,
  User,
  Mail,
  ArrowRight,
  Smartphone,
  Shield,
  Zap,
  BookOpen,
  GraduationCap,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [animated, setAnimated] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [errors, setErrors] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    // Trigger animations on component mount
    setAnimated(true);
  }, []);

  useEffect(() => {
    // Calculate password strength
    if (formData.password.length === 0) {
      setPasswordStrength(0);
      return;
    }

    let strength = 0;
    
    // Length check
    if (formData.password.length >= 8) strength += 1;
    
    // Contains number
    if (/\d/.test(formData.password)) strength += 1;
    
    // Contains special character
    if (/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) strength += 1;
    
    // Contains uppercase and lowercase
    if (/(?=.*[a-z])(?=.*[A-Z])/.test(formData.password)) strength += 1;
    
    setPasswordStrength(strength);
  }, [formData.password]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = {
      fullName: formData.fullName.trim() === '' ? 'Full name is required' : '',
      mobileNumber: formData.mobileNumber.length !== 10 ? 'Valid 10-digit mobile number is required' : '',
      email: !/^\S+@\S+\.\S+$/.test(formData.email) ? 'Valid email is required' : '',
      password: formData.password.length < 8 ? 'Password must be at least 8 characters' : ''
    };
    
    setErrors(newErrors);
    
    // Check if there are any errors
    if (Object.values(newErrors).some(error => error !== '')) {
      return;
    }
    
    if (!agreedToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData({ ...formData, mobileNumber: value });
    setErrors({ ...errors, mobileNumber: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const getPasswordStrengthColor = () => {
    switch (passwordStrength) {
      case 0: return 'bg-gray-200';
      case 1: return 'bg-red-500';
      case 2: return 'bg-yellow-500';
      case 3: return 'bg-blue-500';
      case 4: return 'bg-green-500';
      default: return 'bg-gray-200';
    }
  };

  const getPasswordStrengthText = () => {
    switch (passwordStrength) {
      case 0: return 'No password';
      case 1: return 'Weak';
      case 2: return 'Fair';
      case 3: return 'Good';
      case 4: return 'Strong';
      default: return '';
    }
  };

  return (
    <div>
        <Header/>
    <div className="min-h-screen flex">
      {/* Left side - Form Section */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-y-auto">
        <div className="mx-auto w-full max-w-md">
          {/* Logo and Header */}
          <div className="text-center mb-10 transform transition-all duration-700">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg mb-6">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Join <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">RAAS Academy</span>
            </h2>
            <p className="text-gray-600">Create your account to start your learning journey</p>
          </div>

          {/* Registration Form */}
          <div className={`bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 transform transition-all duration-700 ${animated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name Field */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`block w-full pl-10 pr-3 py-3 border ${errors.fullName ? 'border-red-300' : 'border-gray-300'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/80 backdrop-blur-sm transition-all duration-300`}
                    placeholder="Enter your full name"
                  />
                </div>
                {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
              </div>

              {/* Mobile Number Field */}
              <div>
                <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700 mb-2">
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
                    id="mobileNumber"
                    name="mobileNumber"
                    type="tel"
                    required
                    value={formData.mobileNumber}
                    onChange={handleMobileChange}
                    className={`block w-full pl-16 pr-3 py-3 border ${errors.mobileNumber ? 'border-red-300' : 'border-gray-300'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/80 backdrop-blur-sm transition-all duration-300`}
                    placeholder="Enter your mobile number"
                  />
                </div>
                {errors.mobileNumber && <p className="mt-1 text-sm text-red-600">{errors.mobileNumber}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`block w-full pl-10 pr-3 py-3 border ${errors.email ? 'border-red-300' : 'border-gray-300'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/80 backdrop-blur-sm transition-all duration-300`}
                    placeholder="Enter your email address"
                  />
                </div>
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className={`block w-full pl-10 pr-10 py-3 border ${errors.password ? 'border-red-300' : 'border-gray-300'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/80 backdrop-blur-sm transition-all duration-300`}
                    placeholder="Create a strong password"
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
                
                {/* Password Strength Meter */}
                {formData.password && (
                  <div className="mt-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-500">Password strength: {getPasswordStrengthText()}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                        style={{ width: `${(passwordStrength / 4) * 100}%` }}
                      ></div>
                    </div>
                    
                    {/* Password Requirements */}
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-xs">
                        {formData.password.length >= 8 ? (
                          <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                        ) : (
                          <XCircle className="h-3 w-3 text-red-500 mr-1" />
                        )}
                        <span className={formData.password.length >= 8 ? 'text-green-600' : 'text-gray-500'}>
                          At least 8 characters
                        </span>
                      </div>
                      <div className="flex items-center text-xs">
                        {/(?=.*[a-z])(?=.*[A-Z])/.test(formData.password) ? (
                          <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                        ) : (
                          <XCircle className="h-3 w-3 text-red-500 mr-1" />
                        )}
                        <span className={/(?=.*[a-z])(?=.*[A-Z])/.test(formData.password) ? 'text-green-600' : 'text-gray-500'}>
                          Upper and lowercase letters
                        </span>
                      </div>
                      <div className="flex items-center text-xs">
                        {/\d/.test(formData.password) ? (
                          <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                        ) : (
                          <XCircle className="h-3 w-3 text-red-500 mr-1" />
                        )}
                        <span className={/\d/.test(formData.password) ? 'text-green-600' : 'text-gray-500'}>
                          At least one number
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                
                {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={() => setAgreedToTerms(!agreedToTerms)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                  I agree to the{' '}
                  <button type="button" className="text-blue-600 hover:text-blue-500">
                    Terms and Conditions
                  </button>{' '}
                  and{' '}
                  <button type="button" className="text-blue-600 hover:text-blue-500">
                    Privacy Policy
                  </button>
                </label>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`group w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ${
                    isLoading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transform hover:-translate-y-0.5'
                  }`}
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      Create Account
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Divider */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Already have an account?</span>
                </div>
              </div>

              {/* Login Option */}
              <div className="mt-6">
                <button
                  type="button"
                  className="w-full inline-flex justify-center items-center px-4 py-3 border border-gray-300 rounded-xl shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-0.5"
                  onClick={() => navigate('/login')}
                >
                  <User className="h-5 w-5 text-blue-600 mr-2" />
                  Sign in to your account
                </button>
              </div>
            </div>
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
            <h3 className="text-3xl font-bold mb-6">Start Your Learning Journey</h3>
            <p className="text-lg text-blue-100 mb-8">
              Join thousands of students who have transformed their careers with our industry-relevant courses and expert mentorship.
            </p>
            
            {/* Features list */}
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-4">
                  <Zap className="h-5 w-5" />
                </div>
                <p className="text-blue-100">Access to 100+ courses</p>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-4">
                  <Shield className="h-5 w-5" />
                </div>
                <p className="text-blue-100">Career guidance and placement support</p>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-4">
                  <User className="h-5 w-5" />
                </div>
                <p className="text-blue-100">Personalized learning paths</p>
              </div>
            </div>
          </div>
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

export default RegisterPage;