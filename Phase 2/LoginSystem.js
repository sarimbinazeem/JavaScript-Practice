let Username = "admin";
let Password = "admin123";

let userName = prompt("Enter Username: ");

if(userName !== Username)
{
    console.log("Incorrect Username.");
}
else
{
      let password = prompt("Enter Password: ");

      if(password !== Password)
      {
        console.log("Incorrect Password.");
      }
      else
      {
        console.log("Login Successful!");
      }
}




