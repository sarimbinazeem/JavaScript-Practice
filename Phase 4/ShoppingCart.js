let products = ["Mouse","Keyboard","Laptop","Monitor"];
let prices = [1000,2500,50000,25000];

let total = 0;

console.log("========Shopping Cart========");

for(let i=0; i<products.length ;i++)
{
    console.log(`Item ${i+1}: ${products[i]} - Rs ${prices[i]} `);
    total += prices[i];
}

console.log(`Total Price: Rs. ${total}`);

let remove = Number(prompt("Enter Item Number To Remove: "));

while(remove<1 || remove > products.length)
{
    remove = Number(prompt("Invalid Number! Enter Item Number To Remove: "));
}

 products.splice(remove -1, 1);
  prices.splice(remove -1, 1);

 total = 0;

 console.log("======== Updated Shopping Cart========");

 for(let i=0; i<products.length ;i++)
 {
     console.log(`Item ${i+1}: ${products[i]} - Rs ${prices[i]} `);
    total += prices[i];
 }

  console.log(`Total Price: Rs. ${total}`);
