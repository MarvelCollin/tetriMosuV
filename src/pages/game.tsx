import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';
import TetrisGame from '../games/tetris-game';
import TutorialModal from '../games/modals/tutorial-modal';
import { currentTheme } from '../games/colors';
import GameOverModal from '../games/modals/game-over-modal';
import SettingsModal from '../games/modals/settings-modal';

const Game = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [showTutorial, setShowTutorial] = useState(true);
  const [tetrominoState, setTetrominoState] = useState({ tetromino: 0, startX: 3, startY: 0 });
  const gameInstanceRef = useRef<TetrisGame | null>(null);
  const cameraAngleRef = useRef(0);
  const isRotatingRef = useRef(false);
  const rotationIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const cameraPivotRef = useRef<THREE.Object3D | null>(null); 
  const [showGameOver, setShowGameOver] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [showSettings, setShowSettings] = useState(false);

  const handleGameOver = (score: number) => {
    setFinalScore(score);
    setShowGameOver(true);
  };

  const handleTryAgain = () => {
    setShowGameOver(false);
    if (gameInstanceRef.current) {
      gameInstanceRef.current = null;
    }
    initializeGame();
  };

  const initializeGame = () => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(currentTheme.background);  
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(5, -10, 16); 
    camera.lookAt(5, -10, 0);

    const cameraPivot = new THREE.Object3D();
    cameraPivot.position.set(5, -10, 0);  
    scene.add(cameraPivot);
    cameraPivot.add(camera);
    camera.position.set(0, 0, 16);
    cameraPivotRef.current = cameraPivot;

    const renderer = new THREE.WebGLRenderer({ 
        antialias: true, 
        alpha: true,
        powerPreference: "high-performance"
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.gammaFactor = 2.2;
    renderer.outputEncoding = THREE.sRGBEncoding;

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    handleResize(); 

    const mount = mountRef.current;
    if (!mount) return;
    mount.innerHTML = '';
    mount.appendChild(renderer.domElement);

    const tetrisGame = new TetrisGame(scene, camera, setTetrominoState);
    gameInstanceRef.current = tetrisGame;
    tetrisGame.onGameOver = handleGameOver;
    tetrisGame.spawnNewTetromino();
    const gridBorders = tetrisGame.renderGridBorders(10, 20);
    scene.add(gridBorders);
    let lastTime = 0;
    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      if (deltaTime >= 16) { 
        renderer.render(scene, camera);
        if (tetrisGame) {
          tetrisGame.updateScene();
        }
        lastTime = currentTime;
      }
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    const animateCamera = (pivot: THREE.Object3D, targetAngle: number) => {
      const startAngle = cameraAngleRef.current;
      const startTime = Date.now();
      const duration = 1000;

      const updateCamera = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentAngle = startAngle + (targetAngle - startAngle) * easeProgress;
        
        pivot.rotation.y = currentAngle;
        
        if (gameInstanceRef.current) {
          gameInstanceRef.current.updateCircleTargetsPosition(currentAngle);
        }
        
        if (progress < 1) {
          requestAnimationFrame(updateCamera);
        } else {
          cameraAngleRef.current = targetAngle;
          isRotatingRef.current = false;
        }
      };

      updateCamera();
    };

    const startAutoRotation = () => {
      if (rotationIntervalRef.current) {
        clearInterval(rotationIntervalRef.current);
      }

      const rotateAndReturn = async () => {
        if (!isRotatingRef.current && cameraPivotRef.current) {
          if (gameInstanceRef.current) {
            gameInstanceRef.current.onRotationStart();
          }

          isRotatingRef.current = true;
          const targetAngle = cameraAngleRef.current + Math.PI;
          
          const startTime = Date.now();
          const duration = 1000;

          function animate() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentAngle = cameraAngleRef.current + (Math.PI * easeProgress);
            
            cameraPivotRef.current!.rotation.y = currentAngle;
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              cameraAngleRef.current = targetAngle;
              
              setTimeout(() => {
                const startTimeReturn = Date.now();
                
                function animateReturn() {
                  const elapsedReturn = Date.now() - startTimeReturn;
                  const progressReturn = Math.min(elapsedReturn / duration, 1);
                  
                  const easeProgressReturn = 1 - Math.pow(1 - progressReturn, 3);
                  const currentAngleReturn = targetAngle - (Math.PI * easeProgressReturn);
                  
                  cameraPivotRef.current!.rotation.y = currentAngleReturn;
                  
                  if (progressReturn < 1) {
                    requestAnimationFrame(animateReturn);
                  } else {
                    cameraAngleRef.current = targetAngle - Math.PI;
                    isRotatingRef.current = false;
                    if (gameInstanceRef.current) {
                      console.log('rotation end');
                      gameInstanceRef.current.onRotationEnd();
                    }
                  }
                }
                
                animateReturn();
              }, 5000 + Math.random() * 10000); 
            }
          }

          animate();
        }
      };

      const randomInterval = () => {
        const interval = 30000 + Math.random() * 10000; 
        rotationIntervalRef.current = setTimeout(() => {
          rotateAndReturn();
          randomInterval();
        }, interval);
      };

      randomInterval();
    };

    setTimeout(() => {
      startAutoRotation();
    }, 1000);

    return () => {
      if (mount && mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      gameInstanceRef.current = null;
      if (rotationIntervalRef.current) {
        clearInterval(rotationIntervalRef.current);
        rotationIntervalRef.current = null;
      }
      cameraPivotRef.current = null;
    };
  };

  useEffect(() => {
    const shouldSkipTutorial = localStorage.getItem('skipTutorial') === 'true';
    if (shouldSkipTutorial) {
        setShowTutorial(false);
        localStorage.removeItem('skipTutorial');
    }
}, []);

  useEffect(() => {
    // Remove the delay to start initialization immediately
    if (!showTutorial) {
      const cleanup = initializeGame();
      const handleKeyPress = (event: KeyboardEvent) => {
        if (gameInstanceRef.current) {
          gameInstanceRef.current.handleKeyPress(event);
        }
      };
      window.addEventListener('keydown', handleKeyPress);
      return () => {
        cleanup();
        window.removeEventListener('keydown', handleKeyPress);
        if (gameInstanceRef.current?.dropIntervalId) {
          clearInterval(gameInstanceRef.current.dropIntervalId);
        }
        // Remove tutorial when component unmounts
        const tutorial = document.querySelector('.fixed.bottom-4.right-4');
        if (tutorial) {
          tutorial.remove();
        }
      };
    }
  }, [showTutorial]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowSettings(prev => {
          if (gameInstanceRef.current) {
            gameInstanceRef.current.togglePause();
          }
          return !prev;
        });
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const handleOpenSettings = () => {
    setShowSettings(true);
    if (gameInstanceRef.current) {
      gameInstanceRef.current.togglePause();
    }
  };

  const handleCloseSettings = () => {
    setShowSettings(false);
    if (gameInstanceRef.current) {
      gameInstanceRef.current.togglePause();
    }
  };

  const handleRestart = () => {
    setShowSettings(false);
    setShowGameOver(false);
    
    // Add a flag to localStorage to skip tutorial on reload
    localStorage.setItem('skipTutorial', 'true');
    
    // Reload the page
    window.location.reload();
};

  return (
    <div className="relative">
      {/* Remove the transition overlay opacity-100 state */}
      <div className={`fixed inset-0 bg-black z-50 pointer-events-none transition-opacity duration-300 opacity-0`} />
      <button
        onClick={handleOpenSettings}
        className="fixed top-4 left-4 z-50 p-3 rounded-full bg-white border border-cyan-500/30 hover:bg-white transition-all duration-300 group backdrop-blur-sm"
      >
        <svg 
          className="w-6 h-6 text-cyan-400 group-hover:rotate-90 transition-transform duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </button>

      {showSettings && (
        <SettingsModal
          onClose={handleCloseSettings}
          onRestart={handleRestart}
        />
      )}

      {showTutorial && (
        <TutorialModal onClose={() => setShowTutorial(false)} />
      )}
      {showGameOver && (
        <GameOverModal 
          score={finalScore}
          onClose={handleTryAgain}
        />
      )}
      <div ref={mountRef} style={{ width: '100%', height: '100vh' }}></div>
    </div>
  );
};

export default Game;

