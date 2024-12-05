import { Link } from 'react-router-dom';
import CircleTransition from '../components/page-animations/circle';

function Home() {
    return (
        <div className="bg-red-800 w-full h-screen flex items-center justify-center">
            <CircleTransition backgroundColor="black" />
            <div className="relative z-10 opacity-100 transition-opacity duration-1000 flex items-center justify-center w-full h-full">
                <Link to="/game">
                    <button className="bg-blue-500 text-white p-2 rounded">Go to Game</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
