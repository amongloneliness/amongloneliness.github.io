function parallax(event) {
  this.querySelectorAll(".layer").forEach(layer => {
    let speed = layer.getAttribute("data-speed") * 0.01;
    let distanceX = (screen.width / 2 - event.clientX) * speed;
    let distanceY = (screen.height / 2 - event.clientY) * speed;
    layer.style.transform = `translate(${distanceX}px, ${distanceY}px)`;
  });
}

document.addEventListener("mousemove", parallax);