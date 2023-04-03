function moviesList(movieinfo) {

    let movies = []
    movieinfo.forEach(movieLine => {
        if (movieLine.includes("addMovie ")) {
            let name = movieLine.split("addMovie ")[1]
            movies.push({ name })
        } else if (movieLine.includes(" directedBy ")) {
            let [name, directorName] = movieLine.split(" directedBy ");
            let moviesObj = movies.find(el => el.name === name)
            if (moviesObj) moviesObj.director = directorName;

        } else if (movieLine.includes(" onDate ")) {
            let [name, date] = movieLine.split(" onDate ");
            let moviesObj = movies.find(el => el.name === name);
            if (moviesObj) moviesObj.date = date;
        }
    });
    movies.forEach(movieObj => {
        if (movieObj.name && movieObj.date && movieObj.director) console.log(JSON.stringify(movieObj))
    })
}
moviesList([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)