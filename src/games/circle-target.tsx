import * as THREE from 'three';

class CircleTarget {
    outerCircle: THREE.Mesh;
    innerCircle: THREE.Mesh;
    ring: THREE.Mesh;
    private startTime: number;
    position: THREE.Vector3; 
    hitbox: THREE.Mesh; // Make hitbox public

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
        // Simply check for intersection, no timing check
        return raycaster.intersectObject(this.hitbox).length > 0;
    }

    destroy(scene: THREE.Scene) {
        // Add explosion effect before removing
        const explodeGeometry = new THREE.CircleGeometry(0.5, 32);
        const explodeMaterial = new THREE.MeshBasicMaterial({
            color: 0x00ffff,
            transparent: true,
            opacity: 1,
            blending: THREE.AdditiveBlending,
            side: THREE.DoubleSide,
            depthTest: false
        });

        // Create multiple explosion rings
        for (let i = 0; i < 3; i++) {
            const explodeRing = new THREE.Mesh(explodeGeometry, explodeMaterial.clone());
            explodeRing.position.copy(this.position);
            explodeRing.lookAt(scene.position);
            scene.add(explodeRing);

            // Animate each ring
            const startScale = 0.5 + i * 0.5;
            const expandRing = () => {
                explodeRing.scale.multiplyScalar(1.1);
                explodeRing.material.opacity *= 0.95;
                if (explodeRing.material.opacity > 0.01) {
                    requestAnimationFrame(expandRing);
                } else {
                    scene.remove(explodeRing);
                }
            };
            explodeRing.scale.set(startScale, startScale, 1);
            expandRing();
        }

        // Remove original meshes
        scene.remove(this.innerCircle);
        scene.remove(this.outerCircle);
        scene.remove(this.ring);
        scene.remove(this.hitbox);
    }
}

export default CircleTarget;
