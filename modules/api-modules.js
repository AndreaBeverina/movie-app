const URL_movie_list = "https://www.omdbapi.com/?apikey=7a628d44&s=star%20wars";


/* chiama la web api e restituisce elenco di film */
export const listMovies = () => {
    fetch(URL_movie_list)
    .then(response => response.json())
    .then(results => {
        const movies_result = results.Search;
        console.log(movies_result);
    })
}

/* chiama la web api e restituisce SOLO le serie TV */

const ricercaSerie = "&type=series";

export const listSeries = () => {
    let URL_serie_list = URL_movie_list + ricercaSerie;
    fetch(URL_serie_list)
    .then(response => response.json())
    .then(results => {
        const series_result = results.Search;
        console.log(series_result);
    })
}

