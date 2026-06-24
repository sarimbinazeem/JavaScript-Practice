let word = prompt("Enter A Word: ");

let count =0;

for(let ch of word)
{
    let lowerCh = ch.toLowerCase();
    if(lowerCh == 'a' || lowerCh =='e' || lowerCh == 'i'  || lowerCh == 'o' || lowerCh == 'u')
    {
        count++;
    }
}

console.log("Word: ",word);
console.log("Total Vowels: ",count);