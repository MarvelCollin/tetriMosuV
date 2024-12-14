import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const TETROMINOES = [
  // I shape
  [
    [1, 1, 1, 1]
  ],
  // O shape
  [
    [1, 1],
    [1, 1]
  ],
  // T shape
  [
    [0, 1, 0],
    [1, 1, 1]
  ],
  // S shape
  [
    [0, 1, 1],
    [1, 1, 0]
  ],
  // Z shape
  [
    [1, 1, 0],
    [0, 1, 1]
  ],
  // J shape
  [
    [1, 0, 0],
    [1, 1, 1]
  ],
  // L shape
  [
    [0, 0, 1],
    [1, 1, 1]
  ]
];

const COLORS = [
  0x00ffff, // I shape - Cyan
  0xffff00, // O shape - Yellow
  0x800080, // T shape - Purple
  0x00ff00, // S shape - Green
  0xff0000, // Z shape - Red
  0x0000ff, // J shape - Blue
  0xffa500  // L shape - Orange
];

const dropInterval = 200; 

class TetrisGame {
  grid: Array<Array<{ color: number | null, filled: boolean }>>;
  currentX: number;
  currentY: number;
  dropIntervalId: NodeJS.Timeout | null;
  scene: THREE.Scene;
  setTetrominoState: (state: { tetromino: number, startX: number, startY: number }) => void;
  currentTetromino: number;
  gameOver: boolean;

  constructor(scene: THREE.Scene, setTetrominoState: (state: { tetromino: number, startX: number, startY: number }) => void) {
    this.grid = this.createGrid(10, 20);
    this.currentX = 3;
    this.currentY = 2;
    this.dropIntervalId = null;
    this.scene = scene;
    this.setTetrominoState = setTetrominoState;
    this.currentTetromino = 0;
    this.gameOver = false;
    this.startAutoDrop();
  }

  createGrid(width: number, height: number) {
    const grid: Array<Array<{ color: number | null, filled: boolean }>> = [];
    for (let y = 0; y < height; y++) {
      const row: Array<{ color: number | null, filled: boolean }> = [];
      for (let x = 0; x < width; x++) {
        row.push({ color: null, filled: false });
      }
      grid.push(row);
    }
    return grid;
  }

