const canvas = document.getElementById('animatedBackground');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createParticles() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * 5 + 1;
    const speedX = Math.random() * 1 - .5;
    const speedY = Math.random() * 3 - 1.5;

    particles.push({ x, y, size, speedX, speedY });
}

function animate() {
    /*console.log("test")*/
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    /*console.log("test1")*/
    for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.size <= 0.2) {
            particles.splice(i, 1);
            i--;
        }

        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
    }

    requestAnimationFrame(animate);
}

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resize);
setInterval(createParticles, 1000000);
animate();
