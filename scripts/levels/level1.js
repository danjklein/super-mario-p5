class Level1 {
    constructor() {
        this.platforms = [];
        this.enemies = [];
        this.powerups = [];
        this.setupLevel();
    }

    setupLevel() {
        // TODO: Add level design
    }

    update() {
        this.enemies.forEach(enemy => enemy.update());
        this.powerups.forEach(powerup => powerup.update());
    }

    render() {
        // Draw background
        this.platforms.forEach(platform => {
            fill(139, 69, 19);
            rect(platform.x, platform.y, platform.width, platform.height);
        });

        this.enemies.forEach(enemy => enemy.render());
        this.powerups.forEach(powerup => powerup.render());
    }
}