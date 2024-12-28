import { useState, useEffect, useRef } from 'react';

export const useInView = (options?: IntersectionObserverInit, sectionName?: string): [React.RefObject<HTMLDivElement>, boolean, boolean] => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const prevInViewRef = useRef(false);
  const lastLoggedSectionRef = useRef<string | null>(null);

  useEffect(() => {
    const calculateThreshold = () => {
      // Adjust threshold based on zoom level
      const zoomLevel = Math.min(window.innerWidth / window.outerWidth, 1);
      return Math.max(0.5, Math.min(0.85 * zoomLevel, 0.85));
    };

    const observer = new IntersectionObserver(([entry]) => {
      const threshold = calculateThreshold();
      const isNowInView = entry.intersectionRatio >= threshold;
      
      if (isNowInView !== prevInViewRef.current) {
        setIsInView(isNowInView);
        prevInViewRef.current = isNowInView;

        if (isNowInView && !hasTriggered) {
          setHasTriggered(true);
          if (sectionName && lastLoggedSectionRef.current !== sectionName) {
            lastLoggedSectionRef.current = sectionName;
            console.log(`Current section: ${sectionName}`);
          }
        }
      }
    }, {
      threshold: [0.5, 0.85], // Multiple thresholds for smoother transitions
      rootMargin: '-10% 0px -10% 0px', // Percentage-based margins
      ...options
    });

    const handleResize = () => {
      if (ref.current) {
        observer.unobserve(ref.current);
        observer.observe(ref.current);
      }
    };

    if (ref.current) {
      observer.observe(ref.current);
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('zoom', handleResize); // Some browsers support zoom event

    return () => {
      if(ref.current) {
        observer.unobserve(ref.current);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('zoom', handleResize);
    };
  }, [options, sectionName, hasTriggered]);

  return [ref, isInView, hasTriggered];
};
