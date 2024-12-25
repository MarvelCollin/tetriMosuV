import { useState, useEffect, useRef } from 'react';

export const useInView = (options?: IntersectionObserverInit, sectionName?: string): [React.RefObject<HTMLDivElement>, boolean] => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const prevInViewRef = useRef(false);
  const lastLoggedSectionRef = useRef<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      const isNowInView = entry.intersectionRatio >= 0.85;
      
      if (isNowInView !== prevInViewRef.current) {
        setIsInView(isNowInView);
        prevInViewRef.current = isNowInView;

        if (isNowInView && sectionName && lastLoggedSectionRef.current !== sectionName) {
          lastLoggedSectionRef.current = sectionName;
          console.log(`Current section: ${sectionName}`);
        }
      }
    }, {
      threshold: [0.85], 
      rootMargin: '-50px 0px -50px 0px', 
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
