import React from 'react';
import { Play, TrendingUp, Users, BookOpen } from 'lucide-react';

import GrowwIcon from "./../assets/images/Groww.svg"
import UnflukeIcon from "./../assets/images/UNFLUKE.png"
import ChitkaraIcon from "./../assets/images/chitkara-university.svg"
import DeutscheIcon from "./../assets/images/deutsche-bank.svg"
import IIMIcon from "./../assets/images/IIM.svg"

const HeroSection = () => {
  const stats = [
    { icon: BookOpen, value: '5K+', label: 'Online Courses' },
    { icon: Play, value: '2K+', label: 'Video Courses' },
    { icon: Users, value: '250+', label: 'Tutors' }
  ];
 
const logos = [
  { image: GrowwIcon, width: 170, height: 140 },
  { image: UnflukeIcon, width: 200, height: 40 },
  { image: ChitkaraIcon, width: 160, height: 40 },
  { image: DeutscheIcon, width: 240, height: 40 },
    { image: IIMIcon, width: 50, height: 40 },
];
 

 
  const features = [
    { icon: '📈', label: 'Algorithmic Trading' },
    { icon: '🧠', label: 'Quantitative Strategies' },
    { icon: '⚙️', label: 'Python + C++ Systems' }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-violet-50 to-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
  <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
  <div className="absolute top-40 right-32 w-24 h-24 bg-blue-300 rounded-full opacity-30"></div>
  <div className="absolute bottom-32 left-40 w-40 h-40 bg-blue-100 rounded-full opacity-15"></div>
  <div className="absolute bottom-20 right-20 w-20 h-20 bg-blue-400 rounded-full opacity-25"></div>
</div>


      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-4 md:pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Helping <span className="text-[#2563EB]">You</span>
                <br />
                <span className="text-[#2563EB]">Automate</span> Trading
                <br />
                With <span className="text-[#2563EB]">Confidence</span>
              </h1>
              
              <p className="text-lg text-gray-600 max-w-lg">
                Provides you with the latest online learning system and material 
                that help your knowledge growing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => {
    const section = document.getElementById('story-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }} className="bg-[#2563EB] text-white px-8 py-4 rounded-full hover:bg-[#2563EB]transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
                About My Education
              </button>
              <button className="border-2 border-[#2563EB] text-[#2563EB] px-8 py-4 rounded-full hover:bg-[#2563EB] hover:text-white transition-all duration-300 font-semibold text-lg">
                Learn My Trading System
              </button>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-1">
                  <span className="text-[20px]">{feature.icon}</span>
                  <span className="text-gray-700 font-medium text-[15px]">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image & Stats */}
          <div className="relative">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-blue-400 to-purple-600 rounded-[3rem] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Student learning"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Stats Cards */}
              {stats.map((stat, index) => {
                const positions = [
                  'top-4 right-4',
                  'top-1/2 -left-4 transform -translate-y-1/2',
                  'bottom-4 right-8'
                ];
                
                return (
                  <div
                    key={index}
                    className={`absolute ${positions[index]} bg-white rounded-2xl p-4 shadow-xl border border-gray-100 animate-float`}
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <stat.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Collaboration Badge */}
            <div className="absolute -bottom-8 left-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-1">250+</div>
              <div className="text-gray-600 font-medium">Collaboration</div>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="mt-20 pt-3 md:pt-12 border-t border-gray-200">
          <div className="max-w-5xl grid grid-cols-3 items-center justify-center gap-2 md:gap-4 opacity-60 grayscale px-1 md:px-10 lg:px-20 mx-auto">
           {logos.slice(0,3).map((logo, index) =>
  logo.image === IIMIcon ? (
    <div key={index} className="flex items-center w-fit mx-auto gap-3">
      <img src={logo.image} width={logo.width} height={logo.height} alt="logo" />
      <p className='text-gray-800 text-4xl font-bold'>IIM</p>
    </div>
  ) : (
    <div key={index} className="flex items-center w-fit mx-auto">
      <img src={logo.image} width={logo.width} height={logo.height} alt="logo" />
    </div>
  )
)}
          </div>
          <div  className="max-w-[95%] md:max-w-2xl flex items-center justify-between opacity-60 grayscale lg:gap-20 px-[1%] md:px-10 lg:px-20 mx-auto mt-1">
            {logos.slice(3,5).map((logo, index) =>
  logo.image === IIMIcon ? (
    <div key={index} className="flex items-center mx-auto max-w-[100px] md:max-w-[200px] gap-1 md:gap-2">
      <img src={logo.image} alt="logo" className='max-w-[35%] max-h-[35%] md:max-w-[25%] md:max-h-[25%]' />
      <p className='text-gray-800 text-4xl max-sm:text-[180%] font-bold'>IIM</p>
    </div>
  ) : (
    <div key={index} className="flex items-center w-fit mx-auto">
      <img src={logo.image}   alt="logo" className='w-44 md:w-60 lg:w-80 '/>
    </div>
  )
)}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;