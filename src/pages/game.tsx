import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';
import TetrisGame from '../games/tetris-game';
import { currentTheme } from '../games/colors';

const Game = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [tetrominoState, setTetrominoState] = useState({ tetromino: 0, startX: 3, startY: 0 });
  const gameInstanceRef = useRef<TetrisGame | null>(null);

  const initializeGame = () => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(currentTheme.background);  
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(5, -10, 16); 
    camera.lookAt(5, -10, 0);
    
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
    tetrisGame.spawnNewTetromino();
    const gridBorders = tetrisGame.renderGridBorders(10, 20);
    scene.add(gridBorders);

    const animate = () => {
      renderer.render(scene, camera);
      if (tetrisGame) {
        tetrisGame.updateScene();
      }
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    return () => {
      if (mount && mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      gameInstanceRef.current = null;
    };
  };

  useEffect(() => {
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
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }}></div>;
};

export default Game;
