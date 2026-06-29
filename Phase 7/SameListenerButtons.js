const buttons = document.querySelectorAll("button");

const btnClicked = (event) => {
    console.log(`${event.target.innerText} Button Clicked`);
}

buttons.forEach((button) =>
{
    button.addEventListener("click",btnClicked);
});