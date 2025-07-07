import React, { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Search, Menu, X, User } from 'lucide-react';



interface NavigationProps {
  navItems: boolean;
  sincourse?: boolean; // optional if it might not always be passed
}

const Navigation: React.FC<NavigationProps> = ({ navItems, sincourse }) => {

   const { id } = useParams<{ id?: string }>();

// Prefer route param if available, else use `1` as default
const courseId = id ? parseInt(id) : 1;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // const navItems = [
  //   { name: 'Courses', path: '/courses' },
  //   { name: 'Ratings', path: '/ratings' },
  //   { name: 'Testimonials', path: '/testimonials' },
  //   { name: 'FAQ', path: '/faq' },
  //   { name: 'Contact', path: '/contact' },
  // ];
  const navItems1 = [
      { name: 'Courses', path: '/courses' },
      { name: 'Ratings', path: '/ratings' },
      { name: 'Testimonials', path: '/testimonials' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Contact', path: '/contact' },
    ];

const navItems2 = [
  { name: 'Ratings', path: `/buycourse/ratings/${courseId}` },
  { name: 'Testimonials', path: `/buycourse/testimonials/${courseId}` },
  { name: 'FAQ', path: `/buycourse/faq/${courseId}` },
  { name: 'Contact', path: `/buycourse/contacts/${courseId}` },
];
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          {sincourse? (<Link to={`/buycourse/${courseId}`} className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Aseem Singhal</span>
          </Link>):(
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Aseem Singhal</span>
          </Link>)}
          {/* Search Bar - Desktop */}
          {/* <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Want to learn?"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div> */}

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems ? (
  navItems1.map((item) => (
    <Link
      key={item.name}
      to={item.path}
      className={`font-medium transition-colors ${
        location.pathname === item.path
          ? 'text-[#2563EB]'
          : 'text-gray-700 hover:text-[#2563EB]'
      }`}
    >
      {item.name}
    </Link>
  ))
) : (
  navItems2.map((item) => (
    <Link
      key={item.name}
      to={item.path}
      className={`font-medium transition-colors ${
        location.pathname === item.path
          ? 'text-[#2563EB]'
          : 'text-gray-700 hover:text-[#2563EB]'
      }`}
    >
      {item.name}
    </Link>
  ))
)}

            
          </div>

          {/* Auth Buttons - Desktop */}
          {!sincourse && <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-[#2563eb] font-medium transition-colors">
              Sign in
            </button>
            <Link
              to="/enrollment"
              className="bg-[#2563EB] text-white px-4 py-2 rounded-full hover:bg-[#2852ad] transition-colors font-medium"
            >
              Register for Free
            </Link>
          </div> }
          

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-[#2563EB] transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Search */}
              {/* <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Want to learn?"
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:border-blue-500"
                />
              </div> */}
              {navItems ? (
  navItems1.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))
) : (
  navItems2.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))
)}

              {!sincourse &&
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="space-y-2">
                  <button className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-[#2563EB] transition-colors">
                    Sign in
                  </button>
                  <Link
                    to="/enrollment"
                    className="block w-full bg-[#2563EB] text-white px-3 py-2 rounded-full hover:bg-[#2852ad] transition-colors font-medium text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Register For Free
                  </Link>
                </div>
              </div>
               }
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;