import * as THREE from 'three';
import { BLOCK_GEOMETRY, MATERIALS, SHADOW_MATERIALS } from './colors';
import { TETROMINOES } from './tetrominoes';
import GridManager from './grid-manager';

class Renderer {
    scene: THREE.Scene;
    gridManager: GridManager;
    private blocks: THREE.Mesh[] = [];
    private shadowBlocks: THREE.Mesh[] = [];

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
}

export default Renderer;