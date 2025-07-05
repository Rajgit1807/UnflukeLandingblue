import React from 'react'
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import PopularCoursesSection from '../components/PopularCoursesSection';
import RecordedCoursesSection from '../components/RecordedCoursesSection';
import StorySection from '../components/StorySection';
import CertificatesSection from '../components/CertificatesSection';
import TrustSection from '../components/TrustSection';
import MyBooks from '../components/MyBooks';
import Navigation from '../components/Navigation';
import CourseDetailsPage from './CourseDetailsPage';
import EnrollmentPage from './EnrollmentPage';



const GrowwAlgo = () => {

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
      <CourseDetailsPage cid={1}/>
      {/* <PopularCoursesSection /> */}
      {/* <RecordedCoursesSection /> */}
      <StorySection />
      <CertificatesSection />
      <TrustSection />
      <EnrollmentPage navhide={true} cid={1}/>
      {/* <MyBooks/> */}
      </div>
  )
}

export default GrowwAlgo