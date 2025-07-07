import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
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
import IndiCoursePage from './pages/IndiCoursePage';

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
            <Route path="/ratings" element={<RatingsPage navItems={true}/>} />
            <Route path="/enrollment" element={<EnrollmentPage navhide={false}/>} />
            <Route path="/newsletter" element={<NewsletterPage />} />
            <Route path="/testimonials" element={<TestimonialsPage navItems={true}/>} />
            <Route path="/faq" element={<FAQPage navItems={true}/>} />
            <Route path="/contact" element={<ContactPage navItems={true} />} />
            <Route path="/buycourse/:id" element={<IndiCoursePage />}/>
            <Route path="/buycourse/ratings/:id" element={<RatingsPage navItems={false} sincourse={true}/>} /> 
            <Route path="/buycourse/testimonials/:id" element={<TestimonialsPage navItems={false}  sincourse={true}/>} />        
            <Route path="/buycourse/faq/:id" element={<FAQPage navItems={false}  sincourse={true}/>} />        
            <Route path="/buycourse/contacts/:id" element={<ContactPage navItems={false} sincourse={true}/>} />          
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;