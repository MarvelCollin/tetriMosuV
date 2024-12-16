import * as THREE from 'three';
import { TETROMINOES } from './tetrominoes';
import { COLORS, MATERIALS, SHADOW_MATERIALS, BLOCK_GEOMETRY } from './colors';
import ParticleSystem from './particle-system';
import GridManager from './grid-manager';
import InputHandler from './input-handler';
import Renderer from './renderer';

class TetrisGame {
    gridManager: GridManager;
    inputHandler: InputHandler;
    renderer: Renderer;
    particleSystem: ParticleSystem;

    currentX: number;
    currentY: number;
    currentTetromino: number;
    gameOver: boolean;
    dropIntervalId: NodeJS.Timeout | null;
    scene: THREE.Scene;
    setTetrominoState: (state: { tetromino: number; startX: number; startY: number }) => void;
    private lastRenderTime: number;
    private blockInstances: THREE.InstancedMesh[];
    private shadowBlockInstances: THREE.InstancedMesh[];
    private hardDropPressed: boolean;
    private dropAnimation: { scale: number, blocks: Set<string> };
    private camera: THREE.PerspectiveCamera;
    private cameraShake: { enabled: boolean; intensity: number; decay: number; };
    private originalCameraPosition: THREE.Vector3;

    constructor(scene: THREE.Scene, camera: THREE.PerspectiveCamera, setTetrominoState: (state: { tetromino: number; startX: number; startY: number }) => void) {
        this.scene = scene;
        this.setTetrominoState = setTetrominoState;
        this.gridManager = new GridManager(10, 20);
        this.renderer = new Renderer(scene, this.gridManager);
        this.particleSystem = new ParticleSystem(scene);
        this.inputHandler = new InputHandler(this);

        this.currentX = 3;
        this.currentY = -2;
        this.currentTetromino = 0;
        this.gameOver = false;
        this.dropIntervalId = null;
        this.lastRenderTime = 0;
        this.blockInstances = this.initializeBlockInstances();
        this.shadowBlockInstances = this.initializeShadowBlockInstances();
        this.hardDropPressed = false;
        this.dropAnimation = { scale: 1, blocks: new Set() };

        this.camera = camera;
        this.originalCameraPosition = camera.position.clone();
        this.cameraShake = {
            enabled: false,
            intensity: 0,
            decay: 0.9
        };

        this.setupLighting();
        this.startAutoDrop();
        this.spawnNewTetromino();
    }

