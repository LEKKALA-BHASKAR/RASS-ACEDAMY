import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PartnersSlider from './components/PartnersSlider';
import CoursesSection from './components/CoursesSection';
import ContentSection from './components/ContentSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import Preloader from "./pages/Preloader";

import { useEffect, useState } from "react";
import CoursesPage from "./pages/CoursesPage";
import About from "./pages/About";
import Corporate from "./pages/corporate";
import NotFoundPage from "./pages/404";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TestimonialForm from "./pages/Testimonial";
import HelpCenter from "./pages/help-center";
import ContactUs from "./pages/ContactUs";


function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <PartnersSlider />
        <CoursesPage />
        <ContentSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
       <Route path="/courses" element={<CoursesSection />} />
       <Route path="/about" element={<About />} />
       <Route path="/corporate" element={<Corporate />} />
       <Route path="*" element={<NotFoundPage />} />
       <Route path="/login" element={<LoginPage />} />
       <Route path="/register" element={<RegisterPage />} />
       <Route path="/testimonialform" element={<TestimonialForm onClose={function (): void {
          throw new Error("Function not implemented.");
        } } onSubmit={function (): void {
          throw new Error("Function not implemented.");
        } } />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
