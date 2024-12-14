import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const TETROMINOES = [
  [[1, 1, 1, 1]],
  [
    [1, 1],
    [1, 1]
  ],
  [
    [0, 1, 0],
    [1, 1, 1]
  ],
  [
    [0, 1, 1],
    [1, 1, 0]
  ],
  [
    [1, 1, 0],
    [0, 1, 1]
  ],
  [
    [1, 0, 0],
    [1, 1, 1]
  ],
  [
    [0, 0, 1],
    [1, 1, 1]
  ]
];

const COLORS = [
  0x00ffff,
  0xffff00,
  0x800080,
  0x00ff00,
  0xff0000, 
  0x0000ff,
  0xffa500
];

const BLOCK_GEOMETRY = new THREE.BoxGeometry(1, 1, 1);
const MATERIALS = COLORS.map(color => new THREE.MeshPhongMaterial({ 
  color, 
  opacity: 0.8,
  transparent: true,
  shininess: 30
}));

// Add shadow material
const SHADOW_MATERIAL = new THREE.MeshPhongMaterial({
  color: 0x666666,
  opacity: 0.3,
  transparent: true
});

const dropInterval = 300;

class TetrisGame {
  grid: Array<Array<{ color: number | null, filled: boolean }>>;
  currentX: number;
  currentY: number;
  dropIntervalId: NodeJS.Timeout | null;
  scene: THREE.Scene;
  setTetrominoState: (state: { tetromino: number, startX: number, startY: number }) => void;
  currentTetromino: number;
  gameOver: boolean;
  private lastRenderTime: number;
  private blockInstances: THREE.InstancedMesh[];
  private shadowBlockInstance: THREE.InstancedMesh;

  constructor(scene: THREE.Scene, setTetrominoState: (state: { tetromino: number, startX: number, startY: number }) => void) {
    this.grid = this.createGrid(10, 20);
    this.currentX = 3;
    this.currentY = -2; 
    this.dropIntervalId = null;
    this.scene = scene;
    this.setTetrominoState = setTetrominoState;
    this.currentTetromino = 0;
    this.gameOver = false;
    this.lastRenderTime = 0;
    this.blockInstances = this.initializeBlockInstances();
    this.scene.add(...this.blockInstances);
    this.shadowBlockInstance = new THREE.InstancedMesh(BLOCK_GEOMETRY, SHADOW_MATERIAL, 4);
    this.shadowBlockInstance.count = 0;
    this.scene.add(this.shadowBlockInstance);
    this.startAutoDrop();
    this.setupLighting();
  }

  private setupLighting() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
    directionalLight.position.set(5, 15, 10);
    const secondaryLight = new THREE.DirectionalLight(0xffffff, 0.3);
    secondaryLight.position.set(-5, 5, -10);
    this.scene.add(ambientLight, directionalLight, secondaryLight);
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

