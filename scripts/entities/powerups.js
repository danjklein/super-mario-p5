class PowerUp {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.width = 32;
        this.height = 32;
        this.active = true;
        this.velocityY = 0;
        this.gravity = 0.5;
    }

    update() {
        if (!this.active) return;
        this.velocityY += this.gravity;
        this.y += this.velocityY;
    }

    render() {
        if (!this.active) return;
        fill(255, 255, 0);
        rect(this.x, this.y, this.width, this.height);
    }
}