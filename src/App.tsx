import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Context
import { AuthProvider } from './contexts/AuthContext';

// Components (shared)
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PartnersSlider from './components/PartnersSlider';
import CoursesSection from './components/CoursesSection';
import ContentSection from './components/ContentSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

// Pages - Public
import IntroPage from './pages/IntroPage';
import Preloader from './pages/Preloader';
import CoursesPage from './pages/CoursesPage';
import About from './pages/About';
import Corporate from './pages/corporate';
import NotFoundPage from './pages/404';
import TestimonialForm from './pages/Testimonial';
import HelpCenter from './pages/help-center';
import ContactUs from './pages/ContactUs';
import Blog from './pages/blog';
import OurStory from './pages/our-story';

// Pages - Courses
import FullStackDevelopment from './Courses/full-stack-development';
import DataScienceMLPage from './Courses/data-science-&-ml';
import DigitalMarketing from './Courses/DigitalMarketing';
import CloudComputing from './Courses/cloud-computing';
import UIDesignToolsPage from './Courses/uiux-design';

// Pages - Auth
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';

// Pages - Student (Protected)
import StudentLayout from './student/components/Layout';
import StudentDashboard from './student/pages/Dashboard';
import StudentCourses from './student/pages/Courses';
import StudentAssignments from './student/pages/Assignments';
import StudentCertificates from './student/pages/Certificates';
import StudentAttendance from './student/pages/Attendance';

/* ------------------------------
   HOME PAGE STRUCTURE
------------------------------ */
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

/* ------------------------------
   MAIN APP
------------------------------ */
function App() {
  const [loading, setLoading] = useState(true);

  // Preloader Timeout
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<IntroPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/courses" element={<CoursesSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/testimonialform" element={<TestimonialForm onClose={() => {}} onSubmit={() => {}} />} />

          {/* Course Routes */}
          <Route path="/full-stack-development" element={<FullStackDevelopment />} />
          <Route path="/data-science-&-ml" element={<DataScienceMLPage />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/cloud-computing" element={<CloudComputing />} />
          <Route path="/ui/ux-design" element={<UIDesignToolsPage />} />

          {/* Auth Routes */}
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />

          {/* Student Protected Routes */}
          <Route
            path="/student"
            element={
              <ProtectedRoute requiredRole="student">
                <StudentLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="/student/dashboard" replace />} />
            <Route path="dashboard" element={<StudentDashboard />} />
            <Route path="courses" element={<StudentCourses />} />
            <Route path="assignments" element={<StudentAssignments />} />
            <Route path="certificates" element={<StudentCertificates />} />
            <Route path="attendance" element={<StudentAttendance />} />
          </Route>

          {/* Legacy Redirects */}
          <Route path="/login" element={<Navigate to="/auth/login" replace />} />
          <Route path="/register" element={<Navigate to="/auth/register" replace />} />

          {/* 404 Page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
