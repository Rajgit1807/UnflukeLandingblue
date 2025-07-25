import React, { useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { 
  Play, Clock, Star, Users, Download, CheckCircle, 
  Award, Globe, Smartphone, ArrowLeft, BookOpen,
  Calendar, MessageSquare, Share2, Heart
} from 'lucide-react';
import { courseData } from '../data/courseData';
import Navigation from '../components/Navigation';
import { PlayCircle,  Target } from 'lucide-react';
import CourseStructure from '../components/coursedetails/CourseStructure';
import Features from '../components/coursedetails/Features';
import Outcomes from '../components/coursedetails/Outcomes';
import CFooter from '../components/coursedetails/CFooter';

interface CourseDetailsPageProps {
  cid?: number; // Make optional in case it's not passed
}

const CourseDetailsPage: React.FC<CourseDetailsPageProps> = ({ cid }) => {

  const { id } = useParams<{ id?: string }>();
 const location = useLocation();
  const segments = location.pathname.split('/'); 

  const [activeTab, setActiveTab] = useState('overview');
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Prefer route param if available, else use `cid` prop
  const courseId = !id ? cid  : parseInt(id, 10);

  // Assuming courseData is accessible here
  const course = courseData.find((c) => c.id === courseId);

if (!course) {
  return <div className="text-center py-20 text-gray-600">Course not found.</div>;
}

  const coursedetail = {
    id: parseInt(id || '1'),
    title: 'Complete Algorithmic Trading Masterclass',
    subtitle: 'Master algorithmic trading with Python, build trading bots, and learn advanced risk management strategies',
    description: 'This comprehensive course will take you from beginner to advanced algorithmic trader. You\'ll learn Python programming for finance, develop your own trading algorithms, implement risk management strategies, and build automated trading systems.',
    instructor: {
      name: 'Aseem Singhal',
      title: 'Senior Director at ModernAI',
      avatar: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100',
      experience: '15+ years',
      students: '12,000+',
      courses: 8,
      rating: 4.9
    },
    category: 'Trading',
    level: 'Intermediate',
    type: 'Recorded',
    duration: '12hrs 30min',
    lessons: 45,
    rating: 4.8,
    reviews: 3420,
    students: 8950,
    price: 89.99,
    originalPrice: 149.99,
    image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800',
    lastUpdated: 'December 2024',
    language: 'English',
    certificate: true,
    tags: ['Python', 'Trading APIs', 'Backtesting', 'Live Trading', 'Risk Management'],
    features: [
      'Basics of Options and Option Greeks',
'Backtesting using free tools',
'Python fundamentals and login data handling',
'Option selling and buying strategies using Python',
'Strategy development with indicators and support/resistance',
'Advanced Python-based trading strategies',
    ],
    
    curriculum: [
      {
        section: 'Introduction to Option Trading',
        lessons: [
  { title: 'Basics of Options', duration: '12:34', preview: true },
  { title: 'Options Greeks', duration: '18:22', preview: false },
  { title: 'Backtesting using Free Tools', duration: '15:45', preview: true },
  { title: 'Python Basics + Login Data', duration: '25:18', preview: false },
  { title: 'Option Selling Strategies (Python)', duration: '12:34', preview: true },
  { title: 'Option Buying Strategies (Python)', duration: '18:22', preview: false },
  { title: 'Indicator Strategies (Python)', duration: '15:45', preview: true },
  { title: 'Support/Resistance Strategies (Python)', duration: '25:18', preview: false },
  { title: 'Advanced Strategies (Python)', duration: '12:34', preview: true }
]

      },
      {
        section: 'Data Analysis and Visualization',
        lessons: [
          { title: 'Working with Financial Data', duration: '22:10', preview: false },
          { title: 'Technical Indicators in Python', duration: '28:45', preview: false },
          { title: 'Data Visualization Techniques', duration: '19:33', preview: false },
          { title: 'Statistical Analysis', duration: '24:55', preview: false }
        ]
      },
      {
        section: 'Building Trading Strategies',
        lessons: [
          { title: 'Strategy Development Framework', duration: '31:20', preview: false },
          { title: 'Moving Average Strategies', duration: '26:18', preview: false },
          { title: 'Mean Reversion Strategies', duration: '29:44', preview: false },
          { title: 'Momentum Strategies', duration: '27:12', preview: false }
        ]
      },
      {
        section: 'Backtesting and Optimization',
        lessons: [
          { title: 'Backtesting Fundamentals', duration: '23:15', preview: false },
          { title: 'Performance Metrics', duration: '20:30', preview: false },
          { title: 'Strategy Optimization', duration: '25:45', preview: false },
          { title: 'Avoiding Overfitting', duration: '18:22', preview: false }
        ]
      },
      {
        section: 'Risk Management',
        lessons: [
          { title: 'Position Sizing', duration: '21:18', preview: false },
          { title: 'Stop Loss Strategies', duration: '19:45', preview: false },
          { title: 'Portfolio Diversification', duration: '24:30', preview: false },
          { title: 'Risk Metrics and Monitoring', duration: '22:55', preview: false }
        ]
      },
      {
        section: 'Live Trading Implementation',
        lessons: [
          { title: 'Broker APIs and Integration', duration: '28:20', preview: false },
          { title: 'Order Management Systems', duration: '26:45', preview: false },
          { title: 'Real-time Data Handling', duration: '23:18', preview: false },
          { title: 'Monitoring and Alerts', duration: '20:15', preview: false }
        ]
      }
    ],
    review: [
      {
        name: 'Sarah Chen',
        avatar: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100',
        rating: 5,
        date: '2 weeks ago',
        comment: 'Excellent course! Aseem explains complex concepts clearly and the hands-on projects really helped me understand algorithmic trading. Already implementing strategies from the course.'
      },
      {
        name: 'Michael Rodriguez',
        avatar: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100',
        rating: 4,
        date: '1 month ago',
        comment: 'Best trading course I\'ve taken. The Python examples are practical and the backtesting section is incredibly detailed. Worth every penny!'
      },
      {
        name: 'Emma Johnson',
        avatar: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100',
        rating: 2,
        date: '3 weeks ago',
        comment: 'Great content and well-structured curriculum. The instructor is knowledgeable and provides good support. Some sections could be more beginner-friendly.'
      }
    ]
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'curriculum', label: 'Curriculum' },
    // { id: 'details', label: 'Details' },
    // { id: 'reviews', label: 'Reviews' }
  ];
// const navItems = [
//     { name: 'Courses', path: '/courses' },
//     { name: 'Ratings', path: '/ratings' },
//     { name: 'Testimonials', path: '/testimonials' },
//     { name: 'FAQ', path: '/faq' },
//     { name: 'Contact', path: '/contact' },
//   ];


  const renderOverview = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">About This Course</h3>
        <p className="text-gray-600 leading-relaxed mb-3">{course.aboutcourse}</p>
        <p className="text-gray-600 leading-relaxed mb-6">{course.more}</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">What You'll Learn</h4>
            <ul className="space-y-2">
              {course.featuresLearn.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Course Highlights </h4>
            <ul className="space-y-2">
              {course.coursehighlights.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Course Features</h4>
            <ul className="space-y-2">
              {course.coursefeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-gray-900 mb-3">Tags</h4>
        <div className="flex flex-wrap gap-2">
          {course.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCurriculum = () => (
    <div className="space-y-6">
      {course.curriculum.map((section, sectionIndex) => (
        <div key={sectionIndex} className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <h4 className="font-semibold text-gray-900">{section.section}</h4>
            <p className="text-sm text-gray-600 mt-1">{section.lessons.length} lessons</p>
          </div>
          <div className="divide-y divide-gray-200">
            {section.lessons.map((lesson, lessonIndex) => (
              <div key={lessonIndex} className="px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Play className="w-4 h-4 text-[#2563EB]" />
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900">{lesson.title}</h5>
                    {/* {lesson.preview && (
                      <span className="text-xs text-[#2563EB] font-medium">Preview Available</span>
                    )} */}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-[#24be79] font-semibold">LIVE</span>
                  {/* {lesson.preview && (
                    <button className="text-[#2563EB] hover:text-blue-700 text-sm font-medium">
                      Preview
                    </button>
                  )} */}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderInstructor = () => (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <div className="flex items-start gap-6">
        <img
          src={course.instructor.avatar}
          alt={course.instructor.name}
          className="w-24 h-24 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{course.instructor.name}</h3>
          <p className="text-[#2563EB] font-medium mb-4">{course.instructor.title}</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{course.instructor.rating}</div>
              <div className="text-sm text-gray-600">Instructor Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{course.instructor.students}</div>
              <div className="text-sm text-gray-600">Students</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{course.instructor.courses}</div>
              <div className="text-sm text-gray-600">Courses</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{course.instructor.experience}</div>
              <div className="text-sm text-gray-600">Experience</div>
            </div>
          </div>
          
          <p className="text-gray-600 leading-relaxed">
            Aseem is a renowned expert in algorithmic trading and artificial intelligence with over 15 years of experience in the financial technology sector. He holds a PhD in Neural Networks and has been at the forefront of developing cutting-edge trading algorithms for top-tier financial institutions.
          </p>
        </div>
      </div>
    </div>
  );

  const renderReviews = () => (
    <div className="space-y-6">
      <div className="bg-gray-50 rounded-lg p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-4xl font-bold text-gray-900">{course.rating}</div>
          <div>
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <p className="text-gray-600">{coursedetail.review.length} reviews</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {coursedetail.review.map((r, index) => (
          <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
            <div className="flex items-start gap-4">
              <img
                src={r.avatar}
                alt={r.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-semibold text-gray-900">{r.name}</h4>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-500">{r.date}</span>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < r.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600">{r.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      { segments[1] == "course" ?( <Navigation navItems={true} sincourse={false} />):<Navigation navItems={false} sincourse={true} />}
         <section className="relative bg-white">
      {/* Hero Image Section */}
      <div className="relative h-80 overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop" 
          alt="Trading and Analytics" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 sm:px-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {course.title.split(" ").slice(0, 2).join(" ")}
              <span className="block text-2xl sm:text-3xl md:text-4xl text-blue-200">{course.title.split(" ").slice(2, 4).join(" ")}</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              {course.description}
            </p>
          </div>
        </div>
      </div>

      {/* Course Stats */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
          <div className="bg-white rounded-lg p-3 sm:p-4 text-center shadow-lg border">
            <Users className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mx-auto mb-2" />
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{course.lessons}</h3>
            <p className="text-gray-600 text-xs sm:text-sm">Live Classes</p>
          </div>
          <div className="bg-white rounded-lg p-3 sm:p-4 text-center shadow-lg border">
            <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600 mx-auto mb-2" />
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{course.duration.slice(0,2)}</h3>
            <p className="text-gray-600 text-xs sm:text-sm">Hours Total</p>
          </div>
          <div className="bg-white rounded-lg p-3 sm:p-4 text-center shadow-lg border">
            <Award className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mx-auto mb-2" />
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">∞</h3>
            <p className="text-gray-600 text-xs sm:text-sm">Lifetime Access</p>
          </div>
          <div className="bg-white rounded-lg p-3 sm:p-4 text-center shadow-lg border">
            <Target className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600 mx-auto mb-2" />
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{course.doubt}</h3>
            <p className="text-gray-600 text-xs sm:text-sm">Doubt Sessions</p>
          </div>
        </div>

        {/* Perfect For Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-4">Perfect For</h2>
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-sm sm:text-base text-gray-700">Traders wanting to automate option strategies</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span className="text-sm sm:text-base text-gray-700">Beginners learning Python for financial markets</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-sm sm:text-base text-gray-700">Professionals moving beyond manual trading</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span className="text-sm sm:text-base text-gray-700">Anyone wanting to design & deploy strategies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
     <CourseStructure course={course}/>
     <Features/>
     <Outcomes/>
     








      {/* Hero Section */}
      {/* <div className="bg-gray-900 text-white">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${!cid ? 'py-12': 'py-20'}`}>
          {!cid && 
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors"
          >
            
            <ArrowLeft className="w-4 h-4" />
            Back to Courses
          </Link>
             }
            

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {course.type}
                </span>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {course.level}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl text-gray-300 mb-6">{course.description}</p>

              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-medium">{course.rating}</span>
                  <span className="text-gray-400">({course.reviews.toLocaleString()} reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4 text-gray-400" />
                  <span>{course.lessons} lessons</span>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-6">
                <img
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">Created by {course.instructor.name}</p>
                  <p className="text-sm text-gray-400">Last updated {course.lastUpdated}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg sticky top-24">
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-[#2563EB] ml-1" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-[#2563EB]">₹{course.price}</span>
                      {course.originalPrice && (
                        <span className="text-lg text-gray-400 line-through">₹{course.originalPrice}</span>
                      )}
                    </div>  
                      {course.originalPrice && (
                      <p className="text-sm text-green-600 font-medium">
                        {Math.round((1 - course.price / course.originalPrice) * 100)}% off limited time!
                      </p>)}
                  </div>

                  <div className="space-y-3 mb-6">
                    {cid ? (<button  onClick={() => {
    const section = document.getElementById('enroll-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }} className="w-full bg-blue-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                      Enroll Now
                    </button>):(
                      <Link to="/enrollment" ><button  className="w-full bg-blue-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                      Enroll Now
                    </button>
                    </Link>)}
                    
                
                  </div>

                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration} on-demand video</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      <span>Downloadable resources</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-4 h-4" />
                      <span>Access on mobile and desktop</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      <span>Lifetime access</span>
                    </div>
                    {course.certificate && (
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        <span>Certificate of completion</span>
                      </div>
                    )}
                  </div>

                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-12 py-8">
        <div className="lg:pr-80">

          <div className="border-b border-gray-200 mb-8">
            <nav className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-[#2563EB]'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="bg-white rounded-lg p-8">
            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'curriculum' && renderCurriculum()}

          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CourseDetailsPage;