import * as THREE from 'three';

// Define multiple color themes
export const THEMES = {
    neon: {
        colors: [
            0x00ffff, // Cyan
            0xff1493, // Deep Pink
            0x7fff00, // Chartreuse
            0xff4500, // Orange Red
            0x4169e1, // Royal Blue
            0xffd700, // Gold
            0x9400d3  // Violet
        ],
        background: 0x000811,
        grid: 0x0088ff,
        border: 0x00ffff
    },
    retro: {
        colors: [
            0xff0000, // Red
            0x00ff00, // Green
            0x0000ff, // Blue
            0xffff00, // Yellow
            0xff00ff, // Magenta
            0x00ffff, // Cyan
            0xffa500  // Orange
        ],
        background: 0x111111,
        grid: 0x444444,
        border: 0x888888
    },
    pastel: {
        colors: [
            0xffb3ba, // Pastel Pink
            0xbaffc9, // Pastel Mint
            0xbae1ff, // Pastel Blue
            0xffffba, // Pastel Yellow
            0xffdfba, // Pastel Peach
            0xe0bbff, // Pastel Purple
            0xffd1dc  // Pastel Rose
        ],
        background: 0x2a2a2a,
        grid: 0x444444,
        border: 0x666666
    },
    synthwave: {
        colors: [
            0xff00ff, // Hot Pink
            0x00ffff, // Cyan
            0xff1493, // Deep Pink
            0x4169e1, // Royal Blue
            0xff4500, // Orange Red
            0x7fff00, // Chartreuse
            0xffd700  // Gold
        ],
        background: 0x150025, // Deep Purple background
        grid: 0xff00ff,      // Pink grid
        border: 0x00ffff     // Cyan border
    }
};

// Change default theme to synthwave
const DEFAULT_THEME = 'synthwave';

// Modify theme selection logic to be more robust
let currentTheme = (() => {
    try {
        const savedTheme = localStorage.getItem('selectedTheme');
        // Always set a default theme first
        let theme = THEMES[DEFAULT_THEME];
        
        // Try to use saved theme if it exists
        if (savedTheme && THEMES[savedTheme]) {
            theme = THEMES[savedTheme];
        }
        
        // Ensure theme has all required properties
        if (!theme.colors || theme.colors.length !== 7) {
            console.warn('Invalid theme structure, falling back to default');
            theme = THEMES[DEFAULT_THEME];
        }

        return theme;
    } catch (error) {
        console.error('Error initializing theme:', error);
        return THEMES[DEFAULT_THEME];
    }
})();

export const COLORS = currentTheme.colors;

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

// Update setCurrentTheme to be more robust
export const setCurrentTheme = (themeName: keyof typeof THEMES) => {
    try {
        // Ensure theme exists and is valid
        if (!THEMES[themeName] || !THEMES[themeName].colors || THEMES[themeName].colors.length !== 7) {
            console.warn(`Invalid theme ${themeName}, using default theme`);
            themeName = DEFAULT_THEME as keyof typeof THEMES;
        }

        currentTheme = THEMES[themeName];
        localStorage.setItem('selectedTheme', themeName);

        // Create a new copy of colors array
        const newColors = [...currentTheme.colors];
        COLORS.length = 0;
        COLORS.push(...newColors);

        // Update materials synchronously
        MATERIALS.forEach((material, i) => {
            const color = newColors[i];
            material.color.setHex(color);
            material.emissive.copy(new THREE.Color(color).multiplyScalar(0.3));
        });

        // Update shadow materials synchronously
        SHADOW_MATERIALS.forEach((material, i) => {
            const color = newColors[i];
            material.color.setHex(color);
            material.emissive.copy(new THREE.Color(color).multiplyScalar(0.15));
        });

    } catch (error) {
        console.error('Error setting theme:', error);
        // Revert to default theme
        currentTheme = THEMES[DEFAULT_THEME];
        COLORS.length = 0;
        COLORS.push(...THEMES[DEFAULT_THEME].colors);
    }
};

export { currentTheme };
