import { Link } from 'react-router-dom';
import { useState } from 'react';
import LayeredTransition from '../components/page-animations/layered';
import '../index.css';

function Home() {
    const [showWelcome, setShowWelcome] = useState(false);
    const [showTransition, setShowTransition] = useState(false);

    const handleClick = () => {
        setShowTransition(true);
    };

    return (
        <div className="bg-black w-full h-screen flex items-center justify-center font-game" onClick={handleClick}>
            {showTransition && !showWelcome && (
                <LayeredTransition colors={['#000000', '#111111', '#222222', '#333333', '#444444', '#555555', '#666666']} onTransitionEnd={() => setShowWelcome(true)}>
                    <div className="text-center transition-transform duration-1000 transform hover:scale-105 font-game flex flex-col items-center justify-center h-full">
                        <h1 className="text-white animate-bounce text-7xl">NAR</h1>
                        <h2 className="text-white animate-pulse mt-2" style={{ fontSize: '10rem' }}>25-2</h2>
                        <p className="text-white mt-4">Click anywhere to continue</p>
                    </div>
                </LayeredTransition>
            )}
            {showWelcome && (
                <div className="relative bg-[#666666] z-10 opacity-100 transition-opacity duration-1000 flex items-center justify-center w-full h-full">
                    <div className="text-center transition-transform duration-1000 transform hover:scale-105 font-game opacity-100 transition-opacity duration-1000">
                        <h1 className="text-white text-7xl">Welcome</h1>
                    </div>
                </div>
            )}
            {!showTransition && !showWelcome && (
                <div className="relative z-10 opacity-100 transition-opacity duration-1000 flex items-center justify-center w-full h-full">
                    <div className="text-center transition-transform duration-1000 transform hover:scale-105 font-game flex flex-col items-center justify-center h-full">
                        <h1 className="text-white animate-bounce text-7xl">NAR</h1>
                        <h2 className="text-white animate-pulse mt-2" style={{ fontSize: '10rem' }}>25-2</h2>
                        <p className="text-white mt-4">Click anywhere to continue</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
