const URL_movie_list = "https://www.omdbapi.com/?apikey=7a628d44&s=star%20wars";

export const listMovies = () => {
    fetch(URL_movie_list)
    .then(response => response.json())
    .then(results => {
        const movies_result = results.Search;
        console.log(movies_result);
    })
}