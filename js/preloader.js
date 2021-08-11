window.onload = function() {
    window.setTimeout(function() {
        document.querySelector('.preloader').classList.add("loaded");
    }, 500);
    window.setTimeout(function() {
        document.querySelector('.preloader').classList.add("done");
        document.querySelector('.preloader').classList.remove("loaded");
    }, 1000);
}