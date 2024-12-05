import React, { useRef, useEffect } from 'react';
import ILayered from '../../interfaces/ILayered';

const LayeredTransition: React.FC<ILayered> = ({ colors, speed = 60, className }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');
        if (canvas && context) {
            let requestId: number;
            const width = canvas.width;
            const height = canvas.height;
            const layerWidth = Math.sqrt(width * width + height * height) / colors.length;
            let currentOffset = width + height;

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

                if (currentOffset > -layerWidth * colors.length) {
                    currentOffset -= speed;
                    requestAnimationFrame(draw);
                } else {
                }
            };

            draw();

            return () => {
            };
        }
    }, [colors, speed]);

    return <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} className={className} />;
};

export default LayeredTransition;
