import React from 'react';
import ScrollIndicator from '../main-page/scroll-indicator';

const AssistantBenefitsSection = ({ sectionRef, sectionInView, hasTriggered }) => (
  <section
    ref={sectionRef}
    className={`w-full h-screen min-h-[800px] snap-start relative flex items-center justify-center pointer-events-auto mb-20 
      transform transition-all duration-1000 ease-out ${
      hasTriggered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
    }`}
  >
    <div className="w-full max-w-7xl px-8">
      <h1 className={`text-6xl font-bold text-white mb-12 text-center text-shadow-glow transition-all duration-700 
        transform ${hasTriggered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
        style={{ transitionDelay: '200ms' }}
      >
        <span className="inline-block hover:scale-105 transition-transform duration-300">ASSISTANT</span>
        <span className="inline-block hover:scale-105 transition-transform duration-300 mx-2">BENEFITS</span>
      </h1>

      <div className="grid grid-cols-3 gap-8">
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
            className={`group bg-black/90 backdrop-blur-md rounded-xl p-6 border border-white/10
              transition-all duration-700 ease-out transform
              hover:border-${category.color}-500/50 hover:bg-black/95
              ${hasTriggered 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-20'}`}
            style={{ transitionDelay: `${400 + index * 200}ms` }}
          >
            <h2 className="text-3xl mb-6" id="hero-text-static">
              {category.title}
            </h2>

            <div className="space-y-4">
              {category.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-3 p-2 rounded-lg
                    transform transition-all duration-500 ease-out
                    hover:translate-x-2 hover:bg-white/5
                    ${hasTriggered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                  style={{ transitionDelay: `${600 + index * 200 + idx * 100}ms` }}
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-lg text-white/90">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    <ScrollIndicator text="Contact Us" />
  </section>
);

export default AssistantBenefitsSection;