let word = prompt("Enter A Word: ");
let newWord = "";

let len = word.length;

console.log(`Original String: ${word}`);

for(let i = len-1; i >= 0; i--)
{
    newWord += word[i];
}

console.log(`Reversed String: ${newWord}`);