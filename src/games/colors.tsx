import * as THREE from 'three';

export const COLORS = [
    0x00ffff, // Cyan
    0xff1493, // Deep Pink
    0x7fff00, // Chartreuse
    0xff4500, // Orange Red
    0x4169e1, // Royal Blue
    0xffd700, // Gold
    0x9400d3, // Violet
];

// Add bevel to blocks
export const BLOCK_GEOMETRY = new THREE.BoxGeometry(0.92, 0.92, 1.2);

export const MATERIALS = COLORS.map(color => 
    new THREE.MeshPhongMaterial({
        color,
        opacity: 0.95,
        transparent: true,
        shininess: 100,
        specular: 0xffffff,
        emissive: new THREE.Color(color).multiplyScalar(0.3),
        flatShading: false,
        metalness: 0.5,
        roughness: 0.2,
    })
);

export const SHADOW_MATERIALS = COLORS.map(color => 
    new THREE.MeshPhongMaterial({
        color: color,
        opacity: 0.2,
        transparent: true,
        shininess: 30,
        emissive: new THREE.Color(color).multiplyScalar(0.15),
        side: THREE.DoubleSide,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        wireframe: true
    })
);
