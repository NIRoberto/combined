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

let form = document.querySelector("#form");
let add = document.querySelector("#add");
let allTodo = document.querySelector(".all");
let editBtn = document.querySelector(".editBtn");
let editInput = document.querySelector(".editInput");

let input = document.querySelector("#input");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let todo = input.value.trim();
  if (todo.length !== 0) {
    allTodo.innerHTML += `
      <div class="singleTodo">
          <h4>${todo}</h4>
              <div>
                <button id="edit">Edit</button>
                <button id="del">Delete</button>
              </div>
            </div>
    `;
    input.value = "";
  } else {
  }
  let up = document.querySelectorAll(".update");
  let all = document.querySelectorAll(".singleTodo");
  all.forEach((el, i) => {
    let s = false;
    let u = false;

    el.addEventListener("click", (event) => {
      if (
        event.target.nodeName === "BUTTON" &&
        event.target.innerHTML == "Delete"
      ) {
        event.target.parentNode.parentNode.remove();
      } else if (
        event.target.nodeName === "BUTTON" &&
        event.target.innerHTML == "Edit"
      ) {
        editInput.style.display = "flex";
        editBtn.style.display = "flex";
        input.style.display = "none";
        add.style.display = "none";
        editInput.value =
          event.target.parentNode.parentNode.firstElementChild.innerHTML;
        editBtn.addEventListener("click", (ev) => {
          ev.preventDefault();
          editInput.style.display = "none";
          editBtn.style.display = "none";
          input.style.display = "flex";
          add.style.display = "flex";
          event.target.parentNode.parentNode.firstElementChild.innerHTML =
            editInput.value;
        });
      } else if (event.target.nodeName == "H4") {
        s = !s;
        event.target.style.textDecoration = `${s ? "line-through" : "none"}`;
      }
    });
  });
});
