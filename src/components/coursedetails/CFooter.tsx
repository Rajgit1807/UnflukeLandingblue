import React from 'react';
import { TrendingUp, Code, BarChart3, Mail, Phone, MessageSquare, Globe } from 'lucide-react';

export default function CFooter() {
  return (
    <footer className="bg-gray-900 text-white py-8 print:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center space-x-1">
                <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
                <Code className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" />
                <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
              </div>
              <span className="text-base sm:text-lg font-bold">AlgoTrade Academy</span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm">
              Empowering traders with Python-powered algorithmic trading strategies and comprehensive options education.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3 text-sm sm:text-base">Course Highlights</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li>• 10 Live Classes (90 min each)</li>
              <li>• 10 Doubt Sessions</li>
              <li>• Access to Python Codes</li>
              <li>• Lifetime Access</li>
              <li>• Private Community Access</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3 text-sm sm:text-base">Contact Information</h3>
            <div className="space-y-2 text-xs sm:text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@algotradeacademy.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageSquare className="h-4 w-4" />
                <span>WhatsApp/Discord Community</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span>www.algotradeacademy.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-xs sm:text-sm text-gray-400">
          <p>&copy; 2025 AlgoTrade Academy. All rights reserved. Transform your trading with Python.</p>
        </div>
      </div>
    </footer>
  );
}