import { Link } from "react-router-dom";
import { useState } from "react";
import TetrisBackground from "../components/background-animations/tetris-background";
import "../index.css";
import HeroComponent from "../components/main-page/HeroComponent";

const ScrollIndicator = ({ text = "Scroll Down" }) => (
  <div className="absolute bottom-8 right-8 flex flex-col items-center text-white/70 animate-bounce">
    <p className="mb-2 text-sm">{text}</p>
    <svg 
      className="w-6 h-6" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        strokeLinecap="round" 
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

  const handleClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowWelcome(true);
      setIsTransitioning(false);
    }, 1000); 
  };

  return (
    <div
      className="bg-black w-full h-screen flex flex-col items-center justify-center font-game"
      onClick={!showWelcome ? handleClick : undefined}
    >
      <TetrisBackground />
      <div className={`transition-all duration-1000 w-full ${isTransitioning ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}>
        {showWelcome ? (
          <div className="w-full h-screen overflow-y-scroll snap-y snap-mandatory">
            <section className="w-full h-screen snap-start relative">
              <div className="relativ h-full
                           bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] 
                           bg-[size:64px_64px]
                           before:absolute before:inset-0 before:bg-navy/50 before:z-0
                           flex items-center justify-center p-8">
                <div className="w-full max-w-7xl relative z-10">
                  <div className="w-full flex flex-row items-center justify-center text-center">
                    <div className="relative flex flex-1 items-center justify-center">
                      <div className="relative overflow-hidden rounded-lg">
                        <img
                          id="hero-logo"
                          className="max-w-3xl hover:scale-105 transition-transform duration-500 relative z-10"
                          src="./assets/images/logo.png"
                          alt="logo"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shine" />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center gap-12">
                      <p className="mt-4 text-7xl" id="hero-text-static">
                        New Assistant Recruitment
                        <br />
                        25-2
                      </p>
                      <Link 
                        to="/game" 
                        className="bg-black/30 px-12 py-6 rounded-lg backdrop-blur-sm 
                                 hover:scale-110 transition-all duration-300 
                                 border-2 border-white/20 group
                                 relative overflow-hidden"
                      >
                        <span className="text-4xl glitch-text relative z-10">
                          Play Game
                        </span>
                        <div className="absolute inset-0 group-hover:opacity-100 opacity-0 
                                    transition-opacity duration-300 pointer-events-none
                                    bg-white/10 blur-sm" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <ScrollIndicator text="Scroll for Phases" />
            </section>

            <section className="w-full h-screen snap-start relative flex items-center justify-center p-8">
              <div className="w-full max-w-7xl">
                <h1 className="text-6xl font-bold text-white mb-16 text-center text-shadow-glow animate-slideDown relative group">
                  <span className="inline-block animate-float-title transition-all duration-300">RECRUITMENT</span>
                  <span className="inline-block animate-float-title-delayed mx-2">PHASES</span>
                  <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 group-hover:via-cyan-500/20 transition-all duration-500"></div>
                </h1>
                <div className="grid grid-cols-2 gap-8">
                  {[
                    {
                      phase: "1",
                      title: "Initial Test",
                      desc: "GATAU COK MAU ISI APA"
                    },
                    {
                      phase: "2",
                      title: "Pre Training",
                      desc: "Prepare yourself"
                    },
                    {
                      phase: "3",
                      title: "Interview",
                      desc: "One-on-one discussion with our team"
                    },
                    {
                      phase: "4",
                      title: "Core Training",
                      desc: "Final phase to become an assistant"
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-black/30 p-8 rounded-lg backdrop-blur-sm 
                             hover:scale-105 transition-all duration-300 
                             border border-white/10 group"
                    >
                      <h2 className={`text-4xl mb-4 animate-float-title-${index % 4}`} id="hero-text-static">
                        Phase {item.phase}: {item.title}
                      </h2>
                      <p className="text-white/70 text-xl group-hover:text-white transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <ScrollIndicator text="Assistants" />
            </section>

            <section className="w-full h-screen snap-start relative flex items-center justify-center p-8">
              <div className="w-full max-w-7xl text-center">
                <h1 className="text-6xl font-bold text-white mb-16 text-center text-shadow-glow animate-slideDown relative group">
                  <span className="inline-block animate-float-title transition-all duration-300">ASSISTANT</span>
                  <span className="inline-block animate-float-title-delayed mx-2">BENEFITS</span>
                  <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 group-hover:via-cyan-500/20 transition-all duration-500"></div>
                </h1>
                <div className="grid grid-cols-2 gap-8">
                  <div className="bg-black/30 p-8 rounded-lg backdrop-blur-sm border border-white/10">
                    <h2 className="text-4xl mb-6" id="hero-text-static">Soft Skills</h2>
                    <div className="flex flex-wrap gap-4 justify-center">
                      {[
                        "Public Speaking",
                        "Time Management",
                        "Discipline",
                        "Networking",
                        "Leadership",
                        "Communication",
                        "Teamwork",
                        "Problem Solving",
                        "And Many More"
                      ].map((skill, index) => (
                        <span 
                          key={index}
                          className="px-4 py-2 bg-cyan-500/20 rounded-full text-white/70 hover:text-white 
                                   hover:bg-cyan-500/30 transition-all duration-300 text-lg animate-float"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-black/30 p-8 rounded-lg backdrop-blur-sm border border-white/10">
                    <h2 className="text-4xl mb-6" id="hero-text-static">Hard Skills</h2>
                    <div className="flex flex-wrap gap-4 justify-center">
                      {[
                        "C/C++",
                        "Java",
                        "Golang",
                        "Rust",
                        "Flutter",
                        "Unity",
                        "Database",
                        "React",
                        "Laravel",
                        "Docker",
                        "Kubenetes",
                        "Cisco",
                        "Javascript",
                        "Typescript",
                        "And Many More"
                      ].map((skill, index) => (
                        <span 
                          key={index}
                          className="px-4 py-2 bg-blue-500/20 rounded-full text-white/70 hover:text-white 
                                   hover:bg-blue-500/30 transition-all duration-300 text-lg animate-float"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <ScrollIndicator text="Back to Top" />
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