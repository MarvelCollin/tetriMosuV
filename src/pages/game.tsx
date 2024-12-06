import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function Game() {
  const colors = ['yellow', 'green', 'purple'];
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    currentMount.appendChild(renderer.domElement);

    renderer.setClearColor(0x000000);

    camera.position.z = 5;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.mouseButtons = {
      LEFT: THREE.MOUSE.ROTATE,
      MIDDLE: THREE.MOUSE.DOLLY,
      RIGHT: null
    };

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);

    const shapes = [
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

    const grid = new Array(20).fill(null).map(() => new Array(10).fill(0));

    const createShape = (shape) => {
      const group = new THREE.Group();
      shape.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value) {
            const geometry = new THREE.BoxGeometry(1, 1, 1);
            const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
            const cube = new THREE.Mesh(geometry, material);
            cube.position.set(x - shape[0].length / 2, -y + shape.length / 2, 0);
            group.add(cube);
          }
        });
      });
      return group;
    };

    const shape = createShape(shapes[0]);
    scene.add(shape);

    const boxGeometry = new THREE.BoxGeometry(10, 20, 1);
    const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.5 });
    const box = new THREE.Mesh(boxGeometry, boxMaterial);

    box.position.set(0, 0, 0);

    scene.add(box);

    const createGrid = (width, height) => {
      const gridGroup = new THREE.Group();
      const material = new THREE.LineBasicMaterial({ color: 0xffffff });

      for (let i = -width / 2; i <= width / 2; i++) {
        const geometry = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(i, -height / 2, 0),
          new THREE.Vector3(i, height / 2, 0)
        ]);
        const line = new THREE.Line(geometry, material);
        gridGroup.add(line);
      }

      for (let j = -height / 2; j <= height / 2; j++) {
        const geometry = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(-width / 2, j, 0),
          new THREE.Vector3(width / 2, j, 0)
        ]);
        const line = new THREE.Line(geometry, material);
        gridGroup.add(line);
      }

      return gridGroup;
    };

    const tetrisGrid = createGrid(10, 20);
    scene.add(tetrisGrid);

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      currentMount.removeChild(renderer.domElement);
      scene.remove(shape);
      scene.remove(box);
      window.removeEventListener('resize', handleResize);
      controls.dispose();
    };
  }, []);

  return (
    <div ref={mountRef} className='w-full h-screen'>
    </div>
  );
}

export default Game;
