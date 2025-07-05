export interface Lesson {
  title: string;
  duration: string;
  preview: boolean;
}

export interface CurriculumSection {
  section: string;
  lessons: Lesson[];
}

export interface Instructor {
  name: string;
  title: string;
  avatar: string;
  experience: string;
  students: string;
  courses: number;
  rating: number;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  aboutcourse: string;
  more:string;
  category: string;
  level: string;
  type: string;
  duration: string;
  lessons: number;
  rating: number;
  students: number;
  price: number;
  reviews: number;
  originalPrice: number | null;
  featuresLearn: string[];
  coursefeatures: string[];
  coursehighlights:string[];
  curriculum: CurriculumSection[];
  instructor: Instructor;
  image: string;
  tags: string[];
  isNew: boolean;
  isPopular: boolean;
  lastUpdated: string;
  certificate: boolean;
}


export const courseData: Course[] = [

  // Existing merged 9 courses (shown before)...

  {
    id: 1,
    title: 'Groww Algo Mastery',
    description: 'A complete guide to building and deploying algos for Groww’s trading ecosystem.',
    aboutcourse:"This is a hands-on, deployment-focused program where you'll learn how to build, automate, and execute trading strategies using Groww APIs — even if you're new to coding or automation",
    more:"We start from the basics of how Groww APIs work and then dive deep into Python integration, strategy automation, order placement, and portfolio monitoring — all using real market data and paper/live trading environments.",
    category: 'Trading',
    level: 'Intermediate',
    type: 'Live',
    duration: '11 hr 25 mins',
    lessons: 35,
    rating: 4.7,
    students: 180,
    price: 7999,
    reviews: 125,
    originalPrice: null,
    featuresLearn: [
      'Groww account setup & developer access',
'Python setup and API integration (no prior coding experience needed)',
'Fetching live market data from Groww',
'Placing & modifying orders programmatically',
'Building buy/sell logic with indicators and signals',
'Automating complete strategy cycles',
'Logging, error handling & live deployment'

    ],
     coursehighlights: [
'10 Live Sessions with Aseem focused on Groww ecosystem',
'10 Hand-Holding Sessions for doubt-solving and debugging',
'Session Recordings Available for lifetime review',
'Live examples of deploying actual strategies using Groww APIs',
    ],
    coursefeatures: [
'Certificate of Completion',
'Direct Instructor Support',
'Lifetime Access to All Course Content',
'Access to Private Groww Algo Community (WhatsApp/Discord)',
'Regular Updates with API changes, new strategies & best practices'

    ],
    curriculum: [
      {
        section: 'Groww Algo Mastery',
        lessons: [
  { title: 'Basics of Options', duration: '12:34', preview: true },
  { title: 'Options Greeks', duration: '18:22', preview: false },
  { title: 'Backtesting using Free Tools', duration: '15:45', preview: true },
  { title: 'Basics of Python', duration: '25:18', preview: false },
  { title: 'Broker Connection', duration:'10:15', preview: false},
  { title: 'Option Selling Strategies (Python)', duration: '12:34', preview: true },
  { title: 'Option Buying Strategies (Python)', duration: '18:22', preview: false },
  { title: 'Indicator Strategies (Python)', duration: '15:45', preview: true },
  { title: 'Support/Resistance Strategies (Python)', duration: '25:18', preview: false },
  { title: 'Advanced Strategies (Python)', duration: '12:34', preview: true }
]
      }],
    instructor: {
      name: 'Aseem Singhal',
      title: 'Senior Director at ModernAI',
      avatar: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100',
      experience: '15+ years',
      students: '12,000+',
      courses: 8,
      rating: 4.9
    },
    image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Groww', 'Algo Trading', 'Live'],
    isNew: false,
    isPopular: true,
    lastUpdated: 'December 2024',
    certificate: true,
  },
  {
    id: 2,
    title: 'Algo Trading with Python',
    description: 'Master strategy creation, automation using Python, technical indicators, options & API integration.',
    aboutcourse: 'This is a hands-on, project-based program that teaches you how to build and automate options trading strategies using Python — from scratch.',
    more:'Start with the basics of options and Greeks, move into Python fundamentals, and then unlock the power of backtesting, broker connectivity, and live automation. By the end, you’ll have the skills to build your own full-fledged algorithmic trading systems.',
    category: 'Trading',
    level: 'Advanced',
    type: 'Live',
    duration: '10 hr 2 mins',
    lessons: 40,
    rating: 4.8,
    students: 3500,
    price: 7999,
    reviews: 1325,
    originalPrice: null,
    featuresLearn: [
      'Python setup for traders — no prior coding needed', 
      'Backtesting using free tools and datasets',
       'Connecting with brokers for live execution',
        'Option buying and selling strategies using Python',
         'Indicator-based and support/resistance strategies',
       'Advanced logic for multi-leg and risk-managed strategies'
    ],
    coursehighlights: [
'10 Live Sessions with Aseem (real-time learning & coding)',
'10 Hand-Holding Doubt Sessions (1:1 style support)',
'Session Recordings Provided for lifetime review',
'Project-based learning with real trading examples'
    ],
    coursefeatures: [
'Certificate of Completion',
'Direct Instructor Support',
'Lifetime Access to All Course Content',
'Access to Private Trading Community (via WhatsApp/Discord)',
'Regular Updates with New Strategies & Tools',
    ],
    curriculum: [
      {
        section: 'Algo Trading with Python',
        lessons: [
  { title: 'Basics of Options', duration: '12:34', preview: true },
  { title: 'Options Greeks', duration: '18:22', preview: false },
  { title: 'Backtesting using Free Tools', duration: '15:45', preview: true },
  { title: 'Basics of Python', duration: '25:18', preview: false },
  { title: 'Broker Connection', duration:'10:15', preview: false},
  { title: 'Option Selling Strategies (Python)', duration: '12:34', preview: true },
  { title: 'Option Buying Strategies (Python)', duration: '18:22', preview: false },
  { title: 'Indicator Strategies (Python)', duration: '15:45', preview: true },
  { title: 'Support/Resistance Strategies (Python)', duration: '25:18', preview: false },
  { title: 'Advanced Strategies (Python)', duration: '12:34', preview: true }
]
      }],
    instructor: {
      name: 'Aseem Singhal',
      title: 'Senior Director at ModernAI',
      avatar: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100',
      experience: '15+ years',
      students: '12,000+',
      courses: 8,
      rating: 4.9
    },
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Python', 'Automation', 'API'],
    isNew: false,
    isPopular: true,
    lastUpdated: 'December 2024',
    certificate: true,
  },
  {
    id: 3,
    title: 'HFT Trading Using C++',
    description: 'Deep dive into low-latency trading system design using C++.',
    aboutcourse: 'This hands-on course is designed to take you from options trading basics to building powerful strategies using Python. You’ll learn how to backtest trades using free tools, automate both option buying and selling strategies, and apply advanced logic to real market scenarios using indicators and support/resistance levels.',
    more:'',
    category: 'Trading',
    level: 'Advanced',
    type: 'Live',
    duration: '16 hr 3 mins',
    lessons: 50,
    rating: 4.6,
    students: 210,
    price: 49999,
    reviews: 52,
    originalPrice: null,
    featuresLearn: [
      'Basics of Options and Option Greeks',
'Backtesting using free tools',
'Python fundamentals and login data handling',
'Option selling and buying strategies using Python',
'Strategy development with indicators and support/resistance',
'Advanced Python-based trading strategies',
    ],
     coursehighlights: [
'✅ 10 Live Sessions with Aseem (real-time learning & coding)',
'✅ 10 Hand-Holding Doubt Sessions (1:1 style support)',
'✅ Session Recordings Provided for lifetime review',
'✅ Project-based learning with real trading examples'
    ],
    coursefeatures: [
'Certificate of completion',
'Direct instructor support',
'Lifetime access to all course content',
'Access to private trading community',
'Regular updates with new strategies and content'
    ],
    curriculum: [
      {
        section: 'HFT Trading Using C++',
        lessons: [
  { title: 'Basics of Options', duration: '12:34', preview: true },
  { title: 'Options Greeks', duration: '18:22', preview: false },
  { title: 'Backtesting using Free Tools', duration: '15:45', preview: true },
  { title: 'Basics of Python', duration: '25:18', preview: false },
  { title: 'Broker Connection', duration:'10:15', preview: false},
  { title: 'Option Selling Strategies (Python)', duration: '12:34', preview: true },
  { title: 'Option Buying Strategies (Python)', duration: '18:22', preview: false },
  { title: 'Indicator Strategies (Python)', duration: '15:45', preview: true },
  { title: 'Support/Resistance Strategies (Python)', duration: '25:18', preview: false },
  { title: 'Advanced Strategies (Python)', duration: '12:34', preview: true }
]
      }],
    instructor: {
      name: 'Aseem Singhal',
      title: 'Senior Director at ModernAI',
      avatar: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100',
      experience: '15+ years',
      students: '12,000+',
      courses: 8,
      rating: 4.9
    },
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['HFT', 'C++', 'Low Latency'],
    isNew: false,
    isPopular: false,
    lastUpdated: 'December 2024',
    certificate: true,

  },
  {
    id: 4,
    title: 'Backtesting Using Python',
    description: 'Learn how to simulate and validate trading strategies using real historical data. From loading data to evaluating performance, master the core skills to build your own backtester in Python.',
    aboutcourse: 'This hands-on course is designed to take you from options trading basics to building powerful strategies using Python. You’ll learn how to backtest trades using free tools, automate both option buying and selling strategies, and apply advanced logic to real market scenarios using indicators and support/resistance levels.',
    more:'',
    category: 'Python',
    level: 'Intermediate',
    type: 'Recorded',
    duration: '10 hr 25 mins',
    lessons: 38,
    rating: 4.7,
    students: 2150,
    price: 29999,
    reviews: 1250,
    originalPrice: 39999,
    featuresLearn: [
      'Basics of Options and Option Greeks',
'Backtesting using free tools',
'Python fundamentals and login data handling',
'Option selling and buying strategies using Python',
'Strategy development with indicators and support/resistance',
'Advanced Python-based trading strategies',
    ],
     coursehighlights: [
'✅ 10 Live Sessions with Aseem (real-time learning & coding)',
'✅ 10 Hand-Holding Doubt Sessions (1:1 style support)',
'✅ Session Recordings Provided for lifetime review',
'✅ Project-based learning with real trading examples'
    ],
    coursefeatures: [
'Certificate of completion',
'Direct instructor support',
'Lifetime access to all course content',
'Access to private trading community',
'Regular updates with new strategies and content'
    ],
    curriculum: [
      {
        section: 'Backtesting Using Python',
        lessons: [
  { title: 'Basics of Options', duration: '12:34', preview: true },
  { title: 'Options Greeks', duration: '18:22', preview: false },
  { title: 'Backtesting using Free Tools', duration: '15:45', preview: true },
  { title: 'Basics of Python', duration: '25:18', preview: false },
  { title: 'Broker Connection', duration:'10:15', preview: false},
  { title: 'Option Selling Strategies (Python)', duration: '12:34', preview: true },
  { title: 'Option Buying Strategies (Python)', duration: '18:22', preview: false },
  { title: 'Indicator Strategies (Python)', duration: '15:45', preview: true },
  { title: 'Support/Resistance Strategies (Python)', duration: '25:18', preview: false },
  { title: 'Advanced Strategies (Python)', duration: '12:34', preview: true }
]
      }],
    instructor: {
      name: 'Aseem Singhal',
      title: 'Senior Director at ModernAI',
      avatar: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100',
      experience: '15+ years',
      students: '12,000+',
      courses: 8,
      rating: 4.9
    },
    image: 'https://images.pexels.com/photos/6693652/pexels-photo-6693652.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Python', 'Backtesting', 'Strategy Evaluation', 'Historical Data'],
    isNew: false,
    isPopular: false,
    lastUpdated: 'December 2024',
    certificate: true,

  },
  {
    id: 5,
    title: 'Basics of Options',
    description: 'A beginner-friendly introduction to call & put options, option greeks, and payoff structures. Understand the logic behind option pricing and strategies with practical Indian market examples.',
    aboutcourse: 'This hands-on course is designed to take you from options trading basics to building powerful strategies using Python. You’ll learn how to backtest trades using free tools, automate both option buying and selling strategies, and apply advanced logic to real market scenarios using indicators and support/resistance levels.',
    more:'',
    category: 'Options',
    level: 'Beginner',
    type: 'Recorded',
    duration: '4 hr 10 mins',
    lessons: 22,
    rating: 4.5,
    students: 3200,
    price: 3999,
    reviews: 2480,
    originalPrice: 5499,
featuresLearn: [
      'Basics of Options and Option Greeks',
'Backtesting using free tools',
'Python fundamentals and login data handling',
'Option selling and buying strategies using Python',
'Strategy development with indicators and support/resistance',
'Advanced Python-based trading strategies',
    ],
     coursehighlights: [
'✅ 10 Live Sessions with Aseem (real-time learning & coding)',
'✅ 10 Hand-Holding Doubt Sessions (1:1 style support)',
'✅ Session Recordings Provided for lifetime review',
'✅ Project-based learning with real trading examples'
    ],
    coursefeatures: [
'Certificate of completion',
'Direct instructor support',
'Lifetime access to all course content',
'Access to private trading community',
'Regular updates with new strategies and content'
    ],
    curriculum: [
      {
        section: 'Basics of Options',
        lessons: [
  { title: 'Basics of Options', duration: '12:34', preview: true },
  { title: 'Options Greeks', duration: '18:22', preview: false },
  { title: 'Backtesting using Free Tools', duration: '15:45', preview: true },
  { title: 'Basics of Python', duration: '25:18', preview: false },
  { title: 'Broker Connection', duration:'10:15', preview: false},
  { title: 'Option Selling Strategies (Python)', duration: '12:34', preview: true },
  { title: 'Option Buying Strategies (Python)', duration: '18:22', preview: false },
  { title: 'Indicator Strategies (Python)', duration: '15:45', preview: true },
  { title: 'Support/Resistance Strategies (Python)', duration: '25:18', preview: false },
  { title: 'Advanced Strategies (Python)', duration: '12:34', preview: true }
]
      }],
    instructor: {
      name: 'Aseem Singhal',
      title: 'Senior Director at ModernAI',
      avatar: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100',
      experience: '15+ years',
      students: '12,000+',
      courses: 8,
      rating: 4.9
    },
    image: 'https://images.pexels.com/photos/4386374/pexels-photo-4386374.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Options', 'Greeks', 'Payoff Diagrams', 'Indian Markets'],
    isNew: false,
    isPopular: false,
    lastUpdated: 'December 2024',
    certificate: true,
  },
  {
    id: 6,
    title: 'Basics of Stock Market',
    description: 'Demystify how the stock market works—from IPOs to indices and beyond. Ideal for beginners, this course simplifies concepts like equity, demat, brokers, and market behavior in the Indian context.',
    aboutcourse: 'This hands-on course is designed to take you from options trading basics to building powerful strategies using Python. You’ll learn how to backtest trades using free tools, automate both option buying and selling strategies, and apply advanced logic to real market scenarios using indicators and support/resistance levels.',
    more:'',
    category: 'Stock Market',
    level: 'Beginner',
    type: 'Recorded',
    duration: '11 hr 25 mins',
    lessons: 30,
    rating: 4.6,
    students: 3115,
    price: 2999,
    reviews: 2100,
    originalPrice: 4499,
     featuresLearn: [
      'Basics of Options and Option Greeks',
'Backtesting using free tools',
'Python fundamentals and login data handling',
'Option selling and buying strategies using Python',
'Strategy development with indicators and support/resistance',
'Advanced Python-based trading strategies',
    ],
     coursehighlights: [
'✅ 10 Live Sessions with Aseem (real-time learning & coding)',
'✅ 10 Hand-Holding Doubt Sessions (1:1 style support)',
'✅ Session Recordings Provided for lifetime review',
'✅ Project-based learning with real trading examples'
    ],
    coursefeatures: [
'Certificate of completion',
'Direct instructor support',
'Lifetime access to all course content',
'Access to private trading community',
'Regular updates with new strategies and content'
    ],
    curriculum: [
      {
        section: 'Basics of Stock Market',
        lessons: [
  { title: 'Basics of Options', duration: '12:34', preview: true },
  { title: 'Options Greeks', duration: '18:22', preview: false },
  { title: 'Backtesting using Free Tools', duration: '15:45', preview: true },
  { title: 'Basics of Python', duration: '25:18', preview: false },
  { title: 'Broker Connection', duration:'10:15', preview: false},
  { title: 'Option Selling Strategies (Python)', duration: '12:34', preview: true },
  { title: 'Option Buying Strategies (Python)', duration: '18:22', preview: false },
  { title: 'Indicator Strategies (Python)', duration: '15:45', preview: true },
  { title: 'Support/Resistance Strategies (Python)', duration: '25:18', preview: false },
  { title: 'Advanced Strategies (Python)', duration: '12:34', preview: true }
]

      }],
    instructor:{
      name: 'Aseem Singhal',
      title: 'Senior Director at ModernAI',
      avatar: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100',
      experience: '15+ years',
      students: '12,000+',
      courses: 8,
      rating: 4.9
    },
    image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Options', 'Trading Python', 'Backtesting Strategy', 'Automation', 'Risk Management'],
    isNew: false,
    isPopular: false,
    lastUpdated: 'December 2024',
    certificate: true,

  }
];
