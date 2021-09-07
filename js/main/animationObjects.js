window.addEventListener("scroll", nowScrolling);

// all elements with animation
var hiddenElements = document.querySelectorAll('.animationItem');

function nowScrolling() {
    for (let i = 0; i < hiddenElements.length; i++) {
        scrolling(hiddenElements[i]);
    }
}

function scrolling(element) {
    window.requestAnimationFrame(function() {
        if (isPartiallyVisible(element)) {
            element.classList.remove('invisible');
        } else {
            element.classList.add('invisible');
        }
    });
}

function isPartiallyVisible(element) {
    var elementBoundary = element.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function isFullyVisible(element) {
    var elementBoundary = element.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;

    return ((top >= 0) && (bottom <= window.innerHeight));
}