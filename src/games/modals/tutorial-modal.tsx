import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { THEMES, setCurrentTheme } from '../colors';
import PreviewTetris from './preview-tetris';

interface TutorialModalProps {
  onClose: () => void;
}

interface Particle {
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  size: number;
  color: string;
}

const KEY_MAPPING: { [key: string]: string } = {
  'W': 'W',
  'A': 'A',
  'S': 'S',
  'D': 'D',
  ' ': 'SPACE',  
  'R': 'R',
  'MOUSE1': 'MOUSE1'
};



const TutorialModal: React.FC<TutorialModalProps> = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  const [slideDirection, setSlideDirection] = useState<'right' | 'left'>('right');

  const [activeKeys, setActiveKeys] = useState<Set<string>>(new Set());
  const [backgroundEffect, setBackgroundEffect] = useState<string>('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [bgColor, setBgColor] = useState<string>('');
  const [selectedTheme, setSelectedTheme] = useState<string>('');

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setSlideDirection('right');
      setCurrentStep(currentStep + 1);
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
          <div className="space-y-6">
            <h3 className="text-2xl text-white font-semibold mb-4 drop-shadow-glow">Basic Controls</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { key: 'W', action: 'Rotate piece' },
                { key: 'A', action: 'Move left' },
                { key: 'S', action: 'Move down' },
                { key: 'D', action: 'Move right' },
                { key: 'SPACE', action: 'Hard drop' },
                { key: 'R', action: 'Swap piece' },
                { key: 'MOUSE1', action: 'Click targets'},
              ].map((control) => (
                <div 
                  key={control.key} 
                  className={`flex items-center space-x-3 bg-gray-800/50 p-3 rounded-lg backdrop-blur-sm transition-all duration-300 ${
                    activeKeys.has(control.key) ? 'bg-cyan-900/50 scale-105' : ''
                  }`}
                >
                  <kbd 
                    className={`px-3 py-1.5 ${
                      activeKeys.has(control.key)
                        ? 'bg-cyan-500/50 border-cyan-300 shadow-glow-intense animate-pulse-fast'
                        : 'bg-cyan-500/30 border-cyan-400'
                    } text-white border rounded-lg font-mono shadow-glow transition-all duration-300`}
                  >
                    {control.key === 'MOUSE1' ? (
                      <div className="flex items-center space-x-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 0C4.477 0 0 4.477 0 10c0 5.522 4.477 10 10 10 5.522 0 10-4.478 10-10 0-5.523-4.478-10-10-10zm0 2c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z"/>
                        </svg>
                        <span>Click</span>
                      </div>
                    ) : control.key}
                  </kbd>
                  <span className={`text-white text-shadow-bright flex items-center space-x-2 ${
                    activeKeys.has(control.key) ? 'text-cyan-300' : ''
                  }`}>
                    <span>{control.action}</span>
                    {control.icon && <span className="text-xl">{control.icon}</span>}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl text-white font-semibold mb-4 drop-shadow-glow">Special Features</h3>
            <div className="space-y-4">
              {[
                {
                  title: 'Dynamic Camera',
                  description: 'Experience the game from different angles with automatic camera rotation',
                  icon: '🎥'
                },
                {
                  title: 'Target Mode',
                  description: 'Hit the circular targets to clear lines and score points',
                  icon: '🎯'
                },
              ].map((feature) => (
                <div key={feature.title} className="flex items-start space-x-4 bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-colors">
                  <span className="text-2xl">{feature.icon}</span>
                  <div>
                    <h4 className="text-cyan-200 font-medium text-shadow-glow">{feature.title}</h4>
                    <p className="text-gray-100 text-shadow-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl text-white font-semibold mb-4 drop-shadow-glow">Ready to Play?</h3>
            
            <div className="space-y-6">
              <div className="bg-gray-800/50 p-8 rounded-lg backdrop-blur-sm">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Left side - Theme Selection */}
                  <div className="flex-1 space-y-6">
                    <div>
                      <h4 className="text-xl text-white mb-4 font-medium">Select Your Theme</h4>
                      <div className="relative">
                        <select
                          value={selectedTheme || DEFAULT_THEME}
                          onChange={(e) => {
                            const newTheme = e.target.value as keyof typeof THEMES;
                            setSelectedTheme(newTheme);
                            localStorage.setItem('selectedTheme', newTheme);
                            setCurrentTheme(newTheme);
                          }}
                          className="w-full p-4 rounded-lg bg-gray-900/90 border-2 border-cyan-500/30 text-white 
                                   focus:border-cyan-400/50 focus:outline-none transition-all duration-300
                                   appearance-none cursor-pointer hover:bg-gray-800/90"
                        >
                          {Object.entries(THEMES).sort().map(([themeName]) => (
                            <option 
                              key={themeName} 
                              value={themeName}
                              className="bg-gray-900 py-2"
                            >
                              {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Theme Colors Display */}
                    <div className="bg-gray-900/50 p-4 rounded-lg space-y-4">
                      <h5 className="text-white/70 text-sm font-medium">Theme Colors</h5>
                      <div className="grid grid-cols-4 gap-3">
                        {selectedTheme && THEMES[selectedTheme as keyof typeof THEMES].colors.map((color, i) => (
                          <div
                            key={i}
                            className="group relative aspect-square rounded-lg overflow-hidden transition-transform hover:scale-105"
                          >
                            <div
                              className="w-full h-full"
                              style={{ 
                                backgroundColor: `#${color.toString(16).padStart(6, '0')}`,
                                boxShadow: `0 0 15px #${color.toString(16).padStart(6, '0')}40`
                              }}
                            />
                            <div 
                              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              style={{ 
                                background: `linear-gradient(45deg, transparent, #${color.toString(16).padStart(6, '0')}80)`
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right side - Preview */}
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                      <div className="relative bg-gray-900 p-4 rounded-lg">
                        <h5 className="text-white/70 text-sm font-medium mb-4 text-center">Preview</h5>
                        <div className="flex items-center justify-center">
                          <div className="transform scale-125 hover:scale-150 transition-transform duration-300">
                            <PreviewTetris theme={selectedTheme || DEFAULT_THEME} />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Theme Properties */}
                    <div className="mt-6 w-full bg-gray-900/50 p-4 rounded-lg">
                      <div className="grid grid-cols-3 gap-4">
                        <ThemePropertyDisplay 
                          label="Grid"
                          color={THEMES[selectedTheme as keyof typeof THEMES]?.grid}
                        />
                        <ThemePropertyDisplay 
                          label="Border"
                          color={THEMES[selectedTheme as keyof typeof THEMES]?.border}
                        />
                        <ThemePropertyDisplay 
                          label="Background"
                          color={THEMES[selectedTheme as keyof typeof THEMES]?.background}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm text-center">
                <p className="text-white text-lg mb-4 text-shadow-bright">
                  Dont Forget to join NAR 25-2 !!
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const particles = useMemo(() => {
    const particlesArray: Particle[] = [];
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

  const animateParticles = useCallback((ctx: CanvasRenderingContext2D) => {
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

  // Add function to get theme-based background color
  const getThemeBackgroundColor = (themeName: string) => {
    if (!themeName) return 'rgba(2, 6, 23, 0.95)';
    const theme = THEMES[themeName as keyof typeof THEMES];
    const bgColor = theme.background;
    // Convert hex to rgba with opacity
    const r = (bgColor >> 16) & 255;
    const g = (bgColor >> 8) & 255;
    const b = bgColor & 255;
    return `rgba(${r}, ${g}, ${b}, 0.95)`;
  };

  // Update the canvas background when theme changes
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
      animateParticles(ctx);
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
  }, [animateParticles]);

  useEffect(() => {
    // Set initial theme when component mounts
    if (!selectedTheme) {
        const currentThemeName = localStorage.getItem('selectedTheme') || DEFAULT_THEME;
        setSelectedTheme(currentThemeName);
    }
}, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4 animate-fadeIn">
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
            backgroundSize: '30px 30px',
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
              backgroundSize: '60px 60px',
              animation: 'pattern-move 20s linear infinite',
            }}
          />
        </div>

        <div className="absolute w-full h-full overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-cyan-400/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-blue-400/20 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl animate-spin-slow" />
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
            <div className="absolute w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ripple-out" />
              <div className="absolute inset-0 bg-cyan-500/10 rounded-full animate-ripple-out-delayed" />
            </div>
          </div>
        )}
      </div>

      <div className="relative">
          <p className="text-9xl  font-bold text-white mb-6 text-center text-shadow-glow animate-slideDown relative group">
            <span className="inline-block animate-float-title transition-all duration-300">2</span>
            <span className="inline-block animate-float-title-delayed mx-2">5</span>
            <span className="inline-block animate-float-title-more-delayed">-</span>
            <span className="inline-block animate-float-title">2</span>
            <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 group-hover:via-cyan-500/20 transition-all duration-500"></div>
          </p>
        <div className="relative bg-gray-900/80 border-2 border-cyan-400/50 rounded-xl p-8 max-w-3xl w-full mx-auto backdrop-blur-md animate-slideUp">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 opacity-50 animate-pulse" />
          <div className="relative bg-gray-900/90 p-8 rounded-lg overflow-hidden">
            <div className="absolute -top-4 -right-4 animate-bounce-slow">
              <button
                onClick={onClose}
                className="bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center focus:outline-none transition-all duration-300 transform hover:scale-110 hover:rotate-180 active:scale-95"
              >
                ×
              </button>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-center text-shadow-glow animate-slideDown relative group">
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
                className={`px-6 py-2 rounded-lg text-white font-medium relative overflow-hidden group 
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
                      className={`w-2 h-2 rounded-full transition-all duration-500 ${
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
                className="px-6 py-2 text-white rounded-lg font-medium relative overflow-hidden group bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 active:scale-95"
              >
                <span className="relative z-10 group-hover:animate-pulse-fast">
                  {currentStep === totalSteps ? 'Start' : 'Next'}
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

const ThemePropertyDisplay: React.FC<{ label: string; color: number }> = ({ label, color }) => (
  <div className="flex flex-col items-center space-y-2">
    <div 
      className="w-8 h-8 rounded-lg transition-transform hover:scale-110"
      style={{ 
        backgroundColor: `#${color.toString(16).padStart(6, '0')}`,
        boxShadow: `0 0 10px #${color.toString(16).padStart(6, '0')}40`
      }}
    />
    <span className="text-white/70 text-sm">{label}</span>
  </div>
);

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
    animation: float-title-delayed 3s ease-in-out infinite 0.2s;
    display: inline-block;
  }

  .animate-float-title-more-delayed {
    animation: float-title-more-delayed 3s ease-in-out infinite 0.4s;
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
    animation: float-title-delayed 3s ease-in-out infinite 0.2s;
    display: inline-block;
  }

  .animate-float-title-more-delayed {
    animation: float-title-more-delayed 3s ease-in-out infinite 0.4s;
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
