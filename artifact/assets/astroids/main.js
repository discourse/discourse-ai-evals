const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const thrustSound = document.getElementById("thrustSound");
const fireSound = document.getElementById("fireSound");
const explodeSound = document.getElementById("explodeSound");

let score = 0;
let lives = 3;
let gameOver = false;
const keys = {};
const asteroids = [];
const bullets = [];
class Spaceship {
    constructor() {
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.angle = 0;
        this.speedX = 0;
        this.speedY = 0;
        this.radius = 15;
        this.thrusting = false;
        this.shape = this.generateShape(15);
    }

    generateShape(size) {
        const shape = [];
        const points = Math.floor(Math.random() * 5) + 5;
        for (let i = 0; i < points; i++) {
            let angle = (Math.PI * 2 / points) * i;
            let offset = Math.random() * 0.4 + 0.8;
            shape.push({ x: Math.cos(angle) * size * offset, y: Math.sin(angle) * size * offset });
        }
        return shape;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.beginPath();
        ctx.moveTo(this.shape[0].x, this.shape[0].y);
        for (let i = 1; i < this.shape.length; i++) {
            ctx.lineTo(this.shape[i].x, this.shape[i].y);
        }
        ctx.closePath();
        ctx.strokeStyle = "white";
        ctx.stroke();
        ctx.restore();
    }
}
        this.radius = 15;
        this.thrusting = false;
    >>>>>>> REPLACE
<<<<<<< SEARCH
ctx.beginPath();
=======
        ctx.beginPath();
    }

    generateShape() {
        let shape = [];
        let points = Math.floor(Math.random() * 5) + 5;
        for (let i = 0; i < points; i++) {
            let angle = (Math.PI * 2 / points) * i;
            let offset = Math.random() * 0.4 + 0.8;
            shape.push({ x: Math.cos(angle) * this.size * offset, y: Math.sin(angle) * this.size * offset });
        }
        return shape;
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
ctx.beginPath();
        ctx.moveTo(this.x + this.shape[0].x, this.y + this.shape[0].y);
        for (let i = 1; i < this.shape.length; i++) {
            ctx.lineTo(this.x + this.shape[i].x, this.y + this.shape[i].y);
        }
        ctx.closePath();
        ctx.strokeStyle = "white";
        ctx.stroke();
    >>>>>>> REPLACE
<<<<<<< SEARCH
ctx.beginPath();
=======
        ctx.beginPath();
    }

    generateShape() {
        let shape = [];
        let points = Math.floor(Math.random() * 5) + 5;
        for (let i = 0; i < points; i++) {
            let angle = (Math.PI * 2 / points) * i;
            let offset = Math.random() * 0.4 + 0.8;
            shape.push({ x: Math.cos(angle) * this.size * offset, y: Math.sin(angle) * this.size * offset });
        }
        return shape;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
    >>>>>>> REPLACE
<<<<<<< SEARCH
ctx.beginPath();
=======
        ctx.beginPath();
    }

    generateShape() {
        let shape = [];
        let points = Math.floor(Math.random() * 5) + 5;
        for (let i = 0; i < points; i++) {
            let angle = (Math.PI * 2 / points) * i;
            let offset = Math.random() * 0.4 + 0.8;
            shape.push({ x: Math.cos(angle) * this.size * offset, y: Math.sin(angle) * this.size * offset });
        }
        return shape;
    }
>>>>>>> REPLACE
<<<<<<< SEARCH
ctx.beginPath();
=======
        ctx.beginPath();
    }

    generateShape() {
        let shape = [];
        let points = Math.floor(Math.random() * 5) + 5;
        for (let i = 0; i < points; i++) {
            let angle = (Math.PI * 2 / points) * i;
            let offset = Math.random() * 0.4 + 0.8;
            shape.push({ x: Math.cos(angle) * this.size * offset, y: Math.sin(angle) * this.size * offset });
        }
        return shape;
    }

