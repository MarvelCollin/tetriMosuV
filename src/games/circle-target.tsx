import * as THREE from 'three';

class CircleTarget {
    private outerCircle: THREE.Mesh;
    private innerCircle: THREE.Mesh;
    hitbox: THREE.Mesh;
    private startTime: number;
    position: THREE.Vector3;
    private readonly DURATION = 4.0; 

    private static geometries = {
        inner: new THREE.CircleGeometry(0.4, 16),  // Reduced segments from 32 to 16
        outer: new THREE.RingGeometry(0.5, 0.6, 16),
        hitbox: new THREE.CircleGeometry(0.3, 8)
    };

    private static materials = {
        inner: new THREE.MeshBasicMaterial({
            color: 0xff0000,
            transparent: true,
            opacity: 1,
            side: THREE.DoubleSide,
            depthTest: false,
            blending: THREE.AdditiveBlending
        }),
        outer: new THREE.MeshBasicMaterial({
            color: 0x00ffff,
            transparent: true,
            opacity: 0.8,
            side: THREE.DoubleSide,
            depthTest: false,
            blending: THREE.AdditiveBlending
        })
    };

    constructor(position: THREE.Vector3, scene: THREE.Scene, cameraPos: THREE.Vector3) {
        this.position = position;
        this.startTime = Date.now();

        // Use shared geometries and clone materials
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
            mesh.lookAt(cameraPos);
            scene.add(mesh);
        });

        this.outerCircle.scale.set(3, 3, 1);
    }

    update() {
        const elapsed = (Date.now() - this.startTime) * 0.001; // Multiply by 0.001 instead of divide by 1000
        const progress = Math.min(elapsed / this.DURATION, 1);

        // Use simple sine calculation for pulse
        const innerPulse = 1 + Math.sin(elapsed * 8) * 0.2;
        this.innerCircle.scale.setScalar(innerPulse);

        // Optimize scale calculation
        const scale = 3 * (1 - progress) + 1;
        this.outerCircle.scale.setScalar(scale);
        
        // Single opacity calculation
        this.outerCircle.material.opacity = 0.8 * (1 - progress);
        this.outerCircle.rotation.z = elapsed * 2;
    }

    destroy(scene: THREE.Scene) {
        scene.remove(this.innerCircle, this.outerCircle, this.hitbox);

        const flash = new THREE.Mesh(
            CircleTarget.geometries.inner,
            new THREE.MeshBasicMaterial({
                color: 0xff0000,
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