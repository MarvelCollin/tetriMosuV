import { Link } from 'react-router-dom';
import LayeredTransition from '../components/page-animations/layered';
import { useState, useEffect } from 'react';

function Game() {
  const colors = ['yellow', 'green', 'purple'];
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full">
      <LayeredTransition colors={colors} className="absolute top-0 left-0 z-0" />
      <div className={`relative z-10 ${showContent ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
        <Link to="/home">
          <button className="bg-green-500 text-white p-2 rounded">Go to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default Game;
