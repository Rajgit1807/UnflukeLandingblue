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
import IndiCoursePage from './pages/IndiCoursePage';

function App() {


  const navItems = [
      { name: 'Courses', path: '/courses' },
      { name: 'Ratings', path: '/ratings' },
      { name: 'Testimonials', path: '/testimonials' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Contact', path: '/contact' },
    ];
const navItems2 = [
  { name: 'Ratings', path: `/buycourse/ratings` },
  { name: 'Testimonials', path: '/buycourse/testimonials' },
  { name: 'FAQ', path: '/buycourse/faq' },
  { name: 'Contact', path: '/buycourse/contacts' },
];
  return (
    <Router>
      <ScrollToTop/>
      <div className="min-h-screen bg-white">
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/course/:id" element={<CourseDetailsPage />} />
            <Route path="/ratings" element={<RatingsPage navItems={navItems}/>} />
            <Route path="/enrollment" element={<EnrollmentPage navhide={false}/>} />
            <Route path="/newsletter" element={<NewsletterPage />} />
            <Route path="/testimonials" element={<TestimonialsPage navItems={navItems}/>} />
            <Route path="/faq" element={<FAQPage navItems={navItems} />} />
            <Route path="/contact" element={<ContactPage navItems={navItems} />} />
            <Route path="/buycourse/:id" element={<IndiCoursePage />}/>
            <Route path="/buycourse/ratings" element={<RatingsPage navItems={navItems2} sincourse={true}/>} /> 
            <Route path="/buycourse/testimonials" element={<TestimonialsPage navItems={navItems2} sincourse={true}/>} />        
            <Route path="/buycourse/faq" element={<FAQPage navItems={navItems2} sincourse={true}/>} />        
            <Route path="/buycourse/contacts" element={<ContactPage navItems={navItems2} sincourse={true}/>} />        
       
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;