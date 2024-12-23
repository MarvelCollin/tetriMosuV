import React, { useEffect, useRef, useState } from 'react';

const themes = [
  {
    name: 'cyberpunk',
    colors: ['#FF00FF', '#00FFFF', '#7FFF00', '#FF1493', '#00FF7F'],
    background: `
            linear-gradient(135deg, #000428 0%, #004e92 50%, #2c3e50 100%),
            linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px)
        `,
    backgroundSize: '100% 100%, 64px 64px, 64px 64px',
    particleColor: '#00FFFF',
    gridColor: 'rgba(0, 255, 255, 0.1)'
  },
  {
    name: 'midnight',
    colors: ['#4169E1', '#483D8B', '#6495ED', '#1E90FF', '#00BFFF', '#87CEEB'],
    background: `
            linear-gradient(to bottom, #0f2027 0%, #203a43 50%, #2c5364 100%),
            linear-gradient(rgba(65, 105, 225, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(65, 105, 225, 0.05) 1px, transparent 1px)
        `,
    backgroundSize: '100% 100%, 64px 64px, 64px 64px',
    particleColor: '#4169E1',
    gridColor: 'rgba(65, 105, 225, 0.1)'
  },
  {
    name: 'neon',
    colors: ['#FF00FF', '#00FF00', '#00FFFF', '#FFFF00', '#FF8000'],
    background: `
            linear-gradient(125deg, #000000 0%, #1a0f2e 35%, #4a157c 100%),
            linear-gradient(rgba(255, 0, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 0, 255, 0.05) 1px, transparent 1px)
        `,
    backgroundSize: '100% 100%, 64px 64px, 64px 64px',
    particleColor: '#FF00FF',
    gridColor: 'rgba(255, 0, 255, 0.1)'
  },
  {
    name: 'synthwave',
    colors: ['#00FFFF', '#FF69B4', '#FF00FF', '#9400D3', '#8A2BE2'],
    background: `
            linear-gradient(45deg, #20024a 0%, #090979 50%, #2b126e 100%),
            linear-gradient(rgba(255, 20, 147, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 20, 147, 0.05) 1px, transparent 1px)
        `,
    backgroundSize: '100% 100%, 64px 64px, 64px 64px',
    particleColor: '#FF69B4',
    gridColor: 'rgba(255, 105, 180, 0.1)'
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

class GridOverlay {
  draw(context: CanvasRenderingContext2D, width: number, height: number, gridColor: string) {
    context.strokeStyle = gridColor;
    context.lineWidth = 0.5;
    context.globalAlpha = 0.2;

    const gridSize = 64;

    for (let x = 0; x < width; x += gridSize) {
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x, height);
      context.stroke();
    }

    for (let y = 0; y < height; y += gridSize) {
      context.beginPath();
      context.moveTo(0, y);
      context.lineTo(width, y);
      context.stroke();
    }

    context.globalAlpha = 1;
  }
}

interface TetrisBackgroundProps {
  selectedTheme: string;
  isBlurred?: boolean;
  isInteractive?: boolean;
  isTransitioning?: boolean;
}

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

// ...existing code...

    if (!shapesRef.current.length) {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const shapes = [];
      
      // Create all shapes as random initially
      for (let i = 0; i < 20; i++) {
        const randomShape = tetrisShapes[Math.floor(Math.random() * tetrisShapes.length)];
        const color = themeConfig.colors[Math.floor(Math.random() * themeConfig.colors.length)];
        
        // Random starting position from any edge
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
          speed: Math.random() * 2 + 1,
          pattern: 'straight',
          opacity: 1,
          isSpecial: false,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.04,
          scale: 1
        });
      }

      shapesRef.current = shapes;
    }

