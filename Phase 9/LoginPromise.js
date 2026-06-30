let loggedIn = true;

let promise = new Promise((resolve,reject) =>
{
    if(loggedIn)
    {
        resolve("Login Successful!");
    }
    else
    {
        reject("Login Failed");
    }
});

promise.then((res) => {
    console.log(res);
})
.catch((err) =>
{
    console.log(err);
})