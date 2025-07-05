import React from 'react'
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import CourseDetailsPage from './CourseDetailsPage';
import StorySection from '../components/StorySection';
import CertificatesSection from '../components/CertificatesSection';
import TrustSection from '../components/TrustSection';
import EnrollmentPage from './EnrollmentPage';

const HFTC = () => {
    const navItems = [
    // { name: 'Courses', path: '/courses' },
    { name: 'Ratings', path: '/ratings' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div>
      <Navigation navItems={navItems} sincourse={true}/>
      <HeroSection />
      {/* <ServicesSection /> */}
      <CourseDetailsPage cid={3}/>
      {/* <PopularCoursesSection /> */}
      {/* <RecordedCoursesSection /> */}
      <StorySection />
      <CertificatesSection />
      <TrustSection />
      <EnrollmentPage navhide={true} cid={3}/>
      {/* <MyBooks/> */}
      </div>
  )
}

export default HFTC