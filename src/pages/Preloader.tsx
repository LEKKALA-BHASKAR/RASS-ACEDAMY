import { useEffect, useState } from "react";

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    // Hide preloader after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900 z-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-500/10 animate-float"
            style={{
              width: `${50 + i * 30}px`,
              height: `${50 + i * 30}px`,
              top: `${20 + i * 15}%`,
              left: `${i * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 2}s`
            }}
          />
        ))}
        {[...Array(5)].map((_, i) => (
          <div
            key={i + 5}
            className="absolute rounded-full bg-cyan-500/10 animate-float-reverse"
            style={{
              width: `${40 + i * 25}px`,
              height: `${40 + i * 25}px`,
              top: `${10 + i * 10}%`,
              right: `${i * 15}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${4 + i * 1.5}s`
            }}
          />
        ))}
      </div>

      {/* 3D Animated Logo */}
      <div className="relative mb-8 transform perspective-1000">
        <div className="relative w-40 h-40 transform-style-3d animate-rotate-3d">
          {/* Front face */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl shadow-2xl shadow-blue-500/30 backface-hidden border-2 border-white/20 transform translate-z-20">
            <span className="text-white text-2xl font-bold">RAAS</span>
          </div>
          
          {/* Back face */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-2xl shadow-cyan-500/30 backface-hidden border-2 border-white/20 transform rotate-y-180 translate-z-20">
            <span className="text-white text-2xl font-bold">ACADEMY</span>
          </div>
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl -z-10 animate-pulse-slow"></div>
      </div>

      {/* Loading text with animation */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-white mb-2 animate-pulse">
          RAAS ACADEMY
        </h2>
        <p className="text-blue-200 animate-fade-in">
          Preparing your learning experience
        </p>
      </div>

      {/* Progress bar */}
      <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden mb-4">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        >
          <div className="h-full w-8 bg-white/30 animate-shimmer"></div>
        </div>
      </div>

      {/* Progress percentage */}
      <div className="text-blue-200 text-sm font-medium">
        {Math.min(100, Math.round(progress))}%
      </div>

      {/* Loading dots animation */}
      <div className="flex space-x-2 mt-6">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>

      {/* Custom styles for animations */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        @keyframes floatReverse {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(15px) rotate(-10deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        @keyframes rotate3d {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .animate-float { animation: float 8s infinite ease-in-out; }
        .animate-float-reverse { animation: floatReverse 10s infinite ease-in-out; }
        .animate-rotate-3d { animation: rotate3d 8s infinite linear; }
        .animate-shimmer { animation: shimmer 1.5s infinite linear; }
        .animate-pulse-slow { animation: pulse-slow 3s infinite; }
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .translate-z-20 { transform: translateZ(20px); }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </div>
  );
};

export default Preloader;