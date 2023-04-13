'use strict'

function change_language() {
    let elements = document.body.getElementsByClassName('language');

    for (let i = 0; i < elements.length; i++)
        elements[i].classList.toggle('d-none');

    return;
}