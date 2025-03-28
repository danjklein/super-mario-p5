class Player {
    constructor() {
        this.x = 100;
        this.y = 400;
        this.width = 32;
        this.height = 32;
        this.velocityX = 0;
        this.velocityY = 0;
        this.speed = 5;
        this.jumpForce = -12;
        this.gravity = 0.5;
        this.isJumping = false;
        this.direction = 1; // 1 for right, -1 for left
        this.state = 'small'; // small, super, fire
    }

    update() {
        this.velocityY += this.gravity;
        this.x += this.velocityX;
        this.y += this.velocityY;

        if (this.y > height - this.height) {
            this.y = height - this.height;
            this.velocityY = 0;
            this.isJumping = false;
        }
    }

    render() {
        fill(255, 0, 0);
        rect(this.x, this.y, this.width, this.height);
    }

    handleKeyPress(keyCode) {
        switch(keyCode) {
            case LEFT_ARROW:
                this.velocityX = -this.speed;
                this.direction = -1;
                break;
            case RIGHT_ARROW:
                this.velocityX = this.speed;
                this.direction = 1;
                break;
            case UP_ARROW:
                if (!this.isJumping) {
                    this.velocityY = this.jumpForce;
                    this.isJumping = true;
                }
                break;
        }
    }

    handleKeyRelease(keyCode) {
        if (keyCode === LEFT_ARROW && this.velocityX < 0) {
            this.velocityX = 0;
        }
        if (keyCode === RIGHT_ARROW && this.velocityX > 0) {
            this.velocityX = 0;
        }
    }
}