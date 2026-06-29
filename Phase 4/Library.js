let books = [ "Clean Code",  "Atomic Habits", "JavaScript Guide"];

let authors = ["Robert Martin", "James Clear","MDN"];

let pages = [ 464,320,850];

console.log("========Library========");

let choice = Number(prompt(`
    1. Search Book
    2. Add Book
    3. Remove Book
    4. Display Books`));

while(choice<1 || choice >4)
{
    choice = Number(prompt(` Invalid Option!
    1. Search Book
    2. Add Book
    3. Remove Book
    4. Display Books`));
}

switch(choice)
{
    case 1:
        let search = prompt("Enter A Book Name: ");
        let found = false;

        for(let i =0; i< books.length; i++)
        {
            if(books[i].toLowerCase() === search.toLowerCase())
            {
                console.log("Book Found");
                console.log(`Title : ${books[i]}`);
                console.log(`Author : ${authors[i]}`);
                console.log(`Pages : ${pages[i]}`);        
                
                found = true;
                break;
            }


        }

        if(!found)
        {
            console.log(`Book Not Found.`);
        }
        break;

    case 2:

        let title = prompt("Book Name:");
        let author = prompt("Author:");
        let page = Number(prompt("Pages:"));

        books.push(title);
        authors.push(author);
        pages.push(page);

        console.log("Book Added Successfully");

        break;

    case 3:
        let remove = prompt("Enter Book Name:");

        let removed = false;

        for (let i = 0; i < books.length; i++) {

            if (books[i].toLowerCase() === remove.toLowerCase())
            {

                books.splice(i, 1);
                authors.splice(i, 1);
                pages.splice(i, 1);

                console.log("Book Removed");

                removed = true;
                break;
            }
        }

        if (!removed) {
            console.log("Book Not Found");
        }      

        break;
        
    case 4:

        console.log("===== Books =====");

        for (let i = 0; i < books.length; i++) 
        {

            console.log(  `
                           ${i + 1}.
                           Title : ${books[i]}
                           Author : ${authors[i]}
                            Pages : ${pages[i]}
                         -------------------------`);

        }
        break;

    default:
        console.log("Invalid Option Entered!");
}