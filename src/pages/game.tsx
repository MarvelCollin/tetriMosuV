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

  constructor(scene: THREE.Scene, setTetrominoState: (state: { tetromino: number, startX: number, startY: number }) => void) {
    this.grid = this.createGrid(10, 20);
    this.currentX = 3;
    this.currentY = 0;
    this.dropIntervalId = null;
    this.scene = scene;
    this.setTetrominoState = setTetrominoState;
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

  checkCollision(tetromino: number, startX: number, startY: number) {
    const shape = TETROMINOES[tetromino];
    for (let y = shape.length - 1; y >= 0; y--) {
      for (let x = 0; x < shape[y].length; x++) {
        if (shape[y][x] === 1) {
          const gridX = startX + x;
          const gridY = startY + y + 1;

          let isLastLayer = true;
          for (let k = y + 1; k < shape.length; k++) {
            if (shape[k][x] === 1) {
              isLastLayer = false;
              break;
            }
          }

          if (isLastLayer && (gridY >= this.grid.length || (this.grid[gridY] && this.grid[gridY][gridX] && this.grid[gridY][gridX].filled))) {
            return true;
          }
        }
      }
    }
    return false;
  }

  mergeTetromino(tetromino: number, startX: number, startY: number) {
    const shape = TETROMINOES[tetromino];
    shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value === 1) {
          const gridX = startX + x;
          const gridY = startY + y;
          if (this.grid[gridY] && this.grid[gridX]) {
            this.grid[gridY][gridX] = { color: COLORS[tetromino], filled: true };
          }
        }
      });
    });
  }

  clearTetrominoFromGrid(tetromino: number, startX: number, startY: number) {
    const shape = TETROMINOES[tetromino];
    shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value === 1) {
          const gridX = startX + x;
          const gridY = startY + y;
          if (this.grid[gridY] && this.grid[gridX]) {
            this.grid[gridY][gridX] = { color: null, filled: false };
          }
        }
      });
    });
  }

  renderGrid() {
    const group = new THREE.Group();
    for (let y = 0; y < this.grid.length; y++) {
      for (let x = 0; x < this.grid[y].length; x++) {
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
    shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value === 1) {
          const gridX = startX + x;
          const gridY = startY + y;
          if (this.grid[gridY] && this.grid[gridX]) {
            this.grid[gridY][gridX] = { color: COLORS[tetromino], filled: true };
          }
        }
      });
    });
  }

  autoDropTetromino(tetromino: number, startX: number, startY: number) {
    this.currentX = startX;
    this.currentY = startY;

    const drop = () => {
      if (this.checkCollision(tetromino, this.currentX, this.currentY)) {
        this.mergeTetromino(tetromino, this.currentX, this.currentY);
        clearInterval(this.dropIntervalId!);
        const newTetromino = Math.floor(Math.random() * TETROMINOES.length);
        const newStartX = 3;
        const newStartY = 0;
        this.setTetrominoState({ tetromino: newTetromino, startX: newStartX, startY: newStartY });
        this.autoDropTetromino(newTetromino, newStartX, newStartY);
      } else {
        this.clearTetrominoFromGrid(tetromino, this.currentX, this.currentY);
        this.currentY += 1;
        this.placeTetrominoOnGrid(tetromino, this.currentX, this.currentY);
        this.setTetrominoState({ tetromino, startX: this.currentX, startY: this.currentY });
        this.scene.remove(this.scene.getObjectByName('grid'));
        const gridGroup = this.renderGrid();
        this.scene.add(gridGroup);
      }
    };

    clearInterval(this.dropIntervalId!);
    this.dropIntervalId = setInterval(drop, dropInterval);
  }

  moveLeft(tetromino: number) {
    if (this.currentX > 0 && !this.checkCollision(tetromino, this.currentX - 1, this.currentY)) {
      this.clearTetrominoFromGrid(tetromino, this.currentX, this.currentY);
      this.placeTetrominoOnGrid(tetromino, this.currentX - 1, this.currentY);
      this.currentX -= 1;
    }
  }

  moveRight(tetromino: number) {
    if (this.currentX < this.grid[0].length - TETROMINOES[tetromino][0].length && !this.checkCollision(tetromino, this.currentX + 1, this.currentY)) {
      this.clearTetrominoFromGrid(tetromino, this.currentX, this.currentY);
      this.placeTetrominoOnGrid(tetromino, this.currentX + 1, this.currentY);
      this.currentX += 1;
    }
  }

  moveDown(tetromino: number) {
    if (!this.checkCollision(tetromino, this.currentX, this.currentY + 1)) {
      this.clearTetrominoFromGrid(tetromino, this.currentX, this.currentY);
      this.placeTetrominoOnGrid(tetromino, this.currentX, this.currentY + 1);
      this.currentY += 1;
    }
  }
}

const Game = () => {
  const mountRef = useRef(null);
  const [tetrominoState, setTetrominoState] = useState({ tetromino: 0, startX: 3, startY: 0 });

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

    const tetrisGame = new TetrisGame(scene, setTetrominoState);
    const tetromino = Math.floor(Math.random() * TETROMINOES.length);
    const startX = 3;
    const startY = 0;
    setTetrominoState({ tetromino, startX, startY });

    const gridGroup = tetrisGame.renderGrid();
    const gridBorders = tetrisGame.renderGridBorders(10, 20);
    scene.add(gridGroup);
    scene.add(gridBorders);
    tetrisGame.autoDropTetromino(tetrominoState.tetromino, tetrominoState.startX, tetrominoState.startY);

    const handleKeyDown = (event) => {
      if (event.key === 'a' || event.key === 'A') {
        tetrisGame.moveLeft(tetrominoState.tetromino);
      } else if (event.key === 'd' || event.key === 'D') {
        tetrisGame.moveRight(tetrominoState.tetromino);
      } else if (event.key === 's' || event.key === 'S') {
        tetrisGame.moveDown(tetrominoState.tetromino);
      }

      setTetrominoState({ tetromino: tetrominoState.tetromino, startX: tetrisGame.currentX, startY: tetrisGame.currentY });
      scene.remove(scene.getObjectByName('grid'));
      const gridGroup = tetrisGame.renderGrid();
      scene.add(gridGroup);
    };

    window.addEventListener("keydown", handleKeyDown);
    camera.position.set(5, -10, 20);
    camera.lookAt(5, -10, 0);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      clearInterval(tetrisGame.dropIntervalId!);
    };
  };

  useEffect(() => {
    initializeGame();
  }, []);

  return <div ref={mountRef}></div>;
};

export default Game;