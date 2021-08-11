window.onload = function() {
    window.setTimeout(function() {
        document.querySelector('.preloader').classList.add('preloader--loaded');
    }, 500);
    window.setTimeout(function() {
        document.querySelector('.preloader').style.display = 'none';
    }, 1000);
}