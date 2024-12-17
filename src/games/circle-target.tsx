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

        // Make inner circle smaller for precise clicking
        const innerGeometry = new THREE.CircleGeometry(0.3, 32);
        const outerGeometry = new THREE.CircleGeometry(3, 32);
        
        this.innerCircle = new THREE.Mesh(
            innerGeometry,
            new THREE.MeshBasicMaterial({
                color: 0xff0000, // Make inner circle red for better visibility
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

        // Make hitbox match inner circle size
        const hitboxGeometry = new THREE.PlaneGeometry(0.6, 0.6);
        this.hitbox = new THREE.Mesh(
            hitboxGeometry,
            new THREE.MeshBasicMaterial({
                transparent: true,
                opacity: 0,
                side: THREE.DoubleSide,
                depthTest: false
            })
        );

        // Position everything
        this.innerCircle.position.copy(position);
        this.outerCircle.position.copy(position);
        this.hitbox.position.copy(position);

        // Make everything face camera
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
        // Slower shrinking speed
        const scale = Math.max(0.2, 1 - elapsed * 0.2); // Reduced from 0.3 to 0.2
        this.outerCircle.scale.set(scale, scale, 1);

        const pulse = 1 + Math.sin(elapsed * 8) * 0.2;
        this.innerCircle.scale.set(pulse, pulse, 1);

        const timingDiff = Math.abs(scale - 0.2);
        this.outerCircle.material.opacity = 0.5 + (1 - timingDiff) * 0.5;
    }

    checkHit(raycaster: THREE.Raycaster): boolean {
        // Only check intersection with inner circle's hitbox
        return raycaster.intersectObject(this.hitbox).length > 0;
    }

    destroy(scene: THREE.Scene) {
        // Create rotating particle explosion
        const particleCount = 16;
        const radius = 1;
        const particles: THREE.Mesh[] = [];

        for (let i = 0; i < particleCount; i++) {
            const angle = (i / particleCount) * Math.PI * 2;
            const geometry = new THREE.CircleGeometry(0.1, 8);
            const material = new THREE.MeshBasicMaterial({
                color: 0xff0000,
                transparent: true,
                opacity: 1,
                blending: THREE.AdditiveBlending,
                side: THREE.DoubleSide,
                depthTest: false
            });

            const particle = new THREE.Mesh(geometry, material);
            particle.position.copy(this.position);
            particle.lookAt(scene.position);
            scene.add(particle);
            particles.push(particle);

            // Animate particle
            const startTime = Date.now();
            const animate = () => {
                const elapsed = (Date.now() - startTime) / 1000;
                const scale = Math.max(0, 1 - elapsed);
                
                // Spiral outward motion
                const currentAngle = angle + elapsed * 10;
                const currentRadius = radius * elapsed;
                particle.position.x = this.position.x + Math.cos(currentAngle) * currentRadius;
                particle.position.y = this.position.y + Math.sin(currentAngle) * currentRadius;
                particle.position.z = this.position.z;
                
                particle.scale.set(scale, scale, 1);
                particle.material.opacity = scale;
                particle.rotation.z = currentAngle;

                if (scale > 0) {
                    requestAnimationFrame(animate);
                } else {
                    scene.remove(particle);
                }
            };
            animate();
        }

        // Create center flash
        const flashGeometry = new THREE.CircleGeometry(0.3, 32);
        const flashMaterial = new THREE.MeshBasicMaterial({
            color: 0xff0000,
            transparent: true,
            opacity: 1,
            blending: THREE.AdditiveBlending,
            side: THREE.DoubleSide,
            depthTest: false
        });

        const flash = new THREE.Mesh(flashGeometry, flashMaterial);
        flash.position.copy(this.position);
        flash.lookAt(scene.position);
        scene.add(flash);

        // Animate flash
        const expandFlash = () => {
            flash.scale.multiplyScalar(1.1);
            flash.material.opacity *= 0.9;
            if (flash.material.opacity > 0.01) {
                requestAnimationFrame(expandFlash);
            } else {
                scene.remove(flash);
            }
        };
        expandFlash();

        // Remove original meshes
        scene.remove(this.innerCircle);
        scene.remove(this.outerCircle);
        scene.remove(this.hitbox);
    }
}

export default CircleTarget;
