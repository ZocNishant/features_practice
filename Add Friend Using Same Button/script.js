let isSathi = document.querySelector(".toggleFriend");
let addRemove = document.querySelector("#add");

let count = 0;

addRemove.addEventListener("click", function () {
  if (count == 0) {
    isSathi.innerHTML = "FRIEND";
    isSathi.style.color = "green";
    addRemove.innerHTML = "Remove Friend";
    count = 1;
  } else {
    isSathi.innerHTML = "STRANGER";
    isSathi.style.color = "gainsboro";
    addRemove.innerHTML = "Add Friend";
    count = 0;
  }
});
