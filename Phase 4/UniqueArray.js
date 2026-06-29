let numbers = [1,2,2,2,3,3,4,4,5,6];

let unique = [];

for(let i=0; i< numbers.length; i++)
{
    let exists = false;

    for(let j=0; j<numbers.length ; j++)
    {
        if(numbers[i] === unique[j])
        {
            exists = true;
            break;
        }
    }

    if(!exists)
    {
        unique.push(numbers[i]);
    }



}

console.log(unique);