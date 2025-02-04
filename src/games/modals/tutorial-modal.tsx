import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { THEMES, setCurrentTheme } from '../colors';
import { IParticle } from '../../interfaces/IParticle';
import { ITutorialModal } from '../../interfaces/ITutorialModal';
import { PreviewTetris } from './preview-tetris';

const DEFAULT_THEME = 'synthwave';

const KEY_MAPPING: { [key: string]: string } = {
  'W': 'W',
  'A': 'A',
  'S': 'S',
  'D': 'D',
  ' ': 'SPACE',  
  'R': 'R',
  'MOUSE1': 'MOUSE1'
};


const TutorialModal: React.FC<ITutorialModal> = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  const [slideDirection, setSlideDirection] = useState<'right' | 'left'>('right');
  const [isWaiting, setIsWaiting] = useState(false);
  const [countdown, setCountdown] = useState(3);

  const [activeKeys, setActiveKeys] = useState<Set<string>>(new Set());
  const [backgroundEffect, setBackgroundEffect] = useState<string>('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [bgColor, setBgColor] = useState<string>('');
  const [selectedTheme, setSelectedTheme] = useState<string>('');

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setSlideDirection('right');
      setIsWaiting(true);
      setCountdown(3);
      const countdownInterval = setInterval(() => {
        setCountdown(prev => {
          if (prev === 1) {
            clearInterval(countdownInterval);
            setCurrentStep(currentStep + 1);
            setIsWaiting(false);
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      onClose();
    }
  };

  const handlePrevious = () => {
    if (currentStep === 1) {
      window.location.href = '/'; 
    } else {
      setSlideDirection('left');
      setCurrentStep(prev => prev - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-xl text-white font-semibold mb-2 drop-shadow-glow">Basic Controls</h3>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {[
                { key: 'W', action: 'Rotate' },
                { key: 'A', action: 'Left' },
                { key: 'S', action: 'Down' },
                { key: 'D', action: 'Right' },
                { key: 'SPACE', action: 'Drop' },
                { key: 'R', action: 'Swap' },
                { key: 'MOUSE1', action: 'Click'},
              ].map((control) => (
                <div 
                  key={control.key} 
                  className={`flex items-center space-x-2 bg-gray-800/50 p-2 rounded-lg backdrop-blur-sm transition-all duration-300 ${
                    activeKeys.has(control.key) ? 'bg-cyan-900/50 scale-105' : ''
                  }`}
                >
                  <kbd className={`px-2 py-1 ${
                    activeKeys.has(control.key)
                      ? 'bg-cyan-500/50 border-cyan-300'
                      : 'bg-cyan-500/30 border-cyan-400'
                    } text-white text-sm border rounded-md font-mono shadow-glow transition-all duration-300`}
                  >
                    {control.key === 'MOUSE1' ? '🖱️' : control.key}
                  </kbd>
                  <span className="text-white text-sm">{control.action}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-[2.5vh] text-white font-semibold mb-2 drop-shadow-glow">Special Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                {
                  title: 'Dynamic Camera',
                  description: 'Auto camera rotation with random interval',
                  icon: '🎥'
                }
              ].map((feature) => (
                <div key={feature.title} className="flex items-start space-x-4 bg-gray-800/50 p-[2vh] rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-colors">
                  <span className="text-[4vh]">{feature.icon}</span>
                  <div>
                    <h4 className="text-cyan-200 text-[2.5vh] font-medium">{feature.title}</h4>
                    <p className="text-gray-100 text-[1.5vh]">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex flex-col sm:flex-row items-start space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 bg-gray-800/50 p-[2vh] rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-colors">
                <img src="./assets/images/circle.png" alt="Circle" className="w-[12vh] h-[12vh] mx-auto sm:mx-0" />
                <div>
                  <h4 className="text-cyan-200 text-[2.5vh] font-medium">Circle Click</h4>
                  <p className="text-gray-100 text-[1.5vh]">Make sure you click on the circle like this to earn score and clear the line</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-xl text-white font-semibold mb-2 drop-shadow-glow text-center">
              Themes
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(THEMES).sort().map(([themeName]) => (
                <div
                  key={themeName}
                  onClick={() => {
                    setSelectedTheme(themeName);
                    localStorage.setItem('selectedTheme', themeName);
                    setCurrentTheme(themeName as keyof typeof THEMES);
                  }}
                  className={`relative cursor-pointer rounded-lg p-2 transition-all duration-300
                    ${selectedTheme === themeName ? 
                      'bg-cyan-500/20 ring-1 ring-cyan-400/50 scale-[1.02]' : 
                      'bg-gray-900/50 hover:bg-gray-800/50'}`}
                >
                  <div className="relative aspect-video mb-2 rounded-lg overflow-hidden">
                    <PreviewTetris theme={themeName} />
                  </div>
                  <div className="text-sm text-white font-medium text-center">
                    {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const particles = useMemo(() => {
    const particlesArray: IParticle[] = [];
    for (let i = 0; i < 60; i++) {
      particlesArray.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        speedX: (Math.random() - 0.5) * 0.5, 
        speedY: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        color: `hsla(${180 + Math.random() * 60}, 100%, 70%, ${0.3 + Math.random() * 0.2})`
      });
    }
    return particlesArray;
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const mappedKey = KEY_MAPPING[e.key] || e.key.toUpperCase();
      setActiveKeys(prev => new Set(prev).add(mappedKey));
      
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && currentStep < totalSteps) setCurrentStep(currentStep + 1);
      if (e.key === 'ArrowLeft' && currentStep > 1) setCurrentStep(currentStep - 1);
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const mappedKey = KEY_MAPPING[e.key] || e.key.toUpperCase();
      setActiveKeys(prev => {
        const newKeys = new Set(prev);
        newKeys.delete(mappedKey);
        return newKeys;
      });
    };

    const handleMouseDown = (e: MouseEvent) => {
      setActiveKeys(prev => new Set(prev).add('MOUSE1'));
    };

    const handleMouseUp = () => {
      setActiveKeys(prev => {  
        const newKeys = new Set(prev);
        newKeys.delete('MOUSE1');
        return newKeys;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [currentStep, onClose]);

  const animateIParticles = useCallback((ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    if (!backgroundEffect) {
      const gradient = ctx.createRadialGradient(
        width / 2, height / 2, 0,
        width / 2, height / 2, width / 2
      );
      gradient.addColorStop(0, 'rgba(0, 40, 80, 0.8)');
      gradient.addColorStop(0.5, 'rgba(0, 20, 40, 0.9)');
      gradient.addColorStop(1, 'rgba(0, 10, 20, 0.95)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    }

    const particleUpdates = particles.map((particle, index) => {
      particle.x = (particle.x + particle.speedX + width) % width;
      particle.y = (particle.y + particle.speedY + height) % height;
      return particle;
    });

    ctx.save();
    particleUpdates.forEach((particle, index) => {
      const shimmer = Math.sin(Date.now() * 0.002 + index * 0.1) * 0.2 + 0.8;
      const particleGradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.size * 2
      );

      const baseColor = particle.color.match(/hsla\(([^)]+)\)/)?.[1].split(',') || [];
      const [h, s, l] = baseColor;
      particleGradient.addColorStop(0, `hsla(${h}, ${s}, ${l}, ${shimmer})`);
      particleGradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = particleGradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.restore();

    if (!backgroundEffect) {
      ctx.save();
      for (let i = 0; i < particles.length; i += 2) {
        const particle = particles[i];
        for (let j = i + 1; j < particles.length; j += 2) {
          const particle2 = particles[j];
          const dx = particle.x - particle2.x;
          const dy = particle.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) { 
            const opacity = (1 - distance/100) * 0.15;
            ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`;
            ctx.lineWidth = (1 - distance/100);
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
          }
        }
      }
      ctx.restore();
    }
  }, [particles, backgroundEffect]);

  const getThemeBackgroundColor = (themeName: string) => {
    if (!themeName) return 'rgba(2, 6, 23, 0.95)';
    const theme = THEMES[themeName as keyof typeof THEMES];
    const bgColor = theme.background;
    const r = (bgColor >> 16) & 255;
    const g = (bgColor >> 8) & 255;
    const b = bgColor & 255;
    return `rgba(${r}, ${g}, ${b}, 0.95)`;
  };

  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.style.backgroundColor = getThemeBackgroundColor(selectedTheme);
    }
  }, [selectedTheme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let frameId: number;
    let lastTime = 0;
    const fps = 60; 
    const interval = 1000 / fps;

    const animate = (currentTime: number) => {
      frameId = requestAnimationFrame(animate);
      
      const delta = currentTime - lastTime;
      if (delta < interval) return;

      lastTime = currentTime - (delta % interval);
      animateIParticles(ctx);
    };

    frameId = requestAnimationFrame(animate);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [animateIParticles]);

  useEffect(() => {
    if (!selectedTheme) {
        const currentThemeName = localStorage.getItem('selectedTheme') || DEFAULT_THEME;
        setSelectedTheme(currentThemeName);
    }
}, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-2 animate-fadeIn">
      <div className="fixed inset-0">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ 
            backgroundColor: getThemeBackgroundColor(selectedTheme),
            transition: 'background-color 0.5s ease-in-out'
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-cyan-500/20 to-purple-600/30" />
        
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(99, 255, 255, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(99, 255, 255, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '3vh 3vh',
            animation: 'grid-move 15s linear infinite',
          }}
        />

        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-repeat"
            style={{
              backgroundImage: `
                linear-gradient(45deg, transparent 48%, rgba(0, 255, 255, 0.1) 50%, transparent 52%),
                linear-gradient(-45deg, transparent 48%, rgba(0, 255, 255, 0.1) 50%, transparent 52%)
              `,
              backgroundSize: '6vh 6vh',
              animation: 'pattern-move 20s linear infinite',
            }}
          />
        </div>

        <div className="absolute w-full h-full overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[24vh] h-[24vh] bg-cyan-400/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-[28vh] h-[28vh] bg-blue-400/20 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute top-1/2 left-1/2 w-[32vh] h-[32vh] bg-purple-400/20 rounded-full blur-3xl animate-spin-slow" />
        </div>

        {backgroundEffect === 'keypress' && (
          <div className="absolute inset-0 animate-ripple-fast">
            <div className={`absolute inset-0 ${bgColor || 'from-cyan-500/10'} via-transparent to-transparent bg-gradient-radial animate-pulse-fast`} />
            <div className={`absolute inset-0 bg-gradient-to-br ${bgColor || 'from-cyan-500/5'} via-transparent to-transparent opacity-80`} />
          </div>
        )}

        {backgroundEffect === 'click' && (
          <div 
            className="absolute pointer-events-none"
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className="absolute w-[50vh] h-[50vh] -translate-x-1/2 -translate-y-1/2">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ripple-out" />
              <div className="absolute inset-0 bg-cyan-500/10 rounded-full animate-ripple-out-delayed" />
            </div>
          </div>
        )}
      </div>

      <div className="relative max-w-full p-4 sm:p-8">
        <div className="text-[6vh] sm:text-[9vh] font-bold text-white mb-6 text-center text-shadow-glow animate-slideDown relative group">
          <span className="inline-block animate-float-title transition-all duration-300">2</span>
          <span className="inline-block animate-float-title-delayed mx-2">5</span>
          <span className="inline-block animate-float-title-more-delayed">-</span>
          <span className="inline-block animate-float-title">2</span>
          <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 group-hover:via-cyan-500/20 transition-all duration-500"></div>
        </div>
        <div className="relative bg-gray-900/80 border-2 border-cyan-400/50 rounded-xl p-4 sm:p-8 max-w-3xl w-full mx-auto backdrop-blur-md animate-slideUp">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 opacity-50 animate-pulse" />
          <div className="relative bg-gray-900/90 p-4 sm:p-8 rounded-lg overflow-hidden">
            <div className="absolute -top-4 -right-4 animate-bounce-slow">
              <button
                onClick={onClose}
                className="bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center focus:outline-none transition-all duration-300 transform hover:scale-110 hover:rotate-180 active:scale-95"
              >
                ×
              </button>
            </div>

            <h2 className="text-[3vh] sm:text-[4vh] sm:text-[5vh] font-bold text-white mb-6 text-center text-shadow-glow animate-slideDown relative group">
              <span className="inline-block animate-float-title transition-all duration-300">HOW</span>
              <span className="inline-block animate-float-title-delayed mx-2">TO</span>
              <span className="inline-block animate-float-title-more-delayed">PLAY</span>
              <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 group-hover:via-cyan-500/20 transition-all duration-500"></div>
            </h2>

            <div className="text-white text-shadow-sm">
              <div
                key={currentStep}
                className={`transition-all duration-500 transform ${
                  slideDirection === 'right' ? 'animate-slideInRight' : 'animate-slideInLeft'
                }`}
              >
                {renderStep()}
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between animate-fadeIn">
              <button
                onClick={handlePrevious}
                className={`px-4 sm:px-6 py-2 rounded-lg text-white font-medium relative overflow-hidden group 
                  bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 
                  transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 
                  active:scale-95`}
              >
                <span className="relative z-10">
                  {currentStep === 1 ? 'Back to Home' : 'Previous'}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-1"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_100%)]"></div>
              </button>

              <div className="flex space-x-3">
                {Array.from({ length: totalSteps }).map((_, i) => (
                  <div
                    key={i}
                    className={`relative ${
                      i + 1 === currentStep ? 'scale-125' : ''
                    } transition-all duration-300`}
                  >
                    <div
                      className={`w-[1vh] h-[1vh] rounded-full transition-all duration-500 ${
                        i + 1 === currentStep 
                          ? 'bg-cyan-400 animate-ping-slow' 
                          : 'bg-gray-600 hover:bg-gray-400'
                      }`}
                    />
                    {i + 1 === currentStep && (
                      <div className="absolute inset-0 bg-cyan-400/30 rounded-full animate-ripple"></div>
                    )}
                  </div>
                ))}
              </div>

              <button
                onClick={handleNext}
                disabled={isWaiting}
                className={`px-4 sm:px-6 py-2 text-white rounded-lg font-medium relative overflow-hidden group bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 active:scale-95 ${isWaiting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <span className="relative z-10 group-hover:animate-pulse-fast">
                  {isWaiting ? `Please wait... ${countdown}` : (currentStep === totalSteps ? 'Start' : 'Next')}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_100%)]"></div>
                <div className="absolute -inset-px bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-gradient-x"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = `
  @keyframes grid-move {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 30px 30px;
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0) scale(1);
    }
    50% {
      transform: translateY(-20px) scale(1.1);
    }
  }

  @keyframes float-delayed {
    0%, 100% {
      transform: translateY(0) scale(1.1);
    }
    50% {
      transform: translateY(-25px) scale(1);
    }
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  .animate-float-delayed {
    animation: float-delayed 7s ease-in-out infinite;
  }

  .drop-shadow-glow {
    filter: drop-shadow(0 0 10px rgba(99, 255, 255, 0.5));
  }

  .text-shadow-glow {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5),
                 0 0 20px rgba(99, 255, 255, 0.3),
                 0 0 30px rgba(99, 255, 255, 0.2);
  }

  .text-shadow-bright {
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
  }

  .text-shadow-sm {
    text-shadow: 0 0 4px rgba(255, 255, 255, 0.3);
  }

  .shadow-glow {
    box-shadow: 0 0 10px rgba(99, 255, 255, 0.3);
  }

  @keyframes pattern-move {
    0% { background-position: 0 0; }
    100% { background-position: 60px 60px; }
  }

  @keyframes pulse-slow {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.2); }
  }

  @keyframes float-slow {
    0%, 100% { transform: translateY(0) scale(1.1); }
    50% { transform: translateY(-30px) scale(1); }
  }

  @keyframes spin-slow {
    from { transform: rotate(0deg) scale(1); }
    to { transform: rotate(360deg) scale(1.2); }
  }

  .animate-pulse-slow {
    animation: pulse-slow 8s ease-in-out infinite;
  }

  .animate-float-slow {
    animation: float-slow 10s ease-in-out infinite;
  }

  .animate-spin-slow {
    animation: spin-slow 15s linear infinite;
  }

  @keyframes slideUp {
    from { transform: translateY(50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  @keyframes slideDown {
    from { transform: translateY(-50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  @keyframes slideInRight {
    from { transform: translateX(50px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes ping-slow {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.5); opacity: 0.5; }
    100% { transform: scale(1); opacity: 1; }
  }

  @keyframes bounce-slow {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  .animate-slideUp {
    animation: slideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .animate-slideDown {
    animation: slideDown 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .animate-slideInRight {
    animation: slideInRight 0.4s ease-out forwards;
  }

  .animate-slideInLeft {
    animation: slideInLeft 0.4s ease-out forwards;
  }

  .animate-fadeIn {
    animation: fadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .animate-ping-slow {
    animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
  }

  .animate-bounce-slow {
    animation: bounce-slow 2s ease-in-out infinite;
  }

  @keyframes ripple {
    0% {
      transform: scale(1);
      opacity: 0.5;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  .animate-ripple {
    animation: ripple 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
  }

  .hover-glow {
    transition: all 0.3s ease;
  }

  .hover-glow:hover {
    box-shadow: 0 0 15px rgba(99, 255, 255, 0.5);
    transform: translateY(-2px);
  }

  @keyframes slideInLeft {
    from {
      transform: translateX(-100px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes shine {
    from {
      transform: translateX(-100%) rotate(45deg);
    }
    to {
      transform: translateX(100%) rotate(45deg);
    }
  }

  .shine-effect::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 100%;
    background: linear-gradient(
      to right,
      transparent 0%,
      rgba(255, 255, 255, 0.2) 50%,
      transparent 100%
    );
    animation: shine 3s infinite;
  }

  @keyframes float-title {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-5px) rotate(2deg); }
  }

  @keyframes float-title-delayed {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-5px) rotate(-2deg); }
  }

  @keyframes float-title-more-delayed {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-5px) rotate(1deg); }
  }

  .animate-float-title {
    animation: float-title 3s ease-in-out infinite;
    display: inline-block;
  }

  .animate-float-title-delayed {
    animation: float-title-delayed 3s ease-in-out infinite;
    display: inline-block;
  }

  .animate-float-title-more-delayed {
    animation: float-title-more-delayed 3s ease-in-out infinite;
    display: inline-block;
  }

  @keyframes gradient-x {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes pulse-fast {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }

  .animate-float-title {
    animation: float-title 3s ease-in-out infinite;
    display: inline-block;
  }

  .animate-float-title-delayed {
    animation: float-title-delayed 3s ease-in-out infinite;
    display: inline-block;
  }

  .animate-float-title-more-delayed {
    animation: float-title-more-delayed 3s ease-in-out infinite;
    display: inline-block;
  }

  .animate-gradient-x {
    animation: gradient-x 3s linear infinite;
    background-size: 200% 200%;
  }

  .animate-pulse-fast {
    animation: pulse-fast 1s ease-in-out infinite;
  }

  .hover-lift {
    transition: transform 0.2s ease;
  }

  .hover-lift:hover {
    transform: translateY(-2px);
  }

  .hover-glow {
    transition: all 0.3s ease;
  }

  .hover-glow:hover {
    box-shadow: 0 0 15px rgba(99, 255, 255, 0.5);
    text-shadow: 0 0 8px rgba(99, 255, 255, 0.8);
  }

  .shadow-glow-intense {
    box-shadow: 0 0 15px rgba(99, 255, 255, 0.8),
                0 0 30px rgba(99, 255, 255, 0.6);
  }

  @keyframes key-press {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }

  .animate-key-press {
    animation: key-press 0.2s ease-in-out;
  }

  @keyframes ripple-out {
    0% { transform: scale(0); opacity: 1; }
    100% { transform: scale(1); opacity: 0; }
  }

  @keyframes ripple-out-delayed {
    0% { transform: scale(0); opacity: 0.8; }
    100% { transform: scale(1); opacity: 0; }
  }

  @keyframes ripple-fast {
    0% { opacity: 1; }
    100% { opacity: 0; }
  }

  .animate-ripple-out {
    animation: ripple-out 0.8s ease-out forwards;
  }

  .animate-ripple-out-delayed {
    animation: ripple-out-delayed 1s ease-out forwards;
  }

  .animate-ripple-fast {
    animation: ripple-fast 0.3s ease-out forwards;
  }

  .bg-gradient-radial {
    background-image: radial-gradient(circle at center, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 70%);
  }

  @keyframes ripple-glow {
    0% { opacity: 0.8; transform: scale(0.8); filter: brightness(1); }
  }

  .animate-ripple-glow {
    animation: ripple-glow 0.8s ease-out forwards;
  }

  .bg-gradient-animated {
    background-size: 200% 200%;
    animation: gradient-shift 3s ease infinite;
  }

  @keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default TutorialModal;
