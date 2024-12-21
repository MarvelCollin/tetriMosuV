import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import TetrisBackground from "../components/background-animations/tetris-background";
import "../index.css";
import HeroComponent from "../components/main-page/HeroComponent";
import { useInView } from '../hooks/useInView';
import ThemeSwitcher from '../components/main-page/ThemeSwitcher';

const ScrollIndicator = ({ text = "Scroll Down", onClick }) => (
  <div className="absolute bottom-8 right-8 flex flex-col items-center text-white/70 animate-bounce" onClick={onClick}>
    <p className="mb-2 text-sm">{text}</p>
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
      
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      />
    </svg>
  </div>
);

function Home() {
  const [showWelcome, setShowWelcome] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(() => {
    const themes = ['cyberpunk', 'midnight', 'neon', 'synthwave'];
    return themes[Math.floor(Math.random() * themes.length)];
  });
  const [showThemeSwitcher, setShowThemeSwitcher] = useState(false);

  const [section1Ref, section1InView] = useInView();
  const [section2Ref, section2InView] = useInView();
  const [section3Ref, section3InView] = useInView();
  const [section4Ref, section4InView] = useInView();
  const [section5Ref, section5InView] = useInView();
  const [section6Ref, section6InView] = useInView();

  const handleClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowWelcome(true);
      setShowThemeSwitcher(true);
      setIsTransitioning(false);
    }, 1000);
  };

  const scrollToTop = () => {
    const container = document.querySelector('.snap-y');
    if (container) {
      container.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleThemeChange = (newTheme: string) => {
    setCurrentTheme(newTheme);
  };

  return (
    <div
      className=" w-full h-screen flex flex-col items-center bg-black justify-center font-game"
      onClick={!showWelcome ? handleClick : undefined}
    >
      {showThemeSwitcher && (
        <ThemeSwitcher currentTheme={currentTheme} onThemeChange={handleThemeChange} />
      )}
      <TetrisBackground selectedTheme={currentTheme} />
      <div className={`transition-all duration-1000 w-full ${isTransitioning ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}>
        {showWelcome ? (
          <div className="w-full h-screen overflow-y-scroll snap-y snap-mandatory relative">
            <div className="fixed inset-0 z-0 pointer-events-none"></div>
            
            <section
              ref={section1Ref}
              className={`w-full h-screen snap-start relative flex items-center justify-center section-hidden z-10
                         backdrop-blur-lg bg-black/30
                         ${section1InView ? 'slide-from-left' : ''}`}
            >
              <div className="relative h-full flex items-center justify-center p-8">
                <div className="w-full max-w-7xl relative">
                  <div className="w-full flex flex-col items-center justify-center text-center gap-16">
                    <div className="relative flex flex-col items-center gap-8 p-8 rounded-2xl backdrop-blur-lg ">
                      <div className="relative">
                        <h1 className="text-[120px] font-bold tracking-tight text-shadow-glow text-white">
                          <span className="inline-block animate-float-title-0">N</span>
                          <span className="inline-block animate-float-title-1">A</span>
                          <span className="inline-block animate-float-title-2">R</span>
                        </h1>
                        <div className="absolute -top-8 -right-8 bg-gradient-to-br from-cyan-500 to-blue-500 
                                      text-white text-4xl px-4 py-2 rounded-full animate-float">
                          25-2
                        </div>
                      </div>
                      
                      <div className="relative flex flex-col items-center">
                        <p className="text-6xl mb-4" id="hero-text-static">
                          New Assistant
                        </p>
                        <p className="text-7xl" id="hero-text-static">
                          Recruitment
                        </p>
                        <div className="absolute -right-24 top-1/2 -translate-y-1/2">
                          <img
                            src="./assets/images/logo.png"
                            alt="SLC Logo"
                            className="w-32 h-32 animate-spin-slow opacity-50"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-12">
                      {[
                        {
                          to: '/game',
                          text: 'Play Game',
                          icon: '🎮'
                        },
                        {
                          to: 'https://bluejack.binus.ac.id/nar/home/registration',
                          text: 'Register Now',
                          icon: '📝'
                        }
                      ].map((button, index) => (
                        <Link
                          key={index}
                          to={button.to}
                          className="group relative overflow-hidden rounded-xl backdrop-blur-lg bg-black/50 
                                   hover:scale-105 transition-all duration-500 border border-white/10"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-50 
                                       group-hover:opacity-70 transition-all duration-500"></div>
                          <div className="relative px-12 py-6 flex items-center gap-4 border-2 border-white/20">
                            <span className="text-4xl">{button.icon}</span>
                            <span className="text-4xl glitch-text">
                              {button.text}
                            </span>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-white/25 to-cyan-500/0 
                                       translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <ScrollIndicator text="Scroll for Phases" />
            </section>

            <section ref={section2Ref} className={`w-full h-screen snap-start relative flex items-center justify-center section-hidden z-10
                         backdrop-blur-lg bg-black/30
                         ${section2InView ? 'slide-from-right' : ''}`}>
              <div className="w-full max-w-7xl px-8">
                <h1 className="text-6xl font-bold text-white mb-8 text-center text-shadow-glow animate-slideDown relative group">
                  <span className="inline-block animate-float-title transition-all duration-300">RECRUITMENT</span>
                  <span className="inline-block animate-float-title-delayed mx-2">PHASE</span>
                </h1>

                <div className="relative h-[600px] px-4">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 600">
                    <path
                      d="M100,300 C250,300 300,100 500,100 C700,100 750,500 900,500"
                      fill="none"
                      stroke="url(#roadGradient)"
                      strokeWidth="40"
                      className="drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                    />

                    <path
                      d="M100,300 C250,300 300,100 500,100 C700,100 750,500 900,500"
                      fill="none"
                      stroke="rgba(6,182,212,0.5)"
                      strokeWidth="2"
                      strokeDasharray="10,10"
                      className="animate-dash"
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
                        position: "left-[10%] top-[45%]",
                        steps: ["Aptitude Test", "Programming Test"]
                      },
                      {
                        phase: "02",
                        title: "Pre Training",
                        position: "left-[40%] top-[15%]",
                        steps: ["DS Using C", "OOP Using Java", "Database"]
                      },
                      {
                        phase: "03",
                        title: "Interview",
                        position: "left-[60%] top-[15%]",
                        steps: ["Resume", "Presentation"]
                      },
                      {
                        phase: "04",
                        title: "Core Training",
                        position: "left-[85%] top-[80%]",
                        steps: ["Learning Session", "Case Solving", "Presentation", "Evaluation"]
                      }
                    ].map((phase, index) => (
                      <div key={index}
                        className={`absolute ${phase.position} transform -translate-x-1/2 -translate-y-1/2
                          ${phase.isCurrent ? 'z-20 scale-110' : 'z-10'}`}>
                        <div className={`group flex flex-col items-center animate-float`}>
                          <div className={`w-20 h-20 rounded-full flex items-center justify-center
                             backdrop-blur-sm relative bg-cyan-500/20 border-2 border-white shadow-lg shadow-cyan-500/50'`}>
                            <span className="text-3xl" id="hero-text-static">{phase.phase}</span>

                            {phase.isCurrent && (
                              <div className="absolute inset-0 rounded-full bg-cyan-500/20 animate-ping" />
                            )}
                          </div>

                          <div className={`mt-4 text-center backdrop-blur-lg rounded-lg p-3 bg-black/50 border-2 border-white/50`}>
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

            <section
              ref={section3Ref}
              className={`w-full h-screen snap-start relative flex items-center justify-center section-hidden z-10
              backdrop-blur-lg bg-black/30
              ${section3InView ? 'slide-from-left' : ''}`}
            >
              <div className="w-full max-w-6xl px-8"> 
                <h1 className="text-5xl font-bold text-white mb-8 text-center text-shadow-glow animate-slideDown">
                  <span className="inline-block animate-float-title">INITIAL</span>
                  <span className="inline-block animate-float-title-delayed mx-2">TEST</span>
                </h1>

                <div className="relative flex flex-col items-center">
                  <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl blur-xl"></div>

                  <div className="relative w-full">
                    <div className="flex justify-between items-start gap-6">
                      <div className="flex-1 group perspective">
                        <div className="relative transform transition-all duration-500 group-hover:rotate-y-12">
                          <div className="p-6 rounded-xl 
                            backdrop-blur-lg transition-all duration-300">
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
                                  transition-all duration-300 border border-white backdrop-blur-md">
                                  <h3 className="text-lg text-white/90 mb-1">{item.name}</h3>
                                  <p className="text-sm text-white/60">{item.desc}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex-1 group perspective">
                        <div className="relative transform transition-all duration-500 group-hover:rotate-y-12">
                          <div className="bg-gradient-to-br from-purple-500/10 to-transparent p-6 rounded-xl 
                            backdrop-blur-lg hover:border-purple-500/40 transition-all duration-300">
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
                                    transition-all duration-300 border border-white backdrop-blur-md">
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

                    <div className="mt-6 group perspective">
                      <div className="relative transform transition-all duration-500 group-hover:rotate-x-12">
                        <div className="p-6 rounded-xl 
                          backdrop-blur-lg hover:border-blue-500/40 transition-all duration-300">
                          <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                              <span className="text-xl">📅</span>
                            </div>
                            <h2 className="text-2xl" id="hero-text-static">Test Schedule</h2>
                          </div>

                          <div className="grid grid-cols-2  gap-6">
                            <div className="space-y-3 justify-items-end align-middle">
                              <div className=" bg-black p-4  rounded-lg border border-white backdrop-blur-md transition-all duration-300">  
                                <h3 className="text-4xl text-white/90 mb-1">27 March 2024</h3>
                                <div className="space-y-1">
                                  <p className="text-2xl text-white">Batch 1: 08:00 - 11:00</p>
                                  <p className="text-2xl text-white">Batch 2: 13:00 - 16:00</p>
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
                                  border border-white backdrop-blur-md
                                  transition-all duration-300">
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
              <ScrollIndicator text="Assistant Benefits" />
            </section>

            <section
              ref={section4Ref}
              className={`w-full h-screen snap-start relative flex items-center justify-center section-hidden z-10
              backdrop-blur-lg bg-black/30
              ${section4InView ? 'slide-from-right' : ''}`}
            >
              <div className="w-full max-w-6xl px-8">
                <h1 className="text-5xl font-bold text-white mb-12 text-center text-shadow-glow animate-slideDown">
                  <span className="inline-block animate-float-title">REGISTRATION</span>
                </h1>

                <div className="relative">
                  <div className="flex justify-between mb-20 relative">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-blue-500/50"></div>
                    
                    {[
                      { date: "14 Jan 2024", event: "Registration Opens", icon: "🚀", status: "past" },
                      { date: "20 Mar 2024", event: "Registration Closes", icon: "🔒", status: "future" },
                      { date: "27 Mar 2024", event: "Initial Test", icon: "✨", status: "future" }
                    ].map((item, index) => (
                      <div key={index} className="relative z-10 flex flex-col items-center group">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center 
                          ${item.status === 'current' ? 'bg-black border-2 border-cyan-500' :
                           item.status === 'past' ? 'bg-black border-2 border-purple-500' :
                           'bg-black border border-white'}
                          backdrop-blur-sm relative`}>
                          <span className="text-2xl">{item.icon}</span>
                          {item.status === 'current' && (
                            <div className="absolute inset-0 rounded-full bg-cyan-500/30 animate-ping"></div>
                          )}
                        </div>
                        <div className={`mt-4 text-center transform transition-all duration-300
                          ${item.status === 'current' ? 'scale-110' : 'group-hover:scale-110'}`}>
                          <p className="text-2xl font-bold text-white/90">{item.date}</p>
                          <p className="text-xl text-white/70">{item.event}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 relative">
                    <div className="flex flex-col items-center space-y-8">
                      <h2 className="text-3xl mb-4" id="hero-text-static">Requirements</h2>
                      <div className="grid grid-cols-2 gap-8 w-full max-w-4xl">
                        {[
                          { text: "Active BINUS Student", icon: "🎓", desc: "Currently enrolled in BINUS University" },
                          { text: "2 Year Commitment", icon: "📝", desc: "Willing to sign a contract" },
                          { text: "Grade B in Algorithm and Programming / Introduction to Programming", icon: "💯", desc: "*Except for first semester students" },
                          { text: "SoCS/SoIS/DP/MTP", icon: "🏫", desc: "Students from eligible majors" }
                        ].map((req, idx) => (
                          <div key={idx} className="flex items-start gap-4 group">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 
                                          flex items-center justify-center backdrop-blur-sm flex-shrink-0
                                          group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                              <span className="text-2xl">{req.icon}</span>
                            </div>
                            <div className="transform group-hover:translate-x-2 transition-transform duration-300">
                              <h3 className="text-xl text-white/90 mb-1">{req.text}</h3>
                              <p className="text-sm text-white/60">{req.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <Link
                        to="https://bluejack.binus.ac.id/nar/home/registration"
                        className="relative group mt-8"
                      >
                        <div className="absolute -inset-1 via-purple-500 to-cyan-500 
                                      rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-300"></div>
                        <button className="relative px-12 py-4   rounded-lg leading-none flex items-center divide-x divide-gray-600">
                          <span className="text-3xl pr-6" id="hero-text-static">Register Now</span>
                          <span className="text-2xl pl-6 group-hover:translate-x-2 text-white transition-transform duration-300">→</span>
                        </button>
                      </Link>
                    </div>
                  </div>

                  {/* Background Effects */}
                  <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 15 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-cyan-500/30 animate-pulse"
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
              <ScrollIndicator text="Assistant Benefits" />
            </section>

            <section
              ref={section6Ref}
              className={`w-full h-screen snap-start relative flex items-center justify-center section-hidden z-10
              backdrop-blur-lg bg-black/30
              ${section6InView ? 'slide-from-right' : ''}`}
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

                        <div className="space-y-4 relative  z-10">
                          {category.skills.map((skill, idx) => (
                            <div
                              key={idx}
                              className={`flex items-center gap-3 p-2 rounded-lg
                           transform hover:translate-x-2
                           transition-all duration-300`}
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
                        className="absolute w-2 h-2 rounded-full bg-white/30
                     animate-float"
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

            <section
              ref={section5Ref}
              className={`w-full h-screen snap-start relative flex items-center justify-center section-hidden z-10
                         backdrop-blur-lg bg-black/30
                         ${section5InView ? 'slide-from-left' : ''}`}
              onWheel={(e) => {
                if (e.deltaY > 0) {
                  scrollToTop();
                }
              }}
            >
              <div className="w-full max-w-7xl px-8 flex flex-col items-center justify-center">
                <h1 className="text-6xl font-bold text-white mb-16 text-center text-shadow-glow animate-slideDown relative group">
                  <span className="inline-block animate-float-title transition-all duration-300">CONTACT</span>
                  <span className="inline-block animate-float-title-delayed mx-2">US</span>
                  <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 group-hover:via-cyan-500/20 transition-all duration-500"></div>
                </h1>

                <div className="flex flex-col items-center gap-16 w-full">
                  <div className="grid grid-cols-3 w-full gap-8">
                    {[
                      {
                        title: "Location",
                        icon: "📍",
                        content: ["Room 724", "BINUS Anggrek Campus", "Jakarta Barat"]
                      },
                      {
                        title: "Contact",
                        icon: "📞",
                        content: ["[021] 5345830", "Extension 1762"]
                      },
                      {
                        title: "RECSELS",
                        icon: "👥",
                        content: ["Gabriel", "Vito", "Rico"]
                      }
                    ].map((item, index) => (
                      <div key={index}
                        className="group relative p-6 rounded-xl bg-black/50 backdrop-blur-lg
                                    border border-white/10 hover:border-white/30 transition-all duration-300">
                        <div className="relative z-10">
                          <span className="text-3xl mb-4 block">{item.icon}</span>
                          <h3 className="text-2xl mb-4" id="hero-text-static">{item.title}</h3>
                          {item.content.map((line, i) => (
                            <p key={i} className="text-white/70 text-xl leading-relaxed group-hover:text-white transition-colors">
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="w-full max-w-2xl">
                    <h3 className="text-2xl mb-8 text-center" id="hero-text-static">Connect With Us</h3>
                    <div className="flex justify-center gap-12">
                      {[
                        {
                          name: 'Instagram',
                          icon: './assets/images/instagram.png',
                          url: 'https://www.instagram.com/slcbinusuniv/'
                        },
                        {
                          name: 'Line',
                          icon: './assets/images/line.png',
                          url: 'https://lin.ee/T8Zr5qu'
                        },
                        {
                          name: 'YouTube',
                          icon: './assets/images/youtube.png',
                          url: 'https://www.youtube.com/@SoftwareLabCenter'
                        }
                      ].map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex flex-col items-center gap-3 p-4 rounded-lg
                                   hover:bg-cyan-500/10 transition-all duration-300"
                        >
                          <img
                            src={social.icon}
                            alt={social.name}
                            className="w-8 h-8 group-hover:scale-125 transition-transform duration-300 object-contain"
                          />
                          <span className="text-white/70 text-xl group-hover:text-white transition-colors">
                            {social.name}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <ScrollIndicator text="Back to Top" onClick={scrollToTop} />
            </section>

          </div>
        ) : (
          <HeroComponent />
        )}
      </div>
    </div>
  );
}

export default Home;