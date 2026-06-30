async function createUserPost()
{
    try
    {
        let user = await fetch("https://jsonplaceholder.typicode.com/users/1");

        let username = await user.json();

        let response = await fetch("https://jsonplaceholder.typicode.com/posts",
            {
                method:"POST",

                headers:
                {
                    "Content-Type": "application/json"
                },

                body:JSON.stringify(
                    {
                       title: "New Post",
                        body: "Created using fetched user.",
                        userId: user.id
                    }
                )
            }
        );

        let post = await response.json();
        console.log(post);
    }
    catch(error)
    {
        console.log(error);
    }
}

createUserPost();