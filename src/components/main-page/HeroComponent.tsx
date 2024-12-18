export default function HeroComponent() {
  return (
    <div className="relative z-10 opacity-100 transition-opacity duration-1000 flex items-center justify-center w-full h-full">
      <div className="text-center transition-transform duration-1000 transform hover:scale-105 font-game flex flex-col items-center justify-center h-full">
        <h1 className="text-white animate-bounce text-7xl">NAR</h1>
        <h2
          className="text-white animate-pulse mt-2"
          style={{ fontSize: "10rem" }}
        >
          25-2
        </h2>
        <p className="text-white mt-4">Click anywhere to continue</p>
      </div>
    </div>
  );
}
