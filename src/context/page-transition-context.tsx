import React, { createContext, useContext, useState } from 'react';
import { IPageTransition } from '../interfaces/IPageTransition';


const PageTransitionContext = createContext<IPageTransition | null>(null);

export const PageTransitionProvider = ({ children }: { children: React.ReactNode }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const startTransition = () => setIsTransitioning(true);
  const endTransition = () => setIsTransitioning(false);

  return (
    <PageTransitionContext.Provider value={{ isTransitioning, startTransition, endTransition }}>
      {children}
    </PageTransitionContext.Provider>
  );
};

export const usePageTransition = () => {
  const context = useContext(PageTransitionContext);
  if (!context) {
    throw new Error('usePageTransition must be used within a PageTransitionProvider');
  }
  return context;
};
