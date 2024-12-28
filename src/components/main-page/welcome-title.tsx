export default function WelcomeTitle({ isExiting = false }) {
  return (
    <div className={`relative z-10 transition-all duration-1000 flex items-center justify-center w-full h-full max-w-[1920px] mx-auto
                    ${isExiting ? 'animate-scale-out opacity-0' : 'opacity-100'}`}>
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