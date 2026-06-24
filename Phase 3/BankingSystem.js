let balance =0 ;
let money;
let option;
let isRunning = true;

do
{
    console.log("\n=====Banking Systeem=====\n");
    console.log("1. Deposit");
    console.log("2. Withdraw");
    console.log("3. Check Balance");
    console.log("4. Exit");

     option = Number(prompt("Enter Your Choice: "));

    while(option<1 || option>4)
    {
        option = Number(prompt("Inalid Option! Enter Again: "));
    }

    switch(option)
    {
        case 1:
             money = Number(prompt("Enter Amount To Deposit: "));
            while(money <=0)
            {
                money = Number(prompt("Invalid Amount! Enter Amount To Deposit: "));
            }
            balance += money;
            break;

        case 2:
             money = Number(prompt("Enter Amount To Withdraw: "));
            while(money <=0)
            {
                money = Number(prompt("Invalid Amount (Negative)! Enter Amount To Withdraw: "));
            }

            while(money > balance)
            {
                money = Number(prompt(`Invalid Amount (Exceeding Balance ${balance})! Enter Amount To Withdraw: `));
            }
            balance -= money;
            break;
        
        case 3:
            console.log(`Balance: ${balance}`);
            break;
        
        case 4:
            console.log("Exiting...\n");
            isRunning = false;
            break;
    }


}while( isRunning);