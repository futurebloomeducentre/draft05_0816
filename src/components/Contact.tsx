import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Email validation function
  const isEmailValid = (email: string) => {
    if (email.trim() === '') return true; // Empty email is allowed
    return email.includes('@') && !email.includes(' '); // Must have @ and no spaces
  };

  // Check if all required fields are filled
  const isFormValid = formData.name.trim() !== '' && 
                      formData.phone.trim() !== '' && 
                      formData.message.trim() !== '' &&
                      isEmailValid(formData.email);

  // Phone validation - only numbers allowed
  const isPhoneValid = (phone: string) => {
    return phone.trim() === '' || (/^\d+$/.test(phone.trim()) && phone.trim().length >= 8);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prevent submission if form is not valid
    if (!isFormValid) {
      if (!isEmailValid(formData.email)) {
        alert('電郵地址格式不正確，必須包含@符號且不能有空格');
      } else if (!isPhoneValid(formData.phone)) {
        alert('聯絡電話只能包含數字，且最少需要8位數字');
      } else {
        alert('請填寫所有必填項目');
      }
      return;
    }
    
    // Submit form data to Google Apps Script
    submitFormData();
  };

  const submitFormData = async () => {
    setIsSubmitting(true);
    try {
      // Replace this URL with your Google Apps Script Web App URL
      const scriptURL = 'https://script.google.com/macros/s/AKfycbz95lXBAangjzwQ-Fb4zTsea83bsWBx9PUVdi1dI95emoczJDnuTtJFskmrxIWYKcud/exec';
      
      const response = await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          course: formData.course,
          message: formData.message,
          timestamp: new Date().toLocaleString('zh-HK', {
            timeZone: 'Asia/Hong_Kong',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          })
        })
      });

      // Show success message and reset form
      alert('感謝您的查詢！我們已收到您的資料，將盡快與您聯絡。');
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        course: '',
        message: ''
      });
      
    } catch (error) {
      console.error('提交表單時發生錯誤:', error);
      alert('提交表單時發生錯誤，請稍後再試或直接致電 +852 9380 2827 聯絡我們。');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">聯絡我們</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            歡迎隨時與我們聯絡，我們很樂意為您和孩子提供最適合的學術與藝術課程建議。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">聯絡資訊</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <MapPin style={{color: '#df5121'}} size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">地址</h4>
                    <p className="text-gray-600">九龍觀塘瑞泰偉基商業廣場209室</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Phone style={{color: '#df5121'}} size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">電話</h4>
                    <p className="text-gray-600 no-underline">+852 9380 2827</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Mail style={{color: '#df5121'}} size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">電郵</h4>
                    <p className="text-gray-600 no-underline">futurebloom.edu.centre@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Clock style={{color: '#df5121'}} size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">營業時間</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>星期一至六：上午9:00 - 下午6:00</p>
                      <p>星期日及公眾假期：10:00AM - 5:00PM</p>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">課程查詢或機構報價</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">姓名 *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 transition-all" 
                      style={{'--tw-ring-color': '#df5121'}}
                      placeholder="請輸入您的姓名"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">聯絡電話 *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                     onKeyPress={(e) => {
                       // Only allow numbers, backspace, delete, and navigation keys
                       if (!/[0-9]/.test(e.key) && !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.key)) {
                         e.preventDefault();
                       }
                     }}
                     onPaste={(e) => {
                       // Prevent pasting non-numeric content
                       const paste = e.clipboardData.getData('text');
                       if (!/^\d+$/.test(paste)) {
                         e.preventDefault();
                       }
                     }}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 transition-all" 
                      style={{'--tw-ring-color': '#df5121'}}
                      placeholder="請輸入聯絡電話"
                    />
                    {formData.phone.trim() !== '' && !isPhoneValid(formData.phone) && (
                      <p className="text-red-500 text-sm mt-1">聯絡電話只能包含數字，且最少需要8位數字</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">電郵地址</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 transition-all" 
                    style={{'--tw-ring-color': '#df5121'}}
                    placeholder="請輸入電郵地址"
                  />
                  {formData.email.trim() !== '' && !isEmailValid(formData.email) && (
                    <p className="text-red-500 text-sm mt-1">輸入資料不正確</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">查詢內容 *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 transition-all resize-none" 
                    style={{'--tw-ring-color': '#df5121'}}
                    placeholder="請告訴我們您的查詢或特別要求..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className={`w-full py-4 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2 ${
                    isFormValid && !isSubmitting
                      ? 'text-white hover:shadow-xl transform hover:scale-105 cursor-pointer' 
                      : 'text-gray-400 bg-gray-300 cursor-not-allowed'
                  }`}
                  style={isFormValid && !isSubmitting ? {background: '#df5121'} : {}}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>提交中...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>提交查詢</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;