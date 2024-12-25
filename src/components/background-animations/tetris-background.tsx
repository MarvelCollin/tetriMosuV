import React, { useEffect, useRef, useState } from 'react';
import ParticleSystem from './particle-system-tetris';
import GridOverlay from './grid-overlay';
import { themes } from './themes';

const TetrisBackground: React.FC<TetrisBackgroundProps> = ({
  selectedTheme,
  isBlurred = false,
  isInteractive = false,
  isTransitioning = false
}) => {
  const [themeConfig, setThemeConfig] = useState(() =>
    themes.find(t => t.name === selectedTheme) || themes[0]
  );

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particleSystemRef = useRef<ParticleSystem | null>(null);
  const gridRef = useRef<GridOverlay>(new GridOverlay());
  const animationFrameRef = useRef<number>();
  const shapesRef = useRef<any[]>([]);

  // useEffect for handling theme changes and animation loop
  useEffect(() => {
    const newTheme = themes.find(t => t.name === selectedTheme) || themes[0];
    setThemeConfig(newTheme);
  }, [selectedTheme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    context.filter = isBlurred ? 'blur(2px)' : 'none';

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

    const shapes = shapesRef.current.length ? shapesRef.current : [];
    const themeAnimations = themeSpecificAnimations[themeConfig.name as keyof typeof themeSpecificAnimations] || defaultAnimations;

    if (!themeAnimations || themeAnimations.length === 0) {
      console.warn('No animations available for theme:', themeConfig.name);
      return;
    }

    const animationPatterns = {
      straight: (shapeObj: any) => {
        shapeObj.y += shapeObj.speed * 1.5; // Added multiplier
        if (shapeObj.y > canvas.height) {
          shapeObj.y = -shapeObj.shape.length * size;
          shapeObj.x = Math.random() * canvas.width;
        }
      },
      zigzag: (shapeObj: any) => {
        shapeObj.y += shapeObj.speed * 1.5;
        shapeObj.x += Math.sin(shapeObj.y / 30) * 3; // Adjusted frequency and amplitude
        if (shapeObj.y > canvas.height) {
          shapeObj.y = -shapeObj.shape.length * size;
          shapeObj.x = Math.random() * canvas.width;
        }
      },
      spiral: (shapeObj: any) => {
        shapeObj.angle = (shapeObj.angle || 0) + shapeObj.speed * 0.03; // Increased from 0.02 to 0.03
        shapeObj.y += shapeObj.speed * 1.5;
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

    if (!shapesRef.current.length) {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const shapes = [];
      
      for (let i = 0; i < 20; i++) {
        const randomShape = tetrisShapes[Math.floor(Math.random() * tetrisShapes.length)];
        const color = themeConfig.colors[Math.floor(Math.random() * themeConfig.colors.length)];
        
        const randomQuadrant = Math.floor(Math.random() * 4);
        let x, y;

        switch (randomQuadrant) {
          case 0: // Top
            x = Math.random() * canvas.width;
            y = -Math.random() * canvas.height;
            break;
          case 1: // Right
            x = canvas.width + Math.random() * canvas.height;
            y = Math.random() * canvas.height;
            break;
          case 2: // Bottom
            x = Math.random() * canvas.width;
            y = canvas.height + Math.random() * canvas.height;
            break;
          case 3: // Left
            x = -Math.random() * canvas.height;
            y = Math.random() * canvas.height;
            break;
        }

        shapes.push({
          shape: randomShape,
          color,
          x,
          y,
          speed: Math.random() * 3 + 2, // Increased from (2 + 1) to (3 + 2)
          pattern: 'straight',
          opacity: 1,
          isSpecial: false,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.08, // Increased from 0.04 to 0.08
          scale: 1
        });
      }

      shapesRef.current = shapes;
    }

    let transitionTimer = 0;
    const transitionDuration = 180; // 3 seconds at 60fps

    const drawShape = (shape: number[][], x: number, y: number, color: string, rotation = 0, opacity = 1, scale = 1) => {
      context.save();
      context.translate(x + (shape[0].length * size) / 2, y + (shape.length * size) / 2);
      context.rotate(rotation);
      context.scale(scale, scale);
      context.translate(-(shape[0].length * size) / 2, -(shape.length * size) / 2);
      context.globalAlpha = opacity;

      context.shadowBlur = 15;
      context.shadowColor = color;
      for (let i = 0; i < 2; i++) {
        context.fillStyle = color;
        shape.forEach((row, rowIndex) => {
          row.forEach((cell, cellIndex) => {
            if (cell) {
              if (i === 0) {
                context.shadowBlur = 20;
                context.globalAlpha = opacity * 0.5;
              }
              else {
                context.shadowBlur = 10;
                context.globalAlpha = opacity;
              }
              context.fillRect(cellIndex * size, rowIndex * size, size, size);
            }
          });
        });
      }

      context.shadowBlur = 5;
      context.shadowColor = 'white';
      context.globalAlpha = opacity * 0.7;
      shape.forEach((row, rowIndex) => {
        row.forEach((cell, cellIndex) => {
          if (cell) {
            context.fillRect(cellIndex * size + 2, rowIndex * size + 2, size - 4, size - 4);
          }
        });
      });

      context.restore();
    };

    particleSystemRef.current = new ParticleSystem(50);

    document.body.style.background = themeConfig.background;

    context.shadowBlur = 15;
    context.shadowColor = themeConfig.colors[0];

    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      gridRef.current.draw(context, canvas.width, canvas.height, themeConfig.gridColor);

      context.shadowBlur = 10;
      context.shadowColor = themeConfig.particleColor;
      particleSystemRef.current?.update(context, themeConfig.particleColor);
      context.shadowBlur = 0;

      shapesRef.current.forEach(shapeObj => {
        context.shadowBlur = 6;
        context.shadowColor = shapeObj.color;
        const pulse = Math.sin(Date.now() / 1000) * 0.1 + 0.9;
        context.shadowBlur *= pulse;

        if (isTransitioning) {
          const transitionSpeed = 0.3;
          const targetY = shapeObj.y - shapeObj.speed;
          
          shapeObj.y += (targetY - shapeObj.y) * transitionSpeed;
          
          shapeObj.x += Math.sin(Date.now() / 1000 + shapeObj.y / 100) * 0.5;
          
          shapeObj.rotation = (shapeObj.rotation || 0) + 0.01;
          
          const targetScale = 0.8;
          shapeObj.scale = shapeObj.scale || 1;
          shapeObj.scale += (targetScale - shapeObj.scale) * 0.05;

          if (shapeObj.y + shapeObj.shape.length * size < 0) {
            shapeObj.opacity = (shapeObj.opacity || 1) * 0.95;
            if (shapeObj.opacity < 0.1) {
              shapeObj.y = canvas.height;
              shapeObj.x = Math.random() * canvas.width;
              shapeObj.opacity = 0;
              shapeObj.scale = 1;
              setTimeout(() => {
                shapeObj.opacity = 1;
              }, Math.random() * 1000);
            }
          }
        } else {
          shapeObj.y += shapeObj.speed;
          shapeObj.rotation += shapeObj.rotationSpeed || 0.01;
          shapeObj.opacity = 1;
          shapeObj.scale = 1;

          if (shapeObj.y > canvas.height) {
            shapeObj.y = -shapeObj.shape.length * size - Math.random() * 200;
            shapeObj.x = Math.random() * canvas.width;
          }
        }

        drawShape(
          shapeObj.shape,
          shapeObj.x,
          shapeObj.y,
          shapeObj.color,
          shapeObj.rotation,
          shapeObj.opacity * pulse,
          shapeObj.scale || 1
        );
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) { 
        cancelAnimationFrame(animationFrameRef.current); 
      } 
      window.removeEventListener('resize', resizeCanvas); 
    };
  }, [themeConfig, isBlurred]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isInteractive) return;

      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;

      shapesRef.current.forEach(shapeObj => {
        const dx = mouseX - shapeObj.x;
        const dy = mouseY - shapeObj.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        if (distance < maxDistance) {
          const force = (1 - distance / maxDistance) * 8;
          const angle = Math.atan2(dy, dx);

          shapeObj.x -= Math.cos(angle) * force;
          shapeObj.y -= Math.sin(angle) * force;

          shapeObj.rotation = (shapeObj.rotation || 0) + force * 0.1;

          shapeObj.scale = 1 + (1 - distance / maxDistance) * 0.3;
        } else {
          shapeObj.scale = 1;
        }
      });
    };

    if (isInteractive) {
      canvas.addEventListener('mousemove', handleMouseMove);
    } else {
      canvas.removeEventListener('mousemove', handleMouseMove);
    }

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isInteractive]);

  return (
    <div className="fixed inset-0">
      <div className={`absolute inset-0 ${themeConfig.background}`}></div>
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
        style={{
          mixBlendMode: 'lighten',
          filter: isBlurred ? 'blur(2px)' : 'none',
          transition: 'filter 1s ease', 
          pointerEvents: isInteractive ? 'auto' : 'none'
        }}
      />
    </div>
  );
};

export default TetrisBackground;
