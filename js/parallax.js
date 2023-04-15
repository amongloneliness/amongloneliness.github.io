'use strict'

// обработка скроллинга
window.addEventListener('scroll', e => {
    if (this.scrollY <= document.body.getElementsByClassName('layers')[0].clientHeight)
        document.body.style.cssText += `--scrollTop: ${this.scrollY}px`;
});

// обработка движения мыши
document.getElementsByClassName('layers').item(0).addEventListener('mousemove', e => {
    document.getElementsByClassName('layers').item(0).style.cssText +=  `--mouseX: ${window.innerWidth / 2 - e.pageX}px; --mouseY: ${window.innerHeight / 2 - e.pageY}px;`; 
});