document.querySelector('.mobile-menu-icon').onclick = function () {
  this.classList.toggle('active');
  document.querySelector('.mobile-menu').classList.toggle('active');
}