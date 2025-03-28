class LevelManager {
    constructor() {
        this.currentLevel = null;
        this.levels = [];
        this.loadLevel(1);
    }

    loadLevel(levelNumber) {
        // TODO: Implement level loading
        console.log(`Loading level ${levelNumber}`);
    }

    update() {
        if (this.currentLevel) {
            this.currentLevel.update();
        }
    }

    render() {
        if (this.currentLevel) {
            this.currentLevel.render();
        }
    }
}