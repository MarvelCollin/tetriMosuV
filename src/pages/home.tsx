import { Link } from 'react-router-dom';
import CircleTransition from '../components/page-animations/circle';
import { useState, useEffect } from 'react';

function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full">
      <CircleTransition backgroundColor="green" className="absolute top-0 left-0 z-0"/>
      <div className={`relative z-10 ${showContent ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
        <Link to="/game">
          <button className="bg-blue-500 text-white p-2 rounded">Go to Game</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
