import React, { useRef, useEffect } from 'react';
import ILayered from '../../interfaces/ILayered';

const LayeredTransition: React.FC<ILayered> = ({ colors, speed = 70, className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (canvas && context) {
      let requestId: number;
      const width = canvas.width * 4;
      const height = canvas.height * 4;
      const layerWidth = Math.sqrt(width * width + height * height) / colors.length;
      let currentOffset = -layerWidth * 3;

      const draw = () => {
        context.clearRect(0, 0, width, height);

        colors.forEach((color, index) => {
          context.fillStyle = color;
          context.beginPath();
          context.moveTo(currentOffset + index * layerWidth, 0);
          context.lineTo(currentOffset + index * layerWidth + layerWidth, 0);
          context.lineTo(currentOffset + index * layerWidth, height);
          context.lineTo(currentOffset + index * layerWidth - layerWidth, height);
          context.closePath();
          context.fill();
        });

        const lastColor = colors[colors.length - 1];
        context.fillStyle = lastColor;
        context.beginPath();
        context.moveTo(currentOffset + colors.length * layerWidth, 0);
        context.lineTo(currentOffset + colors.length * layerWidth + layerWidth, 0);
        context.lineTo(currentOffset + colors.length * layerWidth, height);
        context.lineTo(currentOffset + colors.length * layerWidth - layerWidth, height);
        context.closePath();
        context.fill();

        if (currentOffset < width + height) {
          currentOffset += speed;
          requestId = requestAnimationFrame(draw);
        } else {
          context.fillStyle = lastColor;
          context.fillRect(0, 0, width, height);
        }
      };

      draw();

      return () => {
        cancelAnimationFrame(requestId);
      };
    }
  }, [colors, speed]);

  return <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} className={className} />;
};

export default LayeredTransition;
