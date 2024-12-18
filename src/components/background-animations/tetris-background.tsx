import React, { useEffect, useRef, useState } from 'react';

const TetrisBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');
        if (!canvas || !context) return;
        const size = 25;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth * window.devicePixelRatio;
            canvas.height = window.innerHeight * window.devicePixelRatio;
            context.scale(window.devicePixelRatio, window.devicePixelRatio);
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const tetrisShapes = [
            [[1, 1, 1, 1]], // I
            [[1, 1], [1, 1]], // O
            [[0, 1, 0], [1, 1, 1]], // T
            [[1, 1, 0], [0, 1, 1]], // S
            [[0, 1, 1], [1, 1, 0]], // Z
            [[1, 1, 1], [1, 0, 0]], // L
            [[1, 1, 1], [0, 0, 1]], // J
        ];

        const themes = [
            {
                name: 'classic',
                colors: ['#FF0D72', '#0DC2FF', '#0DFF72', '#F538FF', '#FF8E0D', '#FFE138', '#3877FF']
            },
            {
                name: 'pastel',
                colors: ['#FFB3BA', '#BAFFC9', '#BAE1FF', '#FFFFBA', '#FFB3F7', '#B3F7FF', '#F7B3FF']
            },
            {
                name: 'neon',
                colors: ['#FF00FF', '#00FF00', '#00FFFF', '#FF0000', '#0000FF', '#FFFF00', '#FF8000']
            },
            {
                name: 'monochrome',
                colors: ['#000000', '#1A1A1A', '#333333', '#4D4D4D', '#666666', '#808080', '#999999']
            },
            {
                name: 'earth',
                colors: ['#8B4513', '#228B22', '#4682B4', '#CD853F', '#556B2F', '#8B0000', '#2F4F4F']
            },
            {
                name: 'sunset',
                colors: ['#FF7F50', '#FF6B6B', '#FFA07A', '#FF4500', '#FF8C00', '#FFD700', '#FFA500']
            },
            {
                name: 'ocean',
                colors: ['#00008B', '#000080', '#0000CD', '#0000FF', '#1E90FF', '#00BFFF', '#87CEEB']
            },
            {
                name: 'forest',
                colors: ['#006400', '#228B22', '#32CD32', '#90EE90', '#98FB98', '#3CB371', '#2E8B57']
            },
            {
                name: 'candy',
                colors: ['#FF69B4', '#FF1493', '#FF00FF', '#DA70D6', '#BA55D3', '#9370DB', '#8A2BE2']
            },
            {
                name: 'retro',
                colors: ['#DEB887', '#D2691E', '#CD853F', '#D2B48C', '#BC8F8F', '#F4A460', '#DAA520']
            },
            {
                name: 'cyberpunk',
                colors: ['#FF00FF', '#00FFFF', '#FF0000', '#FFFF00', '#7FFF00', '#FF1493', '#00FF7F']
            },
            {
                name: 'grayscale',
                colors: ['#141414', '#292929', '#3D3D3D', '#525252', '#666666', '#7A7A7A', '#8F8F8F']
            },
            {
                name: 'midnight',
                colors: ['#191970', '#000080', '#00008B', '#0000CD', '#483D8B', '#4169E1', '#6495ED']
            }
        ];

        const themeSpecificAnimations = {
            classic: ['straight', 'zigzag'],
            pastel: ['straight', 'spiral', 'rotate'],
            neon: ['zigzag', 'bounce', 'spiral'],
            monochrome: ['straight', 'rotate'],
            earth: ['straight', 'bounce'],
            sunset: ['spiral', 'rotate'],
            ocean: ['zigzag', 'wave'],
            forest: ['straight', 'sway'],
            candy: ['bounce', 'spiral', 'rotate'],
            retro: ['straight', 'bounce'],
            cyberpunk: ['glitch', 'zigzag', 'bounce'],
            grayscale: ['straight', 'fade'],
            midnight: ['float', 'spiral']
        };

        const animationPatterns = {
            straight: (shapeObj: any) => {
                shapeObj.y += shapeObj.speed;
                if (shapeObj.y > canvas.height) {
                    shapeObj.y = -shapeObj.shape.length * size;
                    shapeObj.x = Math.random() * canvas.width;
                }
            },
            zigzag: (shapeObj: any) => {
                shapeObj.y += shapeObj.speed;
                shapeObj.x += Math.sin(shapeObj.y / 50) * 2;
                if (shapeObj.y > canvas.height) {
                    shapeObj.y = -shapeObj.shape.length * size;
                    shapeObj.x = Math.random() * canvas.width;
                }
            },
            spiral: (shapeObj: any) => {
                shapeObj.angle = (shapeObj.angle || 0) + shapeObj.speed * 0.02;
                shapeObj.y += shapeObj.speed;
                shapeObj.x += Math.cos(shapeObj.angle) * 2;
                if (shapeObj.y > canvas.height) {
                    shapeObj.y = -shapeObj.shape.length * size;
                    shapeObj.x = Math.random() * canvas.width;
                    shapeObj.angle = 0;
                }
            },
            bounce: (shapeObj: any) => {
                shapeObj.y += shapeObj.speed;
                if (!shapeObj.bounceX) shapeObj.bounceX = 1;
                shapeObj.x += shapeObj.bounceX;
                if (shapeObj.x > canvas.width || shapeObj.x < 0) {
                    shapeObj.bounceX *= -1;
                }
                if (shapeObj.y > canvas.height) {
                    shapeObj.y = -shapeObj.shape.length * size;
                    shapeObj.x = Math.random() * canvas.width;
                }
            },
            rotate: (shapeObj: any) => {
                shapeObj.rotation = (shapeObj.rotation || 0) + 0.02;
                shapeObj.y += shapeObj.speed;
                if (shapeObj.y > canvas.height) {
                    shapeObj.y = -shapeObj.shape.length * size;
                    shapeObj.x = Math.random() * canvas.width;
                    shapeObj.rotation = 0;
                }
            },
            wave: (shapeObj: any) => {
                shapeObj.y += shapeObj.speed;
                shapeObj.x += Math.sin(shapeObj.y / 100) * 3;
                if (shapeObj.y > canvas.height) {
                    shapeObj.y = -shapeObj.shape.length * size;
                    shapeObj.x = Math.random() * canvas.width;
                }
            },
            sway: (shapeObj: any) => {
                shapeObj.y += shapeObj.speed;
                shapeObj.x += Math.sin(Date.now() / 1000) * 1;
                if (shapeObj.y > canvas.height) {
                    shapeObj.y = -shapeObj.shape.length * size;
                    shapeObj.x = Math.random() * canvas.width;
                }
            },
            glitch: (shapeObj: any) => {
                shapeObj.y += shapeObj.speed;
                if (Math.random() > 0.95) {
                    shapeObj.x += (Math.random() - 0.5) * 20;
                }
                if (shapeObj.y > canvas.height) {
                    shapeObj.y = -shapeObj.shape.length * size;
                    shapeObj.x = Math.random() * canvas.width;
                }
            },
            fade: (shapeObj: any) => {
                shapeObj.y += shapeObj.speed;
                shapeObj.opacity = (shapeObj.opacity || 1) - 0.003;
                if (shapeObj.opacity < 0.3) shapeObj.opacity = 1;
                if (shapeObj.y > canvas.height) {
                    shapeObj.y = -shapeObj.shape.length * size;
                    shapeObj.x = Math.random() * canvas.width;
                    shapeObj.opacity = 1;
                }
            },
            float: (shapeObj: any) => {
                shapeObj.y += shapeObj.speed * 0.5;
                shapeObj.x += Math.sin(Date.now() / 2000 + shapeObj.y / 100) * 1;
                if (shapeObj.y > canvas.height) {
                    shapeObj.y = -shapeObj.shape.length * size;
                    shapeObj.x = Math.random() * canvas.width;
                }
            }
        };

        const shapes = [];
        const selectedTheme = themes[Math.floor(Math.random() * themes.length)];
        const themeAnimations = themeSpecificAnimations[selectedTheme.name as keyof typeof themeSpecificAnimations];

        for (let i = 0; i < 20; i++) {
            const shape = tetrisShapes[Math.floor(Math.random() * tetrisShapes.length)];
            const color = selectedTheme.colors[Math.floor(Math.random() * selectedTheme.colors.length)];
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const pattern = themeAnimations[Math.floor(Math.random() * themeAnimations.length)];
            shapes.push({ 
                shape, 
                color, 
                x, 
                y, 
                speed: Math.random() * 2 + 1,
                pattern,
                opacity: 1
            });
        }

        const drawShape = (shape: number[][], x: number, y: number, color: string, rotation = 0, opacity = 1) => {
            context.save();
            context.translate(x + (shape[0].length * size) / 2, y + (shape.length * size) / 2);
            context.rotate(rotation);
            context.translate(-(shape[0].length * size) / 2, -(shape.length * size) / 2);
            context.globalAlpha = opacity;
            
            context.fillStyle = color;
            shape.forEach((row, rowIndex) => {
                row.forEach((cell, cellIndex) => {
                    if (cell) {
                        context.fillRect(cellIndex * size, rowIndex * size, size, size);
                    }
                });
            });
            context.restore();
        };

        const animate = () => {
            if (isPaused) return;
            context.clearRect(0, 0, canvas.width, canvas.height);
            shapes.forEach(shapeObj => {
                animationPatterns[shapeObj.pattern as keyof typeof animationPatterns](shapeObj);
                drawShape(
                    shapeObj.shape, 
                    shapeObj.x, 
                    shapeObj.y, 
                    shapeObj.color,
                    shapeObj.pattern === 'rotate' ? shapeObj.rotation : 0,
                    shapeObj.opacity
                );
            });
            requestAnimationFrame(animate);
        };

        const handleMouseEnter = () => {
            setIsPaused(true);
        };

        const handleMouseLeave = () => {
            setIsPaused(false);
            requestAnimationFrame(animate);
        };

        canvas.addEventListener('mouseenter', handleMouseEnter);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            canvas.removeEventListener('mouseenter', handleMouseEnter);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [isPaused]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full"
    ></canvas>
  );
};

export default TetrisBackground;
