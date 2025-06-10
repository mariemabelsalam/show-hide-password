const appearIcon = document.getElementById("appear");
const disappearIcon = document.getElementById("disappear");
const myInput = document.querySelector("input");
// console.log(appearIcon , myInput);

appearIcon.addEventListener("click", function () {
  if (myInput.value.trim() !== "") {
    myInput.type = "text";
    disappearIcon.classList.replace("d-none", "d-inline");
    appearIcon.classList.replace("d-inline", "d-none");
  }
});

disappearIcon.addEventListener("click", function () {
  myInput.type = "password";
  disappearIcon.classList.replace("d-inline", "d-none");
  appearIcon.classList.replace("d-none", "d-inline");
});
