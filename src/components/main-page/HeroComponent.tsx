export default function HeroComponent() {
  return (
    <div className="relative z-10 opacity-100 transition-opacity duration-1000 flex items-center justify-center w-full h-full">
      <div className="text-center pointer-events-none">
        <div className="text-center transition-transform duration-1000 transform hover:scale-105 font-game flex flex-col items-center justify-center h-full">
          <h1 className="text-7xl" id="hero-text-static">NAR</h1>
          <h2
            className="mt-2"
            style={{ fontSize: "10rem" }}
            id="hero-text-static"
          >
            25-2
          </h2>
          <p className="text-white/70 mt-4 text-xl hover:text-white transition-colors animate-pulse">
            Move mouse to interact • Click to continue
          </p>
        </div>
      </div>
    </div>
  );
}
