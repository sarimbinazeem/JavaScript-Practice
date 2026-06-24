let number = Number(prompt("Enter A Number: "));


for(let i =0; i<=number ;i++ )
{
    let pattern = "";

    for(let j=0; j< i;j++)
    {
        pattern += "*";
    }

    console.log(pattern);
}   