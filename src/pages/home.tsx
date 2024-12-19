import { Link } from "react-router-dom";
import { useState } from "react";
import LayeredTransition from "../components/page-animations/layered";
import TetrisBackground from "../components/background-animations/tetris-background";
import "../index.css";
import HeroComponent from "../components/main-page/HeroComponent";

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
        <div className="w-full h-screen overflow-y-scroll snap-y snap-mandatory">
          {/* Hero Section */}
          <section className="w-full h-screen snap-start">
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
                  <p className="mt-4 text-7xl text-white" id="hero-text-static">
                    New Assistant Recruitment
                    <br />
                    25-2
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* All Phases Section */}
          <section className="w-full h-screen snap-start bg-navy flex items-center justify-center p-8">
            <div className="w-full max-w-7xl">
              <h1 className="text-6xl text-center mb-16" id="hero-text-static">
                Recruitment Phases
              </h1>
              <div className="grid grid-cols-2 gap-8">
                { [
                  {
                    phase: "1",
                    title: "Initial Test",
                    desc: "Written test to assess your basic knowledge"
                  },
                  {
                    phase: "2",
                    title: "Pre Training",
                    desc: "Prepare yourself for the role"
                  },
                  {
                    phase: "3",
                    title: "Interview",
                    desc: "One-on-one discussion with our team"
                  },
                  {
                    phase: "4",
                    title: "Core Training",
                    desc: "Final phase to become an assistant"
                  }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-black/30 p-8 rounded-lg backdrop-blur-sm 
                             hover:scale-105 transition-all duration-300 
                             border border-white/10 group"
                  >
                    <h2 className="text-4xl mb-4" id="hero-text-static">
                      Phase {item.phase}: {item.title}
                    </h2>
                    <p className="text-white/70 text-xl group-hover:text-white transition-colors">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}
      {!showTransition && !showWelcome && <HeroComponent />}
    </div>
  );
}

export default Home;