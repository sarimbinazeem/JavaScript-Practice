async function getTodos()
{
    try
    {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos");
        
        let todos = await response.json();

        let completed = todos.filter((todo)=>
        {
            return todo.completed;
        });

        console.log(completed);
    
    }
    catch(err)
    {
        console.log(err);
    }

}

getTodos();

