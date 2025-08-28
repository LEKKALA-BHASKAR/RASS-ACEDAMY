import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Define types for our tool categories and individual tools
interface Tool {
  id: number;
  name: string;
  description: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  bestFor: string[];
  website: string;
  isFreeTier: boolean;
}

// Sample data for UI/UX tools
const designTools: Tool[] = [
  {
    id: 1,
    name: "Figma",
    description: "A collaborative web application for interface design with real-time collaboration features.",
    category: "Design & Prototyping",
    difficulty: "Beginner",
    bestFor: ["Collaborative work", "Prototyping", "Design systems"],
    website: "https://www.figma.com",
    isFreeTier: true
  },
  {
    id: 2,
    name: "Adobe XD",
    description: "Vector-based user experience design tool for web apps and mobile apps.",
    category: "Design & Prototyping",
    difficulty: "Beginner",
    bestFor: ["UI design", "Prototyping", "Voice design"],
    website: "https://www.adobe.com/products/xd.html",
    isFreeTier: true
  },
  {
    id: 3,
    name: "Sketch",
    description: "Digital design toolkit with collaboration features, built for Mac.",
    category: "Design & Prototyping",
    difficulty: "Intermediate",
    bestFor: ["Interface design", "Vector editing", "Plugin ecosystem"],
    website: "https://www.sketch.com",
    isFreeTier: false
  },
  {
    id: 4,
    name: "InVision",
    description: "Digital product design platform for prototyping, collaboration and workflow.",
    category: "Prototyping & Collaboration",
    difficulty: "Beginner",
    bestFor: ["Prototyping", "Collaboration", "Design system management"],
    website: "https://www.invisionapp.com",
    isFreeTier: true
  },
  {
    id: 5,
    name: "Axure RP",
    description: "Tool for creating wireframes, prototypes, and documentation.",
    category: "Wireframing & Prototyping",
    difficulty: "Advanced",
    bestFor: ["Complex interactions", "Documentation", "Enterprise projects"],
    website: "https://www.axure.com",
    isFreeTier: false
  },
  {
    id: 6,
    name: "Balsamiq",
    description: "Rapid wireframing tool that emphasizes simplicity and speed.",
    category: "Wireframing",
    difficulty: "Beginner",
    bestFor: ["Low-fidelity wireframes", "Quick sketches", "Early ideation"],
    website: "https://balsamiq.com",
    isFreeTier: false
  },
  {
    id: 7,
    name: "Marvel",
    description: "Simple design, prototyping and collaboration platform.",
    category: "Prototyping & Collaboration",
    difficulty: "Beginner",
    bestFor: ["Rapid prototyping", "User testing", "Team collaboration"],
    website: "https://marvelapp.com",
    isFreeTier: true
  },
  {
    id: 8,
    name: "Adobe Illustrator",
    description: "Vector graphics editor for creating logos, icons, and illustrations.",
    category: "Vector Graphics",
    difficulty: "Intermediate",
    bestFor: ["Vector illustration", "Icon design", "Logo creation"],
    website: "https://www.adobe.com/products/illustrator.html",
    isFreeTier: false
  },
  {
    id: 9,
    name: "Miro",
    description: "Online collaborative whiteboard platform for team brainstorming and planning.",
    category: "Collaboration & Ideation",
    difficulty: "Beginner",
    bestFor: ["Brainstorming", "User flows", "Wireframing"],
    website: "https://miro.com",
    isFreeTier: true
  },
  {
    id: 10,
    name: "Webflow",
    description: "Visual web development tool that lets you design, build, and launch responsive websites.",
    category: "Web Design & Development",
    difficulty: "Intermediate",
    bestFor: ["No-code development", "Responsive design", "CMS websites"],
    website: "https://webflow.com",
    isFreeTier: true
  },
  {
    id: 11,
    name: "Framer",
    description: "Tool that helps teams design and publish responsive websites with interactive components.",
    category: "Prototyping & Development",
    difficulty: "Intermediate",
    bestFor: ["Interactive prototypes", "Code components", "Responsive design"],
    website: "https://www.framer.com",
    isFreeTier: true
  },
  {
    id: 12,
    name: "Zeplin",
    description: "Collaborative tool for UI designers and front-end developers.",
    category: "Design Handoff",
    difficulty: "Beginner",
    bestFor: ["Design handoff", "Style guides", "Developer collaboration"],
    website: "https://zeplin.io",
    isFreeTier: true
  }
];

// Category data
const categories = [
  "All",
  "Design & Prototyping",
  "Wireframing",
  "Prototyping & Collaboration",
  "Vector Graphics",
  "Design Handoff",
  "Web Design & Development"
];

const UIDesignToolsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [difficultyFilter, setDifficultyFilter] = useState<string>("All");

  // Filter tools based on selected category, search term, and difficulty
  const filteredTools = designTools.filter(tool => {
    const matchesCategory = selectedCategory === "All" || tool.category === selectedCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = difficultyFilter === "All" || tool.difficulty === difficultyFilter;
    
    return matchesCategory && matchesSearch && matchesDifficulty;
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-12 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Essential UI/UX Design Tools
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the tools that will help you create exceptional user experiences and interfaces. 
            Master these technologies to excel in your design career.
          </p>
        </section>

        {/* Filters Section */}
        <section className="mb-12 bg-white rounded-xl shadow-sm p-6">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="w-full md:w-1/3">
              <input
                type="text"
                placeholder="Search tools..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-2/3">
              <select
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none flex-grow"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              
              <select
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none flex-grow"
                value={difficultyFilter}
                onChange={(e) => setDifficultyFilter(e.target.value)}
              >
                <option value="All">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Design Tools</h2>
          
          {filteredTools.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No tools match your filters. Try adjusting your search criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map(tool => (
                <div key={tool.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{tool.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        tool.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                        tool.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {tool.difficulty}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{tool.description}</p>
                    
                    <div className="mb-4">
                      <span className="text-sm font-medium text-gray-700">Category:</span>
                      <span className="text-sm text-gray-600 ml-2">{tool.category}</span>
                    </div>
                    
                    <div className="mb-4">
                      <span className="text-sm font-medium text-gray-700">Best for:</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {tool.bestFor.map((useCase, index) => (
                          <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mt-6">
                      <a 
                        href={tool.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                      >
                        Visit Website
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      
                      {tool.isFreeTier && (
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                          Free tier available
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Learning Path Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Suggested Learning Path</h2>
          
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">For Beginners</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Start with Figma or Adobe XD for basic design principles</li>
                  <li>Learn wireframing with Balsamiq or Miro</li>
                  <li>Practice prototyping with InVision or Marvel</li>
                  <li>Explore design handoff tools like Zeplin</li>
                </ol>
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">For Advanced Designers</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Master complex interactions with Axure RP</li>
                  <li>Develop component libraries in Figma or Sketch</li>
                  <li>Learn no-code development with Webflow or Framer</li>
                  <li>Integrate user testing into your workflow</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Additional Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
              <div className="text-blue-600 mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Documentation</h3>
              <p className="text-gray-600">Official documentation and tutorials from tool providers.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
              <div className="text-blue-600 mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Online Courses</h3>
              <p className="text-gray-600">Structured learning paths from platforms like Udemy, Coursera, and LinkedIn Learning.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
              <div className="text-blue-600 mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Video Tutorials</h3>
              <p className="text-gray-600">YouTube channels and video content dedicated to UI/UX tool tutorials.</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default UIDesignToolsPage;