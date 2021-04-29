
import { snake_speed, updateSnake, drawSnake, getSnakeHead, snakeIntersection } from './snake.js';
import { updateFood, drawFood } from './food.js';
import { outsideGrid } from './grid.js';
import { getGameStarted } from './input.js'

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('gameBoard');

let main = (currentTime) => {
    if (gameOver) {
        return alert('Game Over');
    };

    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000; // 1000ms = 1sec
    if(secondsSinceLastRender < 1 / snake_speed){
        return;
    };

    lastRenderTime = currentTime;
    update()
    draw()
};

window.requestAnimationFrame(main);

let update = () => {
    updateSnake();
    updateFood();
    checkDeath();
};

let draw = () => {
    gameBoard.innerHTML = ''; // Clear the gameboard for each frame
    drawSnake(gameBoard);
    drawFood(gameBoard);
};

const checkDeath = () => {
    gameOver = (outsideGrid(getSnakeHead()) || snakeIntersection()) && getGameStarted();
};
