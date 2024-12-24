export default function WelcomeTitle({ isExiting = false }) {
  return (
    <div className={`relative z-10 transition-all duration-1000 flex items-center justify-center w-full h-full
                    ${isExiting ? 'animate-scale-out opacity-0' : 'opacity-100'}`}>
      <div className="text-center pointer-events-none">
        <div className="text-center transition-transform duration-1000 transform hover:scale-105 font-game flex flex-col items-center justify-center h-full">
          <h1 className={`text-9xl ${isExiting ? 'animate-slide-out-top' : ''}`} id="hero-text-static">NAR</h1>
          <h1 className={`text-[250px] font-bold tracking-tight text-shadow-glow text-white ${isExiting ? 'animate-slide-out-bottom' : ''}`}>
            <span className="inline-block animate-float-title-0">2</span>
            <span className="inline-block animate-float-title-1">5</span>
            <span className="inline-block animate-float-title-2">-</span>
            <span className="inline-block animate-float-title-0">2</span>
          </h1>
          <p className={`text-white/70 mt-4 text-xl hover:text-white transition-colors animate-pulse 
                        ${isExiting ? 'animate-fade-out-quick' : ''}`}>
            Click Anywhere to continue
          </p>
        </div>
      </div>
    </div>
  );
}