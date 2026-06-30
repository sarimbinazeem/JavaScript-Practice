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
        
        console.log("====Posted Request====");
        console.log(data);

    }
    catch(error)
    {
        console.log(error);
    }
}


async function updatePost()
{
    try
    {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1",
            {
                method:"PATCH",

                headers:
                {
                    "Content-Type":"application/json"
                },

                body: JSON.stringify(
                    {
                        title: "Advanced Javascript"

                    }
                )
            }
        );

        let data = await response.json();

        console.log("====Patched Request====");
        console.log(data);
    }
    catch(error)
    {
        console.log(error);
    }
}

async function main()
{
    await createPost();
    await updatePost();
}

main();