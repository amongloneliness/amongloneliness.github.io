'use strict'

window.onload = () => {
    // default variables
    document.body.style.cssText += '--scrollTop: 0px; --mouseX: 0px; --mouseY: 0px;' ;
    // hide loader
    document.body.getElementsByClassName('preloader')[0].classList.toggle('preloader--loaded');
}
