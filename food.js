
import { onSnake, expandSnake } from './snake.js';
import { randomGridPosition } from './grid.js'

const getRandomFoodPosition = () => {
    let newFoodPosition;
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition();
    };
    return newFoodPosition;
};

let food = getRandomFoodPosition();
const expansion_rate = 1;

export let updateFood = () => {
    if ( onSnake(food) ) {
        // console.log(onSnake(food));
        expandSnake(expansion_rate);
        food = getRandomFoodPosition();
    };
};

export let drawFood = (gameBoard) => {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y; // set x position to gridRowStart
    foodElement.style.gridColumnStart = food.x; // set y position to gridColumnStart
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
};

