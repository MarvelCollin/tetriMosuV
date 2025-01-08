import React, { useState } from 'react';
import ScrollIndicator from '../main-page/scroll-indicator';

const AssistantBenefitsSection = ({ sectionRef, sectionInView, hasTriggered }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className={`w-full h-screen min-h-[60vh] max-h-[100vh] snap-start relative flex items-center justify-center pointer-events-auto mb-40 md:mb-20 sm:mb-8 
        transform transition-all duration-1000 ease-out ${
        hasTriggered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="w-full max-w-[95vw] lg:max-w-[80vw] px-2 md:px-6 sm:px-1">
        <h1 className={`text-[6vw] md:text-[4vw] lg:text-[3vw] font-bold text-white mb-[1vh] text-center text-shadow-glow transition-all duration-700 
          transform ${hasTriggered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
          style={{ transitionDelay: '200ms' }}
        >
          <span className="inline-block animate-float-title">ASSISTANT</span>
          <span className="inline-block mx-2 animate-float-title-delayed">BENEFITS</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6">
          {[
            {
              title: "SOFT SKILLS",
              color: "cyan",
              skills: [
                { name: "Public Speaking", icon: "🎤" },
                { name: "Leadership", icon: "👑" },
                { name: "Problem Solving", icon: "🧩" },
                { name: "Time Management", icon: "⏰" },
                { name: "Communication", icon: "💬" },
                { name: "And Many More" }
              ]
            },
            {
              title: "HARD SKILLS",
              color: "purple",
              skills: [
                { name: "Programming", icon: "💻" },
                { name: "Web Development", icon: "🌐" },
                { name: "Mobile Apps", icon: "📱" },
                { name: "Database", icon: "🗄️" },
                { name: "Cloud Computing", icon: "☁️" },
                { name: "And Many More" }
              ]
            },
            {
              title: "OTHER",
              color: "blue",
              skills: [
                { name: "Salary", icon: "💰" },
                { name: "Health Benefits", icon: "🏥" },
                { name: "Free Parking", icon: "🅿️" },
                { name: "Career Path", icon: "📈" },
                { name: "Second Family", icon: "❤️" },
                { name: "And Many More" }
              ]
            }
          ].map((category, index) => (
            <div
              key={index}
              className={`group bg-black/90 backdrop-blur-md rounded-xl p-2 md:p-4 lg:p-6 border border-white/10
                transition-all duration-300 ease-out transform
                ${hasTriggered 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${400 + index * 200}ms` }}
            >
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <h2 className="text-[5vw] md:text-[3vw] lg:text-[2.5vw] mb-[1vh]" id="hero-text-static">
                  {category.title}
                </h2>
                <span className="text-[5vw] md:hidden">⬇️</span>
              </div>

              <div className={`space-y-[1vh] ${activeIndex === index ? 'block animate-slide-down' : 'hidden'} md:block transition-all duration-300 ease-in-out`}>
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-1 md:gap-2 p-1 md:p-2 rounded-lg
                      transform transition-all duration-500 ease-out
                      ${hasTriggered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                    style={{ transitionDelay: `${600 + index * 200 + idx * 100}ms` }}
                  >
                    <span className="text-[3vmin] md:text-[2.5vmin]">{skill.icon}</span>
                    <span className="text-[2.5vmin] md:text-[2vmin] text-white/90">{skill.name}</span>
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 pointer-events-none">
                <div className="particle-container">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="particle" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 5}s` }}></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ScrollIndicator text="Contact Us" />
    </section>
  );
};

export default AssistantBenefitsSection;