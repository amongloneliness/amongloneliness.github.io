document.querySelector('.mobile_menu_icon').onclick = function () {
  this.classList.toggle('active');
  document.querySelector('.mobile_menu').classList.toggle('active');
}