import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';



interface NavigationProps {
  navItems: boolean;
  sincourse?: boolean; // optional if it might not always be passed
}

const FAQPage: React.FC<NavigationProps> = ({ navItems, sincourse }) => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "What is included in the algorithmic trading course?",
      answer: "The course includes comprehensive video lessons covering Python programming for finance, trading algorithm development, backtesting strategies, risk management, and live trading implementation. You'll also get downloadable resources, code examples, and lifetime access to course updates."
    },
    {
      question: "Do I need prior programming experience?",
      answer: "No prior programming experience is required. The course starts with Python basics specifically for trading applications and gradually builds up to advanced concepts. However, basic computer literacy and willingness to learn are essential."
    },
    {
      question: "How long do I have access to the course content?",
      answer: "You get lifetime access to all course materials, including future updates and new content additions. Once enrolled, you can learn at your own pace and revisit the content anytime."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Yes, we offer a 7-day money-back guarantee. If you're not satisfied with the course content within the first 7 days, you can request a full refund, no questions asked."
    },
    {
      question: "Can I get help if I'm stuck on something?",
      answer: "Absolutely! There are hand holding sessions that are offered to help in case you get stuck."},
    {
      question: "What trading platforms are covered in the course?",
      answer:"Multiple trading platforms are used such as Groww, Fyers, Zerodha, Angel, ICICI, Nuvama, Upstox, Aliceblue, IIFL and Shoonya."
    },
    {
      question: "Are the strategies suitable for different market conditions?",
      answer: "Yes, the course covers various strategies including trend-following, mean reversion, and volatility-based approaches. You'll learn how to adapt strategies for different market conditions and how to build robust systems."
    },
    {
      question: "Do I need a large amount of capital to start?",
      answer: "No, you can start with a small amount of capital. The course emphasizes proper risk management and position sizing. Many strategies can be tested and implemented with modest capital, and we cover paper trading for practice."
    }
  ];

  const toggleFAQ = (index:any) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
           

  return (
    <div className="pt-20 min-h-screen bg-[#f5fafc]">
      <Navigation navItems={navItems} sincourse={sincourse}/>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-[#2563EB]" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find the answers to your questions here
          </h1>
          <p className="text-xl text-gray-600">
            Everything you need to know about our courses and learning platform.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-[#2563EB]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-3xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Still have questions?
          </h2>
          <p className="mb-6 opacity-90">
            Can't find the answer you're looking for? Please chat with our friendly team.
          </p>
          <Link
                        to='/contact'
                      >
          <button className="bg-white text-[#2563EB] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Contact Support
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;