let sentence = prompt("Enter A Sentence: ");

let character =0;
let words = 1;
let vowels = 0;
let consonants = 0;
let digits = 0;
let space = 0;
let reverse = "";

for(let ch of sentence)
{
    character++;

    if(ch === " ")
    {
        words++;
        space++;
    }

    let newCh = ch.toLowerCase();
    if(newCh === "a" || newCh === "e" || newCh === "i" || newCh === "o" || newCh === "u")
    {
        vowels++;
    }
    else
    {
          consonants++;
    }


    if(ch >= "0" && ch <= "9")
     {
         digits++;
     }
    }

for(let i= sentence.length -1 ; i>=0; i--)
{

    reverse += sentence[i];
}


console.log(`Total Characters: ${character}`);
console.log(`Total Words: ${words}`);
console.log(`Total Vowels: ${vowels}`);
console.log(`Total Consonants: ${consonants}`);
console.log(`Total Digits: ${digits}`);
console.log(`Total Spaces: ${space}`);
console.log(`Reversed String: ${reverse}`);
if(sentence === reverse)
{
    console.log("Palindrome ");
}
else
{
    console.log("Not Palindrome");
}