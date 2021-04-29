
import { getInputDirection } from "./input.js";

export const snake_speed = 8;
const snakeBody = [ // position of each body part of snake on the grid
    { x: 9, y: 9 },
    // { x: 10, y: 9 },
    // { x: 11, y: 9 }
];
let newSegments = 0;

export let updateSnake = () => {
    addSegments();
    const inputDirection = getInputDirection();
    for (let i = snakeBody.length -2; i >= 0; i--){
        snakeBody[ i + 1 ] = { ...snakeBody[i] };
    };
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
};

export let drawSnake = (gameBoard) => {
    snakeBody.forEach(bodyParts => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = bodyParts.y; // set x position to gridRowStart
        snakeElement.style.gridColumnStart = bodyParts.x; // set y position to gridColumnStart
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    });
};

export let expandSnake = (amount) => {
    newSegments += amount;
};

export let onSnake = (position, { ignoreHead = false } = {}) => {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) {
            return false;
        };
        return equalPositions(segment, position);
    });
};

export const getSnakeHead = () => {
    return snakeBody[0];
}

export const snakeIntersection = () => {
    return onSnake(snakeBody[0], { ignoreHead: true })
};

const equalPositions = (pos1, pos2) => {
    return pos1.x === pos2.x && pos1.y === pos2.y;
};

const addSegments = () => {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length -1] });
    };

    newSegments = 0;
};
