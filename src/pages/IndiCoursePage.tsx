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
import { useParams } from 'react-router-dom';


const IndiCoursePage = () => {

   const { id } = useParams<{ id?: string }>();

// Prefer route param if available, else use `1` as default
const courseId = id ? parseInt(id) : 1;

const navItems = [
  { name: 'Ratings', path: `/buycourse/ratings` },
  { name: 'Testimonials', path: '/buycourse/testimonials' },
  { name: 'FAQ', path: '/buycourse/faq' },
  { name: 'Contact', path: '/buycourse/contacts' },
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
      <EnrollmentPage navhide={true} cid={courseId}/>
      {/* <MyBooks/> */}
      </div>
  )
}

export default IndiCoursePage