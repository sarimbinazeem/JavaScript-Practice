let movies = [ "Interstellar",  "Inception",  "Avengers"];

let ratings = [  8.7,  8.8, 8.1];

let years = [ 2014, 2010,  2019];


function displayMovies() {

    console.log("===== Movies =====");

    movies.forEach((movie, index) => {
      console.log(`
        ${index + 1}.
        Movie : ${movie}
        Rating : ${ratings[index]}
        Year : ${years[index]}
        ---------------------`);
    });
}

function addMovie() {

    let movie = prompt("Movie Name:");
    let rating = Number(prompt("Rating:"));
    let year = Number(prompt("Year:"));

    movies.push(movie);
    ratings.push(rating);
    years.push(year);

    console.log("Movie Added.");
}

function removeMovie()
{
    let remove = prompt("Enter Movie Name To Remove:");

    let removed = false;

    for(let i=0 ; i< movies.length; i++)
    {
        if(movies[i].toLowerCase() === remove.toLowerCase())
        {
            movies.splice(i, 1);
            ratings.splice(i, 1);
            years.splice(i, 1);

            console.log("Movie Removed.");

            removed = true;
            break;
        }
    }

    if (!removed) 
    {
        console.log("Movie Not Found.");
    }
}

function searchMovie() {

    let search = prompt("Movie Name:");

    let found = false;

    for (let i = 0; i < movies.length; i++) {

        if (movies[i].toLowerCase() === search.toLowerCase()) {

            console.log(`
            Movie : ${movies[i]}
            Rating : ${ratings[i]}
            Year : ${years[i]}`);

            found = true;
            break;
        }
    }

    if (!found) {
        console.log("Movie Not Found.");
    }
}

function showTopMovies()
{
    console.log("===== Rating Above 8 =====");

    let topMovies = movies.filter((movie,index) => ratings[index] >8 );

    topMovies.forEach(movie => console.log(movie));
}

let choice = Number(prompt(`
1. Add Movie
2. Search Movie
3. Remove Movie
4. Show All Movies
5. Movies Above Rating 8
`));

switch (choice) {

    case 1:
        addMovie();
        displayMovies();
        break;

    case 2:
        searchMovie();
        break;

    case 3:
        removeMovie();
        displayMovies();
        break;

    case 4:
        displayMovies();
        break;

    case 5:
        showTopMovies();
        break;

    default:
        console.log("Invalid Choice.");
}