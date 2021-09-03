var animations = {
    opacityOfLinks: `.7`,

}

var animationElements = document.querySelectorAll('.animationItem');

animationHeader = () => {
    for (let i = 0; i < animationElements.length; i++) {
        setTimeout(() => { animationElements[i].classList.add('loaded'); }, 2000 + i * 500);
    }
}