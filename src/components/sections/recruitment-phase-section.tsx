import React from 'react';
import ScrollIndicator from '../main-page/scroll-indicator';

const RecruitmentPhaseSection = ({ sectionRef, sectionInView, hasTriggered }) => (
  <section ref={sectionRef} className="w-full h-screen min-h-[600px] max-h-[1080px] snap-start relative flex items-center justify-center pointer-events-auto mb-20">
    <div className="w-full max-w-[90vw] lg:max-w-[80vw] px-4 md:px-8">
      <h1 className={`text-[6vw] md:text-[4vw] lg:text-[3vw] font-bold text-white mb-[2vh] text-center text-shadow-glow relative group transition-all duration-1000 ${
        hasTriggered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
      }`}>
        <span className="inline-block animate-float-title">RECRUITMENT</span>
        <span className="inline-block animate-float-title-delayed mx-2">PHASE</span>
      </h1>

      <div className="relative h-[min(60vh,600px)] px-4">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="none">
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
              animation: hasTriggered ? 'drawPath 4s linear forwards' : 'none'
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

        <div className="absolute inset-0 scale-[0.8] lg:scale-100">
          {[
            {
              phase: "01",
              title: "Initial Test",
              isCurrent: true,
              position: "left-[calc(15%_+_2vw)] top-[45%]",
              steps: ["Aptitude Test", "Programming Test"],
              pathPercent: 15,
              color: "rgb(34, 197, 94)", // green-500
              hoverStyle: "hover:!border-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.5)]"
            },
            {
              phase: "02",
              title: "Pre Training",
              position: "left-[calc(35%_+_2vw)] top-[25%]",
              steps: ["DS Using C", "OOP Using Java", "Database"],
              pathPercent: 35,
              color: "rgb(59, 130, 246)", // blue-500
              hoverStyle: "hover:!border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            },
            {
              phase: "03",
              title: "Interview",
              position: "left-[calc(65%_-_2vw)] top-[65%]",
              steps: ["Resume", "Presentation"],
              pathPercent: 50,
              color: "rgb(234, 179, 8)", // yellow-500
              hoverStyle: "hover:!border-yellow-500 hover:shadow-[0_0_15px_rgba(234,179,8,0.5)]"
            },
            {
              phase: "04",
              title: "Core Training",
              position: "left-[calc(85%_-_2vw)] top-[45%]",
              steps: ["Learning Session", "Case Solving", "Presentation", "Evaluation"],
              pathPercent:70,
              color: "rgb(239, 68, 68)", // red-500
              hoverStyle: "hover:!border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.5)]"
            }
          ].map((phase, index) => (
            <div key={index}
              className={`absolute ${phase.position} transform -translate-x-1/2 -translate-y-1/2
                ${phase.isCurrent ? 'z-20 scale-110' : 'z-10'} opacity-0
                ${hasTriggered ? 'animate-fade-in-card' : ''}`}
              style={{
                animationDelay: `${(phase.pathPercent / 100) * 4}s`
              }}
            >
              <div className={`group relative flex flex-col items-center animate-float phase-group-${phase.phase}`}>
                <div 
                  className={`particle-container w-[8vmin] h-[8vmin] md:w-[10vmin] md:h-[10vmin] rounded-full 
                             flex items-center justify-center bg-cyan-500/20 border-2 border-white -translate-y-[10vh] 
                             transition-all duration-300 phase-card-${phase.phase}`}
                >
                  <span className="text-[2vmin] md:text-[2.5vmin]" id="hero-text-static">{phase.phase}</span>

                  {phase.isCurrent && (
                    <div className="absolute inset-0 rounded-full bg-cyan-500/20 animate-ping" />
                  )}
                  
                  <div className="particles-wrapper absolute inset-0">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="particle"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          '--random-x': `${(Math.random() - 0.5) * 20}px`, 
                          '--random-y': `-${Math.random() * 50 + 20}px`,
                          '--initial-opacity': 0.4,
                          animationDelay: `${i * 0.2}s`, 
                          animationDuration: '1.5s',
                          animation: 'recruitment-particle 1.5s ease-out infinite',
                          width: '3px',
                          height: '3px',
                          color: phase.color,
                          backgroundColor: phase.color,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div 
                  className={`mt-4 text-center bg-black/50 border-2 border-white rounded-lg p-2 md:p-3
                           transition-all duration-300 phase-card-${phase.phase} relative overflow-visible
                           w-[20vmin] md:w-[25vmin]`}
                >
                  <div className="particles-wrapper absolute -bottom-4 w-full opacity-0 group-hover:opacity-100">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="particle"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          '--random-x': `${(Math.random() - 0.5) * 30}px`,
                          '--random-y': `-${Math.random() * 150 + 50}px`,
                          animationDelay: `${i * 0.1}s`,
                          animationDuration: '2s',
                          width: `${Math.random() * 3 + 2}px`,
                          height: `${Math.random() * 3 + 2}px`,
                          color: phase.color,
                          backgroundColor: phase.color,
                          opacity: Math.random() * 0.5 + 0.5
                        }}
                      />
                    ))}
                  </div>
                  <h3 className="text-[1.5vmin] md:text-[2vmin] mb-2" id="hero-text-static">{phase.title}</h3>
                  <div className="space-y-1">
                    {phase.steps.map((step, i) => (
                      <div key={i}
                        className={`text-[1.2vmin] md:text-[1.5vmin] text-white`}>
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