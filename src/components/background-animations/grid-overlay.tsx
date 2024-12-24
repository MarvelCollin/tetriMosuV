export class GridOverlay {
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

export default GridOverlay;