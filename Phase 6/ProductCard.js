const card = document.createElement("div");

document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.margin = "0";

card.style.border = "2px solid black";
card.style.width = "220px";
card.style.padding = "10px";
card.style.borderRadius = "15px";
card.style.backgroundColor = "Bisque ";
card.style.textAlign = "center";

const title = document.createElement("h2");
title.innerText = "Laptop";
title.style.color = "SaddleBrown  ";
title.style.fontFamily = "Arial";
title.style.fontWeight = "800";
title.style.fontSize = "1.5rem";


const info = document.createElement("div");
info.style.display = "flex";
info.style.justifyContent = "center";
info.style.alignItems = "center";
info.style.gap = "20px";


const price = document.createElement("p");
price.innerText = "Rs. 50,000";
price.style.color = "white  ";
price.style.fontFamily = "Arial";
price.style.fontSize = "0.75rem";
price.style.backgroundColor = "gray";
price.style.borderRadius = "15px";
price.style.padding = "2px";
price.style.width = "100px";
price.style.textAlign = "center";

const discount = document.createElement("p");
discount.innerText = "Rs. 50,000";
discount.style.color = "white  ";
discount.style.fontFamily = "Arial";
discount.style.fontSize = "0.75rem";
discount.style.backgroundColor = "gray";
discount.style.borderRadius = "15px";
discount.style.padding = "2px";
discount.style.width = "100px";
discount.style.textAlign = "center";



info.appendChild(price);
info.appendChild(discount);

const btn = document.createElement("button");
btn.innerText = "Buy Now!";
btn.style.fontFamily = "Arial";
btn.style.fontSize = "0.75rem";
btn.style.backgroundColor = "white";
btn.style.border = "none";
btn.style.cursor = "pointer";
btn.style.borderRadius = "3px";
btn.style.padding = "10px";
btn.style.width = "100%";
btn.style.textAlign = "center";

card.appendChild(title);
card.appendChild(info);
card.appendChild(btn);

document.body.appendChild(card);