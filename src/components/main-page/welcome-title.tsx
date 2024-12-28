import { useEffect, useState } from 'react';

export default function WelcomeTitle({ isExiting = false }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={`relative z-10 transition-all duration-1000 flex flex-col items-center justify-center w-full h-full max-w-[1920px] mx-auto
                  ${isExiting ? 'animate-scale-out opacity-0' : 'opacity-100'}`}
    >
      {isMobile && (
        <div className="bg-red-700 text-white font-bold text-lg mb-4 p-4 rounded shadow-lg border-4 border-red-900 animate-pulse-slow">
          <h2 className="text-2xl mb-2">⚠️ Attention</h2>
          <p>
            It looks like you're on a <span style={{ backgroundColor: 'yellow', color: 'black', fontWeight: 'bold', padding: '0 4px' }}>phone</span>. For the best experience, please use a <span style={{ backgroundColor: 'green', color: 'black', fontWeight: 'bold', padding: '0 4px' }}>laptop</span> or <span style={{ backgroundColor: 'green', color: 'black', fontWeight: 'bold', padding: '0 4px' }}>PC</span>.
          </p>
        </div>
      )}
      <div className="text-center pointer-events-none w-full">
        <div className="text-center transition-transform duration-1000 transform hover:scale-105 font-game 
                      flex flex-col items-center justify-center h-full gap-[2vh]">
          <h1 className={`text-[8vw] md:text-[6vw] lg:text-[5vw] min-[1920px]:text-9xl
                       ${isExiting ? 'animate-slide-out-top' : ''}`} 
              id="hero-text-static">
            NAR
          </h1>
          <h1 className={`text-[20vw] md:text-[18vw] lg:text-[16vw] min-[1920px]:text-[250px] 
                       font-bold tracking-tight text-shadow-glow text-white 
                       ${isExiting ? 'animate-slide-out-bottom' : ''}`}>
            <span className="inline-block animate-float-title-0">2</span>
            <span className="inline-block animate-float-title-1">5</span>
            <span className="inline-block animate-float-title-2">-</span>
            <span className="inline-block animate-float-title-0">2</span>
          </h1>
          <p className={`text-[2vw] md:text-[1.5vw] lg:text-[1.2vw] min-[1920px]:text-xl 
                      text-white/70 mt-[1vh] hover:text-white transition-colors animate-pulse 
                      ${isExiting ? 'animate-fade-out-quick' : ''}`}>
            Click Anywhere to continue
          </p>
        </div>
      </div>
    </div>
  );
}