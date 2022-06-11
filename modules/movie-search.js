import { URL_base } from "../modules/api-utilities.js";


/* Film */

export const movieSearch = async (t, type,indice) => {
    let url = `${URL_base}t=${t}&type=${type}`;

    if(indice == 4 && url.includes("star%20wars")){
        url = `${URL_base}t=star%20wars&type=${type}`;
    }

    const response = await fetch(url);
    const result = await response.json();

    viewItems(result,indice);
}

const viewItems = (item,indice) => {
    const div_ID = `film-${indice}`;
    const title_ID = `film-title-${indice}`;
    const year_ID = `film-year-${indice}`;
    replaceMovieContent(item,div_ID,title_ID,year_ID);
}

const replaceMovieContent = (movie, divider_ID, title_ID, year_ID) => {
    const div = document.getElementById(divider_ID);
    const title_child = document.getElementById(title_ID);
    const year_child = document.getElementById(year_ID);

    const h3 = document.createElement("h3");
    const text = document.createTextNode(movie.Title);
    h3.appendChild(text);

    const h4 = document.createElement("h4");
    const text2 = document.createTextNode(movie.Year);
    h4.appendChild(text2);

    div.replaceChild(h3,title_child);
    div.replaceChild(h4,year_child);
    div.style.backgroundImage = `url(${movie.Poster})`;
}