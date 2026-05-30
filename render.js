const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const gridSize = 20;
let snake = [{x: 10, y: 10}];
let food = {x: 15, y: 15};

function initSnake() {
    snake = [{x: 10, y: 10}];
    direction = { x: 1, y: 0 };
    placeFood();
    gameLoop();
}

function gameLoop() {
    if (!gameRunning) return;

    setTimeout(() => {
        clearCanvas();
        moveSnake();
        drawFood();
        drawSnake();

        if (checkGameOver()) {
            gameRunning = false;
            alert('Oyun bitdi! Qeydiyyata keçirilir...');
            showRegistration();
            return;
        }

        gameLoop();
    }, 120);
}

function clearCanvas() {
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake() {
    ctx.fillStyle = '#10b981';
    snake.forEach(part => {
        ctx.fillRect(part.x * gridSize, part.y * gridSize, gridSize-2, gridSize-2);
    });
}

function moveSnake() {
    const head = {x: snake[0].x + direction.x, y: snake[0].y + direction.y};
    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        snakeTotal += 0.5;
        document.getElementById('snakeScore').innerText = snake.length - 1;
        updateTotal();
        placeFood();
    } else {
        snake.pop();
    }
}

function placeFood() {
    food.x = Math.floor(Math.random() * (canvas.width / gridSize));
    food.y = Math.floor(Math.random() * (canvas.height / gridSize));
}

function drawFood() {
    ctx.fillStyle = '#f59e0b';
    ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize-2, gridSize-2);
}

function checkGameOver() {
    const head = snake[0];
    if (head.x < 0 || head.x >= canvas.width/gridSize || head.y < 0 || head.y >= canvas.height/gridSize) {
        return true;
    }
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) return true;
    }
    return false;
}