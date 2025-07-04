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
    aboutcourse: 'This hands-on course is designed to take you from options trading basics to building powerful strategies using Python. You’ll learn how to backtest trades using free tools, automate both option buying and selling strategies, and apply advanced logic to real market scenarios using indicators and support/resistance levels.',
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
      'Basics of Options and Option Greeks',
'Backtesting using free tools',
'Python fundamentals and login data handling',
'Option selling and buying strategies using Python',
'Strategy development with indicators and support/resistance',
'Advanced Python-based trading strategies',
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
    aboutcourse: 'This hands-on course is designed to take you from options trading basics to building powerful strategies using Python. You’ll learn how to backtest trades using free tools, automate both option buying and selling strategies, and apply advanced logic to real market scenarios using indicators and support/resistance levels.',
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
      'Basics of Options and Option Greeks',
'Backtesting using free tools',
'Python fundamentals and login data handling',
'Option selling and buying strategies using Python',
'Strategy development with indicators and support/resistance',
'Advanced Python-based trading strategies',
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
