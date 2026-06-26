let marks = [];

for(let i = 0; i<5;i++)
{
    let mark = Number(prompt(`Enter Mark of Subject ${i}: `));
    while(mark >100 || mark<0)
    {
        mark = Number(prompt(`Invalid Marks! Enter Mark of Student ${i+1}: `));
    }

    marks.push(mark);
}


let highest = marks[0];
let lowest = marks[0];
let total = 0;



console.log("\n========Student Management System========\n");
for(let i = 0; i<5; i++)
{
    total += marks[i];

    if(marks[i] > highest)
    {
        highest = marks[i];
    }
    if(marks[i] < lowest)
    {
        lowest = marks[i];
    }

    let grade;

    if(marks[i] >= 90)
    {
        grade = "A+"
    }
    else if(marks[i] >= 80)
    {
        grade = "A"
    }
    else if(marks[i] >= 70)
    {
        grade = "B"
    }
    else if(marks[i] >= 60)
    {
        grade = "C"
    }
    else if(marks[i] >= 50)
    {
        grade = "D"
    }
    else
    {
        grade = "F"
    }

    console.log(`Student ${i+1}: ${marks[i]}   ${grade}`);
}

let average = total/5;

console.log("-----------------------------------");
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);
console.log(`Average: ${average}`);
