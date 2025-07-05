import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailsPage from './pages/CourseDetailsPage';
import RatingsPage from './pages/RatingsPage';
import EnrollmentPage from './pages/EnrollmentPage';
import NewsletterPage from './pages/NewsletterPage';
import TestimonialsPage from './pages/TestimonialsPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';
import GrowwAlgo from './pages/GrowwAlgo';
import HFTC from './pages/HFTC';
import BasicsMarket from './pages/BasicsMarket';
import BasicsOptions from './pages/BasicsOptions';
import BackPython from './pages/BackPython';
import AlgoPython from './pages/AlgoPython';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <div className="min-h-screen bg-white">
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/course/:id" element={<CourseDetailsPage />} />
            <Route path="/ratings" element={<RatingsPage />} />
            <Route path="/enrollment" element={<EnrollmentPage navhide={false}/>} />
            <Route path="/newsletter" element={<NewsletterPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/buycourse1" element={<GrowwAlgo />} />
            <Route path="/buycourse2" element={<AlgoPython />} />
            <Route path="/buycourse3" element={<HFTC />} />
            <Route path="/buycourse4" element={<BackPython/>} />
            <Route path="/buycourse5" element={<BasicsOptions/>} />
            <Route path="/buycourse6" element={<BasicsMarket/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;