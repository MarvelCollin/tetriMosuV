import * as THREE from 'three';
import { currentTheme } from './colors';

class CircleTarget {
    private outerCircle: THREE.Mesh;
    private innerCircle: THREE.Mesh;
    hitbox: THREE.Mesh;
    private startTime: number;
    position: THREE.Vector3;
    private readonly DURATION = 4.0;
    private originalX: number;
    private originalZ: number;
    private radius: number = 5;
    private angle: number = 0;
    private orbitSpeed: number = 0.002;
    private orbitRadius: number = 1;
    private orbitCenterX: number;
    private orbitCenterY: number;
    private isRotating: boolean = false;
    private targetZ: number;
    private currentZ: number;
    private zTransitionSpeed: number = 0.1;
    private game: any;
    private isInRotation: boolean;

    private static geometries = {
        inner: new THREE.CircleGeometry(0.5, 16),
        outer: new THREE.RingGeometry(0.5, 0.6, 16),
        hitbox: new THREE.CircleGeometry(0.3, 8)
    };

    private static materials = {
        inner: new THREE.MeshBasicMaterial({
            color: currentTheme.border, // Use theme border color (usually bright)
            transparent: true,
            opacity: 1,
            side: THREE.DoubleSide,
            depthTest: false,
            blending: THREE.AdditiveBlending
        }),
        outer: new THREE.MeshBasicMaterial({
            color: currentTheme.grid, // Use theme grid color (usually accent)
            transparent: true,
            opacity: 0.8,
            side: THREE.DoubleSide,
            depthTest: false,
            blending: THREE.AdditiveBlending
        })
    };

    private static gameRotationState = {
        isRotating: false,
        normalZ: 1,
        rotatedZ: -1,     
        lastAngle: 0
    };

    static setGameRotation(isRotating: boolean) {
        CircleTarget.gameRotationState.isRotating = isRotating;
        console.log(`Rotation state changed to: ${isRotating}`);
    }

    static getCurrentZ(): number {
        return CircleTarget.gameRotationState.isRotating ? CircleTarget.gameRotationState.rotatedZ : CircleTarget.gameRotationState.normalZ;
    }

    constructor(position: THREE.Vector3, scene: THREE.Scene, cameraPos: THREE.Vector3, game: any) {
        this.position = position;
        this.startTime = Date.now();
        this.originalX = position.x;
        this.originalZ = position.z;
        this.radius = position.z;
        this.orbitCenterX = position.x;
        this.orbitCenterY = position.y;
        this.game = game;

        position.z = CircleTarget.gameRotationState.normalZ;
        this.position = position.clone();

        this.orbitSpeed = (Math.random() * 0.002) + 0.001;
        this.orbitRadius = Math.random() * 1 + 0.5;
        this.angle = Math.random() * Math.PI * 2;

        this.innerCircle = new THREE.Mesh(
            CircleTarget.geometries.inner,
            CircleTarget.materials.inner.clone()
        );

        this.outerCircle = new THREE.Mesh(
            CircleTarget.geometries.outer,
            CircleTarget.materials.outer.clone()
        );

        this.hitbox = new THREE.Mesh(
            CircleTarget.geometries.hitbox,
            new THREE.MeshBasicMaterial({
                transparent: true,
                opacity: 0,
                side: THREE.DoubleSide,
                depthTest: false
            })
        );

        [this.innerCircle, this.outerCircle, this.hitbox].forEach(mesh => {
            mesh.position.copy(position);
            
            // Initial orientation
            const matrix = new THREE.Matrix4();
            matrix.lookAt(position, cameraPos, new THREE.Vector3(0, 1, 0));
            mesh.quaternion.setFromRotationMatrix(matrix);
            mesh.rotateX(Math.PI / 2);
            
            scene.add(mesh);
        });

        this.outerCircle.scale.set(3, 3, 1);
        this.targetZ = position.z;
        this.currentZ = position.z;
        this.position.z = CircleTarget.gameRotationState.normalZ;
        [this.innerCircle, this.outerCircle, this.hitbox].forEach(mesh => {
            mesh.position.z = CircleTarget.gameRotationState.normalZ;
        });
    }

    update() {
        const elapsed = (Date.now() - this.startTime) * 0.001;
        const progress = Math.min(elapsed / this.DURATION, 1);

        this.angle += this.orbitSpeed;
        const orbitX = Math.cos(this.angle) * this.orbitRadius;
        const orbitY = Math.sin(this.angle) * this.orbitRadius;

        const newX = this.orbitCenterX + orbitX;
        const newY = this.orbitCenterY + orbitY;

        [this.innerCircle, this.outerCircle, this.hitbox].forEach(mesh => {
            mesh.position.x = newX;
            mesh.position.y = newY;
        });

        this.position.x = newX;
        this.position.y = newY;

        const innerPulse = 1 + Math.sin(elapsed * 8) * 0.2;
        this.innerCircle.scale.setScalar(innerPulse);

        const scale = 3 * (1 - progress) + 1;
        this.outerCircle.scale.setScalar(scale);

        this.outerCircle.material.opacity = 0.8 * (1 - progress);
        this.outerCircle.rotation.z = elapsed * 2;
    }

    updatePositionWithCamera(angle: number) {
        const targetZ = CircleTarget.gameRotationState.isRotating ? 
            CircleTarget.gameRotationState.rotatedZ : 
            CircleTarget.gameRotationState.normalZ;

        const newX = this.orbitCenterX - Math.sin(angle) * 5;
        const newZ = Math.cos(angle) * targetZ;
            this.position.set(newX, this.orbitCenterY, newZ);

        const cameraPos = new THREE.Vector3();
        this.game.camera.getWorldPosition(cameraPos);

        [this.innerCircle, this.outerCircle, this.hitbox].forEach(mesh => {
            mesh.position.copy(this.position);

            const matrix = new THREE.Matrix4();
            const up = new THREE.Vector3(0, 1, 0);
            matrix.lookAt(mesh.position, cameraPos, up);
            mesh.quaternion.setFromRotationMatrix(matrix);
            if (CircleTarget.gameRotationState.isRotating) {
                const rotationProgress = (angle % (Math.PI * 2)) / (Math.PI * 2);
                mesh.rotateX(Math.sin(rotationProgress * Math.PI) * 0.2);
            }
        });

        CircleTarget.gameRotationState.lastAngle = angle;
    }

    destroy(scene: THREE.Scene) {
        scene.remove(this.innerCircle, this.outerCircle, this.hitbox);

        const flash = new THREE.Mesh(
            CircleTarget.geometries.inner,
            new THREE.MeshBasicMaterial({
                color: currentTheme.border,
                transparent: true,
                opacity: 1,
                blending: THREE.AdditiveBlending,
                side: THREE.DoubleSide,
                depthTest: false
            })
        );
        flash.position.copy(this.position);
        flash.lookAt(scene.position);
        scene.add(flash);

        let opacity = 1;
        const animate = () => {
            flash.scale.multiplyScalar(1.1);
            opacity *= 0.9;
            flash.material.opacity = opacity;

            if (opacity > 0.01) {
                requestAnimationFrame(animate);
            } else {
                scene.remove(flash);
                flash.material.dispose();
            }
        };
        animate();
    }
}

export default CircleTarget;