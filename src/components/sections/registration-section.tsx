import React, { useState } from 'react';
import ScrollIndicator from '../main-page/scroll-indicator';
import { useInView } from '../../hooks/use-in-views';

const RegistrationSection = ({ sectionRef, hasTriggered }) => {
    const [hoveredDate, setHoveredDate] = useState<number | null>(null);

    return (
        <section
            ref={sectionRef}
            className="w-full h-screen min-h-[600px] max-h-[1080px] snap-start relative flex items-center justify-center pointer-events-auto mb-10 overflow-hidden"
        >
            <div
                className={`w-full max-w-[90vw] lg:max-w-[80vw] px-4 md:px-6 transition-opacity duration-500 ${hasTriggered ? 'opacity-100' : 'opacity-0'}`}
            >
                <h1
                    className={`text-[5vw] md:text-[4vw] lg:text-[3vw] font-bold text-white mb-[1vh] text-center text-shadow-glow transition-all duration-1000 transform hover-float
            ${hasTriggered ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    style={{ transitionDelay: '200ms' }}
                >
                    <span className="inline-block cursor-pointer">REGISTRATION</span>
                </h1>

                <div className="relative">
                    <div className="flex justify-between mb-10 relative">
                        <div
                            className={`absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-blue-500/50
                transition-all duration-1000 transform origin-left
                ${hasTriggered ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}
                            style={{ transitionDelay: '500ms' }}
                        />

                        {[
                            { date: "14 Jan 2024", event: "Registration Opens", icon: "🚀", status: "past" },
                            { date: "20 Mar 2024", event: "Registration Closes", icon: "🔒", status: "future" },
                            { date: "27 Mar 2024", event: "Initial Test", icon: "✨", status: "future" }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className={`relative z-10 flex flex-col items-center group transition-all duration-1000 transform
                  ${hasTriggered ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                                style={{ transitionDelay: `${700 + index * 200}ms` }}
                                onMouseEnter={() => setHoveredDate(index)}
                                onMouseLeave={() => setHoveredDate(null)}
                            >
                                <div className={`w-[8vmin] h-[8vmin] md:w-[6vmin] md:h-[6vmin] rounded-full flex items-center justify-center 
                  border border-white relative timeline-dot cursor-pointer`}>
                                    <span className="text-[4vmin] md:text-[3vmin] transform transition-transform duration-300
                    ${hoveredDate === index ? 'scale-125' : ''}">{item.icon}</span>
                                </div>
                                <div className={`mt-[1vh] text-center transform transition-all duration-300 text-white/90`}>
                                    <p className="text-[3vmin] md:text-[2.5vmin] font-bold">{item.date}</p>
                                    <p className="text-[2.5vmin] md:text-[2vmin]">{item.event}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 relative">
                        <div className="flex flex-col items-center space-y-6">
                            <h2
                                className="text-[4vw] md:text-[3vw] lg:text-[2.5vw] mb-4 hover-float cursor-pointer"
                                id="hero-text-static"
                            >
                                Requirements
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl">
                                {[
                                    { text: "Active BINUS Student", icon: "🎓", desc: "Currently enrolled in BINUS University" },
                                    { text: "2 Year Commitment", icon: "📝", desc: "Willing to sign a contract" },
                                    { text: "Grade B in Algorithm and Programming / Introduction to Programming", icon: "💯", desc: "*Except for first semester students" },
                                    { text: "SoCS/SoIS/DP/MTP", icon: "🏫", desc: "Students from eligible majors" }
                                ].map((req, idx) => (
                                    <div
                                        key={idx}
                                        className={`group flex items-center gap-2 p-4 rounded-lg 
                      transition-all duration-200 cursor-pointer hover:bg-cyan-500/10
                      transform 
                      ${hasTriggered ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                                        style={{ transitionDelay: `${1600 + idx * 200}ms` }}
                                    >
                                        <div className="w-[6vmin] h-[6vmin] md:w-[5vmin] md:h-[5vmin] rounded-lg flex items-center justify-center flex-shrink-0
                                  transition-transform duration-200">
                                            <span className="text-[3vmin] md:text-[2.5vmin] transform group-hover:scale-110 transition-transform duration-200">
                                                {req.icon}
                                            </span>
                                        </div>
                                        <div>
                                            <h3 className="text-[2.5vmin] md:text-[2vmin] text-white/90 mb-1">{req.text}</h3>
                                            <p className="text-[2vmin] md:text-[1.5vmin] text-white/60">{req.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <a
                                href="https://bluejack.binus.ac.id/nar/home/registration"
                                className={`relative group mt-8 hover-float transition-all duration-1000 transform
                  ${hasTriggered ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}
                                style={{ transitionDelay: '2400ms' }}
                            >
                                <div className="absolute -inset-1 via-purple-500 to-cyan-500 
                              rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-300"></div>
                                <button className="relative px-12 py-4 rounded-lg  flex items-center divide-x divide-gray-600">
                                    <span className="text-[4vmin] md:text-[3vmin] pr-6" id="hero-text-static">Register Now</span>
                                    <span className="text-[3vmin] md:text-[2.5vmin] pl-6 text-white bounce-x inline-block">→</span>
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* Background Effects */}
                    <div
                        className={`absolute inset-0 pointer-events-none transition-all duration-1000
              ${hasTriggered ? 'opacity-100' : 'opacity-0'}`}
                        style={{ transitionDelay: '500ms' }}
                    >
                        {Array.from({ length: 15 }).map((_, i) => (
                            <div
                                key={i}
                                className={`absolute w-1 h-1 rounded-full bg-cyan-500/30 transition-all duration-1000
                  ${hasTriggered ? 'animate-pulse opacity-100' : 'opacity-0'}`}
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 1}s`,
                                    animationDuration: `${2 + Math.random() * 2}s`,
                                    transitionDelay: `${2000 + i * 100}ms`
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <ScrollIndicator text="Assistant Benefits" />
        </section>
    );
};

export default RegistrationSection;