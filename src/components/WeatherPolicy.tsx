import React from 'react';
import { ArrowLeft, Cloud, AlertTriangle, Phone, Mail } from 'lucide-react';

const WeatherPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => window.location.href = '/'}
              className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>返回</span>
            </button>
            <div className="flex items-center space-x-3">
              <img 
                src="/futurebloom-logo-01.jpg" 
                alt="桐年卓越教育中心Logo" 
                className="w-10 h-10 object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-800">桐年卓越教育中心</h1>
                <p className="text-sm text-gray-600">FutureBloom Education Centre</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Cloud className="text-blue-500" size={32} />
              <h1 className="text-4xl font-bold text-gray-800">惡劣天氣安排</h1>
            </div>
            <p className="text-xl text-gray-600">
              為確保學員及家長的安全，本中心制定以下惡劣天氣課堂安排
            </p>
          </div>

          {/* Weather Policies */}
          <div className="space-y-8">
            {/* Typhoon Policy */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-red-100 rounded-full p-3">
                  <AlertTriangle className="text-red-600" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">颱風警告</h2>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-black pl-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">八號或以上颱風警告信號</h3>
                  <p className="text-gray-600 leading-relaxed">
                    天文台發出八號或以上颱風警告信號時，本中心將暫停所有課堂。而有關颱風警告取消後的最新安排，請留意本中心於Facebook及Instgram發佈的即時消息。
                  </p>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">三號颱風警告信號</h3>
                  <p className="text-gray-600 leading-relaxed">
                    當天文台發出三號颱風警告信號時，課堂將如常進行。
                  </p>
                </div>
              </div>
            </div>

            {/* Rainstorm Policy */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-100 rounded-full p-3">
                  <Cloud className="text-blue-600" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">暴雨警告</h2>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-black pl-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">黑色暴雨警告信號</h3>
                  <p className="text-gray-600 leading-relaxed">
                    當天文台發出黑色暴雨警告信號時，本中心將暫停所有課堂。而有關暴雨警告取消後的最新安排，請留意本中心於Facebook及Instgram發佈的即時消息。
                  </p>
                </div>
                
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">紅色暴雨警告信號</h3>
                  <p className="text-gray-600 leading-relaxed">
                    當天文台發出紅色暴雨警告信號時，課堂將如常進行。但如家長認為不宜外出，請提前聯絡我們，本中心將安排補課。
                  </p>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">黃色暴雨警告信號</h3>
                  <p className="text-gray-600 leading-relaxed">
                    當天文台發出黃色暴雨警告信號時，課堂將如常進行。
                  </p>
                </div>
              </div>
            </div>

            {/* Make-up Class Policy */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-green-100 rounded-full p-3">
                  <Phone className="text-green-600" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">補課安排</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">補課政策</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>因惡劣天氣而取消的課堂，本中心將安排補課</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Communication Policy */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-purple-100 rounded-full p-3">
                  <Mail className="text-purple-600" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">通知安排</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">通知方式</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>本中心將透過電話或WhatsApp通知家長課堂安排</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>請家長確保聯絡資料準確及保持通訊暢通</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>如有疑問，歡迎致電本中心查詢</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">重要提醒</h2>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-start space-x-2">
                  <span className="text-orange-600 mt-1 font-bold">•</span>
                  <span>家長及學員的安全是本中心的首要考慮</span>
                </p>
                <p className="flex items-start space-x-2">
                  <span className="text-orange-600 mt-1 font-bold">•</span>
                  <span>本政策適用於所有常規課程及到校/團體活動</span>
                </p>
                <p className="flex items-start space-x-2">
                  <span className="text-orange-600 mt-1 font-bold">•</span>
                  <span>如有特殊情況，本中心保留調整安排的權利</span>
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">如有查詢，請聯絡我們</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="text-orange-600" size={20} />
                  <span className="text-lg text-gray-700">+852 9380 2827</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="text-orange-600" size={20} />
                  <span className="text-lg text-gray-700">futurebloom.edu.centre@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherPolicy;