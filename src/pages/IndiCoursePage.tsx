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
import CFooter from '../components/coursedetails/CFooter';
import CourseDetailsPage2 from './CourseDetailsPage2';


const IndiCoursePage = () => {

   const { id } = useParams<{ id?: string }>();

// Prefer route param if available, else use `1` as default
const courseId = id ? parseInt(id) : 1;

// const navItems = [
//   { name: 'Ratings', path: `/buycourse/ratings/${courseId}` },
//   { name: 'Testimonials', path: `/buycourse/testimonials/${courseId}` },
//   { name: 'FAQ', path: `/buycourse/faq/${courseId}` },
//   { name: 'Contact', path: `/buycourse/contacts/${courseId}` },
// ];


  return (
    <div>
      <Navigation  navItems={false} sincourse={true}/>
      <HeroSection />
      {/* <ServicesSection /> */}
      <CourseDetailsPage2 cid={1}/>
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