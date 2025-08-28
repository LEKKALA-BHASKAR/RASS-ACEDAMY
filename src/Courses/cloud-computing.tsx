import React, { useState, useEffect } from 'react';
import { 
  Cloud, 
  Server, 
  Database, 
  Shield, 
  Zap, 
  BarChart3, 
  Lock, 
  Globe, 
  Code, 
  ArrowRight,
  Play,
  CheckCircle,
  Users,
  Award,
  MessageCircle,
  Phone,
  Mail,
  ChevronRight,
  TrendingUp
} from 'lucide-react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const CloudComputingCourse = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 100) {
          el.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const modules = [
    {
      icon: <Server size={40} />,
      title: "Cloud Fundamentals",
      description: "Basics of Cloud Computing, Virtualization, and Service Models (IaaS, PaaS, SaaS).",
    },
    {
      icon: <Database size={40} />,
      title: "Cloud Storage & Databases",
      description: "Learn about cloud storage, distributed databases, and data migration techniques."
    },
    {
      icon: <Shield size={40} />,
      title: "Cloud Security & Compliance",
      description: "Understand Identity Management, Encryption, and Regulatory Compliance in the cloud."
    },
    {
      icon: <Zap size={40} />,
      title: "Serverless & DevOps on Cloud",
      description: "Hands-on with serverless architectures, CI/CD pipelines, and DevOps tools."
    },
    {
      icon: <BarChart3 size={40} />,
      title: "Big Data & Analytics in Cloud",
      description: "Use cloud platforms for data analysis, ML model deployment, and insights generation."
    },
    {
      icon: <Globe size={40} />,
      title: "Capstone Projects",
      description: "Work on real-world projects like deploying scalable web apps, AI models, or e-commerce platforms on the cloud."
    }
  ];

  const highlights = [
    {
      icon: <Award className="text-blue-500" size={24} />,
      title: "Industry Certification",
      description: "Preparation for AWS, Azure, and Google Cloud certifications."
    },
    {
      icon: <Users className="text-green-500" size={24} />,
      title: "Expert Mentors",
      description: "Learn from cloud architects and professionals with years of industry experience."
    },
    {
      icon: <TrendingUp className="text-purple-500" size={24} />,
      title: "High Career Demand",
      description: "Cloud engineers average $110,000+ salary globally."
    },
    {
      icon: <CheckCircle className="text-orange-500" size={24} />,
      title: "Hands-on Labs",
      description: "Practical labs and sandbox accounts for real-world practice."
    }
  ];

  const plans = [
    {
      name: "Self-Paced",
      price: "$299",
      period: "one-time",
      description: "Access recorded lectures and materials",
      features: ["120+ Video Lectures", "Downloadable Notes", "Lifetime Access", "Community Forum"],
      highlighted: false
    },
    {
      name: "Mentor-Led",
      price: "$799",
      period: "3 months",
      description: "Live classes with 1:1 mentor support",
      features: ["Live Sessions", "Doubt Clearing", "Hands-on Projects", "Certificate"],
      highlighted: true
    },
    {
      name: "Placement Track",
      price: "$1,499",
      period: "6 months",
      description: "Includes career services & job support",
      features: ["Live + Recorded", "Capstone Projects", "Resume Building", "Placement Assistance"],
      highlighted: false
    }
  ];

  const testimonials = [
    {
      name: "Ananya Sharma",
      role: "Cloud Engineer at Infosys",
      content: "The course gave me hands-on skills with AWS and Azure. I cleared my certification and landed a 9 LPA job!",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Ravi Kumar",
      role: "DevOps Engineer at TCS",
      content: "Loved the labs and projects! The placement team helped me crack 3 interviews.",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg"
    },
    {
      name: "Sophia Lee",
      role: "Cloud Architect at Amazon",
      content: "Perfect balance of theory and practicals. Highly recommend for aspiring cloud professionals.",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      <Header/>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`fade-in ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all`}>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Master <span className="text-blue-600">Cloud Computing</span> & Launch Your Career
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Learn AWS, Azure, Google Cloud, DevOps, and more with hands-on projects, labs, and mentorship.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center">
                Enroll Now <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center">
                <Play className="mr-2" size={20} /> Watch Demo
              </button>
            </div>
          </div>
          <div className={`fade-in delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all`}>
            <img src="../CC.jpg" alt="Cloud Computing" className="rounded-2xl shadow-xl"/>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose This Course?</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((h, i) => (
              <div key={i} className="bg-blue-50 rounded-2xl p-6 text-left fade-in">
                <div className="mb-4">{h.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{h.title}</h3>
                <p className="text-gray-600">{h.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">Curriculum Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((m, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-6 fade-in">
                <div className="text-blue-600 mb-4">{m.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{m.title}</h3>
                <p className="text-gray-600">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-6 fade-in">
                <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full mx-auto mb-4"/>
                <h3 className="font-bold text-lg text-gray-900">{t.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{t.role}</p>
                <p className="text-gray-600">“{t.content}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Cloud Journey Today</h2>
        <p className="text-blue-100 max-w-2xl mx-auto mb-8">Join thousands of learners and fast-track your cloud career with expert-led training and projects.</p>
        <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-blue-50 transition-colors">Apply Now</button>
      </section>

      <style>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      <Footer />
    </div>
  );
};

export default CloudComputingCourse;
