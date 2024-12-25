import React from 'react';
import ScrollIndicator from '../main-page/scroll-indicator';

const InitialTestSection = ({ sectionRef, scrollToTop, sectionInView }) => (
  <section
    ref={sectionRef}
    className="w-full h-screen min-h-[800px] snap-start relative flex items-center justify-center pointer-events-auto bg-black/50 mb-20"
  >
    <div className="w-full max-w-6xl px-8"> 
      <h1 
        className={`text-7xl font-bold text-white mb-8 text-center text-shadow-glow transition-all duration-1000 transform
          ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
      >
        <span className="inline-block animate-float-title">INITIAL</span>
        <span className="inline-block animate-float-title-delayed mx-2">TEST</span>
      </h1>

      <div className="relative flex flex-col items-center">
        <div 
          className={`absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl blur-xl
            transition-all duration-1000 delay-300
            ${sectionInView ? 'opacity-100' : 'opacity-0'}`}
        ></div>

        <div className="relative w-full">
          <div className="flex justify-between items-start gap-6">
            {/* Aptitude Test Card */}
            <div 
              className={`flex-1 group perspective transition-all duration-1000 transform
                ${sectionInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}
            >
              <div className="relative transform transition-all duration-500 group-hover:rotate-y-12">
                <div className="p-6 rounded-xl 
                  transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                      <span className="text-xl">🧠</span>
                    </div>
                    <h2 className="text-2xl" id="hero-text-static">Aptitude Test</h2>
                  </div>

                  <div className="space-y-3">
                    {[
                      { name: "Mathematical Reasoning", desc: "Solve mathematical problems" },
                      { name: "Pattern Recognition", desc: "Identify sequences and patterns" },
                      { name: "Analytical Thinking", desc: "Analyze and solve logical problems" }
                    ].map((item, idx) => (
                      <div key={idx}
                        className="p-3 bg-black rounded-lg transform hover:translate-x-2 
                        transition-all duration-300 border border-white">
                        <h3 className="text-lg text-white/90 mb-1">{item.name}</h3>
                        <p className="text-sm text-white/60">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Programming Test Card */}
            <div 
              className={`flex-1 group perspective transition-all duration-1000 delay-300 transform
                ${sectionInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
            >
              <div className="relative transform transition-all duration-500 group-hover:rotate-y-12">
                <div className="bg-gradient-to-br from-purple-500/10 to-transparent p-6 rounded-xl 
                  hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                      <span className="text-xl">💻</span>
                    </div>
                    <h2 className="text-2xl" id="hero-text-static">Programming Test</h2>
                  </div>
                    <h3 className="text-lg text-white/90 mb-2">You can use : </h3>

                  <div className="space-y-3">
                    {[
                      { lang: "C/C++" },
                      { lang: "Java" },
                      { lang: "Python" }
                    ].map((lang, idx) => (
                      <div key={idx} className="relative group/item">
                        <div className="p-3 bg-black rounded-lg transform hover:translate-x-2
                          transition-all duration-300 border border-white">
                          <div className="flex items-center gap-2">
                            <span className="text-xl">{lang.icon}</span>
                            <div>
                              <h3 className="text-lg text-white/90">{lang.lang}</h3>
                              <p className="text-sm text-white/60">{lang.desc}</p>
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
            className={`mt-6 group perspective transition-all duration-1000 delay-500 transform
              ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
          >
            <div className="relative transform transition-all duration-500 group-hover:rotate-x-12">
              <div className="p-6 rounded-xl 
                hover:border-blue-500/40 transition-all duration-300">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <span className="text-xl">📅</span>
                  </div>
                  <h2 className="text-2xl" id="hero-text-static">Test Schedule</h2>
                </div>

                <div className="grid grid-cols-2  gap-6">
                  <div className="space-y-3 justify-items-end align-middle">
                    <div className=" bg-black p-4  rounded-lg border border-white transition-all duration-300">  
                      <h3 className="text-4xl text-white/90 mb-1 transform hover:translate-x-2
                          transition-all duration-300">27 March 2024</h3>
                      <div className="space-y-1">
                        <p className="text-2xl text-white transform hover:translate-x-2
                          transition-all duration-300">Batch 1: 08:00 - 11:00</p>
                        <p className="text-2xl text-white transform hover:translate-x-2
                          transition-all duration-300">Batch 2: 13:00 - 16:00</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      { text: "Dress Politely", icon: "👔" },
                      { text: "Bring Binusian Card", icon: "🪪" },
                      { text: "Arrive On Time", icon: "⏰" }
                    ].map((item, idx) => (
                      <div key={idx}
                        className="flex items-center gap-2 p-3 bg-black rounded-lg
                        border border-white transform hover:translate-x-2 duration-300 transition-all">
                        <span className="text-xl">{item.icon}</span>
                        <span className="text-lg text-white/90">{item.text}</span>
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
      text="Assistant Benefits" 
      onClick={scrollToTop} 
      className={`transition-all duration-1000 delay-700 transform
        ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    />
  </section>
);

export default InitialTestSection;