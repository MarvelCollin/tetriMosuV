import * as THREE from 'three';
import { useEffect, useRef } from 'react';
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

let grid: Array<Array<{ color: number | null, filled: boolean }>>;

const createGrid = (width, height) => {
  const grid: Array<Array<{ color: number | null, filled: boolean }>> = [];
  for (let y = 0; y < height; y++) {
    const row: Array<{ color: number | null, filled: boolean }> = [];
    for (let x = 0; x < width; x++) {
      row.push({ color: null, filled: false });
    }
    grid.push(row);
  }
  return grid;
};

const setGridCell = (x, y, value) => {
  if (grid[y] && grid[y][x]) {
    grid[y][x].filled = value === 1;
    grid[y][x].color = value === 1 ? 0x000000 : null;
  }
};

const checkCollision = (tetromino, grid, startX, startY) => {
  const shape = TETROMINOES[tetromino];
  for (let y = 0; y < shape.length; y++) {
    for (let x = 0; x < shape[y].length; x++) {
      if (shape[y][x] === 1) {
        const gridX = startX + x;
        const gridY = startY + y + 1; // Check the next row

        if (gridY >= grid.length || (grid[gridY] && grid[gridY][gridX] && grid[gridY][gridX].filled)) {
          return true;
        }
      }
    }
  }
  return false;
};

const mergeTetromino = (tetromino, scene) => {
  const shape = tetromino.userData.shape;
  const position = tetromino.position;

  shape.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value === 1) {
        const worldX = position.x + x;
        const worldY = position.y - y;
        const gridX = Math.floor(worldX);
        const gridY = Math.floor(worldY);

        if (grid[gridY] && grid[gridY][gridX]) {
          grid[gridY][gridX] = { color: (tetromino.children[0] as THREE.Mesh).material.color.getHex(), filled: true };
        }
      }
    });
  });

  tetromino.children.forEach(cube => {
    const newCube = (cube as THREE.Mesh).clone();
    newCube.position.copy(cube.position).applyMatrix4(tetromino.matrixWorld);
    newCube.rotation.copy(tetromino.rotation);
    scene.add(newCube);
  });

  scene.remove(tetromino);
};

const rotateTetromino = (tetromino, shadowTetromino) => {
  const center = new THREE.Vector3();
  const box = new THREE.Box3().setFromObject(tetromino);
  box.getCenter(center);
  tetromino.position.sub(center); 
  tetromino.rotation.z += Math.PI / 2; 
  tetromino.position.add(center); 

  shadowTetromino.position.sub(center);
  shadowTetromino.rotation.z += Math.PI / 2; 
  shadowTetromino.position.add(center); 
};

const renderGrid = (grid: Array<Array<{ color: number | null, filled: boolean }>>) => {
  const group = new THREE.Group();
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x].filled) { 
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const color = grid[y][x].color || 0xffffff;
        const material = new THREE.MeshBasicMaterial({ color, wireframe: !grid[y][x].filled, opacity: 0.5, transparent: true });
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(x + 0.5, -y - 0.5, 0); // Adjusted position
        group.add(cube);
      }
    }
  }
  group.name = 'grid';
  return group;
};

const renderGridBorders = (width, height) => {
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
};

const placeTetrominoOnGrid = (tetromino, grid, startX, startY) => {
  const shape = TETROMINOES[tetromino];
  shape.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value === 1) {
        const gridX = startX + x;
        const gridY = startY + y;
        if (grid[gridY] && grid[gridX]) {
          grid[gridY][gridX] = { color: COLORS[tetromino], filled: true };
        }
      }
    });
  });
};

const dropInterval = 1000; // Drop interval in milliseconds

const clearTetrominoFromGrid = (tetromino, grid, startX, startY) => {
  const shape = TETROMINOES[tetromino];
  shape.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value === 1) {
        const gridX = startX + x;
        const gridY = startY + y;
        if (grid[gridY] && grid[gridX]) {
          grid[gridY][gridX] = { color: null, filled: false };
        }
      }
    });
  });
};

const autoDropTetromino = (tetromino, grid, scene) => {
  let startX = 3;
  let startY = 0;

  const drop = () => {
    if (checkCollision(tetromino, grid, startX, startY)) {
      mergeTetromino(tetromino, scene);
      clearInterval(dropIntervalId);
      // Create a new tetromino
      const newTetromino = Math.floor(Math.random() * TETROMINOES.length);
      startX = 3;
      startY = 0;
      placeTetrominoOnGrid(newTetromino, grid, startX, startY);
      autoDropTetromino(newTetromino, grid, scene);
    } else {
      clearTetrominoFromGrid(tetromino, grid, startX, startY);
      startY += 1;
      placeTetrominoOnGrid(tetromino, grid, startX, startY);
      scene.remove(scene.getObjectByName('grid'));
      const gridGroup = renderGrid(grid);
      scene.add(gridGroup);
    }
  };

  const dropIntervalId = setInterval(drop, dropInterval);
};

const Game = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;
    
    grid = createGrid(10, 20);
    const tetromino = 0; // Example: I shape
    placeTetrominoOnGrid(tetromino, grid, 3, 0); // Initial placement
    const gridGroup = renderGrid(grid);
    const gridBorders = renderGridBorders(10, 20);
    scene.add(gridGroup);
    scene.add(gridBorders);

    autoDropTetromino(tetromino, grid, scene);

    camera.position.set(5, -10, 20);
    camera.lookAt(5, -10, 0);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef}></div>;
};

export default Game;
