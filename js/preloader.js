window.onload = function() {
    window.setTimeout(function() {
        document.querySelector('.preloader').classList.add('preloader--loaded');
    }, 4000);
    window.setTimeout(function() {
        document.querySelector('.preloader').style.display = 'none';
    }, 1000);
}