const mainBox = document.querySelector("#container");

const pointer = document.querySelector(".cursor");

mainBox.addEventListener("mousemove", function (details) {
  pointer.style.left = details.clientX + "px";
  pointer.style.top = details.clientY + "px";
});
