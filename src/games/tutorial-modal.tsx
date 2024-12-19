import React from 'react';

interface TutorialModalProps {
  onClose: () => void;
}

const TutorialModal: React.FC<TutorialModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 border-2 border-cyan-400 rounded-lg p-6 max-w-2xl w-full mx-4 relative">
        <div className="absolute -top-4 -right-4">
          <button
            onClick={onClose}
            className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full w-8 h-8 flex items-center justify-center focus:outline-none"
          >
            ×
          </button>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-4 text-center">
          How to Play 3D Tetris
        </h2>

        <div className="space-y-4 text-white">
          <div className="bg-gray-800 rounded-lg p-4">
            <h3 className="text-xl text-cyan-300 mb-2">Controls</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <li className="flex items-center space-x-2">
                <kbd className="bg-gray-700 px-2 py-1 rounded">W</kbd>
                <span>Rotate piece</span>
              </li>
              <li className="flex items-center space-x-2">
                <kbd className="bg-gray-700 px-2 py-1 rounded">A</kbd>
                <span>Move left</span>
              </li>
              <li className="flex items-center space-x-2">
                <kbd className="bg-gray-700 px-2 py-1 rounded">S</kbd>
                <span>Move down</span>
              </li>
              <li className="flex items-center space-x-2">
                <kbd className="bg-gray-700 px-2 py-1 rounded">D</kbd>
                <span>Move right</span>
              </li>
              <li className="flex items-center space-x-2">
                <kbd className="bg-gray-700 px-2 py-1 rounded">R</kbd>
                <span>Swap piece</span>
              </li>
              <li className="flex items-center space-x-2">
                <kbd className="bg-gray-700 px-2 py-1 rounded">Space</kbd>
                <span>Hard drop</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-4">
            <h3 className="text-xl text-cyan-300 mb-2">Special Features</h3>
            <ul className="space-y-2">
              <li>• Camera rotates automatically for a dynamic 3D experience</li>
              <li>• Complete lines by targeting circles that appear</li>
              <li>• Watch out for special effects and bonuses!</li>
            </ul>
          </div>

          <div className="text-center pt-4">
            <button
              onClick={onClose}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              Start Game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialModal;
