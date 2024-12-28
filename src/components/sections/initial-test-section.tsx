import React from 'react';
import ScrollIndicator from '../main-page/scroll-indicator';

const InitialTestSection = ({ sectionRef, scrollToTop, sectionInView, hasTriggered }) => (
  <section
    ref={sectionRef}
    className={`initial-test-section w-full h-screen min-h-[60vh] max-h-[100vh] snap-start relative flex flex-col items-center justify-center px-2 mb-10 md:mb-8`}
  >
    <div className="content w-full max-w-[95vw] lg:max-w-[80vw]"> 
      <h1 
        className={`lg:text-[4vw] sm:text-[6vw]  font-bold text-white mb-2 text-center text-shadow-glow transition-all duration-1000 transform
          ${hasTriggered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
      >
        <span className="inline-block animate-float-title">INITIAL</span>
        <span className="inline-block animate-float-title-delayed mx-1">TEST</span>
      </h1>

      <div className="relative flex flex-wrap items-center justify-center space-y-2 md:space-y-4">
        <div 
          className={`absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl blur-xl
            transition-all duration-1000 delay-300
            ${hasTriggered ? 'opacity-100' : 'opacity-0'}`}
        ></div>

        <div className="relative w-full">
          <div className="grid grid-cols-1 gap-2 md:gap-4 lg:grid-cols-3">
            <div 
              className={`flex-1 w-full group perspective transition-all duration-1000 transform
                ${hasTriggered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}
            >
              <div className="relative transform transition-transform duration-500 group-hover:rotate-y-12">
                <div className="p-2 md:p-3 lg:p-4 rounded-xl transition-all duration-300 bg-gradient-to-br from-cyan-500/10 to-transparent">
                  <div className="flex items-center justify-center gap-1 md:gap-2 mb-1 md:mb-2">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                      <span className="text-sm md:text-base">🧠</span>
                    </div>
                    <h2 className="text-xs md:text-sm" id="hero-text-static">Aptitude Test</h2>
                  </div>

                  <div className="space-y-1 md:space-y-2">
                    {[
                      { name: "Mathematical Reasoning", desc: "Solve mathematical problems" },
                      { name: "Pattern Recognition", desc: "Identify sequences and patterns" },
                      { name: "Analytical Thinking", desc: "Analyze and solve logical problems" }
                    ].map((item, idx) => (
                      <div key={idx}
                        className="p-1 md:p-2 bg-black rounded-lg transform hover:translate-x-2 
                        transition-all duration-300 border border-white">
                        <h3 className="text-[0.5rem] md:text-xs text-white/90 mb-1">{item.name}</h3>
                        <p className="text-[0.4rem] md:text-[0.75rem] text-white/60">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div 
              className={`flex-1 w-full group perspective transition-all duration-1000 delay-300 transform
                ${hasTriggered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
            >
              <div className="relative transform transition-all duration-500 group-hover:rotate-y-12">
                <div className="bg-gradient-to-br from-purple-500/10 to-transparent p-2 md:p-3 lg:p-4 rounded-xl 
                  hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex items-center justify-center gap-1 md:gap-2 mb-1 md:mb-2">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-xl bg-purple-500/20 flex items-center justify-center">
                      <span className="text-sm md:text-base">💻</span>
                    </div>
                    <h2 className="text-xs md:text-sm" id="hero-text-static">Programming Test</h2>
                  </div>
                  <h3 className="text-[0.5rem] md:text-xs text-white/90 mb-1 md:mb-2">You can use : </h3>
                  <div className="space-y-1 md:space-y-2">
                    {[
                      { lang: "C/C++" },
                      { lang: "Java" },
                      { lang: "Python" }
                    ].map((lang, idx) => (
                      <div key={idx} className="relative group/item">
                        <div className="p-1 md:p-2 bg-black rounded-lg transform hover:translate-x-2
                          transition-all duration-300 border border-white">
                          <div className="flex items-center gap-1 md:gap-2">
                            <span className="text-[0.4rem] md:text-[0.75rem]">{lang.icon}</span>
                            <div>
                              <h3 className="text-[0.5rem] md:text-xs text-white/90">{lang.lang}</h3>
                              <p className="text-[0.4rem] md:text-[0.75rem] text-white/60">{lang.desc}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div 
              className={`flex-1 w-full group perspective transition-all duration-1000 delay-500 transform
                ${hasTriggered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
            >
              <div className="relative transform transition-all duration-500 group-hover:rotate-x-12">
                <div className="p-2 md:p-3 lg:p-4 rounded-xl transition-all duration-300 bg-gradient-to-br from-blue-500/10 to-transparent">
                  <div className="flex items-center justify-center gap-1 md:gap-2 mb-1 md:mb-2">
                    <div className="rounded-xl bg-blue-500/20 flex items-center justify-center">
                      <span className="text-sm md:text-base">📅</span>
                    </div>
                    <h2 className="text-xs md:text-sm" id="hero-text-static">Test Schedule</h2>
                  </div>

                  <div className="gap-1 space-y-2 md:gap-2">
                    <div className="w-full space-y-1 md:space-y-2 justify-items-end align-middle">
                      <div className="w-full bg-black p-1 md:p-3 lg:p-4 rounded-lg border border-white transition-all duration-300">  
                        <h3 className="text-[0.5rem] md:text-xs text-white/90 mb-1 md:mb-2 transform hover:translate-x-2
                            transition-all duration-300 w-full">27 March 2024</h3>
                        <div className="space-y-1 md:space-y-2">
                          <p className="text-[0.4rem] md:text-[0.75rem] text-white transform hover:translate-x-2
                            transition-all duration-300">Batch 1: 08:00 - 11:00</p>
                          <p className="text-[0.4rem] md:text-[0.75rem] text-white transform hover:translate-x-2
                            transition-all duration-300">Batch 2: 13:00 - 16:00</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1 md:space-y-2">
                      {[
                        { text: "Dress Politely", icon: "👔" },
                        { text: "Bring Binusian Card", icon: "🪪" },
                        { text: "Arrive On Time", icon: "⏰" }
                      ].map((item, idx) => (
                        <div key={idx}
                          className="flex items-center gap-1 md:gap-2 p-1 md:p-2 bg-black rounded-lg
                          border border-white transform hover:translate-x-2 duration-300 transition-all">
                          <span className="text-[0.4rem] md:text-[0.75rem]">{item.icon}</span>
                          <span className="text-[0.4rem] md:text-[0.75rem] text-white/90">{item.text}</span>
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