class Bullet {
    constructor(x, y, angle) {
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.speed = 5;
        this.radius = 2;
    >>>>>>> REPLACE
<<<<<<< SEARCH
ctx.beginPath();
=======
        ctx.beginPath();
    }

    generateShape() {
        let shape = [];
        let points = Math.floor(Math.random() * 5) + 5;
        for (let i = 0; i < points; i++) {
            let angle = (Math.PI * 2 / points) * i;
            let offset = Math.random() * 0.4 + 0.8;
            shape.push({ x: Math.cos(angle) * this.size * offset, y: Math.sin(angle) * this.size * offset });
        }
        return shape;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "red";
        ctx.fill();
    >>>>>>> REPLACE
<<<<<<< SEARCH
ctx.beginPath();
=======
        ctx.beginPath();
    }

    generateShape() {
        let shape = [];
        let points = Math.floor(Math.random() * 5) + 5;
        for (let i = 0; i < points; i++) {
            let angle = (Math.PI * 2 / points) * i;
            let offset = Math.random() * 0.4 + 0.8;
            shape.push({ x: Math.cos(angle) * this.size * offset, y: Math.sin(angle) * this.size * offset });
        }
        return shape;
    }

    update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
    >>>>>>> REPLACE
<<<<<<< SEARCH
ctx.beginPath();
=======
        ctx.beginPath();
    }

    generateShape() {
        let shape = [];
        let points = Math.floor(Math.random() * 5) + 5;
        for (let i = 0; i < points; i++) {
            let angle = (Math.PI * 2 / points) * i;
            let offset = Math.random() * 0.4 + 0.8;
            shape.push({ x: Math.cos(angle) * this.size * offset, y: Math.sin(angle) * this.size * offset });
        }
        return shape;
    }
>>>>>>> REPLACE
<<<<<<< SEARCH
ctx.beginPath();
=======
        ctx.beginPath();
    }

    generateShape() {
        let shape = [];
        let points = Math.floor(Math.random() * 5) + 5;
        for (let i = 0; i < points; i++) {
            let angle = (Math.PI * 2 / points) * i;
            let offset = Math.random() * 0.4 + 0.8;
            shape.push({ x: Math.cos(angle) * this.size * offset, y: Math.sin(angle) * this.size * offset });
        }
        return shape;
    }

const ship = new Spaceship();

function createAsteroids(count) {
    for (let i = 0; i < count; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let size = Math.random() * 20 + 20;
        let speedX = (Math.random() - 0.5) * 2;
        let speedY = (Math.random() - 0.5) * 2;
        asteroids.push(new Asteroid(x, y, size, speedX, speedY));
    >>>>>>> REPLACE
<<<<<<< SEARCH
ctx.beginPath();
=======
        ctx.beginPath();
    }

    generateShape() {
        let shape = [];
        let points = Math.floor(Math.random() * 5) + 5;
        for (let i = 0; i < points; i++) {
            let angle = (Math.PI * 2 / points) * i;
            let offset = Math.random() * 0.4 + 0.8;
            shape.push({ x: Math.cos(angle) * this.size * offset, y: Math.sin(angle) * this.size * offset });
        }
        return shape;
    }
>>>>>>> REPLACE
<<<<<<< SEARCH
ctx.beginPath();
=======
        ctx.beginPath();
    }

    generateShape() {
        let shape = [];
        let points = Math.floor(Math.random() * 5) + 5;
        for (let i = 0; i < points; i++) {
            let angle = (Math.PI * 2 / points) * i;
            let offset = Math.random() * 0.4 + 0.8;
            shape.push({ x: Math.cos(angle) * this.size * offset, y: Math.sin(angle) * this.size * offset });
        }
        return shape;
    }

function shootBullet() {
    bullets.push(new Bullet(ship.x, ship.y, ship.angle));
    fireSound.play();
>>>>>>> REPLACE
<<<<<<< SEARCH
ctx.beginPath();
=======
        ctx.beginPath();
    }

    generateShape() {
        let shape = [];
        let points = Math.floor(Math.random() * 5) + 5;
        for (let i = 0; i < points; i++) {
            let angle = (Math.PI * 2 / points) * i;
            let offset = Math.random() * 0.4 + 0.8;
            shape.push({ x: Math.cos(angle) * this.size * offset, y: Math.sin(angle) * this.size * offset });
        }
        return shape;
    }

