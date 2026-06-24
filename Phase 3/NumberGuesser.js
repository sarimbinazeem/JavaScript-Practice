let number = 67;
let attempts = 0;
let user = 0 ;

while(number != user)
{
    user = Number(prompt("Guess The Number: "));
    if(number >user)
    {
        console.log("Too Low.");
    }
    if(user > number)
    {
        console.log("Too High.");
    }

    attempts++;

    user = Number(prompt("Guess The Number: "));
}

console.log("Correct! Attempts: ",attempts);