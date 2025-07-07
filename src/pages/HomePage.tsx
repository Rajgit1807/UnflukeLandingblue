import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import PopularCoursesSection from '../components/PopularCoursesSection';
import RecordedCoursesSection from '../components/RecordedCoursesSection';
import StorySection from '../components/StorySection';
import CertificatesSection from '../components/CertificatesSection';
import TrustSection from '../components/TrustSection';
import MyBooks from '../components/MyBooks';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const HomePage = () => {

  const navItems = [
    { name: 'Courses', path: '/courses' },
    { name: 'Ratings', path: '/ratings' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div>
     <Navigation navItems={true} />
      <HeroSection />
      <ServicesSection />
      <PopularCoursesSection />
      <RecordedCoursesSection />
      <StorySection />
      <CertificatesSection />
      <TrustSection />
      <MyBooks/>
      <Footer/>
    </div>
  );
};

export default HomePage;