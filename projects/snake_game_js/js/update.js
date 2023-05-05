'use strict'

function update() {
    if (player_status) {
        print_ground();
        print_food();
        print_player();

        document.body.getElementsByClassName('score')[0].textContent = score;
    } else {
        clearInterval(game_interval);
        
        let replayWrapper = document.body.getElementsByClassName('replayWrapper');

        replayWrapper[0].classList.toggle('d-none');

        sleep(300).then(() => { 
            replayWrapper[0].classList.toggle('hidden');
        });
        
    }

    return;
}