import * as THREE from 'three';
import { MATERIALS, COLORS } from './colors';

class ParticleSystem {
    private particles: { mesh: THREE.Mesh; velocity: THREE.Vector3; life: number }[] = [];
    private scene: THREE.Scene;
    private lastUpdate: number = 0;
    private isAnimating: boolean = false;
    private backgroundEffects: { mesh: THREE.Mesh; velocity: THREE.Vector3; life: number }[] = [];
    private energyFields: THREE.Mesh[] = [];
    private glowRings: THREE.Mesh[] = [];

    constructor(scene: THREE.Scene) {
        this.scene = scene;
        this.initializeBackgroundEffects();
        this.createEnergyFields();
        this.createGlowRings();
    }

    private initializeBackgroundEffects() {
        const viewWidth = window.innerWidth;
        const viewHeight = window.innerHeight;
        const centerX = viewWidth / 2;
        const centerY = viewHeight / 2;

        for (let i = 0; i < 40; i++) {  
            const geometry = new THREE.PlaneGeometry(0.1, 2 + Math.random() * 3);
            const material = new THREE.MeshBasicMaterial({
                color: new THREE.Color().setHSL(Math.random(), 0.5, 0.5),
                transparent: true,
                opacity: 0.2,
                blending: THREE.AdditiveBlending,
                side: THREE.DoubleSide
            });

            const streak = new THREE.Mesh(geometry, material);
            streak.position.set(
                Math.random() * viewWidth - centerX,  
                Math.random() * viewHeight - centerY,
                -2 + Math.random()
            );
            streak.rotation.z = Math.random() * Math.PI;
            this.scene.add(streak);

            this.backgroundEffects.push({
                mesh: streak,
                velocity: new THREE.Vector3(
                    (Math.random() - 0.5) * 0.05,  
                    (Math.random() - 0.5) * 0.05,  
                    0
                ),
                life: 1
            });
        }

        window.addEventListener('resize', () => {
            const newWidth = window.innerWidth;
            const newHeight = window.innerHeight;
            const newCenterX = newWidth / 2;
            const newCenterY = newHeight / 2;

            this.backgroundEffects.forEach(effect => {
                effect.mesh.position.set(
                    Math.random() * newWidth - newCenterX,
                    Math.random() * newHeight - newCenterY,
                    effect.mesh.position.z
                );
            });
        });
    }

    private createEnergyFields() {
        const viewWidth = window.innerWidth;
        const viewHeight = window.innerHeight;

        for (let i = 0; i < 5; i++) {
            const geometry = new THREE.PlaneGeometry(20, 20);
            const material = new THREE.MeshBasicMaterial({
                color: new THREE.Color().setHSL(Math.random(), 0.7, 0.5),
                transparent: true,
                opacity: 0.1,
                blending: THREE.AdditiveBlending,
                side: THREE.DoubleSide
            });

            const field = new THREE.Mesh(geometry, material);
            field.position.set(
                (Math.random() - 0.5) * viewWidth,
                (Math.random() - 0.5) * viewHeight,
                -6
            );
            field.rotation.z = Math.random() * Math.PI;
            this.scene.add(field);
            this.energyFields.push(field);
        }
    }

