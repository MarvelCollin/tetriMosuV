import React from 'react';
import ScrollIndicator from '../main-page/scroll-indicator';

const RecruitmentPhaseSection = ({ sectionRef, sectionInView }) => (
  <section ref={sectionRef} className="w-full h-screen min-h-[800px] snap-start relative flex items-center justify-center pointer-events-auto mb-20">
    <div className="w-full max-w-7xl px-8">
      <h1 className="text-6xl font-bold text-white mb-8 text-center text-shadow-glow animate-slideDown relative group">
        <span className="inline-block animate-float-title transition-all duration-300">RECRUITMENT</span>
        <span className="inline-block animate-float-title-delayed mx-2">PHASE</span>
      </h1>

      <div className="relative h-[600px] px-4">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 600">
          <path
            id="roadPath"
            d="M100,300 C250,300 350,100 500,300 C650,500 750,100 900,300"
            fill="none"
            stroke="url(#roadGradient)"
            strokeWidth="40"
            className="drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]"
            strokeDasharray="2000"
            strokeDashoffset="2000"
            style={{
              animation: sectionInView ? 'drawPath 7s linear forwards' : 'none'
            }}
          />

          <path
            d="M100,300 C250,300 350,100 500,300 C650,500 750,100 900,300"
            fill="none"
            stroke="rgba(6,182,212,0.5)"
            strokeWidth="2"
            strokeDasharray="10,10"
            className="animate-dash opacity-50"
          />

          <defs>
            <linearGradient id="roadGradient" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="rgba(17,24,39,0.8)" />
              <stop offset="50%" stopColor="rgba(6,182,212,0.2)" />
              <stop offset="100%" stopColor="rgba(17,24,39,0.8)" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute inset-0">
          {[
            {
              phase: "01",
              title: "Initial Test",
              isCurrent: true,
              position: "left-[15%] top-[45%]",
              steps: ["Aptitude Test", "Programming Test"],
              pathPercent: 15
            },
            {
              phase: "02",
              title: "Pre Training",
              position: "left-[35%] top-[25%]",
              steps: ["DS Using C", "OOP Using Java", "Database"],
              pathPercent: 35
            },
            {
              phase: "03",
              title: "Interview",
              position: "left-[65%] top-[65%]",
              steps: ["Resume", "Presentation"],
              pathPercent: 65
            },
            {
              phase: "04",
              title: "Core Training",
              position: "left-[85%] top-[45%]",
              steps: ["Learning Session", "Case Solving", "Presentation", "Evaluation"],
              pathPercent: 85
            }
          ].map((phase, index) => (
            <div key={index}
              className={`absolute ${phase.position} transform -translate-x-1/2 -translate-y-1/2
                ${phase.isCurrent ? 'z-20 scale-110' : 'z-10'} opacity-0
                ${sectionInView ? 'animate-fade-in-card' : ''}`}
              style={{
                animationDelay: `${(phase.pathPercent / 100) * 4}s` 
              }}
            >
              <div className={`group flex flex-col items-center animate-float`}>
                <div className={`w-20 h-20 rounded-full flex items-center justify-center
                   bg-cyan-500/20 border-2 border-white shadow-lg shadow-cyan-500/50`}>
                  <span className="text-3xl" id="hero-text-static">{phase.phase}</span>

                  {phase.isCurrent && (
                    <div className="absolute inset-0 rounded-full bg-cyan-500/20 animate-ping" />
                  )}
                </div>

                <div className={`mt-4 text-center bg-black/50 border-2 border-white/50 rounded-lg p-3`}>
                  <h3 className="text-xl mb-2" id="hero-text-static">{phase.title}</h3>
                  <div className="space-y-1">
                    {phase.steps.map((step, i) => (
                      <div key={i}
                        className={`text-sm text-white`}>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <ScrollIndicator text="Initial Test" />
  </section>
);

export default RecruitmentPhaseSection;