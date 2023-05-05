'use strict'


function move_player() {
    let add_x = (state == 'left') ? -1 : (state == 'right') ? 1 : 0; 
    let add_y = (state == 'up')   ? -1 : (state == 'down')  ? 1 : 0;

    if (snake.length > 1) {
        if ((state == 'left' && snake[snake.length - 1].x - 1 == snake[snake.length - 2].x && snake[snake.length - 1].y == snake[snake.length - 2].y) ||
            (state == 'right' && snake[snake.length - 1].x + 1 == snake[snake.length - 2].x && snake[snake.length - 1].y == snake[snake.length - 2].y)
        ) {
            add_x = -add_x;
        }

        if ((state == 'up' && snake[snake.length - 1].x == snake[snake.length - 2].x && snake[snake.length - 1].y - 1 == snake[snake.length - 2].y) ||
            (state == 'down' && snake[snake.length - 1].x == snake[snake.length - 2].x && snake[snake.length - 1].y + 1 == snake[snake.length - 2].y)
        ) {
            add_y = -add_y;
        }
    }

    let x = snake[snake.length - 1].x + add_x;
    let y = snake[snake.length - 1].y + add_y;

    if (x > squares - 1 || y > squares - 1 || x < 0 || y < 0 || 
        (check_collision(x, y) && (add_x != 0 || add_y != 0))
    ) {
        dead_player();
        player_status = false;
        
        return;
    }

    snake.push(new Point(x, y));

    if ((x == food.x && y == food.y)) {
        score += 1;
        create_food();
    } else {
        snake.shift();
    }

    return;
}