import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function createTetrisShape(type) {
  const material = new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff });
  let shape;

  switch (type) {
    case 'I':
      shape = new THREE.Group();
      for (let i = 0; i < 4; i++) {
        const cube = new THREE.Mesh(new THREE.BoxGeometry(), material);
        cube.position.set(i, 0, 0);
        shape.add(cube);
      }
      break;
    case 'O':
      shape = new THREE.Group();
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
          const cube = new THREE.Mesh(new THREE.BoxGeometry(), material);
          cube.position.set(i, j, 0);
          shape.add(cube);
        }
      }
      break;
    case 'T':
      shape = new THREE.Group();
      for (let i = 0; i < 3; i++) {
        const cube = new THREE.Mesh(new THREE.BoxGeometry(), material);
        cube.position.set(i, 0, 0);
        shape.add(cube);
      }
      const topCube = new THREE.Mesh(new THREE.BoxGeometry(), material);
      topCube.position.set(1, 1, 0);
      shape.add(topCube);
      break;
    case 'L':
      shape = new THREE.Group();
      for (let i = 0; i < 3; i++) {
        const cube = new THREE.Mesh(new THREE.BoxGeometry(), material);
        cube.position.set(0, i, 0);
        shape.add(cube);
      }
      const bottomCube = new THREE.Mesh(new THREE.BoxGeometry(), material);
      bottomCube.position.set(1, 0, 0);
      shape.add(bottomCube);
      break;
    case 'J':
      shape = new THREE.Group();
      for (let i = 0; i < 3; i++) {
        const cube = new THREE.Mesh(new THREE.BoxGeometry(), material);
        cube.position.set(0, i, 0);
        shape.add(cube);
      }
      const bottomCubeJ = new THREE.Mesh(new THREE.BoxGeometry(), material);
      bottomCubeJ.position.set(-1, 0, 0);
      shape.add(bottomCubeJ);
      break;
    case 'S':
      shape = new THREE.Group();
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
          const cube = new THREE.Mesh(new THREE.BoxGeometry(), material);
          cube.position.set(i + (j % 2), j, 0);
          shape.add(cube);
        }
      }
      break;
    case 'Z':
      shape = new THREE.Group();
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
          const cube = new THREE.Mesh(new THREE.BoxGeometry(), material);
          cube.position.set(i - (j % 2), j, 0);
          shape.add(cube);
        }
      }
      break;
    default:
      shape = new THREE.Mesh(new THREE.BoxGeometry(), material);
  }

  return shape;
}

function Game() {
  const mountRef = useRef(null);
  const [scene, setScene] = useState(null);
  const [camera, setCamera] = useState(null);
  const [renderer, setRenderer] = useState(null);
  const [currentShape, setCurrentShape] = useState(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    camera.position.z = 20;

    const shapes = ['I', 'O', 'T', 'L', 'J', 'S', 'Z'];
    const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
    const shape = createTetrisShape(shapeType);
    scene.add(shape);
    setCurrentShape(shape);

    setScene(scene);
    setCamera(camera);
    setRenderer(renderer);

    const animate = function () {
      requestAnimationFrame(animate);

      if (currentShape) {
        currentShape.position.y -= 0.1; 
      }

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={mountRef} className='w-full h-screen'>
    </div>
  );
}

export default Game;
