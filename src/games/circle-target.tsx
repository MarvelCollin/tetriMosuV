import * as THREE from 'three';

class CircleTarget {
    outerCircle: THREE.Mesh;
    innerCircle: THREE.Mesh;
    ring: THREE.Mesh;
    private startTime: number;
    position: THREE.Vector3; 
    private hitbox: THREE.Mesh;

    constructor(position: THREE.Vector3, scene: THREE.Scene, cameraPos: THREE.Vector3) {
        this.position = position;
        this.startTime = Date.now();

        const innerGeometry = new THREE.CircleGeometry(0.6, 32);
        const outerGeometry = new THREE.CircleGeometry(3, 32);
        
        this.innerCircle = new THREE.Mesh(
            innerGeometry,
            new THREE.MeshBasicMaterial({
                color: 0xffffff,
                transparent: true,
                opacity: 1,
                side: THREE.DoubleSide,
                depthTest: false,
                blending: THREE.AdditiveBlending
            })
        );
        
        this.outerCircle = new THREE.Mesh(
            outerGeometry,
            new THREE.MeshBasicMaterial({
                color: 0x00ffff,
                transparent: true,
                opacity: 0.8,
                side: THREE.DoubleSide,
                depthTest: false,
                blending: THREE.AdditiveBlending
            })
        );

        this.innerCircle.position.copy(position);
        this.outerCircle.position.copy(position);

        this.innerCircle.lookAt(cameraPos);
        this.outerCircle.lookAt(cameraPos);

        const hitboxGeometry = new THREE.PlaneGeometry(6, 6);
        this.hitbox = new THREE.Mesh(
            hitboxGeometry,
            new THREE.MeshBasicMaterial({
                transparent: true,
                opacity: 0,
                side: THREE.DoubleSide,
                depthTest: false
            })
        );
        this.hitbox.position.copy(position);
        this.hitbox.lookAt(cameraPos);

        scene.add(this.innerCircle);
        scene.add(this.outerCircle);
        scene.add(this.hitbox);
    }

    update() {
        const elapsed = (Date.now() - this.startTime) / 1000;
        const scale = Math.max(0.2, 1 - elapsed * 0.3);
        this.outerCircle.scale.set(scale, scale, 1);

        const pulse = 1 + Math.sin(elapsed * 8) * 0.2;
        this.innerCircle.scale.set(pulse, pulse, 1);

        const timingDiff = Math.abs(scale - 0.2);
        this.outerCircle.material.opacity = 0.5 + (1 - timingDiff) * 0.5;
    }

    checkHit(raycaster: THREE.Raycaster): boolean {
        const intersects = raycaster.intersectObject(this.hitbox);
        if (intersects.length === 0) return false;

        const outerScale = this.outerCircle.scale.x;
        const diff = Math.abs(outerScale - 0.2);
        return diff < 0.3; 
    }

    destroy(scene: THREE.Scene) {
        scene.remove(this.innerCircle);
        scene.remove(this.outerCircle);
        scene.remove(this.ring);
        scene.remove(this.hitbox);
    }
}

export default CircleTarget;
