
import { IPreviewTetris } from "../../interfaces/IPreviewTetris";

export const PreviewTetris: React.FC<IPreviewTetris> = ({ theme }) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const currentThemeColors = THEMES[theme as keyof typeof THEMES];
    if (!currentThemeColors) return;

    const blockSize = 20;
    const gridWidth = 8;
    const gridHeight = 8;
    
    canvas.width = gridWidth * blockSize + 2;
    canvas.height = gridHeight * blockSize + 2;

    ctx.fillStyle = `#${currentThemeColors.background.toString(16).padStart(6, '0')}`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = `#${currentThemeColors.grid.toString(16).padStart(6, '0')}`;
    ctx.lineWidth = 0.5;
    for (let x = 0; x <= gridWidth; x++) {
      ctx.beginPath();
      ctx.moveTo(x * blockSize, 0);
      ctx.lineTo(x * blockSize, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y <= gridHeight; y++) {
      ctx.beginPath();
      ctx.moveTo(0, y * blockSize);
      ctx.lineTo(canvas.width, y * blockSize);
      ctx.stroke();
    }

    ctx.strokeStyle = `#${currentThemeColors.border.toString(16).padStart(6, '0')}`;
    ctx.lineWidth = 2;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    const shapes = [
      [[1, 1, 1, 1]], // I
      [[1, 1], [1, 1]], // O
      [[1, 1, 1], [0, 1, 0]], // T
      [[1, 1, 1], [1, 0, 0]], // L
      [[1, 1, 1], [0, 0, 1]], // J
      [[1, 1, 0], [0, 1, 1]], // S
      [[0, 1, 1], [1, 1, 0]], // Z
    ];

    shapes.forEach((shape, index) => {
      const color = currentThemeColors.colors[index];
      const x = 1 + Math.floor(Math.random() * (gridWidth - shape[0].length));
      const y = 1 + Math.floor(Math.random() * (gridHeight - shape.length));

      shape.forEach((row, rowIndex) => {
        row.forEach((cell, cellIndex) => {
          if (cell) {
            ctx.fillStyle = `#${color.toString(16).padStart(6, '0')}`;
            ctx.fillRect(
              (x + cellIndex) * blockSize,
              (y + rowIndex) * blockSize,
              blockSize - 1,
              blockSize - 1
            );

            const gradient = ctx.createLinearGradient(
              (x + cellIndex) * blockSize,
              (y + rowIndex) * blockSize,
              (x + cellIndex + 1) * blockSize,
              (y + rowIndex + 1) * blockSize
            );
            gradient.addColorStop(0, `#${color.toString(16).padStart(6, '0')}99`);
            gradient.addColorStop(1, `#${color.toString(16).padStart(6, '0')}33`);
            ctx.fillStyle = gradient;
            ctx.fillRect(
              (x + cellIndex) * blockSize,
              (y + rowIndex) * blockSize,
              blockSize - 1,
              blockSize - 1
            );
          }
        });
      });
    });
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="border-2 border-gray-700 rounded-lg shadow-lg"
      style={{ imageRendering: 'pixelated' }}
    />
  );
};