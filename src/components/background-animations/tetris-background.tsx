import React, { useEffect, useRef, useState } from 'react';
import ParticleSystem from './particle-system-tetris';
import GridOverlay from './grid-overlay';
import { themes } from './themes';

interface TetrisBackgroundProps {
  selectedTheme: string;
  isBlurred?: boolean;
  isFalling?: boolean;
}

const TetrisBackground: React.FC<TetrisBackgroundProps> = ({
  selectedTheme,
  isBlurred = false,
  isFalling = false,
}) => {
  const [themeConfig, setThemeConfig] = useState(() =>
    themes.find(t => t.name === selectedTheme) || themes[0]
  );

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particleSystemRef = useRef<ParticleSystem | null>(null);
  const gridRef = useRef<GridOverlay>(new GridOverlay());
  const animationFrameRef = useRef<number>();
  const shapesRef = useRef<any[]>([]);
  const resetShapes = useRef(false);
  const [allCleared, setAllCleared] = useState(false);
  const [shouldSpawnNew, setShouldSpawnNew] = useState(false);
  const [isTemporaryFalling, setIsTemporaryFalling] = useState(false);
  const fallingTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isFalling) {
      setIsTemporaryFalling(true);
      
      // Clear any existing timer
      if (fallingTimerRef.current) {
        clearTimeout(fallingTimerRef.current);
      }
      
      // Set new timer to stop falling after 3 seconds
      fallingTimerRef.current = setTimeout(() => {
        setIsTemporaryFalling(false);
      }, 3000);
    } else {
      setIsTemporaryFalling(false);
      if (fallingTimerRef.current) {
        clearTimeout(fallingTimerRef.current);
      }
    }

    return () => {
      if (fallingTimerRef.current) {
        clearTimeout(fallingTimerRef.current);
      }
    };
  }, [isFalling]);

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

    const defaultAnimations = ['straight'];

    const shapes = shapesRef.current.length ? shapesRef.current : [];
    const themeAnimations = defaultAnimations;

    if (!themeAnimations || themeAnimations.length === 0) {
      console.warn('No animations available for theme:', themeConfig.name);
      return;
    }

    const animationPatterns = {
      leaf: (shapeObj: any, time: number, isFallingNow: boolean) => {
        if (isFallingNow) {
          if (!shapeObj.currentSpeed) {
            shapeObj.currentSpeed = shapeObj.speed;
          }
          
          shapeObj.currentSpeed = Math.min(25, shapeObj.currentSpeed * 1.05);
          shapeObj.y += shapeObj.currentSpeed * 4;
          
          const centerX = canvas.width / 2;
          const dx = centerX - shapeObj.x;
          const easing = 0.15;
          shapeObj.x += dx * easing ;
          
          shapeObj.rotation = (shapeObj.rotation || 0) + 0.02;
          
          if (shapeObj.y > canvas.height + 100) {
            shapeObj.shouldRemove = true;
          }
        } else {
          if (shapeObj.currentSpeed > shapeObj.speed) {
            shapeObj.currentSpeed = Math.max(
              shapeObj.speed,
              shapeObj.currentSpeed * 0.95
            );
          }

          if (shapeObj.y > canvas.height) {
            shapeObj.y = -shapeObj.shape.length * size * shapeObj.scale;
            shapeObj.x = Math.random() * canvas.width;
            shapeObj.shouldRemove = false;
            shapeObj.currentSpeed = shapeObj.speed;
            shapeObj.rotation = 0;
            
            const originalScale = shapeObj.originalScale || shapeObj.scale;
            const normalSpeed = 0.2 + (Math.random() * 0.3) / originalScale;
            
            Object.assign(shapeObj, {
              speed: normalSpeed,
              swayAmplitude: Math.random() * 20 + 10,
              swayFrequency: Math.random() * 0.001 + 0.0005,
              isReset: true
            });
          }
          
          const swayAmplitude = shapeObj.swayAmplitude || 30;
          const swayFrequency = shapeObj.swayFrequency || 0.0008;
          const sway = Math.sin(time * swayFrequency) * swayAmplitude * 0.0003;
          shapeObj.x += sway;
          shapeObj.y += shapeObj.currentSpeed || shapeObj.speed;
        }
      }
    };

    const createNewShapes = () => {
      const shapes = [];
      for (let i = 0; i < 20; i++) {
        const randomShape = tetrisShapes[Math.floor(Math.random() * tetrisShapes.length)];
        const color = themeConfig.colors[Math.floor(Math.random() * themeConfig.colors.length)];
        const sizeVariation = [0.4, 0.6, 1, 1.5, 2.0][Math.floor(Math.random() * 5)];
        
        shapes.push({
          shape: randomShape,
          color,
          x: Math.random() * canvas.width,
          y: -(randomShape.length * size * sizeVariation) - (Math.random() * canvas.height * 2), 
          speed: 0.2 + (Math.random() * 0.3) / sizeVariation,
          pattern: 'straight',
          opacity: 1,
          rotation: 0,
          scale: sizeVariation,
          originalScale: sizeVariation,
          isReset: false
        });
      }
      return shapes;
    };

    if (!shapesRef.current.length) {
      const shapes = [];
      
      for (let i = 0; i < 10; i++) {
        const randomShape = tetrisShapes[Math.floor(Math.random() * tetrisShapes.length)];
        const color = themeConfig.colors[Math.floor(Math.random() * themeConfig.colors.length)];
        
        const sizeVariation = [0.4, 0.6, 1, 1.5, 2.0][Math.floor(Math.random() * 5)];
        
        const randomQuadrant = Math.floor(Math.random() * 4);
        let x, y;

        switch (randomQuadrant) {
          case 0: // Top
            x = Math.random() * canvas.width;
            y = -(randomShape.length * size * sizeVariation);
            break;
          case 1: // Right
            x = canvas.width + Math.random() * canvas.height;
            y = Math.random() * canvas.height;
            break;
          case 2: // Bottom
            x = Math.random() * canvas.width;
            y = canvas.height + (randomShape.length * size * sizeVariation); 
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
          speed: 0.2 + (Math.random() * 0.3) / sizeVariation,
          pattern: 'straight',
          opacity: 1,
          isSpecial: false,
          rotation: 0,
          rotationSpeed: 0,
          scale: sizeVariation,
          originalScale: sizeVariation
        });
      }

      shapesRef.current = shapes;
    }

    const drawShape = (shape: number[][], x: number, y: number, color: string, rotation = 0, opacity = 1, scale = 1) => {
      context.save();
      const adjustedSize = size * scale;
      context.translate(x + (shape[0].length * adjustedSize) / 2, y + (shape.length * adjustedSize) / 2);
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
      const currentTime = Date.now();
      
      context.clearRect(0, 0, canvas.width, canvas.height);

      gridRef.current.draw(context, canvas.width, canvas.height, themeConfig.gridColor);

      context.shadowBlur = 10;
      context.shadowColor = themeConfig.particleColor;
      particleSystemRef.current?.update(context, themeConfig.particleColor);
      context.shadowBlur = 0;

      shapesRef.current
        .filter(shapeObj => !shapeObj.shouldRemove)
        .forEach(shapeObj => {
          context.shadowBlur = 6;
          context.shadowColor = shapeObj.color;
          const pulse = Math.sin(Date.now() / 1200) * 0.1 + 0.9; 
          context.shadowBlur *= pulse;

          shapeObj.y += shapeObj.speed;
          shapeObj.opacity = 1;
          shapeObj.scale = 1;

          animationPatterns.leaf(shapeObj, currentTime, isTemporaryFalling);

          if (shapeObj.y > canvas.height) {
            shapeObj.y = -shapeObj.shape.length * size - Math.random() * 200;
            shapeObj.x = Math.random() * canvas.width;
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
  }, [themeConfig, isBlurred, isTemporaryFalling]);

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
          pointerEvents: 'none' 
        }}
      />
    </div>
  );
};

export default TetrisBackground;
