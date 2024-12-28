import React from 'react';
import { IScrollIndicator } from '../../interfaces/IScrollIndicator';

const ScrollIndicator: React.FC<IScrollIndicator> = ({ text = "Scroll Down", onClick }) => (
  <div
    className="absolute bottom-[2vh] right-[2vw] flex flex-col items-center text-white/70 animate-bounce cursor-pointer"
    onClick={onClick}
  >
    <p className="mb-[1vh] text-[2vw] md:text-[1.5vw] lg:text-[1vw]">{text}</p>
    <svg
      className="w-[4vw] h-[4vw] md:w-[3vw] md:h-[3vw] lg:w-[2vw] lg:h-[2vw]"
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

export default ScrollIndicator;