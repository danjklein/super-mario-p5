class Game {
    constructor() {
        this.player = new Player();
        this.levelManager = new LevelManager();
        this.currentLevel = 1;
        this.score = 0;
        this.lives = 3;
        this.gameState = 'playing'; // playing, paused, gameOver
    }

    update() {
        if (this.gameState !== 'playing') return;
        
        this.player.update();
        this.levelManager.update();
    }

    render() {
        background(92, 148, 252); // Classic Mario sky blue
        this.levelManager.render();
        this.player.render();
        this.drawHUD();
    }

    drawHUD() {
        fill(255);
        textSize(20);
        text(`Score: ${this.score}`, 20, 30);
        text(`Lives: ${this.lives}`, 20, 60);
    }

    handleKeyPress(keyCode) {
        this.player.handleKeyPress(keyCode);
    }

    handleKeyRelease(keyCode) {
        this.player.handleKeyRelease(keyCode);
    }
}