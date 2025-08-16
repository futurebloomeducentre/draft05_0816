import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-gradient-to-r from-orange-600 to-red-500 text-white py-2" style={{background: 'linear-gradient(to right, #df5121, #c44117)'}}>
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span className="no-underline">+852 9380 2827</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={14} />
              <span className="no-underline">futurebloom.edu.centre@gmail.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>歡迎來到桐年卓越教育中心</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="/futurebloom-logo-01.jpg" 
              alt="桐年卓越教育中心Logo" 
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">桐年卓越教育中心</h1>
              <p className="text-sm text-gray-600">FutureBloom Education Centre </p>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">首頁</a>
            <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">關於我們</a>
            <a href="#courses" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">常規課程</a>
            <div className="relative group">
              <a href="#group-courses" className="text-gray-700 hover:text-orange-600 transition-colors font-medium cursor-pointer">到校/團體活動</a>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <a href="#art-activities" className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">藝術活動</a>
                <a href="#academic-activities" className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">學術活動</a>
              </div>
            </div>
            <a href="/weather-policy" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">惡劣天氣安排</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">聯絡我們</a>
            <a href="#contact" className="text-white px-6 py-2 rounded-full hover:shadow-lg transition-all" style={{background: '#df5121'}}>
              立即報名
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>首頁</a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>關於我們</a>
              <a href="#courses" className="text-gray-700 hover:text-orange-600 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>常規課程</a>
              <a href="#group-courses" className="text-gray-700 hover:text-orange-600 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>到校/團體活動</a>
              <a href="#art-activities" className="text-gray-700 hover:text-orange-600 transition-colors font-medium pl-4" onClick={() => setIsMenuOpen(false)}>- 藝術活動</a>
              <a href="#academic-activities" className="text-gray-700 hover:text-orange-600 transition-colors font-medium pl-4" onClick={() => setIsMenuOpen(false)}>- 學術活動</a>
              <a href="/weather-policy" className="text-gray-700 hover:text-orange-600 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>惡劣天氣安排</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>聯絡我們</a>
              <a href="#contact" className="text-white px-6 py-2 rounded-full hover:shadow-lg transition-all w-fit" style={{background: '#df5121'}} onClick={() => setIsMenuOpen(false)}>
                立即報名
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
