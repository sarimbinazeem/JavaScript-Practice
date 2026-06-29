const status = document.querySelector(".status");
const btn = document.getElementById("btn");
const box = document.querySelector(".card");

btn.addEventListener("click", () =>
{
    if(status.classList.contains("offline"))
    {
        status.innerText = "Online";

        status.classList.remove("offline");
        status.classList.add("online");
        
        box.classList.remove("offline-card");
        box.classList.add("online-card");

        btn.innerText = "Go Offline";

        btn.style.backgroundColor = "red";
        box.style.border = " 3px solid green";
    }
    else
    {
        status.innerText = "Offline";

        status.classList.remove("online");
        status.classList.add("offline");

        btn.innerText = "Go Online";
        btn.style.backgroundColor = "green";
        box.style.border = " 3px solid red";
    }
});