  mergeTetromino(tetromino: number, startX: number, startY: number) {
    const shape = TETROMINOES[tetromino];
    shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value === 1) {
          const gridX = startX + x;
          const gridY = startY + y;
          if (gridY >= 0 && gridY < this.grid.length && gridX >= 0 && gridX < this.grid[0].length) {
            this.grid[gridY][gridX] = { color: COLORS[tetromino], filled: true };
          }
        }
      });
    });
  }

  clearTetrominoFromGrid(tetromino: number, startX: number, startY: number) {
    const shape = TETROMINOES[tetromino];
    for (let y = 0; y < shape.length; y++) {
      for (let x = 0; x < shape[y].length; x++) {
        if (shape[y][x] === 1) {
          const gridX = startX + x;
          const gridY = startY + y;
          if (gridY >= 0 && gridY < this.grid.length && gridX >= 0 && gridX < this.grid[0].length) {
            this.grid[gridY][gridX] = { color: null, filled: false };
          }
        }
      }
    }
  }

  renderGrid() {
    const group = new THREE.Group();
    for (let y = 0; y < this.grid.length; y++) {
      for (let x = 0; x < this.grid[y].length ; x++) {
        if (this.grid[y][x].filled) {
          const geometry = new THREE.BoxGeometry(1, 1, 1);
          const color = this.grid[y][x].color || 0xffffff;
          const material = new THREE.MeshBasicMaterial({ color, wireframe: !this.grid[y][x].filled, opacity: 0.5, transparent: true });
          const cube = new THREE.Mesh(geometry, material);
          cube.position.set(x + 0.5, -y + 0.5, 0); 
          group.add(cube);
        }
      }
    }
    group.name = 'grid';
    return group;
  }

  renderGridBorders(width: number, height: number) {
    const group = new THREE.Group();
    const material = new THREE.LineBasicMaterial({ color: 0xffffff });

    for (let y = 0; y <= height; y++) {
      const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, -y, 0),
        new THREE.Vector3(width, -y, 0)
      ]);
      const line = new THREE.Line(geometry, material);
      group.add(line);
    }

    for (let x = 0; x <= width; x++) {
      const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(x, 0, 0),
        new THREE.Vector3(x, -height, 0)
      ]);
      const line = new THREE.Line(geometry, material);
      group.add(line);
    }

    return group;
  }

  placeTetrominoOnGrid(tetromino: number, startX: number, startY: number) {
    const shape = TETROMINOES[tetromino];
    for (let y = 0; y < shape.length; y++) {
      for (let x = 0; x < shape[y].length; x++) {
        if (shape[y][x] === 1) {
          const gridX = startX + x;
          const gridY = startY + y;
          if (gridY >= 0 && gridY < this.grid.length && gridX >= 0 && gridX < this.grid[0].length) {
            this.grid[gridY][gridX] = { color: COLORS[tetromino], filled: true };
          }
        }
      }
    }
  }

  updateScene() {
    this.scene.remove(this.scene.getObjectByName('grid'));
    const gridGroup = this.renderGrid();
    this.scene.add(gridGroup);
  }

  checkCollision(tetromino: number, testX: number, testY: number): boolean {
    const shape = TETROMINOES[tetromino];
    for (let y = 0; y < shape.length; y++) {
      for (let x = 0; x < shape[y].length; x++) {
        if (shape[y][x] === 1) {
          const newX = testX + x;
          const newY = testY + y;
          
          // Check boundaries
          if (newX < 0 || newX >= this.grid[0].length || newY >= this.grid.length) {
            return true;
          }
          
          // Check collision with other pieces
          if (newY >= 0) {
            // Skip checking positions above the grid
            if (this.grid[newY][newX].filled) {
              // Need to check if the filled cell belongs to the current tetromino
              const isSelfCollision = (
                newY === this.currentY + y &&
                newX === this.currentX + x
              );
              if (!isSelfCollision) {
                return true;
              }
            }
          }
        }
      }
    }
    return false;
  }

  moveLeft() {
    this.clearTetrominoFromGrid(this.currentTetromino, this.currentX, this.currentY);
    if (!this.checkCollision(this.currentTetromino, this.currentX - 1, this.currentY)) {
      this.currentX--;
    }
    this.placeTetrominoOnGrid(this.currentTetromino, this.currentX, this.currentY);
    this.updateScene();
  }

  moveRight() {
    this.clearTetrominoFromGrid(this.currentTetromino, this.currentX, this.currentY);
    if (!this.checkCollision(this.currentTetromino, this.currentX + 1, this.currentY)) {
      this.currentX++;
    }
    this.placeTetrominoOnGrid(this.currentTetromino, this.currentX, this.currentY);
    this.updateScene();
  }

  moveDown() {
    this.clearTetrominoFromGrid(this.currentTetromino, this.currentX, this.currentY);
    if (!this.checkCollision(this.currentTetromino, this.currentX, this.currentY + 1)) {
      this.currentY++;
      this.placeTetrominoOnGrid(this.currentTetromino, this.currentX, this.currentY);
    } else {
      // If we can't move down, place the piece back and spawn a new one
      this.placeTetrominoOnGrid(this.currentTetromino, this.currentX, this.currentY);
      this.spawnNewTetromino();
    }
    this.updateScene();
  }

  spawnNewTetromino() {
    this.currentTetromino = Math.floor(Math.random() * TETROMINOES.length);
    this.currentX = Math.floor((this.grid[0].length - TETROMINOES[this.currentTetromino][0].length) / 2);
    this.currentY = 0;
    
    if (this.checkCollision(this.currentTetromino, this.currentX, this.currentY)) {
      this.gameOver = true;
      if (this.dropIntervalId) {
        clearInterval(this.dropIntervalId);
      }
      console.log('Game Over!');
    } else {
      this.placeTetrominoOnGrid(this.currentTetromino, this.currentX, this.currentY);
    }
    this.updateScene();
  }

  startAutoDrop() {
    this.dropIntervalId = setInterval(() => {
      if (!this.gameOver) {
        this.moveDown();
      }
    }, dropInterval);
  }

  handleKeyPress(event: KeyboardEvent) {
    if (this.gameOver) return;
    
    switch (event.key.toLowerCase()) {
      case 'a':
        this.moveLeft();
        break;
      case 'd':
        this.moveRight();
        break;
      case 's':
        this.moveDown();
        break;
    }
  }
}

const Game = () => {
  const mountRef = useRef(null);
  const [tetrominoState, setTetrominoState] = useState({ tetromino: 0, startX: 3, startY: 0 });
  const gameInstanceRef = useRef<TetrisGame | null>(null);

  const initializeGame = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    // Create and store the game instance
    const tetrisGame = new TetrisGame(scene, setTetrominoState);
    gameInstanceRef.current = tetrisGame;
    tetrisGame.spawnNewTetromino();

    const gridGroup = tetrisGame.renderGrid();
    const gridBorders = tetrisGame.renderGridBorders(10, 20);
    scene.add(gridGroup);
    scene.add(gridBorders);

    camera.position.set(5, -10, 20);
    camera.lookAt(5, -10, 0);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      // Clear the game instance on cleanup
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

  return <div ref={mountRef}></div>;
};

export default Game;