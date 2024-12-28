import React from 'react';
import { Link } from "react-router-dom";
import ScrollIndicator from '../main-page/scroll-indicator';

const WelcomeSection = ({ sectionRef, isGameTransitioning, handleGameClick }) => (
  <section
    ref={sectionRef}
    className="w-full h-screen min-h-[600px] max-h-[1080px] snap-start relative flex items-center justify-center pointer-events-auto mb-10" 
  >
    <div className="relative h-full flex flex-col items-center justify-center p-4 md:p-8">
      <div className="flex flex-col items-center gap-8 md:gap-12 animate-fade-scale-in">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <img
            src="./assets/images/logo.png"
            alt="SLC Logo"
            className={`w-[20vw] md:w-[12vw] lg:w-[8vw] h-auto animate-spin-slow opacity-80 hover:opacity-100 
            transition-all duration-300 drop-shadow-[0_0_25px_rgba(255,255,255,0.5)] slc-logo
            ${isGameTransitioning ? 'animate-logo-expand-smooth' : ''}`}
          />
          <h1 className="text-[12vw] md:text-[8vw] lg:text-[6vw] font-bold tracking-tight text-shadow-glow text-white">
            <span className="inline-block animate-slide-in-number-1 opacity-0">2</span>
            <span className="inline-block animate-slide-in-number-2 opacity-0">5</span>
            <span className="inline-block animate-slide-in-number-3 opacity-0">-</span>
            <span className="inline-block animate-slide-in-number-4 opacity-0">2</span>
          </h1>
        </div>

        <div className="relative animate-slide-in-bottom text-center">
          <h1 className="text-[6vw] md:text-[4vw] lg:text-[3vw] animate-fade-in-delay-600" id="hero-text-static">
            New Assistant
          </h1>
          <h1 className="text-[8vw] md:text-[6vw] lg:text-[4vw] mt-4 animate-fade-in-delay-900" id="hero-text-static">
            Recruitment
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 mt-8 opacity-0 animate-fade-in-delay-1200">
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
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-50 
                           group-hover:opacity-70 transition-all duration-500"></div>
              <div className="relative px-8 md:px-12 py-4 md:py-6 flex items-center gap-4 border-2 border-white/20">
                <span className="text-[4vw] md:text-[3vw] lg:text-[2vw]">{button.icon}</span>
                <span className="text-[4vw] md:text-[3vw] lg:text-[2vw] glitch-text">
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
    <ScrollIndicator text="Scroll for Phases" />
  </section>
);

export default WelcomeSection;