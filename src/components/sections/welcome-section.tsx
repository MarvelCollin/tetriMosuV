import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import ScrollIndicator from '../main-page/scroll-indicator';
import { ScrambleText } from '../main-page/scramble-text';

const WelcomeSection = ({ sectionRef, isGameTransitioning, handleGameClick }) => (
  <section
    ref={sectionRef}
    className="w-full h-screen min-h-[600px] max-h-[1080px] snap-start relative flex items-center justify-center pointer-events-auto mb-10 sm:mb-4"
  >
    <div className="relative h-full flex flex-col items-center justify-center p-4 md:p-8 sm:p-2">
      <div className="flex flex-col items-center gap-8 md:gap-12 sm:gap-4 animate-fade-scale-in">
        <div className="flex flex-row items-center gap-4 md:gap-8">
          <div className={`flex ${isGameTransitioning ? 'transform duration-1000 translate-y-72 translate-x-64 z-10' : ''}`}>
            <img
              src="./assets/images/logo.png"
              alt="SLC Logo"
              className={`w-[15vw] h-auto animate-spin-slow opacity-80 hover:opacity-100 
            transition-all drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]
            ${isGameTransitioning ? 'animate-logo-expand-smooth' : ''}`}
            />
          </div>
          <h1 className="text-[14vw] md:text-[8vw] lg:text-[9vw] font-bold tracking-tight text-shadow-glow text-white">
            <span className="inline-block animate-slide-in-number-1 opacity-0">2</span>
            <span className="inline-block animate-slide-in-number-2 opacity-0">5</span>
            <span className="inline-block animate-slide-in-number-3 opacity-0">-</span>
            <span className="inline-block animate-slide-in-number-4 opacity-0">2</span>
          </h1>
        </div>

        <div className="relative animate-slide-in-bottom text-center">
          <h1
            className="text-[12vw] md:text-[4vw] lg:text-[4vw] animate-fade-in-delay-600 text-glitch"
            id="hero-text-static"
          >
            <ScrambleText text="NEW ASSISTANT" baseDelay={0} />
          </h1>
          <h1
            className="text-[16vw] md:text-[6vw] lg:text-[6vw] mt-4 animate-fade-in-delay-900 text-glitch"
            id="hero-text-static"
          >
            <ScrambleText text="RECRUITMENT" baseDelay={200} />
          </h1>
        </div>

        <div
          className="flex flex-row flex-nowrap items-center justify-center gap-2 md:gap-16 mt-8 opacity-0 animate-fade-in-delay-1200"
        >
          {[
            {
              to: '#',
              text: 'Play Game',
              icon: '🎮',
              onClick: handleGameClick,
              className: isGameTransitioning ? 'opacity-0' : ''
            },
            {
              to: 'https://bluejack.binus.ac.id/nar',
              text: 'Register Now',
              icon: '📝',
              target: '_blank',
              rel: 'noopener noreferrer'
            }
          ].map((button, index) => (
            <Link
              key={index}
              to={button.to}
              onClick={button.onClick}
              target={button.target}
              rel={button.rel}
              className={`group relative overflow-hidden rounded-xl bg-black/50 
                           hover:scale-105 transition-all duration-500 border border-white/10 sm:w-auto
                           px-1 py-1 sm:px-3 sm:py-2
                           ${button.className || ''}`}
            >
              <div className="relative px-2 md:px-8 py-1 md:py-4 flex items-center gap-2 ">
                <span className="text-[3vw] md:text-[3vw] lg:text-[2vw]">{button.icon}</span>
                <span className="text-[3vw] md:text-[2.5vw] lg:text-[2vw] glitch-text">
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
    <ScrollIndicator text="Scroll To Recruitment Phase" />
  </section>
);

export default WelcomeSection;