// game.js
document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('game-canvas');
    const context = canvas.getContext('2d');
    const gameOverImage = document.getElementById('game-over');

    // Set canvas size to fullscreen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Player object
    const player = {
        x: canvas.width / 2,
        y: canvas.height / 2,
        speed: 3,
        size: 10
    };

    // Gun object
    const gun = {
        image: new Image(),
        distance: 30, // Distance from player to gun
        width: 50,
        height: 50,
        angle: 0
    };

    // Load gun image from HTML
    gun.image.src = document.getElementById('gun-image').src;

    // Mouse position
    const mouse = {
        x: 0,
        y: 0
    };

    // Projectiles array
    const projectiles = [];

    // Enemies array
    const enemies = [];

    // Game state
    let isGameOver = false;

    // Update mouse position on mousemove
    canvas.addEventListener('mousemove', function(event) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = event.clientX - rect.left;
        mouse.y = event.clientY - rect.top;
    });

    // Handle mouse click to shoot
    canvas.addEventListener('click', function() {
        if (!isGameOver) {
            shoot();
        }
    });

    // Function to handle shooting
    function shoot() {
        projectiles.push({
            x: player.x + Math.cos(gun.angle) * gun.distance,
            y: player.y + Math.sin(gun.angle) * gun.distance,
            speed: 5,
            angle: gun.angle
        });
    }

    // Keyboard state
    const keys = {};

    // Handle keydown event
    document.addEventListener('keydown', function(event) {
        keys[event.key] = true;
    });

    // Handle keyup event
    document.addEventListener('keyup', function(event) {
        keys[event.key] = false;
    });

    // Spawn enemies at random positions
    function spawnEnemy() {
        const size = 20;
        const isBlue = Math.random() < 0.1; // 10% chance to spawn a blue enemy
        const enemy = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            speed: isBlue ? 4 : 1.5,
            size: size,
            hits: isBlue ? 6 : 1,
            color: isBlue ? 'blue' : 'green'
        };

        // Ensure enemies don't spawn too close to the player
        if (Math.hypot(enemy.x - player.x, enemy.y - player.y) > player.size + size) {
            enemies.push(enemy);
        } else {
            spawnEnemy();
        }
    }

    // Check for collisions between two circles
    function checkCollision(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const distance = Math.hypot(dx, dy);
        return distance < a.size + b.size;
    }

    // Game loop
    function update() {
        if (isGameOver) return;

        // Clear canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Move player based on keyboard input
        if (keys['w']) player.y -= player.speed;
        if (keys['a']) player.x -= player.speed;
        if (keys['s']) player.y += player.speed;
        if (keys['d']) player.x += player.speed;

        // Rotate gun towards mouse position
        const dx = mouse.x - player.x;
        const dy = mouse.y - player.y;
        gun.angle = Math.atan2(dy, dx);

        // Draw projectiles (lower z-index)
        projectiles.forEach((projectile, pIndex) => {
            projectile.x += Math.cos(projectile.angle) * projectile.speed;
            projectile.y += Math.sin(projectile.angle) * projectile.speed;
            context.beginPath();
            context.arc(projectile.x, projectile.y, 3, 0, Math.PI * 2);
            context.fillStyle = 'yellow';
            context.fill();

            // Check for collisions with enemies
            enemies.forEach((enemy, eIndex) => {
                if (checkCollision(projectile, enemy)) {
                    enemies.splice(eIndex, 1); // Remove the enemy
                    projectiles.splice(pIndex, 1); // Remove the projectile
                }
            });
        });

        // Draw player
        context.fillStyle = 'red';
        context.fillRect(player.x - player.size / 2, player.y - player.size / 2, player.size, player.size);

        // Draw gun
        const gunX = player.x + Math.cos(gun.angle) * gun.distance;
        const gunY = player.y + Math.sin(gun.angle) * gun.distance;
        context.save();
        context.translate(gunX, gunY);
        context.rotate(gun.angle);
        context.drawImage(gun.image, -gun.width / 2, -gun.height / 2, gun.width, gun.height);
        context.restore();

        // Move enemies towards player and draw them
        enemies.forEach(enemy => {
            const angle = Math.atan2(player.y - enemy.y, player.x - enemy.x);
            enemy.x += Math.cos(angle) * enemy.speed;
            enemy.y += Math.sin(angle) * enemy.speed;
            context.beginPath();
            context.arc(enemy.x, enemy.y, enemy.size / 2, 0, Math.PI * 2);
            context.fillStyle = enemy.color;
            context.fill();

            // Check for collision with player
            if (checkCollision(player, enemy)) {
                endGame();
            }
        });

        // Remove projectiles that are out of bounds
        projectiles.forEach((projectile, index) => {
            if (projectile.x < 0 || projectile.x > canvas.width || projectile.y < 0 || projectile.y > canvas.height) {
                projectiles.splice(index, 1);
            }
        });

        // Request next frame
        requestAnimationFrame(update);
    }

    // End the game
    function endGame() {
        isGameOver = true;
        gameOverImage.style.display = 'block';
        setTimeout(() => {
            gameOverImage.style.opacity = 1;
        }, 0);
        setTimeout(() => {
            location.reload();
        }, 3000); // Reload the page after 3 seconds
    }

    // Start game loop
    update();

    // Make canvas fullscreen
    canvas.requestFullscreen();

    // Spawn enemies periodically
    setInterval(spawnEnemy, 2000);
});
