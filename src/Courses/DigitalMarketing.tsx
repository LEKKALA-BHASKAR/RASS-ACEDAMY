import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const DigitalMarketing: React.FC = () => {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  const toggleModule = (index: number) => {
    setExpandedModule((prev) => (prev === index ? null : index));
  };

  const curriculum = [
    {
      title: "Introduction to Digital Marketing",
      details:
        "Overview of the digital marketing landscape, career opportunities, and tools.",
      icon: "📈",
    },
    {
      title: "Search Engine Optimization (SEO)",
      details:
        "On-page SEO, off-page SEO, keyword research, backlinks, and site audits.",
      icon: "🔍",
    },
    {
      title: "Search Engine Marketing (SEM) & PPC",
      details:
        "Google Ads, keyword bidding, campaign optimization, and measuring ROI.",
      icon: "💰",
    },
    {
      title: "Social Media Marketing (SMM)",
      details:
        "Strategies for Facebook, Instagram, LinkedIn, Twitter, and YouTube marketing.",
      icon: "💬",
    },
    {
      title: "Content & Email Marketing",
      details:
        "Content strategy, blogging, newsletters, automation, and lead nurturing.",
      icon: "✉️",
    },
    {
      title: "Analytics & Tools",
      details:
        "Google Analytics, SEMrush, Ahrefs, HubSpot, and measuring performance.",
      icon: "📊",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
        <Header/>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            Digital Marketing Course
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Master SEO, Social Media, Paid Ads, and Analytics to become a
            full-stack Digital Marketer.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
              Enroll Now
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition-all">
              View Syllabus
            </button>
          </div>
          <div className="mt-10 flex flex-wrap justify-center items-center gap-6 text-sm">
            <div className="flex items-center">
              <span className="mr-2">⭐</span>
              <span>4.8/5 (1,200+ reviews)</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">👥</span>
              <span>5,000+ Students</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">⏱️</span>
              <span>12 Weeks | Self-Paced</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Why Choose Our Course?</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We provide industry-relevant training with practical experience to kickstart your digital marketing career.
        </p>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { 
              title: "Learn from Industry Experts", 
              desc: "Get trained by professionals working at top companies",
              icon: "👨‍🏫"
            },
            { 
              title: "Hands-on Live Projects", 
              desc: "Work on real-world projects to build your portfolio",
              icon: "🛠️"
            },
            { 
              title: "Placement Assistance", 
              desc: "Get help with resume building and interview preparation",
              icon: "🎯"
            },
          ].map((highlight, i) => (
            <div
              key={i}
              className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition duration-300"
            >
              <div className="text-4xl mb-4">{highlight.icon}</div>
              <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
              <p className="text-gray-600">{highlight.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Skills & Tools Covered</h2>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Master the essential digital marketing tools and platforms used by industry professionals
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "SEO & SEM", icon: "🔍" },
            { name: "Social Media Marketing", icon: "💬" },
            { name: "Content Marketing", icon: "📝" },
            { name: "Email Marketing", icon: "✉️" },
            { name: "Google Analytics", icon: "📊" },
            { name: "Canva & HubSpot", icon: "🎨" },
          ].map((skill, i) => (
            <div
              key={i}
              className="bg-white border rounded-xl p-6 shadow hover:shadow-md transition duration-300 flex items-center"
            >
              <span className="text-2xl mr-4">{skill.icon}</span>
              <p className="font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Curriculum</h2>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Comprehensive modules covering all aspects of digital marketing with hands-on projects
        </p>
        <div className="space-y-4">
          {curriculum.map((module, index) => (
            <div
              key={index}
              className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300"
            >
              <button
                onClick={() => toggleModule(index)}
                className="w-full flex justify-between items-center px-6 py-4 bg-gray-50 hover:bg-gray-100 text-left"
              >
                <div className="flex items-center">
                  <span className="text-xl mr-4">{module.icon}</span>
                  <span className="font-semibold">{module.title}</span>
                </div>
                <span className="text-xl">{expandedModule === index ? "−" : "+"}</span>
              </button>
              {expandedModule === index && (
                <div className="px-6 py-4 bg-white text-gray-600">
                  {module.details}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
     

      {/* Career & Salaries */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Career Opportunities & Salaries
        </h2>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Digital marketing skills are in high demand across industries with competitive salaries
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              role: "SEO Specialist",
              salary: "₹4 - 6 LPA (avg)",
              growth: "15% year-over-year growth",
            },
            {
              role: "Digital Marketing Manager",
              salary: "₹7 - 12 LPA (avg)",
              growth: "20% year-over-year growth",
            },
            {
              role: "Social Media Strategist",
              salary: "₹5 - 8 LPA (avg)",
              growth: "18% year-over-year growth",
            },
          ].map((career, i) => (
            <div
              key={i}
              className="bg-white border rounded-xl p-6 shadow hover:shadow-md transition duration-300"
            >
              <h3 className="font-bold text-lg mb-2">{career.role}</h3>
              <p className="text-blue-600 font-semibold mb-2">{career.salary}</p>
              <p className="text-gray-600 text-sm">{career.growth}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 px-6 max-w-6xl mx-auto bg-gray-50 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-4">
          Capstone Projects
        </h2>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Apply your learning through real-world projects that build your portfolio
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "SEO Audit for a Real Website",
              desc: "Conduct a comprehensive SEO audit and provide recommendations"
            },
            {
              title: "Running Paid Ad Campaigns",
              desc: "Create and manage Google/Facebook ads with real budgets"
            },
            {
              title: "Building a Social Media Strategy",
              desc: "Develop a complete social media plan for a brand"
            },
            {
              title: "Email Marketing Funnel",
              desc: "Design and implement an automated email sequence"
            },
          ].map((project, i) => (
            <div
              key={i}
              className="p-6 bg-white border rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Student Success Stories</h2>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Hear from our alumni who have transformed their careers with our digital marketing course
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Rahul S.",
              role: "Digital Marketing Executive at Flipkart",
              testimonial: "This course completely changed my career trajectory. The hands-on projects gave me the confidence to apply for digital marketing roles.",
              avatar: "👨"
            },
            {
              name: "Priya M.",
              role: "Social Media Manager at Myntra",
              testimonial: "The mentors were incredibly supportive. I landed my dream job just 2 months after completing the course!",
              avatar: "👩"
            },
          ].map((testimonial, i) => (
            <div
              key={i}
              className="p-6 bg-white border rounded-xl shadow hover:shadow-md transition duration-300"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">{testimonial.avatar}</span>
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">"{testimonial.testimonial}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mentors */}
      <section className="py-16 px-6 max-w-6xl mx-auto bg-gray-50 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-4">Meet Your Mentors</h2>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Learn from industry experts with years of experience in digital marketing
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              name: "Ananya Gupta", 
              role: "SEO Specialist at Amazon", 
              exp: "8+ years in SEO",
              avatar: "👩‍💼"
            },
            { 
              name: "Rahul Sharma", 
              role: "Digital Marketing Manager at Swiggy", 
              exp: "10+ years in digital marketing",
              avatar: "👨‍💼"
            },
            { 
              name: "Priya Mehta", 
              role: "Social Media Strategist at Zomato", 
              exp: "7+ years in SMM",
              avatar: "👩‍🎓"
            },
          ].map((mentor, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl shadow hover:shadow-md transition duration-300 text-center"
            >
              <div className="text-5xl mb-4">{mentor.avatar}</div>
              <h3 className="font-bold text-lg mb-1">{mentor.name}</h3>
              <p className="text-blue-600 font-semibold mb-2">{mentor.role}</p>
              <p className="text-gray-600 text-sm">{mentor.exp}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Find answers to common questions about our digital marketing course
        </p>
        <div className="space-y-6">
          {[
            {
              q: "Do I need prior experience?",
              a: "No, beginners are welcome. We start from fundamentals and gradually progress to advanced topics. Our course is designed for anyone looking to start a career in digital marketing.",
            },
            {
              q: "Will I get placement support?",
              a: "Yes, we provide comprehensive placement assistance including resume building, interview preparation, and connecting you with our hiring partners. Our premium plan includes guaranteed internship opportunities.",
            },
            {
              q: "Is the course project-based?",
              a: "Absolutely! You'll work on multiple live projects throughout the course. These projects will help you build a strong portfolio that demonstrates your skills to potential employers.",
            },
            {
              q: "What is the course duration?",
              a: "The course is designed to be completed in 12 weeks if you dedicate 10-12 hours per week. However, you can learn at your own pace as we provide lifetime access to all course materials.",
            },
            {
              q: "What payment options are available?",
              a: "We offer multiple payment options including credit/debit cards, UPI, and EMI options. We also provide a 7-day refund policy if you're not satisfied with the course.",
            },
          ].map((faq, i) => (
            <div key={i} className="border-b pb-6">
              <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold">Ready to Become a Digital Marketer?</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with our comprehensive digital marketing course.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-indigo-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
              Enroll Now
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-indigo-700 transition-all">
              Schedule a Consultation
            </button>
          </div>
          <p className="mt-6 text-sm opacity-80">7-day money-back guarantee • Lifetime access</p>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default DigitalMarketing;