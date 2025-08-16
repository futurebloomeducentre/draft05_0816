import React, { useState } from 'react';
import { Clock, Users, Star, ArrowRight } from 'lucide-react';

const GroupCourses = () => {
  const [artCoursesVisible, setArtCoursesVisible] = useState(3);
  const [academicCoursesVisible, setAcademicCoursesVisible] = useState(3);

  const artCourses = [
    {
      title: "【心靈色彩療癒課】靜觀和諧粉彩",
      age: "小朋友/大人",
      duration: "依活動而定",
      students: "團體課程",
      price: "請洽詢",
      image: "course_20.png",
      description: "小朋友/大人用手指輕輕塗抹粉彩，創造柔和夢幻的畫作，培養專注力與情緒表達，適合情緒管理主題活動。",
      features: ["-", "-", "-", "-"]
    },
    {
      title: "【魔法顏料實驗室】酒精墨水畫",
      age: "小朋友/大人",
      duration: "依活動而定",
      students: "團體課程",
      price: "請洽詢",
      image: "course_21.png",
      description: "用酒精和彩色墨水創造奇幻流動效果，激發小朋友/大人對色彩的興趣，成品可做成獨特賀卡/小書籤或其他禮物。",
      features: ["-", "-", "- ", "-"]
    },
    {
      title: "【小小陶藝家】玩泥巴創意課",
      age: "小朋友/大人",
      duration: "依活動而定",
      students: "團體課程",
      price: "請洽詢",
      image: "course_22.png",
      description: "讓小朋友/大人用手捏陶土，製作可愛動物或小碗，體驗陶藝樂趣，培養手部肌肉協調能力和美感。",
      features: ["-", "-", "-", "-"]
    },
    {
      title: "【色彩大冒險】流體畫玩創意",
      age: "小朋友/大人",
      duration: "依活動而定",
      students: "團體課程",
      price: "請洽詢",
      image: "course_23.png",
      description: "將顏料自由傾倒、混合，觀察色彩流動變化，創作獨一無二的抽象畫，激發藝術想像力。",
      features: ["-", "-", "-", "-"]
    },
    {
      title: "【環保小達人】創意手作班",
      age: "小朋友/大人",
      duration: "依活動而定",
      students: "團體課程",
      price: "請洽詢",
      image: "course_24.png",
      description: "利用回收材料（如舊布料、紙張）製作小手工，如紮染小手帕、再生紙卡片，培養環保意識。",
      features: ["-，-。", "-", "-", "-"]
    },
    {
      title: "【陽光魔法畫】藍曬顯影體驗",
      age: "小朋友/大人",
      duration: "依活動而定",
      students: "團體課程",
      price: "請洽詢",
      image: "course_25.png",
      description: "用陽光和特殊藥水，把樹葉、花朵的影子變成藍色藝術畫，結合自然探索，適合戶外教學。",
      features: ["-", "-"]
    },
    {
      title: "【水墨小大師】童趣水墨畫",
      age: "小朋友/大人",
      duration: "依活動而定",
      students: "團體課程",
      price: "請洽詢",
      image: "course_26.png",
      description: "學習簡單水墨技巧，畫小動物、花草，體驗中國傳統筆墨趣味，培養美感與耐心。",
      features: ["-", "-"]
    },
    {
      title: "【香香好朋友】香薰蠟燭DIY",
      age: "小朋友/大人",
      duration: "依活動而定",
      students: "團體課程",
      price: "請洽詢",
      image: "course_27.png",
      description: "用天然大豆蠟和精油製作可愛造型蠟燭，認識不同香味和製作圖案方法，適合大人及小朋友製作。",
      features: ["-", "-"]
    },
    {
      title: "【黏土奇幻世界】軟陶創意課",
      age: "小朋友/大人",
      duration: "依活動而定",
      students: "團體課程",
      price: "請洽詢",
      image: "course_28.png",
      description: "用軟陶捏製迷你飾物、動物或卡通角色，烘烤後變成耐久小飾品，訓練小手靈活性。",
      features: ["-", "-"]
    },
    {
      title: "【小小絲路商人】紮染布藝課",
      age: "小朋友/大人",
      duration: "依活動而定",
      students: "團體課程",
      price: "請洽詢",
      image: "course_29.png",
      description: "用橡皮筋和染料製作繽紛紮染布，結合絲路故事，讓藝術更有趣。",
      features: ["-", "-"]
    },    
    {
      title: "【非遺小傳人】中國傳統藝術體驗",
      age: "小朋友/大人",
      duration: "依活動而定",
      students: "團體課程",
      price: "請洽詢",
      image: "course_30.png",
      description: "精選適合小朋友及大人的非遺技藝，如剪紙、皮影戲、風箏彩繪，邊玩邊學中華文化精髓。",
      features: ["-", "-"]
    },  
    {
      title: "【創意無限大】兒童繪畫探索班",
      age: "幼稚園/小學",
      duration: "依活動而定",
      students: "團體課程",
      price: "請洽詢",
      image: "course_31.png",
      description: "透過多元主題（海底世界、外太空、童話故事）引導孩子自由創作，使用蠟筆、水彩、拼貼等不同媒材，激發藝術潛能。",
      features: ["-", "-"]
    },  
    {
      title: "【快樂捏塑課】創意黏土班",
      age: "幼稚園/小學",
      duration: "依活動而定",
      students: "團體課程",
      price: "請洽詢",
      image: "course_32.png",
      description: "使用安全無毒的超輕黏土，讓小朋友捏塑立體造型（動物、食物、交通工具），培養空間感和創造力，作品可帶回家展示。",
      features: ["-", "-"]
    },      
    {
      title: "【花仙子魔法課】童趣花藝班",
      age: "小朋友/大人",
      duration: "依活動而定",
      students: "團體課程",
      price: "請洽詢",
      image: "course_33.png",
      description: "學習基礎插花技巧，創作迷你花束或盆栽。課程融入植物小知識（如花朵構造、生長過程），並可結合節日主題（母親節感恩花禮、聖誕節花環）。成品可帶回家送給家人，培養美感與感恩心。",
      features: ["-", "-", "-", "-"]
    }
  ];

  const academicCourses = [
    {
      title: "【大腦超算力】珠心算魔法班",
      age: "幼稚園/小學",
      duration: "依活動而定",
      students: "團體課程",
      price: "請洽詢",
      image: "course_34.png",
      description: "透過算盤與心算技巧訓練，提升學生的數字敏感度與計算速度，培養邏輯思維與專注力。課程結合遊戲化練習，讓數學變得有趣！",
      features: ["-", "-", "-"]
    }, 
    {
      title: "【小小數學家】奧數思維訓練營",
      age: "幼稚園/小學",
      duration: "依活動而定",
      students: "團體課程",
      price: "請洽詢",
      image: "course_35.png",
      description: "透過趣味數學題目與解題技巧，激發學生的創造性思維與問題解決能力，適合培養數學競賽人才。",
      features: ["-", "-", "-", "-", "-", "-"]
    }, 
    {
      title: "【快樂學中文】非華語兒童中文啟蒙班",
      age: "幼稚園/小學",
      duration: "依活動而定",
      students: "團體課程",
      price: "請洽詢",
      image: "course_36.png",
      description: "專為非華語學生設計，透過圖像、歌曲和互動遊戲學習基礎中文，幫助學生輕鬆融入中文環境。",
      features: ["-", "-", "-", "-", "-", "-"]
    },  
    {
      title: "【童言童語】幼稚園普通話水平測試班",
      age: "幼稚園",
      duration: "依活動而定",
      students: "團體課程",
      price: "請洽詢",
      image: "course_37.png",
      description: "以兒歌、故事和角色扮演，讓小朋友在輕鬆氛圍中學習普通話，打好語言基礎，並準備普通話水平考試。",
      features: ["", "", "", "", "", ""]
    }, 
    {
      title: "【說好普通話】小學普通話考證班",
      age: "小學",
      duration: "依活動而定",
      students: "團體課程",
      price: "請洽詢",
      image: "course_38.png",
      description: "針對小學生設計的普通話強化課程，結合朗讀、對話和聽力練習，幫助學生順利通過普通話水平考試。",
      features: ["-", "-", "-", "-", "-", "-"]
    },  
    {
      title: "【音樂小天才】LCM幼兒音樂證書班",
      age: "幼稚園",
      duration: "依活動而定",
      students: "團體課程",
      price: "請洽詢",
      image: "course_39.png",
      description: "透過唱歌、節奏遊戲和簡單樂器演奏，培養幼兒的音樂感知與表現力，並為LCM音樂證書考試做好準備。",
      features: ["-", "-", "-", "-", "-"]
    },  
    {
      title: "【故事小偵探】中文閱讀理解班",
      age: "幼稚園/小學",
      duration: "依活動而定",
      students: "團體課程",
      price: "請洽詢",
      image: "course_40.png",
      description: "透過繪本共讀、圖卡遊戲和簡單問答，培養小朋友的閱讀興趣和理解能力，為日後語文學習打好基礎。",
      features: ["-", "-", "-"]
    },  
    {
      title: "【故事小偵探】中文閱讀理解班",
      age: "幼稚園/小學",
      duration: "依活動而定",
      students: "團體課程",
      price: "請洽詢",
      image: "course_41.png",
      description: "從看圖說故事開始，引導小朋友用簡單詞彙表達想法，逐步培養寫作興趣和能力。",
      features: ["-", "-", "-", "-", "-", "-"]
    },    
    {
      title: "【小小演說家】普通話辯論隊",
      age: "小學",
      duration: "依活動而定",
      students: "團體課程",
      price: "請洽詢",
      image: "course_42.png",
      description: "透過主題討論和簡單辯論練習，提升學生的普通話表達能力、邏輯思維和自信心。",
      features: ["-", "-", "-", "-"]
    },  
    {
      title: "【戲劇小明星】普通話話劇班",
      age: "小學",
      duration: "依活動而定",
      students: "團體課程",
      price: "請洽詢",
      image: "course_43.png",
      description: "透過角色扮演和短劇演出，讓學生在輕鬆有趣的氛圍中練習普通話，同時培養表演能力和團隊合作精神。",
      features: ["-", "-", "-", "-", "-"]
    }
  ];

  const CourseCard = ({ course }: { course: any }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2">
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
        
        {/* Hidden UI elements - keeping in code but not displaying */}
        <div className="hidden">
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
            {course.features.map((feature: string, idx: number) => (
              <div key={idx} className="flex items-center space-x-2">
                <Star size={14} className="text-yellow-500" />
                <span className="text-sm text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="hidden text-2xl font-bold" style={{color: '#df5121'}}>{course.price}</div>
          <a href="#contact" className="text-white px-4 py-2 rounded-full hover:shadow-lg transition-all flex items-center space-x-1" style={{background: '#df5121'}}>
            <span>報價查詢</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {/* Art Activities Section */}
      <section id="art-activities" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">藝術活動</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              透過多元化的藝術課程，培養小朋友/大人的創造力、想像力和審美能力，讓每個小朋友/大人都能在藝術的世界中自由探索。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artCourses.slice(0, artCoursesVisible).map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>

          {artCoursesVisible < artCourses.length && (
            <div className="text-center mt-12">
              <button
                onClick={() => setArtCoursesVisible(prev => Math.min(prev + 3, artCourses.length))}
                className="text-white px-8 py-3 rounded-full hover:shadow-lg transition-all font-semibold"
                style={{background: '#df5121'}}
              >
                更多
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Academic Activities Section */}
      <section id="academic-activities" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">學術活動</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              專業的學術課程讓小朋友建立紮實的學習基礎，培養邏輯思維和解決問題的能力。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {academicCourses.slice(0, academicCoursesVisible).map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>

          {academicCoursesVisible < academicCourses.length && (
            <div className="text-center mt-12">
              <button
                onClick={() => setAcademicCoursesVisible(prev => Math.min(prev + 3, academicCourses.length))}
                className="text-white px-8 py-3 rounded-full hover:shadow-lg transition-all font-semibold"
                style={{background: '#df5121'}}
              >
                更多
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default GroupCourses;