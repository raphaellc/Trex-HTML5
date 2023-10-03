const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

const tRex = {
    x: 50,
    y: canvas.height - 40,
    width: 40,
    height: 40,
    jumping: false,
    jumpHeight: 150,
    jumpSpeed: 5
	
};

const obstacles = [];

let score = 0;
let isGameOver = false;

// Function to draw the T-Rex
function drawTrex() {
    ctx.fillStyle = "green";
    ctx.fillRect(tRex.x, tRex.y, tRex.width, tRex.height);
}


// Function to draw obstacles
function drawObstacles() {
    // Loop through the obstacles array and draw each one
    for (let i = 0; i < obstacles.length; i++) {
        const obstacle = obstacles[i];
        ctx.fillStyle = "red";
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    }
}

// Function to update the game
function update() {
    if (!isGameOver) {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the T-Rex
        drawTrex();

        // Draw and update obstacles
        drawObstacles();
        updateObstacles();

        // Update the score
        ctx.fillStyle = "black";
        ctx.font = "24px Arial";
        ctx.fillText("Score: " + score, 20, 30);

        // Check for collisions
        checkCollision();

        // Request animation frame
        requestAnimationFrame(update);
    } else {
        // Game over screen
        ctx.fillStyle = "black";
        ctx.font = "36px Arial";
        ctx.fillText("Game Over", canvas.width / 2 - 100, canvas.height / 2);
    }
}

// Function to handle jumping
function jump() {
      if (!tRex.jumping) {
        tRex.jumping = true;
        let jumpHeight = 0;
        let jumpInterval = setInterval(() => {
            if (jumpHeight < tRex.jumpHeight) {
                tRex.y -= tRex.jumpSpeed; // Mova o T-Rex para cima
                jumpHeight += tRex.jumpSpeed;
            } else {
                clearInterval(jumpInterval);
                fall();
            }
        }, 10);
    }
}

// Function to make T-Rex fall after jumping
function fall() {
      let fallInterval = setInterval(() => {
        if (tRex.y < canvas.height - tRex.height) {
            tRex.y += tRex.jumpSpeed; // Mova o T-Rex para baixo
        } else {
            clearInterval(fallInterval);
            tRex.y = canvas.height - tRex.height; // Defina a posição final do T-Rex no chão
            tRex.jumping = false; // O T-Rex não está mais pulando
        }
    }, 10);
}

// Function to generate random obstacles
function generateObstacle() {
    const obstacle = {
        x: canvas.width,
        y: canvas.height - 40,
        width: 20 + Math.random() * 30,
        height: 40 + Math.random() * 60
    };
    obstacles.push(obstacle);
}

// Function to update obstacle positions
function updateObstacles() {
    for (let i = 0; i < obstacles.length; i++) {
        obstacles[i].x -= tRex.jumpSpeed;
        if (obstacles[i].x + obstacles[i].width < 0) {
            obstacles.splice(i, 1);
            score++;
        }
    }
    if (Math.random() < 0.02) {
        generateObstacle();
    }
}

// Function to check for collisions
function checkCollision() {
    for (let i = 0; i < obstacles.length; i++) {
        if (
            tRex.x + tRex.width > obstacles[i].x &&
            tRex.x < obstacles[i].x + obstacles[i].width &&
            tRex.y + tRex.height > obstacles[i].y
        ) {
            isGameOver = true;
        }
    }
}

// Event listener for jumping
document.addEventListener("keydown", function (event) {
    if (event.keyCode === 32) {
        jump();
    }
});

// Start the game loop
update();
