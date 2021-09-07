'use strict'

// objects 
let header = document.querySelector('.header');
let menu = document.querySelector('.menu');
let aboutBlock = document.querySelector('.about');


function changeHeaderBG(isWhiteBG) {
    if (isWhiteBG) {
        header.style.backgroundColor = '';
    } else {
        header.style.backgroundColor = 'rgba(17, 17, 17, 0.494)';
    }
}

function changeMenuColor(isWhiteBG) {
    if (isWhiteBG) {
        menu.style.filter = '';
    } else {
        menu.style.filter = 'invert()';
    }
}

const headerColor = () => {
    window.requestAnimationFrame(function() {
        let headerRect = header.getBoundingClientRect();
        let aboutBlockRect = aboutBlock.getBoundingClientRect();
        if ((headerRect.top >= aboutBlockRect.top + headerRect.height) && (headerRect.bottom <= aboutBlockRect.bottom - headerRect.height)) {
            changeHeaderBG(false);
        } else {
            changeHeaderBG(true);
        }

        if ((headerRect.top >= aboutBlockRect.top) && (headerRect.bottom <= aboutBlockRect.bottom)) {
            changeMenuColor(false);
        } else {
            changeMenuColor(true);
        }
    });
}

let animationElements = document.querySelectorAll('.startAnimationItem');


const animationHeader = () => {
    for (let i = 0; i < animationElements.length; i++) {
        setTimeout(() => { animationElements[i].classList.add('loaded'); }, 2000 + i * 500);
    }
}

document.addEventListener('scroll', headerColor);