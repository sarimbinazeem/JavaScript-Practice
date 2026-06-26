let marks = [];

for (let i = 1; i <= 10; i++) {

    let mark = Number(prompt(`Enter marks of Student ${i}:`));

    while (mark < 0 || mark > 100) {
        mark = Number(prompt("Invalid marks! Enter again:"));
    }

    marks.push(mark);
}

function calculateAverage(numbers)
{
    if(numbers.length === 0) return 0;

    let total = numbers.reduce( (sum,mark) =>{ return sum+mark;});

    return total/ numbers.lenght;
}

function calculateHighest(numbers)
{
    if(numbers.length === 0) return 0;

    return numbers.reduce( (prev,curr) => { return (prev>curr)? prev:curr;})
}

function calculateLowest(numbers)
{
    if(numbers.length === 0) return 0;

    return numbers.reduce( (prev,curr) => { return (prev<curr)? prev:curr;})
}

function calculateGrade(mark) {

    if (mark >= 90) return "A+";
    if (mark >= 80) return "A";
    if (mark >= 70) return "B";
    if (mark >= 60) return "C";
    if (mark >= 50) return "D";

    return "F";
}

console.log("===== Student Report =====");

marks.forEach((mark,index) =>
{
    console.log(`Student ${index +1}: ${mark} (${calculateGrade(mark)})`)
});


console.log("------------------------");
console.log(`Average : ${calculateAverage(marks)}`);
console.log(`Highest : ${calculateHighest(marks)}`);
console.log(`Lowest  : ${calculateLowest(marks)}`);