function checkCollisions() {
    for (let i = asteroids.length - 1; i >= 0; i--) {
        const asteroid = asteroids[i];

        if (Math.hypot(ship.x - asteroid.x, ship.y - asteroid.y) < asteroid.size + ship.radius) {
            lives--;
            if (lives <= 0) {
                gameOver = true;
            >>>>>>> REPLACE
<<<<<<< SEARCH
ctx.beginPath();
=======
        ctx.beginPath();
    }

    generateShape() {
        let shape = [];
        let points = Math.floor(Math.random() * 5) + 5;
        for (let i = 0; i < points; i++) {
            let angle = (Math.PI * 2 / points) * i;
            let offset = Math.random() * 0.4 + 0.8;
            shape.push({ x: Math.cos(angle) * this.size * offset, y: Math.sin(angle) * this.size * offset });
        }
        return shape;
    }
            return;
        >>>>>>> REPLACE
<<<<<<< SEARCH
ctx.beginPath();
=======
        ctx.beginPath();
    }

    generateShape() {
        let shape = [];
        let points = Math.floor(Math.random() * 5) + 5;
        for (let i = 0; i < points; i++) {
            let angle = (Math.PI * 2 / points) * i;
            let offset = Math.random() * 0.4 + 0.8;
            shape.push({ x: Math.cos(angle) * this.size * offset, y: Math.sin(angle) * this.size * offset });
        }
        return shape;
    }

        for (let j = bullets.length - 1; j >= 0; j--) {
            const bullet = bullets[j];

            if (Math.hypot(bullet.x - asteroid.x, bullet.y - asteroid.y) < asteroid.size) {
                bullets.splice(j, 1);
                asteroids.splice(i, 1);
                explodeSound.play();
                score += 10;
                
                function createAsteroids(count) {
    for (let i = 0; i < count; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let size = Math.random() * 20 + 20;
        let speedX = (Math.random() - 0.5) * 2;
        let speedY = (Math.random() - 0.5) * 2;
        asteroids.push(new Asteroid(x, y, size, speedX, speedY));
    }
}
                    asteroids.push(new Asteroid(asteroid.x, asteroid.y, asteroid.size / 2, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2));
                    asteroids.push(new Asteroid(asteroid.x, asteroid.y, asteroid.size / 2, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2));
                >>>>>>> REPLACE
<<<<<<< SEARCH
ctx.beginPath();
=======
        ctx.beginPath();
    }

    generateShape() {
        let shape = [];
        let points = Math.floor(Math.random() * 5) + 5;
        for (let i = 0; i < points; i++) {
            let angle = (Math.PI * 2 / points) * i;
            let offset = Math.random() * 0.4 + 0.8;
            shape.push({ x: Math.cos(angle) * this.size * offset, y: Math.sin(angle) * this.size * offset });
        }
        return shape;
    }
                return;
            >>>>>>> REPLACE
<<<<<<< SEARCH
ctx.beginPath();
=======
        ctx.beginPath();
    }

    generateShape() {
        let shape = [];
        let points = Math.floor(Math.random() * 5) + 5;
        for (let i = 0; i < points; i++) {
            let angle = (Math.PI * 2 / points) * i;
            let offset = Math.random() * 0.4 + 0.8;
            shape.push({ x: Math.cos(angle) * this.size * offset, y: Math.sin(angle) * this.size * offset });
        }
        return shape;
    }
        >>>>>>> REPLACE
<<<<<<< SEARCH
ctx.beginPath();
=======
        ctx.beginPath();
    }

    generateShape() {
        let shape = [];
        let points = Math.floor(Math.random() * 5) + 5;
        for (let i = 0; i < points; i++) {
            let angle = (Math.PI * 2 / points) * i;
            let offset = Math.random() * 0.4 + 0.8;
            shape.push({ x: Math.cos(angle) * this.size * offset, y: Math.sin(angle) * this.size * offset });
        }
        return shape;
    }
    >>>>>>> REPLACE
<<<<<<< SEARCH
ctx.beginPath();
=======
        ctx.beginPath();
    }

    generateShape() {
        let shape = [];
        let points = Math.floor(Math.random() * 5) + 5;
        for (let i = 0; i < points; i++) {
            let angle = (Math.PI * 2 / points) * i;
            let offset = Math.random() * 0.4 + 0.8;
            shape.push({ x: Math.cos(angle) * this.size * offset, y: Math.sin(angle) * this.size * offset });
        }
        return shape;
    }
