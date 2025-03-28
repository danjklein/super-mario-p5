class Enemy {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.width = 32;
        this.height = 32;
        this.velocityX = -2;
        this.active = true;
    }

    update() {
        if (!this.active) return;
        this.x += this.velocityX;
    }

    render() {
        if (!this.active) return;
        fill(100);
        rect(this.x, this.y, this.width, this.height);
    }
}