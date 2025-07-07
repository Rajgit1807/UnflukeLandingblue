import React from 'react';
import { MessageSquare, Users, Award, Wrench, CheckCircle, Code2 } from 'lucide-react';

export default function Features() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Live Doubt Sessions with Image */}
        <div className="mb-12">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Live Doubt Sessions
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6">
                10 Hand-Holding Sessions after each class to ensure you progress confidently
              </p>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3">
                  <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  <span className="text-sm sm:text-base text-gray-700">Clarify Coding Issues</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                  <span className="text-sm sm:text-base text-gray-700">Strategy Logic Problems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  <span className="text-sm sm:text-base text-gray-700">Broker & API Help</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Wrench className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                  <span className="text-sm sm:text-base text-gray-700">Personal Strategies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  <span className="text-sm sm:text-base text-gray-700">Customize Code</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Live Learning Session" 
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Tools & Certification */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border">
            <div className="flex items-center space-x-3 mb-4">
              <Code2 className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Tools You'll Learn</h2>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Python Libraries</h3>
                <p className="text-gray-600 text-xs sm:text-sm">TA, PandasTA, Broker libraries, Pandas, NumPy</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Trading Platforms</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Groww</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Development Tools</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Jupyter Notebook, VS Code, Idea IntelliJ</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Backtesting</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Free Tools and Software</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-4 sm:p-6 text-white shadow-md">
            <div className="flex items-center space-x-3 mb-4">
              <Award className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-300" />
              <h2 className="text-xl sm:text-2xl font-bold">Course Access & Resources</h2>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-300" />
                <span className="text-sm sm:text-base">Access to all Python codes</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-300" />
                <span className="text-sm sm:text-base">Lifetime access to session recordings</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-blue-300" />
                <span className="text-sm sm:text-base">Lifetime membership to private community</span>
              </div>
            </div>
          </div>
        </div>

        {/* Community Support with Image */}
        <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Community Support</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4">Join our active WhatsApp/Discord community</p>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="text-center">
                  <MessageSquare className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900 text-xs sm:text-sm">Daily Questions</h3>
                  <p className="text-xs text-gray-600">Ask anytime</p>
                </div>
                <div className="text-center">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900 text-xs sm:text-sm">Peer Support</h3>
                  <p className="text-xs text-gray-600">Help from peers</p>
                </div>
                <div className="text-center">
                  <Award className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900 text-xs sm:text-sm">Strategy Updates</h3>
                  <p className="text-xs text-gray-600">New strategies</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900 text-xs sm:text-sm">Share & Learn</h3>
                  <p className="text-xs text-gray-600">Learn from others</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop" 
                alt="Community Learning" 
                className="w-full h-40 sm:h-48 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}