import { useRef } from 'react';

export const useInView = (options = {}) => {
  const elementRef = useRef(null);
  return [elementRef, true]; // Always return true for inView since we don't need the animation
};
