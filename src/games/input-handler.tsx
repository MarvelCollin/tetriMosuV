class InputHandler {
    game: TetrisGame;

    constructor(game: TetrisGame) {
        this.game = game;
    }

    handleKeyPress(event: KeyboardEvent) {
        if (this.game.gameOver) return;
        switch (event.key.toLowerCase()) {
            case 'a':
                this.game.gridManager.clearTetromino(this.game.currentTetromino, this.game.currentX, this.game.currentY);
                if (!this.game.gridManager.checkCollision(this.game.currentTetromino, this.game.currentX - 1, this.game.currentY)) {
                    this.game.currentX--;
                }
                this.game.gridManager.placeTetromino(this.game.currentTetromino, this.game.currentX, this.game.currentY);
                break;
            case 'd':
                this.game.gridManager.clearTetromino(this.game.currentTetromino, this.game.currentX, this.game.currentY);
                if (!this.game.gridManager.checkCollision(this.game.currentTetromino, this.game.currentX + 1, this.game.currentY)) {
                    this.game.currentX++;
                }
                this.game.gridManager.placeTetromino(this.game.currentTetromino, this.game.currentX, this.game.currentY);
                break;
            case 's':
                this.game.moveDown();
                break;
            case 'w':
                this.game.rotateTetromino();
                break;
            case ' ':
                this.game.hardDrop();
                break;
        }
        this.game.renderer.renderScene();
    }
}

export default InputHandler;
