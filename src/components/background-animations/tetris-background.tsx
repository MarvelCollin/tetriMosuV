import React, { useEffect, useRef, useState } from 'react';
import ParticleSystem from './particle-system-tetris';
import GridOverlay from './grid-overlay';
import { themes } from './themes';
import { ITetrisBackground } from '../../interfaces/ITetrisBackground';

const TetrisBackground: React.FC<ITetrisBackground> = ({
  selectedTheme,
}) => {
  const [themeConfig, setThemeConfig] = useState(() =>
    themes.find(t => t.name === selectedTheme) || themes[0]
  );

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particleSystemRef = useRef<ParticleSystem | null>(null);
  const gridRef = useRef<GridOverlay>(new GridOverlay());
  const animationFrameRef = useRef<number>();
  const shapesRef = useRef<any[]>([]);

  const getResponsiveSize = () => {
    const vw = window.innerWidth * 0.02; // 2vw
    return Math.min(Math.max(vw, 15), 30); // min 15px, max 30px
  };

  const createNewShapes = (count: number) => {
    const shapes = [];
    const responsiveSize = getResponsiveSize();
    
    for (let i = 0; i < count; i++) {
      const randomShape = [
        [[1, 1, 1, 1]], // I
        [[1, 1], [1, 1]], // O
        [[0, 1, 0], [1, 1, 1]], // T
        [[1, 1, 0], [0, 1, 1]], // S
        [[0, 1, 1], [1, 1, 0]], // Z
        [[1, 1, 1], [1, 0, 0]], // L
        [[1, 1, 1], [0, 0, 1]], // J
      ][Math.floor(Math.random() * 7)];
      
      const color = themeConfig.colors[Math.floor(Math.random() * themeConfig.colors.length)];
      const sizeVariation = [0.4, 0.6, 1, 1.5, 2.0][Math.floor(Math.random() * 5)];
      
      shapes.push({
        shape: randomShape,
        color,
        x: Math.random() * window.innerWidth,
        y: -(randomShape.length * responsiveSize * sizeVariation) - (Math.random() * window.innerHeight * 2), 
        speed: 2 + (Math.random() * 0.3) / sizeVariation,
        pattern: 'straight',
        opacity: 1,
        rotation: 0,
        scale: sizeVariation * (window.innerWidth / 1920), // Base scale on viewport width
        originalScale: sizeVariation * (window.innerWidth / 1920),
        isReset: false
      });
    }
    return shapes;
  };

  useEffect(() => {
    if (!shapesRef.current.length) {
      shapesRef.current = createNewShapes(10);
    }
  }, []);

  useEffect(() => {
    const newTheme = themes.find(t => t.name === selectedTheme) || themes[0];
    setThemeConfig(newTheme);
    
    document.body.style.background = newTheme.background;

    shapesRef.current = shapesRef.current.map(shape => ({
      ...shape,
      color: newTheme.colors[Math.floor(Math.random() * newTheme.colors.length)]
    }));
  }, [selectedTheme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    const size = getResponsiveSize();

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const displayWidth = window.innerWidth;
      const displayHeight = window.innerHeight;
      
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
      
      canvas.style.width = `${displayWidth}px`;
      canvas.style.height = `${displayHeight}px`;
      
      context.scale(dpr, dpr);

      // Update existing shapes scale when zooming
      shapesRef.current = shapesRef.current.map(shape => ({
        ...shape,
        scale: shape.originalScale * (window.innerWidth / 1920),
      }));
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
      leaf: (shapeObj: any, time: number) => {
        shapeObj.y += shapeObj.speed;
        if (shapeObj.y > canvas.height) {
          shapeObj.y = -shapeObj.shape.length * size - Math.random() * 200;
          shapeObj.x = Math.random() * canvas.width;
        }
      }
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
      const responsiveSize = getResponsiveSize();
      const adjustedSize = responsiveSize * scale;
      
      context.save();
      context.translate(x + (shape[0].length * adjustedSize) / 2, y + (shape.length * adjustedSize) / 2);
      context.rotate(rotation);
      context.scale(scale, scale);
      context.translate(-(shape[0].length * responsiveSize) / 2, -(shape.length * responsiveSize) / 2);
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
              context.fillRect(cellIndex * responsiveSize, rowIndex * responsiveSize, responsiveSize, responsiveSize);
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
            context.fillRect(cellIndex * responsiveSize + 2, rowIndex * responsiveSize + 2, responsiveSize - 4, responsiveSize - 4);
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

          animationPatterns.leaf(shapeObj, currentTime);

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
  }, [themeConfig]);

  return (
    <div className="fixed inset-0">
      <div className={`absolute inset-0 ${themeConfig.background}`}></div>
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
        style={{
          mixBlendMode: 'lighten',
          transition: 'all 0.3s ease',
          pointerEvents: 'none' 
        }}
      />
    </div>
  );
};

export default TetrisBackground;
