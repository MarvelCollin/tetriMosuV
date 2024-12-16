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
    // Add new property
    private scoreText: THREE.Mesh | null = null;
    private keybindText: THREE.Mesh | null = null;

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
        });

        // Preview blocks
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

        // Preview border
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

    updateScore(score: number) {
        if (this.scoreText) {
            this.scene.remove(this.scoreText);
        }

        const loader = new FontLoader();
        loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (font) => {
            const textGeometry = new TextGeometry(`SCORE: ${score}`, {
                font: font,
                size: 0.5,
                height: 0.1,
                curveSegments: 12,
                bevelEnabled: false
            });
            
            const material = new THREE.MeshPhongMaterial({
                color: 0x00ffff,
                emissive: 0x00ffff,
                emissiveIntensity: 0.4,
                transparent: true,
                opacity: 0.9
            });
            
            this.scoreText = new THREE.Mesh(textGeometry, material);
            this.scoreText.position.set(-5, 1, 0); // Position to the left of grid
            this.scene.add(this.scoreText);

            // Add keybinds if not already added
            if (!this.keybindText) {
                const keybindsGeometry = new TextGeometry(
                    "CONTROLS:\n\n" +
                    "W - Rotate\n" +
                    "A - Move Left\n" +
                    "S - Move Down\n" +
                    "D - Move Right\n" +
                    "R - Swap Piece\n" +
                    "SPACE - Hard Drop", {
                    font: font,
                    size: 0.3,
                    height: 0.05,
                    curveSegments: 12,
                    bevelEnabled: false
                });

                const keybindsMaterial = material.clone();
                keybindsMaterial.opacity = 0.7;
                this.keybindText = new THREE.Mesh(keybindsGeometry, keybindsMaterial);
                this.keybindText.position.set(12, -8, 0); // Position to the right of grid
                this.scene.add(this.keybindText);
            }
        });
    }
}

export default Renderer;