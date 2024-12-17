import * as THREE from 'three';

class CircleTarget {
    outerCircle: THREE.Mesh;
    innerCircle: THREE.Mesh;
    ring: THREE.Mesh;
    private startTime: number;
    position: THREE.Vector3; 
    hitbox: THREE.Mesh;

    constructor(position: THREE.Vector3, scene: THREE.Scene, cameraPos: THREE.Vector3) {
        this.position = position;
        this.startTime = Date.now();

        const innerGeometry = new THREE.CircleGeometry(0.3, 32);
        const outerGeometry = new THREE.CircleGeometry(1.2, 32); // Changed from 3 to 1.2
        
        this.innerCircle = new THREE.Mesh(
            innerGeometry,
            new THREE.MeshBasicMaterial({
                color: 0xff0000, 
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

        const hitboxGeometry = new THREE.PlaneGeometry(1.4, 1.4);
        this.hitbox = new THREE.Mesh(
            hitboxGeometry,
            new THREE.MeshBasicMaterial({
                transparent: true,
                opacity: 0,
                side: THREE.DoubleSide,
                depthTest: false
            })
        );

        this.innerCircle.position.copy(position);
        this.outerCircle.position.copy(position);
        this.hitbox.position.copy(position);

        this.innerCircle.lookAt(cameraPos);
        this.outerCircle.lookAt(cameraPos);
        this.hitbox.lookAt(cameraPos);

        scene.add(this.innerCircle);
        scene.add(this.outerCircle);
        scene.add(this.hitbox);
    }

    resetTime() {
        this.startTime = Date.now();
    }

    update() {
        const elapsed = (Date.now() - this.startTime) / 1000;
        const scale = Math.max(0.2, 1 - elapsed * 0.05); 
        this.outerCircle.scale.set(scale, scale, 1);

        const pulse = 1 + Math.sin(elapsed * 8) * 0.2;
        this.innerCircle.scale.set(pulse, pulse, 1);

        const timingDiff = Math.abs(scale - 0.2);
        this.outerCircle.material.opacity = 0.5 + (1 - timingDiff) * 0.5;
    }

    checkHit(raycaster: THREE.Raycaster): boolean {
        return raycaster.intersectObject(this.hitbox).length > 0;
    }

    destroy(scene: THREE.Scene) {
        // Create expanding rings effect
        const ringCount = 3;
        for (let i = 0; i < ringCount; i++) {
            const ringGeo = new THREE.RingGeometry(0.2, 0.3, 32);
            const ringMat = new THREE.MeshBasicMaterial({
                color: 0xff0000,
                transparent: true,
                opacity: 1,
                blending: THREE.AdditiveBlending,
                side: THREE.DoubleSide,
                depthTest: false
            });

            const ring = new THREE.Mesh(ringGeo, ringMat);
            ring.position.copy(this.position);
            ring.lookAt(scene.position);
            scene.add(ring);

            const startTime = Date.now();
            const delay = i * 100;
            const animate = () => {
                const elapsed = Date.now() - startTime - delay;
                if (elapsed < 0) {
                    requestAnimationFrame(animate);
                    return;
                }

                const progress = elapsed / 500;
                const scale = Math.min(5, progress * 3);
                ring.scale.set(scale, scale, 1);
                ring.material.opacity = Math.max(0, 1 - progress);

                if (progress < 1.5) {
                    requestAnimationFrame(animate);
                } else {
                    scene.remove(ring);
                }
            };
            animate();
        }

        const particleCount = 24;
        for (let i = 0; i < particleCount; i++) {
            const angle = (i / particleCount) * Math.PI * 2;
            const speed = 0.1 + Math.random() * 0.2;
            const size = 0.1 + Math.random() * 0.1;

            const particle = new THREE.Mesh(
                new THREE.CircleGeometry(size, 8),
                new THREE.MeshBasicMaterial({
                    color: i % 2 === 0 ? 0xff0000 : 0xff6666,
                    transparent: true,
                    opacity: 1,
                    blending: THREE.AdditiveBlending,
                    side: THREE.DoubleSide,
                    depthTest: false
                })
            );

            particle.position.copy(this.position);
            particle.lookAt(scene.position);
            scene.add(particle);

            const startTime = Date.now();
            const animate = () => {
                const elapsed = (Date.now() - startTime) / 1000;
                const scale = Math.max(0, 1 - elapsed);
                
                const currentAngle = angle + elapsed * 5;
                const radius = elapsed * 2;
                particle.position.x = this.position.x + Math.cos(currentAngle) * radius;
                particle.position.y = this.position.y + Math.sin(currentAngle) * radius - elapsed * elapsed * 2;
                
                particle.rotation.z = currentAngle;
                particle.scale.set(scale, scale, 1);
                particle.material.opacity = scale;

                if (scale > 0) {
                    requestAnimationFrame(animate);
                } else {
                    scene.remove(particle);
                }
            };
            animate();
        }

        const flash = new THREE.Mesh(
            new THREE.CircleGeometry(0.4, 32),
            new THREE.MeshBasicMaterial({
                color: 0xffffff,
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

        const flashStartTime = Date.now();
        const animateFlash = () => {
            const elapsed = (Date.now() - flashStartTime) / 1000;
            const scale = Math.max(0, 1 - elapsed * 2);
            flash.scale.set(1 + elapsed * 3, 1 + elapsed * 3, 1);
            flash.material.opacity = scale;

            if (scale > 0) {
                requestAnimationFrame(animateFlash);
            } else {
                scene.remove(flash);
            }
        };
        animateFlash();

        scene.remove(this.innerCircle);
        scene.remove(this.outerCircle);
        scene.remove(this.hitbox);
    }
}

export default CircleTarget;