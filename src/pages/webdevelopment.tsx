import React, { useState } from 'react';
import { Clock, Users, Star, ArrowRight, IndianRupee, CheckCircle, Play, Download, Award, BookOpen, Code, Briefcase } from 'lucide-react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const WebDevelopmentPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedModule, setSelectedModule] = useState(0);

  const course = {
    title: "Full Stack Web Development",
    price: "₹15,999",
    originalPrice: "₹19,999",
    discount: "20% off",
    duration: "12 weeks",
    students: "12,500+",
    rating: 4.8,
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description: "Master modern web development with React, Node.js, and MongoDB. Build real-world projects and get job-ready in just 12 weeks.",
    features: ["React & Redux", "Node.js & Express", "MongoDB", "Deployment", "6 Real Projects", "Job Assistance"],
    instructors: [
      {
        name: "Rajesh Kumar",
        role: "Senior Full Stack Developer",
        experience: "8+ years",
        company: "Ex-Microsoft, Ex-Amazon",
        image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
        bio: "Specialized in MERN stack with experience in building scalable applications for Fortune 500 companies."
      },
      {
        name: "Priya Sharma",
        role: "Frontend Architect",
        experience: "6+ years",
        company: "Ex-Flipkart, Ex-Paytm",
        image: "https://images.pexels.com/photos/3756678/pexels-photo-3756678.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
        bio: "React expert with extensive experience in building performant user interfaces for high-traffic applications."
      }
    ],
    curriculum: [
      {
        title: "HTML5 & CSS3 Fundamentals",
        duration: "2 weeks",
        topics: [
          "Semantic HTML5",
          "CSS Flexbox & Grid",
          "Responsive Design",
          "CSS Animations",
          "Project: Portfolio Website"
        ]
      },
      {
        title: "JavaScript & Modern ES6+",
        duration: "3 weeks",
        topics: [
          "JavaScript Fundamentals",
          "DOM Manipulation",
          "Async JavaScript",
          "ES6+ Features",
          "Project: Weather App"
        ]
      },
      {
        title: "React & Redux",
        duration: "4 weeks",
        topics: [
          "React Components & Hooks",
          "State Management",
          "React Router",
          "Redux Toolkit",
          "Project: E-commerce App"
        ]
      },
      {
        title: "Node.js & Express",
        duration: "2 weeks",
        topics: [
          "Node.js Fundamentals",
          "RESTful APIs",
          "Middleware & Authentication",
          "Error Handling",
          "Project: Blog API"
        ]
      },
      {
        title: "MongoDB & Databases",
        duration: "2 weeks",
        topics: [
          "MongoDB Basics",
          "Mongoose ODM",
          "Data Modeling",
          "Aggregation Pipeline",
          "Project: User Management System"
        ]
      },
      {
        title: "Deployment & DevOps",
        duration: "1 week",
        topics: [
          "Git & GitHub",
          "CI/CD Pipelines",
          "Docker Basics",
          "Deployment to Cloud",
          "Project: Full Stack Deployment"
        ]
      }
    ],
    projects: [
      {
        title: "E-commerce Platform",
        description: "Build a complete e-commerce site with product catalog, cart, and payment integration",
        technologies: ["React", "Node.js", "MongoDB", "Stripe API"]
      },
      {
        title: "Social Media Dashboard",
        description: "Create a responsive dashboard with real-time updates and user interactions",
        technologies: ["React", "Socket.io", "Express", "MongoDB"]
      },
      {
        title: "Task Management App",
        description: "Develop a productivity app with drag-and-drop functionality and team collaboration",
        technologies: ["React", "Redux", "Node.js", "MongoDB"]
      },
      {
        title: "Food Delivery Service",
        description: "Build a food ordering platform with real-time tracking and reviews",
        technologies: ["React Native", "Node.js", "MongoDB", "Google Maps API"]
      },
      {
        title: "Blogging Platform",
        description: "Create a full-featured blog with user authentication and content management",
        technologies: ["React", "Express", "MongoDB", "JWT Authentication"]
      },
      {
        title: "Job Portal",
        description: "Develop a job search platform with filters, applications, and employer dashboard",
        technologies: ["React", "Node.js", "Elasticsearch", "MongoDB"]
      }
    ],
    outcomes: [
      "Build complete full-stack applications",
      "Deploy applications to production",
      "Master industry best practices",
      "Prepare for technical interviews",
      "Build a professional portfolio",
      "Get job placement assistance"
    ],
    placementStats: {
      averagePackage: "₹12 LPA",
      highestPackage: "₹32 LPA",
      placementRate: "92%",
      hiringPartners: 250
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
        <Header/>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">{course.title}</h1>
              <p className="text-xl mb-8 leading-relaxed">{course.description}</p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-lg">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-lg">
                  <Users className="h-5 w-5 mr-2" />
                  <span>{course.students} Enrolled</span>
                </div>
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-lg">
                  <Star className="h-5 w-5 mr-2 fill-yellow-400 text-yellow-400" />
                  <span>{course.rating}/5 Rating</span>
                </div>
              </div>

              <div className="flex items-center mb-8">
                <span className="text-3xl font-bold mr-4">{course.price}</span>
                <span className="text-lg line-through text-gray-300 mr-4">{course.originalPrice}</span>
                <span className="bg-green-500 px-3 py-1 rounded-full text-sm font-semibold">{course.discount}</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center">
                  <IndianRupee className="h-5 w-5 mr-2" />
                  Enroll Now
                </button>
                <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 hover:bg-white/10">
                  Download Syllabus
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-4 -left-4 bg-white text-gray-900 p-4 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <Play className="h-5 w-5 mr-2 text-blue-600" />
                  <span className="font-semibold">Watch Course Introduction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto space-x-8">
            {['overview', 'curriculum', 'projects', 'instructors', 'outcomes'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 font-medium text-sm border-b-2 transition-colors duration-200 whitespace-nowrap ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">Course Overview</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our Full Stack Web Development course is designed to take you from beginner to job-ready in just 12 weeks. 
                  You'll learn the most in-demand technologies used by top Indian companies like Infosys, TCS, and Wipro.
                </p>
                
                <div className="bg-blue-50 p-6 rounded-xl mb-8">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Award className="h-5 w-5 mr-2 text-blue-600" />
                    What You'll Learn
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-blue-600" />
                    Placement Statistics
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{course.placementStats.averagePackage}</div>
                      <div className="text-sm text-gray-600">Average Package</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{course.placementStats.highestPackage}</div>
                      <div className="text-sm text-gray-600">Highest Package</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{course.placementStats.placementRate}</div>
                      <div className="text-sm text-gray-600">Placement Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{course.placementStats.hiringPartners}+</div>
                      <div className="text-sm text-gray-600">Hiring Partners</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 sticky top-24">
                  <h3 className="text-xl font-semibold mb-4">Course Features</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center">
                      <BookOpen className="h-5 w-5 text-blue-600 mr-3" />
                      <div>
                        <div className="font-medium">120+ Hours of Learning</div>
                        <div className="text-sm text-gray-600">Comprehensive curriculum</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Code className="h-5 w-5 text-blue-600 mr-3" />
                      <div>
                        <div className="font-medium">6 Real Projects</div>
                        <div className="text-sm text-gray-600">Build your portfolio</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-blue-600 mr-3" />
                      <div>
                        <div className="font-medium">1:1 Mentorship</div>
                        <div className="text-sm text-gray-600">Get personalized guidance</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Briefcase className="h-5 w-5 text-blue-600 mr-3" />
                      <div>
                        <div className="font-medium">Job Assistance</div>
                        <div className="text-sm text-gray-600">Resume prep & interviews</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg mb-6">
                    <div className="font-semibold text-blue-800 mb-2">Next Batch Starts</div>
                    <div className="text-lg font-bold">15th October 2023</div>
                    <div className="text-sm text-gray-600">Only 20 seats available</div>
                  </div>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200 mb-4 flex items-center justify-center">
                    <IndianRupee className="h-5 w-5 mr-2" />
                    Enroll Now
                  </button>
                  
                  <button className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                    <Download className="h-5 w-5 mr-2" />
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Curriculum Tab */}
          {activeTab === 'curriculum' && (
            <div>
              <h2 className="text-3xl font-bold mb-8">Course Curriculum</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-1">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 sticky top-24">
                    <h3 className="text-lg font-semibold mb-4">Modules</h3>
                    <div className="space-y-2">
                      {course.curriculum.map((module, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedModule(index)}
                          className={`w-full text-left p-3 rounded-lg transition-colors duration-200 ${
                            selectedModule === index
                              ? 'bg-blue-100 text-blue-700 font-semibold'
                              : 'hover:bg-gray-100'
                          }`}
                        >
                          <div className="font-medium">{module.title}</div>
                          <div className="text-sm text-gray-600">{module.duration}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-3">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h3 className="text-2xl font-semibold mb-4">
                      {course.curriculum[selectedModule].title}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-6">
                      <Clock className="h-5 w-5 mr-2" />
                      <span>{course.curriculum[selectedModule].duration}</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-4">Topics Covered</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {course.curriculum[selectedModule].topics.map((topic, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Learning Resources</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Play className="h-4 w-4 text-blue-600 mr-2" />
                          <span>12 Video Lectures</span>
                        </li>
                        <li className="flex items-center">
                          <BookOpen className="h-4 w-4 text-blue-600 mr-2" />
                          <span>5 Reading Materials</span>
                        </li>
                        <li className="flex items-center">
                          <Code className="h-4 w-4 text-blue-600 mr-2" />
                          <span>3 Coding Exercises</span>
                        </li>
                        <li className="flex items-center">
                          <Award className="h-4 w-4 text-blue-600 mr-2" />
                          <span>1 Quiz</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div>
              <h2 className="text-3xl font-bold mb-8">Real-World Projects</h2>
              <p className="text-gray-700 mb-8 max-w-3xl">
                Build these industry-relevant projects during the course to showcase in your portfolio and impress recruiters.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {course.projects.map((project, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
                    <div className="text-blue-600 font-semibold mb-2">Project {index + 1}</div>
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                      View Project Details
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Instructors Tab */}
          {activeTab === 'instructors' && (
            <div>
              <h2 className="text-3xl font-bold mb-8">Meet Your Instructors</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {course.instructors.map((instructor, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="flex items-start mb-4">
                      <img
                        src={instructor.image}
                        alt={instructor.name}
                        className="w-20 h-20 rounded-full object-cover mr-6"
                      />
                      <div>
                        <h3 className="text-xl font-semibold">{instructor.name}</h3>
                        <p className="text-blue-600 font-medium">{instructor.role}</p>
                        <p className="text-gray-600">{instructor.company}</p>
                        <div className="flex items-center mt-2">
                          <Briefcase className="h-4 w-4 text-gray-500 mr-1" />
                          <span className="text-sm text-gray-600">{instructor.experience} experience</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{instructor.bio}</p>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Areas of Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {index === 0 ? (
                          <>
                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">MERN Stack</span>
                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">AWS</span>
                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">System Design</span>
                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">API Development</span>
                          </>
                        ) : (
                          <>
                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">React</span>
                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">UI/UX</span>
                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Performance</span>
                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Accessibility</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Outcomes Tab */}
          {activeTab === 'outcomes' && (
            <div>
              <h2 className="text-3xl font-bold mb-8">Career Outcomes</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold mb-6">What You'll Achieve</h3>
                  <div className="space-y-4">
                    {course.outcomes.map((outcome, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-lg">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-6">Job Roles You Can Apply For</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Frontend Developer",
                      "Backend Developer",
                      "Full Stack Developer",
                      "React Developer",
                      "Node.js Developer",
                      "Web Developer"
                    ].map((role, index) => (
                      <div key={index} className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                        <Briefcase className="h-5 w-5 text-blue-600 mr-3" />
                        <span className="font-medium">{role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-6">Our Placement Support</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-4">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="h-8 w-8 text-blue-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Resume Building</h4>
                    <p className="text-gray-600">Get help creating an ATS-friendly resume that stands out</p>
                  </div>
                  
                  <div className="text-center p-4">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Code className="h-8 w-8 text-blue-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Mock Interviews</h4>
                    <p className="text-gray-600">Practice with technical interviews and get detailed feedback</p>
                  </div>
                  
                  <div className="text-center p-4">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Briefcase className="h-8 w-8 text-blue-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Job Referrals</h4>
                    <p className="text-gray-600">Get referred to top companies through our hiring partners</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                    View Success Stories
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Launch Your Tech Career?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of students who transformed their careers with our Full Stack Web Development program
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-gray-100 hover:scale-105">
              Enroll Now - {course.price}
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-white/10">
              Book a Free Counseling Session
            </button>
          </div>
          
          <p className="mt-6 text-blue-200">Next batch starting October 15th - Limited seats available</p>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default WebDevelopmentPage;