import React from 'react';
import ScrollIndicator from '../main-page/scroll-indicator';

const AssistantBenefitsSection = ({ sectionRef }) => (
  <section
    ref={sectionRef}
    className="w-full h-screen min-h-[800px] snap-start relative flex items-center justify-center pointer-events-auto bg-black/50 mb-20"
  >
    <div className="w-full max-w-7xl px-8">
      <h1 className="text-6xl font-bold text-white mb-12 text-center text-shadow-glow animate-slideDown relative group">
        <span className="inline-block animate-float-title transition-all duration-300">ASSISTANT</span>
        <span className="inline-block animate-float-title-delayed mx-2">BENEFITS</span>
      </h1>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl blur-xl"></div>

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
              className="group relative rounded-xl p-6 overflow-hidden bg-black/90 backdrop-blur-md transition-all duration-500 border border-white hover:bg-black/95"
            >
              <div className={`absolute bg-black duration-500`}></div>

              <h2 className="text-3xl mb-6 relative z-10" id="hero-text-static">
                {category.title}
              </h2>

              <div className="space-y-4 relative z-10">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-3 p-2 rounded-lg transform hover:translate-x-2 transition-all duration-300`}
                    style={{ animationDelay: `${idx * 0.1}s` }}
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
                 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>

        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-white/30 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
    <ScrollIndicator text="Registration" />
  </section>
);

export default AssistantBenefitsSection;