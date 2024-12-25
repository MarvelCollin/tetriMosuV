import { useState, useEffect, useRef } from 'react';

export const useInView = (options?: IntersectionObserverInit, sectionName?: string): [React.RefObject<HTMLDivElement>, boolean] => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const prevInViewRef = useRef(false);
  const lastLoggedSectionRef = useRef<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Only consider a section "in view" when it's almost fully visible
      const isNowInView = entry.intersectionRatio >= 0.85;
      
      // Check if the view state has actually changed
      if (isNowInView !== prevInViewRef.current) {
        setIsInView(isNowInView);
        prevInViewRef.current = isNowInView;

        // Only log when entering a new section and prevent duplicate logs
        if (isNowInView && sectionName && lastLoggedSectionRef.current !== sectionName) {
          lastLoggedSectionRef.current = sectionName;
          console.log(`Current section: ${sectionName}`);
        }
      }
    }, {
      threshold: [0.85], // Only trigger at 85% visibility
      rootMargin: '-50px 0px -50px 0px', // Add small margin to prevent edge cases
      ...options
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if(ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options, sectionName]);

  return [ref, isInView];
};
