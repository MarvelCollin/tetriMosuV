import { useEffect, useState } from 'react';

export default function WelcomeTitle({ isExiting = false }) {
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(true);

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

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
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
      {isMobile && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-20 animate-pulse">
          <div className="bg-white p-4 rounded shadow-lg text-center border-4 border-red-600">
            <p className="text-red-600 font-bold text-lg">
              ⚠️ It looks like you're on a <span className="bg-yellow-500 text-sky font-bold px-1">phone</span>. For the best experience, please use a <span className="bg-green-500 text-sky font-bold px-1">laptop</span> or <span className="bg-green-500 text-sky font-bold px-1">PC</span>.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}