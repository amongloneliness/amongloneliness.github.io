'use strict'


function dead_player() {
    let all_squares = document.body.getElementsByClassName('square');

    for (let i = snake.length - 1; i >= 0; i--)
        sleep(100 + (snake.length - i) * 32).then(() => {
            all_squares[snake[i].x + snake[i].y * squares].classList.add('snake_dead');
        });

    return;
}