let count = 0;

const text = document.querySelector("#counter");
const btn = document.querySelector("#btn");

btn.addEventListener("click",() => 
{
    count++;
    text.innerText = `Count : ${count}`;
});

