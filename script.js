let calc = document.querySelector(".calc");
let todo = document.querySelector(".todo");

let calcBtn = document.querySelector("#calc");
let todoBtn = document.querySelector("#todo");

window.addEventListener("load", () => {
  calc.classList.add("inactive");
});

calcBtn.addEventListener("click", () => {
  calc.style.display = "block";
  todo.style.display = "none";

  console.log("Hello");
});
todoBtn.addEventListener("click", () => {
  todo.style.display = "flex";
  calc.style.display = "none";
});

let add  = ""