    private createGlowRings() {
        const viewWidth = window.innerWidth;
        const viewHeight = window.innerHeight;

        for (let i = 0; i < 8; i++) {
            const geometry = new THREE.RingGeometry(5, 6, 32);
            const material = new THREE.MeshBasicMaterial({
                color: new THREE.Color().setHSL(Math.random(), 0.8, 0.5),
                transparent: true,
                opacity: 0.15,
                blending: THREE.AdditiveBlending,
                side: THREE.DoubleSide
            });

            const ring = new THREE.Mesh(geometry, material);
            ring.position.set(
                (Math.random() - 0.5) * viewWidth,
                (Math.random() - 0.5) * viewHeight,
                -4
            );
            this.scene.add(ring);
            this.glowRings.push(ring);
        }
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

        const flash = new THREE.Mesh(flashGeometry, flashMaterial);
        flash.position.set(5, -lineY + 0.5, 0.1);
        this.scene.add(flash);
        newParticles.push({
            mesh: flash,
            velocity: new THREE.Vector3(0, 0, 0),
            life: 0.5
        });

        for (let x = 0; x < grid[0].length; x++) {
            if (grid[lineY][x].filled && grid[lineY][x].color !== null) {
                const colorIndex = COLORS.indexOf(grid[lineY][x].color!);
                if (colorIndex !== -1) {
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
        const particleCount = 8; 
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

            const angle = (Math.PI * 2 * i) / particleCount;
            newParticles.push({
                mesh: particle,
                velocity: new THREE.Vector3(
                    Math.cos(angle) * 0.2,
                    Math.abs(Math.sin(angle)) * 0.3, 
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

        const spiralCount = 8;
        for (let i = 0; i < spiralCount; i++) {
            const spiralGeometry = new THREE.SphereGeometry(0.1, 8, 8);
            const spiralMaterial = new THREE.MeshBasicMaterial({
                color: color,
                transparent: true,
                opacity: 0.5,
                blending: THREE.AdditiveBlending
            });

            const spiral = new THREE.Mesh(spiralGeometry, spiralMaterial);
            const angle = (i / spiralCount) * Math.PI * 2;
            spiral.position.set(
                x + 0.5 + Math.cos(angle) * 0.3,
                -y + 0.5,
                Math.sin(angle) * 0.3
            );

            this.scene.add(spiral);
            
            this.particles.push({
                mesh: spiral,
                velocity: new THREE.Vector3(
                    Math.cos(angle) * 0.05,
                    0.2,
                    Math.sin(angle) * 0.05
                ),
                life: 1.0
            });
        }

        const trailCount = 12;
        for (let i = 0; i < trailCount; i++) {
            const trailGeometry = new THREE.SphereGeometry(0.08, 8, 8);
            const trailMaterial = new THREE.MeshBasicMaterial({
                color: color,
                transparent: true,
                opacity: 0.3,
                blending: THREE.AdditiveBlending
            });

            const segments = 5;
            for (let j = 0; j < segments; j++) {
                const trail = new THREE.Mesh(trailGeometry, trailMaterial.clone());
                const angle = (i / trailCount) * Math.PI * 2;
                const radius = 0.3 + j * 0.1;
                trail.position.set(
                    x + 0.5 + Math.cos(angle) * radius,
                    -y + 0.5 + j * 0.2,
                    Math.sin(angle) * radius
                );
                trail.scale.set(1 - j * 0.15, 1 - j * 0.15, 1 - j * 0.15);
                this.scene.add(trail);

                this.particles.push({
                    mesh: trail,
                    velocity: new THREE.Vector3(
                        Math.cos(angle) * (0.05 + j * 0.02),
                        0.2 + j * 0.1,
                        Math.sin(angle) * (0.05 + j * 0.02)
                    ),
                    life: 1.0 - j * 0.15
                });
            }
        }

            const sparkleCount = 6;
        for (let i = 0; i < sparkleCount; i++) {
            const sparkleGeometry = new THREE.BufferGeometry();
            const vertices = [];
            for (let j = 0; j < 6; j++) {
                const angle = (j / 6) * Math.PI * 2;
                vertices.push(
                    Math.cos(angle) * 0.1, Math.sin(angle) * 0.1, 0,
                    0, 0, 0
                );
            }
            sparkleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
            const sparkleMaterial = new THREE.LineBasicMaterial({
                color: color,
                transparent: true,
                opacity: 0.8,
                blending: THREE.AdditiveBlending
            });
            const sparkle = new THREE.LineSegments(sparkleGeometry, sparkleMaterial);
            sparkle.position.set(
                x + 0.5 + (Math.random() - 0.5) * 0.5,
                -y + 0.5 + Math.random() * 0.5,
                (Math.random() - 0.5) * 0.5
            );
            this.scene.add(sparkle);

            this.particles.push({
                mesh: sparkle,
                velocity: new THREE.Vector3(
                    (Math.random() - 0.5) * 0.1,
                    0.3 + Math.random() * 0.2,
                    (Math.random() - 0.5) * 0.1
                ),
                life: 0.8 + Math.random() * 0.4
            });
        }
    }

    addLineEffect(startX: number, startY: number, endX: number, endY: number, color: number) {
        const points = [];
        points.push(new THREE.Vector3(startX + 0.5, -startY + 0.5, 0.1));
        points.push(new THREE.Vector3(endX + 0.5, -endY + 0.5, 0.1));

        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });

        const line = new THREE.Line(geometry, material);
        this.scene.add(line);

        const glowMaterial = new THREE.LineBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.4,
            blending: THREE.AdditiveBlending,
            linewidth: 3
        });

        const glowLine = new THREE.Line(geometry, glowMaterial);
        glowLine.scale.multiplyScalar(1.2);
        this.scene.add(glowLine);

        this.particles.push(
            {
                mesh: line,
                velocity: new THREE.Vector3(0, 0, 0),
                life: 0.5
            },
            {
                mesh: glowLine,
                velocity: new THREE.Vector3(0, 0, 0),
                life: 0.5
            }
        );

        const distance = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
        const steps = Math.ceil(distance * 5); 

        for (let i = 0; i < steps; i++) {
            const t = i / steps;
            const x = startX + (endX - startX) * t;
            const y = startY + (endY - startY) * t;

            const sparkleGeometry = new THREE.BufferGeometry();
            const vertices = [];
            for (let j = 0; j < 6; j++) {
                const angle = (j / 6) * Math.PI * 2;
                vertices.push(
                    Math.cos(angle) * 0.05, Math.sin(angle) * 0.05, 0,
                    0, 0, 0
                );
            }
            sparkleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
            const sparkleMaterial = new THREE.LineBasicMaterial({
                color: color,
                transparent: true,
                opacity: 0.6,
                blending: THREE.AdditiveBlending
            });

            const sparkle = new THREE.LineSegments(sparkleGeometry, sparkleMaterial);
            sparkle.position.set(
                x + 0.5 + (Math.random() - 0.5) * 0.2,
                -y + 0.5 + (Math.random() - 0.5) * 0.2,
                0.1
            );
            this.scene.add(sparkle);

            this.particles.push({
                mesh: sparkle,
                velocity: new THREE.Vector3(
                    (Math.random() - 0.5) * 0.05,
                    (Math.random() - 0.5) * 0.05,
                    0
                ),
                life: 0.3 + Math.random() * 0.2
            });
        }

        if (!this.isAnimating) {
            this.startAnimation();
        }
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
        const viewWidth = window.innerWidth;
        const viewHeight = window.innerHeight;
        const centerX = viewWidth / 2;
        const centerY = viewHeight / 2;

        this.backgroundEffects.forEach(effect => {
            effect.mesh.position.add(effect.velocity);
            effect.mesh.rotation.z += 0.001;
            
            if (effect.mesh.position.x > centerX) effect.mesh.position.x = -centerX;
            if (effect.mesh.position.x < -centerX) effect.mesh.position.x = centerX;
            if (effect.mesh.position.y > centerY) effect.mesh.position.y = -centerY;
            if (effect.mesh.position.y < -centerY) effect.mesh.position.y = centerY;

            const pulse = Math.sin(Date.now() * 0.001) * 0.3 + 0.7;
            effect.mesh.material.opacity = 0.2 * pulse;
        });

        this.energyFields.forEach((field, index) => {
            const time = Date.now() * 0.0005;
            field.rotation.z += 0.002;
            field.scale.x = 1 + Math.sin(time + index) * 0.2;
            field.scale.y = 1 + Math.cos(time + index) * 0.2;
            field.material.opacity = 0.1 + Math.sin(time * 2 + index) * 0.05;
        });

        this.glowRings.forEach((ring, index) => {
            const time = Date.now() * 0.001;
            ring.scale.setScalar(1 + Math.sin(time + index * 0.5) * 0.2);
            ring.rotation.z += 0.01;
            ring.material.opacity = 0.15 + Math.sin(time * 1.5 + index) * 0.05;
        });

        for (let i = this.particles.length - 1; i >= 0; i--) {
            const particle = this.particles[i];
            
            if (particle.mesh.geometry.type === 'CylinderGeometry') {
                particle.mesh.scale.y *= 0.97;
                particle.mesh.scale.x *= 0.99;
                particle.mesh.scale.z *= 0.99;
                particle.mesh.position.y += 0.3;
                particle.mesh.rotation.y += 0.02;
                particle.mesh.material.opacity *= 0.97;
                
                const pulse = Math.sin(Date.now() * 0.005) * 0.1 + 0.9;
                particle.mesh.scale.multiplyScalar(pulse);

            } else if (particle.mesh.geometry.type === 'SphereGeometry') {
                particle.mesh.position.add(particle.velocity);
                particle.velocity.y *= 0.98;
                particle.mesh.rotation.x += 0.1;
                particle.mesh.rotation.z += 0.1;
                
                const oscillation = Math.sin(Date.now() * 0.01 + particle.mesh.position.x) * 0.1 + 0.9;
                particle.mesh.scale.set(oscillation, oscillation, oscillation);
                
                if (particle.mesh.material.color) {
                    const hue = (Date.now() * 0.001) % 1;
                    particle.mesh.material.color.offsetHSL(0.001, 0, 0);
                }

            } else if (particle.mesh.type === 'LineSegments') {
                particle.mesh.position.add(particle.velocity);
                particle.mesh.rotation.z += 0.1;
                particle.mesh.scale.multiplyScalar(0.98);
                particle.mesh.material.opacity = particle.life * Math.sin(Date.now() * 0.01);
            } else if (particle.mesh.geometry.type === 'PlaneGeometry') {
                particle.mesh.material.opacity *= 0.9;
                particle.mesh.scale.x *= 1.05;
            } else if (particle.mesh instanceof THREE.Line && !(particle.mesh instanceof THREE.LineSegments)) {
                particle.mesh.material.opacity *= 0.95;
                const pulse = Math.sin(Date.now() * 0.01) * 0.2 + 0.8;
                particle.mesh.scale.y = pulse;
            } else {
                particle.mesh.rotation.x += 0.1;
                particle.mesh.rotation.y += 0.1;
                particle.mesh.rotation.z += 0.1;
                particle.velocity.y -= 0.02;
                particle.mesh.position.add(particle.velocity);
                
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

    cleanup() {
        [...this.energyFields, ...this.glowRings].forEach(object => {
            this.scene.remove(object);
            object.geometry.dispose();
            object.material.dispose();
        });
        this.energyFields = [];
        this.glowRings = [];
    }
}

export default ParticleSystem;
