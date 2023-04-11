'use strict'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
    wrapper: '.body__wrapper',
    content: '.body__container'
});

window.onload = () => {
    // preloader();

    /* ------ default variables */
    document.body.style.cssText += '--scrollTop: 0px; --mouseX: 0px; --mouseY: 0px;' ;
}

window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`;
})

document.getElementsByClassName('layers').item(0).addEventListener('mousemove', e => {
    document.getElementsByClassName('layers').item(0).style.cssText +=  `--mouseX: ${window.innerWidth / 2 - e.pageX}px; --mouseY: ${window.innerHeight / 2 - e.pageY}px;`; 
})