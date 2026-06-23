let number = Number(prompt("Enter A Number: "));

if(number >0)
{
    console.log("Positive");
}
else if(number < 0)
{
    console.log("Negative");
}
else 
{
    console.log("Zero");
}

if(number%2 ==0)
{
    console.log("Even");
}
else{
    console.log("Odd");
}

if(number%3 === 0)
{
    console.log("Divisible By 3.");
}
else
{
    console.log("Not Divisble By 3");
}

if(number%5 === 0)
{
    console.log("Divisible By 5.");
}
else
{
    console.log("Not Divisble By 5");
}

if(number%3 ===0 && number%5 === 0)
{
    console.log("Divisible By 3 and 5.");
}
else
{
    console.log("Not Divisble By 3 and 5");
}

if(number>100)
{
    console.log("Greater Than 100");
}
else
{
    console.log("Not Greater Than 100");
}