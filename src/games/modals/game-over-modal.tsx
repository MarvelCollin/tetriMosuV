import React from 'react';
import { IGameOverModal } from '../../interfaces/IGameOverModal';


const GameOverModal: React.FC<IGameOverModal> = ({ score, onClose }) => {
    const handleContinue = () => {
        window.location.href = 'https://bluejack.binus.ac.id/nar/home/registration';
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 animate-fadeIn">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            
            <div className="relative bg-gray-900/90 border-2 border-white rounded-xl p-8 max-w-md w-full mx-auto 
                          backdrop-blur-md animate-slideUp">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 
                              opacity-50 animate-pulse" />
                
                <div className="relative space-y-6 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6 text-shadow-glow animate-slideDown">
                        Game Over!
                    </h2>
                    
                    <div className="text-2xl text-white mb-8 animate-float">
                        Final Score: {score}
                    </div>

                    <div className="space-y-4">
                        <button
                            onClick={handleContinue}
                            className="w-full px-6 py-3 text-lg font-semibold text-white rounded-lg 
                                     bg-gradient-to-r from-cyan-500 to-blue-500 
                                     hover:from-cyan-400 hover:to-blue-400 
                                     transition-all duration-300 transform hover:scale-105 
                                     hover:shadow-xl hover:shadow-cyan-500/25 
                                     active:scale-95"
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameOverModal;
