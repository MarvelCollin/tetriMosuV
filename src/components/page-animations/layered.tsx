import React, { useRef, useEffect, useState } from 'react';
import ILayered from '../../interfaces/ILayered';
import clsx from 'clsx';

const LayeredTransition: React.FC<ILayered> = ({ colors, speed = 60 }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [transitionDone, setTransitionDone] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');
        if (canvas && context) {
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
                    setTransitionDone(true);
                }
            };

            draw();
        }
    }, [colors, speed]);

    return (
        <div className="fixed top-0 left-0 w-full h-full">
            <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} className="absolute top-0 left-0 z-0" />
        </div>
    );
};

export default LayeredTransition;
