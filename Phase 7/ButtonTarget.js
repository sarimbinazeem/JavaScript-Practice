const buttons = document.querySelectorAll("button");

buttons.forEach( (button) => {
    button.addEventListener("click" , (event)=> {
        console.log(`Button Targetted: ${event.target.innerText}`);
    });
});

