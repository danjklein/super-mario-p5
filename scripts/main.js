let game;

function preload() {
    // Load assets here
}

function setup() {
    const canvas = createCanvas(800, 600);
    canvas.parent('game-container');
    game = new Game();
}

function draw() {
    game.update();
    game.render();
}

function keyPressed() {
    game.handleKeyPress(keyCode);
}

function keyReleased() {
    game.handleKeyRelease(keyCode);
}