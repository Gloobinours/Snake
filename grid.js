
const grid_size = 17

export const randomGridPosition = () => {
    return {
        x: Math.floor(Math.random() * grid_size) +1,
        y: Math.floor(Math.random() * grid_size) +1
    }
}

export const outsideGrid = (position) => {
    return position.x < 1 || position.x > grid_size || position.y < 1 || position.y > grid_size;
};
