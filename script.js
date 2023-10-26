console.log("Veikia");
console.log("Veikia");
console.log("Veikia");

const numberSpan = document.querySelector(".span");
const subtract = document.querySelector(".subtract");
const reset = document.querySelector(".reset");
const add = document.querySelector(".add");

subtract.addEventListener("click", () => {
  numberSpan.innerHTML--;
});

add.addEventListener("click", () => {
  numberSpan.innerHTML++;
});

reset.addEventListener("click", () => {
  numberSpan.innerHTML = 0;
});
