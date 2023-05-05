'use strict'


let is_game_replay = false;

function replay_game() {
    if (is_game_replay) {
        return;
    } else {
        is_game_replay = true;
    }
        
    let replayWrapper = document.body.getElementsByClassName('replayWrapper');

    replayWrapper[0].classList.toggle('hidden');

    sleep(300).then(() => { 
        replayWrapper[0].classList.toggle('d-none');

        is_game_replay = false;
    });

    create_player();
    create_food();

    game_interval = setInterval(update, 70);

    return;
}