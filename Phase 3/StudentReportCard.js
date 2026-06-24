

for(let i =0; i<5; i++)
{


    let name = prompt("Enter Name: ");
    let rollNumber = prompt("Enter Roll Number: ");
    let department = prompt("Enter Department: ");
    let marks1 = Number(prompt("Enter Marks of Subject 1: "));

    let marks2 = Number(prompt("Enter Marks of Subject 2: "));
    let marks3 = Number(prompt("Enter Marks of Subject 3: "));
    let marks4 = Number(prompt("Enter Marks of Subject 4: "));
    let marks5 = Number(prompt("Enter Marks of Subject 5: "));

    let marks = marks1 + marks2 + marks3 + marks4 + marks5;
    let percentage = (marks/5);

    let grade;

    if(percentage >= 80)
    {
        grade = "A+";
    }
    else if(percentage >= 70 && percentage<80)
    {
        grade = "A";
    }
    else if(percentage >= 60 && percentage<70)
    {
        grade = "B";
    }
    else if(percentage >= 50 && percentage<60)
    {
        grade = "C";
    }
    else
    {
        grade = "F";
    }

    console.log("\n=====Student Information=====\n");
    console.log(`Student: ${name}`);
    console.log(`Roll Number: ${rollNumber}`);
    console.log(`Department: ${department}`);
    console.log(`Total Marks: ${marks}`);
    console.log(`Percentage: ${percentage}`);
    console.log(`Grade: ${grade}`);

    if(percentage>=50)
    {
        console.log("Pass");
    }
    else
    {
        console.log("Fail");
    }

    if(percentage >= 90)
    {
        console.log("Scholarship Eligibile.");
    }
    else
    {
        console.log("Scholarship Not Eligible.");
    }

}