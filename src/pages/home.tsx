import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import TetrisBackground from "../components/background-animations/tetris-background";
import "../index.css";
import WelcomeTitle from "../components/main-page/welcome-title";
import { useInView } from '../hooks/use-in-views'; 
import ThemeSwitcher from '../components/main-page/theme-switcher';
import WelcomeSection from '../components/sections/welcome-section';
import RecruitmentPhaseSection from '../components/sections/recruitment-phase-section';
import InitialTestSection from '../components/sections/initial-test-section';
import RegistrationSection from '../components/sections/registration-section';
import AssistantBenefitsSection from '../components/sections/assistant-benefits-section';
import ContactUsSection from '../components/sections/contact-us-section';

function Home() {
  const [showWelcome, setShowWelcome] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(() => {
    const themes = ['cyberpunk', 'midnight', 'neon', 'synthwave'];
    return themes[Math.floor(Math.random() * themes.length)];
  });
  const [showThemeSwitcher, setShowThemeSwitcher] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);
  const [pageTransition, setPageTransition] = useState(''); 
  const [isBackgroundTransitioning, setIsBackgroundTransitioning] = useState(false);
  const [isExiting, setIsExiting] = useState(false); 
  const [isGameTransitioning, setIsGameTransitioning] = useState(false);

  const [section1Ref, section1InView] = useInView({}, 'Welcome Section');
  const [section2Ref, section2InView] = useInView({}, 'Recruitment Phase');
  const [section3Ref, section3InView] = useInView({}, 'Initial Test');
  const [section4Ref, section4InView] = useInView({}, 'Registration');
  const [section5Ref, section5InView] = useInView({}, 'Contact Us');
  const [section6Ref, section6InView] = useInView({}, 'Assistant Benefits');

  const handleClick = () => {
    setIsExiting(true);
    
    setTimeout(() => {
      setPageTransition('animate-zoom-in-fade');
      setIsBackgroundTransitioning(true);
      setIsBlurred(true);
      
      setTimeout(() => {
        setShowWelcome(true);
        setShowThemeSwitcher(true);
        setPageTransition('animate-zoom-out-fade');
        
        setTimeout(() => {
          setIsBackgroundTransitioning(false);
          setPageTransition('');
        }, 1000);
      }, 1000);
    }, 500); 
  };

  const scrollToTop = () => {
    const container = document.querySelector('.snap-y');
    if (container) {
      container.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleThemeChange = (newTheme: string) => {
    setCurrentTheme(newTheme);
  };

  const handleGameClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsGameTransitioning(true);
    
    const logo = document.querySelector('.slc-logo') as HTMLElement;
    if (logo) {
      console.log(logo)
      logo.classList.add('animate-logo-expand-smooth');
    }
  
    setTimeout(() => {
      window.location.href = '/game';
    }, 1500);
  };

  return (
    <div
      className="w-full h-screen flex flex-col items-center bg-black justify-center font-game"
      onClick={!showWelcome ? handleClick : undefined}
    >
      {showThemeSwitcher && (
        <ThemeSwitcher currentTheme={currentTheme} onThemeChange={handleThemeChange} />
      )}
      <TetrisBackground 
        selectedTheme={currentTheme} 
        isBlurred={isBlurred}
        isInteractive={!showWelcome} 
        isTransitioning={isBackgroundTransitioning}
      />
      <div className={`relative z-10 w-full ${pageTransition}`}>
        {showWelcome ? (
          <div className="w-full h-screen overflow-y-scroll snap-y snap-mandatory relative pointer-events-auto">
            
            <WelcomeSection
              sectionRef={section1Ref}
              isGameTransitioning={isGameTransitioning}
              handleGameClick={handleGameClick}
            />
            
            <RecruitmentPhaseSection
              sectionRef={section2Ref}
              sectionInView={section2InView}
            />
            
            <InitialTestSection
              sectionRef={section3Ref}
            />
            
            <RegistrationSection
              sectionRef={section4Ref}
            />
            
            <AssistantBenefitsSection
              sectionRef={section6Ref}
            />
            
            <ContactUsSection
              sectionRef={section5Ref}
              scrollToTop={scrollToTop}
            />

          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
            <WelcomeTitle isExiting={isExiting} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;