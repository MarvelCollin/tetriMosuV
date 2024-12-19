import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';

class GameFontLoader {
    private static instance: GameFontLoader;
    private fontPromise: Promise<any> | null = null;
    
    private constructor() {}
    
    static getInstance() {
        if (!GameFontLoader.instance) {
            GameFontLoader.instance = new GameFontLoader();
        }
        return GameFontLoader.instance;
    }

    loadFont(): Promise<any> {
        if (!this.fontPromise) {
            this.fontPromise = new Promise((resolve, reject) => {
                const loader = new FontLoader();
                // Try multiple font URLs in case one fails
                const fontUrls = [
                    '/fonts/PressStart2P_Regular.json',
                    'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/fonts/helvetiker_regular.typeface.json', // fallback
                ];

                const tryLoadFont = (index: number) => {
                    if (index >= fontUrls.length) {
                        reject(new Error('Failed to load any font'));
                        return;
                    }

                    loader.load(fontUrls[index], 
                        (font) => resolve(font),
                        undefined,
                        () => tryLoadFont(index + 1)
                    );
                };

                tryLoadFont(0);
            });
        }
        return this.fontPromise;
    }
}

export default GameFontLoader;
