import React, { useState } from 'react';
import { Calendar, CreditCard, User, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import {courseData} from "./../data/courseData"
import Navigation from '../components/Navigation';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';

interface Enrollmentprops {
  navhide: boolean; 
   cid?: number;
}

const EnrollmentPage: React.FC<Enrollmentprops> = ({ navhide, cid }) => {

const location = useLocation();
  const segments = location.pathname.split('/'); 
  
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    course: 'Groww Algo Mastery',
    paymentMethod: 'card'
  });


  // const courses = [
  //   {
  //     id: 'algorithmic-trading',
  //     title: 'Complete Algorithmic Trading Masterclass',
  //     price: 89.99,
  //     originalPrice: 149.99,
  //     duration: '12hrs 30min',
  //     lessons: 45
  //   },
  //   {
  //     id: 'technical-analysis',
  //     title: 'Technical Analysis Fundamentals',
  //     price: 59.99,
  //     originalPrice: 99.99,
  //     duration: '8hrs 45min',
  //     lessons: 32
  //   },
  //   {
  //     id: 'options-trading',
  //     title: 'Advanced Options Trading Strategies',
  //     price: 129.99,
  //     originalPrice: 199.99,
  //     duration: '15hrs 20min',
  //     lessons: 58
  //   }
  // ];

  const selectedCourse = courseData.find(course => course.title === formData.course);

  const handleInputChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    console.log(formData)
  };

 const handleNextStep = () => {
  if (currentStep === 1) {
    const { fullName, email, phone, course } = formData;

    const isValid =
      fullName.trim() !== '' &&
      email.trim() !== '' &&
      email.includes('@') &&
      phone.trim() !== '' &&
      course.trim() !== '';

    if (!isValid) {
      alert('Please fill all required fields correctly before proceeding.');
      return;
    }
  }

  if (currentStep < 3) {
    setCurrentStep(currentStep + 1);
  }
};

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3].map((step) => (
        <div key={step} className="flex items-center">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
            currentStep >= step 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-600'
          }`}>
            {currentStep > step ? <CheckCircle className="w-5 h-5" /> : step}
          </div>
          {step < 3 && (
            <div className={`w-16 h-1 mx-2 ${
              currentStep > step ? 'bg-blue-600' : 'bg-gray-200'
            }`}></div>
          )}
        </div>
      ))}
    </div>
  );

const isStep1Valid = () => {
  const { fullName, email, phone, course } = formData;
  return (
    fullName.trim() !== '' &&
    email.trim() !== '' &&
    email.includes('@') &&
    phone.trim() !== '' &&
    course.trim() !== ''
  );
};

  const renderStep1 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Enrollment Form</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Enter your full name"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Enter your phone number"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Address
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Enter your address"
            />
          </div>
        </div>
      </div>

      <div>
        {cid ? (<label className="block text-sm font-medium text-gray-700 mb-2">
          Course:
        </label>) : (<label className="block text-sm font-medium text-gray-700 mb-2">
          Choose one of the {courseData.length} course *
        </label>)}
        {cid ? (<select
          name="course"
          value={formData.course}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors appearance-none bg-white"          
          required
        >
            <option >
              {courseData[cid-1].title}
            </option>
        </select>):( <select
          name="course"
          value={formData.course}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
          required
        >
          {courseData.map((course) => (
            <option key={course.id} value={course.title}>
              {course.title}
            </option>
          ))}
        </select>)}
       
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment</h2>
      
      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <h3 className="font-semibold text-gray-900 mb-2">Selected Course</h3>
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium text-gray-900">{selectedCourse?.title} MasterClass</p>
            <p className="text-sm text-gray-600">
              {selectedCourse?.duration} • {selectedCourse?.lessons} lessons
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-[#2563EB]">₹0</div>
            {selectedCourse?.originalPrice && (
              <div className="text-sm text-gray-400 line-through">
                ₹999
              </div>
            )}
          </div>
        </div>
      </div>

      {/* <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Payment Method
        </label>
        <div className="space-y-3">
          <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
            <input
              type="radio"
              name="paymentMethod"
              value="card"
              checked={formData.paymentMethod === 'card'}
              onChange={handleInputChange}
              className="text-[#2563EB] focus:ring-blue-500"
            />
            <CreditCard className="w-5 h-5 text-gray-400 mx-3" />
            <span className="font-medium text-gray-900">Credit/Debit Card</span>
          </label>
          
          <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
            <input
              type="radio"
              name="paymentMethod"
              value="upi"
              checked={formData.paymentMethod === 'upi'}
              onChange={handleInputChange}
              className="text-[#2563EB] focus:ring-blue-500"
            />
            <div className="w-5 h-5 bg-orange-500 rounded mx-3"></div>
            <span className="font-medium text-gray-900">UPI Payment</span>
          </label>
        </div>
      </div> */}

      {/* {formData.paymentMethod === 'card' && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Card Number
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="1234 5678 9012 3456"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expiry Date
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="MM/YY"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CVV
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="123"
              />
            </div>
          </div>
        </div>
      )}

      {formData.paymentMethod === 'upi' && (
        <div className="text-center p-8 bg-gray-50 rounded-lg">
          <div className="w-32 h-32 bg-gray-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
            <span className="text-gray-600">QR Code</span>
          </div>
          <p className="text-gray-600 mb-2">Scan QR code to pay</p>
          <p className="font-semibold text-gray-900">Amount: ${selectedCourse?.price}</p>
        </div>
      )} */}
    </div>
  );

  const renderStep3 = () => (
    <div className="text-center space-y-6">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
        <CheckCircle className="w-10 h-10 text-green-600" />
      </div>
      
      <h2 className="text-2xl font-bold text-gray-900">
     You're In! Join Our WhatsApp Group for Session Details
</h2>
      <a href="https://chat.whatsapp.com/I51dx67i8N4IoSdBBBbcoJ" className='hover:text-purple-700'> Click here to Join Whatsapp Group</a>

      <p className="text-gray-600 max-w-md mx-auto">
        All course access info, live session links, and community support will be shared exclusively on WhatsApp.
      </p>

      <div className="bg-blue-50 rounded-lg p-6 text-left max-w-md mx-auto">
        <h3 className="font-semibold text-gray-900 mb-3">What's Next?</h3>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            Click here to join the WhatsApp group 
          </li>
          <li className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            Get session reminders, resources, and Q&A support
          </li>
          <li className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            Start your learning journey with fellow traders
          </li>
        </ul>
      </div>
    </div>
  );
// const navItems = [
//     { name: 'Courses', path: '/courses' },
//     { name: 'Ratings', path: '/ratings' },
//     { name: 'Testimonials', path: '/testimonials' },
//     { name: 'FAQ', path: '/faq' },
//     { name: 'Contact', path: '/contact' },
//   ];


  return (
    <div className="pt-20 min-h-screen bg-[#f5fafc]" id='enroll-section'>
      {segments[1]=="enrollment" ?( <Navigation navItems={true} sincourse={false} />):<></>}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-8 py-6">
            <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
              Register For Your Free Demo
            </h1>
            <div className="flex items-center justify-center gap-6 mt-4 text-white text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Book a demo to see our all-in-one assessment platform</span>
              </div>
            </div>
          </div>

          <div className="p-8">
            {renderStepIndicator()}

            <div className="max-w-2xl mx-auto">
              {currentStep === 1 && renderStep1()}
              {currentStep === 2 && renderStep2()}
              {currentStep === 3 && renderStep3()}

              {/* Navigation Buttons */}
              {currentStep < 3 && (
                <div className="flex justify-between mt-8">
                  <button
                    onClick={handlePrevStep}
                    disabled={currentStep === 1}
                    className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                      currentStep === 1
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Previous
                  </button>
                 <button
  onClick={handleNextStep}
  disabled={!isStep1Valid()}
  className={`px-8 py-3 rounded-full font-semibold transition-colors ${
    isStep1Valid()
      ? 'bg-blue-600 text-white hover:bg-blue-700'
      : 'bg-blue-300 text-white cursor-not-allowed'
  }`}
>
  {currentStep === 2 ? 'Complete Free Registration' : 'Next'}
</button>

                </div>
              )}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <Calendar className="w-8 h-8 text-[#2563EB] mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Flexible Schedule</h3>
            <p className="text-sm text-gray-600">Learn at your own pace with lifetime access</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Money-Back Guarantee</h3>
            <p className="text-sm text-gray-600">7-day money-back guarantee if not satisfied</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <User className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Expert Support</h3>
            <p className="text-sm text-gray-600">Direct access to instructor and community</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default EnrollmentPage;