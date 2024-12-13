import { Link } from "react-router-dom";
import { useState } from "react";
import LayeredTransition from "../components/page-animations/layered";
import TetrisBackground from "../components/background-animations/tetris-background";
import "../index.css";
import HeroComponent from "../components/main-page/HeroComponent";
import SlidingText from "../components/main-page/SlidingText";

function Home() {
  const [showWelcome, setShowWelcome] = useState(false);
  const [showTransition, setShowTransition] = useState(false);

  const handleClick = () => {
    setShowTransition(true);
  };

  return (
    <div
      className="bg-black w-full h-screen flex flex-col items-center justify-center font-game"
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
        <div className="w-full h-full">
          {/* Hero */}
          <div
            className="relative bg-navy 
                     bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-[size:64px_64px]
                     z-10 opacity-100 transition-opacity duration-1000 flex items-center justify-center w-full h-full"
          >
            <div className="w-full flex flex-row items-center justify-center text-center transition-transform duration-1000 transform font-game">
              <div className="relative flex flex-1 items-center justify-center">
                <img
                  id="hero-logo"
                  className="max-w-3xl hover:scale-105 transition-transform duration-500"
                  src="./assets/images/logo.png"
                  alt="logo"
                />
              </div>
              <div className="flex-1 flex flex-col items-center justify-center">
                <p className="mt-4 text-7xl" id="hero-text">
                  New Assistant Recruitment
                  <br />
                  25-2
                </p>
              </div>
            </div>
          </div>
          {/* Benefits */}
          <SlidingText text="NAR25-2" />
        </div>
      )}
      {!showTransition && !showWelcome && <HeroComponent />}
    </div>
  );
}

export default Home;
