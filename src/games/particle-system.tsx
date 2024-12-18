import * as THREE from 'three';
import { MATERIALS, COLORS } from './colors';

class ParticleSystem {
    private particles: { mesh: THREE.Mesh; velocity: THREE.Vector3; life: number }[] = [];
    private scene: THREE.Scene;
    private lastUpdate: number = 0;
    private isAnimating: boolean = false;

    constructor(scene: THREE.Scene) {
        this.scene = scene;
    }

    addParticlesForLine(lineY: number, grid: Array<Array<{ color: number | null; filled: boolean }>>) {
        const newParticles = [];
        const flashGeometry = new THREE.PlaneGeometry(10, 1);
        const flashMaterial = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.8,
            side: THREE.DoubleSide,
            blending: THREE.AdditiveBlending
        });

        // Add flash effect
        const flash = new THREE.Mesh(flashGeometry, flashMaterial);
        flash.position.set(5, -lineY + 0.5, 0.1);
        this.scene.add(flash);
        newParticles.push({
            mesh: flash,
            velocity: new THREE.Vector3(0, 0, 0),
            life: 0.5
        });

        // Create energetic particles
        for (let x = 0; x < grid[0].length; x++) {
            if (grid[lineY][x].filled && grid[lineY][x].color !== null) {
                const colorIndex = COLORS.indexOf(grid[lineY][x].color!);
                if (colorIndex !== -1) {
                    // Explosion particles
                    for (let i = 0; i < 8; i++) {
                        const size = 0.2 + Math.random() * 0.3;
                        const geometry = new THREE.BoxGeometry(size, size, size);
                        const material = MATERIALS[colorIndex].clone();
                        material.transparent = true;
                        material.emissive = new THREE.Color(grid[lineY][x].color!);
                        material.emissiveIntensity = 0.5;

                        const particle = new THREE.Mesh(geometry, material);
                        particle.position.set(
                            x + 0.5,
                            -lineY + 0.5,
                            Math.random() * 0.5
                        );

                        this.scene.add(particle);

                        const angle = (Math.PI * 2 * i) / 8;
                        const speed = 0.1 + Math.random() * 0.2;
                        newParticles.push({
                            mesh: particle,
                            velocity: new THREE.Vector3(
                                Math.cos(angle) * speed,
                                Math.sin(angle) * speed,
                                Math.random() * 0.1
                            ),
                            life: 1.0 + Math.random()
                        });
                    }

                    // Energy beam particles
                    const beamCount = 2;
                    for (let i = 0; i < beamCount; i++) {
                        const beamGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.8, 4);
                        const beamMaterial = new THREE.MeshBasicMaterial({
                            color: grid[lineY][x].color!,
                            transparent: true,
                            opacity: 0.6,
                            blending: THREE.AdditiveBlending
                        });

                        const beam = new THREE.Mesh(beamGeometry, beamMaterial);
                        beam.position.set(
                            x + 0.5,
                            -lineY + 0.5,
                            0
                        );
                        beam.rotation.z = Math.random() * Math.PI;

                        this.scene.add(beam);

                        newParticles.push({
                            mesh: beam,
                            velocity: new THREE.Vector3(
                                (Math.random() - 0.5) * 0.2,
                                (Math.random() - 0.5) * 0.2,
                                0
                            ),
                            life: 0.5 + Math.random() * 0.5
                        });
                    }
                }
            }
        }

        this.particles.push(...newParticles);
        if (!this.isAnimating) {
            this.startAnimation();
        }
    }

    addImpactParticles(x: number, y: number, color: number) {
        const particleCount = 8; // Number of particles per block
        const newParticles = [];
        
        for (let i = 0; i < particleCount; i++) {
            const size = 0.2 + Math.random() * 0.3;
            const geometry = new THREE.BoxGeometry(size, size, size);
            const material = new THREE.MeshPhongMaterial({
                color,
                opacity: 0.8,
                transparent: true,
                shininess: 30
            });

            const particle = new THREE.Mesh(geometry, material);
            particle.position.set(
                x + 0.5 + (Math.random() - 0.5) * 0.3,
                -y + 0.5,
                (Math.random() - 0.5) * 0.3
            );

            this.scene.add(particle);

            // Create outward explosion effect
            const angle = (Math.PI * 2 * i) / particleCount;
            newParticles.push({
                mesh: particle,
                velocity: new THREE.Vector3(
                    Math.cos(angle) * 0.2,
                    Math.abs(Math.sin(angle)) * 0.3, // Upward burst
                    Math.sin(angle) * 0.2
                ),
                life: 1.0 + Math.random()
            });
        }

        this.particles.push(...newParticles);
        if (!this.isAnimating) {
            this.startAnimation();
        }
    }

    addLightBeam(x: number, y: number, color: number) {
        // Create main beam
        const beamHeight = 12;
        const geometry = new THREE.CylinderGeometry(0.1, 0.3, beamHeight, 8);
        const material = new THREE.MeshPhongMaterial({
            color: new THREE.Color(color),
            opacity: 0.3,
            transparent: true,
            shininess: 100,
            emissive: color,
            emissiveIntensity: 1.0,
            blending: THREE.AdditiveBlending
        });

        const beam = new THREE.Mesh(geometry, material);
        beam.position.set(x + 0.5, -y + beamHeight/2 - 0.5, 0);

        // Add outer glow
        const glowGeometry = new THREE.CylinderGeometry(0.2, 0.5, beamHeight, 8);
        const glowMaterial = material.clone();
        glowMaterial.opacity = 0.15;
        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        beam.add(glow);

        this.scene.add(beam);
        
        this.particles.push({
            mesh: beam,
            velocity: new THREE.Vector3(0, 2.5, 0),
            life: 1.5
        });
    }

    private startAnimation() {
        this.isAnimating = true;
        const animate = () => {
            const currentTime = performance.now();
            if (currentTime - this.lastUpdate >= 16) {
                this.lastUpdate = currentTime;
                this.updateParticles();
            }

            if (this.particles.length > 0 && this.isAnimating) {
                requestAnimationFrame(animate);
            } else {
                this.isAnimating = false;
            }
        };
        requestAnimationFrame(animate);
    }

    private updateParticles() {
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const particle = this.particles[i];
            
            if (particle.mesh.geometry.type === 'CylinderGeometry') {
                // Light beam behavior
                particle.mesh.scale.y *= 0.97;
                particle.mesh.scale.x *= 0.99;
                particle.mesh.scale.z *= 0.99;
                particle.mesh.position.y += 0.3;
                particle.mesh.rotation.y += 0.02;
                particle.mesh.material.opacity *= 0.97;
            } else if (particle.mesh.geometry.type === 'PlaneGeometry') {
                // Flash effect behavior
                particle.mesh.material.opacity *= 0.9;
                particle.mesh.scale.x *= 1.05;
            } else {
                // Regular particle behavior
                particle.mesh.rotation.x += 0.1;
                particle.mesh.rotation.y += 0.1;
                particle.mesh.rotation.z += 0.1;
                particle.velocity.y -= 0.02;
                particle.mesh.position.add(particle.velocity);
                
                // Add subtle oscillation
                particle.mesh.position.x += Math.sin(Date.now() * 0.01) * 0.01;
                particle.mesh.material.opacity = particle.life;
            }
            
            particle.life -= 0.03;
            
            if (particle.life <= 0) {
                this.scene.remove(particle.mesh);
                this.particles.splice(i, 1);
            }
        }
    }
}

export default ParticleSystem;
