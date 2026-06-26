let products = ["Mouse", "Keyboard", "Laptop"];
let prices = [1000, 2500, 50000];


function calculateTotal()
{
    return prices.reduce((prev,curr) => {return prev + curr});
}


function displayCart()
{
    console.log("===== Shopping Cart =====");

    products.forEach((product,index) => {
        console.log(`${index +1}) ${product} - Rs.${prices[index]}`);
    });

    console.log(`Total = Rs.${calculateTotal()}`);
}


function addItem()
{
    let product = prompt("Enter Product Name:");
    let price = Number(prompt("Enter Price:"));

    products.push(product);
    prices.push(price);

    console.log("Item Added.");
}

function removeItem()
{
    let remove = Number(prompt("Enter Item Number: "));

    while(remove<1 || remove> products.length)
    {
        remove = Number(prompt("Invalid Input! Enter Item Number: "));
    }

    products.splice(remove-1, 1);
    prices.splice(remove-1, 1);

    console.log("Item Removed.");
}

displayCart();

let choice = Number(prompt(`
1. Add Item
2. Remove Item
`));

switch(choice)
{
    case 1:
        addItem();
        break;

    case 2:
        removeItem();
        break;
}

displayCart();