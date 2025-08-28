import React, { useState } from "react";
import { 
  BookOpen, Clock, Code, Briefcase, IndianRupee, 
  ChevronDown, ChevronUp, Users, Award, Globe, 
  CheckCircle, Star, Menu, X, Rocket, Target,
  Zap, Cpu, Database, Server, Layout, Smartphone,
  Brain, BarChart3, PieChart, LineChart, Cloud,
  GitBranch, Shield, Mail, MessageSquare
} from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const DataScienceMLPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedModule, setExpandedModule] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModule = (index: number | React.SetStateAction<null>) => {
    if (expandedModule === index) {
      setExpandedModule(null);
    } else {
      setExpandedModule(index);
    }
  };

  const curriculum = [
    {
      title: "Python for Data Science",
      duration: "6 weeks",
      topics: ["Python Programming", "NumPy & Pandas", "Data Wrangling", "Data Visualization", "Statistical Analysis"]
    },
    {
      title: "Machine Learning Fundamentals",
      duration: "8 weeks",
      topics: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation", "Feature Engineering", "Regression Models"]
    },
    {
      title: "Advanced Machine Learning",
      duration: "10 weeks",
      topics: ["Ensemble Methods", "Neural Networks", "Natural Language Processing", "Computer Vision", "Time Series Analysis"]
    },
    {
      title: "Deep Learning",
      duration: "8 weeks",
      topics: ["TensorFlow & Keras", "CNN Architectures", "RNN & LSTMs", "Transfer Learning", "GANs"]
    },
    {
      title: "Big Data Technologies",
      duration: "6 weeks",
      topics: ["Apache Spark", "Hadoop Ecosystem", "Distributed Computing", "Cloud Platforms", "Data Pipelines"]
    },
    {
      title: "Capstone Project",
      duration: "6 weeks",
      topics: ["Real-world Dataset", "End-to-end Project", "Model Deployment", "Presentation", "Portfolio Development"]
    }
  ];

  const testimonials = [
    {
      name: "Aarav Patel",
      role: "Data Scientist at AnalyticsVille",
      content: "This course completely transformed my career path. The depth of content and practical projects helped me transition from business analysis to data science within months!",
      rating: 5
    },
    {
      name: "Neha Singh",
      role: "ML Engineer at TechInnovate",
      content: "The instructors were phenomenal—they made complex concepts accessible. The capstone project was especially valuable for my portfolio and job interviews.",
      rating: 5
    },
    {
      name: "Rohan Mehta",
      role: "Data Analyst at FinCorp",
      content: "As someone with a non-technical background, I was worried about keeping up. But the structured curriculum and supportive community made all the difference.",
      rating: 4
    }
  ];

  const stats = [
    { value: "96%", label: "Placement Rate" },
    { value: "1500+", label: "Students Trained" },
    { value: "400+", label: "Hiring Partners" },
    { value: "₹8.2L", label: "Average Starting Salary" }
  ];

  const tools = [
    { name: "Python", icon: <Code className="h-6 w-6" /> },
    { name: "TensorFlow", icon: <Brain className="h-6 w-6" /> },
    { name: "PyTorch", icon: <Cpu className="h-6 w-6" /> },
    { name: "SQL", icon: <Database className="h-6 w-6" /> },
    { name: "Spark", icon: <Zap className="h-6 w-6" /> },
    { name: "AWS", icon: <Cloud className="h-6 w-6" /> },
    { name: "Git", icon: <GitBranch className="h-6 w-6" /> },
    { name: "Docker", icon: <Server className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Header/>
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold">DataMaster</span>
            </div>    
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white px-4 py-6 shadow-lg">
            <div className="flex flex-col space-y-4">
              <a href="#overview" className="text-gray-700 hover:text-blue-600 font-medium">Overview</a>
              <a href="#curriculum" className="text-gray-700 hover:text-blue-600 font-medium">Curriculum</a>
              <a href="#outcomes" className="text-gray-700 hover:text-blue-600 font-medium">Outcomes</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium">Testimonials</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 font-medium">Pricing</a>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                Enroll Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <div className="px-4 pt-10 sm:px-6 sm:pt-10 lg:pt-12 lg:px-8">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                  Data Science & 
                  <span className="block text-yellow-300">Machine Learning</span>
                </h1>
                <p className="mt-3 text-base text-blue-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Master Python, statistics, machine learning, and deep learning to build intelligent systems and unlock insights from data.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                    >
                      Start Learning Now
                    </button>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 bg-opacity-60 hover:bg-opacity-70 md:py-4 md:text-lg md:px-10">
                      View Curriculum
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-90 flex items-center justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-blue-500 rounded-full animate-pulse opacity-20"></div>
              <div className="absolute inset-4 bg-blue-400 rounded-full animate-ping opacity-30"></div>
              <div className="absolute inset-8 bg-white rounded-full flex items-center justify-center">
                <Brain className="h-16 w-16 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <p className="text-3xl font-extrabold text-blue-600">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <div id="overview" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Course Overview</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Become a Data Science Expert
            </p>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Master the tools and techniques used by professional data scientists
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-100 rounded-md p-3">
                    <BarChart3 className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Data Analysis</dt>
                      <dd className="flex items-baseline">
                        <div className="text-lg font-semibold text-gray-900">Pandas, NumPy</div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
                    <Brain className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">ML Algorithms</dt>
                      <dd className="flex items-baseline">
                        <div className="text-lg font-semibold text-gray-900">Scikit-learn</div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-purple-100 rounded-md p-3">
                    <Cpu className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Deep Learning</dt>
                      <dd className="flex items-baseline">
                        <div className="text-lg font-semibold text-gray-900">TensorFlow, PyTorch</div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-yellow-100 rounded-md p-3">
                    <Cloud className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Deployment</dt>
                      <dd className="flex items-baseline">
                        <div className="text-lg font-semibold text-gray-900">AWS, Docker</div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white shadow-xl rounded-2xl p-6 flex items-center gap-4 hover:shadow-lg transition">
              <Clock className="w-10 h-10 text-blue-500" />
              <div>
                <h3 className="font-semibold text-xl">Duration</h3>
                <p className="text-gray-600">6 - 12 months (Self-paced / Instructor-led)</p>
              </div>
            </div>

            <div className="bg-white shadow-xl rounded-2xl p-6 flex items-center gap-4 hover:shadow-lg transition">
              <BookOpen className="w-10 h-10 text-green-500" />
              <div>
                <h3 className="font-semibold text-xl">Core Concepts</h3>
                <p className="text-gray-600">Statistics, Python, ML Algorithms, Deep Learning, Data Visualization</p>
              </div>
            </div>

            <div className="bg-white shadow-xl rounded-2xl p-6 flex items-center gap-4 hover:shadow-lg transition">
              <Code className="w-10 h-10 text-purple-500" />
              <div>
                <h3 className="font-semibold text-xl">Tools & Technologies</h3>
                <p className="text-gray-600">Python, SQL, TensorFlow, PyTorch, AWS, Spark</p>
              </div>
            </div>

            <div className="bg-white shadow-xl rounded-2xl p-6 flex items-center gap-4 hover:shadow-lg transition">
              <Briefcase className="w-10 h-10 text-orange-500" />
              <div>
                <h3 className="font-semibold text-xl">Career Roles</h3>
                <p className="text-gray-600">Data Scientist, ML Engineer, Data Analyst, AI Specialist, Business Analyst</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Technologies</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Tools You Will Master
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {tools.map((tool, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-md transition">
                <div className="text-blue-600">
                  {tool.icon}
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{tool.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Curriculum Section */}
      <div id="curriculum" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Curriculum</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What You'll Learn
            </p>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              A comprehensive curriculum designed by industry experts
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {curriculum.map((module, index) => (
              <div key={index} className="bg-white rounded-lg shadow">
                <button
                  className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                  onClick={() => toggleModule(index)}
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-bold">{index + 1}</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{module.title}</h3>
                      <p className="text-sm text-gray-500">{module.duration}</p>
                    </div>
                  </div>
                  {expandedModule === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {expandedModule === index && (
                  <div className="px-6 pb-6">
                    <ul className="grid gap-2 md:grid-cols-2">
                      {module.topics.map((topic, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Salary Info */}
      <div id="outcomes" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Career Outcomes</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Salary Insights
            </p>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              What you can expect to earn after completing the course
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-100">
                <IndianRupee className="h-6 w-6 text-gray-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Minimum Salary</h3>
              <p className="mt-2 text-gray-600">₹5 - 7 LPA</p>
              <p className="mt-2 text-sm text-gray-500">For entry-level positions</p>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition transform hover:-translate-y-1 transition">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
                <IndianRupee className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Average Salary</h3>
              <p className="mt-2 text-gray-600">₹8 - 15 LPA</p>
              <p className="mt-2 text-sm text-gray-500">With 1-3 years experience</p>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <IndianRupee className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Maximum Salary</h3>
              <p className="mt-2 text-gray-600">₹25+ LPA</p>
              <p className="mt-2 text-sm text-gray-500">For experienced professionals</p>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 rounded-2xl shadow-lg overflow-hidden">
            <div className="px-6 py-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900">Career Support</h3>
                <p className="mt-4 text-lg text-gray-600">We don't just teach you data science—we help you land your dream job</p>
              </div>

              <div className="mt-8 grid gap-8 md:grid-cols-3">
                <div className="text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
                    <Briefcase className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="mt-4 text-lg font-medium text-gray-900">Resume Preparation</h4>
                  <p className="mt-2 text-gray-600">Craft a data science resume that gets noticed by recruiters</p>
                </div>

                <div className="text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="mt-4 text-lg font-medium text-gray-900">Mock Interviews</h4>
                  <p className="mt-2 text-gray-600">Practice with technical interviews and get feedback</p>
                </div>

                <div className="text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-purple-100">
                    <Target className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="mt-4 text-lg font-medium text-gray-900">Job Placement</h4>
                  <p className="mt-2 text-gray-600">Connect with our hiring partners and get job referrals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div id="testimonials" className="py-12 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Testimonials</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Our Students Say
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <blockquote className="mt-4">
                  <p className="text-gray-600">"{testimonial.content}"</p>
                </blockquote>
                <div className="mt-4 flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-bold">{testimonial.name.charAt(0)}</span>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  <Footer/>
    </div>
  );
};

export default DataScienceMLPage;