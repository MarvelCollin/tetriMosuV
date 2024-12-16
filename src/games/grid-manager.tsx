import { TETROMINOES } from './tetrominoes';
import { COLORS } from './colors';

class GridManager {
    grid: Array<Array<{ color: number | null; filled: boolean }>>;
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.grid = this.createGrid();
    }

    createGrid() {
        const grid: Array<Array<{ color: number | null; filled: boolean }>> = [];
        for (let y = 0; y < this.height; y++) {
            const row = Array(this.width).fill({ color: null, filled: false });
            grid.push([...row]);
        }
        return grid;
    }

    clearTetromino(tetromino: number, startX: number, startY: number) {
        const shape = TETROMINOES[tetromino];
        shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value === 1) {
                    const gridX = startX + x;
                    const gridY = startY + y;
                    if (gridY >= 0 && gridY < this.height && gridX >= 0 && gridX < this.width) {
                        this.grid[gridY][gridX] = { color: null, filled: false };
                    }
                }
            });
        });
    }

    placeTetromino(tetromino: number, startX: number, startY: number) {
        const shape = TETROMINOES[tetromino];
        shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value === 1) {
                    const gridX = startX + x;
                    const gridY = startY + y;
                    if (gridY >= 0 && gridY < this.height && gridX >= 0 && gridX < this.width) {
                        this.grid[gridY][gridX] = { color: COLORS[tetromino], filled: true };
                    }
                }
            });
        });
    }

    checkCollision(tetromino: number, testX: number, testY: number): boolean {
        const shape = TETROMINOES[tetromino];
        for (let y = 0; y < shape.length; y++) {
            for (let x = 0; x < shape[y].length; x++) {
                if (shape[y][x] === 1) {
                    const gridX = testX + x;
                    const gridY = testY + y;
                    if (gridX < 0 || gridX >= this.width || gridY >= this.height) {
                        return true;
                    }
                    if (gridY >= 0 && this.grid[gridY][gridX].filled) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    checkAndClearLines(particleSystem: ParticleSystem): number {
        const newGrid = this.grid.filter((row) => !row.every((cell) => cell.filled));
        const clearedLines = this.height - newGrid.length;
        
        while (newGrid.length < this.height) {
            newGrid.unshift(Array(this.width).fill({ color: null, filled: false }));
        }
        
        this.grid = newGrid;
        
        for (let i = 0; i < clearedLines; i++) {
            particleSystem.addParticlesForLine(this.height - i - 1, this.grid);
        }
        
        return clearedLines;
    }
}

export default GridManager;
