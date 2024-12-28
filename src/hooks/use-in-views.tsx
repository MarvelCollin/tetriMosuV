import { useState, useEffect, useRef } from 'react';

export const useInView = (options?: IntersectionObserverInit, sectionName?: string): [React.RefObject<HTMLDivElement>, boolean, boolean] => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const prevInViewRef = useRef(false);
  const lastLoggedSectionRef = useRef<string | null>(null);

  useEffect(() => {
    const calculateThreshold = () => {
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
      threshold: [0.5, 0.85],
      rootMargin: '0px 0px -10% 0px',
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

    return () => {
      if(ref.current) {
        observer.unobserve(ref.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [options, sectionName, hasTriggered]);

  return [ref, isInView, hasTriggered];
};
