import React from 'react';
import ScrollIndicator from '../main-page/scroll-indicator';

const AssistantBenefitsSection = ({ sectionRef, sectionInView, hasTriggered }) => (
  <section
    ref={sectionRef}
    className={`w-full h-screen min-h-[800px] snap-start relative flex items-center justify-center pointer-events-auto bg-black/50 mb-20 transform transition-all duration-[1.2s] ease-out ${
      hasTriggered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
    }`}
  >
    <div className="w-full max-w-7xl px-8">
      <h1 className={`text-6xl font-bold text-white mb-12 text-center text-shadow-glow relative group transition-all duration-[1.5s] ease-out ${
        hasTriggered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
      }`}>
        <span className="inline-block animate-float-title">ASSISTANT</span>
        <span className="inline-block animate-float-title-delayed mx-2">BENEFITS</span>
      </h1>

      <div className="relative">
        <div className={`absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl blur-xl transition-all duration-1000 ${
          hasTriggered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}></div>

        <div className="relative grid grid-cols-3 gap-8 p-8">
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
                { name: "And Many More"}
              ]
            }
          ].map((category, index) => (
            <div
              key={index}
              className={`group relative rounded-xl p-6 overflow-hidden bg-black/90 backdrop-blur-md transition-all duration-1000 border border-white hover:bg-black/95 transform ${
                hasTriggered 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-20 scale-95'
              }`}
              style={{
                transitionDelay: `${index * 300}ms`,
                transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
            >
              <div className={`absolute bg-black duration-500`}></div>

              <h2 className={`text-3xl mb-6 relative z-10 transition-all duration-1000 ${
                hasTriggered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`} 
              style={{ transitionDelay: `${(index * 300) + 200}ms` }}
              id="hero-text-static">
                {category.title}
              </h2>

              <div className="space-y-4 relative z-10">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-3 p-2 rounded-lg transform hover:translate-x-2 transition-all duration-300 ${
                      hasTriggered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}
                    style={{ 
                      transitionDelay: `${(index * 300) + (idx * 100) + 400}ms`,
                      transitionDuration: '800ms',
                      transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-lg text-white group-hover:text-white">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r 
                 from-transparent via-${category.color}-500/50 to-transparent
                 transform scale-x-0 group-hover:scale-x-100
                 transition-transform duration-700 ease-out`}></div>
            </div>
          ))}
        </div>

        <div className={`absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-1000 ${
          hasTriggered ? 'opacity-100' : 'opacity-0'
        }`}>
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="shine-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 4}s`,
                transform: `scale(${0.5 + Math.random() * 1})`,
                opacity: 0.1 + Math.random() * 0.5
              }}
            />
          ))}
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={`layer2-${i}`}
              className="shine-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${1 + Math.random() * 3}s`,
                transform: `scale(${0.3 + Math.random() * 0.7})`,
                opacity: 0.05 + Math.random() * 0.3
              }}
            />
          ))}
        </div>
      </div>
    </div>
    <ScrollIndicator text="Registration" />
  </section>
);

export default AssistantBenefitsSection;