'use strict'


let ground = [];

function create_ground(sz)
{
    squares = sz;

    let game__ground = document.body.getElementsByClassName('game__ground');
    let ground_sz = Math.min(window.innerWidth, window.innerHeight);
    let square_sz = ground_sz / ((squares + squares - 2));

    let square_style = `style="width: ${square_sz}px; height: ${square_sz}px;"`;
    let square_html = `<div ${square_style} class="square hidden"></div>`;

    for (let i = 0; i < sz; i++) {
        ground[i] = []
        game__ground[0].innerHTML += '<div class="line"></div>';

        for (let j = 0; j < sz; j++) {
            ground[i][j] = 0;
            document.body.getElementsByClassName('line')[i].innerHTML += square_html;
        }
    }

    for (let i = 0; i < sz * sz; i++) {
        sleep(100 + 2 * Math.floor(Math.random() * (256 - i) + i)).then(() => {
            document.body.getElementsByClassName('square')[i].classList.toggle('hidden');
        });
    }

    return;
}