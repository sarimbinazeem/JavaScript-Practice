let pin = Number(prompt("Enter PIN: "));
let balance = Number(prompt("Enter Current Balance: "));
let amount = Number(prompt("Enter Withdrawal Amount: "));

let correctPIN = 1234;

if(correctPIN !== pin)
{
    console.log("Incorrect Pin.");
}
else if(amount>balance)
{
    console.log("Insufficient Balance.");

}
else
{
    balance -= amount;

    console.log("Transaction Successful! \n Remaining Balance: ",balance);
}