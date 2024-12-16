import * as THREE from 'three';

export const COLORS = [
    0x00ffff,
    0xffff00,
    0x800080,
    0x00ff00,
    0xff0000,
    0x0000ff,
    0xffa500,
];

export const BLOCK_GEOMETRY = new THREE.BoxGeometry(1, 1, 1);
export const MATERIALS = COLORS.map(color => 
    new THREE.MeshPhongMaterial({
        color,
        opacity: 0.9,
        transparent: true,
        shininess: 50,
        specular: 0x666666,
        emissive: new THREE.Color(color).multiplyScalar(0.2)
    })
);

export const SHADOW_MATERIALS = COLORS.map(color => 
    new THREE.MeshPhongMaterial({
        color: new THREE.Color(color).multiplyScalar(0.3),
        opacity: 0.3,
        transparent: true,
        shininess: 0,
        emissive: new THREE.Color(color).multiplyScalar(0.1)
    })
);
