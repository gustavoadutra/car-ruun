// Canvas setup
const canvas = document.getElementById('canvasGame');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 500;
let dx = 0;

// Keyboard Interactivity
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowRight':
            console.log('direita');
            dx = 20;
            break;
        case 'ArrowLeft':
            dx = -20
            console.log('esquerda');
            break;
    }
})

// Player
class PlayerCar {
    constructor() {
        this.x = canvas.width/2;
        this.y = canvas.height/2;
    }

    update() {
        if (dx != 0) {
            this.x += dx;
        }
        this.y = this.y;
    }

    draw() {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.rect(this.x, this.y, 40, 60);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.closePath();
        ctx.stroke();
    }
}

// Created Player
const player = new PlayerCar();

// Animation Loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.update();
    dx = 0;
    player.draw();
    requestAnimationFrame(animate);
}

animate();