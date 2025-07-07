import React from 'react';
import { CheckCircle, ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const outcomes = [
  "Design and backtest your own option strategies",
  "Code live trading bots using Python",
  "Connect to real broker APIs for execution",
  "Understand Greeks and adjust trades smartly",
  "Use technical and price-level strategies with confidence"
];

interface CourseDetailsPageProps {
  cid?: number; // Make optional in case it's not passed
}

const Outcomes: React.FC<CourseDetailsPageProps> = ({ cid }) => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Final Outcomes
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6">
              By the end of the program, you'll be able to:
            </p>

            <div className="space-y-3 sm:space-y-4 mb-6">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base text-gray-900 font-medium">{outcome}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4 sm:p-6 text-white text-center">
              <h3 className="text-lg sm:text-xl font-bold mb-2">Ready to Transform Your Trading?</h3>
              <p className="text-blue-100 mb-4 text-xs sm:text-sm">
                Join hundreds of successful traders who have automated their strategies using Python
              </p>
               {cid ? (<button  onClick={() => {
    const section = document.getElementById('enroll-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }} className="bg-white text-blue-600 px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg flex items-center space-x-2 mx-auto text-sm sm:text-base">
                <span>Enroll Now</span>
                <ArrowRight className="h-4 w-4" />
              </button>):(
                      <Link to="/enrollment" ><button  className="bg-white text-blue-600 px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg flex items-center space-x-2 mx-auto text-sm sm:text-base">
                <span>Enroll Now</span>
                <ArrowRight className="h-4 w-4" />
              </button>
                    </Link>)}

              {/* <button className="bg-white text-blue-600 px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg flex items-center space-x-2 mx-auto text-sm sm:text-base">
                <span>Enroll Now</span>
                <ArrowRight className="h-4 w-4" />
              </button> */}
              <div className="mt-4 text-xs text-blue-100">
                <p>💡 Limited seats available • 🎯 100% satisfaction guarantee</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop" 
              alt="Trading Success" 
              className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="font-semibold text-sm sm:text-base">Transform Your Trading Journey</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Outcomes;