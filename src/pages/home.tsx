import { Link } from "react-router-dom";
import { useState } from "react";
import LayeredTransition from "../components/page-animations/layered";
import TetrisBackground from "../components/background-animations/tetris-background";
import "../index.css";

function Home() {
  const [showWelcome, setShowWelcome] = useState(false);
  const [showTransition, setShowTransition] = useState(false);

  const handleClick = () => {
    setShowTransition(true);
  };

  return (
    <div
      className="bg-black w-full h-screen flex items-center justify-center font-game"
      onClick={handleClick}
    >
      <TetrisBackground />
      {showTransition && !showWelcome && (
        <LayeredTransition
          colors={[
            "#000000",
            "#111111",
            "#222222",
            "#333333",
            "#444444",
            "#555555",
            "#666666",
          ]}
          onTransitionEnd={() => setShowWelcome(true)}
        />
      )}
      {showWelcome && (
        <div className="relative bg-[#666666] z-10 opacity-100 transition-opacity duration-1000 flex items-center justify-center w-full h-full">
          <div className="w-full flex flex-row items-center justify-center text-center transition-transform duration-1000 transform font-game">
            <div className="relative flex flex-1 items-center justify-center">
              <img
                className="max-w-3xl"
                src="./assets/images/logo.png"
                alt="logo"
              />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
              <p className="text-white mt-4 text-7xl">
                New Assistant Recruitment
              </p>
              <p className="text-white mt-4 text-7xl">25-1</p>
            </div>
          </div>
        </div>
      )}
      {!showTransition && !showWelcome && (
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
      )}
    </div>
  );
}

export default Home;
