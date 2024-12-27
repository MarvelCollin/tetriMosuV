import * as THREE from 'three';
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
        this.previewBlocks.forEach(block => this.scene.remove(block));
        this.previewBlocks = [];
        this.directionLabels.forEach(label => this.scene.remove(label));
        this.directionLabels = [];

        const shape = TETROMINOES[nextTetromino];
        const material = MATERIALS[nextTetromino];
        const previewX = 12;
        const previewY = 2;

        const loader = new FontLoader();
        loader.load('https://threejs.org/examples/fonts/helvetiker_bold.typeface.json', (font) => {
            const titleGeometry = new TextGeometry('NEXT PIECE', {
                font: font,
                size: 0.3, // Adjusted size
                height: 0.05,
                curveSegments: 1,
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

        const existingTutorial = document.querySelector('.fixed.bottom-4.right-4');
        if (existingTutorial) {
            existingTutorial.remove();
        }

        const loader = new FontLoader();
        loader.load('https://threejs.org/examples/fonts/helvetiker_bold.typeface.json', (font) => {
            const textGeometry = new TextGeometry(`SCORE: ${score}`, {
                font: font,
                size: 0.6,
                height: 0.1,
                curveSegments: 1,
                bevelEnabled: false
            });
            
            const material = new THREE.MeshPhongMaterial({
                color: 0x00ffff,
                emissive: 0x00ffff,
                emissiveIntensity: 0.4,
                transparent: true,
                opacity: 0.9,
                flatShading: true
            });
            
            this.scoreText = new THREE.Mesh(textGeometry, material);
            this.scoreText.position.set(-8, 0, 0); 
            this.scene.add(this.scoreText);

            const tutorialDiv = document.createElement('div');
            tutorialDiv.className = 'fixed bottom-4 right-4 z-50';
            tutorialDiv.innerHTML = `
                <div class="w-72 p-4 bg-black/80 backdrop-blur-md 
                            border border-cyan-500/30 rounded-lg text-white space-y-3">
                    <h3 class="text-lg font-bold text-cyan-400 mb-2">Quick Tutorial</h3>
                    <div class="space-y-2">
                        <div class="flex justify-between">
                            <span class="text-cyan-300">W / ↑</span>
                            <span class="text-gray-300">Rotate Piece</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-cyan-300">A / ←</span>
                            <span class="text-gray-300">Move Left</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-cyan-300">S / ↓</span>
                            <span class="text-gray-300">Move Down</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-cyan-300">D / →</span>
                            <span class="text-gray-300">Move Right</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-cyan-300">R</span>
                            <span class="text-gray-300">Swap Piece</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-cyan-300">SPACE</span>
                            <span class="text-gray-300">Hard Drop</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-cyan-300">LEFT MOUSE</span>
                            <span class="text-gray-300">Click Circle</span>
                        </div>
                    </div>
                </div>
            `;

            const existingTutorial = document.querySelector('.fixed.bottom-4.right-4');
            if (existingTutorial) {
                existingTutorial.remove();
            }

            document.body.appendChild(tutorialDiv);
        });
    }
}

export default Renderer;