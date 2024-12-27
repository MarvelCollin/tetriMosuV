
import React from 'react';
import { IScrollIndicator } from '../../interfaces/IScrollIndicator';


const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ text = "Scroll Down", onClick }) => (
  <div
    className="absolute bottom-8 right-8 flex flex-col items-center text-white/70 animate-bounce cursor-pointer"
    onClick={onClick}
  >
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

export default ScrollIndicator;