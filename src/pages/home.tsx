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
                           before:absolute before:inset-0 before:z-0
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
                <div className="relative flex flex-col gap-6 items-center">
                  {[
                    {
                      phase: "1",
                      title: "Initial Test",
                      desc: "Written test to assess your basic knowledge"
                    },
                    {
                      phase: "2",
                      title: "Pre Training",
                      desc: "Prepare yourself for the role"
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
                      className={`w-full max-w-4xl bg-black/30 backdrop-blur-sm 
                             border border-cyan-500/20 rounded-xl overflow-hidden
                             group hover:border-cyan-500/40 transition-all duration-500
                             transform hover:scale-[1.02] ${index % 2 === 0 ? 'ml-0' : 'mr-0'}`}
                    >
                      <div className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                        {/* Phase Number */}
                        <div className="w-32 h-32 relative flex items-center justify-center">
                          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-xl group-hover:from-cyan-500/30 group-hover:to-blue-500/30" />
                          <span className="text-6xl font-bold relative z-10" id="hero-text-static">
                            {item.phase}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-8 relative overflow-hidden">
                          {/* Background Glow */}
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                          {/* Content */}
                          <h2 className={`text-4xl mb-3 animate-float-title-${index % 4}`} id="hero-text-static">
                            {item.title}
                          </h2>
                          <p className="text-white/70 text-xl group-hover:text-white transition-colors">
                            {item.desc}
                          </p>

                          {/* Decorative Line */}
                          <div className={`absolute ${index % 2 === 0 ? '-left-1' : '-right-1'} top-0 w-1 h-full
                                      bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-cyan-500/0
                                      group-hover:via-cyan-500/70 transition-all duration-500`} />
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Connecting Line */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/0 via-cyan-500/30 to-cyan-500/0" />
                </div>
              </div>
              <ScrollIndicator text="Assistant Benefits" />
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

            {/* Add this section before the contact us section */}
            <section className="w-full h-screen snap-start relative flex items-center justify-center p-8">
              <div className="w-full max-w-7xl relative z-10">
                <h1 className="text-6xl font-bold text-white mb-16 text-center text-shadow-glow animate-slideDown relative group">
                  <span className="inline-block animate-float-title transition-all duration-300">REGISTRATION</span>
                  <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 group-hover:via-cyan-500/20 transition-all duration-500"></div>
                </h1>

                <div className="grid grid-cols-2 gap-12">
                  {/* Important Dates */}
                  <div className="bg-black/30 p-8 rounded-xl backdrop-blur-sm border border-cyan-500/20 group
                               hover:border-cyan-500/40 transition-all duration-300">
                    <h2 className="text-4xl mb-8" id="hero-text-static">Important Dates</h2>
                    <div className="space-y-6">
                      {[
                        { date: "20 Feb 2024", event: "Registration Opens" },
                        { date: "1 Mar 2024", event: "Registration Closes" },
                        { date: "2 Mar 2024", event: "Initial Test" },
                        { date: "4 Mar 2024", event: "Interview Period Starts" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-6 group/item">
                          <div className="bg-cyan-500/20 px-4 py-2 rounded-lg text-xl text-white/70
                                      group-hover/item:bg-cyan-500/30 group-hover/item:text-white transition-all duration-300">
                            {item.date}
                          </div>
                          <span className="text-xl text-white/70 group-hover/item:text-white transition-colors duration-300">
                            {item.event}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Requirements */}
                  <div className="bg-black/30 p-8 rounded-xl backdrop-blur-sm border border-cyan-500/20 group
                               hover:border-cyan-500/40 transition-all duration-300">
                    <h2 className="text-4xl mb-8" id="hero-text-static">Requirements</h2>
                    <div className="space-y-4">
                      {[
                        "Must be an active student of Binus University",
                        "Must be willing to sign a contract for 2 years",
                        "Minimum grade B in Algorithm and Programming / Introduction to Programming *Except for first semester student",
                        "Majors: SoCS (Computer Science), SoIS (Information System), DP (Double Program), MTP (Master Track Program)",
                      ].map((req, index) => (
                        <div key={index} className="flex items-start gap-4 group/item">
                          <span className="text-white/70 group-hover:text-white text-xl transition-colors">→</span>
                          <p className="text-xl text-white/70 group-hover/item:text-white transition-colors duration-300">
                            {req}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <Link
                    to="/register"
                    className="inline-block bg-black/30 px-12 py-6 rounded-lg backdrop-blur-sm 
                             hover:scale-110 transition-all duration-300 
                             border-2 border-cyan-500/20 group
                             relative overflow-hidden"
                  >
                    <span className="text-4xl glitch-text relative z-10" id="hero-text-static">
                      Register Now
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-transparent
                                opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </Link>
                </div>
              </div>
              <ScrollIndicator text="Contact Us" />
            </section>

            <section className="w-full h-screen snap-start relative flex items-center justify-center p-8">
              <div className="w-full max-w-7xl relative z-10">
                <h1 className="text-6xl font-bold text-white mb-16 text-center text-shadow-glow animate-slideDown relative group">
                  <span className="inline-block animate-float-title transition-all duration-300">CONTACT</span>
                  <span className="inline-block animate-float-title-delayed mx-2">US</span>
                  <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 group-hover:via-cyan-500/20 transition-all duration-500"></div>
                </h1>

                <div className="flex flex-col items-center gap-16">
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
                           className="group relative p-6 rounded-xl bg-black/30 backdrop-blur-sm
                                    border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
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
                        { name: 'Instagram', icon: '📸', url: '#' },
                        { name: 'Line', icon: '💬', url: '#' },
                        { name: 'YouTube', icon: '📺', url: '#' }
                      ].map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          className="group flex flex-col items-center gap-3 p-4 rounded-lg
                                   hover:bg-cyan-500/10 transition-all duration-300"
                        >
                          <span className="text-3xl group-hover:scale-125 transition-transform duration-300">
                            {social.icon}
                          </span>
                          <span className="text-white/70 text-xl group-hover:text-white transition-colors">
                            {social.name}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
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