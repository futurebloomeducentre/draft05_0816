import React, { useState } from 'react';
import { Clock, Users, Star, ArrowRight } from 'lucide-react';

const Courses = () => {
  const [coursesVisible, setCoursesVisible] = useState(3);

  const courses = [
    {
      title: "趣味中文啟蒙班",
      age: "2-6歲",
      duration: "60分鐘",
      students: "1-4人",
      price: "$1100/4堂",
      image: "course_7.png",
      description: "透過遊戲化教學與多元互動，為學齡前幼兒打造沉浸式中文環境，從小建立聽、說、讀、寫的完整語言基礎，激發主動學習的熱情。",
      features: ["系統化認字、閱讀、書寫訓練", "筆順與握筆姿勢專業指導", "繪本共讀強化表達邏輯"]
    }, 
    {
      title: "趣味數學啟蒙班",
      age: "2-6歲",
      duration: "60分鐘",
      students: "1-4人",
      price: "$1100/4堂",
      image: "course_9.png",
      description: "透過遊戲化的學習方式，建立孩子對數字、空間的敏銳度，並奠定基礎運算概念，為未來的數學學習打下快樂且紮實的基礎。",
      features: ["玩樂中學習", "圖像式教學", "生活化練習", "啟發數學思維", "奠定紮實基礎", "提升解決問題能力"]
    }, 
    {
      title: "數學升小應用班",
      age: "4-7歲",
      duration: "60分鐘",
      students: "1-4人",
      price: "$1100/4堂",
      image: "course_11.png",
      description: "針對4-7歲的孩子設計，旨在啟發數學思維、培養邏輯推理能力，並幫助孩子順利銜接小學一年級的數學課程。",
      features: ["趣味邏輯遊戲區", "奧數思維小學堂", "小學課題預備站", "啟發數學思維", "培養邏輯推理能力", "銜接小學課程"]
    },  
    {
      title: "中文升小應用班",
      age: "4-7歲",
      duration: "60分鐘",
      students: "1-4人",
      price: "$1100/4堂",
      image: "course_8.png",
      description: "專為4-7歲的孩子打造，全面提升中文能力，培養良好的語文素養，讓孩子輕鬆銜接小學課程。",
      features: ["說話能力", "閱讀理解", "寫作技巧", "詞彙積累", "語法知識", "思維訓練"]
    }, 
    {
      title: "奇趣探索班",
      age: "3-7歲",
      duration: "60分鐘",
      students: "1-4人",
      price: "$1100/4堂",
      image: "course_13.png",
      description: "啟發孩子的好奇心，探索世界的奧秘！透過互動式學習、實驗教學和寓教於樂的方式，引導孩子深入探索科學和地理的奧秘，培養他們的探索精神和創造力。",
      features: ["互動式學習", "寓教於樂實踐", "創意思維啟發", "激發好奇心", "培養探索精神", "啟發創造力"]
    },  
    {
      title: "普通話 GAPSK 課程",
      age: "3-7歲",
      duration: "60分鐘",
      students: "1-4人",
      price: "$1100/4堂",
      image: "course_15.png",
      description: "讓孩子輕鬆說一口流利的普通話！全面提升孩子的普通話能力，幫助他們輕鬆銜接學校課程，為未來的學習打下堅實的基礎。",
      features: ["輕鬆愉快", "實用會話", "基礎拼音", "口語表達", "圖像學習"]
    },  
    {
      title: "中文閱讀常規班",
      age: "小1至小6",
      duration: "60分鐘",
      students: "1-4人",
      price: "$1300/4堂",
      image: "course_14.png",
      description: "提升閱讀理解能力，掌握考試技巧！精進閱讀技巧，深化理解能力，並掌握多元閱讀策略，以理清文章結構，提升學業表現。",
      features: ["專注閱讀理解技巧", "應試能力提升", "多元閱讀素材拓展"]
    },  
    {
      title: "中文寫作常規班",
      age: "小1至小6",
      duration: "60分鐘",
      students: "1-4人",
      price: "$1300/4堂",
      image: "course_19.png",
      description: "旨在協助孩子掌握寫作技巧，加強句子結構和詞語運用，從而提高中文寫作水平。",
      features: ["清晰題意解析", "文章脈絡構建", "生動情感表達", "有效觀點傳達", "文體寫作練習", "啟發創意思維"]
    },    
    {
      title: "數學基礎與奧數常規班",
      age: "小1至小6",
      duration: "60分鐘",
      students: "1-4人",
      price: "$1300/4堂",
      image: "course_17.png",
      description: "結合校內基礎與奧數思維，旨在培養孩子的數感和圖形敏感度，幫助他們掌握數學思維，從而在數學學習中取得突破。",
      features: ["分年級重點突破", "經典奧數題型", "生活數學實踐", "實用應用"]
    },  
    {
      title: "個性化學習計劃",
      age: "小1至小6",
      duration: "120分鐘",
      students: "1-4人",
      price: "$1600/每星期2天",
      image: "course_18.png",
      description: "專為小一至小六學生提供全方位的功課輔導，助學生在學業上取得優異成績。",
      features: ["全面功課支援", "個性化學習計劃", "指導高效溫習方法", "協助學生掌握學科核心內容", "提升整體學業水平"]
    },  
    {
      title: "LCM幼兒音樂證書課程",
      age: "2.5-6歲",
      duration: "45分鐘",
      students: "1-4人",
      price: "$1400/4堂",
      image: "course_16.png",
      description: "趣味啟蒙教學，結合唱遊、律動、Rainbow Bell演奏，激發幼兒音樂潛能。",
      features: ["兒歌演唱與節奏訓練", "樂器探索", "指全英語互動", "三階段考試系統"]
    },  
    {
      title: "繪本啟蒙班",
      age: "2-6歲",
      duration: "90分鐘",
      students: "1-4人",
      price: "$1000/4堂",
      image: "course_1.png",
      description: "透過繪本故事引導幼兒，將故事中的情節與日常生活連結，導師細心引導幼兒學習、探索和觀察，培養他們的創作和想像力。",
      features: ["基礎色彩認知", "手眼協調訓練", "創意思維啟發", "培養空間感和比例的感知能力"]
    },
    {
      title: "創意繪畫班",
      age: "2-6歲",
      duration: "90分鐘",
      students: "1-4人",
      price: "$1000/4堂",
      image: "course_2.png",
      description: "引導幼兒通過視覺藝術表達自己的想法和情感，學習不同繪畫技巧和材料的應用，培養幼兒的觀察力和藝術創造力。",
      features: ["基礎色彩技巧", "幫助幼兒表達內心", "啟發想像力 ", "增強幼兒的自信心和成就感"]
    },
    {
      title: "多元體驗班",
      age: "4-12歲",
      duration: "90分鐘",
      students: "1-4人",
      price: "$1200/4堂",
      image: "course_3.png",
      description: "學習不同的藝術形式，探索更多藝術媒介，提升小朋友的創意和想像力，打破傳統對視覺藝術等於繪畫的觀念。",
      features: ["多元材料運用", "跨領域學習", "提升小朋友大膽嘗試和創新", "啟發小朋友對不同文化的理解和尊重"]
    },
    {
      title: "兒童基礎班",
      age: "小1 - 小3",
      duration: "90分鐘",
      students: "1-4人",
      price: "$1200/4堂",
      image: "course_4.png",
      description: "學習基本的繪畫技巧，包括線條、形狀、色彩搭配等基礎知識。",
      features: ["色彩理論學習", "構圖基礎", "培養對美的感知和欣賞能力", "提升小朋友的觀察力和細節表達能力"]
    },
    {
      title: "兒童進階班",
      age: "小4 - 小6",
      duration: "90分鐘",
      students: "1-4人",
      price: "$1200/4堂",
      image: "course_5.png",
      description: "讓小朋友探索更高級的繪畫技巧和表現方式，如光影處理、風格模仿、創意表現等。",
      features: ["技術深化，為呈分試打好基礎。", "塑造獨特的藝術風格", "鼓勵小朋友挑戰創作限制", "提升自信心和表現能力"]
    },
    {
      title: "和諧粉彩準/正指導師證書課程",
      age: "10歲以上",
      duration: "2日",
      students: "1-4人",
      price: "$5000",
      image: "course_6.png",
      description: "學習和諧粉彩藝術的理念、技巧、應用。",
      features: ["可獲得導師課程認證資格", "可開辦和諧粉彩體驗班、準指導師課程、正指導師課程。"]
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">常規課程</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我們提供多元化的學術及藝術課程，適合不同年齡層的孩子，讓每個孩子都能找到適合自己的學習方式。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.slice(0, coursesVisible).map((course, index) => (
            <div key={index} data-course={course.title} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 text-white px-3 py-1 rounded-full text-sm font-semibold" style={{background: '#df5121'}}>
                  {course.age}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{course.description}</p>
                
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users size={16} />
                    <span>{course.students}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {course.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Star size={14} className="text-yellow-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold" style={{color: '#df5121'}}>{course.price}</div>
                  <a href="#contact" className="text-white px-4 py-2 rounded-full hover:shadow-lg transition-all flex items-center space-x-1" style={{background: '#df5121'}}>
                    <span>報名</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {coursesVisible < courses.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setCoursesVisible(prev => Math.min(prev + 3, courses.length))}
              className="text-white px-8 py-3 rounded-full hover:shadow-lg transition-all font-semibold"
              style={{background: '#df5121'}}
            >
              更多
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Courses;