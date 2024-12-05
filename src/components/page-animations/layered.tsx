import React, { useRef, useEffect, useState } from 'react';
import ILayered from '../../interfaces/ILayered';
import clsx from 'clsx';

const LayeredTransition: React.FC<ILayered> = ({ colors, speed = 60, children, onTransitionEnd }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [transitionDone, setTransitionDone] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');
        if (canvas && context) {
            const width = canvas.width * 3;
            const height = canvas.height * 2;
            const layerWidth = Math.sqrt(width * width + height * height) / colors.length;
            let currentOffset = width - layerWidth;

            const draw = () => {
                // context.clearRect(0, 0, width, height);

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
                    if (onTransitionEnd) {
                        onTransitionEnd();
                    }
                }
            };

            draw();
        }
    }, [colors, speed, onTransitionEnd]);

    return (
        <div className="fixed top-0 left-0 w-full h-full transition-opacity duration-1000">
            <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} className="absolute top-0 left-0 z-0" />
            {transitionDone && <div className="absolute top-0 left-0 w-full h-full">{children}</div>}
        </div>
    );
};

export default LayeredTransition;
