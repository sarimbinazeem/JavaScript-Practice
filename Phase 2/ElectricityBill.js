let units = Number(prompt("Enter Units Consumed: "));

let money;

if(units<=100 && units>=0)
{
    money = 15;
}
else if(units>=101 && units<=200)
{
    money = 20;
}
else if(units>=201 && units<= 300)
{
    money = 25;
}
else if(units>300)
{
    money =30;
}
else
{
    console.log("Invalid Units Entered.");
    money = 0;
}

let bill = money * units;

console.log("\n=====Electricity Bill=====\n");
console.log(`Units: ${units}`);
console.log(`Rate: ${money}`);
console.log(`Total Bill: ${bill}`);