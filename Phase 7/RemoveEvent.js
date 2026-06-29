const btn = document.querySelector("button");

const greet = () => {
    console.log("Hello!");
    btn.removeEventListener("click",greet);
}

btn.addEventListener("click",greet);