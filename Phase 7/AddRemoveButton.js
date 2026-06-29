let add = document.querySelector(".add");
let remove = document.querySelector(".remove");
let box = document.querySelector(".text");

add.addEventListener("click", () => box.classList.add("active"));
remove.addEventListener("click", () => box.classList.remove("active"));