import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Users, 
  Globe, 
  Award, 
  Target,
  BarChart3,
  HeartHandshake,
  Shield,
  Quote,
  ArrowRight,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Corporate: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [animatedStats, setAnimatedStats] = useState({
    employees: 0,
    countries: 0,
    projects: 0,
    clients: 0
  });

  useEffect(() => {
    // Animate statistics
    const interval = setInterval(() => {
      setAnimatedStats(prev => ({
        employees: prev.employees < 500 ? prev.employees + 10 : 500,
        countries: prev.countries < 25 ? prev.countries + 1 : 25,
        projects: prev.projects < 1000 ? prev.projects + 20 : 1000,
        clients: prev.clients < 250 ? prev.clients + 5 : 250
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To democratize tech education and create a diverse talent pool that can contribute to India's growing digital economy.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: BarChart3,
      title: "Our Vision",
      description: "To become India's most outcome-driven tech education platform, transforming lives through accessible, industry-relevant education.",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      icon: HeartHandshake,
      title: "Our Values",
      description: "Student-first approach, innovation, integrity, and impact drive everything we do at RAAS Academy.",
      color: "bg-rose-100 text-rose-600"
    }
  ];

  const milestones = [
    { year: "2019", event: "Founded with a vision to transform tech education" },
    { year: "2020", event: "Launched first cohort with 30 students" },
    { year: "2021", event: "Crossed 1000+ placements milestone" },
    { year: "2022", event: "Expanded to 5 new tech stacks" },
    { year: "2023", event: "Reached 10,000+ students transformed" },
    { year: "2024", event: "Launched AI-powered learning platform" }
  ];

  const leadership = [
    {
      name: "Prateek Shukla",
      role: "CEO & Co-Founder",
      bio: "IIT Bombay alumnus with a vision to democratize quality education. Formerly led tech teams at Fortune 500 companies.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80"
    },
    {
      name: "Nrupul Dev",
      role: "CTO & Co-Founder",
      bio: "Former tech lead at top companies, passionate about teaching and building scalable educational platforms.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80"
    },
    {
      name: "Yogesh Bhat",
      role: "VP of Engineering",
      bio: "Expert in building scalable systems to transform education delivery with over 15 years of experience.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80"
    }
  ];

  const testimonials = [
    {
      quote: "RAAS Academy transformed our hiring process. We now get industry-ready candidates who can contribute from day one.",
      author: "Rajesh Kumar",
      company: "CTO, TechMahindra",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
      quote: "The quality of talent from RAAS Academy is exceptional. Their graduates have both technical skills and practical experience.",
      author: "Priya Singh",
      company: "HR Director, Infosys",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
      quote: "Our partnership with RAAS Academy has helped us build a diverse and talented engineering team quickly and efficiently.",
      author: "Amit Patel",
      company: "Engineering Manager, Flipkart",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
    }
  ];

  const faqs = [
    {
      question: "What industries do you primarily serve?",
      answer: "We serve a wide range of industries including IT services, e-commerce, fintech, healthcare technology, and enterprise software. Our graduates are equipped with skills relevant to today's digital economy."
    },
    {
      question: "How do you ensure curriculum relevance?",
      answer: "Our curriculum is designed in collaboration with industry experts and updated quarterly based on market trends. We maintain an industry advisory board that includes leaders from top tech companies."
    },
    {
      question: "What is your placement process?",
      answer: "We have a dedicated placement cell that works closely with hiring partners. Our process includes profile preparation, interview training, company-specific preparation, and continuous support until placement."
    },
    {
      question: "Do you offer corporate training programs?",
      answer: "Yes, we offer customized corporate training programs designed to upskill existing employees in specific technologies and methodologies. These can be delivered onsite or through our online platform."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <Header />
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Building2 className="h-4 w-4 mr-2" />
            Corporate Overview
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Building India's Digital <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Future</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
            RAAS Academy is transforming tech education through outcome-based learning and industry partnerships, creating the next generation of technology leaders.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center">
              Partner With Us <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold border border-blue-200 hover:bg-blue-50 transition-colors duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{animatedStats.employees}+</div>
              <div className="text-gray-600">Employees</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-indigo-600" />
              </div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">{animatedStats.countries}+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-rose-600" />
              </div>
              <div className="text-3xl font-bold text-rose-600 mb-2">{animatedStats.projects}+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-amber-600" />
              </div>
              <div className="text-3xl font-bold text-amber-600 mb-2">{animatedStats.clients}+</div>
              <div className="text-gray-600">Corporate Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Corporate Philosophy</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Guiding principles that shape our approach to education and business</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full transform hover:-translate-y-1">
                  <div className={`w-14 h-14 ${value.color} rounded-xl flex items-center justify-center mb-6`}>
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Experienced professionals driving our mission forward</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-6">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="relative w-40 h-40 rounded-full object-cover mx-auto shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{leader.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{leader.role}</p>
                <p className="text-gray-600">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Key milestones in our growth story</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-indigo-400 transform -translate-x-1/2"></div>
            
            <div className="space-y-12 relative">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  <div className="hidden md:block md:w-1/2"></div>
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center z-10">
                    <Calendar className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ml-6 md:mx-6 transform hover:-translate-y-1">
                    <div className="text-lg font-semibold text-blue-600 mb-2">{milestone.year}</div>
                    <p className="text-gray-700">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Partners Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Hear from companies that have hired our graduates</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full transform hover:-translate-y-1">
                  <Quote className="h-8 w-8 text-blue-200 mb-4" />
                  <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-800">{testimonial.author}</div>
                      <div className="text-sm text-gray-600">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Common questions about our corporate programs and partnerships</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  className="flex justify-between items-center w-full p-6 text-left font-semibold text-gray-800"
                  onClick={() => toggleAccordion(index)}
                >
                  {faq.question}
                  {activeAccordion === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-blue-600" />
                  )}
                </button>
                {activeAccordion === index && (
                  <div className="px-6 pb-6 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Partner With Us?</h2>
          <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
            Join hundreds of companies that have transformed their hiring process with RAAS Academy graduates.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center">
              Contact Our Team <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-transparent text-white px-8 py-4 rounded-xl font-semibold border border-white hover:bg-white/10 transition-colors duration-300">
              Schedule a Meeting
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Corporate;