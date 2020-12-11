const red = document.querySelector('.red');
window.onmousemove = function (e) {
  const x = e.clientX;
  red.style.left = x + 'px';
}