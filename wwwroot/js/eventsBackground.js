const canvas = document.getElementById('eventsBackground');
const ctx = canvas.getContext('2d');

// Set the canvas size to be larger
canvas.width = window.innerWidth; // Full width of the window
canvas.height = window.innerHeight; // Full height of the window

let stars = [];

class Star {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 1 + 0.5; // Smaller radius for stars
        this.alpha = Math.random() * 1;
        this.dx = (Math.random() - 0.5) * 2; // Horizontal speed
        this.dy = (Math.random() - 0.5) * 2; // Vertical speed
    }

    update() {
        this.x += this.dx;
        this.y += this.dy;

        // Bounce off walls
        if (this.x < 0 || this.x > canvas.width) {
            this.dx *= -1; // Reverse direction
        }
        if (this.y < 0 || this.y > canvas.height) {
            this.dy *= -1; // Reverse direction
        }

        // Check for collision with other stars
        stars.forEach(otherStar => {
            if (otherStar !== this) {
                const dx = otherStar.x - this.x;
                const dy = otherStar.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.radius + otherStar.radius) {
                    this.dx *= -1; // Reverse direction on collision
                    this.dy *= -1; // Reverse direction on collision
                }
            }
        });
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.fill();
        ctx.closePath();
    }
}

function initStars() {
    stars = [];
    for (let i = 0; i < 100; i++) {
        stars.push(new Star());
    }
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
        star.update();
        star.draw();
    });
}

function animateStars() {
    drawStars();
    requestAnimationFrame(animateStars);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth; // Maintain size on resize
    canvas.height = window.innerHeight;
    initStars();
});

initStars();
animateStars();
