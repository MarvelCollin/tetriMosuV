import * as THREE from 'three';
// Add these imports at the top
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { BLOCK_GEOMETRY, MATERIALS, SHADOW_MATERIALS } from './colors';
import { TETROMINOES } from './tetrominoes';
import GridManager from './grid-manager';

class Renderer {
    scene: THREE.Scene;
    gridManager: GridManager;
    private blocks: THREE.Mesh[] = [];
    private shadowBlocks: THREE.Mesh[] = [];
    private previewBlocks: THREE.Mesh[] = [];
    private directionLabels: THREE.Mesh[] = [];

    constructor(scene: THREE.Scene, gridManager: GridManager) {
        this.scene = scene;
        this.gridManager = gridManager;
    }

    renderScene() {
        this.blocks.forEach(block => this.scene.remove(block));
        this.blocks = [];
        
        for (let y = 0; y < this.gridManager.height; y++) {
            for (let x = 0; x < this.gridManager.width; x++) {
                const cell = this.gridManager.grid[y][x];
                if (cell.filled && cell.color !== null) {
                    const colorIndex = MATERIALS.findIndex(m => m.color.getHex() === cell.color);
                    if (colorIndex !== -1) {
                        const block = new THREE.Mesh(BLOCK_GEOMETRY, MATERIALS[colorIndex]);
                        block.position.set(x + 0.5, -y + 0.5, 0);
                        this.scene.add(block);
                        this.blocks.push(block);
                    }
                }
            }
        }
    }

    updateShadow(tetromino: number, x: number, shadowY: number) {
        this.shadowBlocks.forEach(block => this.scene.remove(block));
        this.shadowBlocks = [];

        const material = SHADOW_MATERIALS[tetromino];
        const shape = TETROMINOES[tetromino];
        
        shape.forEach((row, dy) => {
            row.forEach((value, dx) => {
                if (value === 1) {
                    const block = new THREE.Mesh(BLOCK_GEOMETRY, material);
                    block.position.set(x + dx + 0.5, -(shadowY + dy) + 0.5, 0);
                    this.scene.add(block);
                    this.shadowBlocks.push(block);
                }
            });
        });
    }

    updateActivePiece(tetromino: number, x: number, y: number) {
        const shape = TETROMINOES[tetromino];
        const material = MATERIALS[tetromino];
        
        shape.forEach((row, dy) => {
            row.forEach((value, dx) => {
                if (value === 1) {
                    const block = new THREE.Mesh(BLOCK_GEOMETRY, material);
                    block.position.set(x + dx + 0.5, -(y + dy) + 0.5, 0);
                    this.scene.add(block);
                    this.blocks.push(block);
                }
            });
        });
    }

