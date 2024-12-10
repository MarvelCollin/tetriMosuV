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

const createTetromino = (shape, color) => {
  const group = new THREE.Group();
  shape.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value) {
        const geometry = new THREE.BoxGeometry(1, 1, 1); 
        const material = new THREE.MeshBasicMaterial({ color });
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(x, -y, 0);
        group.add(cube);
      }
    });
  });
  group.position.set(-Math.floor(shape[0].length / 2), Math.floor(shape.length / 2), 0); // Center the tetromino
  return group;
};

const createShadowTetromino = (tetromino) => {
  const shadow = tetromino.clone();
  shadow.children.forEach(cube => {
    cube.material = new THREE.MeshBasicMaterial({ color: 0x888888, opacity: 0.5, transparent: true });
  });
  return shadow;
};

const updateShadowPosition = (shadow, tetromino, scene) => {
  shadow.position.copy(tetromino.position);
  while (!checkCollision(shadow, scene)) {
    shadow.position.y -= 0.1; 
  }
  shadow.position.y += 0.1; 
};

const createGrid = (width, height) => {
  const grid = new THREE.Group();
  grid.name = 'grid'; // Add a name to the grid for easier reference
  const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

  for (let i = -width / 2; i <= width / 2; i++) {
    const geometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(i, -height / 2, 0),
      new THREE.Vector3(i, height / 2, 0)
    ]);
    const line = new THREE.Line(geometry, material);
    grid.add(line);
  }

  for (let i = -height / 2; i <= height / 2; i++) {
    const geometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-width / 2, i, 0),
      new THREE.Vector3(width / 2, i, 0)
    ]);
    const line = new THREE.Line(geometry, material);
    grid.add(line);
  }

  grid.position.x = width / 4; // Move the grid to the right by half of its width in terms of cells

  return grid;
};

const checkCollision = (tetromino, scene) => {
  const tetrominoBox = new THREE.Box3().setFromObject(tetromino);
  const gridBox = new THREE.Box3().setFromObject(scene.getObjectByName('grid'));

  if (tetrominoBox.min.y <= gridBox.min.y || tetrominoBox.max.x > gridBox.max.x || tetrominoBox.min.x < gridBox.min.x) {
    return true;
  }

  for (let i = 0; i < scene.children.length; i++) {
    const child = scene.children[i];
    if (child !== tetromino && child.type === 'Mesh') {
      const childBox = new THREE.Box3().setFromObject(child);
      if (tetrominoBox.intersectsBox(childBox)) {
        return true;
      }
    }
  }
  return false;
};

const mergeTetromino = (tetromino, scene) => {
  tetromino.children.forEach(cube => {
    const newCube = cube.clone();
    newCube.position.add(tetromino.position);
    newCube.rotation.copy(tetromino.rotation); 
    scene.add(newCube);
  });
  scene.remove(tetromino);
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

    const grid = createGrid(10, 20);
    scene.add(grid);

    camera.position.set(0, 0, 15); 

    const randomIndex = Math.floor(Math.random() * TETROMINOES.length);
    let tetromino = createTetromino(TETROMINOES[randomIndex], COLORS[randomIndex]);
    let shadowTetromino = createShadowTetromino(tetromino);
    scene.add(tetromino);
    scene.add(shadowTetromino);

    const dropSpeed = 0.1; 
    const dropInterval = 50; 

    const animate = () => {
      tetromino.position.y -= dropSpeed;
      updateShadowPosition(shadowTetromino, tetromino, scene);
      if (checkCollision(tetromino, scene)) {
        tetromino.position.y += dropSpeed;
        mergeTetromino(tetromino, scene);
        scene.remove(shadowTetromino); // Remove shadow tetromino
        const newIndex = Math.floor(Math.random() * TETROMINOES.length);
        tetromino = createTetromino(TETROMINOES[newIndex], COLORS[newIndex]);
        shadowTetromino = createShadowTetromino(tetromino);
        tetromino.position.set(0, 10, 0);
        scene.add(tetromino);
        scene.add(shadowTetromino);
      }
      controls.update();
      renderer.render(scene, camera);
    };

    const intervalId = setInterval(animate, dropInterval);

    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'a':
          tetromino.position.x -= 1; 
          if (checkCollision(tetromino, scene)) tetromino.position.x += 1;
          break;
        case 'd':
          tetromino.position.x += 1; 
          if (checkCollision(tetromino, scene)) tetromino.position.x -= 1;
          break;
        case ' ':
          while (!checkCollision(tetromino, scene)) {
            tetromino.position.y -= dropSpeed;
          }
          mergeTetromino(tetromino, scene);
          scene.remove(shadowTetromino); 
          const newIndex = Math.floor(Math.random() * TETROMINOES.length);
          tetromino = createTetromino(TETROMINOES[newIndex], COLORS[newIndex]);
          shadowTetromino = createShadowTetromino(tetromino);
          tetromino.position.set(0, 10, 0);
          scene.add(tetromino);
          scene.add(shadowTetromino);
          break;
        default:
          break;
      }
      updateShadowPosition(shadowTetromino, tetromino, scene);
      renderer.render(scene, camera);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('keydown', handleKeyDown);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef}></div>;
};

export default Game;
