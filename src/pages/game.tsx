import { Link } from 'react-router-dom';
import LayeredTransition from '../components/page-animations/layered';

function Game() {
    const colors = ['yellow', 'green', 'purple'];

    return (
        <div className="relative w-full h-full">
            <LayeredTransition colors={colors} className="absolute top-0 left-0 z-0" />
            <div className="relative z-10">
                <Link to="/home">
                    <button className="bg-green-500 text-white p-2 rounded">Go to Home</button>
                </Link>
            </div>
        </div>
    );
}

export default Game;
