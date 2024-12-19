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

            const controlsTitleGeometry = new TextGeometry("BASIC CONTROLS", {
                font: font,
                size: 0.5,
                height: 0.1,
                curveSegments: 1,
                bevelEnabled: false
            });

            const controlsTitleMesh = new THREE.Mesh(controlsTitleGeometry, material.clone());
            controlsTitleMesh.position.set(-12, -3, 0);
            this.scene.add(controlsTitleMesh);

            const controls = [
                { key: "W", action: "ROTATE PIECE" },
                { key: "A", action: "MOVE LEFT" },
                { key: "S", action: "MOVE DOWN" },
                { key: "D", action: "MOVE RIGHT" },
                { key: "R", action: "SWAP PIECE" },
                { key: "SPACE", action: "HARD DROP" },
                { key: "MOUSE", action: "CLICK TARGETS" }
            ];

            controls.forEach((control, index) => {
                const yOffset = -1.9 * (index + 1) - 3; 
                
                const keyGeometry = new TextGeometry(control.key, {
                    font: font,
                    size: 0.45,
                    height: 0.08,
                    curveSegments: 1,
                    bevelEnabled: false
                });

                const keyMaterial = material.clone();
                keyMaterial.color.setHex(0x00ffff);
                const keyMesh = new THREE.Mesh(keyGeometry, keyMaterial);
                keyMesh.position.set(-12.5, yOffset, 0); 

                const arrowGeometry = new TextGeometry("|", {
                    font: font,
                    size: 0.4,
                    height: 0.08,
                    curveSegments: 1,
                    bevelEnabled: false
                });

                const arrowMaterial = material.clone();
                arrowMaterial.color.setHex(0x4444ff);
                const arrowMesh = new THREE.Mesh(arrowGeometry, arrowMaterial);
                arrowMesh.position.set(-10, yOffset, 0);

                const actionGeometry = new TextGeometry(control.action, {
                    font: font,
                    size: 0.35,
                    height: 0.08,
                    curveSegments: 1,
                    bevelEnabled: false
                });

                const actionMaterial = material.clone();
                actionMaterial.opacity = 0.7;
                const actionMesh = new THREE.Mesh(actionGeometry, actionMaterial);
                actionMesh.position.set(-9, yOffset, 0);
                this.scene.add(keyMesh, arrowMesh, actionMesh);
            });

            const noteGeometry = new TextGeometry("HIT CIRCLE TARGETS TO CLEAR LINES!", {
                font: font,
                size: 0.3,
                height: 0.05,
                curveSegments: 1,
                bevelEnabled: false
            });

            const noteMaterial = material.clone();
            noteMaterial.color.setHex(0xff3366);
            noteMaterial.emissive.setHex(0xff3366);
            const noteMesh = new THREE.Mesh(noteGeometry, noteMaterial);
            noteMesh.position.set(-12, -18, 0); 
            this.scene.add(noteMesh);

            if (this.keybindText) {
                this.scene.remove(this.keybindText);
                this.keybindText = null;
            }
        });
    }}export default Renderer;