import * as THREE from 'three';
import { TETROMINOES } from './tetrominoes';
import { COLORS, MATERIALS, SHADOW_MATERIALS, BLOCK_GEOMETRY, currentTheme } from './colors';
import ParticleSystem from './particle-system';
import GridManager from './grid-manager';
import InputHandler from './input-handler';
import Renderer from './renderer';
import CircleTarget from './circle-target';

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
    private nextTetromino: number;
    private score: number = 0;
    private circleTargets: CircleTarget[] = [];
    private targetedBlocks: Set<string> = new Set();
    private isInTargetMode: boolean = false;
    private requiredTargets: number = 0;
    private hitTargets: number = 0;
    private timeoutId: NodeJS.Timeout | null = null;
    private tetrominoBag: number[] = [];  // Add this property for the bag of tetrominos

    constructor(scene: THREE.Scene, camera: THREE.PerspectiveCamera, setTetrominoState: (state: { tetromino: number; startX: number; startY: number }) => void) {
        this.scene = scene;
        this.setTetrominoState = setTetrominoState;
        this.gridManager = new GridManager(10, 20);
        this.gridManager.setGame(this);
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
            intensity: 1,
            decay: 0.9
        };

        this.tetrominoBag = this.generateNewBag();
        this.nextTetromino = this.getNextTetromino();
        this.score = 0;
        this.renderer.updateScore(this.score);

        this.setupLighting();
        this.startAutoDrop();
        this.spawnNewTetromino();

        window.addEventListener('click', this.handleClick.bind(this));
    }

    private setupLighting() {
        const ambientLight = new THREE.AmbientLight(0x222222, 0.6);
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
        directionalLight.position.set(5, 15, 10);
        directionalLight.castShadow = true;
        
        const rimLight = new THREE.DirectionalLight(0x2244ff, 0.8);
        rimLight.position.set(-5, 5, -10);
        
        const groundLight = new THREE.PointLight(0x00ffff, 1.2);
        groundLight.position.set(5, -22, 10);
        groundLight.distance = 35;
        groundLight.decay = 2;
        
        const spotlight = new THREE.SpotLight(0x7744ff, 0.8);
        spotlight.position.set(5, 25, 5);
        spotlight.angle = Math.PI / 4;
        spotlight.penumbra = 0.5;
        spotlight.decay = 1.5;
        spotlight.distance = 40;
        
        const leftAccent = new THREE.PointLight(0xff00ff, 0.4);
        leftAccent.position.set(-15, -10, 15);
        
        const rightAccent = new THREE.PointLight(0x00ffff, 0.4);
        rightAccent.position.set(15, -10, 15);
        
        this.scene.add(
            ambientLight, 
            directionalLight, 
            rimLight, 
            groundLight, 
            spotlight,
            leftAccent,
            rightAccent
        );
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
        }, 700);
    }

    private generateNewBag(): number[] {
        // Create array with indices 0 to 6 (for each tetromino type)
        const bag = Array.from({ length: TETROMINOES.length }, (_, i) => i);
        
        // Fisher-Yates shuffle
        for (let i = bag.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [bag[i], bag[j]] = [bag[j], bag[i]];
        }
        return bag;
    }

    private getNextTetromino(): number {
        if (this.tetrominoBag.length === 0) {
            this.tetrominoBag = this.generateNewBag();
        }
        return this.tetrominoBag.pop()!;
    }

    spawnNewTetromino() {
        this.currentTetromino = this.nextTetromino;
        this.nextTetromino = this.getNextTetromino();
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
        this.renderer.updateNextPiecePreview(this.nextTetromino);
    }

    moveDown() {
        this.gridManager.clearTetromino(this.currentTetromino, this.currentX, this.currentY);
        if (!this.gridManager.checkCollision(this.currentTetromino, this.currentX, this.currentY + 1)) {
            this.currentY++;
            this.gridManager.placeTetromino(this.currentTetromino, this.currentX, this.currentY);
            this.gridManager.checkAndClearLines(this.particleSystem);
        } else {
            this.gridManager.placeTetromino(this.currentTetromino, this.currentX, this.currentY);
            const linesCleared = this.gridManager.checkAndClearLines(this.particleSystem);
            if (linesCleared > 0) {
                this.score += linesCleared * 100;
                this.renderer.updateScore(this.score);
                this.triggerCameraShake(3);
            }
            this.spawnNewTetromino();
        }
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
            const currentColor = COLORS[this.currentTetromino]; 
            
            shape.forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value === 1) {
                        const gridX = this.currentX + x;
                        const gridY = this.currentY + y;
                        setTimeout(() => {
                            this.particleSystem.addLightBeam(gridX, gridY, currentColor);
                        }, (x + y) * 50); 
                    }
                });
            });

            const linesCleared = this.gridManager.checkAndClearLines(this.particleSystem);
            if (linesCleared > 0) {
                this.triggerCameraShake(0.4);
                const flashGeometry = new THREE.PlaneGeometry(15, 25);
                const flashMaterial = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    transparent: true,
                    opacity: 0.3,
                    side: THREE.DoubleSide,
                    blending: THREE.AdditiveBlending
                });
                const flash = new THREE.Mesh(flashGeometry, flashMaterial);
                flash.position.set(5, -10, 0.1);
                this.scene.add(flash);
                
                const fadeOut = () => {
                    if (flash.material.opacity > 0) {
                        flash.material.opacity -= 0.05;
                        requestAnimationFrame(fadeOut);
                    } else {
                        this.scene.remove(flash);
                    }
                };
                fadeOut();
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

    replaceTetromino() {
        if (this.gameOver) return;
        
        this.gridManager.clearTetromino(this.currentTetromino, this.currentX, this.currentY);
        
        const temp = this.currentTetromino;
        this.currentTetromino = this.nextTetromino;
        this.nextTetromino = temp;
        
        if (!this.gridManager.checkCollision(this.currentTetromino, this.currentX, this.currentY)) {
            this.gridManager.placeTetromino(this.currentTetromino, this.currentX, this.currentY);
            this.renderer.updateNextPiecePreview(this.nextTetromino);
            
            const flashGeometry = new THREE.PlaneGeometry(2, 2);
            const flashMaterial = new THREE.MeshBasicMaterial({
                color: COLORS[this.currentTetromino],
                transparent: true,
                opacity: 0.3,
                side: THREE.DoubleSide,
                blending: THREE.AdditiveBlending
            });
            const flash = new THREE.Mesh(flashGeometry, flashMaterial);
            flash.position.set(this.currentX + 1, -this.currentY - 1, 0.1);
            this.scene.add(flash);
            
            const fadeOut = () => {
                if (flash.material.opacity > 0) {
                    flash.material.opacity -= 0.1;
                    requestAnimationFrame(fadeOut);
                } else {
                    this.scene.remove(flash);
                }
            };
            fadeOut();
        } else {
            const temp = this.currentTetromino;
            this.currentTetromino = this.nextTetromino;
            this.nextTetromino = temp;
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
            color: currentTheme.grid,
            opacity: 0.2,
            transparent: true,
            blending: THREE.AdditiveBlending
        });

        for (let y = 0; y <= height; y++) {
            const opacity = y % 2 === 0 ? 0.3 : 0.15;
            const lineMaterial = material.clone();
            lineMaterial.opacity = opacity;
            
            const geometry = new THREE.BufferGeometry().setFromPoints([
                new THREE.Vector3(0, -y, 0),
                new THREE.Vector3(width, -y, 0)
            ]);
            const line = new THREE.Line(geometry, lineMaterial);
            group.add(line);
        }

        for (let x = 0; x <= width; x++) {
            const opacity = x % 2 === 0 ? 0.3 : 0.15;
            const lineMaterial = material.clone();
            lineMaterial.opacity = opacity;
            
            const geometry = new THREE.BufferGeometry().setFromPoints([
                new THREE.Vector3(x, 0, 0),
                new THREE.Vector3(x, -height, 0)
            ]);
            const line = new THREE.Line(geometry, lineMaterial);
            group.add(line);
        }

        const borderMaterial = new THREE.LineBasicMaterial({ 
            color: currentTheme.border,
            opacity: 0.8,
            transparent: true,
            blending: THREE.AdditiveBlending
        });

        const borderGeometry = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(-0.1, 0.1, 0),
            new THREE.Vector3(width + 0.1, 0.1, 0),
            new THREE.Vector3(width + 0.1, -(height + 0.1), 0),
            new THREE.Vector3(-0.1, -(height + 0.1), 0),
            new THREE.Vector3(-0.1, 0.1, 0)
        ]);
        
        const border = new THREE.Line(borderGeometry, borderMaterial);
        
        const outerBorderMaterial = new THREE.LineBasicMaterial({ 
            color: 0x00ffff,
            opacity: 0.4,
            transparent: true,
            blending: THREE.AdditiveBlending
        });

        const outerBorderGeometry = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(-0.2, 0.2, 0),
            new THREE.Vector3(width + 0.2, 0.2, 0),
            new THREE.Vector3(width + 0.2, -(height + 0.2), 0),
            new THREE.Vector3(-0.2, -(height + 0.2), 0),
            new THREE.Vector3(-0.2, 0.2, 0)
        ]);
        
        const outerBorder = new THREE.Line(outerBorderGeometry, outerBorderMaterial);
        
        group.add(border, outerBorder);
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

    private handleClick = (event: MouseEvent) => {
        if (!this.isInTargetMode) return;

        const canvas = event.target as HTMLCanvasElement;
        const rect = canvas.getBoundingClientRect();
        const mouse = new THREE.Vector2(
            ((event.clientX - rect.left) / rect.width) * 2 - 1,
            -((event.clientY - rect.top) / rect.height) * 2 + 1
        );

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, this.camera);

        for (let i = this.circleTargets.length - 1; i >= 0; i--) {
            const target = this.circleTargets[i];
            if (raycaster.intersectObject(target.hitbox).length > 0) {
                console.log("Center hit!");
                this.hitTargets++;
                
                this.circleTargets.forEach(t => t.resetTime());
                
                this.triggerCameraShake(0.4);
                
                const flashGeometry = new THREE.CircleGeometry(0.5, 32);
                const flashMaterial = new THREE.MeshBasicMaterial({
                    color: 0xff0000,
                    transparent: true,
                    opacity: 1,
                    blending: THREE.AdditiveBlending,
                    side: THREE.DoubleSide,
                    depthTest: false
                });
                const flash = new THREE.Mesh(flashGeometry, flashMaterial);
                flash.position.copy(target.position);
                flash.lookAt(this.camera.position);
                this.scene.add(flash);

                const expandFlash = () => {
                    flash.scale.multiplyScalar(1.2);
                    flash.material.opacity *= 0.85;
                    if (flash.material.opacity > 0.01) {
                        requestAnimationFrame(expandFlash);
                    } else {
                        this.scene.remove(flash);
                    }
                };
                expandFlash();

                for (let j = 0; j < 8; j++) {
                    this.particleSystem.addImpactParticles(
                        target.position.x,
                        target.position.y,
                        0xff0000
                    );
                }
                
                target.destroy(this.scene);
                this.circleTargets.splice(i, 1);
                
                if (this.hitTargets === this.requiredTargets) {
                    this.completeTargetMode(true);
                }
                break;
            }
        }
    }

    private startTargetMode(lineY: number) {
        if (this.isInTargetMode) return;

        this.isInTargetMode = true;
        this.hitTargets = 0;
        this.circleTargets = [];
        this.targetedBlocks.clear();

        const gridDepth = 1;             // Reduced from 5 to 1 to bring circles closer to grid
        const targetLineY = lineY;        

        const numTargets = Math.floor(Math.random() * 4) + 2; 
        this.requiredTargets = numTargets;

        console.log(`Creating ${numTargets} targets for line ${lineY}`);

        const cameraPos = this.camera.position.clone();
        const filledPositions = [];

        for (let x = 0; x < this.gridManager.width; x++) {
            if (this.gridManager.grid[targetLineY][x].filled) {
                filledPositions.push(x);
            }
        }

        if (filledPositions.length < numTargets) {
            console.log("Not enough filled positions for targets");
            this.completeTargetMode(false);
            return;
        }

        for (let i = 0; i < numTargets; i++) {
            const randomIndex = Math.floor(Math.random() * filledPositions.length);
            const x = filledPositions.splice(randomIndex, 1)[0];

            const circlePosition = new THREE.Vector3(
                x + 0.5,                      // X position centered on block
                -targetLineY + 0.5,           // Y position centered on block
                gridDepth                     // Z position (distance from grid) - adjust this value
            );

            const target = new CircleTarget(
                circlePosition,
                this.scene,
                cameraPos
            );
            this.circleTargets.push(target);
            this.targetedBlocks.add(`${x},${targetLineY}`);
        }

        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }

        this.timeoutId = setTimeout(() => {
            if (this.isInTargetMode) {
                this.completeTargetMode(false);
            }
        }, 4000);
    }

    private completeTargetMode(success: boolean) {
        this.isInTargetMode = false;
        
        const currentPiece = {
            tetromino: this.currentTetromino,
            x: this.currentX,
            y: this.currentY
        };
        
        this.gridManager.clearTetromino(this.currentTetromino, this.currentX, this.currentY);
        
        this.circleTargets.forEach(target => target.destroy(this.scene));
        this.circleTargets = [];

        if (success) {
            for (let y = this.gridManager.height - 1; y >= 0; y--) {
                if (this.gridManager.grid[y].every(cell => cell.filled)) {
                    this.createLineClearEffects(y);
                    
                    this.gridManager.clearLine(y);
                    
                    this.score += 100;
                    this.renderer.updateScore(this.score);
                    
                    setTimeout(() => {
                        this.renderer.renderScene();
                    }, 100);
                }
            }
        } else {
            this.targetedBlocks.forEach(pos => {
                const [x, y] = pos.split(',').map(Number);
                this.gridManager.grid[y][x] = { color: null, filled: false };
            });
        }

        this.gridManager.placeTetromino(
            currentPiece.tetromino,
            currentPiece.x,
            currentPiece.y
        );

        this.renderer.renderScene();
    }

    private createLineClearEffects(y: number) {
        const sweepGeometry = new THREE.PlaneGeometry(12, 0.8);
        const sweepMaterial = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.6,
            side: THREE.DoubleSide,
            blending: THREE.AdditiveBlending
        });
        
        const sweep = new THREE.Mesh(sweepGeometry, sweepMaterial);
        sweep.position.set(-2, -y + 0.5, 0.1);
        this.scene.add(sweep);

        const startTime = Date.now();
        const animateSweep = () => {
            const elapsed = (Date.now() - startTime) / 300;
            if (elapsed < 1) {
                sweep.position.x = -2 + elapsed * 14;
                sweep.material.opacity = 0.6 * (1 - elapsed);
                requestAnimationFrame(animateSweep);
            } else {
                this.scene.remove(sweep);
            }
        };
        animateSweep();

        for (let x = 0; x < this.gridManager.width; x++) {
            if (this.gridManager.grid[y][x].filled && this.gridManager.grid[y][x].color !== null) {
                setTimeout(() => {
                    this.particleSystem.addLightBeam(x, y, this.gridManager.grid[y][x].color!);
                }, x * 50);
            }
        }

        this.triggerCameraShake(0.2);
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
        this.circleTargets.forEach(target => target.update());
    }
}

export default TetrisGame;

