import React from 'react';
import ScrollIndicator from '../main-page/scroll-indicator';

const InitialTestSection = ({ sectionRef, scrollToTop, sectionInView, hasTriggered }) => (
  <section
    ref={sectionRef}
    className={`w-full h-screen min-h-[600px] max-h-[1080px] snap-start relative flex items-center justify-center pointer-events-auto mb-10`}
  >
    <div className="w-full max-w-[90vw] lg:max-w-[80vw] px-4 md:px-6"> 
      <h1 
        className={`text-[5vw] md:text-[4vw] lg:text-[3vw] font-bold text-white mb-[1vh] text-center text-shadow-glow transition-all duration-1000 transform
          ${hasTriggered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
      >
        <span className="inline-block animate-float-title">INITIAL</span>
        <span className="inline-block animate-float-title-delayed mx-1">TEST</span>
      </h1>

      <div className="relative flex flex-col items-center">
        <div 
          className={`absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl blur-xl
            transition-all duration-1000 delay-300
            ${hasTriggered ? 'opacity-100' : 'opacity-0'}`}
        ></div>

        <div className="relative w-full">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-[1vh] lg:gap-[1vw]">
            {/* Aptitude Test Card */}
            <div 
              className={`flex-1 w-full group perspective transition-all duration-1000 transform
                ${hasTriggered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}
            >
              <div className="relative transform transition-all duration-500 group-hover:rotate-y-12">
                <div className="p-[1.5vh] lg:p-[1.5vw] rounded-xl transition-all duration-300">
                  <div className="flex items-center gap-[1vw] mb-[1.5vh]">
                    <div className="w-[8vmin] h-[8vmin] md:w-[6vmin] md:h-[6vmin] rounded-xl bg-cyan-500/20 flex items-center justify-center">
                      <span className="text-[4vmin] md:text-[3vmin]">🧠</span>
                    </div>
                    <h2 className="text-[3vmin] md:text-[2.5vmin]" id="hero-text-static">Aptitude Test</h2>
                  </div>

                  <div className="space-y-[1vh]">
                    {[
                      { name: "Mathematical Reasoning", desc: "Solve mathematical problems" },
                      { name: "Pattern Recognition", desc: "Identify sequences and patterns" },
                      { name: "Analytical Thinking", desc: "Analyze and solve logical problems" }
                    ].map((item, idx) => (
                      <div key={idx}
                        className="p-3 bg-black rounded-lg transform hover:translate-x-2 
                        transition-all duration-300 border border-white">
                        <h3 className="text-[2.5vmin] md:text-[2vmin] text-white/90 mb-1">{item.name}</h3>
                        <p className="text-[2vmin] md:text-[1.5vmin] text-white/60">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Programming Test Card */}
            <div 
              className={`flex-1 w-full group perspective transition-all duration-1000 delay-300 transform
                ${hasTriggered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
            >
              <div className="relative transform transition-all duration-500 group-hover:rotate-y-12">
                <div className="bg-gradient-to-br from-purple-500/10 to-transparent p-[1.5vh] lg:p-[1.5vw] rounded-xl 
                  hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex items-center gap-[1vw] mb-[1.5vh]">
                    <div className="w-[8vmin] h-[8vmin] md:w-[6vmin] md:h-[6vmin] rounded-xl bg-purple-500/20 flex items-center justify-center">
                      <span className="text-[4vmin] md:text-[3vmin]">💻</span>
                    </div>
                    <h2 className="text-[3vmin] md:text-[2.5vmin]" id="hero-text-static">Programming Test</h2>
                  </div>
                  <h3 className="text-[2.5vmin] md:text-[2vmin] text-white/90 mb-[1vh]">You can use : </h3>
                  <div className="space-y-[1vh]">
                    {[
                      { lang: "C/C++" },
                      { lang: "Java" },
                      { lang: "Python" }
                    ].map((lang, idx) => (
                      <div key={idx} className="relative group/item">
                        <div className="p-3 bg-black rounded-lg transform hover:translate-x-2
                          transition-all duration-300 border border-white">
                          <div className="flex items-center gap-2">
                            <span className="text-[2.5vmin] md:text-[2vmin]">{lang.icon}</span>
                            <div>
                              <h3 className="text-[2.5vmin] md:text-[2vmin] text-white/90">{lang.lang}</h3>
                              <p className="text-[2vmin] md:text-[1.5vmin] text-white/60">{lang.desc}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Test Schedule Card */}
          <div 
            className={`mt-[2vh] group perspective transition-all duration-1000 delay-500 transform
              ${hasTriggered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
          >
            <div className="relative transform transition-all duration-500 group-hover:rotate-x-12">
              <div className="p-[1.5vh] lg:p-[1.5vw] rounded-xl transition-all duration-300">
                <div className="flex items-center justify-center gap-[1vw] mb-[1.5vh]">
                  <div className="w-[8vmin] h-[8vmin] md:w-[6vmin] md:h-[6vmin] rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <span className="text-[4vmin] md:text-[3vmin]">📅</span>
                  </div>
                  <h2 className="text-[3vmin] md:text-[2.5vmin]" id="hero-text-static">Test Schedule</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1vh] lg:gap-[1vw]">
                  <div className="space-y-[1vh] justify-items-end align-middle">
                    <div className="bg-black p-[1.5vh] lg:p-[1.5vw] rounded-lg border border-white transition-all duration-300">  
                      <h3 className="text-[4vmin] md:text-[3vmin] text-white/90 mb-[1vh] transform hover:translate-x-2
                          transition-all duration-300">27 March 2024</h3>
                      <div className="space-y-[1vh]">
                        <p className="text-[3vmin] md:text-[2.5vmin] text-white transform hover:translate-x-2
                          transition-all duration-300">Batch 1: 08:00 - 11:00</p>
                        <p className="text-[3vmin] md:text-[2.5vmin] text-white transform hover:translate-x-2
                          transition-all duration-300">Batch 2: 13:00 - 16:00</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-[1vh]">
                    {[
                      { text: "Dress Politely", icon: "👔" },
                      { text: "Bring Binusian Card", icon: "🪪" },
                      { text: "Arrive On Time", icon: "⏰" }
                    ].map((item, idx) => (
                      <div key={idx}
                        className="flex items-center gap-2 p-3 bg-black rounded-lg
                        border border-white transform hover:translate-x-2 duration-300 transition-all">
                        <span className="text-[2.5vmin] md:text-[2vmin]">{item.icon}</span>
                        <span className="text-[2.5vmin] md:text-[2vmin] text-white/90">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ScrollIndicator 
      text="Registration" 
      onClick={scrollToTop} 
      className={`transition-all duration-1000 delay-700 transform
        ${hasTriggered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    />
  </section>
);

export default InitialTestSection;