import React from 'react';
import { Link } from "react-router-dom";
import ScrollIndicator from '../main-page/scroll-indicator';

const WelcomeSection = ({ sectionRef, isGameTransitioning, handleGameClick, isRotating }) => (
  <section
    ref={sectionRef}
    className="w-full h-screen min-h-[600px] max-h-[1080px] snap-start relative flex items-center justify-center pointer-events-auto z-0 mb-20" 
  >
    <div className="relative h-full w-full max-w-[1920px] flex flex-col items-center justify-center p-4 md:p-8">
      <div className="flex flex-col items-center gap-[2vh] md:gap-[4vh]">
        <div className="flex flex-col md:flex-row items-center gap-[2vw] md:gap-[3vw]">
          <img
            src="./assets/images/logo.png"
            alt="SLC Logo"
            className={`w-[15vmin] h-[15vmin] md:w-[20vmin] md:h-[20vmin] min-w-[100px] max-w-[200px] 
            animate-spin-slow opacity-80 hover:opacity-100 transition-all duration-300 
            drop-shadow-[0_0_25px_rgba(255,255,255,0.5)] slc-logo
            ${isGameTransitioning ? 'animate-logo-expand-smooth' : ''}`}
          />
          <h1 className="text-[8vw] md:text-[12vw] lg:text-[10vw] font-bold tracking-tight text-shadow-glow text-white 
                       min-[1920px]:text-[180px]">
            <span className="inline-block animate-slide-in-number-1 opacity-0">2</span>
            <span className="inline-block animate-slide-in-number-2 opacity-0">5</span>
            <span className="inline-block animate-slide-in-number-3 opacity-0">-</span>
            <span className="inline-block animate-slide-in-number-4 opacity-0">2</span>
          </h1>
        </div>

        <div className="relative animate-slide-in-bottom text-center">
          <h1 className="text-[5vw] md:text-[6vw] lg:text-[5vw] min-[1920px]:text-8xl 
                       animate-fade-in-delay-600" id="hero-text-static">
            New Assistant
          </h1>
          <h1 className="text-[6vw] md:text-[7vw] lg:text-[6vw] min-[1920px]:text-9xl mt-[1vh] 
                       animate-fade-in-delay-900" id="hero-text-static">
            Recruitment
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row gap-[2vw] sm:gap-[3vw] md:gap-[4vw] mt-[2vh] md:mt-[3vh] 
                     opacity-0 animate-fade-in-delay-1200">
          {[
            {
              to: '#',
              text: 'Play Game',
              icon: '🎮',
              onClick: handleGameClick,
              className: isGameTransitioning ? 'opacity-0' : ''
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
              onClick={button.onClick}
              className={`group relative overflow-hidden rounded-xl bg-black/50 
                       hover:scale-105 transition-all duration-500 border border-white/10
                       ${button.className || ''}`}
            >
              <div className="relative px-[2vw] sm:px-[3vw] py-[1.5vh] sm:py-[2vh] flex items-center 
                           gap-[1vw] md:gap-[1.5vw] border-2 border-white/20">
                <span className="text-[4vmin] sm:text-[3vmin] md:text-[4vmin] max-text-[40px]">{button.icon}</span>
                <span className="text-[3vmin] sm:text-[2.5vmin] md:text-[3.5vmin] max-text-[36px] 
                              glitch-text whitespace-nowrap">
                  {button.text}
                </span>
              </div>
            
            </Link>
          ))}
        </div>
      </div>
    </div>
    <ScrollIndicator text="Scroll for Phases" />
  </section>
);

export default WelcomeSection;