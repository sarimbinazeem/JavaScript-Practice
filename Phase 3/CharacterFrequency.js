let word = prompt("Enter Your Word: ");

for(let i =0 ; i< word.length; i++)
{
    let currentChar = word[i];
    let count = 0;

    let alreadyCounted =  false;

    for(let j=0; j<i;j++)
    {
        if(word[j] === currentChar  )
        {
            alreadyCounted = true;
            break;
        }
    }

    if(!alreadyCounted)
    {
        for(let j=0; j<word.length; j++)
        {
            if(word[j] === currentChar)
            {
                count++;
            }
        }

        console.log(`${currentChar} = ${count}`);
    }

}