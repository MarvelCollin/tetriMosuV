import { Link } from 'react-router-dom';
import LayeredTransition from '../components/page-animations/layered';

function Game() {
  const colors = ['yellow', 'green', 'purple'];

  return (
    <div className='bg-purple-800 w-full h-screen flex items-center justify-center'>
      {/* <LayeredTransition colors={colors} /> */}
      <div className="relative z-10 opacity-100 transition-opacity duration-1000 flex items-center justify-center w-full h-full">
        <Link to="/home">
          <button className="bg-green-500 text-white p-2 rounded">Go to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default Game;
