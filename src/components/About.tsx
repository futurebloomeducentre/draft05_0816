import React from 'react';
import { Heart, Target, Star, ShieldCheck, BookOpen } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "用心教學",
      description: "每位老師都以愛心和耐心，陪伴孩子在藝術路上成長"
    },
    {
      icon: Target,
      title: "因材施教",
      description: "根據每個孩子的特質和興趣，制定個人化的學習計劃"
    },
    {
      icon: Star,
      title: "追求卓越",
      description: "不斷提升教學品質，讓每個孩子都能發揮最大潛能"
    },
    {
      icon: ShieldCheck,
      title: "全面發展",
      description: "培養孩子的創造力、想像力和審美能力"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">關於桐年</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            桐年教育團隊由多位持牌幼稚園教師、小學教師、特殊教育老師及專業社工組成，結合教育專業與藝術專長，為不同學習需求的孩子提供適性化的「學術+藝術」整合課程。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">我們的使命</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              我們致力於創造一個讓學術與藝術相互滋養的學習生態，透過專業教師團隊的引導，幫助孩子：
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              • 在藝術創作中自然培養觀察力、邏輯思考與學科應用能力<br />
              • 在學術學習時融入藝術元素，激發學習動機與創造力<br />
              • 發展個人優勢的同時，建立跨領域的知識連結與問題解決能力<br />
              • 在溫暖支持的環境中，培養自信表達與終身學習的熱忱
            </p>
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-2xl">
              <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-2xl">
                <h4 className="font-semibold text-gray-800 mb-2">我們的承諾</h4>
                <p className="text-gray-700">
                  ✅ 專業師資：由教育專業人士與藝術導師共同設計課程<br />
                  ✅ 個別化指導：根據學習風格調整教學方法<br />
                  ✅ 全人發展：同步關注學業表現、藝術潛能與心理成長
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/8613092/pexels-photo-8613092.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="藝術教室環境"
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all">
                <value.icon style={{color: '#df5121'}} size={32} />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;