const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));
updateBody();

function updateBody() {
  bodyEl.style.background = inputEl.checked ? "black" : "white";
  updateLocalStorage();
}

inputEl.addEventListener("change", updateBody);

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}
