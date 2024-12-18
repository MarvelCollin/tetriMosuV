import React, { useEffect, useRef, useState } from 'react';

const themes = [
    {
        name: 'cyberpunk',
        colors: ['#FF00FF', '#00FFFF', '#FF0000', '#FFFF00', '#7FFF00', '#FF1493', '#00FF7F'],
        background: 'radial-gradient(circle at center, #000428 0%, #004e92 100%)',
        particleColor: '#00FFFF'
    },
    {
        name: 'midnight',
        colors: ['#191970', '#000080', '#00008B', '#0000CD', '#483D8B', '#4169E1', '#6495ED'],
        background: 'linear-gradient(to bottom, #0f2027, #203a43, #2c5364)',
        particleColor: '#4169E1'
    },
    {
        name: 'neon',
        colors: ['#FF00FF', '#00FF00', '#00FFFF', '#FF0000', '#0000FF', '#FFFF00', '#FF8000'],
        background: 'linear-gradient(to right, #000000, #1a0f2e)',
        particleColor: '#FF00FF'
    },
    {
        name: 'synthwave',
        colors: ['#FF1493', '#00FFFF', '#FF69B4', '#4B0082', '#9400D3', '#FF00FF'],
        background: 'linear-gradient(45deg, #200122, #6f0000)',
        particleColor: '#FF1493'
    }
];

class ParticleSystem {
    particles: any[];
    
    constructor(count: number) {
        this.particles = Array.from({ length: count }, () => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            size: Math.random() * 2 + 1,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5
        }));
    }

    update(context: CanvasRenderingContext2D, particleColor: string) {
        this.particles.forEach(particle => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;

            if (particle.x < 0) particle.x = window.innerWidth;
            if (particle.x > window.innerWidth) particle.x = 0;
            if (particle.y < 0) particle.y = window.innerHeight;
            if (particle.y > window.innerHeight) particle.y = 0;

            context.beginPath();
            context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            context.fillStyle = particleColor;
            context.fill();
        });
    }
}

// Add grid overlay class
class GridOverlay {
    draw(context: CanvasRenderingContext2D, width: number, height: number) {
        context.strokeStyle = 'rgba(0, 255, 255, 0.1)';
        context.lineWidth = 1;

        for (let x = 0; x < width; x += 50) {
            context.beginPath();
            context.moveTo(x, 0);
            context.lineTo(x, height);
            context.stroke();
        }

        for (let y = 0; y < height; y += 50) {
            context.beginPath();
            context.moveTo(0, y);
            context.lineTo(width, y);
            context.stroke();
        }
    }
}

const TetrisBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isPaused, setIsPaused] = useState(false);
    const [selectedTheme] = useState(themes[Math.floor(Math.random() * themes.length)]);
    const particleSystemRef = useRef<ParticleSystem | null>(null);
    const gridRef = useRef<GridOverlay>(new GridOverlay());

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

        const defaultAnimations = ['straight', 'zigzag', 'bounce'];
        
        const shapes = [];
        const themeAnimations = themeSpecificAnimations[selectedTheme.name as keyof typeof themeSpecificAnimations] || defaultAnimations;

        if (!themeAnimations || themeAnimations.length === 0) {
            console.warn('No animations available for theme:', selectedTheme.name);
            return;
        }

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

        for (let i = 0; i < 20; i++) {
            const shape = tetrisShapes[Math.floor(Math.random() * tetrisShapes.length)];
            const color = selectedTheme.colors[Math.floor(Math.random() * selectedTheme.colors.length)];
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            // Safely get a random animation pattern
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

        // Initialize particle system
        particleSystemRef.current = new ParticleSystem(50);

        // Apply theme background to container
        document.body.style.background = selectedTheme.background;

        // Add glow effect to shapes
        context.shadowBlur = 15;
        context.shadowColor = selectedTheme.colors[0];

        const animate = () => {
            if (isPaused) return;
            context.clearRect(0, 0, canvas.width, canvas.height);

            // Draw grid overlay
            gridRef.current.draw(context, canvas.width, canvas.height);

            // Draw enhanced particles with glow
            context.shadowBlur = 10;
            context.shadowColor = selectedTheme.particleColor;
            particleSystemRef.current?.update(context, selectedTheme.particleColor);
            context.shadowBlur = 0;

            // Draw shapes with enhanced glow
            shapes.forEach(shapeObj => {
                context.shadowBlur = 20;
                context.shadowColor = shapeObj.color;
                // Add pulse effect
                const pulse = Math.sin(Date.now() / 1000) * 0.1 + 0.9;
                context.shadowBlur *= pulse;
                
                animationPatterns[shapeObj.pattern as keyof typeof animationPatterns](shapeObj);
                drawShape(
                    shapeObj.shape,
                    shapeObj.x,
                    shapeObj.y,
                    shapeObj.color,
                    shapeObj.pattern === 'rotate' ? shapeObj.rotation : 0,
                    shapeObj.opacity * pulse
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
    }, [isPaused, selectedTheme]);

  return (
    <>
        <div 
            className="fixed top-0 left-0 w-full h-full"
            style={{
                background: selectedTheme.background,
                opacity: 0.8,
                zIndex: -1
            }}
        />
        <div 
            className="fixed top-0 left-0 w-full h-full pointer-events-none"
            style={{
                background: `radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.3) 100%)`,
                zIndex: 1
            }}
        />
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full"
            style={{ zIndex: 0 }}
        />
    </>
  );
};

export default TetrisBackground;