  placeTetrominoOnGrid(tetromino: number, startX: number, startY: number) {
    const shape = TETROMINOES[tetromino];
    for (let y = 0; y < shape.length; y++) {
      for (let x = 0; x < shape[y].length; x++) {
        if (shape[y][x] === 1) {
          const gridX = startX + x;
          const gridY = startY + y;
          if (gridY >= 0 && gridY < this.grid.length && gridX >= 0 && gridX < this.grid[0].length) {
            this.grid[gridY][gridX] = { 
              color: COLORS[tetromino], 
              filled: true
            };
          }
        }
      }
    }
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

  private initializeBlockInstances(): THREE.InstancedMesh[] {
    return COLORS.map((_, index) => {
      const instancedMesh = new THREE.InstancedMesh(
        BLOCK_GEOMETRY,
        MATERIALS[index],
        200
      );
      instancedMesh.count = 0;
      return instancedMesh;
    });
  }

  private updateActivePiece() {
    this.activePiece = {
      shape: [...TETROMINOES[this.currentTetromino]],
      x: this.currentX,
      y: this.currentY,
      type: this.currentTetromino
    };
  }

  private calculateShadowPosition(): number {
    let shadowY = this.currentY;
    this.clearTetrominoFromGrid(this.currentTetromino, this.currentX, this.currentY);
    
    while (!this.checkCollision(this.currentTetromino, this.currentX, shadowY + 1)) {
      shadowY++;
    }
    
    this.placeTetrominoOnGrid(this.currentTetromino, this.currentX, this.currentY);
    return shadowY;
  }

  private renderShadow() {
    const shadowY = this.calculateShadowPosition();
    const shape = TETROMINOES[this.currentTetromino];
    const matrix = new THREE.Matrix4();
    let instanceCount = 0;

    if (shadowY > this.currentY) {
      for (let y = 0; y < shape.length; y++) {
        for (let x = 0; x < shape[y].length; x++) {
          if (shape[y][x] === 1) {
            matrix.setPosition(
              this.currentX + x + 0.5,
              -shadowY - y + 0.5,
              0
            );
            this.shadowBlockInstance.setMatrixAt(instanceCount++, matrix);
          }
        }
      }
    }

    this.shadowBlockInstance.count = instanceCount;
    this.shadowBlockInstance.instanceMatrix.needsUpdate = true;
  }

  renderGrid() {
    const matrix = new THREE.Matrix4();
    const instanceCounts = new Array(COLORS.length).fill(0);
    this.blockInstances.forEach(mesh => mesh.count = 0);

    for (let y = 0; y < this.grid.length; y++) {
      for (let x = 0; x < this.grid[y].length; x++) {
        const cell = this.grid[y][x];
        if (cell.filled && cell.color !== null) {
          const colorIndex = COLORS.indexOf(cell.color);
          if (colorIndex !== -1) {
            matrix.setPosition(
              x + 0.5,
              -y + 0.5,
              0
            );
            this.blockInstances[colorIndex].setMatrixAt(
              instanceCounts[colorIndex]++,
              matrix
            );
            this.blockInstances[colorIndex].count = instanceCounts[colorIndex];
          }
        }
      }
    }
    this.blockInstances.forEach(mesh => {
      if (mesh.count > 0) {
        mesh.instanceMatrix.needsUpdate = true;
      }
    });
    this.renderShadow();
  }

  renderGridBorders(width: number, height: number) {
    const group = new THREE.Group();
    const material = new THREE.LineBasicMaterial({ 
      color: 0xffffff,
      opacity: 0.5,
      transparent: true 
    });
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

  updateScene() {
    const now = performance.now();
    if (now - this.lastRenderTime < 16) {
      return;
    }
    this.lastRenderTime = now;
    this.renderGrid();
  }

  checkCollision(tetromino: number, testX: number, testY: number): boolean {
    const shape = TETROMINOES[tetromino];
    for (let y = 0; y < shape.length; y++) {
      for (let x = 0; x < shape[y].length; x++) {
        if (shape[y][x] === 1) {
          const newX = testX + x;
          const newY = testY + y;
          if (newX < 0 || newX >= this.grid[0].length) {
            return true;
          }
          if (newY >= this.grid.length) {
            return true;
          }
          if (newY >= 0) {
            if (this.grid[newY][newX].filled) {
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
      this.updateActivePiece();
    }
    this.placeTetrominoOnGrid(this.currentTetromino, this.currentX, this.currentY);
    requestAnimationFrame(() => this.updateScene());
  }

  moveRight() {
    this.clearTetrominoFromGrid(this.currentTetromino, this.currentX, this.currentY);
    if (!this.checkCollision(this.currentTetromino, this.currentX + 1, this.currentY)) {
      this.currentX++;
      this.updateActivePiece();
    }
    this.placeTetrominoOnGrid(this.currentTetromino, this.currentX, this.currentY);
    requestAnimationFrame(() => this.updateScene());
  }

  moveDown() {
    this.clearTetrominoFromGrid(this.currentTetromino, this.currentX, this.currentY);
    if (!this.checkCollision(this.currentTetromino, this.currentX, this.currentY + 1)) {
      this.currentY++;
      this.placeTetrominoOnGrid(this.currentTetromino, this.currentX, this.currentY);
      this.updateActivePiece();
    } else {
      this.placeTetrominoOnGrid(this.currentTetromino, this.currentX, this.currentY);
      if (this.currentY >= 0) {
        this.activePiece = null;
        this.spawnNewTetromino();
      }
    }
    requestAnimationFrame(() => this.updateScene());
  }

  rotateTetromino() {
    this.clearTetrominoFromGrid(this.currentTetromino, this.currentX, this.currentY);
    const shape = [...TETROMINOES[this.currentTetromino]].map(row => [...row]);
    const newRotation: number[][] = [];
    for (let i = 0; i < shape[0].length; i++) {
      const row: number[] = [];
      for (let j = shape.length - 1; j >= 0; j--) {
        row.push(shape[j][i]);
      }
      newRotation.push(row);
    }
    const originalShape = TETROMINOES[this.currentTetromino];
    TETROMINOES[this.currentTetromino] = newRotation;
    if (!this.checkCollision(this.currentTetromino, this.currentX, this.currentY)) {
      this.placeTetrominoOnGrid(this.currentTetromino, this.currentX, this.currentY);
      this.updateActivePiece();
    } else {
      TETROMINOES[this.currentTetromino] = originalShape;
      this.placeTetrominoOnGrid(this.currentTetromino, this.currentX, this.currentY);
    }
    requestAnimationFrame(() => this.updateScene());
  }

  hardDrop() {
    this.clearTetrominoFromGrid(this.currentTetromino, this.currentX, this.currentY);
    
    while (!this.checkCollision(this.currentTetromino, this.currentX, this.currentY + 1)) {
      this.currentY++;
    }
    
    this.placeTetrominoOnGrid(this.currentTetromino, this.currentX, this.currentY);
    
    if (this.currentY >= 0) {
      this.spawnNewTetromino();
    }
    
    requestAnimationFrame(() => this.updateScene());
  }

  spawnNewTetromino() {
    this.currentTetromino = Math.floor(Math.random() * TETROMINOES.length);
    this.currentX = Math.floor((this.grid[0].length - TETROMINOES[this.currentTetromino][0].length) / 2);
    this.currentY = -2;
    if (this.checkCollision(this.currentTetromino, this.currentX, this.currentY)) {
      this.gameOver = true;
      if (this.dropIntervalId) {
        clearInterval(this.dropIntervalId);
      }
      console.log('Game Over!');
    } else {
      this.placeTetrominoOnGrid(this.currentTetromino, this.currentX, this.currentY);
      this.updateActivePiece();
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
      case 'w':
        this.rotateTetromino();
        break;
      case ' ':
        this.hardDrop();
        break;
    }
  }
}

const Game = () => {
  const mountRef = useRef<HTMLDivElement>(null); 
  const [tetrominoState, setTetrominoState] = useState({ tetromino: 0, startX: 3, startY: 0 });
  const gameInstanceRef = useRef<TetrisGame | null>(null);

  const initializeGame = () => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x222222);
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    const mount = mountRef.current;
    if (!mount) return;
    mount.innerHTML = ''; 
    mount.appendChild(renderer.domElement);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;
    const tetrisGame = new TetrisGame(scene, setTetrominoState);
    gameInstanceRef.current = tetrisGame;
    tetrisGame.spawnNewTetromino();
    const gridBorders = tetrisGame.renderGridBorders(10, 20);
    scene.add(gridBorders);
    camera.position.set(5, -10, 20);
    camera.lookAt(5, -10, 0);
    let lastTime = 0;
    const animate = (currentTime: number) => {
      if (currentTime - lastTime >= 16) {
        controls.update();
        renderer.render(scene, camera);
        lastTime = currentTime;
      }
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
    return () => {
      if (mount && mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
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