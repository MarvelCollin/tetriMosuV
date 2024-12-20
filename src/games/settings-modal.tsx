import React, { useEffect } from 'react';

interface SettingsModalProps {
  onClose: () => void;
  onRestart: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ onClose, onRestart }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-white/10 backdrop-blur-md flex items-center justify-center z-50">
      <div className="bg-white/20 p-8 rounded-xl border-2 border-white/50 max-w-md w-full mx-4 shadow-2xl backdrop-blur-lg transform animate-slideDown">
        <h2 className="text-3xl font-bold text-white mb-8 text-center drop-shadow-glow">Settings</h2>
        
        <div className="space-y-4">
          
          <button
            onClick={onRestart}
            className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-white/80 to-pink-400/80 text-gray-800 font-bold 
                     hover:from-white hover:to-pink-400 transition-all duration-300 transform hover:scale-105 
                     hover:shadow-lg active:scale-95 backdrop-blur-sm"
          >
            Restart Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
