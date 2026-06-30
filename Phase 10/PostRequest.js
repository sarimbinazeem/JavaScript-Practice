async function createPost()
{
    try
    {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts",
            {
                method:"POST",

                headers:
                {
                    "Content-Type":"application/json"
                },

                body:JSON.stringify(
                    {
                        title: "JavaScript",
                        body: "Learning Fetch API",
                        userId: 1
                    }
                )
            }
        );

        let data = await response.json();

        console.log(data);

    }
    catch(error)
    {
        console.log(error);
    }
}

createPost();