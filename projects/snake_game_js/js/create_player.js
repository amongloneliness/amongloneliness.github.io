'use strict'


class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
};

// default properties
let state;
let snake;
let player_status;
let score;

function check_collision(x, y) {
    for (let i = 0; i < snake.length; i++)
        if (x == snake[i].x && y == snake[i].y)
            return true;

    return false;
}

function create_player() {
    snake = [new Point(0, 0)];
    state = 'none';
    player_status = true;
    score = 0;

    snake[0].x = Math.floor(Math.random() * squares);
    snake[0].y = Math.floor(Math.random() * squares);

    return;
}