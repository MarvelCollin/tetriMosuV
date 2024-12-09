import React, { useEffect, useRef, useState } from 'react';

const TetrisBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');
        if (!canvas || !context) return;
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

        const colors = ['#FF0D72', '#0DC2FF', '#0DFF72', '#F538FF', '#FF8E0D', '#FFE138', '#3877FF'];

        const shapes = [];

        for (let i = 0; i < 20; i++) {
            const shape = tetrisShapes[Math.floor(Math.random() * tetrisShapes.length)];
            const color = colors[Math.floor(Math.random() * colors.length)];
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            shapes.push({ shape, color, x, y, speed: Math.random() * 2 + 1 });
        }

        const drawShape = (shape: number[][], x: number, y: number, color: string) => {
            context.fillStyle = color;
            shape.forEach((row, rowIndex) => {
                row.forEach((cell, cellIndex) => {
                    if (cell) {
                        context.fillRect(x + cellIndex * size, y + rowIndex * size, size, size);
                    }
                });
            });
        };

        const animate = () => {
            if (isPaused) return;
            context.clearRect(0, 0, canvas.width, canvas.height);
            shapes.forEach(shapeObj => {
                shapeObj.y += shapeObj.speed;
                if (shapeObj.y > canvas.height) {
                    shapeObj.y = -shapeObj.shape.length * size;
                    shapeObj.x = Math.random() * canvas.width;
                }
                drawShape(shapeObj.shape, shapeObj.x, shapeObj.y, shapeObj.color);
            });
            requestAnimationFrame(animate);
        };

        const handleMouseEnter = () => {
            setIsPaused(true);
        };

        const handleMouseLeave = () => {
            setIsPaused(false);
            requestAnimationFrame(animate);
        };

        canvas.addEventListener('mouseenter', handleMouseEnter);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            canvas.removeEventListener('mouseenter', handleMouseEnter);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [isPaused]);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full"></canvas>;
};

export default TetrisBackground;