// ...existing code...

    // Add transition timer
    let transitionTimer = 0;
    const transitionDuration = 180; // 3 seconds at 60fps

    const drawShape = (shape: number[][], x: number, y: number, color: string, rotation = 0, opacity = 1, scale = 1) => {
      context.save();
      context.translate(x + (shape[0].length * size) / 2, y + (shape.length * size) / 2);
      context.rotate(rotation);
      context.scale(scale, scale);
      context.translate(-(shape[0].length * size) / 2, -(shape.length * size) / 2);
      context.globalAlpha = opacity;

      if (scale > 1) {
        context.shadowBlur = 20;
        context.shadowColor = color;
      }

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

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      shapesRef.current.forEach(shapeObj => {
        context.shadowBlur = 6;
        context.shadowColor = shapeObj.color;
        const pulse = Math.sin(Date.now() / 1000) * 0.1 + 0.9;
        context.shadowBlur *= pulse;

        if (isTransitioning) {
          if (transitionTimer < transitionDuration) {
            // During first phase, identify two shapes to become L shapes
            if (transitionTimer === 0) {
              // Find two shapes near the center to transform
              const centerShapes = shapesRef.current
                .filter(shape => !shape.isSpecial)
                .sort((a, b) => {
                  const distA = Math.sqrt(Math.pow(centerX - a.x, 2) + Math.pow(centerY - a.y, 2));
                  const distB = Math.sqrt(Math.pow(centerX - b.x, 2) + Math.pow(centerY - b.y, 2));
                  return distA - distB;
                })
                .slice(0, 2);

              // Transform the shapes
              centerShapes[0].shape = [[1, 1, 1], [1, 0, 0]]; // L shape
              centerShapes[1].shape = [[1, 1, 1], [0, 0, 1]]; // Reverse L
              centerShapes[0].isSpecial = true;
              centerShapes[1].isSpecial = true;
              centerShapes[0].color = themeConfig.colors[0];
              centerShapes[1].color = themeConfig.colors[0];
              centerShapes[0].rotationRadius = 50;
              centerShapes[1].rotationRadius = 50;
            }

            // Continue with regular transition animation
            shapesRef.current.forEach(shapeObj => {
              if (shapeObj.isSpecial) {
                shapeObj.rotation += shapeObj.rotationSpeed;
                shapeObj.x = centerX + Math.cos(shapeObj.rotation) * shapeObj.rotationRadius;
                shapeObj.y = centerY + Math.sin(shapeObj.rotation) * shapeObj.rotationRadius;
              } else {
                shapeObj.y += shapeObj.speed;
                if (shapeObj.y > canvas.height) {
                  shapeObj.y = -shapeObj.shape.length * size;
                  shapeObj.x = Math.random() * canvas.width;
                }
              }
            });
            transitionTimer++;
          } else {
            const dx = centerX - shapeObj.x;
            const dy = centerY - shapeObj.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (!shapeObj.orbitAngle) {
              if (shapeObj.isSpecial) {
                shapeObj.orbitAngle = 0;
                shapeObj.isInPosition = false;
                shapeObj.transitionProgress = 0;
              } else {
                const index = shapesRef.current.filter(s => !s.isSpecial).indexOf(shapeObj);
                const totalRegularShapes = shapesRef.current.filter(s => !s.isSpecial).length;
                shapeObj.orbitAngle = (index / totalRegularShapes) * Math.PI * 2;
                shapeObj.orbitRadius = distance;
                shapeObj.isInPosition = false;
                shapeObj.transitionProgress = 0;
              }
            }
            const finalOrbitRadius = shapeObj.isSpecial ? 0 : 150;

            if (!shapeObj.isInPosition) {
              shapeObj.transitionProgress += 0.01;
              const easeProgress = 1 - Math.pow(1 - shapeObj.transitionProgress, 5);

              let targetX, targetY;
              if (shapeObj.isSpecial) {
                targetX = centerX + (shapeObj === shapesRef.current[0] ? -25 : 25);
                targetY = centerY;
              } else {
                targetX = centerX + Math.cos(shapeObj.orbitAngle) * finalOrbitRadius;
                targetY = centerY + Math.sin(shapeObj.orbitAngle) * finalOrbitRadius;
              }

              shapeObj.x = shapeObj.x + (targetX - shapeObj.x) * easeProgress * 0.1;
              shapeObj.y = shapeObj.y + (targetY - shapeObj.y) * easeProgress * 0.1;

              if (shapeObj.transitionProgress >= 1) {
                shapeObj.isInPosition = true;
              }
            } else {
              if (!shapeObj.isSpecial) {
                shapeObj.orbitAngle += 0.008;
                shapeObj.x = centerX + Math.cos(shapeObj.orbitAngle) * finalOrbitRadius;
                shapeObj.y = centerY + Math.sin(shapeObj.orbitAngle) * finalOrbitRadius;
              }
            }

            if (shapeObj.isSpecial) {
              shapeObj.rotation = (shapeObj.rotation || 0) + (shapeObj === shapesRef.current[0] ? 0.01 : -0.01);
            } else {
              shapeObj.rotation = (shapeObj.rotation || 0) + 0.02;
            }
            shapeObj.scale = shapeObj.scale || 1;
          }
        } else {
          shapeObj.y += shapeObj.speed;
          shapeObj.rotation += shapeObj.rotationSpeed || 0.01;

          if (shapeObj.y > canvas.height) {
            // Reset position with random x when shape goes off screen
            shapeObj.y = -shapeObj.shape.length * size - Math.random() * 200; // Add random delay
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
  }, [themeConfig, isBlurred]); // Removed isInteractive from dependencies

  // New useEffect for handling interactivity
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

      // Enhanced interaction with shapes
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
          transition: 'filter 0.5s ease',
          pointerEvents: isInteractive ? 'auto' : 'none'
        }}
      />
    </div>
  );
};

export default TetrisBackground;
