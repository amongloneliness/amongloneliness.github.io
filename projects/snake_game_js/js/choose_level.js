'use strict'

let level = 1;

function choose_level(lvl) {
    level = lvl;

    document.body.getElementsByClassName('chosen')[0].classList.toggle('chosen');
    document.body.getElementsByClassName('choose__option')[lvl - 1].classList.toggle('chosen');

    return;
}