    private setupLighting() {
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
        directionalLight.position.set(5, 15, 10);
        directionalLight.castShadow = true;
        
        const secondaryLight = new THREE.DirectionalLight(0x4444ff, 0.5);
        secondaryLight.position.set(-5, 5, -10);
        
        const groundLight = new THREE.PointLight(0x0099ff, 0.5);
        groundLight.position.set(5, -22, 10);
        
        this.scene.add(ambientLight, directionalLight, secondaryLight, groundLight);
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

    private initializeShadowBlockInstances(): THREE.InstancedMesh[] {
        return SHADOW_MATERIALS.map((_, index) => {
            const instancedMesh = new THREE.InstancedMesh(
                BLOCK_GEOMETRY,
                SHADOW_MATERIALS[index],
                200
            );
            instancedMesh.count = 0;
            return instancedMesh;
        });
    }

    startAutoDrop() {
        this.dropIntervalId = setInterval(() => {
            if (!this.gameOver) {
                this.moveDown();
            }
        }, 200);
    }

    spawnNewTetromino() {
        this.currentTetromino = Math.floor(Math.random() * TETROMINOES.length);
        this.currentX = Math.floor((this.gridManager.width - TETROMINOES[this.currentTetromino][0].length) / 2);
        this.currentY = -2;

        if (this.gridManager.checkCollision(this.currentTetromino, this.currentX, this.currentY)) {
            this.gameOver = true;
            clearInterval(this.dropIntervalId!);
            console.log('Game Over!');
        } else {
            this.gridManager.placeTetromino(this.currentTetromino, this.currentX, this.currentY);
            this.renderer.updateActivePiece(this.currentTetromino, this.currentX, this.currentY);
        }
    }

    moveDown() {
        this.gridManager.clearTetromino(this.currentTetromino, this.currentX, this.currentY);
        if (!this.gridManager.checkCollision(this.currentTetromino, this.currentX, this.currentY + 1)) {
            this.currentY++;
        } else {
            this.gridManager.placeTetromino(this.currentTetromino, this.currentX, this.currentY);
            if (this.gridManager.checkAndClearLines(this.particleSystem) > 0) {
                this.triggerCameraShake(0.5);
            }
            this.spawnNewTetromino();
        }
        this.gridManager.placeTetromino(this.currentTetromino, this.currentX, this.currentY);
        this.renderer.renderScene();
    }

    hardDrop() {
        this.hardDropPressed = true;
        this.gridManager.clearTetromino(this.currentTetromino, this.currentX, this.currentY);
        
        let finalY = this.currentY;
        while (!this.gridManager.checkCollision(this.currentTetromino, this.currentX, finalY + 1)) {
            finalY++;
        }
        
        this.currentY = finalY;
        this.gridManager.placeTetromino(this.currentTetromino, this.currentX, this.currentY);
        
        if (this.currentY >= 0) {
            this.triggerCameraShake(0.2);
            const shape = TETROMINOES[this.currentTetromino];
            
            // Create light beams with slight delay for each block
            shape.forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value === 1) {
                        const gridX = this.currentX + x;
                        const gridY = this.currentY + y;
                        setTimeout(() => {
                            this.particleSystem.addLightBeam(gridX, gridY, COLORS[this.currentTetromino]);
                        }, (x + y) * 50); // Stagger effect
                    }
                });
            });

            const linesCleared = this.gridManager.checkAndClearLines(this.particleSystem);
            if (linesCleared > 0) {
                this.triggerCameraShake(0.4);
            }
            this.spawnNewTetromino();
        }
        
        this.hardDropPressed = false;
        this.renderer.renderScene();
    }

    rotateTetromino() {
        this.gridManager.clearTetromino(this.currentTetromino, this.currentX, this.currentY);
        
        const currentShape = TETROMINOES[this.currentTetromino];
        
        const rotated = currentShape[0].map((_, i) => 
            currentShape.map(row => row[row.length - 1 - i])
        );
        
        const originalShape = TETROMINOES[this.currentTetromino];
        
        TETROMINOES[this.currentTetromino] = rotated;
        
        if (!this.gridManager.checkCollision(this.currentTetromino, this.currentX, this.currentY)) {
            this.gridManager.placeTetromino(this.currentTetromino, this.currentX, this.currentY);
        } else {
            TETROMINOES[this.currentTetromino] = originalShape;
            this.gridManager.placeTetromino(this.currentTetromino, this.currentX, this.currentY);
        }
        
        this.renderer.renderScene();
    }

    handleKeyPress(event: KeyboardEvent) {
        this.inputHandler.handleKeyPress(event);
    }

    renderGridBorders(width: number, height: number) {
        const group = new THREE.Group();
        const material = new THREE.LineBasicMaterial({ 
            color: 0xffffff,
            opacity: 0.5,
            transparent: true 
        });

        // Add horizontal lines
        for (let y = 0; y <= height; y++) {
            const geometry = new THREE.BufferGeometry().setFromPoints([
                new THREE.Vector3(0, -y, 0),
                new THREE.Vector3(width, -y, 0)
            ]);
            const line = new THREE.Line(geometry, material);
            group.add(line);
        }

        // Add vertical lines
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

    private calculateShadowPosition(): number {
        let shadowY = this.currentY;
        this.gridManager.clearTetromino(this.currentTetromino, this.currentX, this.currentY);
        
        while (!this.gridManager.checkCollision(this.currentTetromino, this.currentX, shadowY + 1)) {
            shadowY++;
        }
        
        this.gridManager.placeTetromino(this.currentTetromino, this.currentX, this.currentY);
        return shadowY;
    }

    private updateCameraShake() {
        if (this.cameraShake.enabled) {
            this.camera.position.set(
                this.originalCameraPosition.x + (Math.random() - 0.5) * this.cameraShake.intensity,
                this.originalCameraPosition.y + (Math.random() - 0.5) * this.cameraShake.intensity,
                this.originalCameraPosition.z + (Math.random() - 0.5) * this.cameraShake.intensity
            );
            
            this.cameraShake.intensity *= this.cameraShake.decay;
            
            if (this.cameraShake.intensity < 0.01) {
                this.cameraShake.enabled = false;
                this.camera.position.copy(this.originalCameraPosition);
            }
        }
    }

    triggerCameraShake(intensity: number = 0.5) {
        this.cameraShake.enabled = true;
        this.cameraShake.intensity = intensity;
    }

    updateScene() {
        const now = performance.now();
        if (now - this.lastRenderTime < 16) {
            return;
        }
        this.lastRenderTime = now;

        const shadowY = this.calculateShadowPosition();
        this.renderer.updateShadow(this.currentTetromino, this.currentX, shadowY);
        
        this.renderer.updateActivePiece(this.currentTetromino, this.currentX, this.currentY);
        
        this.renderer.renderScene();
        this.particleSystem.updateParticles?.();

        if (this.hardDropPressed) {
            this.blockInstances.forEach(mesh => {
                mesh.material.opacity = 1.0;
            });
        } else {
            this.blockInstances.forEach(mesh => {
                mesh.material.opacity = 0.8;
            });
        }

        this.shadowBlockInstances.forEach(mesh => {
            mesh.count = 0;
            mesh.instanceMatrix.needsUpdate = true;
        });

        this.updateCameraShake();
    }
}

export default TetrisGame;
