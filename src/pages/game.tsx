import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';
import TetrisGame from '../games/tetris-game';
import TutorialModal from '../games/tutorial-modal';
import { currentTheme } from '../games/colors';
import GameOverModal from '../games/game-over-modal';

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

  const handleGameOver = (score: number) => {
    setFinalScore(score);
    setShowGameOver(true);
  };

  const handleTryAgain = () => {
    setShowGameOver(false);
    // Reset game
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
      };
    }
  }, [showTutorial]);

  return (
    <>
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
    </>
  );
};

export default Game;

