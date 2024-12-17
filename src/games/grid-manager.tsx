import { TETROMINOES } from './tetrominoes';
import { COLORS } from './colors';

class GridManager {
    grid: Array<Array<{ color: number | null; filled: boolean }>>;
    width: number;
    height: number;
    game: any; // Add this property

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height + 1;
        this.grid = this.createGrid();
    }

    setGame(game: any) {
        this.game = game;
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
                    if (gridX < 0 || gridX >= this.width || gridY >= this.height|| gridY < -2) {
                        return true;
                    }
                    if (gridY >= 0 && gridY < this.height && this.grid[gridY][gridX].filled) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    checkAndClearLines(particleSystem: ParticleSystem): number {
        let completedLines = [];
        
        // Find all completed lines from bottom to top
        for (let y = this.height - 1; y >= 0; y--) {
            if (this.grid[y].every(cell => cell.filled) && !this.game.isInTargetMode) {
                completedLines.push(y);
            }
        }

        // Start target mode for the bottom-most line if we're not already in target mode
        if (completedLines.length > 0 && this.game && !this.game.isInTargetMode) {
            const lineY = completedLines[0];
            this.game.startTargetMode(lineY);
            return 1;
        }
        
        return 0;
    }
}

export default GridManager;
