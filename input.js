
let inputDirection = {x: 0, y: 0};
let lastInputDirection = {x: 0, y: 0};
let gameStarted = false;

window.addEventListener('keydown', e => {
    gameStarted = true;
    switch (e.key) {
        case 'ArrowUp':
            if (lastInputDirection.y !== 0) {
                break;
            }
            inputDirection = { x: 0, y: -1};
            break;
        case 'ArrowDown':
            if (lastInputDirection.y !== 0) {
                break;
            }
            inputDirection = { x: 0, y: 1};
            break;
        case 'ArrowRight':
            if (lastInputDirection.x !== 0) {
                break;
            }
            inputDirection = { x: 1, y: 0};
            break;
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0) {
                break;
            }
            inputDirection = { x: -1, y: 0};
            break;
    };
});

export const getGameStarted = () => gameStarted;

export const getInputDirection = () => {
    lastInputDirection = inputDirection;
    return inputDirection;
};
