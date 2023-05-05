'use strict'


function main_menu() {
    clearInterval(game_interval);

    squares = 16;

    let chooseWrapper = document.body.getElementsByClassName('chooseWrapper');
    let gameWrapper = document.body.getElementsByClassName('gameWrapper');

    chooseWrapper[0].classList.toggle('d-none');
    gameWrapper[0].classList.toggle('hidden');

    sleep(300).then(() => {
        gameWrapper[0].classList.toggle('d-none');
        chooseWrapper[0].classList.toggle('hidden');
    });

    let squares_to_delete = document.getElementsByClassName('square');
    let lines = document.getElementsByClassName('line');

    while (squares_to_delete.length != 0)
        squares_to_delete[0].remove();

    while(lines.length != 0)
        lines[0].remove();
    
    return;
}