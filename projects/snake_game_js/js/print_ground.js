'use strict'


function print_ground() {
    let all_squares = document.body.getElementsByClassName('square');
    
    for (let i = 0; i < squares; i++) {
        for (let j = 0; j < squares; j++) {
            all_squares[i + j * squares].classList.remove('snake');
            all_squares[i + j * squares].classList.remove('food');
            all_squares[i + j * squares].classList.remove('snake_dead');
        }
    }

    return;
}