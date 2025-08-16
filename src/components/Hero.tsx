import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                學術與藝術並行<br />
                啟發全人潛能
                <span className="block text-transparent bg-clip-text" style={{background: 'linear-gradient(to right, #df5121, #c44117)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                桐年卓越教育中心以「學術為基，藝術為翼」的教育理念，透過專業的跨領域教學團隊，為孩子打造兼具學術深度與藝術創意的成長環境。我們相信，每個孩子都值得擁有既能紮實學習又能自由創作的優質教育。
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="藝術教育" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl opacity-20 z-0" style={{background: '#df5121'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;