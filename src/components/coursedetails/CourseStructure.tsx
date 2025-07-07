import React from 'react';
import { TrendingUp, Calculator, Code, TestTube, Link, Target, Activity, BarChart3, MapPin, Settings } from 'lucide-react';


const courses = [
  {
    id: 1,
    title: "Option Basics",
    icon: TrendingUp,
    description: "Calls, Puts, Strike Price, Expiry",
    details: ["Payoff Diagrams: Profit/Loss Scenarios", "Intrinsic vs Extrinsic Value", "Moneyness (ITM, ATM, OTM)", "Option Chain Interpretation"]
  },
  {
    id: 2,
    title: "Option Greeks",
    icon: Calculator,
    description: "Delta, Gamma, Theta, Vega, Rho explained intuitively",
    details: ["How Greeks affect option pricing", "Using Greeks to manage risk", "Improve strategy design"]
  },
  {
    id: 3,
    title: "Python Basics",
    icon: Code,
    description: "Python installation and setup",
    details: ["Variables and Lists", "Loops, functions, conditional logic", "Reading Excel/CSV/JSON data", "User defined Functions"]
  },
  {
    id: 4,
    title: "Backtesting Strategies",
    icon: TestTube,
    description: "Testing your trading strategies",
    details: ["Backtesting option buying strategies", "Backtesting option selling strategies", "Risk Management", "Position Sizing"]
  },
  {
    id: 5,
    title: "Broker Connection",
    icon: Link,
    description: "Introduction to broker APIs (Zerodha, AliceBlue, etc.)",
    details: ["API keys and authentication", "Placing orders via Python", "Handling live price feed", "Paper trading vs real money execution"]
  },
  {
    id: 6,
    title: "Option Strategy Implementation Python",
    icon: Target,
    description: "Long Call / Long Put",
    details: ["Bull Call Spread / Bear Put Spread", "Python implementation of strategy", "Entry/Exit logic, risk-reward modeling"]
  },
  {
    id: 7,
    title: "Option Strategy Implementation - Continued",
    icon: Activity,
    description: "Straddle, Strangle, Iron Condor, Iron Butterfly",
    details: ["Building multi-leg strategies in code", "Automatic find correct strike price", "Risk control with limited loss strategies"]
  },
  {
    id: 8,
    title: "Indicator Strategy",
    icon: BarChart3,
    description: "RSI, MACD, Moving Averages",
    details: ["Works in Equity, Futures and Options", "Combining indicators with option trades", "Strategy design: Entry/Exit logic", "Multi timeframe strategies"]
  },
  {
    id: 9,
    title: "Level Strategy",
    icon: MapPin,
    description: "Support and Resistance",
    details: ["Breakout vs Reversal", "Volume confirmation logic", "Both intraday and Positional Strategies", "Multi Broker Strategies"]
  },
  {
    id: 10,
    title: "Advanced Strategy Coding",
    icon: Settings,
    description: "Advanced trading strategies implementation",
    details: ["Combined Premium Strategy", "Supertrend Strategy", "Opening Range Breakout", "Inside Bar Strategy"]
  }
];
import type { Course } from './../../data/courseData'; // path to your type file

interface Props {
  course: Course;
}

const CourseStructure: React.FC<Props> = ({ course }) => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Course Structure: {courses.length} Live Classes
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            {course.more}
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-4 sm:p-5">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <course.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-blue-600 mb-1">Class {course.id}</div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900">{course.title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-3 font-medium text-xs sm:text-sm">{course.description}</p>
                
                <ul className="space-y-1">
                  {course.details.map((detail, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-1 h-1 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-xs sm:text-xs text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default CourseStructure;