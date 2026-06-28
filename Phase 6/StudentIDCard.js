document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.margin = "0";


const card = document.createElement("div");

card.style.width ="300px";
card.style.padding = "20px";
card.style.borderRadius = "10px";
card.style.margin = "40px auto";
card.style.border = "1px solid #999";
card.style.textAlign = "center";
card.style.backgroundColor = "#e2e0e0"
card.style.boxShadow = "0px 10px 50px #7a7a7a ";
card.style.color = "#1A1A1A";
card.style.fontFamily = "Arial";

const heading = document.createElement("h1");

heading.innerText = "Student ID Card";
heading.style.fontSize = "2rem";
heading.style.fontWeight = "900";
heading.style.color = "#1A1A1A";


const image = document.createElement("img");
image.setAttribute("src","sarim.jpg");
image.style.width = "200px";
image.style.height = "200px";
image.style.borderRadius = "50%";
image.style.border = "2px solid black";
image.style.marginBottom = "15px";

// Name
const name = document.createElement("h3");
name.innerText = "Sarim Bin Azeem";
name.style.fontWeight = "800";
name.style.fontSize = "1.25rem";


// Roll Number
const roll = document.createElement("p");
roll.innerText = "Roll No: 574";

// Department
const department = document.createElement("p");
department.innerText = "Department: Computer Science";

// Semester
const semester = document.createElement("p");
semester.innerText = "Semester: 3";

roll.style.margin = "6px";
department.style.margin = "6px";
semester.style.margin = "6px";

// Append everything
card.appendChild(heading);
card.appendChild(image);
card.appendChild(name);
card.appendChild(roll);
card.appendChild(department);
card.appendChild(semester);




document.body.appendChild(card);