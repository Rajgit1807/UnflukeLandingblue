import React from 'react';
import { Star, Quote, TrendingUp, Award, Users } from 'lucide-react';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';



interface NavigationProps {
  navItems: boolean;
  sincourse?: boolean; // optional if it might not always be passed
}

const TestimonialsPage: React.FC<NavigationProps> = ({ navItems, sincourse }) => {

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const testimonials = [
    {
      name: 'Rohan Khattar',
      role: 'Software Engineer — Systematic Trader',
      avatar: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5,
      comment: "I was skeptical about another trading course but this was different. The systematic approach to learning options trading changed everything. The step-by-step methodology made complex concepts finally click for me.",
      achievement: 'Achievement: Mastered systematic trading',
      transformation: 'Transformation: From confused beginner → Confident systematic trader'
    },
    {
      name: 'Sahil Kumar',
      role: 'Financial Analyst — Options Trader',
      avatar: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5,
      comment: "The course content is incredibly detailed and practical. Aseem's teaching style makes even the most complex trading strategies easy to understand. I've already implemented several strategies successfully.",
      achievement: 'Achievement: Mastered systematic trading',
      transformation: 'Transformation: From confused beginner → Confident systematic trader'
    }
  ];

  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Students Taught',
      description: 'Across all courses'
    },
    {
      icon: TrendingUp,
      value: '85%',
      label: 'Completion Rate',
      description: 'Finish the full course'
    },
    {
      icon: Award,
      value: '4.7',
      label: 'Average Rating',
      description: 'From 300+ Reviews'
    }
  ];
// const navItems = [
//     { name: 'Courses', path: '/courses' },
//     { name: 'Ratings', path: '/ratings' },
//     { name: 'Testimonials', path: '/testimonials' },
//     { name: 'FAQ', path: '/faq' },
//     { name: 'Contact', path: '/contact' },
//   ];



  return (
    <div className="pt-20 min-h-screen bg-[#f5fafc]">
                 <Navigation navItems={navItems} sincourse={sincourse}/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Students, Real Learning
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take my word for it. Here's how students transformed their 
            understanding of trading.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
           {/* Regular YouTube Video */}
           {/* Regular YouTube Video */}
<div>
  <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/YNPbB4jUuxo"
      title="YouTube video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
  <p className="italic mt-4 text-center text-gray-600 text-sm">
    — Sachin Mutha · “This course changed my trading journey completely.”
  </p>
</div>

{/* YouTube Short */}
<div>
  <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/pIw_khE7-YU"
      title="YouTube Short"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
  <p className="italic mt-4 text-center text-gray-600 text-sm">
    — Srinivas · “A glimpse into real results with dedication.”
  </p>
</div>

    
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                  <p className="text-[#2563EB] font-medium">{testimonial.role}</p>
                  <div className="flex items-center gap-1 mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-200" />
                <p className="text-gray-600 leading-relaxed pl-6">
                  "{testimonial.comment}"
                </p>
              </div>

              <div className="space-y-3">
                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Award className="w-4 h-4 text-[#2563EB]" />
                    <span className="text-sm font-medium text-blue-800">Achievement</span>
                  </div>
                  <p className="text-sm text-blue-700">{testimonial.achievement}</p>
                </div>

                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-800">Transformation</span>
                  </div>
                  <p className="text-sm text-blue-700">{testimonial.transformation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See All Button */}
        <div className="text-center mb-16">
          <button onClick={scrollToBottom} className="border-2 border-blue-600 text-[#2563EB] px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-colors">
            See all
          </button>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Join 500+ Successful Students
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                  index === 0 ? 'bg-blue-600' : 
                  index === 1 ? 'bg-blue-100' : 'bg-yellow-100'
                }`}>
                  <stat.icon className={`w-10 h-10 ${
                    index === 0 ? 'text-white' :
                    index === 1 ? 'text-blue-600' : 'text-yellow-600'
                  }`} />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            These aren't just testimonials - they're real people who decided to 
            master systematic trading. Your learning journey could be next.
          </h2>
          {sincourse ? (
          <button className="bg-white text-[#2563EB] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors text-lg mt-6">
            Go To Register For Free
          </button>
          ): ( <Link to="/enrollment">
          <button className="bg-white text-[#2563EB] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors text-lg mt-6">
            Go To Register For Free
          </button>
          </Link>)}
         
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;