import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PartnersSlider from './components/PartnersSlider';
import CoursesSection from './components/CoursesSection';
import ContentSection from './components/ContentSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

import WebDevelopmentPage from './pages/webdevelopment';
import DataSciencePage from './pages/data-science';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <PartnersSlider />
        <CoursesSection />
        <ContentSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/web-development" element={<WebDevelopmentPage />} />
        <Route path="/data-science" element={<DataSciencePage />} />
      </Routes>
    </Router>
  );
}

export default App;
