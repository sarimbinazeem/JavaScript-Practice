async function getUsers()
{
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users");

        let users = await response.json();

        console.log(users);

        console.log("========User Names========")

        users.forEach((user) => {
            console.log(user.name);
        });

    }
    catch(err)
    {
        console.log(err);
    }
}

getUsers();