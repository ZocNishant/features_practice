let panel = document.querySelectorAll(".element");

panel.forEach(function (list) {
  list.addEventListener("mouseenter", function () {
    list.childNodes[1].style.opacity = 1;
  });

  list.addEventListener("mouseleave", function () {
    list.childNodes[1].style.opacity = 0;
  });

  list.addEventListener("mousemove", function (details) {
    list.childNodes[1].style.left = details.clientX + "px";
    list.childNodes[1].style.top = details.clientY + "px";
  });
});
