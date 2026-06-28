const  table = document.createElement("table");

document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.margin = "0";


table.style.backgroundColor = "#209cee";
table.style.color = "white";

table.setAttribute("border","1");
table.style.borderCollapse = "collapse";

const  row1 = document.createElement("tr");

const  heading1 = document.createElement("th");
heading1.innerText = "Name";

const  heading2 = document.createElement("th");
heading2.innerText = "Age";

const  heading3 = document.createElement("th");
heading3.innerText = "Department";


heading1.style.padding = "10px";
heading2.style.padding = "10px";
heading3.style.padding = "10px";

heading1.style.backgroundColor = "#0d6efd";
heading2.style.backgroundColor = "#0d6efd";
heading3.style.backgroundColor = "#0d6efd";

row1.appendChild(heading1);
row1.appendChild(heading2);
row1.appendChild(heading3);

const  row2 = document.createElement("tr");

const  data1 = document.createElement("td");
data1.innerText = "Sarim";

const  data2 = document.createElement("td");
data2.innerText = "18";

const  data3 = document.createElement("td");
data3.innerText = "Computer Science";

data1.style.padding = "10px";
data2.style.padding = "10px";
data3.style.padding = "10px";


row2.appendChild(data1);
row2.appendChild(data2);
row2.appendChild(data3);

table.appendChild(row1);
table.appendChild(row2);



document.body.appendChild(table);