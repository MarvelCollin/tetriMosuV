import { useState, useEffect, useRef } from 'react';

export const useInView = (options?: IntersectionObserverInit, sectionName?: string): [React.RefObject<HTMLDivElement>, boolean] => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
      if (entry.isIntersecting && sectionName) {
        console.log(`Entered section: ${sectionName}`);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if(ref.current){
        observer.unobserve(ref.current);
      }
    };
  }, [options, sectionName]);

  return [ref, isInView];
};
