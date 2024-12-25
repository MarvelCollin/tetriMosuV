import React, { useEffect, useRef, useState } from 'react';
import ParticleSystem from './particle-system-tetris';
import GridOverlay from './grid-overlay';
import { themes } from './themes';

const TetrisBackground: React.FC<TetrisBackgroundProps> = ({
  selectedTheme,
  isBlurred = false,
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

    const defaultAnimations = ['straight'];

    const shapes = shapesRef.current.length ? shapesRef.current : [];
    const themeAnimations = defaultAnimations;

    if (!themeAnimations || themeAnimations.length === 0) {
      console.warn('No animations available for theme:', themeConfig.name);
      return;
    }

    const animationPatterns = {
      leaf: (shapeObj: any, time: number) => {
        // Gentle horizontal swaying using sine wave
        const swayAmplitude = shapeObj.swayAmplitude || 50; // pixels
        const swayFrequency = shapeObj.swayFrequency || 0.001; // radians per ms
        shapeObj.x += Math.sin(time * swayFrequency) * swayAmplitude * 0.001;
        
        // Continuous downward movement
        shapeObj.y += shapeObj.speed * 1.2;
        
        if (shapeObj.y > canvas.height) {
          shapeObj.y = -shapeObj.shape.length * size;
          shapeObj.x = Math.random() * canvas.width;
          shapeObj.swayAmplitude = Math.random() * 30 + 20; // Random sway amplitude between 20 and 50
          shapeObj.swayFrequency = Math.random() * 0.002 + 0.001; // Random sway frequency between 0.001 and 0.003
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
          speed: Math.random() * 3 + 2,
          pattern: 'straight',
          opacity: 1,
          isSpecial: false,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.08, 
          scale: 1
        });
      }

      shapesRef.current = shapes;
    }

    let transitionTimer = 0;
    const transitionDuration = 180; 

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
      const currentTime = Date.now();
      
      context.clearRect(0, 0, canvas.width, canvas.height);

      gridRef.current.draw(context, canvas.width, canvas.height, themeConfig.gridColor);

      context.shadowBlur = 10;
      context.shadowColor = themeConfig.particleColor;
      particleSystemRef.current?.update(context, themeConfig.particleColor);
      context.shadowBlur = 0;

      shapesRef.current.forEach(shapeObj => {
        context.shadowBlur = 6;
        context.shadowColor = shapeObj.color;
        const pulse = Math.sin(Date.now() / 1200) * 0.1 + 0.9; 
        context.shadowBlur *= pulse;

        shapeObj.y += shapeObj.speed;
        shapeObj.rotation += shapeObj.rotationSpeed || 0.08;
        shapeObj.opacity = 1;
        shapeObj.scale = 1;

        animationPatterns.leaf(shapeObj, currentTime);

        shapeObj.rotation += shapeObj.rotationSpeed;

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
  }, [themeConfig, isBlurred]);

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