    updateNextPiecePreview(nextTetromino: number) {
        // Clear existing preview and labels
        this.previewBlocks.forEach(block => this.scene.remove(block));
        this.previewBlocks = [];
        this.directionLabels.forEach(label => this.scene.remove(label));
        this.directionLabels = [];

        const shape = TETROMINOES[nextTetromino];
        const material = MATERIALS[nextTetromino];
        const previewX = 12;
        const previewY = 2;

        // Load font from public directory
        const loader = new FontLoader();
        loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (font) => {
            // Create NEXT PIECE text
            const titleGeometry = new TextGeometry('NEXT PIECE', {
                font: font,
                size: 0.4,
                height: 0.1,
                curveSegments: 12,
                bevelEnabled: false
            });
            
            const titleMaterial = new THREE.MeshPhongMaterial({
                color: 0x00ffff,
                transparent: true,
                opacity: 0.9,
                emissive: 0x00ffff,
                emissiveIntensity: 0.5,
                shininess: 80
            });
            
            const titleMesh = new THREE.Mesh(titleGeometry, titleMaterial);
            titleMesh.position.set(previewX - 0.8, -previewY + 2.5, 0);
            this.scene.add(titleMesh);
            this.directionLabels.push(titleMesh);

            // Add swap instruction text
            const subtitleGeometry = new TextGeometry('Press R to swap', {
                font: font,
                size: 0.25,
                height: 0.05,
                curveSegments: 12,
                bevelEnabled: false
            });
            
            const subtitleMaterial = new THREE.MeshPhongMaterial({
                color: 0x7777ff,
                transparent: true,
                opacity: 0.7,
                emissive: 0x4444ff,
                emissiveIntensity: 0.3,
                shininess: 60
            });
            
            const subtitleMesh = new THREE.Mesh(subtitleGeometry, subtitleMaterial);
            subtitleMesh.position.set(previewX - 0.6, -previewY + 2, 0);
            this.scene.add(subtitleMesh);
            this.directionLabels.push(subtitleMesh);

            const directions = [
                { text: 'N', x: 0, y: -3.5, lineStart: new THREE.Vector2(0, -2.5), lineEnd: new THREE.Vector2(0, -3.2) },
                { text: 'E', x: 2, y: -5, lineStart: new THREE.Vector2(1, -5), lineEnd: new THREE.Vector2(1.7, -5) },
                { text: 'S', x: 0, y: -6.5, lineStart: new THREE.Vector2(0, -6.2), lineEnd: new THREE.Vector2(0, -5.5) },
                { text: 'W', x: -2, y: -5, lineStart: new THREE.Vector2(-1.7, -5), lineEnd: new THREE.Vector2(-1, -5) }
            ];

            const circleGeometry = new THREE.CircleGeometry(0.8, 32);
            const circleMaterial = new THREE.LineBasicMaterial({ 
                color: 0x00ffff,
                opacity: 0.3,
                transparent: true 
            });
            const circle = new THREE.LineLoop(circleGeometry, circleMaterial);
            circle.position.set(previewX + shape[0].length/2, -previewY - shape.length - 5, 0);
            this.scene.add(circle);
            this.directionLabels.push(circle);

            directions.forEach(dir => {
                // Add connecting line
                const lineGeometry = new THREE.BufferGeometry().setFromPoints([
                    new THREE.Vector3(dir.lineStart.x + previewX + shape[0].length/2, dir.lineStart.y - previewY - shape.length, 0),
                    new THREE.Vector3(dir.lineEnd.x + previewX + shape[0].length/2, dir.lineEnd.y - previewY - shape.length, 0)
                ]);
                const line = new THREE.Line(lineGeometry, new THREE.LineBasicMaterial({
                    color: 0x00ffff,
                    opacity: 0.5,
                    transparent: true
                }));
                this.scene.add(line);
                this.directionLabels.push(line);

                // Add direction text
                const dirGeometry = new TextGeometry(dir.text, {
                    font: font,
                    size: 0.3,
                    height: 0.1,
                    curveSegments: 12,
                    bevelEnabled: false
                });
                
                const dirMesh = new THREE.Mesh(dirGeometry, titleMaterial.clone());
                dirMesh.position.set(
                    previewX + shape[0].length/2 + dir.x,
                    -previewY - shape.length + dir.y,
                    0
                );
                this.scene.add(dirMesh);
                this.directionLabels.push(dirMesh);
            });
        });

        shape.forEach((row, dy) => {
            row.forEach((value, dx) => {
                if (value === 1) {
                    const block = new THREE.Mesh(BLOCK_GEOMETRY, material.clone());
                    block.material.opacity = 0.8;
                    block.position.set(previewX + dx + 0.5, -previewY - dy + 0.5, 0);
                    this.scene.add(block);
                    this.previewBlocks.push(block);
                }
            });
        });

        const labelMaterial = new THREE.MeshBasicMaterial({
            color: 0x00ffff,
            transparent: true,
            opacity: 0.8,
            side: THREE.DoubleSide
        });

        const borderGeometry = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(previewX - 0.5, -previewY + 1.5, 0),
            new THREE.Vector3(previewX + shape[0].length + 0.5, -previewY + 1.5, 0),
            new THREE.Vector3(previewX + shape[0].length + 0.5, -(previewY + shape.length + 0.5), 0),
            new THREE.Vector3(previewX - 0.5, -(previewY + shape.length + 0.5), 0),
            new THREE.Vector3(previewX - 0.5, -previewY + 1.5, 0)
        ]);
        
        const border = new THREE.Line(
            borderGeometry,
            new THREE.LineBasicMaterial({ 
                color: 0x00ffff,
                opacity: 0.4,
                transparent: true,
                blending: THREE.AdditiveBlending
            })
        );
        this.scene.add(border);
        this.directionLabels.push(border);

    }
}

export default Renderer;