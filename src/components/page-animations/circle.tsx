import React, { useRef, useEffect } from 'react';
import ICircle from '../../interfaces/ICircle';

interface CircleTransitionProps extends ICircle {
  className?: string;
}

const CircleTransition: React.FC<CircleTransitionProps> = ({ backgroundColor, className })  => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (canvas && context) {
      let requestId: number;
      const radius = Math.max(canvas.width, canvas.height) * 1.5;
      let currentRadius = 0;
      const maxRadius = radius;
      const speed = 20;

      const draw = () => {
        // context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.arc(canvas.width / 2, canvas.height / 2, currentRadius, 0, 2 * Math.PI);
        context.fillStyle = backgroundColor;
        context.fill();

        if (currentRadius < maxRadius) {
          currentRadius += speed;
          requestId = requestAnimationFrame(draw);
        } else {
          cancelAnimationFrame(requestId); // Stop the animation
        }
      };

      draw();

      return () => {
        cancelAnimationFrame(requestId);
      };
    }
  }, [backgroundColor]);

  return <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} className={className} />;
};

export default CircleTransition;
