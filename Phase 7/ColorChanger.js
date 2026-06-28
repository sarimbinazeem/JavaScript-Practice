let box = document.querySelector(".box");

box.addEventListener("mouseover", () => 
{
    box.classList.add("hovered");
});

box.addEventListener("mouseleave", ()=>
 {
     box.classList.remove("hovered");
});