>>>>>>> REPLACE
<<<<<<< SEARCH
ctx.beginPath();
=======
        ctx.beginPath();
    }

    generateShape() {
        let shape = [];
        let points = Math.floor(Math.random() * 5) + 5;
        for (let i = 0; i < points; i++) {
            let angle = (Math.PI * 2 / points) * i;
            let offset = Math.random() * 0.4 + 0.8;
            shape.push({ x: Math.cos(angle) * this.size * offset, y: Math.sin(angle) * this.size * offset });
        }
        return shape;
    }

function updateGame() {
    if (gameOver) {
        ctx.fillStyle = "white";
        ctx.font = "30px Arial";
        ctx.fillText("Game Over - Press R to Restart", canvas.width / 2 - 150, canvas.height / 2);
        return;
    >>>>>>> REPLACE
<<<<<<< SEARCH
ctx.beginPath();
=======
        ctx.beginPath();
    }

    generateShape() {
        let shape = [];
        let points = Math.floor(Math.random() * 5) + 5;
        for (let i = 0; i < points; i++) {
            let angle = (Math.PI * 2 / points) * i;
            let offset = Math.random() * 0.4 + 0.8;
            shape.push({ x: Math.cos(angle) * this.size * offset, y: Math.sin(angle) * this.size * offset });
        }
        return shape;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ship.update();
    ship.draw();

    bullets.forEach((bullet, i) => {
        bullet.update();
        bullet.draw();
        if (bullet.x < 0 || bullet.x > canvas.width || bullet.y < 0 || bullet.y > canvas.height) {
            bullets.splice(i, 1);
        >>>>>>> REPLACE
<<<<<<< SEARCH
ctx.beginPath();
=======
        ctx.beginPath();
    }

    generateShape() {
        let shape = [];
        let points = Math.floor(Math.random() * 5) + 5;
        for (let i = 0; i < points; i++) {
            let angle = (Math.PI * 2 / points) * i;
            let offset = Math.random() * 0.4 + 0.8;
            shape.push({ x: Math.cos(angle) * this.size * offset, y: Math.sin(angle) * this.size * offset });
        }
        return shape;
    }
    >>>>>>> REPLACE
<<<<<<< SEARCH
ctx.beginPath();
=======
        ctx.beginPath();
    }

    generateShape() {
        let shape = [];
        let points = Math.floor(Math.random() * 5) + 5;
        for (let i = 0; i < points; i++) {
            let angle = (Math.PI * 2 / points) * i;
            let offset = Math.random() * 0.4 + 0.8;
            shape.push({ x: Math.cos(angle) * this.size * offset, y: Math.sin(angle) * this.size * offset });
        }
        return shape;
    });

    asteroids.forEach(asteroid => {
        asteroid.update();
        asteroid.draw();
    >>>>>>> REPLACE
<<<<<<< SEARCH
ctx.beginPath();
=======
        ctx.beginPath();
    }

    generateShape() {
        let shape = [];
        let points = Math.floor(Math.random() * 5) + 5;
        for (let i = 0; i < points; i++) {
            let angle = (Math.PI * 2 / points) * i;
            let offset = Math.random() * 0.4 + 0.8;
            shape.push({ x: Math.cos(angle) * this.size * offset, y: Math.sin(angle) * this.size * offset });
        }
        return shape;
    });

    checkCollisions();

    ctx.fillStyle = "white";
    ctx.fillText(`Score: ${score>>>>>>> REPLACE
<<<<<<< SEARCH
ctx.beginPath();
=======
        ctx.beginPath();
    }

    generateShape() {
        let shape = [];
        let points = Math.floor(Math.random() * 5) + 5;
        for (let i = 0; i < points; i++) {
            let angle = (Math.PI * 2 / points) * i;
            let offset = Math.random() * 0.4 + 0.8;
            shape.push({ x: Math.cos(angle) * this.size * offset, y: Math.sin(angle) * this.size * offset });
        }
        return shape;
    }`, 10, 20);
    ctx.fillText(`Lives: ${lives>>>>>>> REPLACE
<<<<<<< SEARCH
ctx.beginPath();
=======
        ctx.beginPath();
    }

    generateShape() {
        let shape = [];
        let points = Math.floor(Math.random() * 5) + 5;
        for (let i = 0; i < points; i++) {
            let angle = (Math.PI * 2 / points) * i;
            let offset = Math.random() * 0.4 + 0.8;
            shape.push({ x: Math.cos(angle) * this.size * offset, y: Math.sin(angle) * this.size * offset });
        }
        return shape;
    }`, canvas.width - 100, 20);

    requestAnimationFrame(updateGame);
>>>>>>> REPLACE
<<<<<<< SEARCH
ctx.beginPath();
=======
        ctx.beginPath();
    }

    generateShape() {
        let shape = [];
        let points = Math.floor(Math.random() * 5) + 5;
        for (let i = 0; i < points; i++) {
            let angle = (Math.PI * 2 / points) * i;
            let offset = Math.random() * 0.4 + 0.8;
            shape.push({ x: Math.cos(angle) * this.size * offset, y: Math.sin(angle) * this.size * offset });
        }
        return shape;
    }

document.addEventListener("keydown", (e) => {
    keys[e.key] = true;
    if (e.key === " " && !gameOver) shootBullet();
    if (e.key.toLowerCase() === "r" && gameOver) {
        location.reload();
    >>>>>>> REPLACE
<<<<<<< SEARCH
ctx.beginPath();
=======
        ctx.beginPath();
    }

    generateShape() {
        let shape = [];
        let points = Math.floor(Math.random() * 5) + 5;
        for (let i = 0; i < points; i++) {
            let angle = (Math.PI * 2 / points) * i;
            let offset = Math.random() * 0.4 + 0.8;
            shape.push({ x: Math.cos(angle) * this.size * offset, y: Math.sin(angle) * this.size * offset });
        }
        return shape;
    }
>>>>>>> REPLACE
<<<<<<< SEARCH
ctx.beginPath();
=======
        ctx.beginPath();
    }

    generateShape() {
        let shape = [];
        let points = Math.floor(Math.random() * 5) + 5;
        for (let i = 0; i < points; i++) {
            let angle = (Math.PI * 2 / points) * i;
            let offset = Math.random() * 0.4 + 0.8;
            shape.push({ x: Math.cos(angle) * this.size * offset, y: Math.sin(angle) * this.size * offset });
        }
        return shape;
    });

document.addEventListener("keyup", (e) => {
    keys[e.key] = false;
>>>>>>> REPLACE
<<<<<<< SEARCH
ctx.beginPath();
=======
        ctx.beginPath();
    }

    generateShape() {
        let shape = [];
        let points = Math.floor(Math.random() * 5) + 5;
        for (let i = 0; i < points; i++) {
            let angle = (Math.PI * 2 / points) * i;
            let offset = Math.random() * 0.4 + 0.8;
            shape.push({ x: Math.cos(angle) * this.size * offset, y: Math.sin(angle) * this.size * offset });
        }
        return shape;
    });

createAsteroids(6);
updateGame();