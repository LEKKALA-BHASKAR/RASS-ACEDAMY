import  { useState } from 'react';
import { Clock, Users, Star, ArrowRight, IndianRupee, CheckCircle, Play, Download, Award, BookOpen, BarChart3, Briefcase, Brain, Database, Cpu, LineChart } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DataSciencePage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedModule, setSelectedModule] = useState(0);

  const course = {
    title: "Data Science & Machine Learning",
    price: "₹21,999",
    originalPrice: "₹26,999",
    discount: "18% off",
    duration: "16 weeks",
    students: "8,500+",
    rating: 4.9,
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    description: "Master Python, ML algorithms, and data visualization techniques. Build real-world data science projects and become job-ready in 16 weeks.",
    features: ["Python & Pandas", "Machine Learning", "Data Visualization", "Real Projects", "Deep Learning", "Job Assistance"],
    instructors: [
      {
        name: "Dr. Ananya Patel",
        role: "Senior Data Scientist",
        experience: "10+ years",
        company: "Ex-Microsoft, Ex-Google",
        image: "https://images.pexels.com/photos/4156467/pexels-photo-4156467.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
        bio: "PhD in Machine Learning with extensive experience in building predictive models for Fortune 500 companies."
      },
      {
        name: "Rahul Verma",
        role: "AI Research Scientist",
        experience: "8+ years",
        company: "Ex-Amazon, Ex-Flipkart",
        image: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
        bio: "Specialized in deep learning and natural language processing with multiple research publications."
      }
    ],
    curriculum: [
      {
        title: "Python for Data Science",
        duration: "3 weeks",
        topics: [
          "Python Fundamentals",
          "NumPy for Numerical Computing",
          "Pandas for Data Manipulation",
          "Data Cleaning Techniques",
          "Project: Data Analysis with Python"
        ]
      },
      {
        title: "Statistics & Mathematics",
        duration: "2 weeks",
        topics: [
          "Descriptive & Inferential Statistics",
          "Probability Theory",
          "Linear Algebra",
          "Calculus for ML",
          "Project: Statistical Analysis"
        ]
      },
      {
        title: "Data Visualization",
        duration: "2 weeks",
        topics: [
          "Matplotlib & Seaborn",
          "Plotly for Interactive Visuals",
          "Tableau Fundamentals",
          "Dashboard Design",
          "Project: COVID-19 Data Visualization"
        ]
      },
      {
        title: "Machine Learning Fundamentals",
        duration: "4 weeks",
        topics: [
          "Regression Algorithms",
          "Classification Models",
          "Clustering Techniques",
          "Model Evaluation",
          "Project: Predictive Modeling"
        ]
      },
      {
        title: "Advanced ML & Deep Learning",
        duration: "3 weeks",
        topics: [
          "Neural Networks",
          "TensorFlow & Keras",
          "CNNs for Image Processing",
          "RNNs for Time Series",
          "Project: Image Classification"
        ]
      },
      {
        title: "Deployment & Capstone",
        duration: "2 weeks",
        topics: [
          "ML Model Deployment",
          "Flask for Web APIs",
          "Cloud Deployment (AWS)",
          "Portfolio Preparation",
          "Capstone Project"
        ]
      }
    ],
    projects: [
      {
        title: "Predictive Analytics System",
        description: "Build a system to predict customer churn for a telecom company",
        technologies: ["Python", "Scikit-learn", "Pandas", "Flask"]
      },
      {
        title: "Image Classification Model",
        description: "Develop a CNN model to classify images into different categories",
        technologies: ["TensorFlow", "Keras", "OpenCV", "CNN"]
      },
      {
        title: "Sales Forecasting Dashboard",
        description: "Create a dashboard to forecast sales for an e-commerce platform",
        technologies: ["Time Series", "ARIMA", "Plotly", "Tableau"]
      },
      {
        title: "Sentiment Analysis Tool",
        description: "Build a tool to analyze customer sentiment from product reviews",
        technologies: ["NLP", "NLTK", "Transformers", "Flask"]
      },
      {
        title: "Recommendation Engine",
        description: "Develop a recommendation system for an OTT platform",
        technologies: ["Collaborative Filtering", "Content-Based", "Surprise Library"]
      },
      {
        title: "Fraud Detection System",
        description: "Create a model to detect fraudulent transactions for a bank",
        technologies: ["Anomaly Detection", "Isolation Forest", "XGBoost"]
      }
    ],
    outcomes: [
      "Build complete data science projects",
      "Deploy ML models to production",
      "Master industry best practices",
      "Prepare for data science interviews",
      "Build a professional portfolio",
      "Get job placement assistance"
    ],
    placementStats: {
      averagePackage: "₹14 LPA",
      highestPackage: "₹28 LPA",
      placementRate: "89%",
      hiringPartners: 180
    },
    tools: [
      { name: "Python", icon: "🐍" },
      { name: "TensorFlow", icon: "🧠" },
      { name: "PyTorch", icon: "🔥" },
      { name: "Scikit-learn", icon: "⚙️" },
      { name: "Pandas", icon: "🐼" },
      { name: "NumPy", icon: "🔢" },
      { name: "Matplotlib", icon: "📊" },
      { name: "Seaborn", icon: "🌊" },
      { name: "Tableau", icon: "📈" },
      { name: "SQL", icon: "💾" }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-16">
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
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center">
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
                  <Play className="h-5 w-5 mr-2 text-purple-600" />
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
            {['overview', 'curriculum', 'projects', 'instructors', 'outcomes', 'tools'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 font-medium text-sm border-b-2 transition-colors duration-200 whitespace-nowrap ${
                  activeTab === tab
                    ? 'border-purple-500 text-purple-600'
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
                  Our Data Science & Machine Learning course is designed to take you from beginner to job-ready in 16 weeks. 
                  You'll learn the most in-demand technologies used by top Indian companies like TCS, Infosys, and Wipro.
                </p>
                
                <div className="bg-purple-50 p-6 rounded-xl mb-8">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Award className="h-5 w-5 mr-2 text-purple-600" />
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
                    <Briefcase className="h-5 w-5 mr-2 text-purple-600" />
                    Placement Statistics
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{course.placementStats.averagePackage}</div>
                      <div className="text-sm text-gray-600">Average Package</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{course.placementStats.highestPackage}</div>
                      <div className="text-sm text-gray-600">Highest Package</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{course.placementStats.placementRate}</div>
                      <div className="text-sm text-gray-600">Placement Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{course.placementStats.hiringPartners}+</div>
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
                      <BookOpen className="h-5 w-5 text-purple-600 mr-3" />
                      <div>
                        <div className="font-medium">160+ Hours of Learning</div>
                        <div className="text-sm text-gray-600">Comprehensive curriculum</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <BarChart3 className="h-5 w-5 text-purple-600 mr-3" />
                      <div>
                        <div className="font-medium">6 Real Projects</div>
                        <div className="text-sm text-gray-600">Build your portfolio</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-purple-600 mr-3" />
                      <div>
                        <div className="font-medium">1:1 Mentorship</div>
                        <div className="text-sm text-gray-600">Get personalized guidance</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Briefcase className="h-5 w-5 text-purple-600 mr-3" />
                      <div>
                        <div className="font-medium">Job Assistance</div>
                        <div className="text-sm text-gray-600">Resume prep & interviews</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg mb-6">
                    <div className="font-semibold text-purple-800 mb-2">Next Batch Starts</div>
                    <div className="text-lg font-bold">20th October 2023</div>
                    <div className="text-sm text-gray-600">Only 15 seats available</div>
                  </div>
                  
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200 mb-4 flex items-center justify-center">
                    <IndianRupee className="h-5 w-5 mr-2" />
                    Enroll Now
                  </button>
                  
                  <button className="w-full border border-purple-600 text-purple-600 hover:bg-purple-50 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
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
                              ? 'bg-purple-100 text-purple-700 font-semibold'
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
                          <Play className="h-4 w-4 text-purple-600 mr-2" />
                          <span>15 Video Lectures</span>
                        </li>
                        <li className="flex items-center">
                          <BookOpen className="h-4 w-4 text-purple-600 mr-2" />
                          <span>8 Reading Materials</span>
                        </li>
                        <li className="flex items-center">
                          <BarChart3 className="h-4 w-4 text-purple-600 mr-2" />
                          <span>5 Hands-on Exercises</span>
                        </li>
                        <li className="flex items-center">
                          <Award className="h-4 w-4 text-purple-600 mr-2" />
                          <span>2 Quizzes</span>
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
                    <div className="text-purple-600 font-semibold mb-2">Project {index + 1}</div>
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <button className="text-purple-600 hover:text-purple-700 font-medium flex items-center">
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
                        <p className="text-purple-600 font-medium">{instructor.role}</p>
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
                            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Machine Learning</span>
                            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Predictive Modeling</span>
                            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Statistical Analysis</span>
                            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Big Data</span>
                          </>
                        ) : (
                          <>
                            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Deep Learning</span>
                            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">NLP</span>
                            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Computer Vision</span>
                            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">AI Research</span>
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
                
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-6">Job Roles You Can Apply For</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Data Scientist",
                      "ML Engineer",
                      "Data Analyst",
                      "Business Analyst",
                      "AI Specialist",
                      "Data Engineer"
                    ].map((role, index) => (
                      <div key={index} className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                        <Briefcase className="h-5 w-5 text-purple-600 mr-3" />
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
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="h-8 w-8 text-purple-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Resume Building</h4>
                    <p className="text-gray-600">Get help creating an ATS-friendly resume that stands out</p>
                  </div>
                  
                  <div className="text-center p-4">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="h-8 w-8 text-purple-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Mock Interviews</h4>
                    <p className="text-gray-600">Practice with technical interviews and get detailed feedback</p>
                  </div>
                  
                  <div className="text-center p-4">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Briefcase className="h-8 w-8 text-purple-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Job Referrals</h4>
                    <p className="text-gray-600">Get referred to top companies through our hiring partners</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                    View Success Stories
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Tools Tab */}
          {activeTab === 'tools' && (
            <div>
              <h2 className="text-3xl font-bold mb-8">Tools & Technologies</h2>
              <p className="text-gray-700 mb-8 max-w-3xl">
                Master the most in-demand tools and technologies used in the data science industry.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
                {course.tools.map((tool, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow duration-200">
                    <div className="text-3xl mb-3">{tool.icon}</div>
                    <div className="font-semibold">{tool.name}</div>
                  </div>
                ))}
              </div>
              
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Why These Tools?</h3>
                <p className="text-gray-700 mb-4">
                  We've carefully selected these tools based on current industry demands and job market trends. 
                  Our curriculum is regularly updated to ensure you learn the most relevant technologies.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Python is the most popular language for data science and ML</li>
                  <li>TensorFlow and PyTorch are industry standards for deep learning</li>
                  <li>Pandas and NumPy are essential for data manipulation</li>
                  <li>Tableau is widely used for data visualization in businesses</li>
                  <li>SQL is fundamental for working with databases</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Launch Your Data Science Career?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of students who transformed their careers with our Data Science & Machine Learning program
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-gray-100 hover:scale-105">
              Enroll Now - {course.price}
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-white/10">
              Book a Free Counseling Session
            </button>
          </div>
          
          <p className="mt-6 text-purple-200">Next batch starting October 20th - Limited seats available</p>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default DataSciencePage;