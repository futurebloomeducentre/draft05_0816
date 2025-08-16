import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/futurebloom-logo-01.jpg" 
                alt="桐年卓越教育中心Logo" 
                className="w-10 h-10 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">桐年卓越教育中心</h3>
                <p className="text-gray-400 text-sm">FutureBloom Education Centre </p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              由多位持牌幼稚園教師、小學教師、特殊教育老師及專業社工組成，結合教育專業與藝術專長，為不同學習需求的孩子提供適性化的「學術+藝術」整合課程。
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/19omeBFkMm/" className="bg-gray-800 p-2 rounded-full transition-colors" style={{'&:hover': {background: '#df5121'}}} onMouseEnter={(e) => e.target.style.background = '#df5121'} onMouseLeave={(e) => e.target.style.background = '#374151'}>
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/futurebloom_edu" className="bg-gray-800 p-2 rounded-full transition-colors" onMouseEnter={(e) => e.target.style.background = '#df5121'} onMouseLeave={(e) => e.target.style.background = '#374151'}>
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">快速連結</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">首頁</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">關於我們</a></li>
              <li><a href="#group-courses" className="text-gray-400 hover:text-white transition-colors">到校/團體活動</a></li>
              <li><a href="#courses" className="text-gray-400 hover:text-white transition-colors">常規課程</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">聯絡我們</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-4">熱門課程</h4>
            <ul className="space-y-2">
              <li><a href="#courses" className="text-gray-400 hover:text-white transition-colors" onClick={(e) => {e.preventDefault(); document.querySelector('[data-course="趣味中文啟蒙班"]')?.scrollIntoView({behavior: 'smooth', block: 'center'});}}>趣味中文啟蒙班</a></li>
              <li><a href="#courses" className="text-gray-400 hover:text-white transition-colors" onClick={(e) => {e.preventDefault(); document.querySelector('[data-course="趣味數學啟蒙班"]')?.scrollIntoView({behavior: 'smooth', block: 'center'});}}>趣味數學啟蒙班</a></li>
              <li><a href="#courses" className="text-gray-400 hover:text-white transition-colors" onClick={(e) => {e.preventDefault(); document.querySelector('[data-course="創意繪畫班"]')?.scrollIntoView({behavior: 'smooth', block: 'center'});}}>創意繪畫班</a></li>
              <li><a href="#courses" className="text-gray-400 hover:text-white transition-colors" onClick={(e) => {e.preventDefault(); document.querySelector('[data-course="繪本啟蒙班"]')?.scrollIntoView({behavior: 'smooth', block: 'center'});}}>繪本啟蒙班</a></li>
              <li><a href="#courses" className="text-gray-400 hover:text-white transition-colors" onClick={(e) => {e.preventDefault(); document.querySelector('[data-course="LCM幼兒音樂證書課程"]')?.scrollIntoView({behavior: 'smooth', block: 'center'});}}>LCM幼兒音樂證書課程</a></li>
              <li><a href="#courses" className="text-gray-400 hover:text-white transition-colors" onClick={(e) => {e.preventDefault(); document.querySelector('[data-course="中文閱讀常規班"]')?.scrollIntoView({behavior: 'smooth', block: 'center'});}}>中文閱讀常規班</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">聯絡資訊</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin style={{color: '#df5121'}} className="mt-1 flex-shrink-0" size={16} />
                <p className="text-gray-400 text-sm">
                  九龍觀塘瑞泰偉基商業廣場209室<br />
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone style={{color: '#df5121'}} className="flex-shrink-0" size={16} />
                <p className="text-gray-400 text-sm no-underline">+852 9380 2827</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail style={{color: '#df5121'}} className="flex-shrink-0" size={16} />
                <p className="text-gray-400 text-sm no-underline">futurebloom.edu.centre@gmail.com</p>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-2">營業時間</h5>
              <div className="text-gray-400 text-sm space-y-1">
                <p>星期一至六：9:00AM - 6:00PM</p>
                <p>星期日及公眾假期：10:00AM - 5:00PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 桐年卓越教育中心. 版權所有.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
